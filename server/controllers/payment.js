const axios = require("axios");
require('dotenv').config();
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

// Payment Controller
const makePayment = async (req, res) => {
  const PAYMENT_BASE_URL = process.env.NEXT_PUBLIC_PAYMENT_BASE_URL || "https://api.phonepe.com/apis/hermes";
  const MERCHANT_ID = process.env.NEXT_PUBLIC_MERCHANT_ID || "MYZKONLINE";
  const PAYMENT_REDIRECT_URL = process.env.NEXT_PUBLIC_PAYMENT_REDIRECT_URL || "https://myzk.in";
  const SALT_KEY = process.env.NEXT_PUBLIC_SALT_KEY || "40d6e6d2-5b5a-4e37-8335-e7a05f6ba1a9";
  const SALT_INDEX = process.env.NEXT_PUBLIC_SALT_INDEX || "1";

  console.log("NEXT_PUBLIC_PAYMENT_BASE_URL", PAYMENT_BASE_URL);
  console.log("NEXT_PUBLIC_MERCHANT_ID", MERCHANT_ID);
  console.log("NEXT_PUBLIC_PAYMENT_REDIRECT_URL", PAYMENT_REDIRECT_URL);
  console.log("NEXT_PUBLIC_SALT_KEY", SALT_KEY);
  console.log("NEXT_PUBLIC_SALT_INDEX", SALT_INDEX);

  const { mobile, total, orderId } = req.body;

  try {
    const transactionId = orderId || "ORD-" + uuidv4().slice(-8);

    const payload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: transactionId,
      merchantUserId: "MUID-" + uuidv4().slice(-6),
      amount: total,
      redirectUrl: `${PAYMENT_REDIRECT_URL}/api/status/${transactionId}`,
      redirectMode: "POST",
      callbackUrl: `${PAYMENT_REDIRECT_URL}/api/status/${transactionId}`,
      mobileNumber: mobile,
      paymentInstrument: { type: "PAY_PAGE" },
    };

    const dataPayload = JSON.stringify(payload);
    const dataBase64 = Buffer.from(dataPayload).toString("base64");

    const fullURL = dataBase64 + "/pg/v1/pay" + SALT_KEY;
    const dataSha256 = crypto.createHash("sha256").update(fullURL).digest("hex");
    const checksum = `${dataSha256}###${SALT_INDEX}`;

    const UAT_PAY_API_URL = `${PAYMENT_BASE_URL}/pg/v1/pay`;

    const response = await axios.post(
      UAT_PAY_API_URL,
      { request: dataBase64 },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
        },
      }
    );

    const redirectUrl = response.data.data.instrumentResponse.redirectInfo.url;
    if (redirectUrl) {
      res.status(200).json({ redirectUrl });
    } else {
      res.status(500).json({ error: "No redirect URL received from payment API." });
    }
  } catch (error) {
    console.error("Payment error:", error.response?.data || error.message);
    res.status(500).json({
      error: error.response?.data || "An error occurred during payment processing.",
    });
  }
};

module.exports = { makePayment };

// const axios = require("axios");
// const crypto = require("crypto");
// const { v4: uuidv4 } = require("uuid");




// // Payment Controller
// const makePayment = async (req, res) => {
//         console.log("NEXT_PUBLIC_PAYMENT_BASE_URL", process.env.NEXT_PUBLIC_PAYMENT_BASE_URL);
//     console.log("NEXT_PUBLIC_MERCHANT_ID", process.env.NEXT_PUBLIC_MERCHANT_ID);
//     console.log("NEXT_PUBLIC_PAYMENT_REDIRECT_URL", process.env.NEXT_PUBLIC_PAYMENT_REDIRECT_URL);
//     console.log("NEXT_PUBLIC_SALT_KEY", process.env.NEXT_PUBLIC_SALT_KEY);
//     console.log("NEXT_PUBLIC_SALT_INDEX", process.env.NEXT_PUBLIC_SALT_INDEX);
//   const { mobile, total, orderId } = req.body;

//   try {
//     const transactionId = orderId || "ORD-" + uuidv4().slice(-8);

//     const payload = {
//       merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
//       merchantTransactionId: transactionId,
//       merchantUserId: "MUID-" + uuidv4().slice(-6),
//       amount: total,
//       redirectUrl: `${process.env.NEXT_PUBLIC_PAYMENT_REDIRECT_URL}/api/status/${transactionId}`,
//       redirectMode: "POST",
//       callbackUrl: `${process.env.NEXT_PUBLIC_PAYMENT_REDIRECT_URL}/api/status/${transactionId}`,
//       mobileNumber: mobile,
//       paymentInstrument: { type: "PAY_PAGE" },
//     };

//     const dataPayload = JSON.stringify(payload);
//     const dataBase64 = Buffer.from(dataPayload).toString("base64");

//     const fullURL = dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;
//     const dataSha256 = crypto.createHash("sha256").update(fullURL).digest("hex");
//     const checksum = `${dataSha256}###${process.env.NEXT_PUBLIC_SALT_INDEX}`;

//     const UAT_PAY_API_URL = `${process.env.NEXT_PUBLIC_PAYMENT_BASE_URL}/pg/v1/pay`;

//     const response = await axios.post(
//       UAT_PAY_API_URL,
//       { request: dataBase64 },
//       {
//         headers: {
//           accept: "application/json",
//           "Content-Type": "application/json",
//           "X-VERIFY": checksum,
//         },
//       }
//     );

//     const redirectUrl = response.data.data.instrumentResponse.redirectInfo.url;
//     if (redirectUrl) {
//       res.status(200).json({ redirectUrl });
//     } else {
//       res.status(500).json({ error: "No redirect URL received from payment API." });
//     }
//   } catch (error) {
//     console.error("Payment error:", error.response?.data || error.message);
//     res.status(500).json({
//       error: error.response?.data || "An error occurred during payment processing.",
//     });
//   }
// };

// module.exports = { makePayment };

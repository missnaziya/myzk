const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const axios = require("axios");
const { sendEmail } = require("../utills/email");
require("dotenv").config();

const DELIVERY_PINCODE_VERIFY_URL =
  "http://smarttrack.ctbsplus.dtdc.com/ratecalapi/PincodeApiCall";
const DELIVERY_BOOK_SHIPMENT_URL =
// "https://dtdcapi.shipsy.io/api/customer/integration/consignment/softdata";        // live
  "https://demodashboardapi.shipsy.in/api/customer/integration/consignment/softdata";  // demo



  const getCities = async (req, res) => {
    const uniqueCities = await prisma.shippingDetails.findMany({
      select: {
        city: true,
      },
      distinct: ['city'],
    });
  
    const citiesArray = uniqueCities.map((item) => item.city); // Extract city names into an array
  
    console.log(citiesArray);
  
    return res.status(200).json({
      success: true,
      cities: citiesArray,
    });
  };
  const getStates = async (req, res) => {
    const uniqueCities = await prisma.shippingDetails.findMany({
      select: {
        state: true,
      },
      distinct: ['state'],
    });
  
    const statesArray = uniqueCities.map((item) => item.state); // Extract city names into an array
  
    console.log(statesArray);
  
    return res.status(200).json({
      success: true,
      states: statesArray,
    });
  };
  

  
  const verifyPincode = async (req, res) => {
  // Price calculation function
function calculatePrice(weight, locationType) {
  // Pricing table
  const pricing = {
      "INCITY": { base: 34, per500g: 16, perKgAbove5: 22 },
      "REGION": { base: 38, per500g: 18, perKgAbove5: 25 },
      "ZONE": { base: 43, per500g: 24, perKgAbove5: 41 },
      "METRO": { base: 59, per500g: 43, perKgAbove5: 82 },
      "ROI-A": { base: 61, per500g: 47, perKgAbove5: 88 },
      "ROI-B": { base: 65, per500g: 50, perKgAbove5: 95 },
      "SPECIAL DESTINATION": { base: 74, per500g: 61, perKgAbove5: 108 }
  };

  // Validate location type
  if (!pricing[locationType]) {
      throw new Error("Invalid location type");
  }

  // Get pricing details
  const { base, per500g, perKgAbove5 } = pricing[locationType];

  // Base 500 GM cost
  let cost = base;

  // // Additional cost for weight between 500 GM and 5 KG
  // if (weight > 0.5 && weight <= 5) {
  //     let additionalUnits = Math.ceil((weight - 0.5) / 0.5); // Rounds up to nearest 500 GM
  //     cost += additionalUnits * per500g;
  // } 
  
  // // Additional cost for weight above 5 KG
  // else if (weight > 5) {
  //     let extraAbove5Kg = Math.ceil(weight - 5); // Rounds up to nearest KG
  //     cost += (10 * per500g) + (extraAbove5Kg * perKgAbove5);
  // }

  return cost;
}
  const { orgPincode, desPincode } = req.body;

  const url = DELIVERY_PINCODE_VERIFY_URL;
  const headers = {
    "Content-Type": "application/json",
    Cookie: 'GCLB="ce916d3ca633f33a"', // Replace with a valid cookie if required
  };

  try {
    const response = await axios.post(
      url,
      { orgPincode, desPincode },
      { headers }
    );
    console.log("shippingData:::",response?.data?.ZIPCODE_RESP?.[0]?.MESSAGE);
    if (response?.data?.ZIPCODE_RESP?.[0]?.MESSAGE == "SUCCESS"){
      // add here
      const shippingDetail = await prisma.shippingDetails.findFirst({
        where: {
          destinationPincode: desPincode,
        },
      });
      // const city = shippingData.city;
      const shippingCost = calculatePrice(0.5, shippingDetail.destinationCategory);
    
      
      
const shippingData = { ...shippingDetail, shippingCost }; // Avoids modifying a possibly immutable object

return res.status(200).json({
  success: true,
  message: "*Service Available.",
  shippingDetails: shippingData,
});
      // console.log("cost",cost);
      
      // // shippingData.shippingCost = cost;
      // console.log("shippingData",shippingData);
      //   // ✅ Return shipping data if found
      //   return res.status(200).json({
      //     success: true,
      //     message: "*Service Available.",
      //     // message: "Pincode verified successfully",
      //     shippingDetails: shippingData || "No matching data found",
      //   });
      
    }

    res.status(400).json({ success: false, message: "*Service not Available" });
      // res.status(200).json(response.data);
  } catch (error) {
    if (error.response) {
      res
        .status(error.response.status)
        .json({ error: error.response.data || "Error verifying pincode" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

const bookShipment = async (req, res) => {
  // console.log();
  const {email, consignments } = req.body; // The data sent from the frontend

  const url = DELIVERY_BOOK_SHIPMENT_URL;
  const headers = {
    "api-key": "b01ed3562b088ab9c52822e3c18f9e",
    "Content-Type": "application/json",
  };

  const data = {
    consignments: consignments, // Consignment data from the frontend
  };

  try {
    // Send data to external API
    const response = await axios.post(url, data, { headers });


    // Send an order confirmation email
const to = email;
await sendEmail({
  to: to,  // Admin email
  subject: "New Order Placed - Myzk",  // Static subject
  text: "A new order has been placed on Myzk.", // Plain text fallback
  html: `
    <html>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
        <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; padding: 20px;">
          <tr>
            <td style="text-align: center; padding: 20px;">
              <h1 style="color: #333333;">New Order Placed</h1>
              <p style="font-size: 16px; color: #555555;">A new order has been placed on Myzk.</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; font-size: 16px; color: #333333;">
              <p><strong>Order ID:</strong> #MYZK123456</p>
              <p><strong>Customer Name:</strong> John Doe</p>
              <p><strong>Email Address:</strong> johndoe@example.com</p>
              <p><strong>Total Amount:</strong> ₹1599.00</p>
              <h2 style="border-bottom: 2px solid #4CAF50; padding-bottom: 5px;">Order Summary</h2>
              <table width="100%" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
                <thead>
                  <tr>
                    <th align="left" style="border-bottom: 1px solid #ddd; padding: 8px;">Product</th>
                    <th align="center" style="border-bottom: 1px solid #ddd; padding: 8px;">Qty</th>
                    <th align="right" style="border-bottom: 1px solid #ddd; padding: 8px;">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="border-bottom: 1px solid #ddd; padding: 8px;">Wireless Headphones</td>
                    <td align="center" style="border-bottom: 1px solid #ddd; padding: 8px;">1</td>
                    <td align="right" style="border-bottom: 1px solid #ddd; padding: 8px;">₹999.00</td>
                  </tr>
                  <tr>
                    <td style="border-bottom: 1px solid #ddd; padding: 8px;">Phone Case</td>
                    <td align="center" style="border-bottom: 1px solid #ddd; padding: 8px;">2</td>
                    <td align="right" style="border-bottom: 1px solid #ddd; padding: 8px;">₹300.00</td>
                  </tr>
                </tbody>
              </table>
              <p style="text-align: right; font-size: 18px; margin-top: 10px;"><strong>Grand Total: ₹1599.00</strong></p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; text-align: center;">
              <a href="https://myzk.in" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #ffffff; background-color: #4CAF50; border-radius: 5px; text-decoration: none;">View Order Details</a>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
});

    // Send the external API's response back to the frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error in backend:", error.message);
    res.status(500).json({ error: error.message });
  }
};
module.exports = { verifyPincode, bookShipment,getCities,getStates };

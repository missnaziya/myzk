const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const axios = require("axios");
require("dotenv").config();

const DELIVERY_PINCODE_VERIFY_URL =
  "http://smarttrack.ctbsplus.dtdc.com/ratecalapi/PincodeApiCall";
const DELIVERY_BOOK_SHIPMENT_URL =
  "https://demodashboardapi.shipsy.in/api/customer/integration/consignment/softdata";



  
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
  console.log();
  const { consignments } = req.body; // The data sent from the frontend

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

    // Send the external API's response back to the frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error in backend:", error.message);
    res.status(500).json({ error: error.message });
  }
};
module.exports = { verifyPincode, bookShipment };

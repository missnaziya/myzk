const express = require("express");
const router = express.Router();



// Import the controller function for verifying the pincode
const { verifyPincode } = require("../controllers/delivery");
const { bookShipment } = require("../controllers/delivery");

// // Route for verifying the pincode
// router.route('/verify-pincode').post(verifyPincode);

// console.log("contact.....router");

// Import the contact form controller functions
// const {
//   createContactForm,   // For submitting the contact form
//   getContactForm,      // For admin to get a specific form by ID
//   getAllContactForms,  // For admin to get all contact forms
//   deleteContactForm    // For deleting a specific contact form
// } = require('../controllers/contact');

router.route("/verify-pincode").post(verifyPincode);
router.route("/book-shipment").post(bookShipment);

module.exports = router;

const express = require("express");

const router = express.Router();

const {
  getAllSupportTickets,
  createSupportTicket,
  getAllSupportTicketsByUserId,
  deleteSupportTicketsByTicketId,
  deleteSupportTicket,
  getSingleSupportTicket
} = require("../controllers/support_ticket");

// Route to get all support tickets or create a new support ticket
router.route("/").get(getAllSupportTickets).post(createSupportTicket);

// Route to get all support tickets for a specific user
router.route("/:userId").get(getAllSupportTicketsByUserId);

// Route to delete support ticket by ticket id 
router.route("/:ticketId").delete(deleteSupportTicketsByTicketId);

// Route to get a single support ticket by userId and ticketId, and delete a ticket
router.route("/:userId/:ticketId").get(getSingleSupportTicket).delete(deleteSupportTicket);

module.exports = router;
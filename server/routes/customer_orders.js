const express = require("express");

const router = express.Router();

const {
  getCustomerOrder,
  createCustomerOrder,
  updateCustomerOrder,
  deleteCustomerOrder,
  getAllOrders,
  getCustomerOrderByEmail,
  cancelCustomerOrder,
  updateCustomerOrderStatus,
} = require("../controllers/customer_orders");

router
  .route("/")
  .get(getAllOrders)
  .post(createCustomerOrder)
  .patch(updateCustomerOrderStatus);

router
  .route("/:id")
  .get(getCustomerOrder)
  .put(updateCustomerOrder)
  .delete(deleteCustomerOrder);

//  route for canceling an order
router.route("/cancel/:id").put(cancelCustomerOrder);

router.route("/email/:email").get(getCustomerOrderByEmail);

module.exports = router;

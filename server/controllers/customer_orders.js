// const { Message } = require("@mui/icons-material");
const { PrismaClient } = require("@prisma/client");
const { sendEmail } = require("../utills/email");
const prisma = new PrismaClient();

async function createCustomerOrder(request, response) {
  console.log("nazz");
  
  try {
    const {
      name,
      lastname,
      phone,
      email,
      company,
      adress,
      apartment,
      postalCode,
      status,
      city,
      country,
      orderNotice,
      total,
    } = request.body;
    const corder = await prisma.customer_order.create({
      data: {
        name,
        lastname,
        phone,
        email,
        company,
        adress,
        apartment,
        postalCode,
        status,
        city,
        country,
        orderNotice,
        total,
      },
    });

    console.log("c_order",corder);
    
    await sendEmail({
      to: email,  // Admin email
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
                <h2 style="border-bottom: 2px solid #4CAF50; padding-bottom: 5px;">Order Summary</h2>
                  <p><strong>Order ID:</strong> ${corder.id}</p>
                  <p><strong>Customer Name:</strong> ${corder.name}</p>
                  <p><strong>Email Address:</strong> ${corder.email}</p>
                  <p><strong>Total Amount:</strong>${corder.total} </p>
                
                  <p style="text-align: right; font-size: 18px; margin-top: 10px;"><strong>Grand Total: ₹${corder.total}</strong></p>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px; text-align: center;">
                  <a href="https://myzk.in" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #ffffff; background-color: #4CAF50; border-radius: 5px; text-decoration: none;">View Details</a>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `
    });
    // customer_order
    // const from = "tesmist"
    // await sendEmail(
    //   from,
    //   email, // Customer email
    //   'Order Confirmation', // Email subject
    //   `Thank you for your order! Your order ID is ${corder.id}` // Email body
    // )

    return response.status(201).json(corder);
  } catch (error) {
    console.error("Error creating order:", error);
    return response.status(500).json({ error: "Error creating order" });
  }
}

async function updateCustomerOrder(request, response) {
  try {
    const { id } = request.params;
    const {
      name,
      lastname,
      phone,
      email,
      company,
      adress,
      apartment,
      postalCode,
      dateTime,
      status,
      city,
      country,
      orderNotice,
      total,
    } = request.body;

    const existingOrder = await prisma.customer_order.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingOrder) {
      return response.status(404).json({ error: "Order not found" });
    }

    const updatedOrder = await prisma.customer_order.update({
      where: {
        id: existingOrder.id,
      },
      data: {
        name,
        lastname,
        phone,
        email,
        company,
        adress,
        apartment,
        postalCode,
        dateTime,
        status,
        city,
        country,
        orderNotice,
        total,
      },
    });

    return response.status(200).json(updatedOrder);
  } catch (error) {
    return response.status(500).json({ error: "Error updating order" });
  }
}
async function updateCustomerOrderStatus(request, response) {
  try {
    // const { id } = request.params;
    const { status,id } = request.body;

    const existingOrder = await prisma.customer_order.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingOrder) {
      return response.status(404).json({ error: "Order not found" });
    }

    const updatedOrder = await prisma.customer_order.update({
      where: {
        id: existingOrder.id,
      },
      data: {
        status,
      },
    });

    return response.status(200).json(updatedOrder);
  } catch (error) {
    return response.status(500).json({ error: "Error updating order" });
  }
}
async function cancelCustomerOrder(request, response) {

  try {
    const { id } = request.params;

    // const {
    //   name,
    //   lastname,
    //   phone,
    //   email,
    //   company,
    //   adress,
    //   apartment,
    //   postalCode,
    //   dateTime,
    //   status,
    //   city,
    //   country,
    //   orderNotice,
    //   total,
    // } = request.body;

    const existingOrder = await prisma.customer_order.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingOrder) {
      return response.status(404).json({ error: "Order not found" });
    }

    // If the order is already cancelled or shipped, return an error
    if (
      existingOrder.status === "cancelled" ||
      existingOrder.status === "shipped"
    ) {
      return response.status(400).json({
        message:
          "Order cannot be cancelled because it is already processed or shipped",
      });
    }
    const updatedOrder = await prisma.customer_order.update({
      where: {
        id: existingOrder.id,
      },
      data: {
        status: "cancelled",
      },
    });

    return response.status(200).json({ message: "order cancelled." });
  } catch (error) {
    return response.status(500).json({ error: "Error cancelling order" });
  }
}
// // Cancel Order Controller
// async function cancelOrder(req, res){
//   try {
//     const { orderNumber } = req.body; // Get order number from request body
//     // Fetch the order by its orderNumber
//     const order = await prisma.customer_order.findUnique({
//       where: { orderNumber },
//     });
//     if (!order) {
//       return res.status(404).json({ message: 'Order not found' });
//     }
//     // Check if the order can be cancelled (e.g., not already cancelled or shipped)
//     if (order.status === 'Cancelled' || order.status === 'Shipped') {
//       return res.status(400).json({
//         message: 'Order cannot be cancelled because it is already processed or shipped',
//       });
//     }
//   }catch(error){
//     console.log(error);
//     return response.status(500).json({error:"Error canceling order"})

//   }

// }

async function deleteCustomerOrder(request, response) {
  try {
    const { id } = request.params;
    await prisma.customer_order.delete({
      where: {
        id: id,
      },
    });
    return response.status(204).send();
  } catch (error) {
    return response.status(500).json({ error: "Error deleting order" });
  }
}

async function getCustomerOrder(request, response) {
  const { id } = request.params;
  const order = await prisma.customer_order.findUnique({
    where: {
      id: id,
    },
  });
  if (!order) {
    return response.status(404).json({ error: "Order not found" });
  }
  return response.status(200).json(order);
}

async function getAllOrders(request, response) {
  try {
    const orders = await prisma.customer_order.findMany({});
    return response.json(orders);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Error fetching orders" });
  }
}

async function getCustomerOrderByEmail(request, response) {
  const { email } = request.params;
  const orders = await prisma.customer_order.findMany({
    where: {
      email: email,
    },
  });
  if (!orders) {
    return response.status(404).json({ error: "Orders not found" });
  }
  return response.status(200).json(orders);
}

module.exports = {
  createCustomerOrder,
  updateCustomerOrder,
  deleteCustomerOrder,
  getCustomerOrder,
  getAllOrders,
  getCustomerOrderByEmail,
  cancelCustomerOrder,
  updateCustomerOrderStatus,
};

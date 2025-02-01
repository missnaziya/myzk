// pages/refund-policy.js
import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";

const ShippingDeliveryPolicy = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ paddingY: 5 }}>
        {/* Policy Sections */}
        <Typography
          variant="h4"
          sx={{ color: "hsl(23.43deg 89.74% 54.12%)", marginBottom: 2 }}
        >
          Shipping Delivery Policy
        </Typography>

        <Box
          className="refund"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography paragraph>
          We provide shipping for all prepaid orders deliverable to any location within the country. Delivery times vary by location once products are dispatched from our warehouse: for Delhi NCR, orders typically arrive within 2-3 days, while for other locations within the country, delivery takes approximately 6-7 days. It is the user’s responsibility to provide accurate and truthful information to avoid any delays or potential loss of the product.
   </Typography>
      
       
       
        </Box>

       

 

     

        <Box
          className="refund"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography paragraph>
   
   MYZK reserves the right to verify the information and details provided by users at any time. If, upon verification, any information is found to be inaccurate or misleading, MYZK may, at its sole discretion, reject the user’s registration and prohibit the user from accessing services on this website and affiliated sites without prior notice. In cases where non-delivery results from user error, such as an incorrect name, address, or contact number, any additional costs associated with re-delivery will be the responsibility of the user placing the order.
   
             </Typography>
        </Box>
        <Box
          className="refund"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        >
         <Typography paragraph>
For any shipment-related inquiries or support, please contact us at

<Link href="mailto:operations@myzk.in"> operations@myzk.in</Link>
  or call 
<Link href="tel:+91 8588862126">+91 8588862126</Link>.

          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ShippingDeliveryPolicy;

"use client"; // Ensure this directive is present for Client-Side functionality

import React from "react";
import { Box, Container, Typography, TextField, Button, Icon } from "@mui/material";


const TrackOrder = () => {
  return (
    <Box component="section" sx={{ pt: 5 }}>
      <Container maxWidth="sm">
        <Box
          sx={{
            background: "#ffffff",
            borderRadius: 2,
            padding: 3,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
            marginBottom: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#f37321", display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}
          >
            <Icon className="bi bi-box-seam" sx={{ fontSize: 30, mr: 1 }} />
            Track status of your shipment.
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            action="/track_order.php"
            method="post"
          >
            <TextField
              fullWidth
              label="Enter tracking number"
              name="tracking_number"
              required
              sx={{ mb: 2, maxWidth: 400 }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#f37321 !important" ,
                color: "white",
                padding: "10px 20px",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              Track Order
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TrackOrder;
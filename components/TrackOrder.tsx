"use client"; // Ensure this directive is present for Client-Side functionality

import React, { useState } from "react";
import axios from "axios";
import { Box, Container, Typography, TextField, Button, Icon, CircularProgress } from "@mui/material";

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState(null);

  const handleTrackOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setTrackingData(null);

    try {
      const response = await axios.post(
        "https://blktracksvc.dtdc.com/dtdc-api/rest/JSONCnTrk/getTrackDetails",
        {
          trkType: "cnno",
          strcnno: trackingNumber,
          addtnlDtl: "Y",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "<X-Access-Token>", // Replace with actual token
          },
        }
      );
      setTrackingData(response.data);
    } catch (err) {
      setError("Failed to fetch tracking details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          <Box component="form" onSubmit={handleTrackOrder} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <TextField
              fullWidth
              label="Enter tracking number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              required
              sx={{ mb: 2, maxWidth: 400 }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#f37321 !important",
                color: "white",
                padding: "10px 20px",
                "&:hover": {
                  color: "black",
                },
              }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Track Order"}
            </Button>
          </Box>
          {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
          {trackingData && (
            <Box sx={{ mt: 3, p: 2, background: "#f5f5f5", borderRadius: 2 }}>
              <Typography variant="h6">Tracking Details:</Typography>
              <pre>{JSON.stringify(trackingData, null, 2)}</pre>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default TrackOrder;

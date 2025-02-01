// "use client"; // Ensures this component runs in the client environment
// import React, { useEffect, useState } from "react";
// import { toast } from "react-hot-toast"; // Optional: for notifications
// import { useSession } from "next-auth/react"; // Import the useSession hook
// import {
//   Box,
//   Button,
//   CircularProgress,
//   Typography,
//   Paper,
// } from "@mui/material";

// const ProfilePage = () => {
//   const { data: session, status } = useSession(); // Get session data
//   const [user, setUser] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (status === "loading") {
//       // Show a loading spinner while loading the session
//       return;
//     }
    
//     if (session) {
//         console.log(session,"session");
        
//       // Set user data from session
//       setUser({
//         name: session.user.name,
//         email: session.user.email,
//       });
//     } else {
//       // Handle case where there is no session
//       setError("No user session found");
//       toast.error("Please log in to view your profile"); // Show error notification
//     }
//     setLoading(false);
//   }, [session, status]);

//   if (loading) return <CircularProgress />;
//   if (error) return <Typography color="error">{error}</Typography>;

//   return (
//     <Box
//       sx={{
//         p: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         maxWidth: 600,
//         margin: '0 auto',
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         User Profile
//       </Typography>
//       <Paper elevation={3} sx={{ padding: 3, width: '100%' }}>
//         <Box sx={{ mb: 2 }}>
//           <Typography variant="h6">
//             <strong>Name:</strong> {user?.name}
//           </Typography>
//           <Typography variant="h6">
//             <strong>Email:</strong> {user?.email}
//           </Typography>
//           {/* Add other user details as needed */}
//         </Box>

//         {/* Add more sections for editing profile, changing password, etc. */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Button variant="contained" color="secondary" className="bg-black" onClick={() => console.log("Edit Profile")}>
//             Edit Profile
//           </Button>
//           {/* <Button variant="outlined" color="secondary" onClick={() => console.log("Change Password")}>
//             Change Password
//           </Button> */}
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default ProfilePage;



"use client"; // Ensures this component runs in the client environment
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast"; // Optional: for notifications
import { useSession } from "next-auth/react"; // Import the useSession hook
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  TextField,
  Paper,
} from "@mui/material";

const ProfilePage = () => {
  const { data: session, status } = useSession(); // Get session data
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  interface FormValues {
    name: string;
    email: string;
  }

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (status === "loading") {
      // Show a loading spinner while loading the session
      return;
    }

    if (session) {
      // Set user data from session
      const { name = "", email = "" } = session.user || { name: "", email: "" };
      setUser({ name, email });
      setFormValues({ name, email } as FormValues);
    } else {
      // Handle case where there is no session
      setError("No user session found");
      toast.error("Please log in to view your profile"); // Show error notification
    }
    setLoading(false);
  }, [session, status]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formValues.name && formValues.email) {
      toast.success("Profile updated successfully");
      setEditMode(false);
    } else {
      toast.error("Please fill out all fields");
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, width: "100%" }}>
        {editMode ? (
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
              <Button
                variant="contained"
                color="secondary"
                className="bg-black"
                type="submit"
              >
                Update
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </Button>
            </Box>
          </form>
        ) : (
          <>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">
                <strong>Name:</strong> {user?.name || "Test"}
              </Typography>
              <Typography variant="h6">
                <strong>Email:</strong> {user?.email}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                color="secondary"
                className="bg-black"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default ProfilePage;


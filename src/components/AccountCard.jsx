import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

const AccountCard = () => {
  return (
    <Card sx={{ minWidth: 250 }}>
      <CardContent>
        <Avatar sx={{ bgcolor: "#4ddb00ff", mb: 1 }}>A</Avatar>
        <Typography variant="h6">John Doe</Typography>
        <Typography variant="body2" color="text.secondary">
          john.doe@example.com
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 1,
            cursor: "pointer",
            color: "primary.main",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          View Profile
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 0.5,
            cursor: "pointer",
            color: "error.main",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Log Out
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AccountCard;

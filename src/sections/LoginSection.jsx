import React, { useState, useContext } from "react";
import {
  Card,
  Button,
  TextField,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";
import { loginUser } from "../api/api";
import { AuthContext } from "../context/AuthContext";

export default function LoginSection() {
  const { setToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser({ email, password });
      const { token } = res;
      setToken(token); // store token globally + in localStorage
      alert("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ maxWidth: 360, p: 3, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>
      </form>
    </Card>
  );
}

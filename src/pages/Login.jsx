import { LoginOutlined } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import logo from "../assets/Logo (1).png";

export default function Login() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "calc(100vh - 120px)",
        display: "grid",
        placeItems: "center",
        px: 2,
        py: { xs: 2, md: 7 },
        backgroundColor: "#f7fbf7",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 430,
          minHeight: { xs: "calc(100vh - 90px)", md: "auto" },
          p: { xs: 3, sm: 5 },
          backgroundColor: "#fff",
          boxShadow: "0 12px 40px rgba(54,110,65,.08)",
        }}
      >
        <Box component="img" src={logo} alt="GreenShop" sx={{ width: { xs: 180, md: 120 }, mb: 2 }} />
        <Typography component="h1" sx={{ mt: 2, color: "#3d3d3d", fontSize: 30, fontWeight: 600 }}>
          Welcome back
        </Typography>
        <Typography sx={{ mt: 1, color: "#777", fontSize: 14 }}>
          Sign in to manage your GreenShop account.
        </Typography>
        <Stack component="form" gap={2} sx={{ mt: 4 }}>
          <TextField label="Email address" type="email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <Button
            type="submit"
            sx={{
              mt: 1,
              py: 1.4,
              color: "#fff",
              backgroundColor: "#46a358",
              fontWeight: 700,
              textTransform: "none",
              "&:hover": { backgroundColor: "#398c49" },
            }}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

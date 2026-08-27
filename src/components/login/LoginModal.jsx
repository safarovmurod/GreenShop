import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "motion/react";

const LoginModal = ({ open = false, onClose, onAuth }) => {
  const [isLogin, setIsLogin] = useState(false); // Агар false бошад, саҳифаи Register кушода мешавад
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!open) return null;

  // Login: email ва password лозим
  const handleLogin = () => {
    if (!email || !password) {
      setError("Enter your email and password");
      return;
    }
    setError("");
    onAuth({ name: email.split("@")[0], email, phone: "", code: "" });
  };

  // Register: name, email ва password лозим
  const handleRegister = () => {
    if (!name || !email || !password) {
      setError("Fill in all fields");
      return;
    }
    setError("");
    onAuth({ name, email, phone: "", code: "" });
  };

  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      sx={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        zIndex: 1000,
        px: 2
      }}
    >
      <Box 
        component={motion.div}
        initial={{ opacity: 0, scale: 0.92, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        sx={{ 
          backgroundColor: "#fff", 
          width: "100%", 
          maxWidth: "480px", 
          borderRadius: "4px", 
          boxShadow: "0px 4px 20px rgba(0,0,0,0.15)", 
          position: "relative",
          p: { xs: 3, md: 5 },
          borderTop: "4px solid #46A358"
        }}
      >
        
        {/* Тугмаи пӯшидан (X) */}
        <IconButton 
          onClick={onClose}
          sx={{ position: "absolute", top: 15, right: 15, color: "#727272" }}
        >
          <CloseIcon />
        </IconButton>

        {/* Сарлавҳаҳо: Login | Register */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 4 }}>
          <Typography 
            onClick={() => setIsLogin(true)}
            sx={{ 
              fontWeight: "bold", 
              fontSize: "20px", 
              cursor: "pointer", 
              color: isLogin ? "#46A358" : "#3D3D3D" 
            }}
          >
            Login
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "#eaeaea" }}>|</Typography>
          <Typography 
            onClick={() => setIsLogin(false)}
            sx={{ 
              fontWeight: "bold", 
              fontSize: "20px", 
              cursor: "pointer", 
              color: !isLogin ? "#46A358" : "#3D3D3D" 
            }}
          >
            Register
          </Typography>
        </Box>

        {/* ФОРМАИ LOGIN */}
        {isLogin ? (
          <Box component={motion.div} key="login" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 2 }}>
              Enter your username and password to login.
            </Typography>

            <TextField 
              fullWidth 
              placeholder="almamun_uxui@outlook.com" 
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              variant="outlined" 
              size="small" 
              sx={{ mb: 2.5, backgroundColor: "#fff" }}
            />

            <Box sx={{ position: "relative", mb: 1.5 }}>
              <TextField 
                fullWidth 
                type="password" 
                placeholder="password123"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                variant="outlined" 
                size="small" 
                sx={{ backgroundColor: "#fff" }}
              />
              <VisibilityOffOutlinedIcon 
                sx={{ position: "absolute", right: 12, top: 10, color: "#727272", fontSize: "20px", cursor: "pointer" }} 
              />
            </Box>

            <Box sx={{ textAlign: "right", mb: 3 }}>
              <Typography sx={{ fontSize: "14px", color: "#46A358", cursor: "pointer", display: "inline-block" }}>
                Forgot Password?
              </Typography>
            </Box>

            <Button 
              fullWidth 
              variant="contained" 
              component={motion.button}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLogin}
              sx={{ 
                backgroundColor: "#46A358", 
                color: "#fff", 
                py: 1.2, 
                fontWeight: "bold", 
                textTransform: "none", 
                borderRadius: "4px",
                mb: 4,
                "&:hover": { backgroundColor: "#3a8a49" } 
              }}
            >
              Login
            </Button>
          </Box>
        ) : (
          /* ФОРМАИ REGISTER */
          <Box component={motion.div} key="register" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 2 }}>
              Enter your email and password to register.
            </Typography>

            <TextField 
              fullWidth 
              placeholder="Username" 
              value={name}
              onChange={(event) => setName(event.target.value)}
              variant="outlined" 
              size="small" 
              sx={{ mb: 2, backgroundColor: "#fff" }}
            />

            <TextField 
              fullWidth 
              placeholder="Enter your email address" 
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              variant="outlined" 
              size="small" 
              sx={{ mb: 2, backgroundColor: "#fff" }}
            />

            <Box sx={{ position: "relative", mb: 2 }}>
              <TextField 
                fullWidth 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                variant="outlined" 
                size="small" 
                sx={{ backgroundColor: "#fff" }}
              />
              <VisibilityOffOutlinedIcon 
                sx={{ position: "absolute", right: 12, top: 10, color: "#727272", fontSize: "20px", cursor: "pointer" }} 
              />
            </Box>

            <TextField 
              fullWidth 
              type="password" 
              placeholder="Confirm Password" 
              variant="outlined" 
              size="small" 
              sx={{ mb: 3, backgroundColor: "#fff" }}
            />

            <Button 
              fullWidth 
              variant="contained" 
              component={motion.button}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleRegister}
              sx={{ 
                backgroundColor: "#46A358", 
                color: "#fff", 
                py: 1.2, 
                fontWeight: "bold", 
                textTransform: "none", 
                borderRadius: "4px",
                mb: 4,
                "&:hover": { backgroundColor: "#3a8a49" } 
              }}
            >
              Register
            </Button>
          </Box>
        )}

        {error && (
          <Typography sx={{ mb: 2, fontSize: "13px", color: "#d32f2f" }}>{error}</Typography>
        )}

        {/* Хатти "Or with" */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#eaeaea" }} />
          <Typography sx={{ px: 2, fontSize: "13px", color: "#727272" }}>
            {isLogin ? "Or login with" : "Or register with"}
          </Typography>
          <Box sx={{ flex: 1, height: "1px", backgroundColor: "#eaeaea" }} />
        </Box>

        {/* Тугмаҳои Google ва Facebook */}
        <Button 
          fullWidth 
          variant="outlined" 
          startIcon={<GoogleIcon sx={{ color: "#EA4335" }} />}
          sx={{ 
            borderColor: "#eaeaea", 
            color: "#3D3D3D", 
            py: 1, 
            textTransform: "none", 
            borderRadius: "4px", 
            mb: 2,
            fontWeight: "normal",
            "&:hover": { borderColor: "#46A358", backgroundColor: "rgba(70,163,88,0.02)" } 
          }}
        >
          {isLogin ? "Login with Google" : "Continue with Google"}
        </Button>

        <Button 
          fullWidth 
          variant="outlined" 
          startIcon={<FacebookIcon sx={{ color: "#1877F2" }} />}
          sx={{ 
            borderColor: "#eaeaea", 
            color: "#3D3D3D", 
            py: 1, 
            textTransform: "none", 
            borderRadius: "4px",
            fontWeight: "normal",
            "&:hover": { borderColor: "#46A358", backgroundColor: "rgba(70,163,88,0.02)" } 
          }}
        >
          {isLogin ? "Login with Facebook" : "Continue with Facebook"}
        </Button>

      </Box>
    </Box>
  );
};

export default LoginModal;
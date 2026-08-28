import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "motion/react";
import logo from "../../assets/Logo (1).png";

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
        backgroundColor: { xs: "#fff", md: "rgba(0, 0, 0, 0.5)" }, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        zIndex: 1000,
        overflowY: "auto",
        px: { xs: 0, md: 2 }
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
          maxWidth: { xs: "100%", md: "480px" }, 
          minHeight: { xs: "100vh", md: "auto" },
          borderRadius: { xs: 0, md: "4px" }, 
          boxShadow: { xs: "none", md: "0px 4px 20px rgba(0,0,0,0.15)" }, 
          position: "relative",
          p: { xs: 3, md: 5 },
          borderTop: { xs: "none", md: "4px solid #46A358" }
        }}
      >
        
        {/* Тугмаи пӯшидан (X) */}
        <IconButton 
          onClick={onClose}
          sx={{ position: "absolute", top: 15, right: 15, color: "#727272" }}
        >
          <CloseIcon />
        </IconButton>

        {/* Логотип дар мобилӣ (мувофиқи Figma) */}
        <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center", mt: 5, mb: 4 }}>
          <Box component="img" src={logo} alt="GreenShop" sx={{ width: "180px", height: "auto" }} />
        </Box>

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
                py: { xs: 1.5, md: 1.2 }, 
                fontWeight: "bold", 
                textTransform: "none", 
                borderRadius: { xs: "30px", md: "4px" },
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
                py: { xs: 1.5, md: 1.2 }, 
                fontWeight: "bold", 
                textTransform: "none", 
                borderRadius: { xs: "30px", md: "4px" },
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
          startIcon={<GoogleIcon sx={{ color: { xs: "#fff", md: "#EA4335" } }} />}
          sx={{ 
            borderColor: { xs: "#4285F4", md: "#eaeaea" }, 
            color: { xs: "#fff", md: "#3D3D3D" }, 
            backgroundColor: { xs: "#4285F4", md: "transparent" },
            py: { xs: 1.4, md: 1 }, 
            textTransform: "none", 
            borderRadius: { xs: "30px", md: "4px" }, 
            mb: 2,
            fontWeight: { xs: "bold", md: "normal" },
            "&:hover": { borderColor: { xs: "#3b78e7", md: "#46A358" }, backgroundColor: { xs: "#3b78e7", md: "rgba(70,163,88,0.02)" } } 
          }}
        >
          {isLogin ? "Login with Google" : "Continue with Google"}
        </Button>

        <Button 
          fullWidth 
          variant="outlined" 
          startIcon={<FacebookIcon sx={{ color: { xs: "#fff", md: "#1877F2" } }} />}
          sx={{ 
            borderColor: { xs: "#3B5998", md: "#eaeaea" }, 
            color: { xs: "#fff", md: "#3D3D3D" }, 
            backgroundColor: { xs: "#3B5998", md: "transparent" },
            py: { xs: 1.4, md: 1 }, 
            textTransform: "none", 
            borderRadius: { xs: "30px", md: "4px" },
            fontWeight: { xs: "bold", md: "normal" },
            mb: { xs: 3, md: 0 },
            "&:hover": { borderColor: { xs: "#2d4373", md: "#46A358" }, backgroundColor: { xs: "#2d4373", md: "rgba(70,163,88,0.02)" } } 
          }}
        >
          {isLogin ? "Login with Facebook" : "Continue with Facebook"}
        </Button>

        {/* Сатри поёнӣ дар мобилӣ (мувофиқи Figma) */}
        <Typography
          sx={{ display: { xs: "block", md: "none" }, textAlign: "center", fontSize: "14px", color: "#3D3D3D" }}
        >
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Box
            component="span"
            onClick={() => setIsLogin(!isLogin)}
            sx={{ color: "#46A358", fontWeight: "bold", cursor: "pointer" }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </Box>
        </Typography>

      </Box>
    </Box>
  );
};

export default LoginModal;
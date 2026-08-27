import React from "react";
import { Box, Typography, TextField, Button, Avatar } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const AccountDetails = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: 6, px: { xs: "20px", md: "0" } }}>
      
      {/* Навигарияи боло (Header - мисли дизайн) */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eaeaea", pb: 3, mb: 5 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "22px", color: "#46A358" }}>GREENSHOP</Typography>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Typography sx={{ color: "#3D3D3D", cursor: "pointer" }}>Home</Typography>
          <Typography sx={{ color: "#3D3D3D", cursor: "pointer", fontWeight: "bold" }}>Shop</Typography>
          <Typography sx={{ color: "#3D3D3D", cursor: "pointer" }}>Plant Care</Typography>
          <Typography sx={{ color: "#3D3D3D", cursor: "pointer" }}>Blogs</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography sx={{ cursor: "pointer" }}>🔍</Typography>
          <Typography sx={{ cursor: "pointer" }}>🛒</Typography>
          <Button variant="contained" sx={{ backgroundColor: "#46A358", color: "#fff", textTransform: "none", px: 3, "&:hover": { backgroundColor: "#3a8a49" } }}>
            Login
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "50px" }}>
        
        {/* Менюи тарафи чап (My Account Sidebar) */}
        <Box sx={{ width: "250px", flexShrink: 0, backgroundColor: "#FBFBFB", p: 3, height: "fit-content" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px", color: "#3D3D3D", mb: 3 }}>
            My Account
          </Typography>
          
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, color: "#46A358", fontWeight: "bold", cursor: "pointer", borderLeft: "4px solid #46A358", pl: 1.5, py: 0.5 }}>
              <PersonOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>Account Details</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, color: "#3D3D3D", cursor: "pointer", pl: 2, py: 0.5, "&:hover": { color: "#46A358" } }}>
              <LocationOnOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px" }}>Address</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, color: "#3D3D3D", cursor: "pointer", pl: 2, py: 0.5, "&:hover": { color: "#46A358" } }}>
              <ShoppingBagOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px" }}>Orders</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, color: "#3D3D3D", cursor: "pointer", pl: 2, py: 0.5, "&:hover": { color: "#46A358" } }}>
              <FavoriteBorderOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px" }}>Wishlist</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, color: "#3D3D3D", cursor: "pointer", pl: 2, py: 0.5, "&:hover": { color: "#46A358" } }}>
              <DescriptionOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px" }}>Reports</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, color: "#3D3D3D", cursor: "pointer", pl: 2, py: 0.5, "&:hover": { color: "#46A358" } }}>
              <DownloadOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px" }}>Downloads</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, color: "#3D3D3D", cursor: "pointer", pl: 2, py: 0.5, "&:hover": { color: "#46A358" } }}>
              <HeadsetMicOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px" }}>Support</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, color: "#D32F2F", cursor: "pointer", pl: 2, pt: 3, borderTop: "1px solid #eaeaea", mt: 2 }}>
              <LogoutOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>Logout</Typography>
            </Box>
          </Box>
        </Box>

        {/* Формаи маълумоти шахсӣ дар тарафи рост */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D", mb: 3 }}>
            Personal Information
          </Typography>

          <Box sx={{ display: "flex", gap: "30px", mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>First Name *</Typography>
              <TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Last Name *</Typography>
              <TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: "30px", mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Email address *</Typography>
              <TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Phone Number *</Typography>
              <TextField fullWidth size="small" defaultValue="+966" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "30px", mb: 5 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Username *</Typography>
              <TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
            <Box sx={{ flex: 1, display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
              <Avatar sx={{ backgroundColor: "rgba(70,163,88,0.1)", color: "#46A358" }}>🌿</Avatar>
              <Button variant="contained" size="small" sx={{ backgroundColor: "#46A358", color: "#fff", textTransform: "none", fontWeight: "bold", "&:hover": { backgroundColor: "#3a8a49" } }}>
                Change
              </Button>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#d32f2f" } }}>
                Remove
              </Typography>
            </Box>
          </Box>

          {/* Иваз кардани парол */}
          <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D", mb: 3 }}>
            Password change
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Current password</Typography>
            <Box sx={{ position: "relative" }}>
              <TextField fullWidth type="password" size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
              <VisibilityOffOutlinedIcon sx={{ position: "absolute", right: 12, top: 8, color: "#727272", fontSize: "20px", cursor: "pointer" }} />
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>New password</Typography>
            <Box sx={{ position: "relative" }}>
              <TextField fullWidth type="password" size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
              <VisibilityOffOutlinedIcon sx={{ position: "absolute", right: 12, top: 8, color: "#727272", fontSize: "20px", cursor: "pointer" }} />
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Confirm new password</Typography>
            <Box sx={{ position: "relative" }}>
              <TextField fullWidth type="password" size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
              <VisibilityOffOutlinedIcon sx={{ position: "absolute", right: 12, top: 8, color: "#727272", fontSize: "20px", cursor: "pointer" }} />
            </Box>
          </Box>

          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: "#46A358", 
              color: "#fff", 
              px: 4, 
              py: 1.2, 
              fontWeight: "bold", 
              textTransform: "none", 
              borderRadius: "4px",
              "&:hover": { backgroundColor: "#3a8a49" } 
            }}
          >
            Save Change
          </Button>

        </Box>

      </Box>
    </Box>
  );
};

export default AccountDetails;
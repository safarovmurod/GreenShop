import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import GrassIcon from "@mui/icons-material/Grass";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const Footer = () => {
  return (
    <Box component="footer" sx={{ display: { xs: "none", md: "block" }, backgroundColor: "#FBFBFB", mt: 10, pt: 5, pb: 3 }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: "20px", md: "0" } }}>
        
     
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: { xs: "column", md: "row" }, 
            justifyContent: "space-between", 
            gap: 4, 
            mb: 6, 
            backgroundColor: "#FBFBFB", 
            p: 3 
          }}
        >
          
          {/* Блоки 1 */}
          <Box data-aos="fade-up" sx={{ flex: 1, maxWidth: "240px" }}>
            <Box sx={{ color: "#46A358", mb: 2 }}>
              <LocalFloristIcon sx={{ fontSize: 40 }} />
            </Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "17px", color: "#3D3D3D", mb: 1 }}>
              Garden Care
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#727272", lineHeight: 1.6 }}>
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </Typography>
          </Box>

          {/* Блоки 2 */}
          <Box data-aos="fade-up" data-aos-delay="120" sx={{ flex: 1, maxWidth: "240px" }}>
            <Box sx={{ color: "#46A358", mb: 2 }}>
              <GrassIcon sx={{ fontSize: 40 }} />
            </Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "17px", color: "#3D3D3D", mb: 1 }}>
              Plant Renovation
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#727272", lineHeight: 1.6 }}>
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </Typography>
          </Box>

          {/* Блоки 3 */}
          <Box data-aos="fade-up" data-aos-delay="240" sx={{ flex: 1, maxWidth: "240px" }}>
            <Box sx={{ color: "#46A358", mb: 2 }}>
              <WaterDropIcon sx={{ fontSize: 40 }} />
            </Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "17px", color: "#3D3D3D", mb: 1 }}>
              Watering Garden
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#727272", lineHeight: 1.6 }}>
              We are an online plant shop offering a wide range of cheap and trendy plants.
            </Typography>
          </Box>

          {/* Блоки 4: Newsletter */}
          <Box sx={{ flex: 1.2 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "17px", color: "#3D3D3D", mb: 2 }}>
              Would you like to join newsletters?
            </Typography>
            <Box 
              sx={{ 
                display: "flex", 
                mb: 2, 
                boxShadow: "0px 0px 10px rgba(0,0,0,0.05)", 
                borderRadius: "6px", 
                overflow: "hidden" 
              }}
            >
              <TextField 
                placeholder="enter your email address..." 
                variant="outlined" 
                size="small"
                sx={{ backgroundColor: "#fff", flex: 1, "& fieldset": { border: "none" } }}
              />
              <Button 
                sx={{ 
                  backgroundColor: "#46A358", 
                  color: "#fff", 
                  px: 4, 
                  fontWeight: "bold", 
                  borderRadius: 0, 
                  textTransform: "none", 
                  "&:hover": { backgroundColor: "#3a8a49" } 
                }}
              >
                Join
              </Button>
            </Box>
            <Typography sx={{ fontSize: "13px", color: "#727272", lineHeight: 1.6 }}>
              We usually post offers and challenges in newsletter. We’re your online houseplant destination.
            </Typography>
          </Box>

        </Box>

        {/* Қисми 2: Сабзи кандӣ (Green Contact Bar) */}
        <Box 
          sx={{ 
            backgroundColor: "rgba(70, 163, 88, 0.1)", 
            display: "flex", 
            flexDirection: { xs: "column", md: "row" }, 
            justifyContent: "space-between", 
            alignItems: "center", 
            p: 3, 
            mb: 5, 
            gap: 2 
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "22px", color: "#46A358" }}>
            GREENSHOP
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnOutlinedIcon sx={{ color: "#46A358" }} />
            <Typography sx={{ fontSize: "14px", color: "#3D3D3D" }}>70 West Buckingham Ave. Farmingdale, NY 11735</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailOutlinedIcon sx={{ color: "#46A358" }} />
            <Typography sx={{ fontSize: "14px", color: "#3D3D3D" }}>contact@greenshop.com</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocalPhoneOutlinedIcon sx={{ color: "#46A358" }} />
            <Typography sx={{ fontSize: "14px", color: "#3D3D3D" }}>+88 01911 717 490</Typography>
          </Box>
        </Box>

        {/* Қисми 3: Линкаҳо ва Шабакаҳои иҷтимоӣ */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", gap: 4, mb: 6 }}>
          
          <Box>
            <Typography data-aos="fade-up" data-aos-delay="100" sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D", mb: 2 }}>My Account</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>My Account</Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>Our stores</Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>Contact us</Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>Career</Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>Specials</Typography>
            </Box>
          </Box>

          <Box>
            <Typography data-aos="fade-up" data-aos-delay="200" sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D", mb: 2 }}>Help & Guide</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>Help Center</Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>How to Buy</Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>Shipping & Delivery</Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>Product Policy</Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>How to Return</Typography>
            </Box>
          </Box>

          <Box>
            <Typography data-aos="fade-up" data-aos-delay="300" sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D", mb: 2 }}>Categories</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>House Plants</Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>Potter Plants</Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>Seeds</Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>Small Plants</Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", cursor: "pointer", "&:hover": { color: "#46A358" } }}>Accessories</Typography>
            </Box>
          </Box>

          <Box>
            <Typography data-aos="fade-up" data-aos-delay="400" sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D", mb: 2 }}>Social Media</Typography>
            <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
              <Box sx={{ width: 30, height: 30, backgroundColor: "rgba(70, 163, 88, 0.1)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "#46A358", cursor: "pointer" }}>
                <FacebookIcon sx={{ fontSize: 18 }} />
              </Box>
              <Box sx={{ width: 30, height: 30, backgroundColor: "rgba(70, 163, 88, 0.1)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "#46A358", cursor: "pointer" }}>
                <InstagramIcon sx={{ fontSize: 18 }} />
              </Box>
              <Box sx={{ width: 30, height: 30, backgroundColor: "rgba(70, 163, 88, 0.1)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "#46A358", cursor: "pointer" }}>
                <TwitterIcon sx={{ fontSize: 18 }} />
              </Box>
              <Box sx={{ width: 30, height: 30, backgroundColor: "rgba(70, 163, 88, 0.1)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "#46A358", cursor: "pointer" }}>
                <LinkedInIcon sx={{ fontSize: 18 }} />
              </Box>
              <Box sx={{ width: 30, height: 30, backgroundColor: "rgba(70, 163, 88, 0.1)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "#46A358", cursor: "pointer" }}>
                <YouTubeIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>

            <Typography data-aos="fade-up" data-aos-delay="500" sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D", mb: 2 }}>We accept</Typography>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {/* Нишонҳои кортҳо тавассути матни услубӣ ё бандҳо */}
              <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "#1A1F71", backgroundColor: "#fff", px: 1, py: 0.5, borderRadius: "4px", border: "1px solid #ddd" }}>PayPal</Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "#EB001B", backgroundColor: "#fff", px: 1, py: 0.5, borderRadius: "4px", border: "1px solid #ddd" }}>mastercard</Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "#1434CB", backgroundColor: "#fff", px: 1, py: 0.5, borderRadius: "4px", border: "1px solid #ddd" }}>VISA</Typography>
            </Box>
          </Box>

        </Box>

        {/* Қисми 4: Copyright */}
        <Box data-aos="fade-up" sx={{ borderTop: "1px solid #eaeaea", pt: 3, textAlign: "center" }}>
          <Typography sx={{ fontSize: "14px", color: "#3D3D3D" }}>
            © 2021 GreenShop. All Rights Reserved.
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default Footer;
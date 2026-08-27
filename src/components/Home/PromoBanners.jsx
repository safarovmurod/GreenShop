import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Суратҳоро метавонед ба суратҳои дилхоҳи худ иваз кунед
import bannerImg1 from "../../assets/image 14.png"; 
import bannerImg2 from "../../assets/image 15.png";

const PromoBanners = () => {
  return (
    <Box 
      sx={{ 
        maxWidth: "1200px", 
        mx: "auto", 
        my: 8, 
        px: { xs: "20px", md: "0" },
        display: "flex", 
        flexDirection: { xs: "column", md: "row" }, 
        gap: "30px" 
      }}
    >
      
      {/* Баннери якум: Summer Cactus & Succulents */}
      <Box 
        sx={{ 
          flex: 1, 
          backgroundColor: "#FBFBFB", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          p: { xs: 3, md: 4 }, 
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Сурати растанӣ дар тарафи чап */}
        <Box 
          component="img" 
          src={bannerImg1} 
          alt="Summer Cactus" 
          sx={{ width: "45%", height: "auto", objectFit: "contain" }} 
        />

        {/* Матнҳо ва тугма дар тарафи рост */}
        <Box sx={{ width: "50%", textAlign: "right" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: { xs: "16px", md: "18px" }, color: "#3D3D3D", mb: 1, textTransform: "uppercase" }}>
            Summer Cactus <br /> & Succulents
          </Typography>
          <Typography sx={{ fontSize: "13px", color: "#727272", mb: 2, lineHeight: 1.5 }}>
            We are an online plant shop offering a wide range of cheap and trendy plants.
          </Typography>
          <Button 
            variant="contained" 
            endIcon={<ArrowForwardIcon sx={{ fontSize: "16px !important" }} />}
            sx={{ 
              backgroundColor: "#46A358", 
              color: "#fff", 
              fontSize: "13px", 
              fontWeight: "bold", 
              textTransform: "none", 
              borderRadius: "6px",
              px: 2.5,
              py: 1,
              "&:hover": { backgroundColor: "#3a8a49" } 
            }}
          >
            Find More
          </Button>
        </Box>
      </Box>

      {/* Баннери дуюм: Styling Trends & Much More */}
      <Box 
        sx={{ 
          flex: 1, 
          backgroundColor: "#FBFBFB", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          p: { xs: 3, md: 4 }, 
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Сурати растанӣ дар тарафи чап */}
        <Box 
          component="img" 
          src={bannerImg2} 
          alt="Styling Trends" 
          sx={{ width: "45%", height: "auto", objectFit: "contain" }} 
        />

        {/* Матнҳо ва тугма дар тарафи рост */}
        <Box sx={{ width: "50%", textAlign: "right" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: { xs: "16px", md: "18px" }, color: "#3D3D3D", mb: 1, textTransform: "uppercase" }}>
            Styling Trends <br /> & Much More
          </Typography>
          <Typography sx={{ fontSize: "13px", color: "#727272", mb: 2, lineHeight: 1.5 }}>
            We are an online plant shop offering a wide range of cheap and trendy plants.
          </Typography>
          <Button 
            variant="contained" 
            endIcon={<ArrowForwardIcon sx={{ fontSize: "16px !important" }} />}
            sx={{ 
              backgroundColor: "#46A358", 
              color: "#fff", 
              fontSize: "13px", 
              fontWeight: "bold", 
              textTransform: "none", 
              borderRadius: "6px",
              px: 2.5,
              py: 1,
              "&:hover": { backgroundColor: "#3a8a49" } 
            }}
          >
            Find More
          </Button>
        </Box>
      </Box>

    </Box>
  );
};

export default PromoBanners;
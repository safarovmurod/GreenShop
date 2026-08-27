import React from "react";
import { Box, Typography } from "@mui/material";
import { plants } from "../../data/api";

const RelatedProducts = () => {
  // Барои мисол 5 та маҳсулоти аввалро ҳамчун Related Products мегирем
  const relatedList = plants.slice(3, 8);

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: 10, px: { xs: "20px", md: "0" } }}>
      
      {/* Сарлавҳа */}
      <Typography 
        sx={{ 
          fontSize: "18px", 
          fontWeight: "bold", 
          color: "#46A358", 
          mb: 3, 
          borderBottom: "1px solid #eaeaea", 
          pb: 1.5 
        }}
      >
        Releted Products
      </Typography>

      {/* Grid-и маҳсулот (5 сутун дар компютер) */}
      <Box 
        sx={{ 
          display: "grid", 
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(5, 1fr)" }, 
          gap: "20px",
          mb: 4
        }}
      >
        {relatedList.map((plant) => (
          <Box key={plant.id} sx={{ cursor: "pointer" }}>
            {/* Замина ва сурати маҳсулот */}
            <Box 
              sx={{ 
                backgroundColor: "#FBFBFB", 
                height: "220px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                position: "relative",
                mb: 2
              }}
            >
              <Box 
                component="img" 
                src={plant.images[0]} 
                alt={plant.name} 
                sx={{ width: "80%", height: "80%", objectFit: "contain" }} 
              />
            </Box>

            {/* Номи маҳсулот */}
            <Typography sx={{ fontSize: "15px", color: "#3D3D3D", mb: 0.5 }}>
              {plant.name}
            </Typography>

            {/* Нарх */}
            <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "#46A358" }}>
              ${plant.price}.00
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Нуқтаҳои слайдер (Dots) дар поён */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", border: "1px solid #46A358", cursor: "pointer" }} />
        <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#46A358", cursor: "pointer" }} />
        <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", border: "1px solid #46A358", cursor: "pointer" }} />
      </Box>

    </Box>
  );
};

export default RelatedProducts;
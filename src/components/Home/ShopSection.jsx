import React, { useState } from "react";
import { Box, Typography, Button, Slider, Pagination } from "@mui/material";
import { plants } from "../../data/api";
import saleBannerImg from "../../assets/Super Sale Banner.png";

// Маълумоти сода ва дақиқи категорияҳо мувофиқи Figma
const categoriesList = [
  { name: "House Plants", count: 33 },
  { name: "Potter Plants", count: 12 },
  { name: "Seeds", count: 65 },
  { name: "Small Plants", count: 39 },
  { name: "Big Plants", count: 23 },
  { name: "Succulents", count: 17 },
  { name: "Trerrariums", count: 19 },
  { name: "Gardening", count: 13 },
  { name: "Accessories", count: 18 },
];

// Маълумоти содаи андозаҳо мувофиқи Figma
const sizesList = [
  { name: "Small", count: 119 },
  { name: "Medium", count: 86 },
  { name: "Large", count: 78 },
];

const ShopSection = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 9; // Дар ҳар саҳифа маҳз 9 та маҳсулот

  // Бурида гирифтани 9 та маҳсулот барои саҳифаи ҷорӣ
  const startIndex = (page - 1) * itemsPerPage;
  const currentPlants = plants.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", width: "100%", px: { xs: "20px", md: "0" }, mt: 5, mb: 10 }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "40px" }}>
        
        {/* Қисми чап: Филтрҳо ва Баннер */}
        <Box sx={{ display: { xs: "none", md: "block" }, width: { xs: "100%", md: "250px" }, flexShrink: 0 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px", mb: 2, color: "#3D3D3D" }}>
            Categories
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", mb: 4, pl: 1 }}>
            {categoriesList.map((cat, idx) => (
              <Box key={idx} sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                <Typography sx={{ fontSize: "15px", color: idx === 0 ? "#46A358" : "#3D3D3D", fontWeight: idx === 0 ? "bold" : "normal" }}>
                  {cat.name}
                </Typography>
                <Typography sx={{ fontSize: "15px", color: idx === 0 ? "#46A358" : "#3D3D3D" }}>
                  ({cat.count})
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography sx={{ fontWeight: "bold", fontSize: "18px", mb: 2, color: "#3D3D3D" }}>
            Price Range
          </Typography>
          <Box sx={{ pl: 1, mb: 4 }}>
            <Slider
              defaultValue={[39, 1230]}
              min={0}
              max={1500}
              sx={{ color: "#46A358", "& .MuiSlider-thumb": { border: "2px solid #fff" } }}
            />
            <Typography sx={{ fontSize: "15px", color: "#3D3D3D", mb: 2 }}>
              Price: <span style={{ color: "#46A358", fontWeight: "bold" }}>$39 - $1230</span>
            </Typography>
            <Button sx={{ backgroundColor: "#46A358", color: "#fff", px: 3, py: 0.5, fontWeight: "bold", textTransform: "none", borderRadius: "6px", "&:hover": { backgroundColor: "#3a8a49" } }}>
              Filter
            </Button>
          </Box>

          <Typography sx={{ fontWeight: "bold", fontSize: "18px", mb: 2, color: "#3D3D3D" }}>
            Size
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", mb: 4, pl: 1 }}>
            {sizesList.map((size, idx) => (
              <Box key={idx} sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                <Typography sx={{ fontSize: "15px", color: "#3D3D3D" }}>{size.name}</Typography>
                <Typography sx={{ fontSize: "15px", color: "#3D3D3D" }}>({size.count})</Typography>
              </Box>
            ))}
          </Box>

          <Box
            component="img"
            src={saleBannerImg}
            alt="Super Sale"
            sx={{ width: "100%", objectFit: "cover", backgroundColor: "#f0f0f0", height: "350px", borderRadius: "0px" }}
          />
        </Box>

        {/* Қисми рост: Маҳсулот ва Пагинация */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, borderBottom: "1px solid #f0f0f0", pb: 1 }}>
            <Box sx={{ display: "flex", gap: "30px" }}>
              <Typography sx={{ color: "#46A358", fontWeight: "bold", borderBottom: "2px solid #46A358", pb: 1, cursor: "pointer" }}>
                All Plants
              </Typography>
              <Typography sx={{ color: "#3D3D3D", cursor: "pointer", pb: 1 }}>New Arrivals</Typography>
              <Typography sx={{ color: "#3D3D3D", cursor: "pointer", pb: 1 }}>Sale</Typography>
            </Box>
            <Typography sx={{ fontSize: "15px", color: "#3D3D3D", cursor: "pointer" }}>
              Short by: Default sorting ∨
            </Typography>
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: { xs: "18px", md: "30px" }, rowGap: { xs: "28px", md: "40px" } }}>
            {currentPlants.map((plant) => (
              <Box key={plant.id} sx={{ cursor: "pointer" }}>
                <Box sx={{ backgroundColor: "#FBFBFB", height: { xs: "185px", md: "250px" }, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderRadius: { xs: 2, md: 0 } }}>
                  <Box component="img" src={plant.images[0]} alt={plant.name} sx={{ width: "80%", height: "80%", objectFit: "contain" }} />
                </Box>
                <Typography sx={{ mt: 1, fontSize: { xs: "14px", md: "16px" }, color: "#3D3D3D" }}>
                  {plant.name}
                </Typography>
                <Typography sx={{ mt: 0.5, fontSize: { xs: "16px", md: "18px" }, fontWeight: "bold", color: "#46A358" }}>
                  ${plant.price}.00
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 6 }}>
            <Pagination 
              count={Math.ceil(plants.length / itemsPerPage)} 
              page={page}
              onChange={handlePageChange}
              shape="rounded" 
              sx={{ 
                "& .MuiPaginationItem-root": { fontSize: "16px", borderRadius: "4px" }, 
                "& .Mui-selected": { backgroundColor: "#46A358 !important", color: "#fff" } 
              }} 
            />
          </Box>
        </Box>
        
      </Box>
    </Box>
  );
};

export default ShopSection;
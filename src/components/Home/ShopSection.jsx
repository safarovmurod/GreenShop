import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, Slider, Pagination, Select, MenuItem, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { motion } from "motion/react";
import { useNavigate, useOutletContext } from "react-router";
import { plants } from "../../data/api";
import SuperSaleVideo from "./SuperSaleVideo";

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
  const navigate = useNavigate();
  const { addToCart, wishlist, toggleWishlist } = useOutletContext();

  const [page, setPage] = useState(1);
  const [tab, setTab] = useState("all"); // all | new | sale
  const [sort, setSort] = useState("default");
  const [category, setCategory] = useState(""); // холӣ = ҳамаи категорияҳо
  const [size, setSize] = useState("");
  const [price, setPrice] = useState([39, 1230]);

  const videoRef = useRef(null); // барои идора кардани видеои Super Sale

  const itemsPerPage = 9; // Дар ҳар саҳифа маҳз 9 та маҳсулот

  // 1) Филтр кардан: category + price + size + All/New/Sale
  let result = plants.filter((plant) => {
    if (category && plant.categories !== category) return false;
    if (size && plant.size !== size) return false;
    if (plant.price < price[0] || plant.price > price[1]) return false;
    if (tab === "new" && !plant.isNew) return false;
    if (tab === "sale" && !plant.sale) return false;
    return true;
  });

  // 2) Сортировка
  if (sort === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
  if (sort === "name-asc") result = [...result].sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "name-desc") result = [...result].sort((a, b) => b.name.localeCompare(a.name));

  // 3) Пагинация бо массиви филтршуда ва сортшуда
  const startIndex = (page - 1) * itemsPerPage;
  const currentPlants = result.slice(startIndex, startIndex + itemsPerPage);

  // Ҳангоми иваз шудани филтр ба саҳифаи 1 бармегардем
  useEffect(() => {
    setPage(1);
  }, [category, size, tab, sort, price]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", width: "100%", px: { xs: "20px", md: "0" }, mt: 5, mb: 10 }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "40px" }}>

        {/* Қисми чап: Филтрҳо ва Баннер */}
        <Box data-aos="fade-right" sx={{ display: { xs: "none", md: "block" }, width: { xs: "100%", md: "250px" }, flexShrink: 0 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px", mb: 2, color: "#3D3D3D" }}>
            Categories
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", mb: 4, pl: 1 }}>
            {categoriesList.map((cat, idx) => (
              <Box
                key={idx}
                onClick={() => setCategory(category === cat.name ? "" : cat.name)}
                sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}
              >
                <Typography sx={{ fontSize: "15px", color: category === cat.name ? "#46A358" : "#3D3D3D", fontWeight: category === cat.name ? "bold" : "normal" }}>
                  {cat.name}
                </Typography>
                <Typography sx={{ fontSize: "15px", color: category === cat.name ? "#46A358" : "#3D3D3D" }}>
                  ({cat.count})
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography data-aos="fade-right" data-aos-delay="100" sx={{ fontWeight: "bold", fontSize: "18px", mb: 2, color: "#3D3D3D" }}>
            Price Range
          </Typography>
          <Box sx={{ pl: 1, mb: 4 }}>
            <Slider
              value={price}
              onChange={(event, value) => setPrice(value)}
              min={0}
              max={1500}
              sx={{ color: "#46A358", "& .MuiSlider-thumb": { border: "2px solid #fff" } }}
            />
            <Typography sx={{ fontSize: "15px", color: "#3D3D3D", mb: 2 }}>
              Price: <span style={{ color: "#46A358", fontWeight: "bold" }}>${price[0]} - ${price[1]}</span>
            </Typography>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setPage(1)}
              sx={{ backgroundColor: "#46A358", color: "#fff", px: 3, py: 0.5, fontWeight: "bold", textTransform: "none", borderRadius: "6px", "&:hover": { backgroundColor: "#3a8a49" } }}
            >
              Filter
            </Button>
          </Box>

          <Typography data-aos="fade-right" data-aos-delay="150" sx={{ fontWeight: "bold", fontSize: "18px", mb: 2, color: "#3D3D3D" }}>
            Size
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", mb: 4, pl: 1 }}>
            {sizesList.map((item, idx) => (
              <Box
                key={idx}
                onClick={() => setSize(size === item.name ? "" : item.name)}
                sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}
              >
                <Typography sx={{ fontSize: "15px", color: size === item.name ? "#46A358" : "#3D3D3D", fontWeight: size === item.name ? "bold" : "normal" }}>
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: "15px", color: size === item.name ? "#46A358" : "#3D3D3D" }}>
                  ({item.count})
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Super Sale: ба ҷои сурат видео (play/pause бо ref) */}
          <Box data-aos="zoom-in" data-aos-delay="200">
            <SuperSaleVideo ref={videoRef} onClick={() => videoRef.current.toggle()} />
          </Box>
        </Box>

        {/* Қисми рост: Маҳсулот ва Пагинация */}
        <Box sx={{ flex: 1 }}>
          <Box data-aos="fade-down" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, borderBottom: "1px solid #f0f0f0", pb: 1 }}>
            <Box sx={{ display: "flex", gap: "30px" }}>
              <Typography
                onClick={() => setTab("all")}
                sx={{ color: tab === "all" ? "#46A358" : "#3D3D3D", fontWeight: tab === "all" ? "bold" : "normal", borderBottom: tab === "all" ? "2px solid #46A358" : "none", pb: 1, cursor: "pointer" }}
              >
                All Plants
              </Typography>
              <Typography
                onClick={() => setTab("new")}
                sx={{ color: tab === "new" ? "#46A358" : "#3D3D3D", fontWeight: tab === "new" ? "bold" : "normal", borderBottom: tab === "new" ? "2px solid #46A358" : "none", cursor: "pointer", pb: 1 }}
              >
                New Arrivals
              </Typography>
              <Typography
                onClick={() => setTab("sale")}
                sx={{ color: tab === "sale" ? "#46A358" : "#3D3D3D", fontWeight: tab === "sale" ? "bold" : "normal", borderBottom: tab === "sale" ? "2px solid #46A358" : "none", cursor: "pointer", pb: 1 }}
              >
                Sale
              </Typography>
            </Box>

            {/* Short by: select (намуди зоҳирӣ мисли пештара) */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "15px", color: "#3D3D3D" }}>Short by:</Typography>
              <Select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                variant="standard"
                disableUnderline
                sx={{
                  fontSize: "15px",
                  color: "#3D3D3D",
                  "& .MuiSelect-select": { py: 0, pl: 1, backgroundColor: "transparent" },
                  "& .MuiSvgIcon-root": { color: "#3D3D3D" },
                }}
              >
                <MenuItem value="default">Default sorting</MenuItem>
                <MenuItem value="price-asc">Price: Low to High</MenuItem>
                <MenuItem value="price-desc">Price: High to Low</MenuItem>
                <MenuItem value="name-asc">Name: A to Z</MenuItem>
                <MenuItem value="name-desc">Name: Z to A</MenuItem>
              </Select>
            </Box>
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: { xs: "18px", md: "30px" }, rowGap: { xs: "28px", md: "40px" } }}>
            {currentPlants.map((plant, index) => (
              <Box
                component={motion.div}
                key={`${page}-${tab}-${category}-${size}-${sort}-${plant.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                onClick={() => navigate(`/shop/${plant.id}`)}
                sx={{ cursor: "pointer", "&:hover .card-icons": { opacity: 1 } }}
              >
                <Box sx={{ backgroundColor: "#FBFBFB", height: { xs: "185px", md: "250px" }, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderRadius: { xs: 2, md: 0 }, overflow: "hidden" }}>
                  <Box component="img" src={plant.images[0]} alt={plant.name} sx={{ width: "80%", height: "80%", objectFit: "contain" }} />

                  {/* Нишони Sale мисли Figma */}
                  {plant.sale && (
                    <Typography
                      component={motion.div}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.25 + index * 0.07, type: "spring", stiffness: 300 }}
                      sx={{ position: "absolute", top: 0, left: 0, px: 1, py: 0.4, backgroundColor: "#46A358", color: "#fff", fontSize: "12px", fontWeight: "bold" }}
                    >
                      {Math.round(((plant.oldPrice - plant.price) / plant.oldPrice) * 100)}% OFF
                    </Typography>
                  )}

                  {/* 3 иконка ҳангоми hover */}
                  <Box
                    className="card-icons"
                    sx={{
                      position: "absolute",
                      bottom: "12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: "10px",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <IconButton
                      component={motion.button}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Add to cart"
                      onClick={(event) => {
                        event.stopPropagation();
                        addToCart(plant);
                      }}
                      sx={{ width: 30, height: 30, backgroundColor: "#fff", color: "#46A358", "&:hover": { backgroundColor: "#46A358", color: "#fff" } }}
                    >
                      <ShoppingCartOutlinedIcon sx={{ fontSize: "17px" }} />
                    </IconButton>

                    <IconButton
                      component={motion.button}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Add to wishlist"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleWishlist(plant.id);
                      }}
                      sx={{ width: 30, height: 30, backgroundColor: "#fff", color: "#46A358", "&:hover": { backgroundColor: "#46A358", color: "#fff" } }}
                    >
                      {wishlist.includes(plant.id) ? (
                        <FavoriteIcon sx={{ fontSize: "17px" }} />
                      ) : (
                        <FavoriteBorderIcon sx={{ fontSize: "17px" }} />
                      )}
                    </IconButton>

                    <IconButton
                      component={motion.button}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="View product"
                      onClick={(event) => {
                        event.stopPropagation();
                        navigate(`/shop/${plant.id}`);
                      }}
                      sx={{ width: 30, height: 30, backgroundColor: "#fff", color: "#46A358", "&:hover": { backgroundColor: "#46A358", color: "#fff" } }}
                    >
                      <SearchIcon sx={{ fontSize: "17px" }} />
                    </IconButton>
                  </Box>
                </Box>

                <Typography sx={{ mt: 1, fontSize: { xs: "14px", md: "16px" }, color: "#3D3D3D" }}>
                  {plant.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ mt: 0.5, fontSize: { xs: "16px", md: "18px" }, fontWeight: "bold", color: "#46A358" }}>
                    ${plant.price}.00
                  </Typography>
                  {plant.sale && (
                    <Typography sx={{ mt: 0.5, fontSize: { xs: "13px", md: "15px" }, color: "#a5a5a5", textDecoration: "line-through" }}>
                      ${plant.oldPrice}.00
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 6 }}>
            <Pagination
              count={Math.ceil(result.length / itemsPerPage)}
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

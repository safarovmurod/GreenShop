import React, { useState } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router";
import { Box, Typography, Button, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { plants } from "../../data/api";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, wishlist, toggleWishlist } = useOutletContext();

  // Маҳсулот аз рӯи id-и URL пайдо мешавад (агар набошад, якумӣ)
  const product = plants.find((item) => item.id === Number(id)) || plants[0];

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // Барои иваз кардани Product Description ва Reviews

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: 6, px: { xs: "20px", md: "0" } }}>
      
      {/* Навигарияи боло (Breadcrumbs) */}
      <Typography sx={{ fontSize: "14px", color: "#727272", mb: 4 }}>
        <span
          onClick={() => navigate("/")}
          style={{ fontWeight: "bold", color: "#3D3D3D", cursor: "pointer" }}
        >
          Home
        </span>{" "}
        / Shop
      </Typography>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "50px", mb: 8 }}>
        
        {/* Қисми чап: Галереяи суратҳо */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, gap: "20px", flex: 1 }}>
          
          {/* 4 та сурати хурд */}
          <Box sx={{ display: "flex", flexDirection: { xs: "row", md: "column" }, gap: "15px", overflowX: { xs: "auto", md: "visible" } }}>
            {product.images.slice(0, 4).map((img, idx) => (
              <Box 
                key={idx}
                component="img"
                src={img}
                alt=""
                onClick={() => setSelectedImage(img)}
                sx={{ 
                  width: "100px", 
                  height: "100px", 
                  objectFit: "contain", 
                  backgroundColor: "#FBFBFB", 
                  cursor: "pointer",
                  border: selectedImage === img ? "2px solid #46A358" : "1px solid transparent",
                  p: 1,
                  borderRadius: "4px"
                }}
              />
            ))}
          </Box>

          {/* Сурати калон */}
          <Box 
            sx={{ 
              backgroundColor: "#FBFBFB", 
              flex: 1, 
              height: { xs: "330px", md: "450px" }, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              position: "relative"
            }}
          >
            <Box 
              component="img" 
              src={selectedImage} 
              alt={product.name} 
              sx={{ width: "80%", height: "80%", objectFit: "contain" }} 
            />
          </Box>

        </Box>

        {/* Қисми рост: Маълумот ва харид */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: "28px", fontWeight: "bold", color: "#3D3D3D", mb: 1 }}>
            {product.name}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eaeaea", pb: 2, mb: 3 }}>
            <Typography sx={{ fontSize: "22px", fontWeight: "bold", color: "#46A358" }}>
              ${product.price}.00
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {[...Array(4)].map((_, i) => (
                <StarIcon key={i} sx={{ color: "#FFAC0C", fontSize: "16px" }} />
              ))}
              <StarBorderIcon sx={{ color: "#FFAC0C", fontSize: "16px" }} />
              <Typography sx={{ fontSize: "14px", color: "#727272", ml: 1 }}>
                {product.reviews} Customer Review
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#3D3D3D", mb: 1 }}>
            Short Description:
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#727272", lineHeight: 1.6, mb: 3 }}>
            {product.shortDescription}
          </Typography>

          {/* Интихоби Size */}
          <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#3D3D3D", mb: 1.5 }}>
            Size:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
            {["S", "M", "L", "XL"].map((size) => (
              <Box 
                key={size}
                onClick={() => setSelectedSize(size)}
                sx={{ 
                  width: "35px", 
                  height: "35px", 
                  borderRadius: "50%", 
                  border: selectedSize === size ? "2px solid #46A358" : "1px solid #eaeaea",
                  color: selectedSize === size ? "#46A358" : "#727272",
                  fontWeight: selectedSize === size ? "bold" : "normal",
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  cursor: "pointer"
                }}
              >
                {size}
              </Box>
            ))}
          </Box>

          {/* Миқдор ва тугмаҳо */}
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 3 }, mb: 4, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#FBFBFB", borderRadius: "20px", px: 1 }}>
              <IconButton onClick={() => setQuantity(Math.max(1, quantity - 1))} sx={{ color: "#fff", backgroundColor: "#46A358", width: "28px", height: "28px", "&:hover": { backgroundColor: "#3a8a49" } }}>
                <RemoveIcon sx={{ fontSize: "16px" }} />
              </IconButton>
              <Typography sx={{ px: 2, fontWeight: "bold", fontSize: "16px" }}>{quantity}</Typography>
              <IconButton onClick={() => setQuantity(quantity + 1)} sx={{ color: "#fff", backgroundColor: "#46A358", width: "28px", height: "28px", "&:hover": { backgroundColor: "#3a8a49" } }}>
                <AddIcon sx={{ fontSize: "16px" }} />
              </IconButton>
            </Box>

            <Button
              variant="outlined"
              onClick={() => {
                addToCart(product, quantity);
                navigate("/cart");
              }}
              sx={{ borderColor: "#46A358", color: "#46A358", px: { xs: 2, md: 4 }, py: 1.2, fontWeight: "bold", borderRadius: "6px", textTransform: "none", "&:hover": { borderColor: "#3a8a49", backgroundColor: "rgba(70,163,88,0.05)" } }}
            >
              BUY NOW
            </Button>

            <Button
              variant="contained"
              onClick={() => addToCart(product, quantity)}
              sx={{ backgroundColor: "#46A358", color: "#fff", px: { xs: 2, md: 4 }, py: 1.2, fontWeight: "bold", borderRadius: "6px", textTransform: "none", "&:hover": { backgroundColor: "#3a8a49" } }}
            >
              ADD TO CART
            </Button>

            <IconButton
              onClick={() => toggleWishlist(product.id)}
              sx={{ border: "1px solid #46A358", borderRadius: "6px", p: 1.2, color: "#46A358" }}
            >
              {wishlist.includes(product.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>

          {/* Маълумоти поёнӣ */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, fontSize: "14px", color: "#727272" }}>
            <Typography sx={{ fontSize: "14px" }}><b>SKU:</b> 19957518{product.id}</Typography>
            <Typography sx={{ fontSize: "14px" }}><b>Categories:</b> {product.categories}</Typography>
            <Typography sx={{ fontSize: "14px" }}><b>Tags:</b> {product.tags.join(", ")}</Typography>
            
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "#3D3D3D" }}>Share this products:</Typography>
              <Box sx={{ display: "flex", gap: 1, color: "#3D3D3D" }}>
                <FacebookIcon sx={{ fontSize: "18px", cursor: "pointer", "&:hover": { color: "#46A358" } }} />
                <TwitterIcon sx={{ fontSize: "18px", cursor: "pointer", "&:hover": { color: "#46A358" } }} />
                <LinkedInIcon sx={{ fontSize: "18px", cursor: "pointer", "&:hover": { color: "#46A358" } }} />
                <EmailIcon sx={{ fontSize: "18px", cursor: "pointer", "&:hover": { color: "#46A358" } }} />
              </Box>
            </Box>
          </Box>

        </Box>

      </Box>

      {/* ========================================== */}
      {/* ҚИСМИ ПОЁН: Product Description & Reviews  */}
      {/* ========================================== */}
      <Box sx={{ mt: 10 }}>
        
        {/* Табҳо (Tabs) */}
        <Box sx={{ display: "flex", gap: 5, borderBottom: "1px solid #eaeaea", pb: 1.5, mb: 4 }}>
          <Typography 
            onClick={() => setActiveTab("description")}
            sx={{ 
              fontSize: "17px", 
              fontWeight: "bold", 
              cursor: "pointer", 
              color: activeTab === "description" ? "#46A358" : "#727272",
              borderBottom: activeTab === "description" ? "2px solid #46A358" : "none",
              pb: 1.5,
              mb: "-13px"
            }}
          >
            Product Description
          </Typography>
          <Typography 
            onClick={() => setActiveTab("reviews")}
            sx={{ 
              fontSize: "17px", 
              fontWeight: "bold", 
              cursor: "pointer", 
              color: activeTab === "reviews" ? "#46A358" : "#727272",
              borderBottom: activeTab === "reviews" ? "2px solid #46A358" : "none",
              pb: 1.5,
              mb: "-13px"
            }}
          >
            Reviews ({product.reviews})
          </Typography>
        </Box>

        {/* Мазмуни Tab-ҳо */}
        {activeTab === "description" ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography sx={{ fontSize: "14px", color: "#727272", lineHeight: 1.8 }}>
              {product.description}
            </Typography>
            <Typography sx={{ fontSize: "14px", color: "#727272", lineHeight: 1.8 }}>
              Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce utricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.
            </Typography>

            {/* Living Room */}
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#3D3D3D", mb: 1 }}>
                Living Room:
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", lineHeight: 1.8 }}>
                {product.livingRoom}
              </Typography>
            </Box>

            {/* Dining Room */}
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#3D3D3D", mb: 1 }}>
                Dining Room:
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", lineHeight: 1.8 }}>
                {product.diningRoom}
              </Typography>
            </Box>

            {/* Office */}
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#3D3D3D", mb: 1 }}>
                Office:
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272", lineHeight: 1.8 }}>
                {product.office}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography sx={{ fontSize: "15px", color: "#727272" }}>
              Customer reviews and ratings for this product will appear here. ({product.reviews} reviews available)
            </Typography>
          </Box>
        )}

      </Box>

    </Box>
  );
};

export default ProductDetails;
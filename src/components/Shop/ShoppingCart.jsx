import React, { useState } from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { plants } from "../../data/api";

const ShoppingCart = () => {
  // Барои мисол чанд маҳсулотро дар сават мемонем
  const [cartItems, setCartItems] = useState([
    { ...plants[0], quantity: 2 },
    { ...plants[4], quantity: 6 },
    { ...plants[5], quantity: 9 },
  ]);

  // Функсияи зиёд кардани миқдор
  const handleIncrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Функсияи кам кардани миқдор
  const handleDecrease = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Функсияи тоза кардани маҳсулот
  const handleDelete = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Ҳисоби маблағи умумӣ (Subtotal)
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 16.00;
  const total = subtotal + shipping;

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: 6, px: { xs: "20px", md: "0" } }}>
      
      {/* Навигарияи боло (Breadcrumbs) */}
      <Typography sx={{ display: { xs: "none", md: "block" }, fontSize: "14px", color: "#727272", mb: 5 }}>
        <span style={{ fontWeight: "bold", color: "#3D3D3D" }}>Home</span> / Shop / Shopping Cart
      </Typography>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "40px" }}>
        
        {/* Қисми чап: Ҷадвали маҳсулот */}
        <Box sx={{ flex: 2 }}>
          
          {/* Сарлавҳаи ҷадвал */}
          <Box sx={{ display: { xs: "none", md: "grid" }, gridTemplateColumns: "2fr 1fr 1fr 1fr 0.5fr", pb: 2, borderBottom: "1px solid #eaeaea", fontWeight: "bold", color: "#3D3D3D" }}>
            <Typography sx={{ fontWeight: "bold" }}>Products</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Price</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Quantity</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Total</Typography>
            <Typography></Typography>
          </Box>

          {/* Рӯйхати маҳсулоти сават */}
          {cartItems.map((item) => (
            <Box 
              key={item.id} 
              sx={{ 
                display: "grid", 
                gridTemplateColumns: { xs: "1fr auto", md: "2fr 1fr 1fr 1fr 0.5fr" },
                alignItems: "center", 
                py: 3, 
                borderBottom: "1px solid #f5f5f5",
                backgroundColor: "#FBFBFB",
                mb: 2,
                px: { xs: 1.5, md: 2 },
                borderRadius: "4px"
              }}
            >
              {/* Сурат ва ном */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box 
                  component="img" 
                  src={item.images[0]} 
                  alt={item.name} 
                  sx={{ width: "70px", height: "70px", objectFit: "contain", backgroundColor: "#fff", p: 1 }} 
                />
                <Box>
                  <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D" }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#727272" }}>
                    <b>SKU:</b> 19957518{item.id}
                  </Typography>
                </Box>
              </Box>

              {/* Нарх */}
                <Typography sx={{ display: { xs: "none", md: "block" }, fontSize: "15px", color: "#727272" }}>
                ${item.price}.00
              </Typography>

              {/* Миқдор (+ ва -) */}
                <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0.5, md: 1.5 } }}>
                <IconButton 
                  onClick={() => handleDecrease(item.id)} 
                  sx={{ color: "#fff", backgroundColor: "#46A358", width: "24px", height: "24px", "&:hover": { backgroundColor: "#3a8a49" } }}
                >
                  <RemoveIcon sx={{ fontSize: "14px" }} />
                </IconButton>
                <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>{item.quantity}</Typography>
                <IconButton 
                  onClick={() => handleIncrease(item.id)} 
                  sx={{ color: "#fff", backgroundColor: "#46A358", width: "24px", height: "24px", "&:hover": { backgroundColor: "#3a8a49" } }}
                >
                  <AddIcon sx={{ fontSize: "14px" }} />
                </IconButton>
              </Box>

              {/* Ҷамъи нарх */}
                <Typography sx={{ gridColumn: { xs: "1 / 2", md: "auto" }, fontSize: "16px", fontWeight: "bold", color: "#46A358" }}>
                ${item.price * item.quantity}.00
              </Typography>

              {/* Нест кардан */}
              <IconButton onClick={() => handleDelete(item.id)} sx={{ color: "#727272", "&:hover": { color: "#d32f2f" } }}>
                {/* <DeleteOutlineIcon /> */}
              </IconButton>
            </Box>
          ))}

        </Box>

        {/* Қисми рост: Cart Totals */}
        <Box sx={{ flex: 1, backgroundColor: "#FBFBFB", p: 3, height: "fit-content", borderTop: "3px solid #46A358" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px", color: "#3D3D3D", mb: 3, borderBottom: "1px solid #eaeaea", pb: 1.5 }}>
            Cart Totals
          </Typography>

          {/* Купон */}
          <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Coupon Apply</Typography>
          <Box sx={{ display: "flex", mb: 3, border: "1px solid #46A358", borderRadius: "4px", overflow: "hidden" }}>
            <TextField 
              placeholder="Enter coupon code here..." 
              variant="outlined" 
              size="small"
              sx={{ backgroundColor: "#fff", flex: 1, "& fieldset": { border: "none" } }}
            />
            <Button sx={{ backgroundColor: "#46A358", color: "#fff", px: 3, fontWeight: "bold", borderRadius: 0, textTransform: "none", "&:hover": { backgroundColor: "#3a8a49" } }}>
              Apply
            </Button>
          </Box>

          {/* Ҳисобҳо */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, fontSize: "15px", color: "#3D3D3D" }}>
            <Typography>Subtotal</Typography>
            <Typography sx={{ fontWeight: "bold" }}>${subtotal}.00</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, fontSize: "14px", color: "#727272" }}>
            <Typography>Coupon Discount</Typography>
            <Typography>(-)$00.00</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, fontSize: "15px", color: "#3D3D3D" }}>
            <Typography>Shipping</Typography>
            <Typography sx={{ fontWeight: "bold" }}>${shipping.toFixed(2)}</Typography>
          </Box>
          <Typography sx={{ fontSize: "12px", color: "#46A358", textAlign: "right", mb: 3, cursor: "pointer" }}>
            View shipping charge
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4, fontSize: "18px", fontWeight: "bold", color: "#3D3D3D", borderTop: "1px solid #eaeaea", pt: 2 }}>
            <Typography>Total</Typography>
            <Typography sx={{ color: "#46A358", fontSize: "20px" }}>${total.toFixed(2)}</Typography>
          </Box>

          <Button 
            fullWidth 
            variant="contained" 
            sx={{ 
              backgroundColor: "#46A358", 
              color: "#fff", 
              py: 1.5, 
              fontWeight: "bold", 
              textTransform: "none", 
              borderRadius: "4px", 
              mb: 2,
              "&:hover": { backgroundColor: "#3a8a49" } 
            }}
          >
            Proceed To Checkout
          </Button>

          <Typography sx={{ textAlign: "center", color: "#46A358", fontSize: "14px", fontWeight: "bold", cursor: "pointer" }}>
            Continue Shopping
          </Typography>

        </Box>

      </Box>
    </Box>
  );
};

export default ShoppingCart;
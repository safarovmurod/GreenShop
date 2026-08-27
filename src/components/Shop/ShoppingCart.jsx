import React from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useNavigate, useOutletContext } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ShoppingCart = () => {
  const navigate = useNavigate();
  // Маҳсулоти сават аз Layout меояд (як массиви ягона)
  const { cart, increaseQty, decreaseQty, removeFromCart } = useOutletContext();

  const cartItems = cart;

  // Ҳисоби маблағи умумӣ (Subtotal)
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 16.00;
  const total = subtotal + shipping;

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: { xs: 2, md: 6 }, px: { xs: "16px", md: "0" }, pb: { xs: "90px", md: 0 } }}>

      {/* Сарлавҳаи мобилӣ: тугмаи бозгашт + "Cart" (мувофиқи Figma) */}
      <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", mb: 2 }}>
        <IconButton
          onClick={() => navigate(-1)}
          aria-label="Back"
          sx={{ width: 38, height: 38, color: "#3D3D3D", backgroundColor: "#F5F6F5" }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: "16px" }} />
        </IconButton>
        <Typography sx={{ flex: 1, textAlign: "center", mr: "38px", fontSize: "20px", fontWeight: "bold", color: "#3D3D3D" }}>
          Cart
        </Typography>
      </Box>

      
      {/* Навигарияи боло (Breadcrumbs) */}
      <Typography sx={{ display: { xs: "none", md: "block" }, fontSize: "14px", color: "#727272", mb: 5 }}>
        <span
          onClick={() => navigate("/")}
          style={{ fontWeight: "bold", color: "#3D3D3D", cursor: "pointer" }}
        >
          Home
        </span>{" "}
        / Shop / Shopping Cart
      </Typography>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "40px" }}>
        
        {/* Қисми чап: Ҷадвали маҳсулот */}
        <Box data-aos="fade-right" sx={{ flex: 2 }}>
          
          {/* Сарлавҳаи ҷадвал */}
          <Box sx={{ display: { xs: "none", md: "grid" }, gridTemplateColumns: "2fr 1fr 1fr 1fr 0.5fr", pb: 2, borderBottom: "1px solid #eaeaea", fontWeight: "bold", color: "#3D3D3D" }}>
            <Typography sx={{ fontWeight: "bold" }}>Products</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Price</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Quantity</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Total</Typography>
            <Typography></Typography>
          </Box>

          {/* Агар сават холӣ бошад */}
          {cartItems.length === 0 && (
            <Typography sx={{ py: 4, fontSize: "15px", color: "#727272" }}>
              Your cart is empty.
            </Typography>
          )}

          {/* Рӯйхати маҳсулоти сават */}
          <AnimatePresence initial={false}>
          {cartItems.map((item) => (
            <Box 
              component={motion.div}
              key={item.id} 
              layout
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60, height: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              sx={{ 
                display: "grid", 
                gridTemplateColumns: { xs: "1fr auto auto", md: "2fr 1fr 1fr 1fr 0.5fr" },
                alignItems: "center", 
                py: { xs: 1.5, md: 3 }, 
                borderBottom: { xs: "none", md: "1px solid #f5f5f5" },
                backgroundColor: "#FBFBFB",
                mb: 2,
                px: { xs: 1.5, md: 2 },
                borderRadius: { xs: "16px", md: "4px" },
                boxShadow: { xs: "0 2px 10px rgba(34, 74, 42, .05)", md: "none" }
              }}
            >
              {/* Сурат ва ном */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box 
                  component="img" 
                  src={item.images[0]} 
                  alt={item.name} 
                  sx={{ width: "70px", height: "70px", objectFit: "contain", backgroundColor: "#fff", p: 1, borderRadius: { xs: "12px", md: 0 } }} 
                />
                <Box>
                  <Typography sx={{ fontWeight: "bold", fontSize: { xs: "15px", md: "16px" }, color: "#3D3D3D" }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ display: { xs: "block", md: "none" }, fontSize: "12px", color: "#727272" }}>
                    Size : <b>{item.size}</b>
                  </Typography>
                  <Typography sx={{ display: { xs: "none", md: "block" }, fontSize: "12px", color: "#727272" }}>
                    <b>SKU:</b> 19957518{item.id}
                  </Typography>
                  <Typography sx={{ display: { xs: "block", md: "none" }, mt: 0.3, fontSize: "16px", fontWeight: "bold", color: "#46A358" }}>
                    ${item.price * item.quantity}.00
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
                  component={motion.button}
                  whileTap={{ scale: 0.85 }}
                  onClick={() => decreaseQty(item.id)} 
                  sx={{ color: { xs: "#3D3D3D", md: "#fff" }, backgroundColor: { xs: "#F1F2F1", md: "#46A358" }, width: "26px", height: "26px", "&:hover": { backgroundColor: { xs: "#e6e8e6", md: "#3a8a49" } } }}
                >
                  <RemoveIcon sx={{ fontSize: "14px" }} />
                </IconButton>
                <Typography
                  component={motion.span}
                  key={item.quantity}
                  initial={{ scale: 1.5, color: "#46A358" }}
                  animate={{ scale: 1, color: "#3D3D3D" }}
                  transition={{ duration: 0.3 }}
                  sx={{ fontWeight: "bold", fontSize: "15px" }}
                >
                  {item.quantity}
                </Typography>
                <IconButton 
                  component={motion.button}
                  whileTap={{ scale: 0.85 }}
                  onClick={() => increaseQty(item.id)} 
                  sx={{ color: { xs: "#3D3D3D", md: "#fff" }, backgroundColor: { xs: "#F1F2F1", md: "#46A358" }, width: "26px", height: "26px", "&:hover": { backgroundColor: { xs: "#e6e8e6", md: "#3a8a49" } } }}
                >
                  <AddIcon sx={{ fontSize: "14px" }} />
                </IconButton>
              </Box>

              {/* Ҷамъи нарх */}
                <Typography sx={{ display: { xs: "none", md: "block" }, gridColumn: { xs: "1 / 2", md: "auto" }, fontSize: "16px", fontWeight: "bold", color: "#46A358" }}>
                ${item.price * item.quantity}.00
              </Typography>

              {/* Нест кардан */}
              <IconButton
                component={motion.button}
                whileHover={{ scale: 1.2, rotate: -8 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => removeFromCart(item.id)}
                sx={{ color: { xs: "#46A358", md: "#727272" }, "&:hover": { color: "#d32f2f" } }}
              >
                <DeleteOutlinedIcon sx={{ fontSize: { xs: "20px", md: "24px" } }} />
              </IconButton>
            </Box>
          ))}
          </AnimatePresence>

        </Box>

        {/* Қисми рост: Cart Totals */}
        <Box data-aos="fade-left" sx={{ flex: 1, backgroundColor: { xs: "#fff", md: "#FBFBFB" }, p: { xs: 2, md: 3 }, height: "fit-content", borderRadius: { xs: "20px", md: 0 }, boxShadow: { xs: "0 -4px 20px rgba(34, 74, 42, .08)", md: "none" }, borderTop: { xs: "none", md: "3px solid #46A358" } }}>
          <Typography sx={{ display: { xs: "none", md: "block" }, fontWeight: "bold", fontSize: "18px", color: "#3D3D3D", mb: 3, borderBottom: "1px solid #eaeaea", pb: 1.5 }}>
            Cart Totals
          </Typography>

          {/* Купон */}
          <Typography sx={{ display: { xs: "none", md: "block" }, fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Coupon Apply</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3, border: { xs: "1px solid #eaeaea", md: "1px solid #46A358" }, borderRadius: { xs: "30px", md: "4px" }, overflow: "hidden" }}>
            <TextField 
              placeholder="Enter coupon code here..." 
              variant="outlined" 
              size="small"
              sx={{ backgroundColor: "#fff", flex: 1, "& fieldset": { border: "none" } }}
            />
            <Button sx={{ m: { xs: 0.5, md: 0 }, py: { xs: 1, md: 0 }, backgroundColor: "#46A358", color: "#fff", px: 3, fontWeight: "bold", borderRadius: { xs: "30px", md: 0 }, textTransform: "none", "&:hover": { backgroundColor: "#3a8a49" } }}>
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
            component={motion.button}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/checkout")}
            sx={{ 
              backgroundColor: "#46A358", 
              color: "#fff", 
              py: 1.5, 
              fontWeight: "bold", 
              textTransform: "none", 
              borderRadius: { xs: "30px", md: "4px" }, 
              mb: 2,
              "&:hover": { backgroundColor: "#3a8a49" } 
            }}
          >
            Proceed To Checkout
          </Button>

          <Typography
            onClick={() => navigate("/")}
            sx={{ textAlign: "center", color: "#46A358", fontSize: "14px", fontWeight: "bold", cursor: "pointer" }}
          >
            Continue Shopping
          </Typography>

        </Box>

      </Box>
    </Box>
  );
};

export default ShoppingCart;
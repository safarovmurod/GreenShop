import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";

const OrderModal = ({ open = false, onClose, items = [], total = 0, payment = "", onTrack }) => {
  if (!open) return null;

  // Маҳсулоте, ки корбар харид
  const orderedItems = items;
  const shipping = 16.0;
  const orderDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Box 
      sx={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        zIndex: 1000,
        px: 2
      }}
    >
      <Box 
        sx={{ 
          backgroundColor: "#fff", 
          width: "100%", 
          maxWidth: "600px", 
          borderRadius: "8px", 
          boxShadow: "0px 4px 20px rgba(0,0,0,0.15)", 
          overflow: "hidden",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto"
        }}
      >
        
        {/* Тугмаи пӯшидан (X) дар кунҷи боло */}
        <IconButton 
          onClick={onClose}
          sx={{ position: "absolute", top: 15, right: 15, color: "#727272" }}
        >
          <CloseIcon />
        </IconButton>

        {/* Қисми боло: Танзим ва Ташаккур */}
        <Box sx={{ backgroundColor: "rgba(70, 163, 88, 0.1)", py: 4, textAlign: "center", position: "relative" }}>
          <Box sx={{ color: "#46A358", mb: 1 }}>
            <MarkEmailReadOutlinedIcon sx={{ fontSize: 50 }} />
          </Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D" }}>
            Your order has been received
          </Typography>
        </Box>

        {/* Маълумоти рақами фармоиш ва ғайра */}
        <Box 
          sx={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(4, 1fr)", 
            py: 2.5, 
            px: 3, 
            borderBottom: "1px solid #eaeaea",
            textAlign: "center",
            backgroundColor: "#fff"
          }}
        >
          <Box sx={{ borderRight: "1px solid #eaeaea", pr: 1 }}>
            <Typography sx={{ fontSize: "12px", color: "#727272" }}>Order Number</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "#3D3D3D" }}>19586687</Typography>
          </Box>
          <Box sx={{ borderRight: "1px solid #eaeaea", px: 1 }}>
            <Typography sx={{ fontSize: "12px", color: "#727272" }}>Date</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "#3D3D3D" }}>{orderDate}</Typography>
          </Box>
          <Box sx={{ borderRight: "1px solid #eaeaea", px: 1 }}>
            <Typography sx={{ fontSize: "12px", color: "#727272" }}>Total</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "#3D3D3D" }}>${total.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ pl: 1 }}>
            <Typography sx={{ fontSize: "12px", color: "#727272" }}>Payment Method</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "13px", color: "#3D3D3D" }}>{payment}</Typography>
          </Box>
        </Box>

        {/* Қисми мобайн: Order Details */}
        <Box sx={{ p: 3 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D", mb: 2 }}>
            Order Details
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", pb: 1, borderBottom: "1px solid #eaeaea", fontWeight: "bold", fontSize: "14px", color: "#3D3D3D" }}>
            <Typography>Products</Typography>
            <Typography>Qty</Typography>
            <Typography>Subtotal</Typography>
          </Box>

          {/* Рӯйхати маҳсулот */}
          {orderedItems.map((item) => (
            <Box key={item.id} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2, borderBottom: "1px solid #f5f5f5" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 2 }}>
                <Box component="img" src={item.images[0]} alt="" sx={{ width: "45px", height: "45px", objectFit: "contain", backgroundColor: "#FBFBFB", p: 0.5 }} />
                <Box>
                  <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "#3D3D3D" }}>{item.name}</Typography>
                  <Typography sx={{ fontSize: "11px", color: "#727272" }}>SKU: 19957518{item.id}</Typography>
                </Box>
              </Box>
              <Typography sx={{ fontSize: "14px", color: "#727272", flex: 1, textAlign: "center" }}>(x {item.quantity})</Typography>
              <Typography sx={{ fontSize: "15px", fontWeight: "bold", color: "#46A358", flex: 1, textAlign: "right" }}>
                ${item.price * item.quantity}.00
              </Typography>
            </Box>
          ))}

          {/* Нархи доставка ва Total */}
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 2, fontSize: "14px", color: "#3D3D3D" }}>
            <Typography>Shiping</Typography>
            <Typography sx={{ fontWeight: "bold" }}>${shipping.toFixed(2)}</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", py: 2, fontSize: "16px", fontWeight: "bold", color: "#3D3D3D", borderTop: "1px solid #eaeaea", borderBottom: "1px solid #eaeaea", mb: 3 }}>
            <Typography>Total</Typography>
            <Typography sx={{ color: "#46A358", fontSize: "18px" }}>${total.toFixed(2)}</Typography>
          </Box>

          {/* Паёми поёнӣ */}
          <Typography sx={{ fontSize: "13px", color: "#727272", textAlign: "center", mb: 3, px: 2, lineHeight: 1.5 }}>
            Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.
          </Typography>

          {/* Тугмаи Track your order */}
          <Button 
            fullWidth 
            variant="contained" 
            onClick={onTrack}
            sx={{ 
              backgroundColor: "#46A358", 
              color: "#fff", 
              py: 1.5, 
              fontWeight: "bold", 
              textTransform: "none", 
              borderRadius: "4px",
              "&:hover": { backgroundColor: "#3a8a49" } 
            }}
          >
            Track your order
          </Button>

        </Box>

      </Box>
    </Box>
  );
};

export default OrderModal;
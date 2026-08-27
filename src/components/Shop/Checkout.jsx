import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  Radio, 
  RadioGroup, 
  FormControl 
} from "@mui/material";
import { plants } from "../../data/api";

const Checkout = () => {
  // Барои мисол ҳамон маҳсулоти саватро дар ин ҷо ҳам менишинонем
  const orderItems = [
    { ...plants[0], quantity: 2 },
    { ...plants[4], quantity: 6 },
    { ...plants[5], quantity: 9 },
  ];

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 16.00;
  const total = subtotal + shipping;

  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: 6, px: { xs: "20px", md: "0" } }}>
      
      {/* Навигарияи боло (Breadcrumbs) */}
      <Typography sx={{ display: { xs: "none", md: "block" }, fontSize: "14px", color: "#727272", mb: 5 }}>
        <span style={{ fontWeight: "bold", color: "#3D3D3D" }}>Home</span> / Shop / Checkout
      </Typography>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "50px" }}>
        
        {/* Қисми чап: Billing Address */}
        <Box sx={{ flex: 1.3 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px", color: "#3D3D3D", mb: 3 }}>
            Billing Address
          </Typography>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px", mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>First Name *</Typography>
              <TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Last Name *</Typography>
              <TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px", mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Country / Region *</Typography>
              <TextField fullWidth size="small" placeholder="Select a country / region" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Town / City *</Typography>
              <TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px", mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Street Address *</Typography>
              <TextField fullWidth size="small" placeholder="House number and street name" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
            <Box sx={{ flex: 1, mt: "auto" }}>
              <TextField fullWidth size="small" placeholder="Appartment, suite, unit, etc. (optional)" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px", mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>State *</Typography>
              <TextField fullWidth size="small" placeholder="Select a state" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Zip *</Typography>
              <TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px", mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Email address *</Typography>
              <TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Phone Number *</Typography>
              <TextField fullWidth size="small" defaultValue="+966" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
            </Box>
          </Box>

          <FormControlLabel 
            control={<Checkbox sx={{ color: "#46A358", "&.Mui-checked": { color: "#46A358" } }} />} 
            label="Ship to a different address?" 
            sx={{ mb: 3 }}
          />

          <Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Order notes (optional)</Typography>
          <TextField 
            fullWidth 
            multiline 
            rows={4} 
            variant="outlined" 
            sx={{ backgroundColor: "#FBFBFB" }} 
          />
        </Box>

        {/* Қисми рост: Your Order */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px", color: "#3D3D3D", mb: 3, borderBottom: "1px solid #eaeaea", pb: 1.5 }}>
            Your Order
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, fontWeight: "bold", fontSize: "15px", color: "#3D3D3D" }}>
            <Typography>Products</Typography>
            <Typography>Subtotal</Typography>
          </Box>

          {/* Рӯйхати маҳсулот */}
          {orderItems.map((item) => (
            <Box key={item.id} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2, backgroundColor: "#FBFBFB", p: 1.5, borderRadius: "4px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box component="img" src={item.images[0]} alt="" sx={{ width: "50px", height: "50px", objectFit: "contain" }} />
                <Box>
                  <Typography sx={{ fontWeight: "bold", fontSize: "14px", color: "#3D3D3D" }}>{item.name}</Typography>
                  <Typography sx={{ fontSize: "12px", color: "#727272" }}>SKU: 19957518{item.id}</Typography>
                </Box>
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Typography sx={{ fontSize: "12px", color: "#727272" }}>(x {item.quantity})</Typography>
                <Typography sx={{ fontSize: "15px", fontWeight: "bold", color: "#46A358" }}>${item.price * item.quantity}.00</Typography>
              </Box>
            </Box>
          ))}

          <Typography sx={{ fontSize: "13px", textAlign: "right", mb: 2, color: "#3D3D3D" }}>
            Have a coupon code? <span style={{ color: "#46A358", cursor: "pointer", fontWeight: "bold" }}>Click here</span>
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, fontSize: "15px", color: "#3D3D3D" }}>
            <Typography>Subtotal</Typography>
            <Typography sx={{ fontWeight: "bold" }}>${subtotal}.00</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, fontSize: "14px", color: "#727272" }}>
            <Typography>Coupon Discount</Typography>
            <Typography>(-)$00.00</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1, fontSize: "15px", color: "#3D3D3D" }}>
            <Typography>Shiping</Typography>
            <Typography sx={{ fontWeight: "bold" }}>${shipping.toFixed(2)}</Typography>
          </Box>
          <Typography sx={{ fontSize: "12px", color: "#46A358", textAlign: "right", mb: 3, cursor: "pointer" }}>
            View shipping charge
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4, fontSize: "18px", fontWeight: "bold", color: "#3D3D3D", borderTop: "1px solid #eaeaea", pt: 2 }}>
            <Typography>Total</Typography>
            <Typography sx={{ color: "#46A358", fontSize: "20px" }}>${total.toFixed(2)}</Typography>
          </Box>

          {/* Усулҳои пардохт */}
          <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D", mb: 2 }}>
            Payment Method
          </Typography>

          <FormControl component="fieldset" sx={{ width: "100%", mb: 4 }}>
            <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #eaeaea", borderRadius: "4px", px: 2, py: 1, mb: 1.5 }}>
                <FormControlLabel value="paypal" control={<Radio sx={{ color: "#46A358", "&.Mui-checked": { color: "#46A358" } }} />} label="PayPal / Master / Visa" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #eaeaea", borderRadius: "4px", px: 2, py: 1, mb: 1.5 }}>
                <FormControlLabel value="bank" control={<Radio sx={{ color: "#46A358", "&.Mui-checked": { color: "#46A358" } }} />} label="Direct bank transfer" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #46A358", borderRadius: "4px", px: 2, py: 1, borderColor: "#46A358" }}>
                <FormControlLabel value="cash" control={<Radio sx={{ color: "#46A358", "&.Mui-checked": { color: "#46A358" } }} />} label="Cash on delivery" />
              </Box>
            </RadioGroup>
          </FormControl>

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
              "&:hover": { backgroundColor: "#3a8a49" } 
            }}
          >
            Place Order
          </Button>

        </Box>

      </Box>
    </Box>
  );
};

export default Checkout;
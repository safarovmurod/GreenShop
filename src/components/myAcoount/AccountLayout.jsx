import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { motion } from "motion/react";
import { Box, Typography, TextField, Button } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { plants } from "../../data/api";

const AccountLayout = () => {
  const navigate = useNavigate();
  const { user, login, logout, wishlist } = useOutletContext();

  // Идора кардани кадом саҳифа фаъол аст ("details", "address", "orders", etc.)
  const [activeTab, setActiveTab] = useState("details");

  // Маълумоти корбар (аз Layout меояд)
  const [name, setName] = useState(user ? user.name : "");
  const [lastName, setLastName] = useState(user ? user.lastName || "" : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [phone, setPhone] = useState(user ? user.phone || "" : "");
  const [code, setCode] = useState(user ? user.code || "+966" : "+966");

  // Маҳсулоти дар Wishlist буда
  const wishlistItems = plants.filter((plant) => wishlist.includes(plant.id));

  const handleSave = () => {
    login({ name, lastName, email, phone, code });
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: 6, px: { xs: "20px", md: "0" } }}>
      
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "50px" }}>
        
        {/* Sidebar */}
        <Box data-aos="fade-right" sx={{ width: "250px", flexShrink: 0, backgroundColor: "#FBFBFB", p: 3, height: "fit-content" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px", color: "#3D3D3D", mb: 3 }}>
            My Account
          </Typography>
          
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            
            <Box 
              onClick={() => setActiveTab("details")}
              sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer", pl: activeTab === "details" ? 1.5 : 2, py: 0.5, color: activeTab === "details" ? "#46A358" : "#3D3D3D", borderLeft: activeTab === "details" ? "4px solid #46A358" : "none" }}
            >
              <PersonOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px", fontWeight: activeTab === "details" ? "bold" : "normal" }}>Account Details</Typography>
            </Box>

            <Box 
              onClick={() => setActiveTab("address")}
              sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer", pl: activeTab === "address" ? 1.5 : 2, py: 0.5, color: activeTab === "address" ? "#46A358" : "#3D3D3D", borderLeft: activeTab === "address" ? "4px solid #46A358" : "none" }}
            >
              <LocationOnOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px", fontWeight: activeTab === "address" ? "bold" : "normal" }}>Address</Typography>
            </Box>

            <Box 
              onClick={() => setActiveTab("orders")}
              sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer", pl: activeTab === "orders" ? 1.5 : 2, py: 0.5, color: activeTab === "orders" ? "#46A358" : "#3D3D3D", borderLeft: activeTab === "orders" ? "4px solid #46A358" : "none" }}
            >
              <ShoppingBagOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px", fontWeight: activeTab === "orders" ? "bold" : "normal" }}>Orders</Typography>
            </Box>

            <Box 
              onClick={() => setActiveTab("wishlist")}
              sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer", pl: activeTab === "wishlist" ? 1.5 : 2, py: 0.5, color: activeTab === "wishlist" ? "#46A358" : "#3D3D3D", borderLeft: activeTab === "wishlist" ? "4px solid #46A358" : "none" }}
            >
              <FavoriteBorderOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px", fontWeight: activeTab === "wishlist" ? "bold" : "normal" }}>Wishlist</Typography>
            </Box>

            <Box 
              onClick={() => setActiveTab("reports")}
              sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer", pl: activeTab === "reports" ? 1.5 : 2, py: 0.5, color: activeTab === "reports" ? "#46A358" : "#3D3D3D", borderLeft: activeTab === "reports" ? "4px solid #46A358" : "none" }}
            >
              <DescriptionOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px", fontWeight: activeTab === "reports" ? "bold" : "normal" }}>Reports</Typography>
            </Box>

            <Box 
              onClick={() => setActiveTab("downloads")}
              sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer", pl: activeTab === "downloads" ? 1.5 : 2, py: 0.5, color: activeTab === "downloads" ? "#46A358" : "#3D3D3D", borderLeft: activeTab === "downloads" ? "4px solid #46A358" : "none" }}
            >
              <DownloadOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px", fontWeight: activeTab === "downloads" ? "bold" : "normal" }}>Downloads</Typography>
            </Box>

            <Box 
              onClick={() => setActiveTab("support")}
              sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer", pl: activeTab === "support" ? 1.5 : 2, py: 0.5, color: activeTab === "support" ? "#46A358" : "#3D3D3D", borderLeft: activeTab === "support" ? "4px solid #46A358" : "none" }}
            >
              <HeadsetMicOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px", fontWeight: activeTab === "support" ? "bold" : "normal" }}>Support</Typography>
            </Box>

            <Box onClick={handleLogout} sx={{ display: "flex", alignItems: "center", gap: 2, color: "#D32F2F", cursor: "pointer", pl: 2, pt: 3, borderTop: "1px solid #eaeaea", mt: 2 }}>
              <LogoutOutlinedIcon sx={{ fontSize: "20px" }} />
              <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>Logout</Typography>
            </Box>
          </Box>
        </Box>

        {/* Dynamic Content Area (Вобаста ба Tab намоиш дода мешавад) */}
        <Box
          component={motion.div}
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          sx={{ flex: 1 }}
        >
          
          {/* 1. ACCOUNT DETAILS */}
          {activeTab === "details" && (
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D", mb: 3 }}>Personal Information</Typography>
              <Box sx={{ display: "flex", gap: "30px", mb: 3 }}>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>First Name *</Typography><TextField fullWidth size="small" value={name} onChange={(event) => setName(event.target.value)} variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Last Name *</Typography><TextField fullWidth size="small" value={lastName} onChange={(event) => setLastName(event.target.value)} variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
              </Box>
              <Box sx={{ display: "flex", gap: "30px", mb: 3 }}>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Email address *</Typography><TextField fullWidth size="small" value={email} onChange={(event) => setEmail(event.target.value)} variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Phone Number *</Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <TextField size="small" value={code} onChange={(event) => setCode(event.target.value)} variant="outlined" sx={{ width: "90px", backgroundColor: "#FBFBFB" }} />
                    <TextField fullWidth size="small" value={phone} onChange={(event) => setPhone(event.target.value)} variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} />
                  </Box>
                </Box>
              </Box>
              <Button variant="contained" component={motion.button} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={handleSave} sx={{ backgroundColor: "#46A358", color: "#fff", px: 4, py: 1.2, fontWeight: "bold", textTransform: "none", borderRadius: "4px", "&:hover": { backgroundColor: "#3a8a49" } }}>Save Change</Button>
            </Box>
          )}

          {/* 2. ADDRESS */}
          {activeTab === "address" && (
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D" }}>Billing Address</Typography>
                <Typography sx={{ fontSize: "14px", color: "#46A358", fontWeight: "bold", cursor: "pointer" }}>add</Typography>
              </Box>
              <Typography sx={{ fontSize: "13px", color: "#727272", mb: 3 }}>The following addresses will be used on the checkout page by default.</Typography>

              <Box sx={{ display: "flex", gap: "30px", mb: 3 }}>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>First Name *</Typography><TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Last Name *</Typography><TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
              </Box>

              <Box sx={{ display: "flex", gap: "30px", mb: 3 }}>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Country / Region *</Typography><TextField fullWidth size="small" placeholder="Select a country / region" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Town / City *</Typography><TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
              </Box>

              <Box sx={{ display: "flex", gap: "30px", mb: 3 }}>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Street Address *</Typography><TextField fullWidth size="small" placeholder="House number and street name" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
                <Box sx={{ flex: 1, mt: "auto" }}><TextField fullWidth size="small" placeholder="Appartment, suite, unit, etc. (optional)" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
              </Box>

              <Box sx={{ display: "flex", gap: "30px", mb: 3 }}>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>State *</Typography><TextField fullWidth size="small" placeholder="Select a state" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Zip *</Typography><TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
              </Box>

              <Box sx={{ display: "flex", gap: "30px", mb: 4 }}>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Email address *</Typography><TextField fullWidth size="small" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
                <Box sx={{ flex: 1 }}><Typography sx={{ fontSize: "14px", color: "#3D3D3D", mb: 1 }}>Phone Number *</Typography><TextField fullWidth size="small" defaultValue="+966" variant="outlined" sx={{ backgroundColor: "#FBFBFB" }} /></Box>
              </Box>

              <Button variant="contained" sx={{ backgroundColor: "#46A358", color: "#fff", px: 4, py: 1.2, fontWeight: "bold", textTransform: "none", borderRadius: "4px", mb: 5, "&:hover": { backgroundColor: "#3a8a49" } }}>Save Address</Button>

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #eaeaea", pt: 3 }}>
                <Box>
                  <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D" }}>Shipping Address</Typography>
                  <Typography sx={{ fontSize: "13px", color: "#727272", mt: 0.5 }}>You have not set up this type of address yet.</Typography>
                </Box>
                <Typography sx={{ fontSize: "14px", color: "#46A358", fontWeight: "bold", cursor: "pointer" }}>add</Typography>
              </Box>
            </Box>
          )}

          {/* 3. ORDERS */}
          {activeTab === "orders" && (
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "18px", color: "#3D3D3D", mb: 3 }}>My Orders</Typography>
              <Box sx={{ backgroundColor: "#FBFBFB", p: 3, borderRadius: "6px", mb: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                  <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#3D3D3D" }}>Order #19586687</Typography>
                  <Typography sx={{ fontSize: "13px", color: "#727272" }}>Date: 15 Sep, 2021 | 3 Items</Typography>
                </Box>
                <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#46A358" }}>$2,699.00</Typography>
              </Box>
              <Box sx={{ backgroundColor: "#FBFBFB", p: 3, borderRadius: "6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                  <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#3D3D3D" }}>Order #19584412</Typography>
                  <Typography sx={{ fontSize: "13px", color: "#727272" }}>Date: 10 Aug, 2021 | 1 Item</Typography>
                </Box>
                <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#46A358" }}>$119.00</Typography>
              </Box>
            </Box>
          )}

          {/* 4. WISHLIST */}
          {activeTab === "wishlist" && (
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "18px", color: "#3D3D3D", mb: 3 }}>Wishlist</Typography>
              {wishlistItems.length === 0 ? (
                <Typography sx={{ fontSize: "14px", color: "#727272" }}>No products in your wishlist yet.</Typography>
              ) : (
                wishlistItems.map((item) => (
                  <Box
                    key={item.id}
                    onClick={() => navigate(`/shop/${item.id}`)}
                    sx={{ display: "flex", alignItems: "center", gap: 2, backgroundColor: "#FBFBFB", p: 2, borderRadius: "6px", mb: 2, cursor: "pointer" }}
                  >
                    <Box component="img" src={item.images[0]} alt={item.name} sx={{ width: "60px", height: "60px", objectFit: "contain" }} />
                    <Box>
                      <Typography sx={{ fontWeight: "bold", fontSize: "15px", color: "#3D3D3D" }}>{item.name}</Typography>
                      <Typography sx={{ fontSize: "15px", fontWeight: "bold", color: "#46A358" }}>${item.price}.00</Typography>
                    </Box>
                  </Box>
                ))
              )}
            </Box>
          )}

          {/* 5. OTHER TABS (Reports, Downloads, Support) */}
          {["reports", "downloads", "support"].includes(activeTab) && (
            <Box sx={{ textAlign: "center", py: 8, backgroundColor: "#FBFBFB", borderRadius: "8px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "#3D3D3D", textTransform: "capitalize", mb: 1 }}>
                {activeTab} Section
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#727272" }}>
                No {activeTab} information available at the moment.
              </Typography>
            </Box>
          )}

        </Box>

      </Box>
    </Box>
  );
};

export default AccountLayout;
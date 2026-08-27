import { FavoriteBorder, HomeOutlined, PersonOutlineOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Box, IconButton, Badge } from "@mui/material";
import { NavLink } from "react-router";

export default function MobileBottomNav({ user, cartCount = 0, onLoginClick }) {
  const items = [
    { label: "Home", icon: <HomeOutlined />, to: "/" },
    { label: "Wishlist", icon: <FavoriteBorder />, to: "/my-account" },
    {
      label: "Cart",
      icon: (
        <Badge
          badgeContent={cartCount}
          sx={{
            "& .MuiBadge-badge": {
              minWidth: 16,
              height: 16,
              backgroundColor: "#46a358",
              color: "#fff",
              fontSize: 10,
            },
          }}
        >
          <ShoppingCartOutlined />
        </Badge>
      ),
      to: "/cart",
    },
    { label: "Account", icon: <PersonOutlineOutlined />, to: user ? "/my-account" : null },
  ];

  return (
    <Box
      component="nav"
      aria-label="Mobile navigation"
      sx={{
        display: { xs: "flex", md: "none" },
        position: "fixed",
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 20,
        justifyContent: "space-around",
        px: 1,
        py: 1,
        backgroundColor: "#fff",
        borderTop: "1px solid #edf0ed",
        boxShadow: "0 -6px 22px rgba(34, 74, 42, .08)",
      }}
    >
      {items.map((item) =>
        item.to ? (
          <IconButton
            key={item.label}
            component={NavLink}
            to={item.to}
            aria-label={item.label}
            sx={{
              color: "#c8cbc9",
              "&.active": { color: "#46a358" },
              "& svg": { fontSize: 24 },
            }}
          >
            {item.icon}
          </IconButton>
        ) : (
          <IconButton
            key={item.label}
            onClick={onLoginClick}
            aria-label={item.label}
            sx={{ color: "#c8cbc9", "& svg": { fontSize: 24 } }}
          >
            {item.icon}
          </IconButton>
        )
      )}
    </Box>
  );
}

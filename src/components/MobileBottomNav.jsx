import { FavoriteBorder, HomeOutlined, PersonOutlineOutlined, ShoppingCartOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import { Box, IconButton, Badge } from "@mui/material";
import { NavLink, useNavigate } from "react-router";

export default function MobileBottomNav({ user, cartCount = 0, onLoginClick }) {
  const navigate = useNavigate();

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
        alignItems: "center",
        justifyContent: "space-around",
        px: 1,
        py: 1,
        backgroundColor: "#fff",
        borderTop: "1px solid #edf0ed",
        boxShadow: "0 -6px 22px rgba(34, 74, 42, .08)",
      }}
    >
      {items.slice(0, 2).map((item) => (
        <IconButton
          key={item.label}
          component={NavLink}
          to={item.to}
          aria-label={item.label}
          sx={{ color: "#c8cbc9", "&.active": { color: "#46a358" }, "& svg": { fontSize: 24 } }}
        >
          {item.icon}
        </IconButton>
      ))}

      {/* Тугмаи мудаввари сабз дар мобайн (мувофиқи Figma) */}
      <IconButton
        onClick={() => navigate("/")}
        aria-label="Shop"
        sx={{
          width: 58,
          height: 58,
          mt: "-34px",
          color: "#fff",
          backgroundColor: "#46a358",
          border: "5px solid #fff",
          boxShadow: "0 6px 18px rgba(70, 163, 88, .35)",
          "&:hover": { backgroundColor: "#3a8a49" },
          "& svg": { fontSize: 24 },
        }}
      >
        <ShoppingBagOutlined />
      </IconButton>

      {items.slice(2).map((item) =>
        item.to ? (
          <IconButton
            key={item.label}
            component={NavLink}
            to={item.to}
            aria-label={item.label}
            sx={{ color: "#c8cbc9", "&.active": { color: "#46a358" }, "& svg": { fontSize: 24 } }}
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

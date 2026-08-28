import { FavoriteBorder, HomeOutlined, PersonOutlineOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Box, IconButton, Badge } from "@mui/material";
import { NavLink, useNavigate } from "react-router";

// Иконкаи сканер (камера) мувофиқи Figma: кунҷҳо + хатти миёна
function ScanIcon() {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      sx={{ width: 24, height: 24 }}
    >
      <path d="M4 9V6.5A2.5 2.5 0 0 1 6.5 4H9" />
      <path d="M15 4h2.5A2.5 2.5 0 0 1 20 6.5V9" />
      <path d="M20 15v2.5a2.5 2.5 0 0 1-2.5 2.5H15" />
      <path d="M9 20H6.5A2.5 2.5 0 0 1 4 17.5V15" />
      <path d="M3 12h18" />
    </Box>
  );
}

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
        <ScanIcon />
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

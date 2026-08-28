import {
  LoginOutlined,
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { Box, IconButton, Stack, Button, Badge, InputBase } from "@mui/material";
import { NavLink, useNavigate } from "react-router";
import { animate } from "animejs";
import { motion } from "motion/react";
import logo from "../assets/Logo (1).png";

const links = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Plant Care", path: "/plant-care" },
  { label: "Blogs", path: "/blogs" },
];

export default function Header({ user, cartCount = 0, search = "", onSearchChange, onLoginClick }) {
  const navigate = useNavigate();
  const cartRef = useRef(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // anime.js: ҳангоми илова шудани маҳсулот иконкаи сават "мепарад"
  useEffect(() => {
    if (cartCount === 0) return;
    animate(cartRef.current, {
      scale: [1, 1.35, 1],
      duration: 600,
      ease: "outElastic(1, .5)",
    });
  }, [cartCount]);

  return (
    <Box
      component="header"
      sx={{ height: { xs: 58, md: 64 }, borderBottom: "1px solid #e5e9e5", backgroundColor: "#fff" }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          height: "100%",
          mx: "auto",
          px: { xs: 2, md: 0 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component={NavLink}
          to="/"
          sx={{ display: "flex", alignItems: "center", minWidth: 0, flexShrink: { xs: 1, md: 0 } }}
        >
          <Box
            component="img"
            src={logo}
            alt="GreenShop"
            sx={{ display: "block", width: { xs: 106, md: 120 }, maxWidth: "100%", height: "auto" }}
          />
        </Box>

        <Stack
          component="nav"
          direction="row"
          sx={{
            display: { xs: "none", md: "flex" },
            height: "100%",
            columnGap: { sm: "22px", md: "34px" },
            flexShrink: 0,
          }}
          aria-label="Main navigation"
        >
          {links.map((link, index) => (
            <Box
              key={link.label}
              component={NavLink}
              to={link.path}
              end={index === 0}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                px: "2px",
                color: "#4b4b4b",
                fontSize: 14,
                textDecoration: "none",
                whiteSpace: "nowrap",
                "&:hover": { color: "#46a358" },
                "&.active": { color: "#242424", fontWeight: 600 },
                "&.active::after": {
                  content: '""',
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  left: 0,
                  height: 3,
                  borderRadius: "3px 3px 0 0",
                  backgroundColor: "#46a358",
                },
              }}
            >
              {link.label}
            </Box>
          ))}
        </Stack>

        <Stack direction="row" sx={{ alignItems: "center" }} gap={{ xs: 0.25, sm: 1 }}>
          {/* Майдони ҷустуҷӯ (бо зеркунии иконка кушода мешавад) */}
          {searchOpen && (
            <InputBase
              autoFocus
              value={search}
              onChange={(event) => {
                onSearchChange(event.target.value);
                navigate("/");
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") setSearchOpen(false);
              }}
              placeholder="Find your plants"
              sx={{
                width: { xs: 92, sm: 150, md: 180 },
                height: 34,
                px: 1.5,
                borderRadius: "17px",
                backgroundColor: "#f5f6f5",
                fontSize: 14,
              }}
            />
          )}
          <IconButton
            aria-label="Search"
            onClick={() => {
              setSearchOpen(!searchOpen);
              if (searchOpen) onSearchChange("");
            }}
            sx={{ color: searchOpen ? "#46a358" : "#3d3d3d", p: 0.8, "&:hover": { color: "#46a358" } }}
          >
            <Search sx={{ fontSize: 21 }} />
          </IconButton>
          <IconButton
            ref={cartRef}
            aria-label="Shopping cart"
            onClick={() => navigate("/cart")}
            sx={{ color: "#3d3d3d", p: 0.8, "&:hover": { color: "#46a358" } }}
          >
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
              <ShoppingCartOutlined sx={{ fontSize: 21 }} />
            </Badge>
          </IconButton>

          {user ? (
            <Button
              component={motion(NavLink)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              to="/my-account"
              startIcon={<PersonOutlineOutlined sx={{ fontSize: 17 }} />}
              sx={{
                minWidth: 61,
                height: 35,
                ml: { xs: 0.5, sm: 1 },
                px: 1.5,
                borderRadius: 1.5,
                color: "#fff",
                backgroundColor: "#46a358",
                fontSize: 13,
                textTransform: "none",
                "&:hover": { backgroundColor: "#398c49" },
              }}
            >
              My Account
            </Button>
          ) : (
            <Button
              component={motion.button}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={onLoginClick}
              startIcon={<LoginOutlined sx={{ fontSize: 17 }} />}
              sx={{
                minWidth: 61,
                height: 35,
                ml: { xs: 0.5, sm: 1 },
                px: 1.5,
                borderRadius: 1.5,
                color: "#fff",
                backgroundColor: "#46a358",
                fontSize: 13,
                textTransform: "none",
                "&:hover": { backgroundColor: "#398c49" },
              }}
            >
              Login
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
}

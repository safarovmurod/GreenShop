import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Snackbar, Alert } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";
import LoginModal from "../components/login/LoginModal";

// Хондани маълумот аз localStorage (агар набошад, қиммати оддӣ бармегардонад)
function readStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export default function Layout() {
  const location = useLocation();
  const [cart, setCart] = useState(() => readStorage("cart", []));
  const [wishlist, setWishlist] = useState(() => readStorage("wishlist", []));
  const [user, setUser] = useState(() => readStorage("user", null));
  const [loginOpen, setLoginOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState(""); // ҷустуҷӯи умумӣ (Header + мобилӣ)

  // AOS: аниматсияи scroll барои ҳамаи секцияҳо
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  // Ҳангоми иваз шудани саҳифа AOS-ро нав мекунем
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // Илова кардани маҳсулот: агар аллакай бошад, танҳо quantity зиёд мешавад
  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setNotice(`${product.name} added to cart`);
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  // Кам кардан: агар 1 бошад, маҳсулот аз сават нест мешавад
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const login = (data) => {
    setUser(data);
    setLoginOpen(false);
    setNotice(`Welcome, ${data.name}`);
  };

  const logout = () => {
    setUser(null);
    setNotice("You have logged out");
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFDF8" }}>
      <Header
        user={user}
        cartCount={cartCount}
        search={search}
        onSearchChange={setSearch}
        onLoginClick={() => setLoginOpen(true)}
      />
      <Outlet
        context={{
          cart,
          cartCount,
          addToCart,
          increaseQty,
          decreaseQty,
          removeFromCart,
          clearCart,
          wishlist,
          toggleWishlist,
          search,
          setSearch,
          user,
          login,
          logout,
          openLogin: () => setLoginOpen(true),
          showNotice: setNotice,
        }}
      />
      <Footer />
      <MobileBottomNav user={user} cartCount={cartCount} onLoginClick={() => setLoginOpen(true)} />

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} onAuth={login} />

      <Snackbar
        open={Boolean(notice)}
        autoHideDuration={3000}
        onClose={() => setNotice("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ backgroundColor: "#46A358", color: "#fff" }}>
          {notice}
        </Alert>
      </Snackbar>
    </Box>
  );
}

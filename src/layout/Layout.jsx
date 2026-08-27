import { Outlet } from "react-router";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";

export default function Layout() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFDF8" }}>
      <Header />
      <Outlet />
      <Footer />
      <MobileBottomNav />
    </Box>
  );
}

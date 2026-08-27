import { AddShoppingCart, ArrowForward, Search } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import HeroSection from "../components/Home/HeroSection";
import ShopSection from "../components/Home/ShopSection";
import PromoBanners from "../components/Home/PromoBanners";
import BlogSection from "../components/Home/blogPosts";
export default function Home() {
  return (
    <>
    <HeroSection/>
    <ShopSection/>
    <PromoBanners/>
    <BlogSection/>
    </>
  );
}

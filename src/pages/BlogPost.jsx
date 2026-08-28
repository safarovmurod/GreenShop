import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import { blogPosts } from "../components/Home/blogPosts";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Танҳо ҳамон post-е, ки корбар интихоб кард
  const post = blogPosts.find((item) => item.id === Number(id));

  if (!post) {
    return (
      <Box sx={{ maxWidth: "1200px", mx: "auto", my: 6, px: { xs: "20px", md: "0" } }}>
        <Typography sx={{ fontSize: "16px", color: "#727272" }}>Blog post not found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: 6, px: { xs: "20px", md: "0" } }}>
      <Typography sx={{ fontSize: "14px", color: "#727272", mb: 4 }}>
        <span
          onClick={() => navigate("/")}
          style={{ fontWeight: "bold", color: "#3D3D3D", cursor: "pointer" }}
        >
          Home
        </span>{" "}
        / Blogs / {post.title}
      </Typography>

      <Box
        component={motion.img}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        src={post.image}
        alt={post.title}
        sx={{ width: "100%", height: { xs: "220px", md: "400px" }, objectFit: "cover" }}
      />

      <Typography data-aos="fade-up" sx={{ mt: 3, fontSize: "13px", color: "#46A358", fontWeight: "bold" }}>
        {post.date} | {post.readTime}
      </Typography>

      <Typography data-aos="fade-up" data-aos-delay="100" sx={{ mt: 1, fontSize: { xs: "24px", md: "28px" }, fontWeight: "bold", color: "#3D3D3D" }}>
        {post.title}
      </Typography>

      <Typography data-aos="fade-up" data-aos-delay="200" sx={{ mt: 2, fontSize: "14px", color: "#727272", lineHeight: 1.8 }}>
        {post.description}
      </Typography>
    </Box>
  );
}

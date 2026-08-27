import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router";

// Суратҳоро метавонед ба суратҳои дилхоҳи худ иваз кунед
import blogImg1 from "../../assets/01 1.png";
import blogImg2 from "../../assets/02.png";
import blogImg3 from "../../assets/03.png";
import blogImg4 from "../../assets/04.png";

export const blogPosts = [
  {
    id: 1,
    image: blogImg1,
    date: "September 12",
    readTime: "Read in 6 minutes",
    title: "Cactus & Succulent Care Tips",
    description: "Cacti are succulents are easy care plants for any home or patio.",
  },
  {
    id: 2,
    image: blogImg2,
    date: "September 13",
    readTime: "Read in 2 minutes",
    title: "Top 10 Succulents for Your Home",
    description: "Best in hanging baskets. Prefers medium to high light.",
  },
  {
    id: 3,
    image: blogImg3,
    date: "September 15",
    readTime: "Read in 3 minutes",
    title: "Cacti & Succulent Care Tips",
    description: "Cacti and succulents thrive in containers and because most are...",
  },
  {
    id: 4,
    image: blogImg4,
    date: "September 15",
    readTime: "Read in 2 minutes",
    title: "Best Houseplants Room By Room",
    description: "The benefits of houseplants are endless. In addition to...",
  },
];

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: 10, px: { xs: "20px", md: "0" } }}>
      
      {/* Сарлавҳаи секция */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: { xs: "24px", md: "28px" }, color: "#3D3D3D", mb: 1 }}>
          Our Blog Posts
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#727272" }}>
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </Typography>
      </Box>

      {/* Grid-и карточкаҳои блог (4 сутун) */}
      <Box 
        sx={{ 
          display: "grid", 
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, 
          gap: "30px" 
        }}
      >
        {blogPosts.map((post) => (
          <Box 
            key={post.id} 
            onClick={() => navigate(`/blogs/${post.id}`)}
            sx={{ 
              cursor: "pointer",
              backgroundColor: "#FBFBFB", 
              display: "flex", 
              flexDirection: "column", 
              overflow: "hidden",
              transition: "0.3s",
              "&:hover": { transform: "translateY(-5px)" }
            }}
          >
            {/* Сурати блог */}
            <Box 
              component="img" 
              src={post.image} 
              alt={post.title} 
              sx={{ width: "100%", height: "190px", objectFit: "cover" }} 
            />

            {/* Маълумот ва матнҳо */}
            <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flex: 1 }}>
              <Typography sx={{ fontSize: "13px", color: "#46A358", fontWeight: "bold", mb: 1 }}>
                {post.date} | {post.readTime}
              </Typography>

              <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: "#3D3D3D", mb: 1, lineHeight: 1.3 }}>
                {post.title}
              </Typography>

              <Typography sx={{ fontSize: "13px", color: "#727272", mb: 2, lineHeight: 1.5, flex: 1 }}>
                {post.description}
              </Typography>

              <Box 
                onClick={() => navigate(`/blogs/${post.id}`)}
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "6px", 
                  color: "#3D3D3D", 
                  fontWeight: "bold", 
                  fontSize: "14px", 
                  cursor: "pointer",
                  "&:hover": { color: "#46A358" },
                  "&:hover svg": { transform: "translateX(4px)" }
                }}
              >
                <span>Read More</span>
                <ArrowForwardIcon sx={{ fontSize: "16px", transition: "0.2s" }} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default BlogSection;
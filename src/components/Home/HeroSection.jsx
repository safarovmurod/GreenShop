import React, { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { animate, stagger, splitText } from "animejs";
import { motion } from "motion/react";
import bannerImg from "../../assets/01 1.png";

const HeroSection = () => {
  const titleRef = useRef(null);
  const welcomeRef = useRef(null);
  const startedRef = useRef(false); // то ки аниматсия ду бор иҷро нашавад

  // anime.js: сарлавҳа ҳарф ба ҳарф пайдо мешавад
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const { chars } = splitText(welcomeRef.current, { chars: true });
    animate(chars, {
      opacity: [0, 1],
      y: [12, 0],
      duration: 600,
      delay: stagger(25),
      ease: "out(3)",
    });

    const words = splitText(titleRef.current, { words: true }).words;
    animate(words, {
      opacity: [0, 1],
      y: [40, 0],
      duration: 900,
      delay: stagger(80, { start: 200 }),
      ease: "out(4)",
    });
  }, []);

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        width: "100%",
        backgroundColor: "#FBFBFB",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "20px", md: "40px 80px" },
        position: "relative",
        minHeight: "450px",
      }}
    >
      <Box sx={{ flex: 1, pr: { md: 4 } }}>
        <Typography
          ref={welcomeRef}
          sx={{
            color: "#3D3D3D",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "1px",
            mb: 1,
            textTransform: "uppercase",
          }}
        >
          Welcome to Greenshop
        </Typography>

        <Typography
          variant="h1"
          ref={titleRef}
          sx={{
            color: "#3D3D3D",
            fontWeight: 900,
            fontSize: { xs: "36px", md: "55px" },
            lineHeight: 1.1,
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          LET'S MAKE A <br /> BETTER{" "}
          <span style={{ color: "#46A358" }}>PLANET</span>
        </Typography>

        <Typography
          data-aos="fade-up"
          data-aos-delay="500"
          sx={{
            color: "#727272",
            fontSize: "14px",
            lineHeight: 1.6,
            mb: 4,
            maxWidth: "500px",
          }}
        >
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </Typography>

        <Button
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-aos="fade-up"
          data-aos-delay="650"
          sx={{
            backgroundColor: "#46A358",
            color: "#fff",
            padding: "10px 24px",
            fontWeight: "bold",
            borderRadius: "6px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#3a8a49",
            },
          }}
        >
          SHOP NOW
        </Button>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          mt: { xs: 4, md: 0 },
        }}
      >
        <Box
          component={motion.img}
          src={bannerImg}
          alt="Greenshop Plant"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          sx={{
            maxWidth: "100%",
            maxHeight: "400px",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#c5e0cb" }} />
        <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#46A358" }} />
        <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#c5e0cb" }} />
      </Box>
    </Box>
  );
};

export default HeroSection;
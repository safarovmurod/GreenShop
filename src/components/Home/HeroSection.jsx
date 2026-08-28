import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { animate, stagger, splitText } from "animejs";
import { motion } from "motion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bannerImg1 from "../../assets/01 1.png";
import bannerImg2 from "../../assets/pngwing.com (5).png";
import bannerImg3 from "../../assets/pngwing.com (8).png";

// Суратҳои слайдер (аз assets-и худи лоиҳа)
const slides = [bannerImg1, bannerImg2, bannerImg3];

const HeroSection = () => {
  const titleRef = useRef(null);
  const welcomeRef = useRef(null);
  const startedRef = useRef(false); // то ки аниматсия ду бор иҷро нашавад
  const [slide, setSlide] = useState(0); // сурати ҷории слайдер

  // Ҳар 4 сония сурат худаш иваз мешавад.
  // slide дар [] аст, то ки баъди клик ҳисоб аз нав сар шавад.
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slide]);

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
        mx: { xs: "20px", md: "auto" },
        width: { xs: "auto", md: "100%" },
        backgroundColor: { xs: "transparent", md: "#FBFBFB" },
        background: {
          xs: "linear-gradient(135deg, #DFF1E1 0%, #EAF6EC 60%, #F3FAF4 100%)",
          md: "#FBFBFB",
        },
        borderRadius: { xs: "24px", md: 0 },
        overflow: { xs: "hidden", md: "visible" },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "20px 0 26px 20px", md: "40px 80px" },
        position: "relative",
        minHeight: { xs: "230px", md: "450px" },
      }}
    >
      <Box sx={{ flex: 1, pr: { md: 4 }, zIndex: 1 }}>
        <Typography
          ref={welcomeRef}
          sx={{
            color: "#3D3D3D",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "1px",
            mb: { xs: 0.5, md: 1 },
            fontSize: { xs: "11px", md: "14px" },
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
            fontSize: { xs: "24px", md: "55px" },
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
            fontSize: { xs: "12px", md: "14px" },
            lineHeight: 1.6,
            mb: { xs: 2, md: 4 },
            maxWidth: { xs: "190px", md: "500px" },
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
          endIcon={<ArrowForwardIcon sx={{ display: { xs: "inline-flex", md: "none" }, fontSize: "16px" }} />}
          sx={{
            backgroundColor: { xs: "transparent", md: "#46A358" },
            color: { xs: "#46A358", md: "#fff" },
            padding: { xs: 0, md: "10px 24px" },
            minWidth: { xs: "auto", md: 64 },
            fontWeight: "bold",
            fontSize: { xs: "13px", md: "14px" },
            borderRadius: "6px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: { xs: "transparent", md: "#3a8a49" },
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
          key={slide}
          src={slides[slide]}
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
            maxHeight: { xs: "190px", md: "400px" },
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "12px", md: "15px" },
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {slides.map((item, index) => (
          <Box
            key={index}
            onClick={() => setSlide(index)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor: slide === index ? "#46A358" : "#c5e0cb",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
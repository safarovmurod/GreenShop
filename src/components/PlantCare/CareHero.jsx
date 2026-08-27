import { Box, Button, Typography } from "@mui/material";
import image from "../../assets/02.png";

export default function CareHero() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 0 }, py: { xs: 5, md: 8 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.1fr .9fr" }, alignItems: "center", backgroundColor: "#f2f9f3" }}>
      <Box sx={{ p: { xs: 2, md: 5 } }}>
        <Typography sx={{ color: "#46a358", fontSize: 13, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>Plant care studio</Typography>
        <Typography component="h1" sx={{ mt: 1.5, color: "#3d3d3d", fontSize: { xs: 42, md: 62 }, lineHeight: 1.05, fontWeight: 700 }}>Help your plants thrive</Typography>
        <Typography sx={{ mt: 2, color: "#727272", maxWidth: 520, lineHeight: 1.7 }}>Simple, friendly guidance for watering, light, soil, and all the little details that make a difference.</Typography>
        <Button href="#basics" variant="contained" sx={{ mt: 3, backgroundColor: "#46a358", textTransform: "none", borderRadius: 1.5 }}>Explore the basics</Button>
      </Box>
      <Box component="img" src={image} alt="Healthy houseplant" sx={{ width: "100%", height: 330, objectFit: "contain" }} />
    </Box>
  );
}

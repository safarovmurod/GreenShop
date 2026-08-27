import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import image from "../../assets/01 1.png";

export default function FeaturedArticle() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: { xs: 5, md: 8 }, px: { xs: 2, md: 0 }, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, backgroundColor: "#f2f9f3" }}>
      <Box component="img" src={image} alt="Plant in a bright home" sx={{ width: "100%", height: { xs: 260, md: 360 }, objectFit: "contain" }} />
      <Box sx={{ p: { xs: 3, md: 6 }, alignSelf: "center" }}>
        <Typography sx={{ color: "#46a358", fontSize: 13, fontWeight: 700 }}>FEATURED ARTICLE</Typography>
        <Typography component="h2" sx={{ mt: 1.5, color: "#3d3d3d", fontSize: { xs: 28, md: 38 }, lineHeight: 1.1, fontWeight: 700 }}>
          Make room for a little more green
        </Typography>
        <Typography sx={{ mt: 2, color: "#727272", lineHeight: 1.7 }}>
          Discover an easy approach to choosing plants that suit your light, routine, and space.
        </Typography>
        <Button endIcon={<ArrowForward />} sx={{ mt: 2, px: 0, color: "#46a358", textTransform: "none" }}>
          Read article
        </Button>
      </Box>
    </Box>
  );
}

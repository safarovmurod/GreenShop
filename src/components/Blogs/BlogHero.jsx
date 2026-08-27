import { Box, Typography } from "@mui/material";

export default function BlogHero() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 0 }, pt: { xs: 5, md: 8 } }}>
      <Typography data-aos="fade-up" sx={{ color: "#46a358", fontSize: 13, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>
        From our journal
      </Typography>
      <Typography component="h1" data-aos="fade-up" data-aos-delay="100" sx={{ mt: 1.5, color: "#3d3d3d", fontSize: { xs: 42, md: 64 }, fontWeight: 700, lineHeight: 1.05 }}>
        Ideas for living greener
      </Typography>
      <Typography data-aos="fade-up" data-aos-delay="200" sx={{ mt: 2, maxWidth: 560, color: "#727272", fontSize: 16, lineHeight: 1.7 }}>
        Practical plant knowledge, thoughtful styling ideas, and small ways to bring more nature into your everyday life.
      </Typography>
    </Box>
  );
}

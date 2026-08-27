import { Box, Typography } from "@mui/material";

const rooms = [
  ["Sunny windows", "Aloe, snake plants, and succulents enjoy several hours of bright light."],
  ["Quiet corners", "Choose pothos, peace lilies, or ZZ plants for softer, lower-light spaces."],
  ["Humid rooms", "Ferns and calatheas appreciate bathrooms and kitchens with extra moisture."],
];

export default function CareByRoom() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 0 }, py: { xs: 6, md: 8 }, backgroundColor: "#fff" }}>
      <Typography component="h2" data-aos="fade-up" sx={{ color: "#3d3d3d", fontSize: 30, fontWeight: 700 }}>Choose by space</Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2, mt: 4 }}>
        {rooms.map(([title, text]) => (
          <Box key={title} sx={{ p: 3, backgroundColor: "#fafafa" }}>
            <Typography sx={{ color: "#3d3d3d", fontSize: 20, fontWeight: 600 }}>{title}</Typography>
            <Typography sx={{ mt: 1.5, color: "#727272", lineHeight: 1.7 }}>{text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

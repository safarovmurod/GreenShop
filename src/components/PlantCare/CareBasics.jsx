import { Box, Typography } from "@mui/material";

const basics = [
  ["01", "Water deeply", "Let the top layer of soil dry before watering again, then soak until water leaves the drainage holes."],
  ["02", "Find the light", "Bright, indirect light suits most houseplants. Rotate pots every few weeks for even growth."],
  ["03", "Feed gently", "Use a balanced fertilizer during active growth and reduce feeding through the darker months."],
];

export default function CareBasics() {
  return (
    <Box id="basics" sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 0 }, py: { xs: 6, md: 9 } }}>
      <Typography component="h2" sx={{ color: "#3d3d3d", fontSize: 30, fontWeight: 700 }}>The essentials</Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3, mt: 4 }}>
        {basics.map(([number, title, text]) => (
          <Box key={number} sx={{ borderTop: "2px solid #46a358", pt: 2 }}>
            <Typography sx={{ color: "#46a358", fontSize: 13, fontWeight: 700 }}>{number}</Typography>
            <Typography sx={{ mt: 3, color: "#3d3d3d", fontSize: 22, fontWeight: 600 }}>{title}</Typography>
            <Typography sx={{ mt: 1.5, color: "#727272", lineHeight: 1.7 }}>{text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

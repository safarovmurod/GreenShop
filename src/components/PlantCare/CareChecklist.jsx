import { Box, Button, Typography } from "@mui/material";

const checks = ["Check the soil before watering", "Dust leaves once a month", "Trim damaged or yellow leaves", "Turn pots toward the light"];

export default function CareChecklist() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 0 }, pb: { xs: 6, md: 10 } }}>
      <Box sx={{ p: { xs: 3, md: 5 }, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3, backgroundColor: "#3d3d3d" }}>
        <Box>
          <Typography component="h2" data-aos="fade-up" sx={{ color: "#fff", fontSize: 28, fontWeight: 700 }}>A small weekly ritual</Typography>
          <Typography sx={{ mt: 1, color: "#d7ddd8" }}>Four minutes of attention can keep your collection looking its best.</Typography>
        </Box>
        <Box sx={{ display: "grid", gap: 1, minWidth: { md: 330 } }}>
          {checks.map((check) => <Typography key={check} sx={{ color: "#fff", fontSize: 14 }}>✓ {check}</Typography>)}
        </Box>
      </Box>
      <Button href="/shop" variant="outlined" sx={{ mt: 3, color: "#46a358", borderColor: "#46a358", textTransform: "none" }}>Find a plant for your space</Button>
    </Box>
  );
}

import { Box, Button, TextField, Typography } from "@mui/material";

export default function BlogNewsletter() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mb: { xs: 6, md: 10 }, px: { xs: 2, md: 0 }, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { md: "center" }, justifyContent: "space-between", gap: 3, borderTop: "1px solid #e5e9e5", pt: 4 }}>
      <Box>
        <Typography component="h2" sx={{ color: "#3d3d3d", fontSize: 24, fontWeight: 700 }}>Stay close to nature</Typography>
        <Typography sx={{ mt: 1, color: "#727272" }}>Get fresh plant tips in your inbox.</Typography>
      </Box>
      <Box component="form" sx={{ display: "flex", width: { xs: "100%", md: 430 }, gap: 1 }}>
        <TextField aria-label="Email address" placeholder="Your email address" size="small" fullWidth />
        <Button type="submit" variant="contained" sx={{ backgroundColor: "#46a358", textTransform: "none", whiteSpace: "nowrap" }}>Subscribe</Button>
      </Box>
    </Box>
  );
}

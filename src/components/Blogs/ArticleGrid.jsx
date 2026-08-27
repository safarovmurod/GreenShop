import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const articles = [
  ["A calmer home", "How plants make everyday spaces feel more balanced and welcoming."],
  ["The beginner's guide", "Five easy-care plants that are perfect for your first collection."],
  ["Green corners", "Simple ideas for styling plants in small apartments and offices."],
];

export default function ArticleGrid() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 0 }, py: { xs: 6, md: 9 } }}>
      <Typography component="h2" data-aos="fade-up" sx={{ color: "#3d3d3d", fontSize: 28, fontWeight: 700 }}>Latest articles</Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 3, mt: 3 }}>
        {articles.map(([title, text], index) => (
          <Box key={title} data-aos="fade-up" data-aos-delay={index * 120} sx={{ p: 3, minHeight: 245, backgroundColor: index === 1 ? "#f2f9f3" : "#fafafa" }}>
            <Typography sx={{ color: "#46a358", fontSize: 13 }}>0{index + 1} / Journal</Typography>
            <Typography sx={{ mt: 5, color: "#3d3d3d", fontSize: 24, fontWeight: 600, lineHeight: 1.2 }}>{title}</Typography>
            <Typography sx={{ mt: 2, color: "#777", fontSize: 14, lineHeight: 1.7 }}>{text}</Typography>
            <Button endIcon={<ArrowForward />} sx={{ mt: 2, px: 0, color: "#46a358", textTransform: "none" }}>Read article</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

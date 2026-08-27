import { Box, Stack, Typography, Button } from "@mui/material";
import { useRouteError, Link } from "react-router";

export default function ErrorBoundary() {
  const error = useRouteError();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        px: { xs: "16px", lg: "40px" },
        backgroundColor: "#1C1C1C",
      }}
    >
      <Stack alignItems="center" gap="16px">
        <Typography sx={{ color: "#CAFF33", fontSize: "20px", fontWeight: 600 }}>
          Something went wrong
        </Typography>

        <Typography
          sx={{ maxWidth: "480px", color: "#99999B", fontSize: "14px", textAlign: "center" }}
        >
          {error?.statusText || error?.message || "Unknown error"}
        </Typography>

        <Button
          component={Link}
          to="/"
          sx={{
            height: "44px",
            px: "28px",
            mt: "8px",
            borderRadius: "100px",
            backgroundColor: "#CAFF33",
            color: "#1C1C1C",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "none",
            whiteSpace: "nowrap",
            "&:hover": { backgroundColor: "#CAFF33" },
          }}
        >
          Back to Home
        </Button>
      </Stack>
    </Box>
  );
}

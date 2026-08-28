import React from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

// Сатри ҷустуҷӯ + тугмаи филтр (танҳо дар мобилӣ, мувофиқи Figma)
const MobileSearch = ({ value, onChange, onFilterClick }) => {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        gap: "10px",
        px: "20px",
        pt: 2,
        pb: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          flex: 1,
          height: "48px",
          px: 2,
          borderRadius: "14px",
          backgroundColor: "#F5F6F5",
        }}
      >
        <SearchIcon sx={{ fontSize: "20px", color: "#9E9E9E" }} />
        <InputBase
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Find your plants"
          sx={{ flex: 1, fontSize: "15px", color: "#3D3D3D" }}
        />
      </Box>

      <IconButton
        onClick={onFilterClick}
        aria-label="Filters"
        sx={{
          width: "48px",
          height: "48px",
          borderRadius: "14px",
          color: "#fff",
          backgroundColor: "#46A358",
          "&:hover": { backgroundColor: "#3a8a49" },
        }}
      >
        <TuneIcon sx={{ fontSize: "22px" }} />
      </IconButton>
    </Box>
  );
};

export default MobileSearch;

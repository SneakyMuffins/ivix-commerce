import React from "react";
import { Box, TextField, Autocomplete } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const DataGridHeader = () => {
  return (
    <Box display="flex" sx={{ gap: 4, alignItems: "center" }}>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        label={
          <Box display="flex" alignItems="center">
            <SearchOutlinedIcon fontSize="small" />
            <span style={{ marginLeft: "8px", fontSize: "14px" }}>
              Search by Name, Brand, Variant, etc…
            </span>
          </Box>
        }
      />
      <Autocomplete
        disablePortal
        id="action"
        options={[{ label: "Action 1" }, { label: "Action 2" }]}
        sx={{ fontSize: "14px", width: 110 }}
        renderInput={(params) => (
          <TextField {...params} size="small" label="Action" />
        )}
      />
    </Box>
  );
};

export default DataGridHeader;

import React from "react";
import { Box, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const DataGridFooter = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography sx={{ fontSize: "14px" }}>1-10 of 195 items</Typography>
      <Box>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Box>
    </Box>
  );
};

export default DataGridFooter;

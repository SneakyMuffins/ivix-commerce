import { DataGrid as SourceDataGrid } from "@mui/x-data-grid";
import styled from "@mui/material/styles/styled";

const DataGrid = styled(SourceDataGrid)(({ theme }) => ({
  border: "none",
  background: "white",
  borderBottom: `1px solid #F1F1F5`,
  borderRadius: 0,
  "& .MuiDataGrid-columnHeaders": {
    bgcolor: "#FAFAFB",
  },
  "& .MuiDataGrid-withBorderColor": {
    border: 0,
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    color: "#44444F",
    fontWeight: "600",
  },
}));

export default DataGrid;

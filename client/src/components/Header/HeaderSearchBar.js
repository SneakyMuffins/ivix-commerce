import { InputBase } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const HeaderSearchBar = () => (
  <div className="search-bar">
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <SearchOutlinedIcon color="action" />
      <InputBase placeholder="Search..." sx={{ fontSize: "14px" }} />
    </div>
  </div>
);

export default HeaderSearchBar;

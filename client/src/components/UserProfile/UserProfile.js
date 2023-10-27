import { API_BASE_URL } from "../../api/config";

import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const UserProfile = () => (
  <Box display="flex" alignItems="center" gap={2}>
    <Avatar
      src={`${API_BASE_URL}${"/images/profile.png"}`}
      sx={{ width: 32, height: 32, mx: 1 }}
    />
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <div style={{ color: "black", fontWeight: "bold", fontSize: "14px" }}>
        Austin Robertson
      </div>
      <div style={{ color: "grey", fontSize: "12px" }}>
        Marketing Administrator
      </div>
    </Box>
    <ArrowDropDownOutlinedIcon color="action" />
  </Box>
);

export default UserProfile;

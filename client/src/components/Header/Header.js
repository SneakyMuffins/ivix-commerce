import React from "react";
import { AppBar, Toolbar, InputBase, Avatar } from "@mui/material";
import Badge from "@mui/material/Badge";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { API_BASE_URL } from "../../api/config";

const Header = () => {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        background: "white",
        cursor: "pointer",
        minHeight: "70px",
        justifyContent: "center"
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="search-bar" sx={{ mr: 2 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchOutlinedIcon color="action" />
            <InputBase placeholder="Search..." />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Badge color="error" overlap="circular" variant="dot">
            <NotificationsOutlinedIcon color="action" />
          </Badge>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="User"
              src={`${API_BASE_URL}${"/images/profile.png"}`}
              sx={{ width: 32, height: 32, mx: 1 }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{ color: "black", fontWeight: "bold", fontSize: "14px" }}
              >
                Austin Robertson
              </div>
              <div style={{ color: "grey", fontSize: "12px" }}>
                Marketing Administrator
              </div>
            </div>
            <ArrowDropDownOutlinedIcon color="action" />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

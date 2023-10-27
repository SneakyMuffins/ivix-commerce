import React from "react";

import Box from "@mui/material/Box";

import HeaderSearchBar from "./HeaderSearchBar";
import UserProfile from "../UserProfile/UserProfile";
import NotificationsBadge from "../NotificationsBadge/NotificationsBadge";

import { HeaderContainer, HeaderToolbar } from "./styled/Header.styled";

const Header = () => {
  return (
    <HeaderContainer elevation={0}>
      <HeaderToolbar>
        <HeaderSearchBar />
        <Box display="flex" alignItems="center" gap={3}>
          <NotificationsBadge />
          <UserProfile />
        </Box>
      </HeaderToolbar>
    </HeaderContainer>
  );
};

export default Header;

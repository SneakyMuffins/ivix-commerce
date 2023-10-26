import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Typography, Avatar, Switch } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your App Name
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="search-bar" sx={{ mr: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <SearchIcon />
              <InputBase placeholder="Search..." />
            </div>
          </div>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Avatar
            alt="User"
            src="/path-to-your-image.jpg"
            sx={{ width: 32, height: 32, mx: 1 }}
          />
          <div>
            <div className="user-name">John Doe</div>
            <div className="user-position">Position</div>
          </div>
          <Switch color="default" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

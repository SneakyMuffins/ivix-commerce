import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const NotificationsBadge = () => (
  <Badge color="error" overlap="circular" variant="dot">
    <NotificationsOutlinedIcon color="action" />
  </Badge>
);

export default NotificationsBadge;

import {
  Box,
  Button,
  Card,
  Fade,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import config from "../../config";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    localStorage.removeItem("TokenID");
  };
  return (
    <div className="h-[80px]  ">
      <div className=" fixed w-[calc(100%-250px)] flex justify-between p-[15px] bg-[#b2bac14d] backdrop-blur-md	">
        <div className="group bg-web-100 border rounded-full flex items-center hover:text-[#cc797f] ">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ flex: 1 }} placeholder="search" />
        </div>
        <div className="relative px-[20px] w-[150px] text-center ">
          <IconButton onClick={handleChange}>
            <CircleNotificationsIcon />
          </IconButton>

          <IconButton
            aria-controls={open ? "basic-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <PersonIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogOut}>
              <NavLink to={config.Routes.login}>
                <LogoutIcon /> Logout
              </NavLink>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="absolute right-24 top-16">
        <Box sx={{ display: "flex" }}>
          {/* <Fade in={checked}>
            <Paper sx={{ m: 1, width: 400 }} elevation={4}>
              <div className="flex items-center justify-between mb-[10px]">
                <h1 className="ml-[10px] text-[24px] font-bold">
                  Notification
                </h1>
                <IconButton
                  sx={{
                    padding: "10px",
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
              </div>
              <div className="mx-[10px] flex flex-row justify-between items-center">
                <span className="font-semibold text-[16px]">
                  Thông báo mới !
                </span>
                <Button
                  sx={{
                    textTransform: "none",
                    color: "#cc797f",
                  }}
                >
                  Xem tất cả
                </Button>
              </div>
              <div className="p-[10px]">
                <div className="flex">
                  <p>title</p>
                </div>
              </div>
            </Paper>
          </Fade> */}
        </Box>
      </div>
    </div>
  );
};

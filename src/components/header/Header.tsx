import { IconButton, InputBase } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import config from "../../config";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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
        <div className="px-[20px] w-[150px] text-center ">
          <IconButton>
            <CircleNotificationsIcon />
          </IconButton>
          <IconButton
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
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
    </div>
  );
};

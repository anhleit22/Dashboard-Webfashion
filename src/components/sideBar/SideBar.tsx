import { Typography } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";

import { listMenu } from "../../data/mockDataSideBar";

export const SideBar = () => {
  return (
    <div>
      <Sidebar>
        <a className="mt-[20px] ml-[20px]" href="/">
          <div className="p-[10px] ">
            <img
              className="w-[100px] m-auto"
              src="https://nouthemes.net/html/zorka/assets/images/logo.png"
              alt="Lehoanganh"
            ></img>
          </div>
        </a>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#de848a66",
                color: "#f2404d",
              },
            },
          }}
        >
          <div className="mx-[20px] flex items-center my-[20px] p-2 bg-primary-50 rounded-xl">
            <Typography className="w-full text-center">
              <span>ADMIN</span>
            </Typography>
          </div>
          {listMenu.map((item) => (
            <MenuItem
              style={{ textAlign: "center" }}
              key={item.title}
              component={<NavLink to={item.tofrom || "/dashboard"} />}
              icon={<item.icon />}
            >
              {item.title}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
};

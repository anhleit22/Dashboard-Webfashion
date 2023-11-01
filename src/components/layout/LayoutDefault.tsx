import React from "react";
import { layoutProps } from "../../typeGlobal";
import { Header } from "../header/Header";
import { SideBar } from "../sideBar/SideBar";

export const LayoutDefault = ({ children }: layoutProps) => {
  
  return (
    <div>
      <div className=" relative">
        <div className="fixed ">
          <SideBar />
        </div>
        <div className=" ml-[250px] h-full">
          <div className="relative z-50">
            <div className="">
              <Header />
            </div>
          </div>
          <div className="z-[-10] h-full pb-[30px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

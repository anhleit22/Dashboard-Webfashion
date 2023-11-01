import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { PropsItem } from "../../typeGlobal";

interface Props {
  item: PropsItem;
}

export const Paper: FC<Props> = (props) => {
  return (
    <Card>
      <div className=" py-[40px] px-[24px] flex justify-center items-center ">
        <div>
          <img
            className="w-[62px] h-[62px]"
            src={props.item.thumbnail}
            alt="LehoangAnh"
          ></img>
        </div>
        <div>
          <h1 className="text-center font-bold text-[24px]">
            {props.item.header}
          </h1>
          <CardContent className="text-web-300 text-[14px]">
            {props.item.title}
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

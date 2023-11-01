import { Button, Card, CardContent } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

export const NewCard = () => {
  return (
    <Card>
      <CardContent>
        <h3 className="font-bold">New Updates</h3>
      </CardContent>
      <CardContent>
        <div className="flex items-center mt-[16px]">
          <img
            className="w-[48px] h-[48px] rounded-xl"
            alt="LehoangAnh"
            src="https://minimal-kit-react.vercel.app/assets/images/covers/cover_1.jpg"
          />
          <div className="ml-[16px]">
            <p className="font-bold ">Chief Tactics Agent</p>
            <p className=" text-[#b2bac1]">
              The Football Is Good For Training And Recreational Purposes
            </p>
          </div>
          <span className="text-[12px] text-[#b2bac1] ml-10 pr-7">
            about 17 hours ago
          </span>
        </div>
      </CardContent>
      <div className="flex flex-row-reverse p-4 border-t border-dashed border-[#b2bac1]">
        <Button
          sx={{
            color: "black",
            textTransform: "none",
            fontWeight: "600",
          }}
        >
          View all
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </Card>
  );
};

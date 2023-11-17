import { useEffect, useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Card, Grid } from "@mui/material";
import { getDatabase, ref, onValue } from "firebase/database";
import { ProcessItem } from "../../typeGlobal";

const normalprocess = [
  {
    address: "",
    listporduct: "",
    name: "",
    numberphone: 0,
    total: 0,
  },
];

export const TimeLineAccessProduct = () => {
  const [listProcessItem, setListProcessItem] =
    useState<ProcessItem[]>(normalprocess);

  useEffect(() => {
    const database = getDatabase();
    const cartRef = ref(database, "/ListOder");
    onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (!!data) {
        setListProcessItem(data);
      } else {
        console.log("Data not found");
      }
    });
  }, []);
  return (
    <Grid container spacing={4}>
      <Grid item md={6}>
        <Card
          sx={{
            height: "260px",
            overflowY: "scroll",
          }}
        >
          <h1 className="mt-[10px] ml-[10px] font-bold">List Product</h1>
          <table className=" border-b w-full mt-[20px]">
            <thead>
              <tr>
                <th className="product-remove w-[30px]">STT</th>
                <th className="product-name w-[410px]">Name</th>
                <th className="product-name w-[410px]">List Product</th>
                <th className="product-quantity w-[234px]">Number Phone</th>
                <th className="product-subtotal w-[170px]">Total</th>
              </tr>
            </thead>
          </table>
          {listProcessItem.map((item: ProcessItem, index) => (
            <div key={index} className="flex items-center w-full h-[50px]">
              <span className="w-[30px]">{index}</span>
              <span className="w-[160px]">{item.name}</span>
              <span className="w-[160px] overflow-hidden">
                {item.listporduct}
              </span>
              <span className="w-[160px]">{item.numberphone}</span>
              <span className="w-[80px]">${item.total}</span>
            </div>
          ))}
        </Card>
      </Grid>

      <Grid item md={6}>
        <Card>
          <h1 className="mt-[10px] ml-[10px] font-bold">Product progress</h1>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="error" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ fontSize: "12px", fontWeight: "600" }}>
                Order confirmation
                <div className="font-normal">
                  <span>Time</span>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ fontSize: "12px", fontWeight: "600" }}>
                Packing
                <div className="font-normal">
                  <span>Time</span>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent sx={{ fontSize: "12px", fontWeight: "600" }}>
                Successful delivery
                <div className="font-normal">
                  <span>Time</span>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Card>
      </Grid>
    </Grid>
  );
};

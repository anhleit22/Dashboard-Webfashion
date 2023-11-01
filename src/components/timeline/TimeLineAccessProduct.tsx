import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Card, Grid } from "@mui/material";

export const TimeLineAccessProduct = () => {
  return (
    <Grid container spacing={4}>
      <Grid item md={6}>
        <Card>
          <h1 className="mt-[10px] ml-[10px] font-bold">Packaged Product</h1>
          <div className="m-[10px]">Customer Name: </div>
          <div className="m-[10px]">Name Product: </div>
          <div className="m-[10px]">Packing time:</div>
          <div className="m-[10px]">Delivery time:</div>
          <div className="m-[10px]">Place of delivery:</div>
          <div className="m-[10px]">Delivery location:</div>
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
              <TimelineContent>First</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Secondary</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="success" />
              </TimelineSeparator>
              <TimelineContent>Success</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Card>
      </Grid>
    </Grid>
  );
};

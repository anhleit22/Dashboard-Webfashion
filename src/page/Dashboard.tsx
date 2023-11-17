import React from "react";
import { Container, Grid } from "@mui/material";

import { CircleChart } from "../components/charts/circleChart/CircleChart";
import { BarChart } from "../components/charts/barChart/BarChart";
import { RadarChart } from "../components/charts/radarChart.tsx/RadarChart";
import { HorizontalChart } from "../components/charts/horizontalChart/HorizontalChart";
import { TrafficSite } from "../components/traffic/TrafficSite";
import { NewCard } from "../components/paperCard/NewCard";
import { TimeLineAccessProduct } from "../components/timeline/TimeLineAccessProduct";
import { Statics } from "../components/Static/Statics";

export const Dashboard: React.FC = () => {
  return (
    <div className="px-[24px] mb-[40px]">
      <div className="w-full">
        <h4 className="font-bold text-[24px] my-[30px]">Hi, Welcome back 👋</h4>
        <div></div>
        <Container fixed maxWidth="xl">
          <Grid container spacing={4}>
            <Statics />
            <Grid item md={8}>
              <BarChart />
            </Grid>
            <Grid item md={4}>
              <CircleChart />
            </Grid>
            <Grid item md={8}>
              <HorizontalChart />
            </Grid>
            <Grid item md={4}>
              <RadarChart />
            </Grid>
            <Grid item md={12}>
              <TimeLineAccessProduct />
            </Grid>
            <Grid item md={4}>
              <TrafficSite />
            </Grid>
            <Grid item md={8}>
              <NewCard />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

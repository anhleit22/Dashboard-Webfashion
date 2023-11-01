import React from "react";
import { Paper } from "../components/paperCard/Paper";
import { Container, Grid } from "@mui/material";
import { datapaper } from "../data/mockDataPaper";
import { CircleChart } from "../components/charts/circleChart/CircleChart";
import { BarChart } from "../components/charts/barChart/BarChart";
import { RadarChart } from "../components/charts/radarChart.tsx/RadarChart";
import { HorizontalChart } from "../components/charts/horizontalChart/HorizontalChart";
import { TrafficSite } from "../components/traffic/TrafficSite";
import { NewCard } from "../components/paperCard/NewCard";
import { TimeLineAccessProduct } from "../components/timeline/TimeLineAccessProduct";

export const Dashboard: React.FC = () => {
  return (
    <div className="px-[24px] mb-[40px]">
      <div className="w-full">
        <h4 className="font-bold text-[24px] mb-[40px]">Hi, Welcome back 👋</h4>
        <Container fixed maxWidth="xl">
          <Grid container spacing={4}>
            {datapaper.map((item) => (
              <Grid item sm={4} md={3}>
                <Paper key={item.header} item={item}></Paper>
              </Grid>
            ))}
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

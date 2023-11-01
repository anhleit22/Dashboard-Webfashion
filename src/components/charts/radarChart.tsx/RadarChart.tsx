import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Card, CardContent } from "@mui/material";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["Clothes", "Trousers", "Shirt", "Dress"],
  datasets: [
    {
      label: "Series 1",
      data: [2, 9, 3, 5],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Series 2",
      data: [7, 6, 3, 2],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderColor: "rgba(53, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

export const RadarChart = () => {
  return (
    <Card>
      <CardContent>
        <h3 className="font-bold">Current Subject</h3>
      </CardContent>
      <Radar className="p-5" data={data} />
    </Card>
  );
};

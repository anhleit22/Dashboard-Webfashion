import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Card, CardContent } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "Team A",
      data: [10, 20, 30, 50, 10, 60, 10, 23, 45],
      backgroundColor: "rgba(255, 99, 132, 0.7)",
    },
    {
      label: "Team B",
      data: [11, 34, 5, 62, 65, 34, 32, 12, 100],
      backgroundColor: "rgba(53, 162, 235, 0.7)",
    },
  ],
};

export const BarChart = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <h2 className="font-bold">WebSide Visits</h2>
          <span className="text-[12px]">(+43%) than last year</span>
        </CardContent>
        <Bar className="p-4" options={options} data={data} />
      </Card>
    </div>
  );
};

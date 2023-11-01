import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Card, CardContent } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["American", "Asia", "Europe", "Africa"],
  datasets: [
    {
      label: "Current Visits",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

export const CircleChart = () => {
  return (
    <Card className="">
      <CardContent>
        <h2 className="font-bold">Current Visits</h2>
      </CardContent>
      <Pie className="p-3" data={data} />
    </Card>
  );
};

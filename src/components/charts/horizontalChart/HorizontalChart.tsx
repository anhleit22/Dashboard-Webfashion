import { Card, CardContent } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      label: "Series 1",
      data: [10, 20, 6, 90, 80, 20, 40, 200],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Series 2",
      data: [25, 8, 10, 9, 76, 22, 89],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Series 3",
      data: [80, 90, 78, 110, 150, 29, 40, 200],
      borderColor: "rgba (255, 86, 48)",
      backgroundColor: "rgba (255, 86, 48, 0.5)",
    },
  ],
};

export const HorizontalChart = () => {
  return (
    <Card>
      <CardContent>
        <h2 className="font-bold"> Conversion Rates</h2>
        <h4 className="text-[12px]">(+43%) than last year</h4>
      </CardContent>
      <Line options={options} data={data} />
    </Card>
  );
};

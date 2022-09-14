// import ResizableBox from "../ResizableBox";
// import useDemoConfig from "../useDemoConfig";
import React from "react";
import { Bar } from "react-chartjs-2";
// import faker from 'faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

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
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => 1),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => 3),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const MultipleAxes = () => {
  return (
    <>
      <br />
      <br />
      {/* <Bar options={options} data={data} />; */}
    </>
  );
};

export default MultipleAxes;

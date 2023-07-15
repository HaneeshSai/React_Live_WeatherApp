import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart({ min, max }) {
  const data = {
    labels: ["min", "max"],
    datasets: [
      {
        label: "Temp",
        data: [min, max],
        borderColor: "#f0eff3b5",
        borderWidth: 1,
        barThickness: 10,
        barHeight: 40,
      },
    ],
  };

  const options = {};
  return (
    <div>
      <div>
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}

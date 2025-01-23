
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from "chart.js";

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const DashboardChart = ({ type = "bar", data, options }) => {
  return (
    <div style={{ height: "400px" }}>
      {type === "bar" ? (
        <Bar data={data} options={options} />
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
};

export default DashboardChart;

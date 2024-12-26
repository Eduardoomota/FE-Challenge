import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";
import * as S from "./activity.styles";

// Explicitly unregister or avoid using DataLabels plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend
);

const Activity: React.FC = React.memo(() => {
  const data = useMemo(
    () => ({
      labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "Deposit",
          data: [200, 300, 100, 400, 150, 200, 250],
          backgroundColor: "#007bff",
          borderRadius: 10,
          borderSkipped: false,
        },
        {
          label: "Withdraw",
          data: [500, 400, 300, 500, 100, 300, 400],
          backgroundColor: "#000000",
          borderRadius: 10,
          borderSkipped: false,
        },
      ],
    }),
    []
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top" as const,
          align: "end" as const,
          labels: {
            color: "#718EBF",
            font: {
              size: 12,
            },
            usePointStyle: true,
            padding: 20,
          },
        },
        tooltip: {
          enabled: false, // Disable tooltips if needed
        },
        datalabels: {
          display: false, // Disable DataLabels plugin explicitly
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 600,
          grid: {
            color: "#e0e0e0",
          },
          ticks: {
            stepSize: 100,
            color: "#718EBF",
            font: {
              size: 12,
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 12,
              color: "#718EBF",
            },
          },
          stacked: false,
        },
      },
      barPercentage: 0.5,
      categoryPercentage: 0.6,
    }),
    []
  );

  return (
    <S.Container>
      <S.Title>Weekly Activity</S.Title>
      <S.ChartWrapper>
        <Bar data={data} options={options} />
      </S.ChartWrapper>
    </S.Container>
  );
});

export default Activity;

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import * as S from "./expense-statistics.styles";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface VariableRadiusPieProps {
  data?: number[];
  labels?: string[];
  backgroundColors?: string[];
}

const ExpenseStatistics: React.FC<VariableRadiusPieProps> = React.memo(
  ({
    data = [30, 15, 20, 35],
    labels = ["Entertainment", "Bill Expense", "Investment", "Others"],
    backgroundColors = ["#1e3a8a", "#fb923c", "#3b82f6", "#000"],
  }) => {
    const pieData = React.useMemo(
      () => ({
        labels,
        datasets: [
          {
            data,
            backgroundColor: backgroundColors,
            borderWidth: 5,
            borderColor: "#fff",
            offset: [10, 10, 10, 10],
          },
        ],
      }),
      [data, labels, backgroundColors]
    );

    const options: ChartOptions<"pie"> = React.useMemo(
      () => ({
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || "";
                const value = context.raw || 0;
                const total = (context.dataset.data as number[]).reduce(
                  (a, b) => a + b,
                  0
                );
                const percentage = ((value as number) / total) * 100;
                return `${label}: ${percentage.toFixed(2)}% (${value})`;
              },
            },
          },
          datalabels: {
            color: "#fff",
            font: {
              size: 14,
              weight: "bold",
            },
            formatter: (value, context) => {
              const total = (context.dataset.data as number[]).reduce(
                (a, b) => a + b,
                0
              );
              const percentage = ((value as number) / total) * 100;
              return `${percentage.toFixed(0)}%`;
            },
            align: "center",
            anchor: "center",
          },
        },
      }),
      []
    );

    return (
      <S.ExpenseStatisticsContainer>
        <h2>Expense Statistics</h2>
        <S.ChartWrapper>
          <Pie data={pieData} options={options} />
        </S.ChartWrapper>
      </S.ExpenseStatisticsContainer>
    );
  }
);

ExpenseStatistics.displayName = "ExpenseStatistics";

export default ExpenseStatistics;

import { useState } from "react";
import ReactApexChart from "react-apexcharts";

function Chart({ budgets }) {
  const [state, setState] = useState({
    series: budgets.map((b) => b.maximum),
    options: {
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: "Public sans",
              },
              value: {
                show: true,
                fontFamily: "Public sans",
              },
              total: {
                show: true,
                fontFamily: "Public sans",
              },
            },
          },
        },
      },
      chart: {
        type: "donut",
        fontFamily: "Public sans",
      },
      legend: {
        show: false, 
      },
      colors: budgets.map((b) => b.theme),

      labels: budgets.map((b) => b.category),

      responsive: [
        {
          breakpoint: 500,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
console.log(budgets.map((b) => b.theme));

  return (
    <div>
      <div style={{ width: "300px" }} id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default Chart;

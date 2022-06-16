import React from "react";
import ReactApexChart from "react-apexcharts";

const Donut = () => {
  const graphic = {
    series: [20],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },

      colors: ["#FED200"],

      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },

          track: {
            background: "#FF794F",
          },

          dataLabels: {
            show: true,
            value: {
              color: "#FFFFFF",
              fontSize: "50px",
              show: true,
              formatter: () => {
                return "40%";
              },
            },
          },
        },
      },

      stroke: {
        lineCap: "round",
      },

      labels: [""],
    },
  };
  return (
    <ReactApexChart
      options={graphic.options}
      series={graphic.series}
      type="radialBar"
      height={350}
    />
  );
};

export default Donut;

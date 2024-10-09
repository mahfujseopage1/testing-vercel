import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

const GradientBarChart = () => {
  const data = [44, 60, 41, 80, 22, 43, 21];
  const categories = [
    "0-40%",
    "40-50%",
    "50-75%",
    "75-80%",
    "80-85%",
    "85-90%",
    "90-100%",
  ];

  const getColorStops = (value) => {
    if (value < 50) {
      return ["#FFC0C0", "#FF0000"];
    } else if (value < 60) {
      return ["#F95E85", "#FFC0C0"];
    } else if (value < 80) {
      return ["#FB8332", "#F8C332"];
    } else {
      return ["#2BC89B", "#7AD943"];
    }
  };

  const colors = data.map(getColorStops);

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    series: [
      {
        name: "Data",
        data: data,
      },
    ],
    xaxis: {
      categories: categories,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: colors.map((c) => c[1]),
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [0, 100],
      },
      colors: colors.map((c) => c[0]),
    },
  };

  return (
    <Chart options={options} series={options.series} type="bar" height={350} />
  );
};

export default GradientBarChart;

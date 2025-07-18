import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const HumidityChart = ({ humidity }) => {
  const data = {
    labels: ["Độ ẩm (%)"],
    datasets: [
      {
        data: [humidity, 100 - humidity], // Giá trị độ ẩm và phần còn lại
        backgroundColor: ["#36A2EB", "#E7E7E7"], // Màu cho độ ẩm và phần còn lại
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    rotation: -90,
    circumference: 180,
    cutout: "70%",
    maintainAspectRatio: true,
    responsive: true,
    //cutoutPercentage: 50, // Độ lõm của nửa hình bánh (50% là nửa hình bánh)
  };

  return (
    <div className="chart-item">
      <h4 style={{ textAlign: "center" }}>Độ ẩm</h4>
      <Doughnut data={data} options={options} />
      <div className="chart-center-text">{`${humidity?.toFixed(1)}%`}</div>
    </div>
  );
};

// const SmokeChart = ({ smoke }) => {
//   const data = {
//     labels: ["Độ khói (%)"],
//     datasets: [
//       {
//         data: [smoke, 100 - smoke], // Giá trị độ khói và phần còn lại
//         backgroundColor: ["#FF6384", "#E7E7E7"], // Màu cho độ khói và phần còn lại
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     rotation: -90,
//     circumference: 180,
//     cutout: "70%",
//     maintainAspectRatio: true,
//     responsive: true,
//   };

//   return (
//     <div className="chart-item">
//       <h4 style={{ textAlign: "center" }}>Khói</h4>
//       <Doughnut data={data} options={options} />
//       <div className="chart-center-text">{`${smoke}%`}</div>
//     </div>
//   );
// };

const TemperatureChart = ({ temperature }) => {
  const data = {
    labels: ["Nhiệt độ (°C)"],
    datasets: [
      {
        data: [temperature, 100 - temperature], // Giá trị nhiệt độ và phần còn lại
        backgroundColor: ["#FFCE56", "#E7E7E7"], // Màu cho nhiệt độ và phần còn lại
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    rotation: -90,
    circumference: 180,
    cutout: "70%",
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className="chart-item">
      <h4 style={{ textAlign: "center" }}>Nhiệt độ</h4>
      <Doughnut data={data} options={options} />
      <div className="chart-center-text">{`${temperature?.toFixed(1)}°C`}</div>
    </div>
  );
};
const COChart = ({ co }) => {
  const data = {
    labels: ["CO (ppm)"],
    datasets: [
      {
        data: [co, 100 - co], // Giả định max là 100 ppm
        backgroundColor: ["#8E44AD", "#E7E7E7"], // Màu tím và xám
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    rotation: -90,
    circumference: 180,
    cutout: "70%",
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className="chart-item">
      <h4 style={{ textAlign: "center" }}>Khí CO</h4>
      <Doughnut data={data} options={options} />
      <div className="chart-center-text">{`${co?.toFixed(1)} ppm`}</div>
    </div>
  );
};

const PMChart = ({ pm }) => {
  const data = {
    labels: ["PM (µg/m³)"],
    datasets: [
      {
        data: [pm, 500 - pm], // Giả định max là 500 µg/m³
        backgroundColor: ["#2ECC71", "#E7E7E7"], // Xanh lá & xám
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    rotation: -90,
    circumference: 180,
    cutout: "70%",
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className="chart-item">
      <h4 style={{ textAlign: "center" }}>PM2.5</h4>
      <Doughnut data={data} options={options} />
      <div className="chart-center-text">{`${pm?.toFixed(1)} µg/m³`}</div>
    </div>
  );
};
// return (
//     <div className="chart-item">
//       <h4 style={{ textAlign: "center" }}>Nhiệt độ</h4>
//       <Doughnut data={data} options={options} />
//       <div className="chart-center-text">{`${temperature?.toFixed(1)}°C`}</div>
//     </div>


export { HumidityChart, TemperatureChart, COChart, PMChart };

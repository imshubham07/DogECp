import React from 'react';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  datasets: [

  ],
};

const ExperimentGraph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend since we don’t have data yet
      },
      title: {
        display: false, // No title for the chart itself
      },
    },
    scales: {
      x: {
        display: false, // Hide X-axis (no labels, just grid lines)
        grid: {
          color: 'white', // White grid lines
          borderColor: 'white',
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 220,
        ticks: {
          stepSize: 20, // Interval of 20
          color: 'red', // Red labels as specified (changed from blue to match your request)
          font: {
            size: 14, // Larger font size for visibility
            weight: 'bold', // Bold font
          },
          callback: (value) => value, // Show the value as is
        },
        grid: {
          color: 'black', // Black grid lines (you can change to white if preferred)
          borderColor: 'red',
        },
        position: 'left', // Left Y-axis
        title: {
          display: true,
          text: 'Heart Rate (bpm)', // Label for the left Y-axis
          color: 'red', // Match the tick color for consistency
          font: {
            size: 14,
            weight: 'bold',
          },
          padding: { top: 0, bottom: 10 }, // Add padding for better spacing
        },
      },
      yRight: {
        beginAtZero: true,
        min: 0,
        max: 220,
        ticks: {
          stepSize: 20,
          color: 'blue',
          font: {
            size: 14,
            weight: 'bold',
          },
          callback: (value) => value,
        },
        grid: {
          drawOnChartArea: false, // Don’t draw grid lines for the right axis
          borderColor: 'black',
        },
        position: 'right', // Right-side Y-axis
        title: {
          display: true,
          text: 'Mean BP (mm Hg)', // Label for the right Y-axis
          color: 'blue', // Match the tick color for consistency
          font: {
            size: 14,
            weight: 'bold',
          },
          padding: { top: 0, bottom: 10 }, // Add padding for better spacing
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    backgroundColor: '#f0f0f0', // Light gray background
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Chart type="line" data={data} options={options} />
    </div>
  );
};

export default ExperimentGraph;
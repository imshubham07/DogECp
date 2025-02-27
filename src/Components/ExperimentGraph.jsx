import React, { useEffect, useRef, useState } from 'react';
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

const ExperimentGraph = ({ heartRate = 145, bloodPressure = 120 }) => {
  const chartRef = useRef(null);
  const [heartRateData, setHeartRateData] = useState([]);
  const [bpData, setBpData] = useState([]);
  const [timePoints, setTimePoints] = useState([]);

  useEffect(() => {
    // Generate 91 time points (0 to 90)
    const points = Array.from({ length: 91 }, (_, i) => i);
    setTimePoints(points);

    // Initialize data with null until X=90, then set the provided values
    const initialHeartRate = Array(91).fill(null);
    initialHeartRate[90] = heartRate;
    
    const initialBP = Array(91).fill(null);
    initialBP[90] = bloodPressure;

    setHeartRateData(initialHeartRate);
    setBpData(initialBP);
  }, [heartRate, bloodPressure]);

  const data = {
    labels: timePoints,
    datasets: [
      {
        label: 'Heart Rate',
        data: heartRateData,
        borderColor: '#ff4500',
        yAxisID: 'yLeft',
        tension: 0,
        pointRadius: 0,
        borderWidth: 2,
        spanGaps: true, // Allows gaps in data (null values)
      },
      {
        label: 'Mean BP',
        data: bpData,
        borderColor: '#0000ff',
        yAxisID: 'yRight',
        tension: 0,
        pointRadius: 0,
        borderWidth: 2,
        spanGaps: true,
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        display: true, 
        position: 'bottom', // Legend at the bottom, matching the image
        labels: {
          boxWidth: 20, // Wider legend boxes for better visibility
          boxHeight: 10,
          font: { size: 12 }
        }
      },
      title: { display: false },
    },
    scales: {
      x: {
        display: true,
        title: { 
          display: true, 
          text: 'Drug/Procedure(code)', 
          color: '#000' 
        },
        ticks: { 
          color: '#000', // Black text for X-axis labels
          stepSize: 10, // Match the X-axis intervals in the image (0, 10, 20, ..., 90)
          callback: (value) => value // Ensure plain numbers
        },
      },
      yLeft: {
        min: 0,
        max: 220, // Match the image's Y-axis range for heart rate
        position: 'left',
        ticks: { 
          color: '#ff4500', // Orange/red for heart rate, matching image
          stepSize: 20, // Match the grid intervals in the image
          callback: (value) => value // Ensure plain numbers
        },
        title: { 
          text: 'Heart Rate (bpm)', 
          color: '#ff4500', // Orange/red for heart rate
          display: true 
        },
        grid: { 
          color: '#e0e0e0', // Light gray grid lines, matching image
          drawBorder: true 
        },
      },
      yRight: {
        min: 0,
        max: 200, // Match the image's Y-axis range for blood pressure
        position: 'right',
        ticks: { 
          color: '#0000ff', // Blue for blood pressure, matching image
          stepSize: 20, // Match the grid intervals in the image
          callback: (value) => value // Ensure plain numbers
        },
        title: { 
          text: 'Mean BP (mm Hg)', 
          color: '#0000ff', // Blue for blood pressure
          display: true 
        },
        grid: { 
          drawOnChartArea: false, // No grid lines on right Y-axis, matching image
          drawBorder: true 
        },
      },
    },
  };

  return (
    <div style={{ 
      position: 'relative', 
      height: '400px', 
      width: '100%', 
      backgroundColor: '#ffffff', 
      padding: '20px', 
      borderRadius: '8px' 
    }}>
      <Chart
        ref={chartRef}
        type="line"
        data={data}
        options={options}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default ExperimentGraph;
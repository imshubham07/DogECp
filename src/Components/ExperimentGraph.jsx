import { useEffect, useRef, useState } from 'react';
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

const ExperimentGraph = ({ heartRateData, bpData }) => {
  const chartRef = useRef(null);
  const [timePoints, setTimePoints] = useState([]);
  const [processedHeartRate, setProcessedHeartRate] = useState([]);
  const [processedBP, setProcessedBP] = useState([]);
  const [simulationActive, setSimulationActive] = useState(true);

  // Function to add subtle oscillations to data
  const addRealisticOscillations = (baseData, settings) => {
    if (!baseData || baseData.length === 0) return [];
    
    const { amplitude, frequency, noiseFactor } = settings;
    const result = [];
    
    // Process each data point
    for (let i = 0; i < baseData.length; i++) {
      if (baseData[i] === null) {
        result.push(null);
        continue;
      }
      
      // Base value plus oscillation 
      const oscillation = amplitude * Math.sin(2 * Math.PI * frequency * i / 10);
      // Add some randomness for more realistic look
      const noise = noiseFactor * (Math.random() - 0.5);
      
      result.push(baseData[i] + oscillation + noise);
    }
    
    return result;
  };

  // Live simulation effect
  useEffect(() => {
    if (!simulationActive) return;
    
    const interval = setInterval(() => {
      // Recalculate oscillations slightly differently each time
      setProcessedHeartRate(prev => {
        if (!heartRateData || heartRateData.length === 0) return prev;
        return addRealisticOscillations(heartRateData, {
          amplitude: 0.8,
          frequency: 0.5 + Math.random() * 0.1, // Slight frequency variation
          noiseFactor: 0.3
        });
      });
      
      setProcessedBP(prev => {
        if (!bpData || bpData.length === 0) return prev;
        return addRealisticOscillations(bpData, {
          amplitude: 1.5,
          frequency: 0.7 + Math.random() * 0.2, // Slight frequency variation
          noiseFactor: 0.7
        });
      });
    }, 100); // Update every 100ms for smooth appearance
    
    return () => clearInterval(interval);
  }, [heartRateData, bpData, simulationActive]);

  // Set up time points
  useEffect(() => {
    const points = Array.from({ length: 91 }, (_, i) => i);
    setTimePoints(points);
    
    // Initial processing
    if (heartRateData && heartRateData.length > 0) {
      setProcessedHeartRate(addRealisticOscillations(heartRateData, {
        amplitude: 0.8,
        frequency: 0.5,
        noiseFactor: 0.3
      }));
    }
    
    if (bpData && bpData.length > 0) {
      setProcessedBP(addRealisticOscillations(bpData, {
        amplitude: 1.5,
        frequency: 0.7,
        noiseFactor: 0.7
      }));
    }
  }, []);

  const data = {
    labels: timePoints,
    datasets: [
      {
        label: 'Heart Rate',
        data: processedHeartRate,
        borderColor: '#ff4500',
        yAxisID: 'yLeft',
        tension: 0.1,
        pointRadius: 0, // No points for smoother line
        borderWidth: 1.5,
        spanGaps: false,
      },
      {
        label: 'Mean BP',
        data: processedBP,
        borderColor: '#0000ff',
        yAxisID: 'yRight',
        tension: 0.1,
        pointRadius: 0, // No points for smoother line
        borderWidth: 1.5,
        spanGaps: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0 // Disable animations for better performance
    },
    plugins: {
      legend: { 
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 20,
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
          color: '#000',
          stepSize: 10,
          callback: (value) => value
        },
        grid: {
          color: '#e0e0e0',
          drawBorder: true
        }
      },
      yLeft: {
        min: 0,
        max: 220,
        position: 'left',
        ticks: { 
          color: '#ff4500',
          stepSize: 20,
          callback: (value) => value
        },
        title: { 
          text: 'Heart Rate (bpm)', 
          color: '#ff4500',
          display: true 
        },
        grid: { 
          color: '#e0e0e0',
          drawBorder: true 
        },
      },
      yRight: {
        min: 0,
        max: 200,
        position: 'right',
        ticks: { 
          color: '#0000ff',
          stepSize: 20,
          callback: (value) => value
        },
        title: { 
          text: 'Mean BP (mm Hg)', 
          color: '#0000ff',
          display: true 
        },
        grid: { 
          drawOnChartArea: false,
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
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
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
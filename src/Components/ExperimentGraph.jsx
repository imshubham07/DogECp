import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

// Manually input the exact data points from the image
const data = [
  { time: 0, orangeMetric: 0, blueMetric: 0 },
  { time: 90, orangeMetric: 0, blueMetric: 0 }
];

const ExperimentGraph = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <LineChart
        width={1800}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid 
          stroke="#f0f0f0" 
          strokeDasharray="3 3" 
          vertical={true} 
          horizontal={true}
        />
        <XAxis 
          type="number"
          dataKey="time"
          domain={[0, 90]}
          tickCount={46}
          label={{ 
            value: 'Time (sec)', 
            position: 'insideBottom', 
            offset: -10 
          }}
        />
        <YAxis 
          yAxisId="left"
          domain={[0, 220]}
          tickCount={12}
          label={{ 
            value: 'Heat Rate (left)', 
            angle: -90, 
            position: 'insideLeft',
            offset: 10 
          }}
        />
        <YAxis 
          yAxisId="right"
          orientation="right"
          domain={[0, 200]}
          tickCount={11}
          label={{ 
            value: 'Heat Rate (right)', 
            angle: 90, 
            position: 'insideRight',
            offset: 10 
          }}
        />
        <Line 
          yAxisId="left"
          type="monotone"
          dataKey="orangeMetric"
          stroke="#ff7f0e"
          strokeWidth={2}
          dot={false}
        />
        <Line 
          yAxisId="right"
          type="monotone"
          dataKey="blueMetric"
          stroke="#1f77b4"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default ExperimentGraph;
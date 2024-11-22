import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
const ExperimentGraph = () => {
  const generateData = () => {
    const data = [];
    for (let i = 0; i < 500; i++) {
      const baseHR = 120;
      const baseBP = 100;

      let hr = baseHR + Math.sin(i / 20) * 10;
      let bp = baseBP + Math.cos(i / 15) * 5;

      if (i > 200 && i < 220) {
        hr = 160;
        bp = 120;
      }

      data.push({
        time: i,
        heartRate: hr,
        bloodPressure: bp,
      });
    }
    return data;
  };

  return (
    <div className="h-64 w-full mb-6">
      <ResponsiveContainer>
        <LineChart
          data={generateData()}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="time" tick={{ fontSize: 12 }} interval={50} />
          <YAxis
            yAxisId="hr"
            domain={[0, 200]}
            orientation="left"
            stroke="#ef4444"
            tick={{ fontSize: 12 }}
          />
          <YAxis
            yAxisId="bp"
            domain={[0, 200]}
            orientation="right"
            stroke="#3b82f6"
            tick={{ fontSize: 12 }}
          />
          <Line
            yAxisId="hr"
            type="monotone"
            dataKey="heartRate"
            stroke="#ef4444"
            dot={false}
          />
          <Line
            yAxisId="bp"
            type="monotone"
            dataKey="bloodPressure"
            stroke="#3b82f6"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExperimentGraph

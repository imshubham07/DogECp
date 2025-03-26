import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const drugImages = {
  'Carotid occlusion': '/assets/drug/normal.png',
  'Central vagus': '/images/central-vagus.png',
  'Peripheral vagus': '/images/peripheral-vagus.png',
  'Epinephrine': '/images/epinephrine.png',
  'Norepinephrine': '/images/norepinephrine.png',
  'Isoprenaline': '/images/isoprenaline.png',
  'Acetylcholine': '/images/acetylcholine.png',
  'Histamine': '/images/histamine.png',
  'Ephedrine': '/images/ephedrine.png',
  'Phentolamine': '/images/phentolamine.png',
  'Propranolol': '/images/propranolol.png',
  'Atropine': '/images/atropine.png',
  'Mepyramine': '/images/mepyramine.png',
  'Cimetidine': '/images/cimetidine.png'
};

const ExperimentGraph = ({ 
  heartRateData, 
  bpData, 
  selectedDrug 
}) => {
  // Prepare data for the chart (keep original data structure)
  const chartData = heartRateData.map((hr, index) => ({
    time: index,
    orangeMetric: hr,
    blueMetric: bpData[index]
  })).filter(item => item.orangeMetric !== null);

  // Add null check for selectedDrug and use optional chaining
  const drugImageSrc = selectedDrug ? drugImages[selectedDrug] : null;

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <LineChart
        width={1800}
        height={400}
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid 
          stroke="#f0f0f0" 
          strokeDasharray="3 3" 
          vertical={true} 
          horizontal={true}
        />
        <XAxis 
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
            value: 'Orange Metric (HR)', 
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
            value: 'Blue Metric (BP)', 
            angle: 90, 
            position: 'insideRight',
            offset: 10 
          }}
        />
        {/* Remove Line components */}
      </LineChart>

      {/* Overlay image when a drug is selected */}
      {drugImageSrc && (
        <div 
          style={{
            position: 'absolute', 
            top: '50%', 
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '80%',
            maxHeight: '80%',
            zIndex: 10
          }}
        >
          <img 
            src={drugImageSrc} 
            alt={`${selectedDrug} graph`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ExperimentGraph;
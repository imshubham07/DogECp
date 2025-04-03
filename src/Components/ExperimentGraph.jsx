import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';

// Import images directly
import normalImage from '../assets/drug/normal.png';
import carotidOcclusionImage from '../assets/drug/Carotid occlusion.png';
import centralVagusImage from '../assets/drug/Central vagus.png';
import PeripheralVagusImage from '../assets/drug/Peripheral vagus.png';

// Import multiple Epinephrine images for different doses
import EpinephrineLowImage from '../assets/drug/Epinephrine/Epinephrine-low.png';
import EpinephrineMediumImage from '../assets/drug/Epinephrine/Epinephrine-mid.png';
import EpinephrineHighImage from '../assets/drug/Epinephrine/Epinephrine-high.png';

// Define separate positions for normal and drug images
const normalImagePosition = { top: '44%', left: '92.3%' };

// Drug-specific positions
const drugImagePositions = {
  'Carotid occlusion': { top: '38%', left: '91%' },
  'Central vagus': { top: '29%', left: '92%' },
  'Peripheral vagus': { top: '51%', left: '93%' },
  'Epinephrine': { top: '51%', left: '93%' },
  'Norepinephrine': { top: '51%', left: '93%' },
  'Isoprenaline': { top: '51%', left: '93%' },
};

// Basic drug images (for drugs with no dose variations)
const basicDrugImages = {
  'None': normalImage,
  'Carotid occlusion': carotidOcclusionImage,
  'Central vagus': centralVagusImage,
  'Peripheral vagus': PeripheralVagusImage,
};

// Define dose-dependent drug images
const doseDependentDrugImages = {
  'Epinephrine': {
    low: EpinephrineLowImage,
    medium: EpinephrineMediumImage,
    high: EpinephrineHighImage
  }
};

// Define dose ranges for each drug
const doseRanges = {
  'Epinephrine': {
    low: { min: 1, max: 10 },
    medium: { min: 11, max: 16 },
    high: { min: 16, max: 30 }
  },
  'Norepinephrine': {
    low: { min: 2, max: 3 },
    medium: { min: 3.1, max: 4 },
    high: { min: 4.1, max: 5 }
  },
  'Isoprenaline': {
    low: { min: 500, max: 800 },
    medium: { min: 801, max: 1200 },
    high: { min: 1201, max: 1500 }
  }
};

// Define fixed image sizes
const normalImageSize = {
  width: '300px',  // Adjust this value as needed
  height: 'auto'   // Maintain aspect ratio
};

const drugImageSize = {
  width: '350px',  // Adjust this value as needed
  height: 'auto'   // Maintain aspect ratio
};

const ExperimentGraph = ({ 
  heartRateData, 
  bpData, 
  selectedDrug,
  dose,
  isApplied,
  appliedDose   // New prop to store the dose that was applied
}) => {
  // Prepare data for the chart (keep original data structure)
  const chartData = heartRateData.map((hr, index) => ({
    time: index,
    orangeMetric: hr,
    blueMetric: bpData[index]
  })).filter(item => item.orangeMetric !== null);

  // Start with normal image as default
  let drugImageSrc = normalImage;
  let imagePosition = normalImagePosition;
  let imageSize = normalImageSize;

  // Only change image if Apply has been clicked
  if (isApplied && selectedDrug !== 'None') {
    // For dose-dependent drugs like Epinephrine
    if (doseDependentDrugImages[selectedDrug]) {
      // Use the appliedDose prop instead of the current dose prop
      const numericDose = parseFloat(appliedDose);
      
      // Select image based on dose ranges
      if (doseRanges[selectedDrug]) {
        const ranges = doseRanges[selectedDrug];
        
        if (numericDose >= ranges.low.min && numericDose <= ranges.low.max) {
          drugImageSrc = doseDependentDrugImages[selectedDrug].low;
        } else if (numericDose >= ranges.medium.min && numericDose <= ranges.medium.max) {
          drugImageSrc = doseDependentDrugImages[selectedDrug].medium;
        } else if (numericDose >= ranges.high.min && numericDose <= ranges.high.max) {
          drugImageSrc = doseDependentDrugImages[selectedDrug].high;
        } else {
          // Default to medium if dose is out of range
          drugImageSrc = doseDependentDrugImages[selectedDrug].medium;
        }
      }
    } else {
      // For basic drugs with no dose variations
      drugImageSrc = basicDrugImages[selectedDrug] || normalImage;
    }
    
    // Update position and size for the drug
    imagePosition = drugImagePositions[selectedDrug] || normalImagePosition;
    imageSize = drugImageSize;
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
      <LineChart
        width={1770}
        height={400}
        data={chartData}
        margin={{ top: 20, right: 40, left: 40, bottom: 20 }}
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
      </LineChart>

      <div 
        style={{
          position: 'absolute', 
          top: imagePosition.top, 
          left: imagePosition.left,
          transform: 'translate(-50%, -50%)',
          zIndex: 10
        }}
      >
        <img 
          src={drugImageSrc} 
          alt={`${selectedDrug || 'Normal'} graph`}
          style={{
            width: imageSize.width,
            height: imageSize.height,
            objectFit: 'contain'
          }}
          onError={(e) => {
            console.error(`Failed to load image for ${selectedDrug}`, {
              src: e.target.src,
              selectedDrug,
              dose: appliedDose  // Changed to use appliedDose
            });
            e.target.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
};

export default ExperimentGraph;
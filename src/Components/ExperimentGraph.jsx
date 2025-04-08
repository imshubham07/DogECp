import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';
import normalImage from '../assets/drug/normal.png';
import carotidOcclusionImage from '../assets/drug/Carotid occlusion.png';
import centralVagusImage from '../assets/drug/Central vagus.png';
import PeripheralVagusImage from '../assets/drug/Peripheral vagus.png';
import EpinephrineLowImage from '../assets/drug/Epinephrine/Epinephrine-low.png';
import EpinephrineMediumImage from '../assets/drug/Epinephrine/Epinephrine-mid.png';
import EpinephrineHighImage from '../assets/drug/Epinephrine/Epinephrine-high.png';
import NorepinephrineLowImage from '../assets/drug/Norepinephrine/Norepinephrine-low.png';
import NorepinephrineMediumImage from '../assets/drug/Norepinephrine/Norepinephrine-mid.png';
import NorepinephrineHighImage from '../assets/drug/Norepinephrine/Norepinephrine-high.png';
import IsoprenalineLowImage from '../assets/drug/Isoprenaline/Isoprenaline-low.png';
import IsoprenalineMediumImage from '../assets/drug/Isoprenaline/Isoprenaline-low-high.png';
import IsoprenalineHighImage from '../assets/drug/Isoprenaline/Isoprenaline-low-high.png';
import AcetylcholineLowImage from '../assets/drug/Acetylcholine/Acetylcholine-low.png';
import AcetylcholineMediumImage from '../assets/drug/Acetylcholine/Acetylcholine-mid.png';
import AcetylcholineHighImage from '../assets/drug/Acetylcholine/Acetylcholine-high.png';
import HistamineLowImage from '../assets/drug/Histamine/Histamine-low.png';
import HistamineMediumImage from '../assets/drug/Histamine/Histamine-mid.png';
import HistamineHighImage from '../assets/drug/Histamine/Histamine-high.png';
import EphedrineLowImage from '../assets/drug/Ephedrine/Ephedrine-low.png';
import EphedrineMediumImage from '../assets/drug/Ephedrine/Ephedrine-mid.png';
import EphedrineHighImage from '../assets/drug/Ephedrine/Ephedrine-high.png';
import PhentolamineLowImage from '../assets/drug/Phentolamine/Phentolamine-low.png';
import PhentolamineMediumImage from '../assets/drug/Phentolamine/Phentolamine-mid-high.png';
import PhentolamineHighImage from '../assets/drug/Phentolamine/Phentolamine-mid-high.png';
import PropranololLowImage from '../assets/drug/Propranolol/Propranolol-low-mid.png';
import PropranololMediumImage from '../assets/drug/Propranolol/Propranolol-low-mid.png';
import PropranololHighImage from '../assets/drug/Propranolol/Propranolol-high.png';
import AtropineLowImage from '../assets/drug/Atropine/Atropine-low.png';
import AtropineMediumImage from '../assets/drug/Atropine/Atropine-mid.png';
import AtropineHighImage from '../assets/drug/Atropine/Atropine-high.png';
import MepyramineImage from "../assets/drug/last2/last2.png";
import CimetidineImage from '../assets/drug/last2/last2.png';
import deadDogImage from '../assets/drug/ded/Dead.png';

const normalImagePosition = { top: '42%', left: '90%' };
const deadDogPosition = { top: '59%', left: '91%' };

const drugImagePositions = {

  'Carotid occlusion': { top: '38%', left: '90%' },
  
  'Central vagus': { top: '33%', left: '90%' },
  
  'Peripheral vagus': { top: '51%', left: '90%' },
  
  // Dose-specific positions for each drug
  
  'Epinephrine': {
  
  low: { top: '38%', left: '90%' },
  
  medium: { top: '36%', left: '90%' },
  
  high: { top: '32%', left: '90%' }
  
  },
  
  'Norepinephrine': {
  
  low: { top: '39%', left: '88%' },
  
  medium: { top: '32%', left: '88%' },
  
  high: { top: '37%', left: '89%' }
  
  },
  
  'Isoprenaline': {
  
  low: { top: '45%', left: '86%' },
  
  medium: { top: '45.7%', left: '85%' },
  
  high: { top: '46%', left: '85%' }
  
  },
  
  'Acetylcholine': {
  
  low: { top: '43%', left: '91%' },
  
  medium: { top: '53%', left: '91%' },
  
  high: { top: '56%', left: '88%' }
  
  },
  
  'Histamine': {
  
  low: { top: '44%', left: '87%' },
  
  medium: { top: '42%', left: '81%' },
  
  high: { top: '44%', left: '84%' }
  
  },
  
  'Ephedrine': {
  
  low: { top: '28%', left: '90%' },
  
  medium: { top: '29%', left: '91%' },
  
  high: { top: '28%', left: '91%' }
  
  },
  
  'Phentolamine': {
  
  low: { top: '41%', left: '89%' },
  
  medium: { top: '40%', left: '81.9%' },
  
  high: { top: '40%', left: '83%' }
  
  },
  
  'Propranolol': {
  
  low: { top: '46%', left: '81%' },
  
  medium: { top: '48%', left: '81%' },
  
  high: { top: '52%', left: '79%' }
  
  },
  
  'Atropine': {
  
  low: { top: '37%', left: '89%' },
  
  medium: { top: '32%', left: '90%' },
  
  high: { top: '31%', left: '85%' }
  
  },
  
  'Mepyramine': {
  
  low: { top: '42%', left: '85%' },
  
  medium: { top: '42%', left: '85%' },
  
  high: { top: '42%', left: '85%' }
  
  },
  
  'Cimetidine': {
  
  low: { top: '42%', left: '85%' },
  
  medium: { top: '42%', left: '85%' },
  
  high: { top: '42%', left: '85%' }
  
  }
  
  };

const basicDrugImages = {
  'None': normalImage,
  'Carotid occlusion': carotidOcclusionImage,
  'Central vagus': centralVagusImage,
  'Peripheral vagus': PeripheralVagusImage,
};

const doseDependentDrugImages = {

  'Epinephrine': {
  
  low: EpinephrineLowImage,
  
  medium: EpinephrineMediumImage,
  
  high: EpinephrineHighImage
  
  },
  
  'Norepinephrine': {
  
  low: NorepinephrineLowImage,
  
  medium: NorepinephrineMediumImage,
  
  high: NorepinephrineHighImage
  
  },
  
  'Isoprenaline': {
  
  low: IsoprenalineLowImage,
  
  medium: IsoprenalineMediumImage,
  
  high: IsoprenalineHighImage
  
  },
  
  'Acetylcholine': {
  
  low: AcetylcholineLowImage,
  
  medium: AcetylcholineMediumImage,
  
  high: AcetylcholineHighImage
  
  },
  
  'Histamine': {
  
  low: HistamineLowImage,
  
  medium: HistamineMediumImage,
  
  high: HistamineHighImage
  
  },
  
  'Ephedrine': {
  
  low: EphedrineLowImage,
  
  medium: EphedrineMediumImage,
  
  high: EphedrineHighImage
  
  },
  
  'Phentolamine': {
  
  low: PhentolamineLowImage,
  
  medium: PhentolamineMediumImage,
  
  high: PhentolamineHighImage
  
  },
  
  'Propranolol': {
  
  low: PropranololLowImage,
  
  medium: PropranololMediumImage,
  
  high: PropranololHighImage
  
  },
  
  'Atropine': {
  
  low: AtropineLowImage,
  
  medium: AtropineMediumImage,
  
  high: AtropineHighImage
  
  },
  
  'Mepyramine': {
  
  low: MepyramineImage,
  
  medium: MepyramineImage,
  
  high: MepyramineImage
  
  },
  
  'Cimetidine': {
  
  low: CimetidineImage,
  
  medium: CimetidineImage,
  
  high: CimetidineImage
  
  }
  
  };

  const doseRanges = {

    'Epinephrine': {
    
    low: { min: 1, max: 3 },
    
    medium: { min: 4, max: 10 },
    
    high: { min: 10, max: 14 }
    
    },
    
    'Norepinephrine': {
    
    low: { min: 2, max: 5 },
    
    medium: { min: 6, max: 17 },
    
    high: { min: 18, max: 24 }
    
    },
    
    'Isoprenaline': {
    
    low: { min: 2, max: 5 },
    
    medium: { min: 6, max: 15 },
    
    high: { min: 16, max: 24 }
    
    },
    
    'Acetylcholine': {
    
    low: { min: 2, max: 10 },
    
    medium: { min: 11, max: 38 },
    
    high: { min: 39, max: 49 }
    
    },
    
    'Histamine': {
    
    low: { min: 2, max: 5 },
    
    medium: { min: 6, max: 12 },
    
    high: { min: 13, max: 24 }
    
    },
    
    'Ephedrine': {
    
    low: { min: 100, max: 300 },
    
    medium: { min: 301, max: 600 },
    
    high: { min: 601, max: 999 }
    
    },
    
    'Phentolamine': {
    
    low: { min: 1000, max: 1010 },
    
    medium: { min: 1011, max: 1200 },
    
    high: { min: 1201, max: 1721 }
    
    },
    
    'Propranolol': {
    
    low: { min: 1000, max: 1000 },
    
    medium: { min: 1001, max: 1600 },
    
    high: { min: 1601, max: 2625 }
    
    },
    
    'Atropine': {
    
    low: { min: 500, max: 1000 },
    
    medium: { min: 1001, max: 2000 },
    
    high: { min: 2001, max: 2787 }
    
    },
    
    'Mepyramine': {
    
    low: { min: 4500, max: 5000 },
    
    medium: { min: 5001, max: 5500 },
    
    high: { min: 5501, max: 6000 }
    
    },
    
    'Cimetidine': {
    
    low: { min: 4500, max: 5000 },
    
    medium: { min: 5001, max: 5500 },
    
    high: { min: 5501, max: 6000 }
    
    }
    
    };

const normalImageSize = { width: '900px', height: 'auto' };
const deadDogImageSize = { width: '600px', height: 'auto' };

const drugImageSizes = {

  'default': {
  
  width: '900px',
  
  height: 'auto'
  
  },
  
  'Epinephrine': {
  
  low: { width: '900px', height: 'auto' },
  
  medium: { width: '1500px', height: 'auto' },
  
  high: { width: '9000px', height: 'auto' } // Increased to 5000px
  
  },
  
  'Norepinephrine': {
  
  low: { width: '900px', height: 'auto' },
  
  medium: { width: '1500px', height: 'auto' },
  
  high: { width: '5000px', height: 'auto' } // Increased to 5000px
  
  },
  
  'Isoprenaline': {
  
  low: { width: '900px', height: 'auto' },
  
  medium: { width: '1500px', height: 'auto' },
  
  high: { width: '5000px', height: 'auto' } // Increased to 5000px
  
  },
  
  'Acetylcholine': {
  
  low: { width: '900px', height: 'auto' },
  
  medium: { width: '1500px', height: 'auto' },
  
  high: { width: '5000px', height: 'auto' } // Increased to 5000px
  
  },
  
  'Histamine': {
  
  low: { width: '900px', height: 'auto' },
  
  medium: { width: '1500px', height: 'auto' },
  
  high: { width: '5000px', height: 'auto' } // Increased to 5000px
  
  },
  
  'Ephedrine': {
  
  low: { width: '900px', height: 'auto' },
  
  medium: { width: '1500px', height: 'auto' },
  
  high: { width: '5000px', height: 'auto' } // Increased to 5000px
  
  },
  
  'Phentolamine': {
  
  low: { width: '900px', height: 'auto' },
  
  medium: { width: '1500px', height: 'auto' },
  
  high: { width: '5000px', height: 'auto' } // Increased to 5000px
  
  },
  
  'Propranolol': {
  
  low: { width: '900px', height: 'auto' },
  
  medium: { width: '1500px', height: 'auto' },
  
  high: { width: '7000px', height: 'auto' } // Increased to 5000px
  
  },
  
  'Atropine': {
  
  low: { width: '900px', height: 'auto' },
  
  medium: { width: '1500px', height: 'auto' },
  
  high: { width: '440px', height: 'auto' } // Increased to 5000px
  
  },
  
  'Mepyramine': {
  
  low: { width: '900px', height: 'auto' },
  
  medium: { width: '900px', height: 'auto' },
  
  high: { width: '900px', height: 'auto' }
  
  },
  
  'Cimetidine': {
  
  low: { width: '900px', height: 'auto' },
  
  medium: { width: '900px', height: 'auto' },
  
  high: { width: '900px', height: 'auto' }
  
  },
  
  'Carotid occlusion': { width: '1100px', height: 'auto' },
  
  'Central vagus': { width: '1050px', height: 'auto' },
  
  'Peripheral vagus': { width: '1050px', height: 'auto' }
  
  };

const ExperimentGraph = ({ 
  heartRateData, 
  bpData, 
  selectedDrug,
  dose,
  isApplied,
  appliedDose,
  setIsDogDead,
  isDogDead,
  onGetNewDog
}) => {
  const chartData = heartRateData.map((hr, index) => ({
    time: index,
    orangeMetric: hr,
    blueMetric: bpData[index]
  })).filter(item => item.orangeMetric !== null);

  let drugImageSrc = normalImage;
  let imagePosition = normalImagePosition;
  let imageSize = normalImageSize;
  let doseCategory = null;
  let isBelowMinimumDose = false;
  let isDoseExceedingMaximum = false;

  if (!isDogDead) {
    if (isApplied && selectedDrug !== 'None') {
      if (doseDependentDrugImages[selectedDrug]) {
        const numericDose = parseFloat(appliedDose);
        
        if (doseRanges[selectedDrug]) {
          const ranges = doseRanges[selectedDrug];
          
          if (numericDose < ranges.low.min) {
            isBelowMinimumDose = true;
            drugImageSrc = normalImage;
            imagePosition = normalImagePosition;
            imageSize = normalImageSize;
          } 
          else if (numericDose > ranges.high.max) {
            isDoseExceedingMaximum = true;
            drugImageSrc = deadDogImage;
            imagePosition = deadDogPosition;
            imageSize = deadDogImageSize;
            if (setIsDogDead && !isDogDead) {
              setIsDogDead(true);
            }
          }
          else if (numericDose >= ranges.low.min && numericDose <= ranges.low.max) {
            drugImageSrc = doseDependentDrugImages[selectedDrug].low;
            doseCategory = 'low';
          } else if (numericDose >= ranges.medium.min && numericDose <= ranges.medium.max) {
            drugImageSrc = doseDependentDrugImages[selectedDrug].medium;
            doseCategory = 'medium';
          } else if (numericDose >= ranges.high.min && numericDose <= ranges.high.max) {
            drugImageSrc = doseDependentDrugImages[selectedDrug].high;
            doseCategory = 'high';
          } else {
            drugImageSrc = doseDependentDrugImages[selectedDrug].medium;
            doseCategory = 'medium';
          }
        }
      } else {
        drugImageSrc = basicDrugImages[selectedDrug] || normalImage;
      }
      
      if (!isBelowMinimumDose && !isDoseExceedingMaximum) {
        if (doseCategory && drugImagePositions[selectedDrug] && drugImagePositions[selectedDrug][doseCategory]) {
          imagePosition = drugImagePositions[selectedDrug][doseCategory];
        } else if (drugImagePositions[selectedDrug]) {
          imagePosition = typeof drugImagePositions[selectedDrug] === 'object' && !drugImagePositions[selectedDrug].hasOwnProperty('top') ?
            drugImagePositions[selectedDrug].medium || normalImagePosition :
            drugImagePositions[selectedDrug];
        } else {
          imagePosition = normalImagePosition;
        }
        
        if (doseCategory && drugImageSizes[selectedDrug] && drugImageSizes[selectedDrug][doseCategory]) {
          imageSize = drugImageSizes[selectedDrug][doseCategory];
        } else if (drugImageSizes[selectedDrug]) {
          imageSize = drugImageSizes[selectedDrug];
        } else {
          imageSize = drugImageSizes['default'];
        }
      }
    }
  } else {
    drugImageSrc = deadDogImage;
    imagePosition = deadDogPosition;
    imageSize = deadDogImageSize;
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'visible' }}>
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
            value: 'Heart Rate (bpm)', 
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
            value: 'Mean BP (mm Hg)', 
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
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none'
        }}
      >
        <img 
          src={drugImageSrc} 
          alt={isDogDead ? 'Dead dog' : `${selectedDrug || 'Normal'} graph`}
          style={{
            width: imageSize.width,
            height: imageSize.height,
            objectFit: 'contain'
          }}
          onError={(e) => {
            console.error(`Failed to load image for ${selectedDrug}`, {
              src: e.target.src,
              selectedDrug,
              dose: appliedDose
            });
            e.target.style.display = 'none';
          }}
        />
      </div>
      
      {isDogDead && (
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          textAlign: 'center'
        }}>
          <button 
            onClick={onGetNewDog}
            style={{
              backgroundColor: 'white',
              color: 'red',
              padding: '10px 20px',
              borderRadius: '5px',
              border: '2px solid red',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Get New Dog
          </button>
        </div>
      )}
    </div>
  );
};

export default ExperimentGraph;
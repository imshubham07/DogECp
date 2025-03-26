import { useState, useEffect } from "react";
import {
  FaClipboardList,
  FaExclamationTriangle,
  FaDog,
  FaVial,
  FaBan,
  FaCog,
} from "react-icons/fa";
import ButtonWithIcon from "../Components/ButtonWithIcon";
import ExperimentGraph from "../Components/ExperimentGraph";

const drugs = [
  {
    name: "Carotid occlusion",
    isDuration: true,
    duration: 15,
    hr: 145,
    bp: 125,
    responseType: "carotid",
  },
  {
    name: "Central vagus",
    isDuration: true,
    duration: 15,
    hr: 140,
    bp: 118,
  },
  {
    name: "Peripheral vagus",
    isDuration: true,
    duration: 20,
    hr: 135,
    bp: 115,
  },
  {
    name: "Epinephrine",
    isDuration: false,
    recommendedDose: 2,
    range: "1-3",
    hr: 160,
    bp: 135,
    responseType: "epi",
  },
  {
    name: "Norepinephrine",
    isDuration: false,
    recommendedDose: 3,
    range: "2-5",
    hr: 155,
    bp: 130,
  },
  {
    name: "Isoprenaline",
    isDuration: false,
    recommendedDose: 1000,
    range: "500-1500",
    hr: 165,
    bp: 125,
  },
  {
    name: "Acetylcholine",
    isDuration: false,
    recommendedDose: 1000,
    range: "500-1500",
    hr: 125,
    bp: 105,
  },
  {
    name: "Histamine",
    isDuration: false,
    recommendedDose: 1000,
    range: "500-1500",
    hr: 170,
    bp: 140,
  },
  {
    name: "Ephedrine",
    isDuration: false,
    recommendedDose: 1000,
    range: "500-1500",
    hr: 150,
    bp: 128,
  },
  {
    name: "Phentolamine",
    isDuration: false,
    recommendedDose: 1000,
    range: "500-1500",
    hr: 142,
    bp: 118,
    responseType: "phento",
  },
  {
    name: "Propranolol",
    isDuration: false,
    recommendedDose: 1000,
    range: "500-1500",
    hr: 130,
    bp: 112,
  },
  {
    name: "Atropine",
    isDuration: false,
    recommendedDose: 800,
    range: "600-1200",
    hr: 148,
    bp: 124,
  },
  {
    name: "Mepyramine",
    isDuration: false,
    recommendedDose: 1000,
    range: "800-1200",
    hr: 132,
    bp: 114,
  },
  {
    name: "Cimetidine",
    isDuration: false,
    recommendedDose: 1000,
    range: "800-1200",
    hr: 128,
    bp: 110,
  },
];

export default function ExperimentComponent() {
  const [selectedDrug, setSelectedDrug] = useState("None");
  const [duration, setDuration] = useState(0);
  const [dogNumber, setDogNumber] = useState(1);
  const [dose, setDose] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [heartRateData, setHeartRateData] = useState(Array(91).fill(null));
  const [bpData, setBpData] = useState(Array(91).fill(null));
  const [interventions, setInterventions] = useState([]); // Track intervention points for SVG markers

  const currentDrug = drugs.find((drug) => drug.name === selectedDrug);

  useEffect(() => {
    // Initialize with default values at 0th index
    const initialHR = Array(91).fill(null);
    const initialBP = Array(91).fill(null);
    initialHR[0] = 130;
    initialBP[0] = 110;
    setHeartRateData(initialHR);
    setBpData(initialBP);
  }, []);

  const handleDrugChange = (e) => {
    const drugName = e.target.value;
    setSelectedDrug(drugName);
    setShowWarning(false);
    setDose("");

    const selected = drugs.find((drug) => drug.name === drugName);
    setDuration(selected?.isDuration ? selected.duration : 0);
  };

  const handleDoseChange = (e) => {
    const newDose = e.target.value;
    setDose(newDose);

    if (currentDrug && !currentDrug.isDuration) {
      const [min, max] = currentDrug.range.split("-").map(Number);
      setShowWarning(newDose < min || newDose > max);
    }
  };

  const handleApply = () => {
    if (!currentDrug) return;

    // Create copies of the current data arrays
    const newHR = [...heartRateData];
    const newBP = [...bpData];

    // Find last existing value
    let lastIndex = 0;
    for (let i = 0; i < newHR.length; i++) {
      if (newHR[i] !== null) {
        lastIndex = i;
      } else {
        break; // Stop at first null value
      }
    }

    const lastHR = newHR[lastIndex] || 130;
    const lastBP = newBP[lastIndex] || 110;

    // Start point for new data (either continue from last point or start fresh)
    const startIndex = lastIndex > 0 ? lastIndex + 1 : 0;

    // If it's a fresh start, set initial values
    if (startIndex === 0) {
      newHR[0] = 130;
      newBP[0] = 110;
    }

    // Model realistic drug response
    // Different patterns based on drug type
    if (currentDrug.isDuration) {
      // For procedures (like carotid occlusion, vagus stimulation)
      const responseLength = currentDrug.duration;
      const peakAt = Math.floor(responseLength * 0.3); // Peak early

      for (let i = 0; i < responseLength + 10; i++) {
        const pos = startIndex + i;
        if (pos >= newHR.length) break;

        if (i < peakAt) {
          // Rapid onset
          const progress = i / peakAt;
          newHR[pos] = lastHR + (currentDrug.hr - lastHR) * progress;
          newBP[pos] = lastBP + (currentDrug.bp - lastBP) * progress;
        } else if (i < responseLength) {
          // Plateau during procedure
          newHR[pos] = currentDrug.hr;
          newBP[pos] = currentDrug.bp;
        } else {
          // Recovery after procedure ends
          const recovery = (i - responseLength) / 10;
          newHR[pos] = currentDrug.hr + (lastHR - currentDrug.hr) * recovery;
          newBP[pos] = currentDrug.bp + (lastBP - currentDrug.bp) * recovery;
        }
      }
    } else {
      // For drugs (like epinephrine, acetylcholine)
      const responseLength = 35; // Longer for drugs
      const onsetDelay = 3; // Delay before onset
      const peakAt = 10; // Time to peak effect
      const plateauLength = 5; // How long peak effect lasts
      const recoveryStart = peakAt + plateauLength;

      for (let i = 0; i < responseLength; i++) {
        const pos = startIndex + i;
        if (pos >= newHR.length) break;

        if (i < onsetDelay) {
          // Slight delay before drug takes effect
          newHR[pos] = lastHR;
          newBP[pos] = lastBP;
        } else if (i < peakAt + onsetDelay) {
          // Gradual onset
          const progress = (i - onsetDelay) / peakAt;
          // Use easing function for more natural curve (cubic)
          const easedProgress = progress * progress * (3 - 2 * progress);
          newHR[pos] = lastHR + (currentDrug.hr - lastHR) * easedProgress;
          newBP[pos] = lastBP + (currentDrug.bp - lastBP) * easedProgress;
        } else if (i < recoveryStart + onsetDelay) {
          // Maintain peak effect
          newHR[pos] = currentDrug.hr;
          newBP[pos] = currentDrug.bp;
        } else {
          // Gradual recovery
          const recovery =
            (i - (recoveryStart + onsetDelay)) /
            (responseLength - (recoveryStart + onsetDelay));
          // Use different easing for recovery (often slower than onset)
          const easedRecovery = recovery * recovery;
          newHR[pos] =
            currentDrug.hr + (lastHR - currentDrug.hr) * easedRecovery;
          newBP[pos] =
            currentDrug.bp + (lastBP - currentDrug.bp) * easedRecovery;
        }
      }
    }

    // Add intervention marker
    const newInterventions = [...interventions];
    newInterventions.push({
      position: startIndex,
      type: currentDrug.responseType || "generic",
      label: currentDrug.isDuration
        ? `${currentDrug.name.slice(0, 2).toUpperCase()}(${
            currentDrug.duration
          })`
        : `${currentDrug.name.slice(0, 3)}(${
            dose || currentDrug.recommendedDose
          })`,
    });

    setHeartRateData(newHR);
    setBpData(newBP);
    setInterventions(newInterventions);
  };

  const handleNewDog = () => {
    setDogNumber(dogNumber + 1);
    // Reset graph data for new dog
    const initialHR = Array(91).fill(null);
    const initialBP = Array(91).fill(null);
    initialHR[0] = 130;
    initialBP[0] = 110;
    setHeartRateData(initialHR);
    setBpData(initialBP);
    setInterventions([]);
    setSelectedDrug("None");
    setDose("");
    setShowWarning(false);
  };

  const handleInjectSaline = () => {
    // Create copies of the current data arrays
    const newHR = [...heartRateData];
    const newBP = [...bpData];

    // Find last existing value
    let lastIndex = 0;
    for (let i = 0; i < newHR.length; i++) {
      if (newHR[i] !== null) {
        lastIndex = i;
      } else {
        break;
      }
    }

    const startIndex = lastIndex > 0 ? lastIndex + 1 : 0;

    // If it's a fresh start, set initial values
    if (startIndex === 0) {
      newHR[0] = 130;
      newBP[0] = 110;
    }

    // Saline typically has minimal effect - just small fluctuations
    for (let i = 0; i < 15; i++) {
      const pos = startIndex + i;
      if (pos >= newHR.length) break;

      // Get previous values
      const prevHR = newHR[pos - 1] || newHR[lastIndex];
      const prevBP = newBP[pos - 1] || newBP[lastIndex];

      // Small random fluctuations (± 3 units)
      newHR[pos] = prevHR + (Math.random() * 6 - 3);
      newBP[pos] = prevBP + (Math.random() * 6 - 3);
    }

    // Add marker for saline
    const newInterventions = [...interventions];
    newInterventions.push({
      position: startIndex,
      type: "saline",
      label: "SAL",
    });

    setHeartRateData(newHR);
    setBpData(newBP);
    setInterventions(newInterventions);
  };

  const handleRemoveBlocker = () => {
    // Simulate removal of a blocker (antagonist)
    // This typically leads to a return toward baseline

    // Create copies of the current data arrays
    const newHR = [...heartRateData];
    const newBP = [...bpData];

    // Find last existing value
    let lastIndex = 0;
    for (let i = 0; i < newHR.length; i++) {
      if (newHR[i] !== null) {
        lastIndex = i;
      } else {
        break;
      }
    }

    const baselineHR = 130;
    const baselineBP = 110;
    const lastHR = newHR[lastIndex];
    const lastBP = newBP[lastIndex];
    const startIndex = lastIndex + 1;

    // Recovery curve - gradual return to baseline over 30 time units
    for (let i = 0; i < 30; i++) {
      const pos = startIndex + i;
      if (pos >= newHR.length) break;

      // Cubic easing function for natural recovery
      const progress = i / 30;
      const easedProgress = progress * progress * (3 - 2 * progress);

      newHR[pos] = lastHR + (baselineHR - lastHR) * easedProgress;
      newBP[pos] = lastBP + (baselineBP - lastBP) * easedProgress;
    }

    // Add marker for blocker removal
    const newInterventions = [...interventions];
    newInterventions.push({
      position: startIndex,
      type: "blocker",
      label: "REM",
    });

    setHeartRateData(newHR);
    setBpData(newBP);
    setInterventions(newInterventions);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      {/* Drug selection section */}
      <div className="flex items-center gap-4 mb-6 bg-white p-4 rounded-lg shadow">
        <select
          value={selectedDrug}
          onChange={handleDrugChange}
          className="p-3 border rounded-lg w-64 bg-white text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
        >
          <option value="None">Select Drug/Procedure</option>
          {drugs.map((drug) => (
            <option key={drug.name} value={drug.name}>
              {drug.name}
            </option>
          ))}
        </select>
        <ButtonWithIcon
          label="Apply"
          onClick={handleApply}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0"
        />
      </div>

      {/* Graph component - now passing the interventions data */}
      <ExperimentGraph
        heartRateData={heartRateData}
        bpData={bpData}
        selectedDrug={selectedDrug}
      />

      {/* Status panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-600 mb-1">Drug Selected</p>
          <p className="text-lg font-semibold text-blue-600">{selectedDrug}</p>
        </div>

        {currentDrug?.isDuration ? (
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 mb-1">Duration</p>
            <p className="text-lg font-semibold text-green-600">
              {duration} sec
            </p>
          </div>
        ) : (
          <>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-1">Dose to be Injected</p>
              <div className="relative">
                <input
                  type="number"
                  value={dose}
                  onChange={handleDoseChange}
                  className={`w-full p-2 border rounded-lg ${
                    showWarning ? "border-red-400" : "border-gray-300"
                  }`}
                  placeholder="Enter dose"
                />
                {showWarning && (
                  <div className="absolute right-0 top-0 h-full flex items-center pr-2">
                    <FaExclamationTriangle className="text-red-400" />
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">µg/kg</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-1">Recommended Dose</p>
              <p className="text-lg font-semibold text-green-600">
                {currentDrug?.recommendedDose} µg/kg
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Range: {currentDrug?.range} µg/kg
              </p>
            </div>
          </>
        )}

        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-600 mb-1">Dog Number</p>
          <p className="text-lg font-semibold text-purple-600">#{dogNumber}</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        <ButtonWithIcon
          icon={<FaBan className="mr-2" />}
          label="Remove Blocker"
          onClick={handleRemoveBlocker}
          className="bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors"
        />
        <ButtonWithIcon
          icon={<FaVial className="mr-2" />}
          label="Inject Saline"
          onClick={handleInjectSaline}
          className="bg-green-50 text-green-600 border border-green-200 hover:bg-green-100 px-4 py-2 rounded-lg transition-colors"
        />
        <ButtonWithIcon
          icon={<FaDog className="mr-2" />}
          label="New Dog"
          onClick={handleNewDog}
          className="bg-indigo-50 text-indigo-600 border border-indigo-200 hover:bg-indigo-100 px-4 py-2 rounded-lg transition-colors"
        />
        <ButtonWithIcon
          icon={<FaClipboardList className="mr-2" />}
          label="Save Results"
          className="bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100 px-4 py-2 rounded-lg transition-colors"
        />
        <ButtonWithIcon
          icon={<FaCog className="mr-2" />}
          label="Settings"
          className="bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
        />
      </div>
    </div>
  );
}

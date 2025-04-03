import React, { useState, useEffect } from "react";
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

// Drug list with comprehensive details
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
    responseType: "vagus",
  },
  {
    name: "Peripheral vagus",
    isDuration: true,
    duration: 20,
    hr: 135,
    bp: 115,
    responseType: "vagus",
  },
  {
    name: "Epinephrine",
    isDuration: false,
    recommendedDose: 2,
    range: "1-3",
    hr: 160,
    bp: 135,
    responseType: "epi",
    hasDoseImages: true,
  },
  {
    name: "Norepinephrine",
    isDuration: false,
    recommendedDose: 3,
    range: "2-5",
    hr: 155,
    bp: 130,
    responseType: "norepi",
    hasDoseImages: true,
  },
  {
    name: "Isoprenaline",
    isDuration: false,
    recommendedDose: 1000,
    range: "500-1500",
    hr: 165,
    bp: 125,
    responseType: "iso",
    hasDoseImages: true,
  },
  {
    name: "Acetylcholine",
    isDuration: false,
    recommendedDose: 1000,
    range: "500-1500",
    hr: 125,
    bp: 105,
    responseType: "ach",
  },
  {
    name: "Histamine",
    isDuration: false,
    recommendedDose: 1000,
    range: "500-1500",
    hr: 170,
    bp: 140,
    responseType: "hist",
  },
  {
    name: "Ephedrine",
    isDuration: false,
    recommendedDose: 1000,
    range: "500-1500",
    hr: 150,
    bp: 128,
    responseType: "ephed",
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
    responseType: "prop",
  },
  {
    name: "Atropine",
    isDuration: false,
    recommendedDose: 800,
    range: "600-1200",
    hr: 148,
    bp: 124,
    responseType: "atro",
  },
  {
    name: "Mepyramine",
    isDuration: false,
    recommendedDose: 1000,
    range: "800-1200",
    hr: 132,
    bp: 114,
    responseType: "mepy",
  },
  {
    name: "Cimetidine",
    isDuration: false,
    recommendedDose: 1000,
    range: "800-1200",
    hr: 128,
    bp: 110,
    responseType: "cime",
  },
];

export default function ExperimentComponent() {
  // State variables
  const [selectedDrug, setSelectedDrug] = useState("None");
  const [duration, setDuration] = useState(0);
  const [dogNumber, setDogNumber] = useState(1);
  const [dose, setDose] = useState("");
  const [appliedDose, setAppliedDose] = useState("");  // New state to store the applied dose
  const [showWarning, setShowWarning] = useState(false);
  const [heartRateData, setHeartRateData] = useState(Array(91).fill(null));
  const [bpData, setBpData] = useState(Array(91).fill(null));
  const [interventions, setInterventions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  // Find current selected drug
  const currentDrug = drugs.find((drug) => drug.name === selectedDrug);

  // Initialize baseline data
  useEffect(() => {
    const initialHR = Array(91).fill(null);
    const initialBP = Array(91).fill(null);
    initialHR[0] = 130;
    initialBP[0] = 110;
    setHeartRateData(initialHR);
    setBpData(initialBP);
    setIsApplied(false);
  }, []);

  // Drug selection handler
  const handleDrugChange = (e) => {
    const drugName = e.target.value;
    setSelectedDrug(drugName);
    setShowWarning(false);
    setIsApplied(false);

    const selected = drugs.find((drug) => drug.name === drugName);
    if (selected) {
      setDuration(selected.isDuration ? selected.duration : 0);
      
      // Auto-populate the dose field with the recommended dose if it's not a duration-based drug
      if (!selected.isDuration && selected.recommendedDose) {
        setDose(selected.recommendedDose.toString());
        setAppliedDose("");  // Reset applied dose when drug changes
      } else {
        setDose("");
        setAppliedDose("");  // Reset applied dose when drug changes
      }
    } else {
      setDose("");
      setAppliedDose("");  // Reset applied dose when drug changes
    }
  };

  // Dose change handler
  const handleDoseChange = (e) => {
    const newDose = e.target.value;
    setDose(newDose);

    if (currentDrug && !currentDrug.isDuration) {
      const [min, max] = currentDrug.range.split("-").map(Number);
      setShowWarning(newDose < min || newDose > max);
    }
  };

  // Apply drug handler
  const handleApply = () => {
    if (!currentDrug) return;

    setIsLoading(true);
    setAppliedDose(dose);  // Store the dose at the time of applying

    setTimeout(() => {
      const newHR = [...heartRateData];
      const newBP = [...bpData];

      let lastIndex = 0;
      for (let i = 0; i < newHR.length; i++) {
        if (newHR[i] !== null) {
          lastIndex = i;
        } else {
          break;
        }
      }

      const lastHR = newHR[lastIndex] || 130;
      const lastBP = newBP[lastIndex] || 110;
      const startIndex = lastIndex > 0 ? lastIndex + 1 : 0;

      if (startIndex === 0) {
        newHR[0] = 130;
        newBP[0] = 110;
      }

      if (currentDrug.isDuration) {
        const responseLength = currentDrug.duration;
        const peakAt = Math.floor(responseLength * 0.3);

        for (let i = 0; i < responseLength + 10; i++) {
          const pos = startIndex + i;
          if (pos >= newHR.length) break;

          if (i < peakAt) {
            const progress = i / peakAt;
            newHR[pos] = lastHR + (currentDrug.hr - lastHR) * progress;
            newBP[pos] = lastBP + (currentDrug.bp - lastBP) * progress;
          } else if (i < responseLength) {
            newHR[pos] = currentDrug.hr;
            newBP[pos] = currentDrug.bp;
          } else {
            const recovery = (i - responseLength) / 10;
            newHR[pos] = currentDrug.hr + (lastHR - currentDrug.hr) * recovery;
            newBP[pos] = currentDrug.bp + (lastBP - currentDrug.bp) * recovery;
          }
        }
      } else {
        const responseLength = 35;
        const onsetDelay = 3;
        const peakAt = 10;
        const plateauLength = 5;
        const recoveryStart = peakAt + plateauLength;

        for (let i = 0; i < responseLength; i++) {
          const pos = startIndex + i;
          if (pos >= newHR.length) break;

          if (i < onsetDelay) {
            newHR[pos] = lastHR;
            newBP[pos] = lastBP;
          } else if (i < peakAt + onsetDelay) {
            const progress = (i - onsetDelay) / peakAt;
            const easedProgress = progress * progress * (3 - 2 * progress);
            newHR[pos] = lastHR + (currentDrug.hr - lastHR) * easedProgress;
            newBP[pos] = lastBP + (currentDrug.bp - lastBP) * easedProgress;
          } else if (i < recoveryStart + onsetDelay) {
            newHR[pos] = currentDrug.hr;
            newBP[pos] = currentDrug.bp;
          } else {
            const recovery = (i - (recoveryStart + onsetDelay)) / (responseLength - (recoveryStart + onsetDelay));
            const easedRecovery = recovery * recovery;
            newHR[pos] = currentDrug.hr + (lastHR - currentDrug.hr) * easedRecovery;
            newBP[pos] = currentDrug.bp + (lastBP - currentDrug.bp) * easedRecovery;
          }
        }
      }

      const newInterventions = [...interventions];
      newInterventions.push({
        position: startIndex,
        type: currentDrug.responseType || "generic",
        label: currentDrug.isDuration
          ? `${currentDrug.name.slice(0, 2).toUpperCase()}(${currentDrug.duration})`
          : `${currentDrug.name.slice(0, 3)}(${dose || currentDrug.recommendedDose})`,
      });

      setHeartRateData(newHR);
      setBpData(newBP);
      setInterventions(newInterventions);
      setIsLoading(false);
      setIsApplied(true);
    }, 2000);
  };

  // Inject saline handler
  const handleInjectSaline = () => {
    setIsLoading(true);

    setTimeout(() => {
      const newHR = [...heartRateData];
      const newBP = [...bpData];

      let lastIndex = 0;
      for (let i = 0; i < newHR.length; i++) {
        if (newHR[i] !== null) {
          lastIndex = i;
        } else {
          break;
        }
      }

      const startIndex = lastIndex > 0 ? lastIndex + 1 : 0;

      if (startIndex === 0) {
        newHR[0] = 130;
        newBP[0] = 110;
      }

      for (let i = 0; i < 15; i++) {
        const pos = startIndex + i;
        if (pos >= newHR.length) break;

        const prevHR = newHR[pos - 1] || newHR[lastIndex];
        const prevBP = newBP[pos - 1] || newBP[lastIndex];

        newHR[pos] = prevHR + (Math.random() * 6 - 3);
        newBP[pos] = prevBP + (Math.random() * 6 - 3);
      }

      const newInterventions = [...interventions];
      newInterventions.push({
        position: startIndex,
        type: "saline",
        label: "SAL",
      });

      setHeartRateData(newHR);
      setBpData(newBP);
      setInterventions(newInterventions);
      setIsLoading(false);
    }, 2000);
  };

  // Remove blocker handler
  const handleRemoveBlocker = () => {
    const newHR = [...heartRateData];
    const newBP = [...bpData];

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

    for (let i = 0; i < 30; i++) {
      const pos = startIndex + i;
      if (pos >= newHR.length) break;

      const progress = i / 30;
      const easedProgress = progress * progress * (3 - 2 * progress);

      newHR[pos] = lastHR + (baselineHR - lastHR) * easedProgress;
      newBP[pos] = lastBP + (baselineBP - lastBP) * easedProgress;
    }

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

  // New dog handler
  const handleNewDog = () => {
    setDogNumber(dogNumber + 1);
    const initialHR = Array(91).fill(null);
    const initialBP = Array(91).fill(null);
    initialHR[0] = 130;
    initialBP[0] = 110;
    setHeartRateData(initialHR);
    setBpData(initialBP);
    setInterventions([]);
    setSelectedDrug("None");
    setDose("");
    setAppliedDose("");  // Reset applied dose for new dog
    setShowWarning(false);
    setIsApplied(false);
  };

  // Loading popup component
  const LoadingPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white/90 p-8 rounded-lg shadow-xl flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 backdrop-blur-md p-6 relative">
      {/* Background overlay for additional blur effect */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-lg"></div>
      
      {/* Content container with relative positioning to sit above the blur */}
      <div className="relative z-10 bg-white/80 p-6 rounded-lg shadow-lg">
        {/* Loading popup */}
        {isLoading && <LoadingPopup />}

        {/* Drug selection section */}
        <div className="flex items-center gap-4 mb-6 bg-white/70 p-4 rounded-lg shadow">
          <select
            value={selectedDrug}
            onChange={handleDrugChange}
            className="p-3 border rounded-lg w-64 bg-white/80 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
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

        {/* Graph component - pass the appliedDose prop */}
        <ExperimentGraph
          heartRateData={heartRateData}
          bpData={bpData}
          selectedDrug={selectedDrug}
          dose={dose}
          appliedDose={appliedDose}  // Pass the applied dose to the graph component
          isApplied={isApplied}
        />

        {/* Status panels with slight transparency */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Status panel cards with white/transparent background */}
          {[
            { title: "Drug Selected", value: selectedDrug, color: "blue" },
            ...(currentDrug?.isDuration
              ? [{ title: "Duration", value: `${duration} sec`, color: "green" }]
              : [
                  {
                    title: "Dose to be Injected",
                    value: (
                      <input
                        type="number"
                        value={dose}
                        onChange={handleDoseChange}
                        className={`w-full p-2 border rounded-lg ${
                          showWarning ? "border-red-400" : "border-gray-300"
                        }`}
                        placeholder="Enter dose"
                      />
                    ),
                    color: "purple",
                  },
                  {
                    title: "Recommended Dose",
                    value: `${currentDrug?.recommendedDose} µg/kg`,
                    subtitle: `Range: ${currentDrug?.range} µg/kg`,
                    color: "green",
                  },
                ]),
            { title: "Dog Number", value: `#${dogNumber}`, color: "purple" },
          ].map((panel, index) => (
            <div 
              key={index} 
              className="bg-white/70 p-4 rounded-lg shadow backdrop-blur-sm"
            >
              <p className="text-sm text-gray-600 mb-1">{panel.title}</p>
              <p className={`text-lg font-semibold text-${panel.color}-600`}>
                {panel.value}
              </p>
              {panel.subtitle && (
                <p className="text-xs text-gray-500 mt-1">{panel.subtitle}</p>
              )}
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          <ButtonWithIcon
            icon={<FaBan className="mr-2" />}
            label="Remove Blocker"
            onClick={handleRemoveBlocker}
            className="bg-red-50/70 text-red-600 border border-red-200 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors backdrop-blur-sm"
          />
          <ButtonWithIcon
            icon={<FaVial className="mr-2" />}
            label="Inject Saline"
            onClick={handleInjectSaline}
            className="bg-green-50/70 text-green-600 border border-green-200 hover:bg-green-100 px-4 py-2 rounded-lg transition-colors backdrop-blur-sm"
          />
          <ButtonWithIcon
            icon={<FaDog className="mr-2" />}
            label="New Dog"
            onClick={handleNewDog}
            className="bg-indigo-50/70 text-indigo-600 border border-indigo-200 hover:bg-indigo-100 px-4 py-2 rounded-lg transition-colors backdrop-blur-sm"
          />
          <ButtonWithIcon
            icon={<FaClipboardList className="mr-2" />}
            label="Save Results"
            className="bg-purple-50/70 text-purple-600 border border-purple-200 hover:bg-purple-100 px-4 py-2 rounded-lg transition-colors backdrop-blur-sm"
          />
          <ButtonWithIcon
            icon={<FaCog className="mr-2" />}
            label="Settings"
            className="bg-gray-50/70 text-gray-600 border border-gray-200 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors backdrop-blur-sm"
          />
        </div>
      </div>
    </div>
  );
}
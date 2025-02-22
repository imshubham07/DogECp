import { useState } from "react";
import { FaClipboardList, FaExclamationTriangle, FaDog, FaVial, FaBan, FaCog } from "react-icons/fa";
import ButtonWithIcon from "../Components/ButtonWithIcon";
import ExperimentGraph from "../Components/ExperimentGraph";

const drugs = [
  { name: "Carotid occlusion", isDuration: true, duration: 15 },
  { name: "Central vagus", isDuration: true, duration: 15 },
  { name: "Peripheral vagus", isDuration: true, duration: 20 },
  { name: "Epinephrine", isDuration: false, recommendedDose: 2, range: "1-3" },
  { name: "Norepinephrine", isDuration: false, recommendedDose: 3, range: "2-5" },
  { name: "Isoprenaline", isDuration: false, recommendedDose: 1000, range: "500-1500" },
  { name: "Acetylcholine", isDuration: false, recommendedDose: 1000, range: "500-1500" },
  { name: "Histamine", isDuration: false, recommendedDose: 1000, range: "500-1500" },
  { name: "Ephedrine", isDuration: false, recommendedDose: 1000, range: "500-1500" },
  { name: "Phentolamine", isDuration: false, recommendedDose: 1000, range: "500-1500" },
  { name: "Propranolol", isDuration: false, recommendedDose: 1000, range: "500-1500" },
  { name: "Atropine", isDuration: false, recommendedDose: 800, range: "600-1200" },
  { name: "Mepyramine", isDuration: false, recommendedDose: 1000, range: "800-1200" },
  { name: "Cimetidine", isDuration: false, recommendedDose: 1000, range: "800-1200" }
];

export default function ExperimentComponent() {
  const [selectedDrug, setSelectedDrug] = useState("None");
  const [duration, setDuration] = useState(0);
  const [dogNumber, setDogNumber] = useState(1);
  const [dose, setDose] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [isRunning, setIsRunning] = useState(true); // Add state for controlling graph animation
  
  const currentDrug = drugs.find(drug => drug.name === selectedDrug);

  const handleDrugChange = (e) => {
    const drugName = e.target.value;
    setSelectedDrug(drugName);
    setShowWarning(false);
    setDose("");
    
    const selected = drugs.find(drug => drug.name === drugName);
    if(selected?.isDuration) {
      setDuration(selected.duration);
    } else {
      setDuration(0);
    }
  };

  const handleDoseChange = (e) => {
    const newDose = e.target.value;
    setDose(newDose);
    
    if (currentDrug && !currentDrug.isDuration) {
      const [min, max] = currentDrug.range.split('-').map(Number);
      setShowWarning(newDose < min || newDose > max);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
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
          onClick={() => console.log(`Applied drug: ${selectedDrug}`)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0"
        />
      </div>

      <ExperimentGraph isRunning={isRunning} selectedDrug={selectedDrug} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-600 mb-1">Drug Selected</p>
          <p className="text-lg font-semibold text-blue-600">{selectedDrug}</p>
        </div>

        {currentDrug?.isDuration ? (
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-sm text-gray-600 mb-1">Duration</p>
            <p className="text-lg font-semibold text-green-600">{duration} sec</p>
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
                  className={`w-full p-2 border rounded-lg ${showWarning ? 'border-red-400' : 'border-gray-300'}`}
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
              <p className="text-lg font-semibold text-green-600">{currentDrug?.recommendedDose} µg/kg</p>
              <p className="text-xs text-gray-500 mt-1">Range: {currentDrug?.range} µg/kg</p>
            </div>
          </>
        )}

        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-600 mb-1">Dog Number</p>
          <p className="text-lg font-semibold text-purple-600">#{dogNumber}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <ButtonWithIcon
          icon={<FaBan className="mr-2" />}
          label="Remove Blocker"
          className="bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors"
        />
        <ButtonWithIcon
          icon={<FaVial className="mr-2" />}
          label="Inject Saline"
          className="bg-green-50 text-green-600 border border-green-200 hover:bg-green-100 px-4 py-2 rounded-lg transition-colors"
        />
        <ButtonWithIcon
          icon={<FaDog className="mr-2" />}
          label="New Dog"
          onClick={() => setDogNumber(dogNumber + 1)}
          className="bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100 px-4 py-2 rounded-lg transition-colors"
        />
        <ButtonWithIcon
          icon={<FaCog className="mr-2" />}
          label="Set Up"
          className="bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
        />
        <ButtonWithIcon
          icon={<FaClipboardList className="mr-2" />}
          label="LOG"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
        />
      </div>
    </div>
  );
}
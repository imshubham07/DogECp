import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import ButtonWithIcon from "../Components/ButtonWithIcon";
import ExperimentGraph from "../Components/ExperimentGraph";

export default function ExperimentComponent() {
  const [selectedDrug, setSelectedDrug] = useState("None");
  const [duration, setDuration] = useState(0);
  const [dogNumber, setDogNumber] = useState(1);

  const handleDrugChange = (e) => {
    setSelectedDrug(e.target.value);
  };

  return (
    <>
      <div className="flex gap-2 mb-6">
        <select
          value={selectedDrug}
          onChange={handleDrugChange}
          className="p-2 border rounded w-48"
        >
          <option value="None">Select Drug/Procedure</option>
          <option value="Peripheral vagus">Peripheral vagus</option>
          <option value="Adrenaline">Adrenaline</option>
          <option value="Acetylcholine">Acetylcholine</option>
        </select>
        <ButtonWithIcon
          label="Apply"
          onClick={() => console.log(`Applied drug: ${selectedDrug}`)}
          className="bg-gray-700 text-white hover:bg-gray-800"
        />
      </div>

      <ExperimentGraph />

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 border border-gray-300 rounded-md">
          <p className="text-sm text-gray-500">Drug Selected:</p>
          <p className="text-red-500">{selectedDrug}</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-md">
          <p className="text-sm text-gray-500">Duration (sec):</p>
          <p>{duration}</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-md">
          <p className="text-sm text-gray-500">Dog No:</p>
          <p>{dogNumber}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <ButtonWithIcon
          label="Remove Blocker"
          onClick={() => console.log("Remove Blocker clicked")}
          className="border border-gray-300 text-gray-700 hover:bg-gray-200"
        />
        <ButtonWithIcon
          label="Inject Saline"
          onClick={() => console.log("Inject Saline clicked")}
          className="border border-gray-300 text-gray-700 hover:bg-gray-200"
        />
        <ButtonWithIcon
          label="New Dog"
          onClick={() => setDogNumber(dogNumber + 1)}
          className="border border-gray-300 text-gray-700 hover:bg-gray-200"
        />
        <ButtonWithIcon
          label="Set Up"
          onClick={() => console.log("Set Up clicked")}
          className="border border-gray-300 text-gray-700 hover:bg-gray-200"
        />
        <ButtonWithIcon
          icon={<FaClipboardList />}
          label="LOG"
          onClick={() => console.log("LOG clicked")}
          className="bg-blue-500 text-white hover:bg-blue-600"
        />
      </div>
    </>
  );
}

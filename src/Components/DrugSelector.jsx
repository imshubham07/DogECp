import ButtonWithIcon from "../Components/ButtonWithIcon";
import { FaClipboardList } from "react-icons/fa"; // Using Font Awesome for the LOG button icon


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
    onClick={() => console.log("New Dog clicked")}
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

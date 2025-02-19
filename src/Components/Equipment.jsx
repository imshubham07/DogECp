import { useState } from 'react';
import { Beaker, CircuitBoard, Dog, X } from 'lucide-react';

const LabEquipmentUI = () => {
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const materials = [
    'Pressure transducer',
    'Data acquisition system',
    'Computer',
    'Arterial cannula',
    'Venous cannula',
    'Electrical stimulator'
  ];

  const drugs = [
    'Epinephrine',
    'Norepinephrine',
    'Isoprenaline',
    'Acetylcholine',
    'Histamine',
    'Ephedrine',
    'Phentolamine',
    'Propranolol',
    'Atropine',
    'Mepyramine',
    'Cimetidine',
    'Saline (0.9%)'
  ];

  const handleDrugClick = (drug) => {
    setSelectedDrug(drug);
    setShowPreview(true);
  };

  const closeModal = () => {
    setShowPreview(false);
  };

  // Add event listener to close modal on Escape key
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Animal Section */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="bg-indigo-500 p-4">
                <div className="flex items-center gap-2">
                  <Dog className="w-6 h-6 text-white" />
                  <h2 className="text-lg font-semibold text-white">Animal</h2>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-b from-indigo-50 to-white">
                <p className="text-gray-700 font-medium">Dog</p>
              </div>
            </div>

            {/* Anaesthetic Section */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="bg-purple-500 p-4">
                <div className="flex items-center gap-2">
                  <Beaker className="w-6 h-6 text-white" />
                  <h2 className="text-lg font-semibold text-white">Anaesthetic agent</h2>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-b from-purple-50 to-white">
                <p className="text-gray-700 font-medium">Chloralose</p>
              </div>
            </div>

            {/* Materials Section */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="bg-blue-500 p-4">
                <div className="flex items-center gap-2">
                  <CircuitBoard className="w-6 h-6 text-white" />
                  <h2 className="text-lg font-semibold text-white">Materials</h2>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-b from-blue-50 to-white">
                <ul className="space-y-3">
                  {materials.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-cyan-500 p-4">
              <h2 className="text-lg font-semibold text-white">Drug & solutions</h2>
            </div>
            <div className="p-6 bg-gradient-to-b from-cyan-50 to-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {drugs.map((drug, index) => (
                  <div
                    key={index}
                    className={`
                      flex items-center gap-3 p-3 rounded-lg cursor-pointer
                      transition-all duration-300 transform hover:-translate-y-1
                      ${selectedDrug === drug 
                        ? 'bg-cyan-100 shadow-md' 
                        : 'hover:bg-cyan-50'
                      }
                    `}
                    onClick={() => handleDrugClick(drug)}
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-gray-700 font-medium">{drug}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Custom Modal */}
        {showPreview && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="bg-white rounded-xl shadow-2xl max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-cyan-500 p-4 rounded-t-xl flex justify-between items-center">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Beaker className="w-5 h-5" />
                  {selectedDrug}
                </h2>
                <button 
                  onClick={closeModal} 
                  className="text-white hover:bg-cyan-600 rounded-full p-1 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={`/api/placeholder/640/360`}
                    alt={`Preview of ${selectedDrug}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  This is a preview image for {selectedDrug}. Click outside to close.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LabEquipmentUI;
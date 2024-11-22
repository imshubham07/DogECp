import  { useState } from 'react';
import { Beaker, FileText, ShieldAlert, Lightbulb, List } from 'lucide-react';
import doctor from "../assets/4.png"

const Introduction = () => {
  const [activeTab, setActiveTab] = useState('objectives');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getTabContent = () => {
    switch (activeTab) {
      case 'objectives':
        return (
          <>
            <div className="flex gap-4">
              <div className="flex-none w-40 h-60 overflow-hidden rounded-lg">
                <img 
                  src={doctor} 
                  alt="Doctor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    To demonstrate the changes on BP and HR upon mechanical occlusion of carotid (unilateral) and electrical stimulation of central (to stimulate the afferent fibers) and peripheral (to stimulate the efferent fibers) cut end of vagus nerve.
                  </li>
                  <li>
                    To appreciate the actions of certain common and important agents on BP and HR.
                  </li>
                </ul>
              </div>
            </div>
          </>
        );
      case 'equipment':
        return (
          <>
            <div className="flex gap-4">
              <div className="flex-none w-20 h-20 bg-gray-400 rounded-lg"></div>
              <div>
                <h2 className="text-xl font-bold">Equipment</h2>
                <p>This is the equipment section.</p>
              </div>
            </div>
          </>
        );
      case 'procedure':
        return (
          <>
            <div className="flex gap-4">
              <div className="flex-none w-20 h-20 bg-gray-400 rounded-lg"></div>
              <div>
                <h2 className="text-xl font-bold">Procedure</h2>
                <p>This is the procedure section.</p>
              </div>
            </div>
          </>
        );
      case 'precautions':
        return (
          <>
            <div className="flex gap-4">
              <div className="flex-none w-20 h-20 bg-gray-400 rounded-lg"></div>
              <div>
                <h2 className="text-xl font-bold">Precautions</h2>
                <p>This is the precautions section.</p>
              </div>
            </div>
          </>
        );
      case 'tips':
        return (
          <>
            <div className="flex gap-4">
              <div className="flex-none w-20 h-20 bg-gray-400 rounded-lg"></div>
              <div>
                <h2 className="text-xl font-bold">Tips</h2>
                <p>This is the tips section.</p>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto py-8">
      <div className="bg-blue-500 text-white rounded-t-lg p-4">
        <h1 className="text-2xl font-bold">
          {activeTab === 'objectives'
            ? 'Objectives'
            : activeTab === 'equipment'
            ? 'Equipment'
            : activeTab === 'procedure'
            ? 'Procedure'
            : activeTab === 'precautions'
            ? 'Precautions'
            : activeTab === 'tips'
            ? 'Tips'
            : ''}
        </h1>
      </div>
      <div className="bg-gray-100 rounded-b-lg p-6">
        {getTabContent()}
        <div className="flex justify-between mt-6">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-600 ${
              activeTab === 'objectives' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick('objectives')}
          >
            <List className="w-5 h-5" />
            <span>Objectives</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-600 ${
              activeTab === 'equipment' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick('equipment')}
          >
            <Beaker className="w-5 h-5" />
            <span>Equipment</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-600 ${
              activeTab === 'procedure' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick('procedure')}
          >
            <FileText className="w-5 h-5" />
            <span>Procedure</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-600 ${
              activeTab === 'precautions' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick('precautions')}
          >
            <ShieldAlert className="w-5 h-5" />
            <span>Precautions</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-600 ${
              activeTab === 'tips' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick('tips')}
          >
            <Lightbulb className="w-5 h-5" />
            <span>Tips</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
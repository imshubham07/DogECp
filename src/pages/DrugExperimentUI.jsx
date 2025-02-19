import  { useState } from 'react';
import TabNavigation from '../Components/TabNavigation';
import ObservationTable from '../Components/ObservationTable';
import Introduction from '../Components/Introduction';
import ExperimentComponent from './ExperimentComponent';

const DrugExperimentUI = () => {
  const [activeTab, setActiveTab] = useState('introduction');


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <h1 className="text-xl font-semibold text-white bg-gray-700 p-4 mb-4">
          Experiment: Effect of drugs on blood pressure (BP) and heart rate (HR) of dog
        </h1>

        <div className="bg-white rounded shadow p-6">
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === 'introduction' && (
            <Introduction /> // Render the IntroductionContent component
          )}


          {activeTab === 'experiment' && (
            <ExperimentComponent/>
          )}

          {activeTab === 'observation' && <ObservationTable />}
        </div>
      </div>
    </div>
  );
};

export default DrugExperimentUI;
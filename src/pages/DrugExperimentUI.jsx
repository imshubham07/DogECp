import { useState, useEffect } from 'react';
import TabNavigation from '../Components/TabNavigation';
import ObservationTable from '../Components/ObservationTable';
import Introduction from '../Components/Introduction';
import ExperimentComponent from './ExperimentComponent';

const DrugExperimentUI = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  
  // Lifted state from ObservationTable
  const [observationData, setObservationData] = useState({
    rows: [
      { id: 1, drug: '', meanBP: '', hr: '', remarks: '' }
    ],
    basalHR: '',
    basalBP: ''
  });

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('observationTableData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      
      // Check if data has expired (2 hours = 7,200,000 milliseconds)
      const currentTime = new Date().getTime();
      if (parsedData.timestamp && currentTime - parsedData.timestamp < 7200000) {
        setObservationData(parsedData.data);
      } else {
        // Data has expired, remove it from localStorage
        localStorage.removeItem('observationTableData');
      }
    }
  }, []);

  // Save data to localStorage whenever observationData changes
  useEffect(() => {
    const dataToStore = {
      data: observationData,
      timestamp: new Date().getTime()
    };
    localStorage.setItem('observationTableData', JSON.stringify(dataToStore));
  }, [observationData]);

  // Function to handle tab switching while preserving data
  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <h1 className="text-xl font-semibold text-white bg-gray-700 p-4 mb-4">
          Experiment: Effect of drugs on blood pressure (BP) and heart rate (HR) of dog
        </h1>

        <div className="bg-white rounded shadow p-6">
          <TabNavigation 
            activeTab={activeTab} 
            setActiveTab={handleTabChange} 
          />

          {activeTab === 'introduction' && (
            <Introduction />
          )}

          {activeTab === 'experiment' && (
            <ExperimentComponent 
              observationData={observationData}
              goToObservation={() => setActiveTab('observation')}
            />
          )}

          {activeTab === 'observation' && (
            <ObservationTable 
              formData={observationData}
              setFormData={setObservationData}
              goToExperiment={() => setActiveTab('experiment')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DrugExperimentUI;
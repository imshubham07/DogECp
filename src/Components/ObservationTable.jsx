import { useEffect } from 'react';
import { ReportButton } from './ReportButton';

const ObservationTable = ({ formData, setFormData,  }) => {
  // List of available drugs
  const drugs = [
    'Peripheral vagus',
    'Central vagus',
    'Carotid occlusion',
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
    'Cimetidine'
  ];

  // Handle input changes for rows with number validation for BP and HR
  const handleRowChange = (id, field, value) => {
    // For BP and HR fields, only accept numeric input
    if ((field === 'meanBP' || field === 'hr') && value !== '') {
      // Check if input is a valid number
      if (!/^\d*$/.test(value)) {
        return; // Don't update if not a number
      }
    }
    
    setFormData(prevData => {
      const updatedRows = prevData.rows.map(row => 
        row.id === id ? { ...row, [field]: value } : row
      );
      
      // If field is 'drug' and a value was selected (not empty), check if we need to add a new row
      let newRows = [...updatedRows];
      
      if (field === 'drug' && value !== '') {
        // Check if this is the last row or if we need to add a new row
        const isLastRow = id === Math.max(...prevData.rows.map(row => row.id));
        
        if (isLastRow) {
          const newId = Math.max(...prevData.rows.map(row => row.id)) + 1;
          newRows = [...updatedRows, { id: newId, drug: '', meanBP: '', hr: '', remarks: '' }];
        }
      }
      
      return {
        ...prevData,
        rows: newRows
      };
    });
  };

  // Handle changes for basal values with number validation
  const handleBasalChange = (field, value) => {
    // For basal BP and HR, only accept numeric input
    if ((field === 'basalBP' || field === 'basalHR') && value !== '') {
      // Check if input is a valid number
      if (!/^\d*$/.test(value)) {
        return; // Don't update if not a number
      }
    }
    
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  // Clear form data
  const clearData = () => {
    setFormData({
      rows: [
        { id: 1, drug: '', meanBP: '', hr: '', remarks: '' }
      ],
      basalHR: '',
      basalBP: ''
    });
  };

  return (
    <div className="w-full h-full">
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="p-4 text-left w-20">S.No</th>
            <th className="p-4 text-left">Drug/Procedure</th>
            <th className="p-4 text-left">Mean BP (mm Hg)</th>
            <th className="p-4 text-left">HR (beats/min)</th>
            <th className="p-4 text-left">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {formData.rows.map((row) => (
            <tr key={row.id} className="border-b">
              <td className="p-4">{row.id}</td>
              <td className="p-4">
                <select 
                  className="w-full p-2 border rounded"
                  value={row.drug}
                  onChange={(e) => handleRowChange(row.id, 'drug', e.target.value)}
                >
                  <option value="">Select drug</option>
                  {drugs.map(drug => (
                    <option key={drug} value={drug}>{drug}</option>
                  ))}
                </select>
              </td>
              <td className="p-4">
                <input 
                  type="text" 
                  placeholder="-" 
                  className="w-full p-2 border rounded text-center"
                  value={row.meanBP}
                  onChange={(e) => handleRowChange(row.id, 'meanBP', e.target.value)}
                />
              </td>
              <td className="p-4">
                <input 
                  type="text" 
                  placeholder="-" 
                  className="w-full p-2 border rounded text-center"
                  value={row.hr}
                  onChange={(e) => handleRowChange(row.id, 'hr', e.target.value)}
                />
              </td>
              <td className="p-4">
                <input 
                  type="text" 
                  placeholder="-" 
                  className="w-full p-2 border rounded"
                  value={row.remarks}
                  onChange={(e) => handleRowChange(row.id, 'remarks', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Basal HR (bpm):</span>
          <input 
            type="text" 
            placeholder="-" 
            className="w-32 p-2 border rounded text-center"
            value={formData.basalHR}
            onChange={(e) => handleBasalChange('basalHR', e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Basal BP (mmHg):</span>
          <input 
            type="text" 
            placeholder="-" 
            className="w-32 p-2 border rounded text-center"
            value={formData.basalBP}
            onChange={(e) => handleBasalChange('basalBP', e.target.value)}
          />
        </div>
       
        <div className="ml-auto">
          <ReportButton observationData={formData} />
        </div>
      </div>
      

    </div>
  );
};

export default ObservationTable;
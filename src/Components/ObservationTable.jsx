
const ObservationTable = () => {
  return (
    <div className="w-full">
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
          {[1, 2, 3].map((row) => (
            <tr key={row} className="border-b">
              <td className="p-4">{row}</td>
              <td className="p-4">
                <select className="w-full p-2 border rounded">
                  <option>Select drug</option>
                  <option>Peripheral vagus</option>
                  <option>Adrenaline</option>
                  <option>Acetylcholine</option>
                </select>
              </td>
              <td className="p-4">
                <input type="text" placeholder="-" className="w-full p-2 border rounded" />
              </td>
              <td className="p-4">
                <input type="text" placeholder="-" className="w-full p-2 border rounded" />
              </td>
              <td className="p-4">
                <input type="text" placeholder="-" className="w-full p-2 border rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Basal HR (bpm):</span>
          <input type="text" placeholder="-" className="w-32 p-2 border rounded" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Basal BP (mmHg):</span>
          <input type="text" placeholder="-" className="w-32 p-2 border rounded" />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="bg-gray-700 text-white px-4 py-2 rounded">
          Answer Questions
        </button>
        <button className="border px-4 py-2 rounded">MCQs</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          Report
        </button>
      </div>
    </div>
  );
};

export default ObservationTable;
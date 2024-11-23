const getTabContent = () => {
    switch (activeTab) {
      case 'objectives':
        return (
          <div className="flex gap-8 min-h-[400px] p-8 bg-blue-50">
            <div className="flex-none w-64 h-80 overflow-hidden rounded-xl shadow-lg">
              <img 
                src="/api/placeholder/256/320"
                alt="Doctor" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 max-w-3xl">
              <ul className="list-disc pl-8 space-y-4 text-lg text-gray-700">
                <li>
                  To demonstrate the changes on BP and HR upon mechanical occlusion of carotid (unilateral) and electrical stimulation of central (to stimulate the afferent fibers) and peripheral (to stimulate the efferent fibers) cut end of vagus nerve.
                </li>
                <li>
                  To appreciate the actions of certain common and important agents on BP and HR.
                </li>
              </ul>
            </div>
          </div>
        );
      case 'equipment':
        return (
          <div className="flex gap-8 min-h-[400px] p-8 bg-purple-50">
            <div className="flex-none w-64 h-64 bg-white rounded-xl shadow-lg"></div>
            <div className="flex-1 max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 text-purple-700">Equipment</h2>
              <p className="text-lg text-gray-700">This is the equipment section.</p>
            </div>
          </div>
        );
      case 'procedure':
        return (
          <div className="flex gap-8 min-h-[400px] p-8 bg-green-50">
            <div className="flex-none w-64 h-64 bg-white rounded-xl shadow-lg"></div>
            <div className="flex-1 max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 text-green-700">Procedure</h2>
              <p className="text-lg text-gray-700">This is the procedure section.</p>
            </div>
          </div>
        );
      case 'precautions':
        return (
          <div className="flex gap-8 min-h-[400px] p-8 bg-amber-50">
            <div className="flex-none w-64 h-64 bg-white rounded-xl shadow-lg"></div>
            <div className="flex-1 max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 text-amber-700">Precautions</h2>
              <p className="text-lg text-gray-700">This is the precautions section.</p>
            </div>
          </div>
        );
      case 'tips':
        return (
          <div className="flex gap-8 min-h-[400px] p-8 bg-cyan-50">
            <div className="flex-none w-64 h-64 bg-white rounded-xl shadow-lg"></div>
            <div className="flex-1 max-w-3xl">
              <h2 className="text-2xl font-bold mb-4 text-cyan-700">Tips</h2>
              <p className="text-lg text-gray-700">This is the tips section.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  export default getTabContent
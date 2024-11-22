
const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = ["Introduction", "Experiment", "Observation"];
  
  return (
    <div className="flex gap-1 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab.toLowerCase())}
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === tab.toLowerCase()
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-white/80"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

  export default TabNavigation;
  
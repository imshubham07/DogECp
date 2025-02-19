import React, { useState } from 'react';
import { Lightbulb, Info } from 'lucide-react';
import tipsImg from "../assets/tips.png";

const MedicalTips = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const tipSections = [
    {
      items: [
        "Low doses of ACh when given intravenously will produce reflex tachycardia; larger doses will lead to bradycardia.",
        "Stimulation of H1 receptors leads to a rapid onset but short-lived decrease in BP; H2 receptors induce a slow onset, longer lasting fall in BP.",
        "Alpha blockers will block the pressor response of epinephrine but not its depressor response. Epinephrine, which increases BP normally, will reduce BP after administration of an alpha blocker.",
        "Mean arterial BP (Mean BP) and Average BP are not the same. Average BP is (systolic + diastolic BPs)/2. Mean BP is approximately diastolic BP + one third of the pulse pressure.",
        "ACh and atropine exhibit competitive antagonism. Following the administration of atropine, the recommended or conventional doses of ACh (5 - 10 μg/kg) fail to elicit any response.",
        "Full atropinization following a large dose of atropine will block the muscarinic action of even a large dose of ACh.",
        "The reading that corresponds to the midpoint of the BP recording should be taken as mean BP.",
        "During live experiments, saline must be injected immediately after each drug administration to flush the drug remaining in the catheter.",
        "Epinephrine (adrenaline) stimulates both alpha and beta receptors. This is why it produces a biphasic effect on BP: a pressor response followed by a short depressor response."
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center p-8">
      <div className="container mx-auto max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">
        {/* Image Section */}
        <div className="w-2/5 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-700 opacity-80"></div>
          <img
            src={tipsImg}
            alt="Medical Tips"
            className="w-full h-full object-cover relative z-10"
          />
        </div>

        {/* Content Section */}
        <div className="w-3/5 p-10">
          <div className="flex items-center mb-8">
            <Lightbulb className="w-10 h-10 text-sky-600 mr-4" strokeWidth={2.5} />
            <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
              Medical Research Insights
            </h2>
          </div>

          {/* Scrollable Tips Container */}
          <div className="max-h-[600px] overflow-y-auto pr-6">
            <div className="space-y-5">
              {tipSections[0].items.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-sky-50 border-l-5 border-sky-600 p-5 rounded-r-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-x-1"
                >
                  <div className="flex items-start">
                    <Info className="w-6 h-6 text-sky-600 mr-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalTips;
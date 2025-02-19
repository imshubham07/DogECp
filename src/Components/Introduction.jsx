import { useState } from "react";
import {
  Beaker,
  FileText,
  ShieldAlert,
  Lightbulb,
  List,
  Home,
} from "lucide-react";
import DoctorImg from "../assets/doctor.png";
import DoctorCpy from "../assets/4.png";
import LabEquipmentUI from "./Equipment";
import precationImg from "../assets/Precaution.jpg";
import ProcedureLayout from "./ProcedureLayout";
// import tipsImg from "../assets/tips.png";

const Introduction = () => {
  const [activeTab, setActiveTab] = useState("Introduction");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabColors = {
    Introduction: {
      bg: "bg-blue-600",
      text: "text-white",
      hover: "hover:bg-blue-700",
    },
    Objectives: {
      bg: "bg-green-600",
      text: "text-white",
      hover: "hover:bg-green-700",
    },
    Equipment: {
      bg: "bg-purple-600",
      text: "text-white",
      hover: "hover:bg-purple-700",
    },
    Procedure: {
      bg: "bg-teal-600",
      text: "text-white",
      hover: "hover:bg-teal-700",
    },
    Precautions: {
      bg: "bg-red-600",
      text: "text-white",
      hover: "hover:bg-red-700",
    },
    Tips: {
      bg: "bg-orange-600",
      text: "text-white",
      hover: "hover:bg-orange-700",
    },
  };

  const getTabContent = () => {

    const precautions = [
      "Expose the trachea and cannulate to maintain respiration. In case of distress, connect the cannula to a respirator.",
      "The antagonist acts on the body for a long time, so the same antagonist should not be repeated frequently to prevent cumulation that could kill the dog.",
      "Select the dose from the conventional dose range. A low dose will not evoke any response, while a large dose will kill the dog.",
      "For some drugs, different doses produce different effects. Use the appropriate dose depending on the desired effect.",
      "Maintain adequate anesthesia throughout the experiment. At the end of the experiment, kill the dog using an ethically accepted procedure.",
      "Administer a small volume of saline following every drug injection to flush any remaining drug completely into the system.",
      "Avoid drug administration before the action of the last given drug is over."
    ];
    const sections = [
      {
        items: [
          "Low doses of ACh when given intravenously will produce reflex tachycardia; larger doses will lead to bradycardia.",
          "Stimulation of H1 receptors leads to a rapid onset but short-lived decrease in BP; H2 receptors induce a slow onset, longer lasting fall in BP.",
          "Alpha blockers will block the pressor response of epinephrine but not its depressor response. Epinephrine, which increases BP normally, will reduce BP after administration of an alpha blocker.",
          "Mean arterial BP (Mean BP) and Average BP are not the same. Average BP is (systolic + diastolic BPs)/2. Mean BP is approximately diastolic BP + one third of the pulse pressure. For example, if systolic and diastolic BPs are 120 and 80 mm Hg respectively, then the average BP is 100 mm Hg and the mean BP is 96 mm Hg.",
          "ACh and atropine exhibit competitive antagonism. Following the administration of atropine, the recommended or conventional doses of ACh (5 - 10 μg/kg) fail to elicit any response. A high dose (close to 100 μg/kg) will restore the response of ACh.",
          "Full atropinization following a large dose of atropine (1000 μg/kg and above) will block the muscarinic action of even a large dose of ACh. Very large doses of ACh (150 - 200 μg/kg) will produce a 'Nicotinic action' or 'Ganglionic action'.",
          "The reading that corresponds to the midpoint of the BP recording should be taken as mean BP. The trough and peak roughly correspond to diastolic and systolic BPs, respectively.",
          "During live experiments, saline must be injected immediately after each drug administration to flush the drug remaining in the catheter. Otherwise, the remaining drug mixes with the next drug administered, leading to an unpredictable response.",
          "Epinephrine (adrenaline) stimulates both alpha and beta receptors. This is why it produces a biphasic effect on BP: a pressor response followed by a short depressor response.",
          "To elicit the beta action of epinephrine, administer a low dose (0.1 μg/kg) or administer epinephrine following an alpha blocker.",
          "Sir Henry H. Dale (1875–1968) demonstrated that adrenaline, which increases BP when given alone, elicits a depressor response after ergotoxine (an alpha blocker) administration. This phenomenon is known as 'Dale's vasomotor reversal' or 'Epinephrine reversal'.",
          "Isoprenaline has a slight pressor response or no action on systolic BP, but it decreases diastolic BP considerably. As a result, the mean BP shows a fall.",
          "Electrical stimulation of the central cut end of the vagus often leads to a decrease in BP. Afferent impulses travel along the stimulated vagus nerve to the cardioinhibitory center, and efferent impulses pass down the other intact vagus nerve.",
          "Stimulation of the peripheral vagus always results in a decrease in BP and heart rate.",
          "Carotid occlusion (common carotid) leads to an increase in BP due to a reduction in baroreceptor impulses and increased chemoreceptor activity (carotid body) caused by reduced pressure in the baroreceptor area and reduced blood flow through the carotid body.",
          "Blockers (antagonists) act for a long time because of their high affinity (strong bonding) with the receptors. Repeated administration can lead to accumulation of blockers and kill the animal.",
          "In live experiments, once a blocker is given in adequate doses, its effect generally lasts till the end of the experiment (approximately 6 hours). However, in software simulations, the decay of blockers is accounted for, and the effect wears off after a certain time, which varies by blocker.",
          "The levels of blockers (antagonists) will be displayed, and if the level of an antagonist falls below a certain threshold, it may no longer block the action of agonists.",
          "Ephedrine, when repeated within 30 minutes, exhibits tachyphylaxis (acute tolerance). To demonstrate this phenomenon, repeat administration of a single dose 4 to 5 times within 30 minutes.",
          "Ephedrine has both direct and indirect action. It releases norepinephrine from nerve endings, which leads to tachyphylaxis after a few doses as norepinephrine stores are depleted. However, because the drug can stimulate alpha receptors, there is a slight increase in BP that may persist even after repeated doses.",
          "The unknown drug could be a blocker too, so it must be given judiciously. Do not exceed the recommended dose of 0.1 to 0.2 ml. Start with 0.1 ml and repeat only when needed. If the unknown drug is a blocker, repeated doses might kill the animal.",
          "The recording of the results of carotid and vagal procedures and administration of agonists is called 'normal response brackets' (normal panel). Before and after giving a dose of the unknown, normal response brackets must be recorded, and any differences in the responses (before and after) must be noted to help identify the unknown drug.",
          "If there is no difference in the normal response brackets (before and after the unknown), the unknown could be an agonist. Administer a suitable blocker to determine whether the effect of the unknown is blocked.",
          "Chloralose, an intravenous anesthetic suitable for acute experiments, does not depress reflexes (though they may be slightly exaggerated), unlike barbiturates, which depress cardiovascular and spinal cord reflexes.",
          "ACh has a very short action. In animals pretreated with physostigmine, ACh acts longer since physostigmine is an anticholinesterase. Cholinesterases are enzymes that destroy ACh.",
        ],
      },
    ];
    switch (activeTab) {
      case "Introduction":
        return (
          <div className="flex gap-8 min-h-[600px] p-8 bg-blue-50">
            <div className="flex-none w-80 h-[500px] overflow-hidden rounded-xl">
              {" "}
              {/* Increased height */}
              <img
                src={DoctorImg}
                alt="Laboratory setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 max-w-3xl">
              <h2 className="text-2xl font-bold mb-6 text-blue-700">
                Introduction
              </h2>
              <ul className="space-y-6 text-lg text-gray-700">
                <li className="flex items-start gap-5">
                  <span className="leading-relaxed">
                    Actions of many drugs are not confined to a single system of
                    the body. A drug may act on a single organ or multiple
                    organs of the same or different systems. It may act at one
                    site but produce an effect at another site. The present
                    experiment which simulates a live anaesthetized dog
                    demonstrates the effects of a few drugs on the
                    cardiovascular system. These drugs act on different
                    receptors and organs to produce similar or opposite effects
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="leading-relaxed">
                    By conducting an experiment on anesthetized dog one can
                    appreciate the effect(s) of various drugs upon BP and HR.
                    Further, based on the effects produced, one may also be able
                    to identify the nature of a new substance (trying to know
                    the unknown in relation to the known). This experiment forms
                    an important screening tool in the early phase of research
                    to identify potentially useful antihypertensives,
                    vasodilators, vasopressors and similar other drugs affecting
                    the cardiovascular system. This experiment also makes the
                    learner to appreciate certain physiological forces that
                    affect the heart and blood vessels (through appropriate
                    manipulation of the nervous system [vagus], impairment of
                    blood supply to brain [carotid occlusion], apart from their
                    interaction with drug effects.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        );
      case "Objectives":
        return (
          <div className="flex gap-8 min-h-[600px] p-8 bg-blue-50">
            <div className="flex-none w-80 h-[500px] overflow-hidden rounded-xl">
              {" "}
              {/* Increased height */}
              <img
                src={DoctorCpy}
                alt="Laboratory setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 max-w-3xl">
              <h2 className="text-2xl font-bold mb-6 text-blue-700">
                Learning Objectives
              </h2>
              <ul className="space-y-6 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <span className="leading-relaxed">
                    To demonstrate cardiovascular changes (BP and HR) in
                    response to: • Mechanical occlusion of unilateral carotid
                    artery • Electrical stimulation of vagus nerve central end
                    (afferent fibers) • Electrical stimulation of vagus nerve
                    peripheral end (efferent fibers)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <span className="leading-relaxed">
                    To understand and evaluate the effects of common
                    cardiovascular agents on Blood Pressure (BP) and Heart Rate
                    (HR).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <span className="leading-relaxed">
                    To understand the physiological mechanisms underlying
                    cardiovascular responses to various stimuli.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        );
      case "Equipment":
        return <LabEquipmentUI />;
      case "Procedure":
        return <ProcedureLayout/>
      case "Precautions":
        return (
          // <div className="flex gap-8 min-h-[600px] p-8 bg-amber-50">
          //   {/* <div className="flex-none w-99 h-96 overflow-hidden rounded-xl shadow-lg bg-white">
          //     <img
          //       src={precationImg}
          //       alt="Procedure"
          //       className="w-full h-full object-cover"
          //     />
          //   </div> */}
          //   <div className="flex-1 ">
          //     <h2 className="text-2xl font-bold mb-6 text-amber-700">
          //       Safety Precautions
          //     </h2>
          //     <div className="grid gap-6">
          //       {[
          //         {
          //           items: [
          //             "Expose the trachea and cannulate to maintain respiration. In case of distress, connect the cannula to a respirator.",
          //             "The antagonist acts on the body for a long time, so the same antagonist should not be repeated frequently to prevent cumulation that could kill the dog.",
          //             "Select the dose from the conventional dose range. A low dose will not evoke any response, while a large dose will kill the dog.",
          //             "For some drugs, different doses produce different effects. Use the appropriate dose depending on the desired effect.",
          //             "Maintain adequate anesthesia throughout the experiment. At the end of the experiment, kill the dog using an ethically accepted procedure.",
          //             "Administer a small volume of saline following every drug injection to flush any remaining drug completely into the system.",
          //             "Avoid drug administration before the action of the last given drug is over.",
          //           ],
          //         },
          //       ].map((section, idx) => (
          //         <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
          //           <h3 className="text-lg font-semibold text-amber-600 mb-3">
          //             {section.title}
          //           </h3>
          //           <ul className="space-y-3">
          //             {section.items.map((item, itemIdx) => (
          //               <li key={itemIdx} className="flex items-center gap-3">
          //                 <ShieldAlert className="w-5 h-5 text-amber-500" />
          //                 <span className="text-gray-700">{item}</span>
          //               </li>
          //             ))}
          //           </ul>
          //         </div>
          //       ))}
          //     </div>
          //   </div>
          // </div>
          <div className="flex gap-8 min-h-[600px] p-8 bg-amber-50">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6 text-amber-700">
          Safety Precautions
        </h2>
        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <ul className="space-y-4">
              {precautions.map((precaution, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-4 text-gray-800 hover:bg-amber-50 p-2 rounded-md transition-colors"
                >
                  <ShieldAlert className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <span className="flex-grow">{precaution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
        );
      case "Tips":
        return (
          <div className="flex gap-8 min-h-[600px] p-8 bg-cyan-50">
            {/* <div className="flex-none w-64 h-96 overflow-hidden rounded-xl shadow-lg bg-white">
              <img
                src={tipsImg}
                alt="Tips"
                className="w-full h-full object-cover"
              />
            </div> */}
            <div className="flex-1 ">
              <h2 className="text-2xl font-bold mb-6 text-cyan-700">
                Helpful Tips
              </h2>

              <div className="grid gap-6 p-4">
                {sections.map((section, idx) => (
                  <div key={idx}>
                    <ul className="space-y-1">
                      {section.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-3 text-gray-800 hover:bg-gray-50 p-2 rounded-md transition-colors"
                        >
                          <Lightbulb className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                          <span className="flex-grow">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-[700px] bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="w-64 bg-slate-50 border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-6 bg-blue-500 p-3 rounded-lg shadow-md">
            Content
          </h2>
          <div className="flex flex-col gap-3">
            {[
              {
                id: "Introduction",
                icon: Home,
                label: "Introduction",
              },
              {
                id: "Objectives",
                icon: List,
                label: "Objectives",
              },
              {
                id: "Equipment",
                icon: Beaker,
                label: "Equipment",
              },
              {
                id: "Procedure",
                icon: FileText,
                label: "Procedure",
              },
              {
                id: "Precautions",
                icon: ShieldAlert,
                label: "Precautions",
              },
              {
                id: "Tips",
                icon: Lightbulb,
                label: "Tips",
              },
            ].map(({ id, icon: Icon, label }) => {
              const colorScheme = tabColors[id];
              return (
                <button
                  key={id}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === id
                      ? `${colorScheme.bg} ${colorScheme.text} shadow-md`
                      : `text-gray-700 ${colorScheme.hover}`
                  }`}
                  onClick={() => handleTabClick(id)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="h-16 bg-blue-500 border-b border-gray-200 flex items-center px-8 shadow-md">
          <h1 className="text-2xl font-bold text-white">{activeTab}</h1>
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto">
          {getTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Introduction;

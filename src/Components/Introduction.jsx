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
import LabEquipmentUI from "./Index";

const Introduction = () => {
  const [activeTab, setActiveTab] = useState("Introduction");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getTabContent = () => {
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
        return (
          <LabEquipmentUI/>
        );
      case "procedure":
        return (
          <div className="flex gap-8 min-h-[600px] p-8 bg-green-50">
            <div className="flex-none w-64 h-96 overflow-hidden rounded-xl shadow-lg bg-white">
              <img
                src="/api/placeholder/400/320"
                alt="Procedure"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 max-w-3xl">
              <h2 className="text-2xl font-bold mb-6 text-green-700">
                Experimental Procedure
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Preparation",
                    steps: [
                      "Setup Equipment",
                      "Calibrate instruments",
                      "Prepare workspace",
                    ],
                  },
                  {
                    title: "Execution",
                    steps: [
                      "Record baseline",
                      "Perform intervention",
                      "Document results",
                    ],
                  },
                  {
                    title: "Analysis",
                    steps: [
                      "Process data",
                      "Calculate parameters",
                      "Interpret findings",
                    ],
                  },
                ].map((section, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-green-600 mb-3">
                      {section.title}
                    </h3>
                    <ol className="space-y-3">
                      {section.steps.map((step, stepIdx) => (
                        <li key={stepIdx} className="flex items-center gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-green-600 text-sm font-bold">
                              {stepIdx + 1}
                            </span>
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "precautions":
        return (
          <div className="flex gap-8 min-h-[600px] p-8 bg-amber-50">
            <div className="flex-none w-64 h-96 overflow-hidden rounded-xl shadow-lg bg-white">
              <img
                src="/api/placeholder/400/320"
                alt="Precautions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 max-w-3xl">
              <h2 className="text-2xl font-bold mb-6 text-amber-700">
                Safety Precautions
              </h2>
              <div className="grid gap-6">
                {[
                  {
                    title: "Personal Safety",
                    items: [
                      "Wear protective equipment",
                      "Follow safety protocols",
                      "Maintain sterile conditions",
                    ],
                  },
                  {
                    title: "Equipment Safety",
                    items: [
                      "Check connections",
                      "Verify calibration",
                      "Monitor performance",
                    ],
                  },
                ].map((section, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-amber-600 mb-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-3">
                          <ShieldAlert className="w-5 h-5 text-amber-500" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "tips":
        return (
          <div className="flex gap-8 min-h-[600px] p-8 bg-cyan-50">
            <div className="flex-none w-64 h-96 overflow-hidden rounded-xl shadow-lg bg-white">
              <img
                src="/api/placeholder/400/320"
                alt="Tips"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 max-w-3xl">
              <h2 className="text-2xl font-bold mb-6 text-cyan-700">
                Helpful Tips
              </h2>
              <div className="grid gap-6">
                {[
                  {
                    title: "Preparation Tips",
                    items: [
                      "Review protocols",
                      "Organize materials",
                      "Plan timeline",
                    ],
                  },
                  {
                    title: "Execution Tips",
                    items: [
                      "Take detailed notes",
                      "Monitor progress",
                      "Document changes",
                    ],
                  },
                ].map((section, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-cyan-600 mb-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-3">
                          <Lightbulb className="w-5 h-5 text-cyan-500" />
                          <span className="text-gray-700">{item}</span>
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
                color: "blue",
                label: "Introduction",
              },
              {
                id: "objectives",
                icon: List,
                color: "blue",
                label: "Objectives",
              },
              {
                id: "Equipment",
                icon: Beaker,
                color: "purple",
                label: "Equipment",
              },
              {
                id: "procedure",
                icon: FileText,
                color: "green",
                label: "Procedure",
              },
              {
                id: "precautions",
                icon: ShieldAlert,
                color: "amber",
                label: "Precautions",
              },
              { id: "tips", icon: Lightbulb, color: "cyan", label: "Tips" },
            ].map(({ id, icon: Icon, color, label }) => (
              <button
                key={id}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === id
                    ? `bg-${color}-500 text-white shadow-md`
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => handleTabClick(id)}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
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

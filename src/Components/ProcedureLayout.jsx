import dog from '../assets/dog.jpg';
import PrecautionImg from '../assets/Precaution.jpg';
import Img2 from '../assets/fullviewstrlocal.jpg';
import Img3 from '../assets/setup.png';

const ProcedureSection = ({ title, steps, showImage, imageSrc }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-green-600 mb-3">
      {title}
    </h3>
    <ol className="space-y-3">
      {steps.map((step, stepIdx) => (
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
    {showImage && (
      <div className="mt-4">
        <img
          src={imageSrc}
          alt={`${title} visualization`}
          className="w-full h-69 object-cover rounded-lg shadow-sm"
        />
      </div>
    )}
  </div>
);

const ProcedureLayout = () => {
  const sections = [
    {
      title: "Step-1",
      steps: [
        "A dog is weighed and anaesthetized using intravenous chloralose (100 μg/kg of body weight).",
        
      ],
      showImage: true,
      imageSrc: dog
    },
    {
      title: "Step-2",
      steps: [
        "It is fixed on a dog table in supine position.",
      ],
      showImage: true,
      imageSrc: Img2
    },
    {
      title: "Analysis",
      steps: [
        "Process all collected samples according to lab protocol",
        "Calculate key parameters using standardized formulas",
        "Interpret findings in context of baseline measurements",
        "Document any deviations from expected results",
        "Prepare preliminary data visualization",
        "Compare results with established reference ranges"
      ],
      showImage: true,
      imageSrc: Img3
    },
    {
      title: "Post-Procedure Care",
      steps: [
        "Monitor recovery from anesthesia",
        "Assess vital signs every 15 minutes during recovery",
        "Document any post-procedure complications",
        "Maintain temperature regulation",
        "Ensure proper hydration and comfort"
      ],
      showImage: true,
      imageSrc: PrecautionImg
    }
  ];

  return (
    <div className="flex gap-8 min-h-[800px] p-8 bg-green-50">
      <div className="flex-none w-64 h-96 overflow-hidden rounded-xl shadow-lg bg-white">
        <img
          src={PrecautionImg}
          alt="Laboratory setup"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-green-700">
          Detailed Experiment Procedure
        </h2>
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <ProcedureSection
              key={idx}
              title={section.title}
              steps={section.steps}
              showImage={section.showImage}
              imageSrc={section.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcedureLayout;
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import StepFive from './steps/StepFive';

const steps = [
    {
    title: 'Personal Info',
    description: 'Please provide your name, email address, and phone number.',
    component: <StepOne />,
  },
  {
    title: 'Select Plan',
    description: 'Choose your preferred plan.',
    component: <StepTwo />,
  },
  {
    title: 'Add-ons',
    description: 'Add optional features to enhance your experience.',
    component: <StepThree />,
  },
  {
    title: 'Summary',
    description: 'Double-check everything looks OK before confirming.',
    component: <StepFour />,
  },
  {
    title: 'Thank You!',
    description: '',
    component: <StepFive />,
  },
];


export default function MultiStepForm({ currentStep, setCurrentStep }) {
    const { title, description, component } = steps[currentStep];

    const isLastStep = currentStep === steps.length -1;
    const isFirstStep = currentStep === 0;

    function nextStep() {
        if (!isLastStep) {
            setCurrentStep((prev) => prev + 1);
        }
    }

    function prevStep() {
        if (!isFirstStep) {
            setCurrentStep((prev) => prev - 1);
        }
    }

    
    return (
    <div className="step-container">
      {/* Step title and description */}
      {title && <h1 className="step-title">{title}</h1>}
      {description && <p className="step-description">{description}</p>}

      {/* Step content */}
      <div className="step-content">{component}</div>

      {/* Navigation Buttons */}
      {!isLastStep && (
        <div className="btn-group">
          <button
            className="btn-back"
            onClick={prevStep}
            style={{ visibility: isFirstStep ? 'hidden' : 'visible' }}
          >
            Go Back
          </button>

          <button
            className={`btn-next ${currentStep === 3 ? 'confirm' : ''}`}
            onClick={nextStep}
          >
            {currentStep === 3 ? 'Confirm' : 'Next Step'}
          </button>
        </div>
      )}
    </div>
  );
}
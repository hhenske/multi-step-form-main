// src/components/MultiStepForm.jsx
import { useState } from 'react';
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


export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const { title, description, component } = steps[currentStep];

    return (
        <div className="step-container">
            <h1 className="step-title">{title}</h1>
            {description && <p className="step-description">{description}</p>}
            <div className="step-content">{component}</div>
        </div>
    )
}
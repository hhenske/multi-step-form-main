// src/App.jsx
import { useState } from 'react';
import MultiStepForm from './components/MultiStepForm';
import './App.css';
import '/styles.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const stepLabels = [
    { label: 'Step 1', description: 'Your Info' },
    { label: 'Step 2', description: 'Select Plan' },
    { label: 'Step 3', description: 'Add-Ons' },
    { label: 'Step 4', description: 'Summary' },
  ];

  return (
    <div className="content-container">
      {/* Mobile background image */}
      <img
        src="/assets/images/bg-sidebar-mobile.svg"
        id="mobile-background-image"
        alt="Mobile Sidebar"
      />

      {/* Mobile step group */}
      <div className="step-group-mobile">
        {stepLabels.map((_, index) => (
          <div
            key={index}
            className={`step-circle ${index === currentStep ? 'active' : ''}`}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {/* Card container */}
      <div className="container-card">
        {/* Desktop background image */}
        <img
          src="/assets/images/bg-sidebar-desktop.svg"
          id="desktop-background-image"
          alt="Desktop Sidebar"
        />

        {/* Step group over background image */}
        <div className="background-image">
          <div className="step-group">
            {stepLabels.map((step, index) => (
              <div
                key={index}
                className={`step-item ${index === currentStep ? 'active' : ''}`}
              >
                <div className="step-circle">{index + 1}</div>
                <div className="step-info">
                  <div className="step-label">{step.label}</div>
                  <div className="step-description">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form component */}
        <MultiStepForm
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </div>
  );
}

export default App;

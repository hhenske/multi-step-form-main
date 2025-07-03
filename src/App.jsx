// src/App.jsx
// src/App.jsx
import MultiStepForm from './components/MultiStepForm';
import './App.css';
import './styles.css';

function App() {
  return (
    <div className="content-container">
      {/* Mobile background image */}
      <img
        src="assets/images/bg-sidebar-mobile.svg"
        id="mobile-background-image"
        alt="Mobile Sidebar"
      />

      {/* Mobile step group */}
      <div className="step-group-mobile">
        <div className="step-circle active">1</div>
        <div className="step-circle">2</div>
        <div className="step-circle">3</div>
        <div className="step-circle">4</div>
      </div>

      {/* Card container */}
      <div className="container-card">
        {/* Desktop background image */}
        <img
          src="assets/images/bg-sidebar-desktop.svg"
          id="desktop-background-image"
          alt="Desktop Sidebar"
        />

        {/* Step group over background image */}
        <div className="background-image">
          <div className="step-group">
            <div className="step-item active">
              <div className="step-circle">1</div>
              <div className="step-info">
                <div className="step-label">Step 1</div>
                <div className="step-description">Your Info</div>
              </div>
            </div>

            {/* Repeat for steps 2–4 if you want */}
          </div>
        </div>

        {/* Form component */}
        <MultiStepForm />
      </div>

      {/* Navigation buttons */}
      <div className="btn-group">
        {/* Buttons will go here */}
      </div>
    </div>
  );
}

export default App;

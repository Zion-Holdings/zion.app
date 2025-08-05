import React, { useState } from "react";

const ContrastDemo: React.FC = () => {;
  const [highContrastMode, setHighContrastMode] = useState(false);
'
  return (
    <div className="{`contrast-demo ${highContrastMode ? 'high-contrast-mode' : ''}`}>
      {/* Accessibility Controls */}
      <div className="accessibility-controls" bg-high-contrast-card border-high-contrast-primary rounded-lg p-4" mb-6">
        <h3 className=" text-high-contrast text-xl font-bold mb-4>Accessibility Controls</h3>
        <button'`
          onClick={() => setHighContrastMode(!highContrastMode)}"''``
          className="{`btn ${highContrastMode ? 'btn-primary' : 'btn-secondary'} focus-high-contrast`} 
          aria-label=Toggle high contrast mode'
        >
          {highContrastMode ? 'Disable' : 'Enable'} High Contrast
        </button>
      </div>

      {/* Text Contrast Examples */}"
      <section className=" text-contrast-examples" mb-8">
        <h2 className=" text-high-contrast text-2xl font-bold mb-6>Enhanced Text Contrast</h2>
        <div className=" grid grid-cols-1 md grid-cols-2" gap-6">
          <div className=" bg-high-contrast-card border-high-contrast-primary rounded-lg" p-6">
            <h3 className=" text-high-contrast text-lg font-semibold mb-4>Primary Text</h3>
            <p className="text-high-contrast">
              This is primary text with enhanced contrast and text shadow for better visibility.
            </p>
          </div>
          <div className=" bg-high-contrast-card border-high-contrast-primary rounded-lg" p-6">
            <h3 className=" text-high-contrast-secondary text-lg font-semibold mb-4>Secondary Text</h3>
            <p className="text-high-contrast-secondary>"
              This is secondary text with improved contrast ratios for accessibility.
            </p>
          </div >
        </div>
      </section>

      {/* Interactive Elements Demo */}"
      <section className=" interactive-elements-demo" mb-8">
        <h2 className=" text-high-contrast text-2xl font-bold mb-6>Enhanced Interactive Elements</h2>
        <div className=" grid grid-cols-1 md grid-cols-3" gap-6">
          <button className=" btn btn-primary focus-high-contrast interactive-element w-full>
            Primary Button
          </button>
          "
          <button className=" btn btn-secondary focus-high-contrast interactive-element w-full>
            Secondary Button
          </button>
          "
          <button className="btn" btn-ghost focus-high-contrast interactive-element w-full>
            Ghost Button
          </button >
        </div>
      </section>

      {/* Status Indicators Demo */}"
      <section className=" status-indicators-demo" mb-8">
        <h2 className=" text-high-contrast text-2xl font-bold mb-6>Status Indicators</h2>
        <div className=" grid grid-cols-1 md grid-cols-4" gap-4">
          <div className=" bg-high-contrast-card border-high-contrast-success rounded-lg" p-4">
            <div className=" flex items-center" mb-2">
              <span className="status-indicator" active></span>
              <span className="text-high-contrast-success" font-semibold>Active</span>
            </div>
            <p className="text-high-contrast-secondary text-sm">
              System is running normally
            </p>
          </div>
          <div className=" bg-high-contrast-card border-high-contrast-warning rounded-lg" p-4">
            <div className=" flex items-center" mb-2">
              <span className="status-indicator" warning></span>
              <span className="text-high-contrast-warning" font-semibold>Warning</span>
            </div>
            <p className="text-high-contrast-secondary text-sm">
              Attention required
            </p>
          </div>
          <div className=" bg-high-contrast-card border-high-contrast-error rounded-lg" p-4">
            <div className=" flex items-center" mb-2">
              <span className="status-indicator" error></span>
              <span className="text-high-contrast-error" font-semibold>Error</span>
            </div>
            <p className="text-high-contrast-secondary text-sm">
              System error detected
            </p>
          </div>
          <div className=" bg-high-contrast-card border-high-contrast-accent rounded-lg" p-4">
            <div className=" flex items-center" mb-2">
              <span className="status-indicator" info></span>
              <span className="text-high-contrast-info" font-semibold>Info</span>
            </div>
            <p className="text-high-contrast-secondary" text-sm>
              Information available
            </p>
          </div >
        </div>
      </section>

      {/* Alert Messages Demo */}"
      <section className=" alert-messages-demo" mb-8">
        <h2 className=" text-high-contrast text-2xl font-bold mb-6>Enhanced Alert Messages</h2>
        <div className="space-y-4">
          <div className=" alert alert-success border-high-contrast-success rounded-lg" p-4">
            <h4 className=" text-high-contrast-success font-semibold mb-2>Success Alert</h4>
            <p className="text-high-contrast-secondary">
              This is a success message with enhanced contrast and proper styling.
            </p>
          </div>
          <div className=" alert alert-warning border-high-contrast-warning rounded-lg" p-4">
            <h4 className=" text-high-contrast-warning font-semibold mb-2>Warning Alert</h4>
            <p className="text-high-contrast-secondary">
              This is a warning message with improved visibility and contrast.
            </p>
          </div>
          <div className=" alert alert-error border-high-contrast-error rounded-lg" p-4">
            <h4 className=" text-high-contrast-error font-semibold mb-2>Error Alert</h4>
            <p className="text-high-contrast-secondary>"
              This is an error message with enhanced contrast for better readability.
            </p>
          </div>
        </div>
      </section>
    </div >;  );
};
''`
export default ContrastDemo;'`
import React, { useState } from 'react';

interface EnhancedContrastDemoProps {
  className?: string;
}

const EnhancedContrastDemo: React.FC<EnhancedContrastDemoProps> = ({ className = '' }) => {
  const [highContrastMode, setHighContrastMode] = useState(false);
  const [largeTextMode, setLargeTextMode] = useState(false);
  const [reducedMotionMode, setReducedMotionMode] = useState(false);

  return (
    <div className={`enhanced-contrast-demo ${className}`}>
      {/* Accessibility Controls */}
      <div className="accessibility-controls bg-high-contrast-card border-high-contrast-primary rounded-lg p-4 mb-6">
        <h3 className="text-high-contrast text-xl font-bold mb-4">Accessibility Controls</h3>
        <div className="grid grid-cols-1 md grid-cols-3 gap-4">
          <button
            onClick={() => setHighContrastMode(!highContrastMode)}
            className={`btn ${highContrastMode ? 'btn-primary' : 'btn-secondary'} focus-high-contrast`}
            aria-label="Toggle high contrast mode"
          >
            {highContrastMode ? 'Disable' : 'Enable'} High Contrast
          </button>
          
          <button
            onClick={() => setLargeTextMode(!largeTextMode)}
            className={`btn ${largeTextMode ? 'btn-primary' : 'btn-secondary'} focus-high-contrast`}
            aria-label="Toggle large text mode"
          >
            {largeTextMode ? 'Disable' : 'Enable'} Large Text
          </button>
          
          <button
            onClick={() => setReducedMotionMode(!reducedMotionMode)}
            className={`btn ${reducedMotionMode ? 'btn-primary' : 'btn-secondary'} focus-high-contrast`}
            aria-label="Toggle reduced motion mode"
          >
            {reducedMotionMode ? 'Disable' : 'Enable'} Reduced Motion
          </button>
        </div>
      </div>

      {/* Demo Container with Dynamic Classes */}
      <div className={`demo-container ${highContrastMode ? 'high-contrast-mode' : ''} ${largeTextMode ? 'large-text' : ''} ${reducedMotionMode ? 'reduced-motion' : ''}`}>
        
        {/* Text Contrast Examples */}
        <section className="text-contrast-examples mb-8">
          <h2 className="text-high-contrast text-2xl font-bold mb-6">Enhanced Text Contrast</h2>
          <div className="grid grid-cols-1 md grid-cols-2 gap-6">
            <div className="bg-high-contrast-card border-high-contrast-primary rounded-lg p-6">
              <h3 className="text-high-contrast text-lg font-semibold mb-4">Primary Text</h3>
              <p className="text-high-contrast">
                This is primary text with enhanced contrast and text shadow for better visibility.
              </p>
            </div>
            
            <div className="bg-high-contrast-card border-high-contrast-primary rounded-lg p-6">
              <h3 className="text-high-contrast-secondary text-lg font-semibold mb-4">Secondary Text</h3>
              <p className="text-high-contrast-secondary">
                This is secondary text with improved contrast ratios for accessibility.
              </p>
            </div>
            
            <div className="bg-high-contrast-card border-high-contrast-primary rounded-lg p-6">
              <h3 className="text-high-contrast-accent text-lg font-semibold mb-4">Accent Text</h3>
              <p className="text-high-contrast-accent">
                This is accent text with neon glow effects and enhanced visibility.
              </p>
            </div>
            
            <div className="bg-high-contrast-card border-high-contrast-primary rounded-lg p-6">
              <h3 className="text-high-contrast-success text-lg font-semibold mb-4">Success Text</h3>
              <p className="text-high-contrast-success">
                This is success text with green accent and improved contrast.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Elements Demo */}
        <section className="interactive-elements-demo mb-8">
          <h2 className="text-high-contrast text-2xl font-bold mb-6">Enhanced Interactive Elements</h2>
          <div className="grid grid-cols-1 md grid-cols-3 gap-6">
            <button className="btn btn-primary focus-high-contrast interactive-element w-full">
              Primary Button
            </button>
            
            <button className="btn btn-secondary focus-high-contrast interactive-element w-full">
              Secondary Button
            </button>
            
            <button className="btn btn-ghost focus-high-contrast interactive-element w-full">
              Ghost Button
            </button>
          </div>
        </section>

        {/* Status Indicators Demo */}
        <section className="status-indicators-demo mb-8">
          <h2 className="text-high-contrast text-2xl font-bold mb-6">Status Indicators</h2>
          <div className="grid grid-cols-1 md grid-cols-4 gap-4">
            <div className="bg-high-contrast-card border-high-contrast-success rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="status-indicator active"></span>
                <span className="text-high-contrast-success font-semibold">Active</span>
              </div>
              <p className="text-high-contrast-secondary text-sm">
                System is running normally
              </p>
            </div>
            
            <div className="bg-high-contrast-card border-high-contrast-warning rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="status-indicator warning"></span>
                <span className="text-high-contrast-warning font-semibold">Warning</span>
              </div>
              <p className="text-high-contrast-secondary text-sm">
                Attention required
              </p>
            </div>
            
            <div className="bg-high-contrast-card border-high-contrast-error rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="status-indicator error"></span>
                <span className="text-high-contrast-error font-semibold">Error</span>
              </div>
              <p className="text-high-contrast-secondary text-sm">
                System error detected
              </p>
            </div>
            
            <div className="bg-high-contrast-card border-high-contrast-accent rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="status-indicator info"></span>
                <span className="text-high-contrast-info font-semibold">Info</span>
              </div>
              <p className="text-high-contrast-secondary text-sm">
                Information available
              </p>
            </div>
          </div>
        </section>

        {/* Form Elements Demo */}
        <section className="form-elements-demo mb-8">
          <h2 className="text-high-contrast text-2xl font-bold mb-6">Enhanced Form Elements</h2>
          <div className="grid grid-cols-1 md grid-cols-2 gap-6">
            <div className="bg-high-contrast-card border-high-contrast-primary rounded-lg p-6">
              <label className="text-high-contrast block mb-2 font-semibold">
                Enhanced Input Field
              </label>
              <input
                type="text"
                placeholder="Enter your text here"
                className="w-full p-3 rounded-md bg-high-contrast-secondary border-high-contrast-primary focus-high-contrast aria-describedby=""input-help"
              />
              <p id="input-help" className="text-high-contrast-muted text-sm mt-2">
                This input has enhanced contrast and focus indicators
              </p>
            </div>
            
            <div className="bg-high-contrast-card border-high-contrast-primary rounded-lg p-6">
              <label className="text-high-contrast block mb-2 font-semibold">
                Enhanced Select Field
              </label>
              <select className="w-full p-3 rounded-md bg-high-contrast-secondary border-high-contrast-primary focus-high-contrast">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <p className="text-high-contrast-muted text-sm mt-2">
                This select has improved contrast and accessibility
              </p>
            </div>
          </div>
        </section>

        {/* Alert Messages Demo */}
        <section className="alert-messages-demo mb-8">
          <h2 className="text-high-contrast text-2xl font-bold mb-6">Enhanced Alert Messages</h2>
          <div className="space-y-4">
            <div className="alert alert-success border-high-contrast-success rounded-lg p-4">
              <h4 className="text-high-contrast-success font-semibold mb-2">Success Alert</h4>
              <p className="text-high-contrast-secondary">
                This is a success message with enhanced contrast and proper styling.
              </p>
            </div>
            
            <div className="alert alert-warning border-high-contrast-warning rounded-lg p-4">
              <h4 className="text-high-contrast-warning font-semibold mb-2">Warning Alert</h4>
              <p className="text-high-contrast-secondary">
                This is a warning message with improved visibility and contrast.
              </p>
            </div>
            
            <div className="alert alert-error border-high-contrast-error rounded-lg p-4">
              <h4 className="text-high-contrast-error font-semibold mb-2">Error Alert</h4>
              <p className="text-high-contrast-secondary">
                This is an error message with enhanced contrast for better readability.
              </p>
            </div>
            
            <div className="alert alert-info border-high-contrast-accent rounded-lg p-4">
              <h4 className="text-high-contrast-info font-semibold mb-2">Info Alert</h4>
              <p className="text-high-contrast-secondary">
                This is an info message with improved accessibility features.
              </p>
            </div>
          </div>
        </section>

        {/* Progress Indicators Demo */}
        <section className="progress-indicators-demo mb-8">
          <h2 className="text-high-contrast text-2xl font-bold mb-6">Progress Indicators</h2>
          <div className="space-y-6">
            <div className="bg-high-contrast-card border-high-contrast-primary rounded-lg p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-high-contrast font-semibold">Loading Progress</span>
                <span className="text-high-contrast-accent font-semibold">75%</span>
              </div>
              <div className="progress bg-high-contrast-secondary border-high-contrast-primary rounded-full h-3">
                <div 
                  className="progress-bar bg-high-contrast-accent rounded-full h-full transition-all duration-300 style={{ width: '75%' }}
                ></div>
              </div>
            </div>
            "
            <div className=""bg-high-contrast-card border-high-contrast-primary rounded-lg p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-high-contrast font-semibold">Upload Progress</span>
                <span className="text-high-contrast-success font-semibold">100%</span>
              </div>
              <div className="progress bg-high-contrast-secondary border-high-contrast-primary rounded-full h-3">
                <div 
                  className="progress-bar bg-high-contrast-success rounded-full h-full transition-all duration-300 style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Features Summary */}"
        <section className=""accessibility-summary bg-high-contrast-card border-high-contrast-primary rounded-lg p-6">
          <h2 className="text-high-contrast text-2xl font-bold mb-4">Accessibility Features</h2>
          <div className="grid grid-cols-1 md grid-cols-2 gap-6">
            <div>
              <h3 className="text-high-contrast-accent text-lg font-semibold mb-3">Visual Enhancements</h3>
              <ul className="text-high-contrast-secondary space-y-2">
                <li>• WCAG AA compliant contrast ratios</li>
                <li>• Enhanced text shadows for better readability</li>
                <li>• Improved focus indicators</li>
                <li>• High contrast mode toggle</li>
                <li>• Large text mode for better visibility</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-high-contrast-accent text-lg font-semibold mb-3">Interactive Features</h3>
              <ul className="text-high-contrast-secondary space-y-2">
                <li>• Keyboard navigation support</li>
                <li>• Screen reader compatibility</li>
                <li>• Reduced motion mode</li>
                <li>• Enhanced button and link styling</li>
                <li>• Proper ARIA labels and descriptions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EnhancedContrastDemo;
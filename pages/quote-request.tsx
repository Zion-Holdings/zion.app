import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface QuoteFormData {
  services: string[];
  talent: string[];
  equipment: string[];
  projectName: string;
  projectDescription: string;
  projectType: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  urgency: string;
  budgetRange: string;
  budgetDetails: string;
  clientName: string;
  email: string;
  phone: string;
  company: string;
}

const QuoteRequestForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    services: [],
    talent: [],
    equipment: [],
    projectName: '',
    projectDescription: '',
    projectType: '',
    location: '',
    duration: '',
    startDate: '',
    endDate: '',
    urgency: '',
    budgetRange: '',
    budgetDetails: '',
    clientName: '',
    email: '',
    phone: '',
    company: ''
  });

  const services = [
    'Video Production', 'Photography', 'Live Streaming', 'Audio Recording',
    'Post-Production', 'Equipment Rental', 'Event Coverage', 'Corporate Content',
    'Commercial Production', 'Documentary'
  ];

  const talent = [
    'Videographer', 'Photographer', 'Audio Engineer', 'Video Editor',
    'Colorist', 'Motion Graphics Artist', 'Drone Operator', 'Lighting Technician',
    'Production Assistant', 'Director'
  ];

  const equipment = [
    '4K Camera', 'Professional Lighting', 'Audio Equipment', 'Drone',
    'Gimbal Stabilizer', 'Green Screen', 'Teleprompter', 'Live Streaming Kit',
    'Editing Suite', 'Mobile Studio'
  ];

  const budgetRanges = [
    'Under $1,000', '$1,000 - $5,000', '$5,000 - $10,000',
    '$10,000 - $25,000', '$25,000 - $50,000', '$50,000+'
  ];

  const urgencyLevels = [
    'Standard (2-4 weeks)', 'Rush (1-2 weeks)', 'Express (3-7 days)', 'Same Day'
  ];

  const handleInputChange = (field: keyof QuoteFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field: keyof QuoteFormData, value: string) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: newArray };
    });
  };

  const nextStep = () => currentStep < 5 && setCurrentStep(currentStep + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(`Quote request submitted successfully! Quote ID: ${result.quoteId}\nWe&apos;ll get back to you within 24 hours.`);
        router.push('/');
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error submitting quote request:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Select Services</h3>
        <div className="grid grid-cols-2 gap-3">
          {services.map(service => (
            <label key={service} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleMultiSelect('services', service)}
                className="rounded border-gray-300"
              />
              <span className="text-sm">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Select Talent</h3>
        <div className="grid grid-cols-2 gap-3">
          {talent.map(t => (
            <label key={t} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.talent.includes(t)}
                onChange={() => handleMultiSelect('talent', t)}
                className="rounded border-gray-300"
              />
              <span className="text-sm">{t}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Select Equipment</h3>
        <div className="grid grid-cols-2 gap-3">
          {equipment.map(eq => (
            <label key={eq} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.equipment.includes(eq)}
                onChange={() => handleMultiSelect('equipment', eq)}
                className="rounded border-gray-300"
              />
              <span className="text-sm">{eq}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Project Name</label>
        <input
          type="text"
          value={formData.projectName}
          onChange={(e) => handleInputChange('projectName', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter project name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Project Type</label>
        <select
          value={formData.projectType}
          onChange={(e) => handleInputChange('projectType', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select project type</option>
          <option value="commercial">Commercial</option>
          <option value="corporate">Corporate</option>
          <option value="event">Event</option>
          <option value="wedding">Wedding</option>
          <option value="documentary">Documentary</option>
          <option value="music-video">Music Video</option>
          <option value="short-film">Short Film</option>
          <option value="live-stream">Live Stream</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Project Description</label>
        <textarea
          value={formData.projectDescription}
          onChange={(e) => handleInputChange('projectDescription', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe your project in detail..."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Project location"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Duration</label>
          <input
            type="text"
            value={formData.duration}
            onChange={(e) => handleInputChange('duration', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 2 hours, 1 day"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Start Date</label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">End Date</label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Urgency Level</label>
        <select
          value={formData.urgency}
          onChange={(e) => handleInputChange('urgency', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select urgency level</option>
          {urgencyLevels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Budget Range</label>
        <select
          value={formData.budgetRange}
          onChange={(e) => handleInputChange('budgetRange', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select budget range</option>
          {budgetRanges.map(range => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Budget Details</label>
        <textarea
          value={formData.budgetDetails}
          onChange={(e) => handleInputChange('budgetDetails', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Any specific budget requirements or constraints..."
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-md">
        <h4 className="font-medium text-blue-900 mb-2">Contact Information</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={formData.clientName}
              onChange={(e) => handleInputChange('clientName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Company</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Company name (optional)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone number"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Quote Request Summary</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700">Services Selected</h4>
            <p className="text-sm text-gray-600">
              {formData.services.length > 0 ? formData.services.join(', ') : 'None selected'}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-700">Talent Required</h4>
            <p className="text-sm text-gray-600">
              {formData.talent.length > 0 ? formData.talent.join(', ') : 'None selected'}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-700">Equipment Needed</h4>
            <p className="text-sm text-gray-600">
              {formData.equipment.length > 0 ? formData.equipment.join(', ') : 'None selected'}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-700">Project Details</h4>
            <p className="text-sm text-gray-600">
              <strong>Name:</strong> {formData.projectName || 'Not specified'}<br />
              <strong>Type:</strong> {formData.projectType || 'Not specified'}<br />
              <strong>Location:</strong> {formData.location || 'Not specified'}<br />
              <strong>Duration:</strong> {formData.duration || 'Not specified'}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-700">Timeline</h4>
            <p className="text-sm text-gray-600">
              <strong>Start:</strong> {formData.startDate || 'Not specified'}<br />
              <strong>End:</strong> {formData.endDate || 'Not specified'}<br />
              <strong>Urgency:</strong> {formData.urgency || 'Not specified'}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-700">Budget</h4>
            <p className="text-sm text-gray-600">
              <strong>Range:</strong> {formData.budgetRange || 'Not specified'}<br />
              {formData.budgetDetails && (
                <><strong>Details:</strong> {formData.budgetDetails}<br /></>
              )}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-700">Contact Information</h4>
            <p className="text-sm text-gray-600">
              <strong>Name:</strong> {formData.clientName || 'Not specified'}<br />
              <strong>Company:</strong> {formData.company || 'Not specified'}<br />
              <strong>Email:</strong> {formData.email || 'Not specified'}<br />
              <strong>Phone:</strong> {formData.phone || 'Not specified'}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-md">
        <p className="text-sm text-blue-800">
          By submitting this quote request, you agree to receive a response within 24 hours. 
          Our team will review your requirements and provide a detailed quote tailored to your needs.
        </p>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderStep5();
      default: return null;
    }
  };

  const stepTitles = [
    'Select Services & Equipment',
    'Project Details',
    'Timeline',
    'Budget & Contact',
    'Review & Submit'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Request a Quote</h1>
            <p className="text-gray-600">Tell us about your project and we&apos;ll provide a detailed quote</p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {stepTitles.map((title, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep > index + 1 
                      ? 'bg-green-500 text-white' 
                      : currentStep === index + 1 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > index + 1 ? '✓' : index + 1}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    currentStep === index + 1 ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {title}
                  </span>
                  {index < stepTitles.length - 1 && (
                    <div className={`w-16 h-1 mx-4 ${
                      currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            {renderStepContent()}
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-md font-medium ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-500 text-white hover:bg-gray-600'
              }`}
            >
              Previous
            </button>

            <div className="flex space-x-4">
              {currentStep < 5 ? (
                <button
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600"
                >
                  Submit Quote Request
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestForm;

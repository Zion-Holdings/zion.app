import React, { useState } from 'react';

interface InputFieldsProps {
  onSubmit: (data: any) => void; // Define a more specific type for data
}

const InputFields: React.FC<InputFieldsProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    companyMission: '',
    currentFundingStage: '',
    visionGoals: '',
    roundType: 'Seed', // Default value
    targetRaiseAmount: '',
    logos: null as File | null,
    photos: null as File | null,
  });

  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.companyMission) newErrors.companyMission = 'Company mission is required.';
    if (!formData.currentFundingStage) newErrors.currentFundingStage = 'Current funding stage is required.';
    if (!formData.visionGoals) newErrors.visionGoals = 'Vision/goals are required.';
    if (!formData.targetRaiseAmount) {
      newErrors.targetRaiseAmount = 'Target raise amount is required.';
    } else if (isNaN(Number(formData.targetRaiseAmount))) {
      newErrors.targetRaiseAmount = 'Target raise amount must be a number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="companyMission" className="block text-sm font-medium text-gray-700">
          Company Mission
        </label>
        <textarea
          id="companyMission"
          name="companyMission"
          value={formData.companyMission}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.companyMission && <p className="text-xs text-red-600 mt-1">{errors.companyMission}</p>}
      </div>

      <div>
        <label htmlFor="currentFundingStage" className="block text-sm font-medium text-gray-700">
          Current Funding Stage
        </label>
        <input
          type="text"
          id="currentFundingStage"
          name="currentFundingStage"
          value={formData.currentFundingStage}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.currentFundingStage && <p className="text-xs text-red-600 mt-1">{errors.currentFundingStage}</p>}
      </div>

      <div>
        <label htmlFor="visionGoals" className="block text-sm font-medium text-gray-700">
          Vision/Goals
        </label>
        <textarea
          id="visionGoals"
          name="visionGoals"
          value={formData.visionGoals}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.visionGoals && <p className="text-xs text-red-600 mt-1">{errors.visionGoals}</p>}
      </div>

      <div>
        <label htmlFor="roundType" className="block text-sm font-medium text-gray-700">
          Round Type
        </label>
        <select
          id="roundType"
          name="roundType"
          value={formData.roundType}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option>Seed</option>
          <option>Series A</option>
          <option>Token Sale</option>
          {/* Add other round types as needed */}
        </select>
      </div>

      <div>
        <label htmlFor="targetRaiseAmount" className="block text-sm font-medium text-gray-700">
          Target Raise Amount ($)
        </label>
        <input
          type="text" // Using text to allow for potential formatting, validation handles number check
          id="targetRaiseAmount"
          name="targetRaiseAmount"
          value={formData.targetRaiseAmount}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.targetRaiseAmount && <p className="text-xs text-red-600 mt-1">{errors.targetRaiseAmount}</p>}
      </div>

      <div>
        <label htmlFor="logos" className="block text-sm font-medium text-gray-700">
          Company Logo (Optional)
        </label>
        <input
          type="file"
          id="logos"
          name="logos"
          onChange={handleFileChange}
          accept="image/*"
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
        />
        {/* Basic preview for logo */}
        {formData.logos && <img src={URL.createObjectURL(formData.logos)} alt="Logo preview" className="mt-2 h-16 w-auto" />}
      </div>

      <div>
        <label htmlFor="photos" className="block text-sm font-medium text-gray-700">
          Additional Photos (Optional)
        </label>
        <input
          type="file"
          id="photos"
          name="photos"
          onChange={handleFileChange}
          accept="image/*"
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
        />
         {/* Basic preview for photo */}
        {formData.photos && <img src={URL.createObjectURL(formData.photos)} alt="Photo preview" className="mt-2 h-16 w-auto" />}
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next: Data Sync
        </button>
      </div>
    </form>
  );
};

export default InputFields;

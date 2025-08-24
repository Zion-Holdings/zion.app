import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FileData {
  name: string;
  type: string;
  size: number;
  base64: string; // data URL
}

interface OnboardingFormData {
  fullName: string;
  professionalTitle: string;
  profilePicture?: FileData | null;

  bio: string;
  projects: string;
  yearsOfExperience: string; // keep as string for input, convert on submit

  skills: string;
  tools: string;

  availability: 'Full-time' | 'Part-time' | 'Project-based' | '';
  timezone: string;
  hourlyRate?: string;
  portfolioLinks?: string;
  cvFile?: FileData | null;
}

const steps = [
  'Basic Info',
  'Experience',
  'Skills & Tech',
  'Availability',
] as const;

type StepKey = typeof steps[number];

const containerVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

function useInitialFormState(): OnboardingFormData {
  return {
    fullName: '',
    professionalTitle: '',
    profilePicture: null,
    bio: '',
    projects: '',
    yearsOfExperience: '',
    skills: '',
    tools: '',
    availability: '',
    timezone: '',
    hourlyRate: '',
    portfolioLinks: '',
    cvFile: null,
  };
}

async function fileToBase64(file: File): Promise<FileData> {
  const toBase64 = (fileInner: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileInner);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  const base64 = await toBase64(file);
  return {
    name: file.name,
    type: file.type,
    size: file.size,
    base64,
  };
}

export default function TalentOnboardingPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<OnboardingFormData>(useInitialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const currentStep: StepKey = steps[stepIndex];
  const progressPercent = useMemo(() => ((stepIndex + 1) / steps.length) * 100, [stepIndex]);

  function nextStep() {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
  }
  function prevStep() {
    if (stepIndex > 0) setStepIndex(stepIndex - 1);
  }

  function update<K extends keyof OnboardingFormData>(key: K, value: OnboardingFormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  function requiredMissingForStep(): string | null {
    if (currentStep === 'Basic Info') {
      if (!formData.fullName.trim()) return 'Full Name is required.';
      if (!formData.professionalTitle.trim()) return 'Professional Title is required.';
    }
    if (currentStep === 'Experience') {
      if (!formData.bio.trim()) return 'Short Bio is required.';
      if (!formData.yearsOfExperience.trim()) return 'Years of Experience is required.';
    }
    if (currentStep === 'Skills & Tech') {
      if (!formData.skills.trim()) return 'Please list at least one skill.';
    }
    if (currentStep === 'Availability') {
      if (!formData.availability) return 'Please select your current availability.';
      if (!formData.timezone.trim()) return 'Preferred Timezone is required.';
    }
    return null;
  }

  async function handleSubmit() {
    const missing = requiredMissingForStep();
    if (missing) {
      setErrorMessage(missing);
      return;
    }
    setErrorMessage(null);
    setSubmitting(true);
    try {
      const response = await fetch('/api/talent/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData }),
      });
      if (!response.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch (err) {
      setErrorMessage('Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-high-contrast-primary text-high-contrast flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-glass/60 rounded-2xl p-8 shadow-xl border border-[var(--border-primary)] animate-fade-in">
          <div className="text-center space-y-3">
            <h1 className="text-2xl md:text-3xl font-semibold text-high-contrast">Thanks! We’re using AI to optimize your profile.</h1>
            <p className="text-high-contrast-secondary">You’ll appear in search results shortly.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-high-contrast-primary text-high-contrast flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-3xl">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Zion AI Marketplace: Talent Onboarding</h1>
          <p className="text-high-contrast-muted mt-1">Create your public profile in a few quick steps.</p>
        </div>

        <div className="w-full h-2 bg-[var(--border-secondary)] rounded-full overflow-hidden mb-6">
          <div className="h-full bg-[var(--text-accent)] transition-all duration-500" style={{ width: `${progressPercent}%` }} />
        </div>

        {errorMessage && (
          <div className="mb-4 rounded-lg border border-[var(--border-error)] text-high-contrast-error px-4 py-3 bg-[rgba(239,68,68,0.1)]">
            {errorMessage}
          </div>
        )}

        <div className="bg-glass/60 rounded-2xl p-6 md:p-8 shadow-xl border border-[var(--border-primary)]">
          <AnimatePresence mode="wait">
            {currentStep === 'Basic Info' && (
              <motion.div key="step-basic" variants={containerVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <FloatingInput
                    id="fullName"
                    label="Full Name"
                    value={formData.fullName}
                    onChange={(v) => update('fullName', v)}
                    required
                  />
                  <FloatingInput
                    id="professionalTitle"
                    label="Professional Title"
                    placeholder="e.g., AI Developer, Network Engineer"
                    value={formData.professionalTitle}
                    onChange={(v) => update('professionalTitle', v)}
                    required
                  />
                </div>
                <div className="mt-6">
                  <FileUpload
                    id="profilePicture"
                    label="Profile Picture (optional)"
                    accept="image/*"
                    fileData={formData.profilePicture}
                    onFileChange={(f) => update('profilePicture', f)}
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 'Experience' && (
              <motion.div key="step-experience" variants={containerVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <FloatingTextarea
                    id="bio"
                    label="Short Bio or Work History"
                    value={formData.bio}
                    onChange={(v) => update('bio', v)}
                    required
                  />
                  <FloatingTextarea
                    id="projects"
                    label="Key Projects or Roles (optional)"
                    placeholder="Use bullets or short lines"
                    value={formData.projects}
                    onChange={(v) => update('projects', v)}
                  />
                  <FloatingInput
                    id="yearsOfExperience"
                    label="Years of Experience"
                    type="number"
                    min={0}
                    value={formData.yearsOfExperience}
                    onChange={(v) => update('yearsOfExperience', v)}
                    required
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 'Skills & Tech' && (
              <motion.div key="step-skills" variants={containerVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <FloatingInput
                    id="skills"
                    label="Skills (comma-separated)"
                    placeholder="e.g., Python, LLMs, Kubernetes"
                    value={formData.skills}
                    onChange={(v) => update('skills', v)}
                    required
                  />
                  <FloatingInput
                    id="tools"
                    label="Tools/Platforms (optional, comma-separated)"
                    placeholder="e.g., AWS, GCP, Docker, Snowflake"
                    value={formData.tools}
                    onChange={(v) => update('tools', v)}
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 'Availability' && (
              <motion.div key="step-availability" variants={containerVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="availability" className="block text-sm mb-2 text-high-contrast-secondary">Current Availability</label>
                    <select
                      id="availability"
                      className="w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
                      value={formData.availability}
                      onChange={(e) => update('availability', e.target.value as OnboardingFormData['availability'])}
                    >
                      <option value="">Select...</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Project-based">Project-based</option>
                    </select>
                  </div>

                  <FloatingInput
                    id="timezone"
                    label="Preferred Timezone"
                    placeholder="e.g., UTC-5, PST, CET"
                    value={formData.timezone}
                    onChange={(v) => update('timezone', v)}
                    required
                  />

                  <FloatingInput
                    id="hourlyRate"
                    label="Hourly Rate (optional)"
                    type="number"
                    min={0}
                    value={formData.hourlyRate || ''}
                    onChange={(v) => update('hourlyRate', v)}
                  />

                  <FloatingInput
                    id="portfolioLinks"
                    label="Portfolio Links (optional)"
                    placeholder="e.g., https://github.com/you, https://your-site.com"
                    value={formData.portfolioLinks || ''}
                    onChange={(v) => update('portfolioLinks', v)}
                  />

                  <FileUpload
                    id="cvFile"
                    label="Upload CV (optional)"
                    accept=".pdf,.doc,.docx,.txt,.rtf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    fileData={formData.cvFile}
                    onFileChange={(f) => update('cvFile', f)}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-[var(--border-secondary)] text-high-contrast-secondary hover:bg-high-contrast-tertiary/60 transition-colors"
              onClick={prevStep}
              disabled={stepIndex === 0}
            >
              Back
            </button>

            {stepIndex < steps.length - 1 ? (
              <button
                type="button"
                className="px-6 py-2 rounded-lg bg-[var(--text-accent)] text-black font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                onClick={() => {
                  const missing = requiredMissingForStep();
                  if (missing) {
                    setErrorMessage(missing);
                    return;
                  }
                  setErrorMessage(null);
                  nextStep();
                }}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="px-6 py-2 rounded-lg bg-[var(--text-accent)] text-black font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? 'Submitting…' : 'Submit'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingInput(props: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  min?: number;
  required?: boolean;
}) {
  const { id, label, value, onChange, placeholder, type = 'text', min, required } = props;
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 pt-5 pb-2 outline-none focus:ring-2 focus:ring-[var(--focus-ring)] placeholder:text-transparent"
        aria-required={required}
      />
      <label htmlFor={id} className="absolute left-4 top-2 text-xs text-high-contrast-muted">
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea(props: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  const { id, label, value, onChange, placeholder, required } = props;
  return (
    <div className="relative">
      <textarea
        id={id}
        name={id}
        rows={6}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 pt-6 pb-3 outline-none focus:ring-2 focus:ring-[var(--focus-ring)] placeholder:text-transparent"
        aria-required={required}
      />
      <label htmlFor={id} className="absolute left-4 top-2 text-xs text-high-contrast-muted">
        {label}
      </label>
    </div>
  );
}

function FileUpload(props: {
  id: string;
  label: string;
  accept?: string;
  fileData: FileData | null | undefined;
  onFileChange: (file: FileData | null) => void;
}) {
  const { id, label, accept, fileData, onFileChange } = props;
  const [localError, setLocalError] = useState<string | null>(null);

  return (
    <div>
      <label htmlFor={id} className="block text-sm mb-2 text-high-contrast-secondary">{label}</label>
      <input
        id={id}
        type="file"
        accept={accept}
        className="block w-full text-sm text-high-contrast-secondary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[var(--text-accent)] file:text-black hover:file:bg-[var(--text-accent)]/90"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) {
            onFileChange(null);
            return;
          }
          try {
            const base64 = await fileToBase64(file);
            onFileChange(base64);
            setLocalError(null);
          } catch (err) {
            setLocalError('Failed to read file.');
          }
        }}
      />
      {fileData && (
        <p className="mt-2 text-xs text-high-contrast-muted">Selected: {fileData.name} ({Math.round((fileData.size / 1024) * 10) / 10} KB)</p>
      )}
      {localError && (
        <p className="mt-1 text-xs text-high-contrast-error">{localError}</p>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, X, Upload, Save } from 'lucide-react';

export default function CreateProfile() {
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    // Basic Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    timezone: '',
    
    // Professional Details
    headline: '',
    bio: '',
    yearsOfExperience: '',
    availability: 'full-time',
    hourlyRate: '',
    currency: 'USD',
    
    // Skills & Expertise
    skills: [],
    newSkill: '',
    
    // Portfolio & Work
    portfolio: [],
    certifications: [],
    
    // Social & Contact
    linkedin: '',
    github: '',
    website: '',
    
    // Preferences
    remoteWork: true,
    travelWillingness: false,
    projectTypes: [],
    
    // Terms
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: any) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const addSkill = () => {
    if (profileData.newSkill.trim() && !profileData.skills.includes(profileData.newSkill.trim())) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, prev.newSkill.trim()],
        newSkill: ''
      }));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      if (!profileData.firstName) newErrors.firstName = 'First name is required';
      if (!profileData.lastName) newErrors.lastName = 'Last name is required';
      if (!profileData.email) newErrors.email = 'Email is required';
      if (!profileData.location) newErrors.location = 'Location is required';
    }
    
    if (step === 2) {
      if (!profileData.headline) newErrors.headline = 'Professional headline is required';
      if (!profileData.bio) newErrors.bio = 'Bio is required';
      if (!profileData.hourlyRate) newErrors.hourlyRate = 'Hourly rate is required';
    }
    
    if (step === 3) {
      if (profileData.skills.length === 0) newErrors.skills = 'At least one skill is required';
    }
    
    if (step === 4) {
      if (!profileData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (validateStep(4)) {
      try {
        // In real app, send to backend
        console.log('Profile data:', profileData);
        // Redirect to profile page or dashboard
        alert('Profile created successfully!');
      } catch (error) {
        console.error('Error creating profile:', error);
      }
    }
  };

  const steps = [
    { number: 1, title: 'Basic Information', description: 'Personal details and contact info' },
    { number: 2, title: 'Professional Details', description: 'Experience and expertise' },
    { number: 3, title: 'Skills & Portfolio', description: 'Technical skills and work samples' },
    { number: 4, title: 'Review & Submit', description: 'Final review and submission' }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="Create Profile - Zion Tech Group" 
        description="Create your professional profile on Zion Tech Group and start connecting with clients worldwide."
        keywords="create profile, talent profile, professional profile, Zion Tech Group"
        canonical="https://ziontechgroup.com/create-profile"
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Profile</h1>
            <p className="text-zion-slate-light">Showcase your skills and connect with amazing opportunities</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'border-zion-cyan bg-zion-cyan text-zion-blue-dark' 
                    : 'border-zion-blue-light text-zion-slate-light'
                }`}>
                  {currentStep > step.number ? '✓' : step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-2 ${
                    currentStep > step.number ? 'bg-zion-cyan' : 'bg-zion-blue-light'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <Card className="bg-zion-blue border-zion-blue-light">
            <CardHeader>
              <CardTitle className="text-white">{steps[currentStep - 1].title}</CardTitle>
              <CardDescription className="text-zion-slate-light">
                {steps[currentStep - 1].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name *</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="location" className="text-white">Location *</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="City, Country"
                    />
                    {errors.location && <p className="text-red-400 text-sm mt-1">{errors.location}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="timezone" className="text-white">Timezone</Label>
                    <Select value={profileData.timezone} onValueChange={(value) => handleInputChange('timezone', value)}>
                      <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                        <SelectItem value="UTC-8">UTC-8 (PST)</SelectItem>
                        <SelectItem value="UTC-5">UTC-5 (EST)</SelectItem>
                        <SelectItem value="UTC+0">UTC+0 (GMT)</SelectItem>
                        <SelectItem value="UTC+1">UTC+1 (CET)</SelectItem>
                        <SelectItem value="UTC+5:30">UTC+5:30 (IST)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 2: Professional Details */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="headline" className="text-white">Professional Headline *</Label>
                    <Input
                      id="headline"
                      value={profileData.headline}
                      onChange={(e) => handleInputChange('headline', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="e.g., Senior AI Developer, Full-Stack Engineer"
                    />
                    {errors.headline && <p className="text-red-400 text-sm mt-1">{errors.headline}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="bio" className="text-white">Professional Bio *</Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      className="bg-zion-blue-dark border-zion-blue-light text-white"
                      placeholder="Tell us about your experience, expertise, and what makes you unique..."
                      rows={4}
                    />
                    {errors.bio && <p className="text-red-400 text-sm mt-1">{errors.bio}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="yearsOfExperience" className="text-white">Years of Experience</Label>
                      <Select value={profileData.yearsOfExperience} onValueChange={(value) => handleInputChange('yearsOfExperience', value)}>
                        <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="availability" className="text-white">Availability</Label>
                      <Select value={profileData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                        <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="hourlyRate" className="text-white">Hourly Rate *</Label>
                      <div className="flex">
                        <Input
                          id="hourlyRate"
                          type="number"
                          value={profileData.hourlyRate}
                          onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                          className="bg-zion-blue-dark border-zion-blue-light text-white rounded-r-none"
                          placeholder="0"
                        />
                        <Select value={profileData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                          <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white rounded-l-none border-l-0">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="EUR">EUR</SelectItem>
                            <SelectItem value="GBP">GBP</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {errors.hourlyRate && <p className="text-red-400 text-sm mt-1">{errors.hourlyRate}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Skills & Portfolio */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">Skills & Technologies *</Label>
                    <div className="flex gap-2 mb-2">
                      <Input
                        value={profileData.newSkill}
                        onChange={(e) => handleInputChange('newSkill', e.target.value)}
                        className="bg-zion-blue-dark border-zion-blue-light text-white"
                        placeholder="Add a skill (e.g., React, Python, AI/ML)"
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <Button onClick={addSkill} className="bg-zion-purple hover:bg-zion-purple-light">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    {errors.skills && <p className="text-red-400 text-sm mb-2">{errors.skills}</p>}
                    <div className="flex flex-wrap gap-2">
                      {profileData.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                          {skill}
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 hover:text-red-400"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white">Work Preferences</Label>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remoteWork"
                          checked={profileData.remoteWork}
                          onCheckedChange={(checked) => handleInputChange('remoteWork', checked)}
                        />
                        <Label htmlFor="remoteWork" className="text-zion-slate-light">Open to remote work</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="travelWillingness"
                          checked={profileData.travelWillingness}
                          onCheckedChange={(checked) => handleInputChange('travelWillingness', checked)}
                        />
                        <Label htmlFor="travelWillingness" className="text-zion-slate-light">Willing to travel for projects</Label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-3">Profile Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-zion-slate-light">Name:</p>
                        <p className="text-white">{profileData.firstName} {profileData.lastName}</p>
                      </div>
                      <div>
                        <p className="text-zion-slate-light">Location:</p>
                        <p className="text-white">{profileData.location}</p>
                      </div>
                      <div>
                        <p className="text-zion-slate-light">Headline:</p>
                        <p className="text-white">{profileData.headline}</p>
                      </div>
                      <div>
                        <p className="text-zion-slate-light">Hourly Rate:</p>
                        <p className="text-white">{profileData.hourlyRate} {profileData.currency}</p>
                      </div>
                      <div>
                        <p className="text-zion-slate-light">Skills:</p>
                        <p className="text-white">{profileData.skills.join(', ')}</p>
                      </div>
                      <div>
                        <p className="text-zion-slate-light">Availability:</p>
                        <p className="text-white">{profileData.availability}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={profileData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                    />
                    <Label htmlFor="agreeToTerms" className="text-zion-slate-light">
                      I agree to the <a href="/terms" className="text-zion-cyan hover:underline">Terms of Service</a> and{' '}
                      <a href="/privacy" className="text-zion-cyan hover:underline">Privacy Policy</a>
                    </Label>
                  </div>
                  {errors.agreeToTerms && <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              onClick={prevStep}
              disabled={currentStep === 1}
              variant="outline"
              className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            >
              Previous
            </Button>
            
            <div className="flex gap-3">
              {currentStep < 4 ? (
                <Button onClick={nextStep} className="bg-zion-purple hover:bg-zion-purple-light">
                  Next Step
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-zion-purple hover:bg-zion-purple-light">
                  <Save className="w-4 h-4 mr-2" />
                  Create Profile
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
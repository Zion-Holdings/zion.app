import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Mail, Calendar, DollarSign, MessageSquare } from 'lucide-react';

interface HireNowCTAProps {
  talentName: string;
  hourlyRate?: number;
  onHire?: (data: HireData) => void;
}

interface HireData {
  projectDescription: string;
  budget: string;
  startDate: string;
  message: string;
}

export function HireNowCTA({ talentName, hourlyRate, onHire }: HireNowCTAProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<HireData>({
    projectDescription: '',
    budget: '',
    startDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onHire) {
      onHire(formData);
    }
    // Reset form and close
    setFormData({
      projectDescription: '',
      budget: '',
      startDate: '',
      message: ''
    });
    setIsFormOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: HireData) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card className="bg-zion-blue-light border-zion-blue-lighter">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-zion-cyan" />
          Hire {talentName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!isFormOpen ? (
          <div className="space-y-4">
            {hourlyRate && (
              <div className="flex items-center gap-2 text-zion-slate-light">
                <DollarSign className="h-4 w-4" />
                <span>Starting at ${hourlyRate}/hour</span>
              </div>
            )}
            <p className="text-zion-slate-light text-sm">
              Ready to start your project? Send a message to discuss details and get started.
            </p>
            <Button
              onClick={() => setIsFormOpen(true)}
              className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
            >
              Start Project Discussion
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-white mb-2">
                Project Description
              </label>
              <Textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Describe your project requirements..."
                className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                  Budget Range
                </label>
                <Input
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., $1000-5000"
                  className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                  required
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-white mb-2">
                  Start Date
                </label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="bg-zion-blue border-zion-blue-light text-white focus:border-zion-cyan"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                Additional Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any additional details or questions..."
                className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                rows={3}
              />
            </div>

            <div className="flex gap-3">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              >
                Send Message
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsFormOpen(false)}
                className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
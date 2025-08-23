export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone?: string;
  position: string;
  status: 'applied' | 'screening' | 'interview' | 'offer' | 'hired' | 'rejected';
  resume: string;
  coverLetter?: string;
  skills: string[];
  experience: number;
  education: string[];
  location: string;
  salaryExpectation?: number;
  appliedDate: Date;
  lastContact: Date;
  nextAction: string;
  notes: string[];
  score: number;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  status: 'draft' | 'published' | 'closed' | 'archived';
  postedDate: Date;
  closingDate?: Date;
  applications: number;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  manager?: string;
  hireDate: Date;
  status: 'active' | 'inactive' | 'terminated';
  performance: PerformanceReview[];
  training: TrainingRecord[];
  documents: Document[];
}

export interface PerformanceReview {
  id: string;
  employeeId: string;
  reviewerId: string;
  reviewDate: Date;
  period: string;
  goals: {
    description: string;
    achieved: boolean;
    notes: string;
  }[];
  competencies: {
    skill: string;
    rating: 1 | 2 | 3 | 4 | 5;
    comments: string;
  }[];
  overallRating: 1 | 2 | 3 | 4 | 5;
  strengths: string[];
  areasForImprovement: string[];
  nextSteps: string[];
  status: 'draft' | 'submitted' | 'approved' | 'completed';
}

export interface TrainingRecord {
  id: string;
  employeeId: string;
  course: string;
  provider: string;
  startDate: Date;
  endDate?: Date;
  status: 'enrolled' | 'in-progress' | 'completed' | 'failed';
  score?: number;
  certificate?: string;
  cost: number;
}

export interface Document {
  id: string;
  name: string;
  type: 'contract' | 'policy' | 'form' | 'certificate' | 'other';
  employeeId: string;
  uploadDate: Date;
  expiryDate?: Date;
  status: 'active' | 'expired' | 'archived';
  url: string;
}

export interface RecruitmentMetrics {
  timeToHire: number;
  costPerHire: number;
  qualityOfHire: number;
  sourceEffectiveness: Record<string, number>;
  diversityMetrics: Record<string, number>;
}

class AIHRService {
  private candidates: Candidate[] = [
    {
      id: 'candidate-1',
      name: 'Alex Johnson',
      email: 'alex.johnson@email.com',
      phone: '+1-555-0123',
      position: 'Senior Software Engineer',
      status: 'interview',
      resume: 'alex_johnson_resume.pdf',
      coverLetter: 'alex_johnson_cover.pdf',
      skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS'],
      experience: 5,
      education: ['BS Computer Science, Stanford University'],
      location: 'San Francisco, CA',
      salaryExpectation: 150000,
      appliedDate: new Date('2025-01-10'),
      lastContact: new Date('2025-01-15'),
      nextAction: 'Schedule final interview',
      notes: ['Strong technical skills', 'Good cultural fit', 'References checked'],
      score: 88
    },
    {
      id: 'candidate-2',
      name: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      phone: '+1-555-0456',
      position: 'Product Manager',
      status: 'screening',
      resume: 'maria_garcia_resume.pdf',
      skills: ['Product Strategy', 'User Research', 'Agile', 'Data Analysis'],
      experience: 7,
      education: ['MBA, Harvard Business School', 'BS Engineering, MIT'],
      location: 'New York, NY',
      salaryExpectation: 180000,
      appliedDate: new Date('2025-01-12'),
      lastContact: new Date('2025-01-14'),
      nextAction: 'Conduct phone screening',
      notes: ['Impressive background', 'Leadership experience'],
      score: 92
    }
  ];

  private jobPostings: JobPosting[] = [
    {
      id: 'job-1',
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'full-time',
      description: 'We are looking for a Senior Software Engineer to join our growing team...',
      requirements: [
        '5+ years of software development experience',
        'Strong knowledge of JavaScript, React, and Node.js',
        'Experience with cloud platforms (AWS, GCP)',
        'Excellent problem-solving skills'
      ],
      responsibilities: [
        'Design and implement scalable software solutions',
        'Collaborate with cross-functional teams',
        'Mentor junior developers',
        'Participate in code reviews'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      salary: {
        min: 120000,
        max: 180000,
        currency: 'USD'
      },
      status: 'published',
      postedDate: new Date('2025-01-01'),
      closingDate: new Date('2025-02-01'),
      applications: 45
    }
  ];

  private employees: Employee[] = [
    {
      id: 'emp-1',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@ziontechgroup.com',
      position: 'HR Director',
      department: 'Human Resources',
      hireDate: new Date('2023-01-15'),
      status: 'active',
      performance: [],
      training: [],
      documents: []
    }
  ];

  async getCandidates(status?: string, position?: string): Promise<Candidate[]> {
    try {
      let filtered = this.candidates;
      
      if (status) {
        filtered = filtered.filter(c => c.status === status);
      }
      
      if (position) {
        filtered = filtered.filter(c => c.position.toLowerCase().includes(position.toLowerCase()));
      }
      
      return filtered.sort((a, b) => b.score - a.score);
    } catch (error) {
      console.error('Failed to fetch candidates:', error);
      throw new Error('Failed to fetch candidates');
    }
  }

  async getCandidateById(id: string): Promise<Candidate | null> {
    try {
      return this.candidates.find(c => c.id === id) || null;
    } catch (error) {
      console.error('Failed to fetch candidate:', error);
      throw new Error('Failed to fetch candidate');
    }
  }

  async updateCandidateStatus(id: string, status: Candidate['status']): Promise<Candidate> {
    try {
      const candidate = this.candidates.find(c => c.id === id);
      if (!candidate) {
        throw new Error('Candidate not found');
      }
      
      candidate.status = status;
      candidate.lastContact = new Date();
      
      // Update next action based on status
      candidate.nextAction = this.getNextActionForStatus(status);
      
      return candidate;
    } catch (error) {
      console.error('Failed to update candidate status:', error);
      throw new Error('Failed to update candidate status');
    }
  }

  async addCandidateNote(id: string, note: string): Promise<void> {
    try {
      const candidate = this.candidates.find(c => c.id === id);
      if (!candidate) {
        throw new Error('Candidate not found');
      }
      
      candidate.notes.push(note);
    } catch (error) {
      console.error('Failed to add candidate note:', error);
      throw new Error('Failed to add candidate note');
    }
  }

  async getJobPostings(status?: string): Promise<JobPosting[]> {
    try {
      let filtered = this.jobPostings;
      
      if (status) {
        filtered = filtered.filter(j => j.status === status);
      }
      
      return filtered.sort((a, b) => b.postedDate.getTime() - a.postedDate.getTime());
    } catch (error) {
      console.error('Failed to fetch job postings:', error);
      throw new Error('Failed to fetch job postings');
    }
  }

  async createJobPosting(posting: Omit<JobPosting, 'id' | 'postedDate' | 'applications'>): Promise<JobPosting> {
    try {
      const newPosting: JobPosting = {
        ...posting,
        id: `job-${Date.now()}`,
        postedDate: new Date(),
        applications: 0
      };
      
      this.jobPostings.push(newPosting);
      return newPosting;
    } catch (error) {
      console.error('Failed to create job posting:', error);
      throw new Error('Failed to create job posting');
    }
  }

  async getEmployees(department?: string): Promise<Employee[]> {
    try {
      let filtered = this.employees;
      
      if (department) {
        filtered = filtered.filter(e => e.department === department);
      }
      
      return filtered;
    } catch (error) {
      console.error('Failed to fetch employees:', error);
      throw new Error('Failed to fetch employees');
    }
  }

  async createPerformanceReview(review: Omit<PerformanceReview, 'id' | 'reviewDate'>): Promise<PerformanceReview> {
    try {
      const newReview: PerformanceReview = {
        ...review,
        id: `review-${Date.now()}`,
        reviewDate: new Date()
      };
      
      // Find employee and add review
      const employee = this.employees.find(e => e.id === review.employeeId);
      if (employee) {
        employee.performance.push(newReview);
      }
      
      return newReview;
    } catch (error) {
      console.error('Failed to create performance review:', error);
      throw new Error('Failed to create performance review');
    }
  }

  async getPerformanceReviews(employeeId: string): Promise<PerformanceReview[]> {
    try {
      const employee = this.employees.find(e => e.id === employeeId);
      if (!employee) {
        throw new Error('Employee not found');
      }
      
      return employee.performance.sort((a, b) => b.reviewDate.getTime() - a.reviewDate.getTime());
    } catch (error) {
      console.error('Failed to fetch performance reviews:', error);
      throw new Error('Failed to fetch performance reviews');
    }
  }

  async addTrainingRecord(record: Omit<TrainingRecord, 'id'>): Promise<TrainingRecord> {
    try {
      const newRecord: TrainingRecord = {
        ...record,
        id: `training-${Date.now()}`
      };
      
      // Find employee and add training record
      const employee = this.employees.find(e => e.id === record.employeeId);
      if (employee) {
        employee.training.push(newRecord);
      }
      
      return newRecord;
    } catch (error) {
      console.error('Failed to add training record:', error);
      throw new Error('Failed to add training record');
    }
  }

  async getTrainingRecords(employeeId: string): Promise<TrainingRecord[]> {
    try {
      const employee = this.employees.find(e => e.id === employeeId);
      if (!employee) {
        throw new Error('Employee not found');
      }
      
      return employee.training.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
    } catch (error) {
      console.error('Failed to fetch training records:', error);
      throw new Error('Failed to fetch training records');
    }
  }

  async uploadDocument(document: Omit<Document, 'id' | 'uploadDate'>): Promise<Document> {
    try {
      const newDocument: Document = {
        ...document,
        id: `doc-${Date.now()}`,
        uploadDate: new Date()
      };
      
      // Find employee and add document
      const employee = this.employees.find(e => e.id === document.employeeId);
      if (employee) {
        employee.documents.push(newDocument);
      }
      
      return newDocument;
    } catch (error) {
      console.error('Failed to upload document:', error);
      throw new Error('Failed to upload document');
    }
  }

  async getDocuments(employeeId: string): Promise<Document[]> {
    try {
      const employee = this.employees.find(e => e.id === employeeId);
      if (!employee) {
        throw new Error('Employee not found');
      }
      
      return employee.documents.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());
    } catch (error) {
      console.error('Failed to fetch documents:', error);
      throw new Error('Failed to fetch documents');
    }
  }

  async getRecruitmentMetrics(): Promise<RecruitmentMetrics> {
    try {
      // Calculate time to hire (average days from application to hire)
      const hiredCandidates = this.candidates.filter(c => c.status === 'hired');
      const timeToHire = hiredCandidates.length > 0 
        ? hiredCandidates.reduce((sum, c) => {
            const days = (c.lastContact.getTime() - c.appliedDate.getTime()) / (1000 * 60 * 60 * 24);
            return sum + days;
          }, 0) / hiredCandidates.length
        : 0;

      // Calculate cost per hire (mock data)
      const costPerHire = 5000;

      // Calculate quality of hire (based on performance scores)
      const qualityOfHire = 85; // Mock score

      // Source effectiveness
      const sourceEffectiveness: Record<string, number> = {
        'website': 0.4,
        'referral': 0.6,
        'job-board': 0.3,
        'social': 0.25
      };

      // Diversity metrics
      const diversityMetrics: Record<string, number> = {
        'gender': 0.45, // 45% female
        'ethnicity': 0.35, // 35% underrepresented minorities
        'age': 0.28 // 28% under 30
      };

      return {
        timeToHire: Math.round(timeToHire),
        costPerHire,
        qualityOfHire,
        sourceEffectiveness,
        diversityMetrics
      };
    } catch (error) {
      console.error('Failed to calculate recruitment metrics:', error);
      throw new Error('Failed to calculate recruitment metrics');
    }
  }

  async generateHiringReport(period: string): Promise<{
    period: string;
    totalApplications: number;
    interviews: number;
    offers: number;
    hires: number;
    topSources: string[];
    averageTimeToHire: number;
  }> {
    try {
      const startDate = this.getStartDateForPeriod(period);
      const periodCandidates = this.candidates.filter(c => c.appliedDate >= startDate);
      
      const totalApplications = periodCandidates.length;
      const interviews = periodCandidates.filter(c => c.status === 'interview').length;
      const offers = periodCandidates.filter(c => c.status === 'offer').length;
      const hires = periodCandidates.filter(c => c.status === 'hired').length;
      
      // Calculate top sources
      const sourceCounts: Record<string, number> = {};
      periodCandidates.forEach(c => {
        // Mock source data since we don't have it in our candidate model
        const source = 'website'; // Mock source
        sourceCounts[source] = (sourceCounts[source] || 0) + 1;
      });
      
      const topSources = Object.entries(sourceCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3)
        .map(([source]) => source);
      
      // Calculate average time to hire
      const hiredInPeriod = periodCandidates.filter(c => c.status === 'hired');
      const averageTimeToHire = hiredInPeriod.length > 0 
        ? hiredInPeriod.reduce((sum, c) => {
            const days = (c.lastContact.getTime() - c.appliedDate.getTime()) / (1000 * 60 * 60 * 24);
            return sum + days;
          }, 0) / hiredInPeriod.length
        : 0;
      
      return {
        period,
        totalApplications,
        interviews,
        offers,
        hires,
        topSources,
        averageTimeToHire: Math.round(averageTimeToHire)
      };
    } catch (error) {
      console.error('Failed to generate hiring report:', error);
      throw new Error('Failed to generate hiring report');
    }
  }

  private getNextActionForStatus(status: Candidate['status']): string {
    const actionMap: Record<Candidate['status'], string> = {
      'applied': 'Review resume and schedule screening',
      'screening': 'Conduct phone screening',
      'interview': 'Schedule technical interview',
      'offer': 'Prepare and send offer letter',
      'hired': 'Complete onboarding process',
      'rejected': 'Send rejection email'
    };
    
    return actionMap[status] || 'Review candidate';
  }

  private getStartDateForPeriod(period: string): Date {
    const now = new Date();
    
    switch (period.toLowerCase()) {
      case 'week':
        return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      case 'month':
        return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      case 'quarter':
        return new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
      case 'year':
        return new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
      default:
        return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000); // Default to month
    }
  }
}

export const aiHrService = new AIHRService();
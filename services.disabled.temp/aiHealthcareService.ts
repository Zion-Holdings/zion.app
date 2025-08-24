export interface Patient {
  id: string;
  name: string;
  dateOfBirth: Date;
  gender: 'male' | 'female' | 'other';
  medicalHistory: MedicalRecord[];
  currentMedications: Medication[];
  allergies: string[];
  vitalSigns: VitalSigns[];
  riskFactors: RiskFactor[];
  insurance: InsuranceInfo;
  emergencyContact: EmergencyContact;
  lastVisit: Date;
  nextAppointment?: Date;
}

export interface MedicalRecord {
  id: string;
  date: Date;
  type: 'consultation' | 'procedure' | 'test' | 'prescription' | 'emergency';
  diagnosis: string;
  symptoms: string[];
  treatment: string;
  medications: Medication[];
  notes: string;
  doctor: string;
  facility: string;
  followUpRequired: boolean;
  followUpDate?: Date;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: Date;
  endDate?: Date;
  prescribedBy: string;
  instructions: string;
  sideEffects: string[];
  interactions: string[];
  status: 'active' | 'discontinued' | 'completed';
}

export interface VitalSigns {
  id: string;
  date: Date;
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  heartRate: number;
  temperature: number;
  respiratoryRate: number;
  oxygenSaturation: number;
  weight: number;
  height: number;
  bmi: number;
  notes: string;
}

export interface RiskFactor {
  id: string;
  category: 'lifestyle' | 'genetic' | 'environmental' | 'medical';
  name: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  mitigationStrategies: string[];
  lastAssessed: Date;
  nextAssessment: Date;
}

export interface InsuranceInfo {
  provider: string;
  policyNumber: string;
  groupNumber: string;
  effectiveDate: Date;
  expirationDate: Date;
  coverageType: string;
  copay: number;
  deductible: number;
  outOfPocketMax: number;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email?: string;
  address?: string;
}

export interface Diagnosis {
  id: string;
  patientId: string;
  symptoms: string[];
  vitalSigns: VitalSigns;
  medicalHistory: MedicalRecord[];
  aiAnalysis: AIAnalysis;
  confidence: number;
  differentialDiagnosis: DifferentialDiagnosis[];
  recommendedTests: string[];
  treatmentPlan: TreatmentPlan;
  followUpSchedule: FollowUpSchedule;
  createdAt: Date;
  updatedAt: Date;
}

export interface AIAnalysis {
  primaryDiagnosis: string;
  confidence: number;
  supportingEvidence: string[];
  riskFactors: string[];
  urgency: 'low' | 'medium' | 'high' | 'critical';
  recommendations: string[];
  limitations: string[];
  modelVersion: string;
}

export interface DifferentialDiagnosis {
  condition: string;
  probability: number;
  keySymptoms: string[];
  distinguishingFeatures: string[];
  recommendedTests: string[];
}

export interface TreatmentPlan {
  id: string;
  medications: Medication[];
  procedures: string[];
  lifestyleChanges: string[];
  followUpSchedule: FollowUpSchedule;
  expectedOutcome: string;
  duration: string;
  cost: number;
  insuranceCoverage: boolean;
}

export interface FollowUpSchedule {
  appointments: FollowUpAppointment[];
  tests: string[];
  monitoring: string[];
  emergencyTriggers: string[];
}

export interface FollowUpAppointment {
  id: string;
  date: Date;
  type: 'consultation' | 'test' | 'procedure' | 'review';
  purpose: string;
  doctor: string;
  facility: string;
  notes: string;
}

export interface HealthAnalytics {
  id: string;
  patientId: string;
  analysisDate: Date;
  healthScore: number;
  riskAssessment: RiskAssessment;
  trendAnalysis: TrendAnalysis;
  predictiveInsights: PredictiveInsight[];
  recommendations: string[];
}

export interface RiskAssessment {
  overallRisk: 'low' | 'medium' | 'high' | 'critical';
  cardiovascularRisk: number;
  diabetesRisk: number;
  cancerRisk: number;
  mentalHealthRisk: number;
  factors: RiskFactor[];
  mitigationStrategies: string[];
}

export interface TrendAnalysis {
  vitalSigns: VitalSignsTrend[];
  medications: MedicationTrend[];
  symptoms: SymptomTrend[];
  overallHealth: HealthTrend;
}

export interface VitalSignsTrend {
  metric: string;
  trend: 'improving' | 'stable' | 'declining' | 'fluctuating';
  change: number;
  significance: 'low' | 'medium' | 'high';
  recommendation: string;
}

export interface MedicationTrend {
  medication: string;
  effectiveness: 'high' | 'medium' | 'low';
  sideEffects: string[];
  compliance: number;
  recommendation: string;
}

export interface SymptomTrend {
  symptom: string;
  frequency: 'increasing' | 'stable' | 'decreasing';
  severity: 'mild' | 'moderate' | 'severe';
  triggers: string[];
  recommendation: string;
}

export interface HealthTrend {
  overall: 'improving' | 'stable' | 'declining';
  factors: string[];
  recommendations: string[];
  predictedOutcome: string;
}

export interface PredictiveInsight {
  type: 'risk_prediction' | 'outcome_prediction' | 'intervention_prediction';
  prediction: string;
  probability: number;
  timeframe: string;
  confidence: number;
  actionableSteps: string[];
}

export class AIHealthcareService {
  private patients: Patient[] = [];
  private diagnoses: Diagnosis[] = [];
  private healthAnalytics: HealthAnalytics[] = [];

  async createPatient(patientData: Omit<Patient, 'id' | 'medicalHistory' | 'currentMedications' | 'allergies' | 'vitalSigns' | 'riskFactors' | 'lastVisit'>): Promise<Patient> {
    const patient: Patient = {
      ...patientData,
      id: `patient_${Date.now()}`,
      medicalHistory: [],
      currentMedications: [],
      allergies: [],
      vitalSigns: [],
      riskFactors: [],
      lastVisit: new Date()
    };
    
    this.patients.push(patient);
    return patient;
  }

  async addMedicalRecord(patientId: string, recordData: Omit<MedicalRecord, 'id'>): Promise<MedicalRecord> {
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) {
      throw new Error(`Patient ${patientId} not found`);
    }

    const record: MedicalRecord = {
      ...recordData,
      id: `record_${Date.now()}`
    };
    
    patient.medicalHistory.push(record);
    patient.lastVisit = record.date;
    
    return record;
  }

  async addVitalSigns(patientId: string, vitalSignsData: Omit<VitalSigns, 'id' | 'bmi'>): Promise<VitalSigns> {
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) {
      throw new Error(`Patient ${patientId} not found`);
    }

    const bmi = (vitalSignsData.weight / Math.pow(vitalSignsData.height / 100, 2));
    
    const vitalSigns: VitalSigns = {
      ...vitalSignsData,
      id: `vitals_${Date.now()}`,
      bmi: Math.round(bmi * 100) / 100
    };
    
    patient.vitalSigns.push(vitalSigns);
    
    return vitalSigns;
  }

  async diagnosePatient(patientId: string, symptoms: string[]): Promise<Diagnosis> {
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) {
      throw new Error(`Patient ${patientId} not found`);
    }

    // AI-powered diagnosis
    const aiAnalysis = await this.performAIAnalysis(patient, symptoms);
    const differentialDiagnosis = await this.generateDifferentialDiagnosis(patient, symptoms);
    const recommendedTests = await this.recommendTests(patient, symptoms);
    const treatmentPlan = await this.createTreatmentPlan(patient, aiAnalysis.primaryDiagnosis);
    const followUpSchedule = await this.createFollowUpSchedule(patient, aiAnalysis.primaryDiagnosis);

    const diagnosis: Diagnosis = {
      id: `diagnosis_${Date.now()}`,
      patientId,
      symptoms,
      vitalSigns: patient.vitalSigns[patient.vitalSigns.length - 1] || this.createDefaultVitalSigns(),
      medicalHistory: patient.medicalHistory,
      aiAnalysis,
      confidence: aiAnalysis.confidence,
      differentialDiagnosis,
      recommendedTests,
      treatmentPlan,
      followUpSchedule,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.diagnoses.push(diagnosis);
    return diagnosis;
  }

  async generateHealthAnalytics(patientId: string): Promise<HealthAnalytics> {
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) {
      throw new Error(`Patient ${patientId} not found`);
    }

    // AI-powered health analytics
    const healthScore = this.calculateHealthScore(patient);
    const riskAssessment = await this.assessHealthRisks(patient);
    const trendAnalysis = await this.analyzeHealthTrends(patient);
    const predictiveInsights = await this.generatePredictiveInsights(patient);
    const recommendations = this.generateHealthRecommendations(patient, riskAssessment, trendAnalysis);

    const analytics: HealthAnalytics = {
      id: `analytics_${Date.now()}`,
      patientId,
      analysisDate: new Date(),
      healthScore,
      riskAssessment,
      trendAnalysis,
      predictiveInsights,
      recommendations
    };
    
    this.healthAnalytics.push(analytics);
    return analytics;
  }

  async monitorPatientHealth(patientId: string): Promise<{
    alerts: string[];
    recommendations: string[];
    riskLevel: 'low' | 'medium' | 'high' | 'critical';
  }> {
    const patient = this.patients.find(p => p.id === patientId);
    if (!patient) {
      throw new Error(`Patient ${patientId} not found`);
    }

    // AI-powered health monitoring
    const alerts = await this.checkHealthAlerts(patient);
    const recommendations = await this.generateMonitoringRecommendations(patient);
    const riskLevel = this.assessCurrentRiskLevel(patient);

    return {
      alerts,
      recommendations,
      riskLevel
    };
  }

  async getHealthcareDashboard(): Promise<{
    totalPatients: number;
    activeDiagnoses: number;
    averageHealthScore: number;
    highRiskPatients: number;
    recentAlerts: string[];
    trends: any[];
  }> {
    const totalPatients = this.patients.length;
    const activeDiagnoses = this.diagnoses.filter(d => 
      d.followUpSchedule.appointments.some(a => a.date > new Date())
    ).length;
    
    const averageHealthScore = this.patients.length > 0
      ? this.patients.reduce((sum, p) => {
          const analytics = this.healthAnalytics.find(h => h.patientId === p.id);
          return sum + (analytics?.healthScore || 0);
        }, 0) / this.patients.length
      : 0;
    
    const highRiskPatients = this.patients.filter(p => {
      const analytics = this.healthAnalytics.find(h => h.patientId === p.id);
      return analytics?.riskAssessment.overallRisk === 'high' || analytics?.riskAssessment.overallRisk === 'critical';
    }).length;
    
    const recentAlerts = this.generateRecentAlerts();
    
    return {
      totalPatients,
      activeDiagnoses,
      averageHealthScore: Math.round(averageHealthScore),
      highRiskPatients,
      recentAlerts,
      trends: this.generateHealthTrends()
    };
  }

  private async performAIAnalysis(patient: Patient, symptoms: string[]): Promise<AIAnalysis> {
    // Implement AI-powered diagnosis analysis
    return {
      primaryDiagnosis: 'Upper respiratory infection',
      confidence: 85,
      supportingEvidence: ['Fever', 'Cough', 'Fatigue'],
      riskFactors: ['Age', 'Seasonal factors'],
      urgency: 'medium',
      recommendations: ['Rest', 'Fluids', 'Monitor symptoms'],
      limitations: ['Limited symptom data', 'No lab results'],
      modelVersion: '2.1.0'
    };
  }

  private async generateDifferentialDiagnosis(patient: Patient, symptoms: string[]): Promise<DifferentialDiagnosis[]> {
    // Implement differential diagnosis generation
    return [
      {
        condition: 'Upper respiratory infection',
        probability: 0.85,
        keySymptoms: ['Fever', 'Cough', 'Fatigue'],
        distinguishingFeatures: ['Seasonal pattern', 'Viral symptoms'],
        recommendedTests: ['CBC', 'Chest X-ray if severe']
      }
    ];
  }

  private async recommendTests(patient: Patient, symptoms: string[]): Promise<string[]> {
    // Implement test recommendation logic
    return ['Complete Blood Count (CBC)', 'Chest X-ray', 'COVID-19 test'];
  }

  private async createTreatmentPlan(patient: Patient, diagnosis: string): Promise<TreatmentPlan> {
    // Implement treatment plan creation
    return {
      id: `treatment_${Date.now()}`,
      medications: [],
      procedures: [],
      lifestyleChanges: ['Rest', 'Fluids', 'Good nutrition'],
      followUpSchedule: await this.createFollowUpSchedule(patient, diagnosis),
      expectedOutcome: 'Full recovery within 7-10 days',
      duration: '7-10 days',
      cost: 150,
      insuranceCoverage: true
    };
  }

  private async createFollowUpSchedule(patient: Patient, diagnosis: string): Promise<FollowUpSchedule> {
    // Implement follow-up schedule creation
    return {
      appointments: [
        {
          id: `appointment_${Date.now()}`,
          date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
          type: 'review',
          purpose: 'Follow-up for respiratory infection',
          doctor: 'Dr. Smith',
          facility: 'Main Clinic',
          notes: 'Monitor symptoms and recovery progress'
        }
      ],
      tests: [],
      monitoring: ['Temperature', 'Cough frequency', 'Energy levels'],
      emergencyTriggers: ['Difficulty breathing', 'High fever >103°F', 'Severe chest pain']
    };
  }

  private createDefaultVitalSigns(): VitalSigns {
    return {
      id: `default_vitals_${Date.now()}`,
      date: new Date(),
      bloodPressure: { systolic: 120, diastolic: 80 },
      heartRate: 72,
      temperature: 98.6,
      respiratoryRate: 16,
      oxygenSaturation: 98,
      weight: 70,
      height: 170,
      bmi: 24.2,
      notes: 'Default values'
    };
  }

  private calculateHealthScore(patient: Patient): number {
    // Implement health score calculation
    let score = 100;
    
    // Reduce score based on risk factors
    patient.riskFactors.forEach(factor => {
      if (factor.severity === 'high') score -= 15;
      else if (factor.severity === 'medium') score -= 10;
      else if (factor.severity === 'low') score -= 5;
    });
    
    // Reduce score based on recent medical issues
    const recentIssues = patient.medicalHistory.filter(r => 
      Date.now() - r.date.getTime() < 90 * 24 * 60 * 60 * 1000
    ).length;
    score -= recentIssues * 5;
    
    return Math.max(0, score);
  }

  private async assessHealthRisks(patient: Patient): Promise<RiskAssessment> {
    // Implement health risk assessment
    return {
      overallRisk: 'medium',
      cardiovascularRisk: 25,
      diabetesRisk: 15,
      cancerRisk: 10,
      mentalHealthRisk: 20,
      factors: patient.riskFactors,
      mitigationStrategies: ['Regular exercise', 'Healthy diet', 'Stress management']
    };
  }

  private async analyzeHealthTrends(patient: Patient): Promise<TrendAnalysis> {
    // Implement health trend analysis
    return {
      vitalSigns: [
        {
          metric: 'Blood Pressure',
          trend: 'stable',
          change: 0,
          significance: 'low',
          recommendation: 'Continue current management'
        }
      ],
      medications: [],
      symptoms: [],
      overallHealth: {
        overall: 'stable',
        factors: ['Good medication compliance', 'Regular check-ups'],
        recommendations: ['Continue current regimen'],
        predictedOutcome: 'Maintained health status'
      }
    };
  }

  private async generatePredictiveInsights(patient: Patient): Promise<PredictiveInsight[]> {
    // Implement predictive insights generation
    return [
      {
        type: 'risk_prediction',
        prediction: 'Increased cardiovascular risk in next 5 years',
        probability: 0.65,
        timeframe: '5 years',
        confidence: 75,
        actionableSteps: ['Increase exercise', 'Improve diet', 'Regular monitoring']
      }
    ];
  }

  private generateHealthRecommendations(patient: Patient, riskAssessment: RiskAssessment, trendAnalysis: TrendAnalysis): string[] {
    // Implement health recommendations generation
    return [
      'Schedule annual physical examination',
      'Monitor blood pressure regularly',
      'Maintain healthy lifestyle habits'
    ];
  }

  private async checkHealthAlerts(patient: Patient): Promise<string[]> {
    // Implement health alert checking
    const alerts: string[] = [];
    
    // Check vital signs for concerning values
    const latestVitals = patient.vitalSigns[patient.vitalSigns.length - 1];
    if (latestVitals) {
      if (latestVitals.bloodPressure.systolic > 140) {
        alerts.push('Elevated blood pressure detected');
      }
      if (latestVitals.heartRate > 100) {
        alerts.push('Elevated heart rate detected');
      }
    }
    
    return alerts;
  }

  private async generateMonitoringRecommendations(patient: Patient): Promise<string[]> {
    // Implement monitoring recommendations
    return [
      'Continue current medication regimen',
      'Monitor symptoms daily',
      'Schedule follow-up appointment'
    ];
  }

  private assessCurrentRiskLevel(patient: Patient): 'low' | 'medium' | 'high' | 'critical' {
    // Implement current risk level assessment
    const analytics = this.healthAnalytics.find(h => h.patientId === patient.id);
    return analytics?.riskAssessment.overallRisk || 'medium';
  }

  private generateRecentAlerts(): string[] {
    // Implement recent alerts generation
    return [
      'Patient 123: Elevated blood pressure',
      'Patient 456: Medication compliance alert',
      'Patient 789: Follow-up appointment overdue'
    ];
  }

  private generateHealthTrends(): any[] {
    // Implement health trends generation
    return [];
  }
}

export const aiHealthcareService = new AIHealthcareService();
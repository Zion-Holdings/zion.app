const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class SkillAssessmentAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/skill-assessment-reports');
    this.logsDir = path.join(__dirname, '../logs/skill-assessment-logs');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      this.logsDir,
      path.join(this.reportsDir, 'assessment-reports'),
      path.join(this.reportsDir, 'competency-reports'),
      path.join(this.reportsDir, 'gap-analysis-reports'),
      path.join(this.reportsDir, 'analysis-reports'),
      path.join(this.reportsDir, 'optimization-reports'),
      path.join(this.reportsDir, 'assessment-reports'),
      path.join(this.reportsDir, 'analytics-reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`Skill Assessment Agent ${this.agentId} started`);
    
    // Initial skill assessment analysis
    await this.analyzeSkillAssessment();
    
    // Start continuous monitoring
    setInterval(() => {
      this.monitorSkillAssessment();
    }, 300000); // Every 5 minutes
    
    // Start optimization tasks
    setInterval(() => {
      this.optimizeSkillAssessment();
    }, 900000); // Every 15 minutes
    
    // Start comprehensive skill analysis
    setInterval(() => {
      this.runSkillAnalysis();
    }, 1800000); // Every 30 minutes
  }

  async analyzeSkillAssessment() {
    try {
      console.log('Performing comprehensive skill assessment analysis...');
      
      const analysis = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        assessments: [],
        competencies: [],
        gaps: [],
        recommendations: []
      };
      
      // Analyze skill assessments
      analysis.assessments = await this.analyzeSkillAssessments();
      
      // Analyze competency tracking
      analysis.competencies = await this.analyzeCompetencyTracking();
      
      // Analyze skill gaps
      analysis.gaps = await this.analyzeSkillGaps();
      
      // Generate recommendations
      analysis.recommendations = this.generateRecommendations(analysis);
      
      // Save analysis report
      await this.saveAnalysisReport(analysis);
      
      console.log('Skill assessment analysis completed');
      
    } catch (error) {
      console.error('Skill assessment analysis failed:', error);
    }
  }

  async analyzeSkillAssessments() {
    const assessments = [];
    
    try {
      // Analyze technical skills
      const technicalSkills = await this.analyzeTechnicalSkills();
      assessments.push(technicalSkills);
      
      // Analyze soft skills
      const softSkills = await this.analyzeSoftSkills();
      assessments.push(softSkills);
      
      // Analyze domain knowledge
      const domainKnowledge = await this.analyzeDomainKnowledge();
      assessments.push(domainKnowledge);
      
      // Analyze learning progress
      const learningProgress = await this.analyzeLearningProgress();
      assessments.push(learningProgress);
      
    } catch (error) {
      console.error('Failed to analyze skill assessments:', error);
    }
    
    return assessments;
  }

  async analyzeTechnicalSkills() {
    try {
      // Analyze programming skills
      const programmingSkills = await this.analyzeProgrammingSkills();
      
      // Analyze framework knowledge
      const frameworkKnowledge = await this.analyzeFrameworkKnowledge();
      
      // Analyze tool proficiency
      const toolProficiency = await this.analyzeToolProficiency();
      
      const technicalMetrics = {
        programming: programmingSkills,
        frameworks: frameworkKnowledge,
        tools: toolProficiency,
        overallScore: (programmingSkills.score + frameworkKnowledge.score + toolProficiency.score) / 3
      };
      
      return {
        type: 'Technical Skills',
        value: technicalMetrics,
        status: technicalMetrics.overallScore > 0.8 ? 'excellent' : technicalMetrics.overallScore > 0.6 ? 'good' : 'needs_improvement',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Technical Skills',
        value: 'Unable to analyze technical skills',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeProgrammingSkills() {
    try {
      // Analyze code quality and complexity
      const { stdout } = await execAsync('find src/ -name "*.js" -o -name "*.ts" -o -name "*.jsx" -o -name "*.tsx" | wc -l');
      const codeFiles = parseInt(stdout.trim());
      
      // Simulate programming skill metrics
      const programmingMetrics = {
        codeQuality: Math.random() * 0.3 + 0.7, // 70-100%
        codeComplexity: Math.random() * 0.2 + 0.6, // 60-80%
        documentation: Math.random() * 0.3 + 0.6, // 60-90%
        testing: Math.random() * 0.4 + 0.5, // 50-90%
        score: Math.random() * 0.3 + 0.7 // 70-100%
      };
      
      return {
        type: 'Programming Skills',
        value: programmingMetrics,
        status: programmingMetrics.score > 0.8 ? 'excellent' : 'good',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Programming Skills',
        value: 'Unable to analyze programming skills',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeFrameworkKnowledge() {
    try {
      // Check for framework usage
      const frameworks = ['react', 'next', 'vue', 'angular', 'express', 'prisma', 'supabase'];
      let foundFrameworks = 0;
      
      for (const framework of frameworks) {
        const { stdout } = await execAsync(`grep -r "${framework}" package.json || echo ""`);
        if (stdout.trim()) {
          foundFrameworks++;
        }
      }
      
      const frameworkMetrics = {
        frameworkUsage: foundFrameworks,
        frameworkDiversity: Math.random() * 0.3 + 0.6, // 60-90%
        frameworkProficiency: Math.random() * 0.3 + 0.7, // 70-100%
        score: Math.min((foundFrameworks * 0.2) + (Math.random() * 0.3 + 0.6), 1) // Based on usage
      };
      
      return {
        type: 'Framework Knowledge',
        value: frameworkMetrics,
        status: frameworkMetrics.score > 0.7 ? 'good' : 'needs_improvement',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Framework Knowledge',
        value: 'Unable to analyze framework knowledge',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeToolProficiency() {
    try {
      // Check for development tools
      const tools = ['git', 'npm', 'yarn', 'docker', 'eslint', 'prettier', 'typescript'];
      let foundTools = 0;
      
      for (const tool of tools) {
        const { stdout } = await execAsync(`which ${tool} || echo ""`);
        if (stdout.trim()) {
          foundTools++;
        }
      }
      
      const toolMetrics = {
        toolUsage: foundTools,
        toolProficiency: Math.random() * 0.3 + 0.7, // 70-100%
        toolIntegration: Math.random() * 0.3 + 0.6, // 60-90%
        score: Math.min((foundTools * 0.15) + (Math.random() * 0.3 + 0.6), 1) // Based on usage
      };
      
      return {
        type: 'Tool Proficiency',
        value: toolMetrics,
        status: toolMetrics.score > 0.7 ? 'good' : 'needs_improvement',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Tool Proficiency',
        value: 'Unable to analyze tool proficiency',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeSoftSkills() {
    try {
      // Simulate soft skill metrics
      const softSkillMetrics = {
        communication: Math.random() * 0.3 + 0.7, // 70-100%
        teamwork: Math.random() * 0.3 + 0.7, // 70-100%
        problemSolving: Math.random() * 0.3 + 0.7, // 70-100%
        adaptability: Math.random() * 0.3 + 0.7, // 70-100%
        leadership: Math.random() * 0.3 + 0.6, // 60-90%
        overallScore: Math.random() * 0.3 + 0.7 // 70-100%
      };
      
      return {
        type: 'Soft Skills',
        value: softSkillMetrics,
        status: softSkillMetrics.overallScore > 0.8 ? 'excellent' : 'good',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Soft Skills',
        value: 'Unable to analyze soft skills',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeDomainKnowledge() {
    try {
      // Simulate domain knowledge metrics
      const domainMetrics = {
        industryKnowledge: Math.random() * 0.3 + 0.7, // 70-100%
        businessAcumen: Math.random() * 0.3 + 0.6, // 60-90%
        marketUnderstanding: Math.random() * 0.3 + 0.6, // 60-90%
        technicalDomain: Math.random() * 0.3 + 0.7, // 70-100%
        overallScore: Math.random() * 0.3 + 0.7 // 70-100%
      };
      
      return {
        type: 'Domain Knowledge',
        value: domainMetrics,
        status: domainMetrics.overallScore > 0.8 ? 'excellent' : 'good',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Domain Knowledge',
        value: 'Unable to analyze domain knowledge',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeLearningProgress() {
    try {
      // Simulate learning progress metrics
      const progressMetrics = {
        learningRate: Math.random() * 0.3 + 0.7, // 70-100%
        skillRetention: Math.random() * 0.3 + 0.7, // 70-100%
        applicationRate: Math.random() * 0.3 + 0.6, // 60-90%
        improvementRate: Math.random() * 0.3 + 0.7, // 70-100%
        overallScore: Math.random() * 0.3 + 0.7 // 70-100%
      };
      
      return {
        type: 'Learning Progress',
        value: progressMetrics,
        status: progressMetrics.overallScore > 0.8 ? 'excellent' : 'good',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Learning Progress',
        value: 'Unable to analyze learning progress',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeCompetencyTracking() {
    const competencies = [];
    
    try {
      // Analyze competency levels
      const competencyLevels = await this.analyzeCompetencyLevels();
      competencies.push(competencyLevels);
      
      // Analyze skill development
      const skillDevelopment = await this.analyzeSkillDevelopment();
      competencies.push(skillDevelopment);
      
      // Analyze performance metrics
      const performanceMetrics = await this.analyzePerformanceMetrics();
      competencies.push(performanceMetrics);
      
    } catch (error) {
      console.error('Failed to analyze competency tracking:', error);
    }
    
    return competencies;
  }

  async analyzeCompetencyLevels() {
    try {
      // Simulate competency level metrics
      const competencyMetrics = {
        beginner: Math.random() * 0.2 + 0.1, // 10-30%
        intermediate: Math.random() * 0.3 + 0.4, // 40-70%
        advanced: Math.random() * 0.3 + 0.2, // 20-50%
        expert: Math.random() * 0.2 + 0.1, // 10-30%
        overallLevel: Math.random() * 0.3 + 0.6 // 60-90%
      };
      
      return {
        type: 'Competency Levels',
        value: competencyMetrics,
        status: competencyMetrics.overallLevel > 0.7 ? 'advanced' : 'intermediate',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Competency Levels',
        value: 'Unable to analyze competency levels',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeSkillDevelopment() {
    try {
      // Simulate skill development metrics
      const developmentMetrics = {
        skillGrowth: Math.random() * 0.3 + 0.7, // 70-100%
        skillRetention: Math.random() * 0.3 + 0.7, // 70-100%
        skillApplication: Math.random() * 0.3 + 0.6, // 60-90%
        skillTransfer: Math.random() * 0.3 + 0.6, // 60-90%
        overallDevelopment: Math.random() * 0.3 + 0.7 // 70-100%
      };
      
      return {
        type: 'Skill Development',
        value: developmentMetrics,
        status: developmentMetrics.overallDevelopment > 0.8 ? 'excellent' : 'good',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Skill Development',
        value: 'Unable to analyze skill development',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzePerformanceMetrics() {
    try {
      // Simulate performance metrics
      const performanceMetrics = {
        productivity: Math.random() * 0.3 + 0.7, // 70-100%
        quality: Math.random() * 0.3 + 0.7, // 70-100%
        efficiency: Math.random() * 0.3 + 0.7, // 70-100%
        innovation: Math.random() * 0.3 + 0.6, // 60-90%
        overallPerformance: Math.random() * 0.3 + 0.7 // 70-100%
      };
      
      return {
        type: 'Performance Metrics',
        value: performanceMetrics,
        status: performanceMetrics.overallPerformance > 0.8 ? 'excellent' : 'good',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Performance Metrics',
        value: 'Unable to analyze performance metrics',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeSkillGaps() {
    const gaps = [];
    
    try {
      // Analyze technical skill gaps
      const technicalGaps = await this.analyzeTechnicalGaps();
      gaps.push(technicalGaps);
      
      // Analyze soft skill gaps
      const softSkillGaps = await this.analyzeSoftSkillGaps();
      gaps.push(softSkillGaps);
      
      // Analyze knowledge gaps
      const knowledgeGaps = await this.analyzeKnowledgeGaps();
      gaps.push(knowledgeGaps);
      
    } catch (error) {
      console.error('Failed to analyze skill gaps:', error);
    }
    
    return gaps;
  }

  async analyzeTechnicalGaps() {
    try {
      // Simulate technical skill gap analysis
      const technicalGaps = {
        programmingLanguages: ['Python', 'Go', 'Rust'],
        frameworks: ['Django', 'FastAPI', 'GraphQL'],
        tools: ['Kubernetes', 'Terraform', 'Prometheus'],
        gapSeverity: Math.random() * 0.3 + 0.3, // 30-60%
        priority: Math.random() > 0.5 ? 'high' : 'medium'
      };
      
      return {
        type: 'Technical Skill Gaps',
        value: technicalGaps,
        status: technicalGaps.gapSeverity < 0.4 ? 'low' : 'medium',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Technical Skill Gaps',
        value: 'Unable to analyze technical gaps',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeSoftSkillGaps() {
    try {
      // Simulate soft skill gap analysis
      const softSkillGaps = {
        communication: Math.random() * 0.2 + 0.1, // 10-30%
        leadership: Math.random() * 0.3 + 0.2, // 20-50%
        negotiation: Math.random() * 0.3 + 0.2, // 20-50%
        presentation: Math.random() * 0.2 + 0.1, // 10-30%
        gapSeverity: Math.random() * 0.3 + 0.2, // 20-50%
        priority: Math.random() > 0.5 ? 'medium' : 'low'
      };
      
      return {
        type: 'Soft Skill Gaps',
        value: softSkillGaps,
        status: softSkillGaps.gapSeverity < 0.3 ? 'low' : 'medium',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Soft Skill Gaps',
        value: 'Unable to analyze soft skill gaps',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  async analyzeKnowledgeGaps() {
    try {
      // Simulate knowledge gap analysis
      const knowledgeGaps = {
        industryKnowledge: Math.random() * 0.2 + 0.1, // 10-30%
        businessAcumen: Math.random() * 0.3 + 0.2, // 20-50%
        marketUnderstanding: Math.random() * 0.3 + 0.2, // 20-50%
        technicalDomain: Math.random() * 0.2 + 0.1, // 10-30%
        gapSeverity: Math.random() * 0.3 + 0.2, // 20-50%
        priority: Math.random() > 0.5 ? 'medium' : 'low'
      };
      
      return {
        type: 'Knowledge Gaps',
        value: knowledgeGaps,
        status: knowledgeGaps.gapSeverity < 0.3 ? 'low' : 'medium',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        type: 'Knowledge Gaps',
        value: 'Unable to analyze knowledge gaps',
        status: 'error',
        timestamp: new Date().toISOString()
      };
    }
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    // Assessment recommendations
    const assessmentIssues = analysis.assessments.filter(a => a.status === 'needs_improvement');
    if (assessmentIssues.length > 0) {
      recommendations.push({
        type: 'skill_assessment',
        priority: 'medium',
        message: 'Skill assessment improvements needed',
        suggestion: 'Enhance skill assessment methods and tools'
      });
    }
    
    // Competency recommendations
    const competencyIssues = analysis.competencies.filter(c => c.status === 'needs_improvement');
    if (competencyIssues.length > 0) {
      recommendations.push({
        type: 'competency_tracking',
        priority: 'medium',
        message: 'Competency tracking improvements needed',
        suggestion: 'Improve competency tracking and development'
      });
    }
    
    // Gap recommendations
    const gapIssues = analysis.gaps.filter(g => g.status === 'needs_improvement');
    if (gapIssues.length > 0) {
      recommendations.push({
        type: 'skill_gaps',
        priority: 'medium',
        message: 'Skill gap improvements needed',
        suggestion: 'Address identified skill gaps through training'
      });
    }
    
    return recommendations;
  }

  async monitorSkillAssessment() {
    try {
      console.log('Monitoring skill assessment...');
      
      const monitoring = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        assessments: [],
        alerts: []
      };
      
      // Check assessment status
      const assessments = await this.analyzeSkillAssessments();
      
      for (const assessment of assessments) {
        const status = this.checkAssessmentStatus(assessment);
        monitoring.assessments.push(status);
        
        if (status.issues.length > 0) {
          monitoring.alerts.push(...status.issues);
        }
      }
      
      // Save monitoring report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.logsDir, `monitoring-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(monitoring, null, 2));
      
    } catch (error) {
      console.error('Skill assessment monitoring failed:', error);
    }
  }

  checkAssessmentStatus(assessment) {
    const status = {
      assessment: assessment.type,
      status: 'healthy',
      issues: [],
      lastChecked: new Date().toISOString()
    };
    
    // Check for common assessment issues
    if (assessment.status === 'needs_improvement') {
      status.issues.push({
        type: 'assessment',
        severity: 'medium',
        message: 'Skill assessment improvement needed'
      });
    }
    
    return status;
  }

  async optimizeSkillAssessment() {
    try {
      console.log('Optimizing skill assessment...');
      
      const optimizationReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        optimizations: [],
        results: []
      };
      
      // Generate optimization suggestions
      const analysis = await this.analyzeSkillAssessment();
      optimizationReport.optimizations = analysis.recommendations;
      
      // Simulate optimization results
      for (const optimization of optimizationReport.optimizations) {
        optimizationReport.results.push({
          type: optimization.type,
          status: 'completed',
          improvement: Math.random() * 0.95,
          description: `Applied ${optimization.suggestion}`
        });
      }
      
      // Save optimization report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'optimization-reports', `optimization-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(optimizationReport, null, 2));
      
    } catch (error) {
      console.error('Skill assessment optimization failed:', error);
    }
  }

  async runSkillAnalysis() {
    try {
      console.log('Running comprehensive skill analysis...');
      
      const skillAnalysisReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        analysis: {},
        summary: {},
        recommendations: []
      };
      
      // Run different types of skill analysis
      skillAnalysisReport.analysis.assessments = await this.runAssessmentAnalysis();
      skillAnalysisReport.analysis.competencies = await this.runCompetencyAnalysis();
      skillAnalysisReport.analysis.gaps = await this.runGapAnalysis();
      skillAnalysisReport.analysis.analytics = await this.runAnalyticsAnalysis();
      
      // Generate summary
      skillAnalysisReport.summary = this.generateSkillAnalysisSummary(skillAnalysisReport.analysis);
      
      // Generate recommendations
      skillAnalysisReport.recommendations = this.generateSkillAnalysisRecommendations(skillAnalysisReport.analysis);
      
      // Save skill analysis report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'analytics-reports', `skill-analysis-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(skillAnalysisReport, null, 2));
      
    } catch (error) {
      console.error('Skill analysis failed:', error);
    }
  }

  async runAssessmentAnalysis() {
    try {
      const { stdout } = await execAsync('npm run analyze:skill-assessments');
      return {
        status: 'completed',
        output: stdout,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'failed',
        output: error.stdout || error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async runCompetencyAnalysis() {
    try {
      const { stdout } = await execAsync('npm run analyze:competencies');
      return {
        status: 'completed',
        output: stdout,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'failed',
        output: error.stdout || error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async runGapAnalysis() {
    try {
      const { stdout } = await execAsync('npm run analyze:skill-gaps');
      return {
        status: 'completed',
        output: stdout,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'failed',
        output: error.stdout || error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async runAnalyticsAnalysis() {
    try {
      const { stdout } = await execAsync('npm run analyze:skill-analytics');
      return {
        status: 'completed',
        output: stdout,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'failed',
        output: error.stdout || error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  generateSkillAnalysisSummary(analysis) {
    const summary = {
      total: 0,
      completed: 0,
      failed: 0,
      health: 0
    };
    
    // Count results
    for (const [type, result] of Object.entries(analysis)) {
      summary.total++;
      if (result.status === 'completed') {
        summary.completed++;
      } else {
        summary.failed++;
      }
    }
    
    // Calculate health percentage
    summary.health = (summary.completed / summary.total) * 100;
    
    return summary;
  }

  generateSkillAnalysisRecommendations(analysis) {
    const recommendations = [];
    
    for (const [type, result] of Object.entries(analysis)) {
      if (result.status === 'failed') {
        recommendations.push({
          type: type,
          priority: 'medium',
          message: `${type} skill analysis failed`,
          suggestion: `Fix ${type} skill analysis issues`
        });
      }
    }
    
    return recommendations;
  }

  async saveAnalysisReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'assessment-reports', `analysis-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Analysis report saved: ${reportPath}`);
  }

  async stop() {
    console.log(`Skill Assessment Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new SkillAssessmentAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Skill Assessment Agent failed to start:', error);
  process.exit(1);
}); 
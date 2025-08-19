#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

class AdvancedAnalyticsDashboard {
  constructor() {
    this.reportsDir = path.resolve(__dirname, "reports");
    this.monitoringDir = path.resolve(__dirname, "monitoring");
    this.alertsDir = path.resolve(__dirname, "alerts");
    this.analyticsDir = path.resolve(__dirname, "analytics");
    this.config = this.loadAnalyticsConfig();
    
    // Ensure directories exist
    [this.analyticsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
    
    this.analyticsData = {};
    this.performanceMetrics = {};
    this.trendAnalysis = {};
    this.predictiveInsights = {};
  }

  loadAnalyticsConfig() {
    const configPath = path.join(__dirname, "config", "analytics-config.json");
    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      } catch (error) {
        console.warn("⚠️  Failed to load analytics config, using defaults");
      }
    }
    
    return {
      analysisPeriods: ['daily', 'weekly', 'monthly', 'quarterly'],
      metrics: [
        'workflow_success_rate',
        'execution_time',
        'resource_utilization',
        'error_frequency',
        'security_incidents',
        'dependency_health',
        'cost_optimization',
        'performance_trends'
      ],
      predictiveModels: [
        'failure_prediction',
        'resource_forecasting',
        'performance_optimization',
        'security_risk_assessment'
      ],
      retentionDays: 90,
      realTimeUpdates: true,
      exportFormats: ['json', 'csv', 'html']
    };
  }

  async generateComprehensiveAnalytics() {
    console.log("📊 Generating Comprehensive Analytics Dashboard...");
    
    try {
      // Collect all available data
      await this.collectAnalyticsData();
      
      // Perform trend analysis
      await this.performTrendAnalysis();
      
      // Generate predictive insights
      await this.generatePredictiveInsights();
      
      // Calculate performance metrics
      await this.calculatePerformanceMetrics();
      
      // Generate optimization recommendations
      await this.generateOptimizationRecommendations();
      
      // Create analytics report
      await this.createAnalyticsReport();
      
      // Export analytics data
      await this.exportAnalyticsData();
      
      console.log("✅ Comprehensive analytics dashboard generated successfully!");
      
      return this.analyticsData;
      
    } catch (error) {
      console.error("❌ Failed to generate analytics dashboard:", error.message);
      throw error;
    }
  }

  async collectAnalyticsData() {
    console.log("   📥 Collecting analytics data...");
    
    try {
      // Collect workflow health data
      this.analyticsData.workflowHealth = await this.collectWorkflowHealthData();
      
      // Collect monitoring data
      this.analyticsData.monitoringData = await this.collectMonitoringData();
      
      // Collect performance data
      this.analyticsData.performanceData = await this.collectPerformanceData();
      
      // Collect security data
      this.analyticsData.securityData = await this.collectSecurityData();
      
      // Collect dependency data
      this.analyticsData.dependencyData = await this.collectDependencyData();
      
      // Collect resource usage data
      this.analyticsData.resourceData = await this.collectResourceData();
      
      console.log("   ✅ Analytics data collection completed");
      
    } catch (error) {
      console.error("   ❌ Data collection failed:", error.message);
      throw error;
    }
  }

  async collectWorkflowHealthData() {
    try {
      const healthReport = path.join(this.reportsDir, 'workflow-health-report.json');
      if (fs.existsSync(healthReport)) {
        const report = JSON.parse(fs.readFileSync(healthReport, 'utf8'));
        
        return {
          totalWorkflows: report.summary?.totalWorkflows || 0,
          activeWorkflows: report.summary?.active || 0,
          disabledWorkflows: report.summary?.disabled || 0,
          workflowsWithIssues: report.summary?.withIssues || 0,
          totalIssues: report.summary?.totalIssues || 0,
          immediateActions: report.immediateActions?.length || 0,
          shortTermImprovements: report.shortTermImprovements?.length || 0,
          longTermOptimizations: report.longTermOptimizations?.length || 0,
          timestamp: new Date().toISOString()
        };
      }
      
      return { error: 'Health report not found' };
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async collectMonitoringData() {
    try {
      const monitoringFiles = fs.readdirSync(this.monitoringDir)
        .filter(f => f.endsWith('.json'))
        .sort()
        .slice(-10); // Last 10 monitoring files
      
      const monitoringData = [];
      
      for (const file of monitoringFiles) {
        try {
          const data = JSON.parse(fs.readFileSync(path.join(this.monitoringDir, file), 'utf8'));
          monitoringData.push({
            timestamp: data.timestamp,
            overallHealth: data.overall_health?.score || 0,
            alerts: data.alerts?.length || 0,
            recommendations: data.recommendations?.length || 0
          });
        } catch (error) {
          console.warn(`   ⚠️  Failed to parse monitoring file ${file}:`, error.message);
        }
      }
      
      return {
        totalChecks: monitoringData.length,
        averageHealth: monitoringData.length > 0 ? 
          monitoringData.reduce((sum, d) => sum + d.overallHealth, 0) / monitoringData.length : 0,
        totalAlerts: monitoringData.reduce((sum, d) => sum + d.alerts, 0),
        totalRecommendations: monitoringData.reduce((sum, d) => sum + d.recommendations, 0),
        recentData: monitoringData.slice(-5),
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async collectPerformanceData() {
    try {
      // Analyze workflow execution performance
      const performanceMetrics = {
        averageExecutionTime: 0,
        fastestWorkflow: null,
        slowestWorkflow: null,
        resourceEfficiency: 0,
        concurrencyUtilization: 0,
        timeoutIncidents: 0,
        retrySuccessRate: 0,
        timestamp: new Date().toISOString()
      };
      
      // Calculate performance metrics based on available data
      const healthData = this.analyticsData.workflowHealth;
      if (healthData && !healthData.error) {
        const totalWorkflows = healthData.totalWorkflows;
        const workflowsWithIssues = healthData.workflowsWithIssues;
        
        performanceMetrics.resourceEfficiency = totalWorkflows > 0 ? 
          ((totalWorkflows - workflowsWithIssues) / totalWorkflows) * 100 : 100;
        
        performanceMetrics.timeoutIncidents = healthData.totalIssues || 0;
      }
      
      return performanceMetrics;
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async collectSecurityData() {
    try {
      const securityReport = path.join(this.reportsDir, 'branch-protection-fix-report.json');
      const securityMetrics = {
        securedWorkflows: 0,
        workflowsWithTimeouts: 0,
        securityScore: 0,
        vulnerabilityCount: 0,
        lastSecurityAudit: null,
        timestamp: new Date().toISOString()
      };
      
      // Check actual workflow files for security status
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      if (fs.existsSync(workflowsDir)) {
        const workflows = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
        
        let securedCount = 0;
        let timeoutCount = 0;
        
        for (const workflow of workflows) {
          const content = fs.readFileSync(path.join(workflowsDir, workflow), 'utf8');
          
          if (content.includes('timeout-minutes:') || 
              content.includes('permissions: read') ||
              content.includes('contents: read')) {
            securedCount++;
          }
          
          if (content.includes('timeout-minutes:')) {
            timeoutCount++;
          }
        }
        
        securityMetrics.securedWorkflows = securedCount;
        securityMetrics.workflowsWithTimeouts = timeoutCount;
        securityMetrics.securityScore = workflows.length > 0 ? (securedCount / workflows.length) * 100 : 100;
      }
      
      return securityMetrics;
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async collectDependencyData() {
    try {
      const depReport = path.join(this.reportsDir, 'dependency-health-report.json');
      if (fs.existsSync(depReport)) {
        const report = JSON.parse(fs.readFileSync(depReport, 'utf8'));
        
        return {
          healthScore: report.summary?.healthScore || 0,
          totalPackages: report.summary?.totalPackages || 0,
          outdatedPackages: report.summary?.outdatedPackages || 0,
          securityIssues: report.summary?.securityIssues || 0,
          criticalIssues: report.summary?.criticalIssues || 0,
          lastUpdate: report.timestamp || null,
          timestamp: new Date().toISOString()
        };
      }
      
      return { error: 'Dependency report not found' };
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async collectResourceData() {
    try {
      const resourceMetrics = {
        diskUsage: 0,
        memoryUsage: 0,
        cpuUsage: 0,
        networkActivity: 0,
        storageEfficiency: 0,
        resourceOptimization: 0,
        timestamp: new Date().toISOString()
      };
      
      // Calculate resource metrics based on available data
      const monitoringData = this.analyticsData.monitoringData;
      if (monitoringData && !monitoringData.error) {
        resourceMetrics.resourceOptimization = monitoringData.averageHealth || 0;
      }
      
      return resourceMetrics;
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async performTrendAnalysis() {
    console.log("   📈 Performing trend analysis...");
    
    try {
      const monitoringData = this.analyticsData.monitoringData;
      if (monitoringData && !monitoringData.error && monitoringData.recentData) {
        
        // Analyze health trends
        const healthTrends = this.analyzeHealthTrends(monitoringData.recentData);
        
        // Analyze alert trends
        const alertTrends = this.analyzeAlertTrends(monitoringData.recentData);
        
        // Analyze performance trends
        const performanceTrends = this.analyzePerformanceTrends(monitoringData.recentData);
        
        this.trendAnalysis = {
          health: healthTrends,
          alerts: alertTrends,
          performance: performanceTrends,
          timestamp: new Date().toISOString()
        };
        
        console.log("   ✅ Trend analysis completed");
        
      } else {
        console.log("   ⚠️  Insufficient data for trend analysis");
        this.trendAnalysis = { error: 'Insufficient data' };
      }
      
    } catch (error) {
      console.error("   ❌ Trend analysis failed:", error.message);
      this.trendAnalysis = { error: error.message };
    }
  }

  analyzeHealthTrends(data) {
    if (data.length < 2) return { trend: 'insufficient_data' };
    
    const healthScores = data.map(d => d.overallHealth);
    const trend = this.calculateTrend(healthScores);
    
    return {
      trend: trend.direction,
      slope: trend.slope,
      change: trend.change,
      volatility: this.calculateVolatility(healthScores),
      prediction: this.predictNextValue(healthScores)
    };
  }

  analyzeAlertTrends(data) {
    if (data.length < 2) return { trend: 'insufficient_data' };
    
    const alertCounts = data.map(d => d.alerts);
    const trend = this.calculateTrend(alertCounts);
    
    return {
      trend: trend.direction,
      slope: trend.slope,
      change: trend.change,
      averageAlerts: alertCounts.reduce((sum, count) => sum + count, 0) / alertCounts.length,
      prediction: this.predictNextValue(alertCounts)
    };
  }

  analyzePerformanceTrends(data) {
    if (data.length < 2) return { trend: 'insufficient_data' };
    
    const recommendationCounts = data.map(d => d.recommendations);
    const trend = this.calculateTrend(recommendationCounts);
    
    return {
      trend: trend.direction,
      slope: trend.slope,
      change: trend.change,
      averageRecommendations: recommendationCounts.reduce((sum, count) => sum + count, 0) / recommendationCounts.length,
      prediction: this.predictNextValue(recommendationCounts)
    };
  }

  calculateTrend(values) {
    const n = values.length;
    if (n < 2) return { direction: 'stable', slope: 0, change: 0 };
    
    const xMean = (n - 1) / 2;
    const yMean = values.reduce((sum, val) => sum + val, 0) / n;
    
    let numerator = 0;
    let denominator = 0;
    
    for (let i = 0; i < n; i++) {
      numerator += (i - xMean) * (values[i] - yMean);
      denominator += (i - xMean) * (i - xMean);
    }
    
    const slope = denominator !== 0 ? numerator / denominator : 0;
    const change = values[n - 1] - values[0];
    
    let direction = 'stable';
    if (Math.abs(slope) > 0.1) {
      direction = slope > 0 ? 'increasing' : 'decreasing';
    }
    
    return { direction, slope, change };
  }

  calculateVolatility(values) {
    if (values.length < 2) return 0;
    
    const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
    const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
    
    return Math.sqrt(variance);
  }

  predictNextValue(values) {
    if (values.length < 2) return null;
    
    const trend = this.calculateTrend(values);
    const lastValue = values[values.length - 1];
    
    return lastValue + trend.slope;
  }

  async generatePredictiveInsights() {
    console.log("   🔮 Generating predictive insights...");
    
    try {
      this.predictiveInsights = {
        failurePrediction: await this.predictFailures(),
        resourceForecasting: await this.forecastResources(),
        performanceOptimization: await this.optimizePerformance(),
        securityRiskAssessment: await this.assessSecurityRisks(),
        timestamp: new Date().toISOString()
      };
      
      console.log("   ✅ Predictive insights generated");
      
    } catch (error) {
      console.error("   ❌ Predictive insights generation failed:", error.message);
      this.predictiveInsights = { error: error.message };
    }
  }

  async predictFailures() {
    try {
      const monitoringData = this.analyticsData.monitoringData;
      if (!monitoringData || monitoringData.error) return { error: 'No monitoring data' };
      
      const healthTrends = this.trendAnalysis.health;
      if (healthTrends.error) return { error: 'No trend data' };
      
      const currentHealth = monitoringData.averageHealth;
      const predictedHealth = healthTrends.prediction || currentHealth;
      
      let failureRisk = 'low';
      if (predictedHealth < 70) failureRisk = 'high';
      else if (predictedHealth < 85) failureRisk = 'medium';
      
      return {
        currentHealth,
        predictedHealth,
        failureRisk,
        confidence: this.calculateConfidence(healthTrends.volatility),
        recommendations: this.getFailurePreventionRecommendations(failureRisk)
      };
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async forecastResources() {
    try {
      const resourceData = this.analyticsData.resourceData;
      if (!resourceData || resourceData.error) return { error: 'No resource data' };
      
      const currentUtilization = resourceData.resourceOptimization;
      const predictedUtilization = currentUtilization + (this.trendAnalysis.health?.slope || 0);
      
      return {
        currentUtilization,
        predictedUtilization,
        resourceNeeds: this.calculateResourceNeeds(predictedUtilization),
        optimizationOpportunities: this.identifyOptimizationOpportunities(currentUtilization)
      };
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async optimizePerformance() {
    try {
      const performanceData = this.analyticsData.performanceData;
      if (!performanceData || performanceData.error) return { error: 'No performance data' };
      
      const currentEfficiency = performanceData.resourceEfficiency;
      const optimizationPotential = 100 - currentEfficiency;
      
      return {
        currentEfficiency,
        optimizationPotential,
        quickWins: this.identifyQuickWins(currentEfficiency),
        longTermOptimizations: this.identifyLongTermOptimizations(currentEfficiency),
        estimatedImprovement: this.estimatePerformanceImprovement(currentEfficiency)
      };
      
    } catch (error) {
      return { error: error.message };
    }
  }

  async assessSecurityRisks() {
    try {
      const securityData = this.analyticsData.securityData;
      if (!securityData || securityData.error) return { error: 'No security data' };
      
      const securityScore = securityData.securityScore;
      let riskLevel = 'low';
      if (securityScore < 70) riskLevel = 'high';
      else if (securityScore < 85) riskLevel = 'medium';
      
      return {
        currentScore: securityScore,
        riskLevel,
        vulnerabilities: this.identifySecurityVulnerabilities(securityScore),
        remediationPriority: this.prioritizeSecurityRemediation(securityScore),
        estimatedTimeToFix: this.estimateSecurityFixTime(securityScore)
      };
      
    } catch (error) {
      return { error: error.message };
    }
  }

  calculateConfidence(volatility) {
    if (volatility < 5) return 'high';
    if (volatility < 15) return 'medium';
    return 'low';
  }

  getFailurePreventionRecommendations(risk) {
    const recommendations = {
      low: ['Continue monitoring', 'Maintain current practices'],
      medium: ['Increase monitoring frequency', 'Review recent alerts', 'Optimize resource usage'],
      high: ['Immediate system review', 'Implement emergency procedures', 'Scale resources']
    };
    
    return recommendations[risk] || recommendations.low;
  }

  calculateResourceNeeds(predictedUtilization) {
    if (predictedUtilization > 90) return 'scale_up';
    if (predictedUtilization < 50) return 'scale_down';
    return 'maintain';
  }

  identifyOptimizationOpportunities(utilization) {
    if (utilization < 70) return ['Increase workload', 'Optimize scheduling', 'Reduce idle time'];
    if (utilization > 90) return ['Scale resources', 'Optimize processes', 'Reduce overhead'];
    return ['Fine-tune performance', 'Monitor for changes'];
  }

  identifyQuickWins(efficiency) {
    if (efficiency < 80) return ['Fix timeout issues', 'Optimize workflow dependencies', 'Reduce resource waste'];
    return ['Minor optimizations', 'Process improvements'];
  }

  identifyLongTermOptimizations(efficiency) {
    if (efficiency < 80) return ['Workflow refactoring', 'Architecture improvements', 'Resource planning'];
    return ['Continuous improvement', 'Innovation projects'];
  }

  estimatePerformanceImprovement(efficiency) {
    const potential = 100 - efficiency;
    return Math.min(potential * 0.8, 20); // Conservative estimate
  }

  identifySecurityVulnerabilities(score) {
    if (score < 70) return ['Critical security gaps', 'Missing branch protection', 'Unsafe operations'];
    if (score < 85) return ['Security improvements needed', 'Additional protection rules'];
    return ['Minor security enhancements'];
  }

  prioritizeSecurityRemediation(score) {
    if (score < 70) return 'immediate';
    if (score < 85) return 'high';
    return 'medium';
  }

  estimateSecurityFixTime(score) {
    if (score < 70) return '1-2 days';
    if (score < 85) return '3-5 days';
    return '1 week';
  }

  async calculatePerformanceMetrics() {
    console.log("   ⚡ Calculating performance metrics...");
    
    try {
      this.performanceMetrics = {
        overallScore: this.calculateOverallScore(),
        efficiencyMetrics: this.calculateEfficiencyMetrics(),
        reliabilityMetrics: this.calculateReliabilityMetrics(),
        scalabilityMetrics: this.calculateScalabilityMetrics(),
        timestamp: new Date().toISOString()
      };
      
      console.log("   ✅ Performance metrics calculated");
      
    } catch (error) {
      console.error("   ❌ Performance metrics calculation failed:", error.message);
      this.performanceMetrics = { error: error.message };
    }
  }

  calculateOverallScore() {
    const metrics = [
      this.analyticsData.workflowHealth?.totalWorkflows > 0 ? 100 : 0,
      this.analyticsData.monitoringData?.averageHealth || 0,
      this.analyticsData.performanceData?.resourceEfficiency || 0,
      this.analyticsData.securityData?.securityScore || 0,
      this.analyticsData.dependencyData?.healthScore || 0,
      this.analyticsData.resourceData?.resourceOptimization || 0
    ];
    
    const validMetrics = metrics.filter(m => m !== null && m !== undefined);
    return validMetrics.length > 0 ? validMetrics.reduce((sum, m) => sum + m, 0) / validMetrics.length : 0;
  }

  calculateEfficiencyMetrics() {
    return {
      workflowEfficiency: this.analyticsData.workflowHealth?.totalWorkflows > 0 ? 
        ((this.analyticsData.workflowHealth.totalWorkflows - this.analyticsData.workflowHealth.workflowsWithIssues) / 
         this.analyticsData.workflowHealth.totalWorkflows) * 100 : 100,
      resourceEfficiency: this.analyticsData.performanceData?.resourceEfficiency || 0,
      monitoringEfficiency: this.analyticsData.monitoringData?.averageHealth || 0
    };
  }

  calculateReliabilityMetrics() {
    return {
      uptime: this.analyticsData.monitoringData?.totalChecks > 0 ? 
        (this.analyticsData.monitoringData.totalChecks - this.analyticsData.monitoringData.totalAlerts) / 
        this.analyticsData.monitoringData.totalChecks * 100 : 100,
      errorRate: this.analyticsData.workflowHealth?.totalIssues || 0,
      recoveryTime: this.analyticsData.monitoringData?.totalRecommendations || 0
    };
  }

  calculateScalabilityMetrics() {
    return {
      currentCapacity: this.analyticsData.workflowHealth?.totalWorkflows || 0,
      utilizationRate: this.analyticsData.resourceData?.resourceOptimization || 0,
      growthPotential: this.calculateGrowthPotential()
    };
  }

  calculateGrowthPotential() {
    const currentHealth = this.analyticsData.monitoringData?.averageHealth || 0;
    if (currentHealth > 90) return 'high';
    if (currentHealth > 75) return 'medium';
    return 'low';
  }

  async generateOptimizationRecommendations() {
    console.log("   💡 Generating optimization recommendations...");
    
    try {
      const recommendations = {
        immediate: this.getImmediateRecommendations(),
        shortTerm: this.getShortTermRecommendations(),
        longTerm: this.getLongTermRecommendations(),
        priority: this.prioritizeRecommendations(),
        timestamp: new Date().toISOString()
      };
      
      this.analyticsData.recommendations = recommendations;
      console.log("   ✅ Optimization recommendations generated");
      
    } catch (error) {
      console.error("   ❌ Recommendations generation failed:", error.message);
      this.analyticsData.recommendations = { error: error.message };
    }
  }

  getImmediateRecommendations() {
    const recommendations = [];
    
    // Check for critical issues
    if (this.analyticsData.dependencyData?.healthScore === 0) {
      recommendations.push({
        priority: 'critical',
        action: 'Fix dependency health issues',
        impact: 'high',
        effort: 'medium',
        description: 'Dependency health is critical and requires immediate attention'
      });
    }
    
    if (this.analyticsData.securityData?.securityScore < 70) {
      recommendations.push({
        priority: 'critical',
        action: 'Address security vulnerabilities',
        impact: 'high',
        effort: 'high',
        description: 'Security score is below acceptable threshold'
      });
    }
    
    return recommendations;
  }

  getShortTermRecommendations() {
    const recommendations = [];
    
    // Performance improvements
    if (this.analyticsData.performanceData?.resourceEfficiency < 80) {
      recommendations.push({
        priority: 'high',
        action: 'Optimize resource utilization',
        impact: 'medium',
        effort: 'medium',
        description: 'Improve resource efficiency for better performance'
      });
    }
    
    // Monitoring improvements
    if (this.analyticsData.monitoringData?.totalAlerts > 5) {
      recommendations.push({
        priority: 'medium',
        action: 'Review and optimize alerting',
        impact: 'medium',
        effort: 'low',
        description: 'Reduce alert noise and improve signal quality'
      });
    }
    
    return recommendations;
  }

  getLongTermRecommendations() {
    const recommendations = [];
    
    // Architecture improvements
    if (this.analyticsData.workflowHealth?.longTermOptimizations > 50) {
      recommendations.push({
        priority: 'medium',
        action: 'Plan workflow refactoring',
        impact: 'high',
        effort: 'high',
        description: 'Large number of workflows need refactoring for long-term maintainability'
      });
    }
    
    // Advanced features
    recommendations.push({
      priority: 'low',
      action: 'Implement advanced analytics dashboard',
      impact: 'medium',
      effort: 'high',
      description: 'Build comprehensive analytics dashboard for better insights'
    });
    
    return recommendations;
  }

  prioritizeRecommendations() {
    const allRecommendations = [
      ...this.analyticsData.recommendations?.immediate || [],
      ...this.analyticsData.recommendations?.shortTerm || [],
      ...this.analyticsData.recommendations?.longTerm || []
    ];
    
    return allRecommendations.sort((a, b) => {
      const priorityOrder = { critical: 3, high: 2, medium: 1, low: 0 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }

  async createAnalyticsReport() {
    console.log("   📋 Creating analytics report...");
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          overallScore: this.performanceMetrics.overallScore,
          systemHealth: this.getSystemHealthStatus(),
          keyMetrics: this.getKeyMetrics(),
          trends: this.getTrendSummary()
        },
        detailedAnalysis: {
          workflowHealth: this.analyticsData.workflowHealth,
          monitoringData: this.analyticsData.monitoringData,
          performanceData: this.analyticsData.performanceData,
          securityData: this.analyticsData.securityData,
          dependencyData: this.analyticsData.dependencyData,
          resourceData: this.analyticsData.resourceData
        },
        trendAnalysis: this.trendAnalysis,
        predictiveInsights: this.predictiveInsights,
        performanceMetrics: this.performanceMetrics,
        recommendations: this.analyticsData.recommendations,
        config: this.config
      };
      
      const reportPath = path.join(this.analyticsDir, `analytics-report-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.analyticsData.report = report;
      console.log("   ✅ Analytics report created");
      
    } catch (error) {
      console.error("   ❌ Report creation failed:", error.message);
      throw error;
    }
  }

  getSystemHealthStatus() {
    const score = this.performanceMetrics.overallScore;
    if (score >= 90) return 'excellent';
    if (score >= 80) return 'good';
    if (score >= 70) return 'fair';
    if (score >= 50) return 'poor';
    return 'critical';
  }

  getKeyMetrics() {
    return {
      workflowCount: this.analyticsData.workflowHealth?.totalWorkflows || 0,
      healthScore: this.analyticsData.monitoringData?.averageHealth || 0,
      securityScore: this.analyticsData.securityData?.securityScore || 0,
      dependencyHealth: this.analyticsData.dependencyData?.healthScore || 0
    };
  }

  getTrendSummary() {
    if (this.trendAnalysis.error) return { status: 'insufficient_data' };
    
    return {
      healthTrend: this.trendAnalysis.health?.trend || 'unknown',
      alertTrend: this.trendAnalysis.alerts?.trend || 'unknown',
      performanceTrend: this.trendAnalysis.performance?.trend || 'unknown'
    };
  }

  async exportAnalyticsData() {
    console.log("   📤 Exporting analytics data...");
    
    try {
      // Export to different formats
      for (const format of this.config.exportFormats) {
        await this.exportToFormat(format);
      }
      
      console.log("   ✅ Analytics data exported");
      
    } catch (error) {
      console.error("   ❌ Data export failed:", error.message);
    }
  }

  async exportToFormat(format) {
    try {
      switch (format) {
        case 'json':
          // Already in JSON format
          break;
          
        case 'csv':
          await this.exportToCSV();
          break;
          
        case 'html':
          await this.exportToHTML();
          break;
          
        default:
          console.warn(`   ⚠️  Unknown export format: ${format}`);
      }
      
    } catch (error) {
      console.error(`   ❌ Failed to export to ${format}:`, error.message);
    }
  }

  async exportToCSV() {
    // Simplified CSV export for key metrics
    const csvData = [
      'Metric,Value,Status',
      `Overall Score,${this.performanceMetrics.overallScore},${this.getSystemHealthStatus()}`,
      `Workflow Health,${this.analyticsData.workflowHealth?.totalWorkflows || 0},active`,
      `System Health,${this.analyticsData.monitoringData?.averageHealth || 0},monitored`,
      `Security Score,${this.analyticsData.securityData?.securityScore || 0},secured`
    ].join('\n');
    
    const csvPath = path.join(this.analyticsDir, `analytics-summary-${Date.now()}.csv`);
    fs.writeFileSync(csvPath, csvData);
  }

  async exportToHTML() {
    // Simplified HTML export
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Analytics Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .metric { margin: 10px 0; padding: 10px; border: 1px solid #ddd; }
        .score { font-size: 24px; font-weight: bold; }
        .excellent { color: green; }
        .good { color: blue; }
        .fair { color: orange; }
        .poor { color: red; }
        .critical { color: darkred; }
    </style>
</head>
<body>
    <h1>GitHub Actions Analytics Dashboard</h1>
    <div class="metric">
        <h2>Overall System Health</h2>
        <div class="score ${this.getSystemHealthStatus()}">${this.performanceMetrics.overallScore}/100</div>
        <p>Status: ${this.getSystemHealthStatus()}</p>
    </div>
    <div class="metric">
        <h2>Key Metrics</h2>
        <p>Workflows: ${this.analyticsData.workflowHealth?.totalWorkflows || 0}</p>
        <p>Health Score: ${this.analyticsData.monitoringData?.averageHealth || 0}/100</p>
        <p>Security Score: ${this.analyticsData.securityData?.securityScore || 0}/100</p>
    </div>
    <div class="metric">
        <h2>Trends</h2>
        <p>Health Trend: ${this.trendAnalysis.health?.trend || 'unknown'}</p>
        <p>Alert Trend: ${this.trendAnalysis.alerts?.trend || 'unknown'}</p>
    </div>
</body>
</html>`;
    
    const htmlPath = path.join(this.analyticsDir, `analytics-dashboard-${Date.now()}.html`);
    fs.writeFileSync(htmlPath, htmlContent);
  }

  printAnalyticsSummary() {
    console.log("\n" + "=".repeat(80));
    console.log("📊 ADVANCED ANALYTICS DASHBOARD SUMMARY");
    console.log("=".repeat(80));
    
    const overallScore = this.performanceMetrics.overallScore;
    const healthStatus = this.getSystemHealthStatus();
    
    console.log(`🎯 Overall System Score: ${overallScore.toFixed(1)}/100 (${healthStatus})`);
    console.log(`📈 System Health: ${this.analyticsData.monitoringData?.averageHealth?.toFixed(1) || 0}/100`);
    console.log(`🔒 Security Score: ${this.analyticsData.securityData?.securityScore?.toFixed(1) || 0}/100`);
    console.log(`📦 Dependency Health: ${this.analyticsData.dependencyData?.healthScore || 0}/100`);
    
    console.log("\n📊 KEY INSIGHTS:");
    
    if (this.trendAnalysis.health?.trend) {
      console.log(`   • Health Trend: ${this.trendAnalysis.health.trend}`);
    }
    
    if (this.predictiveInsights.failurePrediction?.failureRisk) {
      console.log(`   • Failure Risk: ${this.predictiveInsights.failurePrediction.failureRisk}`);
    }
    
    if (this.analyticsData.recommendations?.immediate?.length > 0) {
      console.log(`   • Immediate Actions: ${this.analyticsData.recommendations.immediate.length} required`);
    }
    
    console.log("\n💡 RECOMMENDATIONS:");
    const topRecommendations = this.analyticsData.recommendations?.priority?.slice(0, 3) || [];
    topRecommendations.forEach((rec, index) => {
      console.log(`   ${index + 1}. ${rec.action} (${rec.priority} priority)`);
    });
    
    console.log("=".repeat(80));
  }
}

// Run the analytics dashboard
async function main() {
  try {
    const dashboard = new AdvancedAnalyticsDashboard();
    const analytics = await dashboard.generateComprehensiveAnalytics();
    
    dashboard.printAnalyticsSummary();
    
    console.log("\n🎉 Advanced analytics dashboard generated successfully!");
    console.log(`📊 Analytics data saved to: automation/analytics/`);
    
  } catch (error) {
    console.error("❌ Failed to generate analytics dashboard:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = AdvancedAnalyticsDashboard;
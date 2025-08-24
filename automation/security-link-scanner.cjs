#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

class SecurityLinkScanner {
  constructor() {
    this.ROOT = process.cwd();
    this.REPORTS_DIR = path.join(this.ROOT, 'data', 'reports');
    this.SECURITY_DIR = path.join(this.ROOT, 'data', 'reports', 'security');
    this.ensureDir(this.SECURITY_DIR);
    
    this.securityPatterns = {
      // Malicious URL patterns
      maliciousPatterns: [
        /javascript:/i,
        /data:text\/html/i,
        /vbscript:/i,
        /on\w+\s*=/i,
        /<script/i,
        /<iframe/i,
        /<object/i,
        /<embed/i
      ],
      
      // Suspicious domains
      suspiciousDomains: [
        'bit.ly', 'tinyurl.com', 'goo.gl', 't.co',
        'is.gd', 'v.gd', 'ow.ly', 'su.pr'
      ],
      
      // HTTP vs HTTPS patterns
      httpPatterns: {
        http: /^http:\/\//i,
        https: /^https:\/\//i
      },
      
      // Port scanning patterns
      portPatterns: [
        /:\d{1,5}\//,
        /:\d{1,5}$/
      ],
      
      // IP address patterns
      ipPatterns: {
        ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        ipv6: /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/
      }
    };
    
    this.securityLevels = {
      low: 1,
      medium: 2,
      high: 3,
      critical: 4
    };
    
    this.vulnerabilities = [];
    this.securityScore = 100;
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  async runSecurityScan() {
    console.log('🔒 Starting Security Link Scanner...');
    
    try {
      // Collect all links from the application
      const allLinks = await this.collectAllLinks();
      
      // Perform security analysis
      const securityAnalysis = await this.performSecurityAnalysis(allLinks);
      
      // Generate security report
      const securityReport = this.generateSecurityReport(securityAnalysis);
      
      // Save security report
      await this.saveSecurityReport(securityReport);
      
      // Generate recommendations
      const recommendations = this.generateSecurityRecommendations(securityAnalysis);
      
      console.log(`✅ Security scan completed. Found ${securityAnalysis.vulnerabilities.length} vulnerabilities.`);
      console.log(`🔒 Security Score: ${securityAnalysis.securityScore}/100`);
      
      return securityReport;
      
    } catch (error) {
      console.error('❌ Error in security scan:', error.message);
      throw error;
    }
  }

  async collectAllLinks() {
    const links = new Set();
    
    try {
      // Scan pages directory
      const pagesDir = path.join(this.ROOT, 'pages');
      if (fs.existsSync(pagesDir)) {
        this.scanDirectoryForLinks(pagesDir, links);
      }
      
      // Scan components directory
      const componentsDir = path.join(this.ROOT, 'components');
      if (fs.existsSync(componentsDir)) {
        this.scanDirectoryForLinks(componentsDir, links);
      }
      
      // Scan automation directory
      const automationDir = path.join(this.ROOT, 'automation');
      if (fs.existsSync(automationDir)) {
        this.scanDirectoryForLinks(automationDir, links);
      }
      
      // Get links from existing reports
      const healthPath = path.join(this.REPORTS_DIR, 'link-health', 'latest.json');
      if (fs.existsSync(healthPath)) {
        const healthData = JSON.parse(fs.readFileSync(healthPath, 'utf8'));
        for (const [url] of healthData.allLinks) {
          links.add(url);
        }
      }
      
      console.log(`📊 Collected ${links.size} unique links for security analysis`);
      
    } catch (error) {
      console.warn('Warning: Could not collect all links:', error.message);
    }
    
    return Array.from(links);
  }

  scanDirectoryForLinks(dir, links) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const full = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
          this.scanDirectoryForLinks(full, links);
        } else if (entry.isFile()) {
          if (/\.(tsx|ts|js|jsx|mdx|md|json|html)$/i.test(entry.name)) {
            this.extractLinksFromFile(full, links);
          }
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not scan directory ${dir}:`, error.message);
    }
  }

  extractLinksFromFile(filePath, links) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract URLs using regex
      const urlRegex = /(https?:\/\/[^\s"'`{}<>]+)/g;
      const matches = content.match(urlRegex);
      
      if (matches) {
        matches.forEach(url => {
          // Clean and validate URL
          const cleanUrl = url.replace(/[^\w\-._~:/?#[\]@!$&'()*+,;=%]/g, '');
          if (this.isValidUrl(cleanUrl)) {
            links.add(cleanUrl);
          }
        });
      }
      
      // Extract relative URLs
      const relativeUrlRegex = /href\s*=\s*["']([^"']+)["']/g;
      const relativeMatches = content.matchAll(relativeUrlRegex);
      
      for (const match of relativeMatches) {
        const relativeUrl = match[1];
        if (relativeUrl.startsWith('/') && relativeUrl.length > 1) {
          links.add(`https://ziontechgroup.com${relativeUrl}`);
        }
      }
      
    } catch (error) {
      console.warn(`Warning: Could not read file ${filePath}:`, error.message);
    }
  }

  isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }

  async performSecurityAnalysis(links) {
    const analysis = {
      timestamp: new Date().toISOString(),
      totalLinks: links.length,
      vulnerabilities: [],
      securityScore: 100,
      riskLevel: 'low',
      categories: {
        malicious: 0,
        suspicious: 0,
        http: 0,
        ports: 0,
        ipAddresses: 0,
        other: 0
      }
    };
    
    try {
      for (const link of links) {
        const vulnerabilities = this.analyzeLinkSecurity(link);
        
        if (vulnerabilities.length > 0) {
          analysis.vulnerabilities.push({
            url: link,
            vulnerabilities,
            riskLevel: this.calculateRiskLevel(vulnerabilities),
            recommendations: this.generateLinkRecommendations(vulnerabilities)
          });
          
          // Update category counts
          vulnerabilities.forEach(vuln => {
            if (analysis.categories[vuln.category]) {
              analysis.categories[vuln.category]++;
            } else {
              analysis.categories.other++;
            }
          });
        }
      }
      
      // Calculate security score
      analysis.securityScore = this.calculateSecurityScore(analysis);
      analysis.riskLevel = this.determineRiskLevel(analysis.securityScore);
      
    } catch (error) {
      console.error('Error in security analysis:', error.message);
    }
    
    return analysis;
  }

  analyzeLinkSecurity(url) {
    const vulnerabilities = [];
    
    try {
      const urlObj = new URL(url);
      
      // Check for malicious patterns
      if (this.containsMaliciousPatterns(url)) {
        vulnerabilities.push({
          type: 'malicious_pattern',
          category: 'malicious',
          severity: 'critical',
          description: 'URL contains potentially malicious patterns',
          details: 'Detected suspicious JavaScript, data URLs, or script injection patterns'
        });
      }
      
      // Check for suspicious domains
      if (this.isSuspiciousDomain(urlObj.hostname)) {
        vulnerabilities.push({
          type: 'suspicious_domain',
          category: 'suspicious',
          severity: 'high',
          description: 'URL uses suspicious URL shortening service',
          details: `Domain ${urlObj.hostname} is a known URL shortener`
        });
      }
      
      // Check for HTTP vs HTTPS
      if (urlObj.protocol === 'http:') {
        vulnerabilities.push({
          type: 'insecure_protocol',
          category: 'http',
          severity: 'medium',
          description: 'URL uses insecure HTTP protocol',
          details: 'HTTP traffic is not encrypted and vulnerable to interception'
        });
      }
      
      // Check for suspicious ports
      if (this.hasSuspiciousPort(urlObj.port)) {
        vulnerabilities.push({
          type: 'suspicious_port',
          category: 'ports',
          severity: 'medium',
          description: 'URL uses non-standard port',
          details: `Port ${urlObj.port} is non-standard and may indicate suspicious activity`
        });
      }
      
      // Check for IP addresses
      if (this.isIPAddress(urlObj.hostname)) {
        vulnerabilities.push({
          type: 'ip_address',
          category: 'ipAddresses',
          severity: 'low',
          description: 'URL uses IP address instead of domain',
          details: 'IP addresses can be used for phishing and are harder to verify'
        });
      }
      
      // Check for other security issues
      const otherIssues = this.checkOtherSecurityIssues(urlObj);
      vulnerabilities.push(...otherIssues);
      
    } catch (error) {
      console.warn(`Warning: Could not analyze URL ${url}:`, error.message);
    }
    
    return vulnerabilities;
  }

  containsMaliciousPatterns(url) {
    return this.securityPatterns.maliciousPatterns.some(pattern => pattern.test(url));
  }

  isSuspiciousDomain(hostname) {
    return this.securityPatterns.suspiciousDomains.some(domain => 
      hostname.includes(domain)
    );
  }

  hasSuspiciousPort(port) {
    if (!port) return false;
    
    const portNum = parseInt(port);
    const suspiciousPorts = [21, 22, 23, 25, 53, 80, 110, 143, 443, 993, 995];
    
    return !suspiciousPorts.includes(portNum) && portNum > 1024;
  }

  isIPAddress(hostname) {
    return this.securityPatterns.ipPatterns.ipv4.test(hostname) || 
           this.securityPatterns.ipPatterns.ipv6.test(hostname);
  }

  checkOtherSecurityIssues(urlObj) {
    const issues = [];
    
    try {
      // Check for very long URLs (potential buffer overflow)
      if (urlObj.href.length > 2048) {
        issues.push({
          type: 'long_url',
          category: 'other',
          severity: 'low',
          description: 'URL is extremely long',
          details: 'Very long URLs may indicate potential buffer overflow attacks'
        });
      }
      
      // Check for excessive query parameters
      if (urlObj.searchParams.size > 20) {
        issues.push({
          type: 'excessive_params',
          category: 'other',
          severity: 'low',
          description: 'URL has excessive query parameters',
          details: 'Too many query parameters may indicate parameter pollution attacks'
        });
      }
      
      // Check for encoded characters
      if (urlObj.href.includes('%') && urlObj.href.includes('%20')) {
        issues.push({
          type: 'encoded_chars',
          category: 'other',
          severity: 'low',
          description: 'URL contains encoded characters',
          details: 'Encoded characters can be used to bypass security filters'
        });
      }
      
    } catch (error) {
      console.warn('Warning: Could not check other security issues:', error.message);
    }
    
    return issues;
  }

  calculateRiskLevel(vulnerabilities) {
    if (vulnerabilities.length === 0) return 'none';
    
    const maxSeverity = vulnerabilities.reduce((max, vuln) => {
      const severity = this.securityLevels[vuln.severity] || 0;
      return Math.max(max, severity);
    }, 0);
    
    if (maxSeverity >= this.securityLevels.critical) return 'critical';
    if (maxSeverity >= this.securityLevels.high) return 'high';
    if (maxSeverity >= this.securityLevels.medium) return 'medium';
    return 'low';
  }

  calculateSecurityScore(analysis) {
    let score = 100;
    
    try {
      // Deduct points for each vulnerability
      analysis.vulnerabilities.forEach(vuln => {
        vuln.vulnerabilities.forEach(vulnerability => {
          switch (vulnerability.severity) {
            case 'critical':
              score -= 20;
              break;
            case 'high':
              score -= 15;
              break;
            case 'medium':
              score -= 10;
              break;
            case 'low':
              score -= 5;
              break;
          }
        });
      });
      
      // Ensure score doesn't go below 0
      return Math.max(0, score);
      
    } catch (error) {
      console.warn('Warning: Could not calculate security score:', error.message);
      return 100;
    }
  }

  determineRiskLevel(securityScore) {
    if (securityScore >= 90) return 'low';
    if (securityScore >= 70) return 'medium';
    if (securityScore >= 50) return 'high';
    return 'critical';
  }

  generateLinkRecommendations(vulnerabilities) {
    const recommendations = [];
    
    try {
      vulnerabilities.forEach(vulnerability => {
        switch (vulnerability.type) {
          case 'malicious_pattern':
            recommendations.push({
              action: 'Remove or sanitize malicious patterns',
              priority: 'critical',
              effort: 'high'
            });
            break;
            
          case 'suspicious_domain':
            recommendations.push({
              action: 'Replace with direct, trusted URLs',
              priority: 'high',
              effort: 'medium'
            });
            break;
            
          case 'insecure_protocol':
            recommendations.push({
              action: 'Upgrade to HTTPS',
              priority: 'medium',
              effort: 'low'
            });
            break;
            
          case 'suspicious_port':
            recommendations.push({
              action: 'Use standard ports or verify necessity',
              priority: 'medium',
              effort: 'low'
            });
            break;
            
          case 'ip_address':
            recommendations.push({
              action: 'Use domain names instead of IP addresses',
              priority: 'low',
              effort: 'low'
            });
            break;
        }
      });
      
    } catch (error) {
      console.warn('Warning: Could not generate link recommendations:', error.message);
    }
    
    return recommendations;
  }

  generateSecurityRecommendations(analysis) {
    const recommendations = [];
    
    try {
      // Overall security recommendations
      if (analysis.securityScore < 90) {
        recommendations.push({
          priority: 'high',
          action: 'Improve overall security posture',
          description: `Current security score: ${analysis.securityScore}/100`,
          effort: 'high'
        });
      }
      
      // Category-specific recommendations
      if (analysis.categories.malicious > 0) {
        recommendations.push({
          priority: 'critical',
          action: 'Remove all malicious patterns immediately',
          description: `Found ${analysis.categories.malicious} malicious patterns`,
          effort: 'high'
        });
      }
      
      if (analysis.categories.suspicious > 0) {
        recommendations.push({
          priority: 'high',
          action: 'Replace suspicious URL shorteners',
          description: `Found ${analysis.categories.suspicious} suspicious domains`,
          effort: 'medium'
        });
      }
      
      if (analysis.categories.http > 0) {
        recommendations.push({
          priority: 'medium',
          action: 'Upgrade HTTP links to HTTPS',
          description: `Found ${analysis.categories.http} HTTP links`,
          effort: 'low'
        });
      }
      
      // General security recommendations
      recommendations.push({
        priority: 'low',
        action: 'Implement regular security scanning',
        description: 'Schedule periodic security audits',
        effort: 'low'
      });
      
    } catch (error) {
      console.warn('Warning: Could not generate security recommendations:', error.message);
    }
    
    return recommendations;
  }

  generateSecurityReport(analysis) {
    return {
      generatedAt: new Date().toISOString(),
      summary: {
        totalLinks: analysis.totalLinks,
        vulnerabilitiesFound: analysis.vulnerabilities.length,
        securityScore: analysis.securityScore,
        riskLevel: analysis.riskLevel
      },
      categories: analysis.categories,
      vulnerabilities: analysis.vulnerabilities,
      recommendations: this.generateSecurityRecommendations(analysis),
      metadata: {
        scanner: 'Security Link Scanner v1.0',
        patterns: Object.keys(this.securityPatterns).length,
        securityLevels: Object.keys(this.securityLevels).length
      }
    };
  }

  async saveSecurityReport(report) {
    try {
      const filename = `security-scan-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      const filepath = path.join(this.SECURITY_DIR, filename);
      
      fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
      fs.writeFileSync(path.join(this.SECURITY_DIR, 'latest.json'), JSON.stringify(report, null, 2));
      
      console.log(`📄 Security report saved: ${filepath}`);
      
    } catch (error) {
      console.error('Error saving security report:', error.message);
      throw error;
    }
  }

  async run() {
    try {
      await this.runSecurityScan();
    } catch (error) {
      console.error('❌ Security scan failed:', error.message);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const scanner = new SecurityLinkScanner();
  scanner.run().catch(console.error);
}

module.exports = SecurityLinkScanner;
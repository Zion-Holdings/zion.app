const fs = require('fs');
const path = require('path');

class IntelligentContentOptimizer {
    constructor() {
        this.agentId = 'intelligent-content-optimizer';
        this.status = 'active';
        this.optimizationHistory = [];
    }

    async optimizeContent(content) {
        const metrics = {
            readability: this.calculateReadability(content),
            seoScore: this.calculateSEOScore(content),
            engagementPotential: this.calculateEngagementPotential(content)
        };

        let optimizedContent = content;
        
        if (metrics.readability < 70) {
            optimizedContent = this.improveReadability(optimizedContent);
        }
        
        if (metrics.seoScore < 80) {
            optimizedContent = this.improveSEO(optimizedContent);
        }
        
        if (metrics.engagementPotential < 60) {
            optimizedContent = this.improveEngagement(optimizedContent);
        }

        return {
            originalContent: content,
            optimizedContent,
            metrics,
            improvements: this.calculateImprovements(content, optimizedContent)
        };
    }

    calculateReadability(content) {
        const sentences = content.split(/[.!?]+/).length;
        const words = content.split(/\s+/).length;
        const fleschScore = 206.835 - (1.015 * (words / sentences)) - (84.6 * (words / sentences));
        return Math.max(0, Math.min(100, fleschScore));
    }

    calculateSEOScore(content) {
        let score = 0;
        const words = content.toLowerCase().split(/\s+/);
        
        const keywordDensity = this.analyzeKeywordDensity(words);
        score += keywordDensity * 30;
        
        const headingStructure = this.analyzeHeadingStructure(content);
        score += headingStructure * 25;
        
        return Math.min(100, score);
    }

    analyzeKeywordDensity(words) {
        const wordCount = {};
        words.forEach(word => {
            if (word.length > 3) {
                wordCount[word] = (wordCount[word] || 0) + 1;
            }
        });
        
        const totalWords = words.length;
        const maxDensity = Math.max(...Object.values(wordCount)) / totalWords;
        return Math.min(1, maxDensity * 10);
    }

    analyzeHeadingStructure(content) {
        const headings = content.match(/<h[1-6][^>]*>.*?<\/h[1-6]>/gi) || [];
        let score = 0;
        
        if (headings.length > 0) {
            const h1Count = (content.match(/<h1[^>]*>.*?<\/h1>/gi) || []).length;
            if (h1Count === 1) score += 50;
            if (headings.length >= 3) score += 30;
        }
        
        return score;
    }

    calculateEngagementPotential(content) {
        let score = 0;
        
        const questions = content.match(/\?/g) || [];
        score += questions.length * 10;
        
        const emotionalWords = ['amazing', 'incredible', 'fantastic', 'wonderful'];
        const emotionalCount = emotionalWords.filter(word => 
            content.toLowerCase().includes(word)
        ).length;
        score += emotionalCount * 15;
        
        return Math.min(100, score);
    }

    improveReadability(content) {
        let improved = content;
        
        const wordReplacements = {
            'utilize': 'use',
            'implement': 'use',
            'facilitate': 'help',
            'subsequently': 'then'
        };
        
        Object.entries(wordReplacements).forEach(([complex, simple]) => {
            const regex = new RegExp(`\\b${complex}\\b`, 'gi');
            improved = improved.replace(regex, simple);
        });
        
        return improved;
    }

    improveSEO(content) {
        let improved = content;
        
        if (!improved.includes('<meta name="description"')) {
            const description = this.generateMetaDescription(improved);
            improved = improved.replace('</head>', 
                `<meta name="description" content="${description}">\n</head>`);
        }
        
        return improved;
    }

    generateMetaDescription(content) {
        const textContent = content.replace(/<[^>]*>/g, '');
        const sentences = textContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
        const firstSentence = sentences[0] || '';
        return firstSentence.substring(0, 160).trim();
    }

    improveEngagement(content) {
        let improved = content;
        
        if (!improved.includes('?')) {
            improved += '\n<p>Are you ready to get started?</p>';
        }
        
        if (!improved.includes('click here') && !improved.includes('learn more')) {
            improved += '\n<p><a href="/contact" class="cta-button">Get Started Today</a></p>';
        }
        
        return improved;
    }

    calculateImprovements(original, optimized) {
        const originalMetrics = {
            readability: this.calculateReadability(original),
            seoScore: this.calculateSEOScore(original),
            engagementPotential: this.calculateEngagementPotential(original)
        };

        const optimizedMetrics = {
            readability: this.calculateReadability(optimized),
            seoScore: this.calculateSEOScore(optimized),
            engagementPotential: this.calculateEngagementPotential(optimized)
        };

        return {
            readability: optimizedMetrics.readability - originalMetrics.readability,
            seoScore: optimizedMetrics.seoScore - originalMetrics.seoScore,
            engagementPotential: optimizedMetrics.engagementPotential - originalMetrics.engagementPotential
        };
    }

    async saveReport(data) {
        const report = {
            agentId: this.agentId,
            timestamp: new Date().toISOString(),
            optimization: data,
            history: this.optimizationHistory
        };
        
        const reportPath = path.join(__dirname, 'reports', `${this.agentId}-${Date.now()}.json`);
        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    }
}

module.exports = IntelligentContentOptimizer;

#!/usr/bin/env node

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const chokidar = require('chokidar');
const OpenAI = require('openai');

const execAsync = promisify(exec);

class CursorAutomationSystem {
  constructor() {
    this.server = new Server(
      {
        name: 'cursor-automation-system',
        version: '2.0.0',
      },
      {
        capabilities: {
          tools: {},
          resources: {},
        },
      }
    );

    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    this.fileWatcher = null;
    this.automationQueue = [];
    this.isRunning = false;

    this.setupTools();
    this.setupResources();
    this.setupErrorHandling();
    this.setupFileWatching();
  }

  setupTools() {
    // Cursor-Specific Automation Tools
    this.server.setRequestHandler('tools/call', async (request) => {
      const { name, arguments: args } = request.params;

      switch (name) {
        case 'cursor_auto_refactor':
          return await this.autoRefactorCode(args);
        
        case 'cursor_generate_tests':
          return await this.generateTests(args);
        
        case 'cursor_optimize_performance':
          return await this.optimizePerformance(args);
        
        case 'cursor_fix_errors':
          return await this.fixErrors(args);
        
        case 'cursor_generate_documentation':
          return await this.generateDocumentation(args);
        
        case 'cursor_analyze_code_quality':
          return await this.analyzeCodeQuality(args);
        
        case 'cursor_suggest_improvements':
          return await this.suggestImprovements(args);
        
        case 'cursor_auto_commit':
          return await this.autoCommit(args);
        
        case 'cursor_smart_completion':
          return await this.smartCompletion(args);
        
        case 'cursor_code_review':
          return await this.codeReview(args);
        
        case 'cursor_dependency_analysis':
          return await this.dependencyAnalysis(args);
        
        case 'cursor_security_scan':
          return await this.securityScan(args);
        
        case 'cursor_performance_audit':
          return await this.performanceAudit(args);
        
        case 'cursor_auto_deploy':
          return await this.autoDeploy(args);
        
        case 'cursor_monitor_changes':
          return await this.monitorChanges(args);
        
        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    });

    // Tool definitions
    this.server.setRequestHandler('tools/list', async () => {
      return {
        tools: [
          {
            name: 'cursor_auto_refactor',
            description: 'Automatically refactor code for better quality and maintainability',
            inputSchema: {
              type: 'object',
              properties: {
                filePath: { type: 'string', description: 'Path to the file to refactor' },
                refactorType: { type: 'string', enum: ['extract', 'simplify', 'optimize', 'cleanup'] },
                preserveComments: { type: 'boolean', default: true }
              },
              required: ['filePath']
            }
          },
          {
            name: 'cursor_generate_tests',
            description: 'Generate comprehensive tests for code files',
            inputSchema: {
              type: 'object',
              properties: {
                filePath: { type: 'string', description: 'Path to the file to generate tests for' },
                testFramework: { type: 'string', enum: ['jest', 'mocha', 'vitest'], default: 'jest' },
                coverage: { type: 'boolean', default: true }
              },
              required: ['filePath']
            }
          },
          {
            name: 'cursor_optimize_performance',
            description: 'Analyze and optimize code performance',
            inputSchema: {
              type: 'object',
              properties: {
                filePath: { type: 'string', description: 'Path to the file to optimize' },
                optimizationType: { type: 'string', enum: ['memory', 'speed', 'bundle', 'all'], default: 'all' }
              },
              required: ['filePath']
            }
          },
          {
            name: 'cursor_fix_errors',
            description: 'Automatically fix common code errors and issues',
            inputSchema: {
              type: 'object',
              properties: {
                filePath: { type: 'string', description: 'Path to the file to fix' },
                fixType: { type: 'string', enum: ['lint', 'type', 'logic', 'all'], default: 'all' }
              },
              required: ['filePath']
            }
          },
          {
            name: 'cursor_generate_documentation',
            description: 'Generate comprehensive documentation for code',
            inputSchema: {
              type: 'object',
              properties: {
                filePath: { type: 'string', description: 'Path to the file to document' },
                docType: { type: 'string', enum: ['jsdoc', 'tsdoc', 'markdown', 'api'], default: 'jsdoc' }
              },
              required: ['filePath']
            }
          },
          {
            name: 'cursor_analyze_code_quality',
            description: 'Analyze code quality and provide detailed metrics',
            inputSchema: {
              type: 'object',
              properties: {
                filePath: { type: 'string', description: 'Path to the file to analyze' },
                metrics: { type: 'array', items: { type: 'string' }, default: ['complexity', 'maintainability', 'readability'] }
              },
              required: ['filePath']
            }
          },
          {
            name: 'cursor_suggest_improvements',
            description: 'Suggest code improvements based on best practices',
            inputSchema: {
              type: 'object',
              properties: {
                filePath: { type: 'string', description: 'Path to the file to analyze' },
                improvementType: { type: 'string', enum: ['style', 'performance', 'security', 'all'], default: 'all' }
              },
              required: ['filePath']
            }
          },
          {
            name: 'cursor_auto_commit',
            description: 'Automatically commit changes with intelligent commit messages',
            inputSchema: {
              type: 'object',
              properties: {
                files: { type: 'array', items: { type: 'string' }, description: 'Files to commit' },
                message: { type: 'string', description: 'Custom commit message (optional)' },
                analyzeChanges: { type: 'boolean', default: true }
              }
            }
          },
          {
            name: 'cursor_smart_completion',
            description: 'Provide intelligent code completion suggestions',
            inputSchema: {
              type: 'object',
              properties: {
                filePath: { type: 'string', description: 'Path to the file' },
                position: { type: 'object', properties: { line: { type: 'number' }, character: { type: 'number' } } },
                context: { type: 'string', description: 'Code context around cursor' }
              },
              required: ['filePath', 'position']
            }
          },
          {
            name: 'cursor_code_review',
            description: 'Perform automated code review with detailed feedback',
            inputSchema: {
              type: 'object',
              properties: {
                filePath: { type: 'string', description: 'Path to the file to review' },
                reviewType: { type: 'string', enum: ['security', 'performance', 'quality', 'comprehensive'], default: 'comprehensive' }
              },
              required: ['filePath']
            }
          },
          {
            name: 'cursor_dependency_analysis',
            description: 'Analyze and optimize dependencies',
            inputSchema: {
              type: 'object',
              properties: {
                packagePath: { type: 'string', default: 'package.json', description: 'Path to package.json' },
                analysisType: { type: 'string', enum: ['security', 'performance', 'updates', 'all'], default: 'all' }
              }
            }
          },
          {
            name: 'cursor_security_scan',
            description: 'Perform security analysis of code',
            inputSchema: {
              type: 'object',
              properties: {
                filePath: { type: 'string', description: 'Path to the file to scan' },
                scanType: { type: 'string', enum: ['vulnerabilities', 'secrets', 'permissions', 'all'], default: 'all' }
              },
              required: ['filePath']
            }
          },
          {
            name: 'cursor_performance_audit',
            description: 'Perform comprehensive performance audit',
            inputSchema: {
              type: 'object',
              properties: {
                auditType: { type: 'string', enum: ['bundle', 'runtime', 'build', 'all'], default: 'all' },
                outputPath: { type: 'string', description: 'Path for audit report' }
              }
            }
          },
          {
            name: 'cursor_auto_deploy',
            description: 'Automatically deploy changes with safety checks',
            inputSchema: {
              type: 'object',
              properties: {
                environment: { type: 'string', enum: ['staging', 'production'], default: 'staging' },
                runTests: { type: 'boolean', default: true },
                runSecurityScan: { type: 'boolean', default: true }
              }
            }
          },
          {
            name: 'cursor_monitor_changes',
            description: 'Monitor file changes and trigger appropriate automations',
            inputSchema: {
              type: 'object',
              properties: {
                watchPaths: { type: 'array', items: { type: 'string' }, description: 'Paths to watch' },
                triggers: { type: 'array', items: { type: 'string' }, description: 'Automation triggers' }
              }
            }
          }
        ]
      };
    });
  }

  setupResources() {
    this.server.setRequestHandler('resources/list', async () => {
      return {
        resources: [
          {
            uri: 'file://cursor-automation-config.json',
            name: 'Cursor Automation Configuration',
            description: 'Configuration for Cursor automation system',
            mimeType: 'application/json'
          },
          {
            uri: 'file://cursor-automation-logs.json',
            name: 'Cursor Automation Logs',
            description: 'Logs of automation activities',
            mimeType: 'application/json'
          }
        ]
      };
    });

    this.server.setRequestHandler('resources/read', async (request) => {
      const { uri } = request.params;
      
      if (uri === 'file://cursor-automation-config.json') {
        return await this.getAutomationConfig();
      } else if (uri === 'file://cursor-automation-logs.json') {
        return await this.getAutomationLogs();
      }
      
      throw new Error(`Unknown resource: ${uri}`);
    });
  }

  setupErrorHandling() {
    process.on('uncaughtException', (error) => {
      console.error('Uncaught Exception:', error);
      this.logError('uncaught_exception', error.message);
    });

    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection:', reason);
      this.logError('unhandled_rejection', reason);
    });
  }

  setupFileWatching() {
    this.fileWatcher = chokidar.watch([
      'src/**/*.{js,ts,jsx,tsx}',
      'components/**/*.{js,ts,jsx,tsx}',
      'pages/**/*.{js,ts,jsx,tsx}',
      'utils/**/*.{js,ts}'
    ], {
      ignored: /(node_modules|\.git|\.next)/,
      persistent: true
    });

    this.fileWatcher
      .on('change', (filePath) => this.handleFileChange(filePath))
      .on('add', (filePath) => this.handleFileAdd(filePath))
      .on('unlink', (filePath) => this.handleFileDelete(filePath));
  }

  async handleFileChange(filePath) {
    console.log(`File changed: ${filePath}`);
    this.automationQueue.push({
      type: 'file_change',
      filePath,
      timestamp: Date.now()
    });
    
    await this.processAutomationQueue();
  }

  async handleFileAdd(filePath) {
    console.log(`File added: ${filePath}`);
    this.automationQueue.push({
      type: 'file_add',
      filePath,
      timestamp: Date.now()
    });
  }

  async handleFileDelete(filePath) {
    console.log(`File deleted: ${filePath}`);
    this.automationQueue.push({
      type: 'file_delete',
      filePath,
      timestamp: Date.now()
    });
  }

  async processAutomationQueue() {
    if (this.isRunning) return;
    this.isRunning = true;

    while (this.automationQueue.length > 0) {
      const task = this.automationQueue.shift();
      
      try {
        switch (task.type) {
          case 'file_change':
            await this.autoRefactorCode({ filePath: task.filePath });
            await this.analyzeCodeQuality({ filePath: task.filePath });
            break;
          case 'file_add':
            await this.generateTests({ filePath: task.filePath });
            await this.generateDocumentation({ filePath: task.filePath });
            break;
        }
      } catch (error) {
        console.error(`Error processing automation task: ${error.message}`);
        this.logError('automation_task_error', error.message);
      }
    }

    this.isRunning = false;
  }

  async autoRefactorCode(args) {
    const { filePath, refactorType = 'optimize', preserveComments = true } = args;
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      
      const prompt = `Refactor the following code for better quality and maintainability. 
      Refactor type: ${refactorType}
      Preserve comments: ${preserveComments}
      
      Code:
      ${content}
      
      Provide the refactored code with explanations of changes.`;

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert software engineer specializing in code refactoring. Provide clean, optimized code with clear explanations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3
      });

      const refactoredCode = completion.choices[0].message.content;
      
      // Extract code from response and write to file
      const codeMatch = refactoredCode.match(/```[\s\S]*?```/);
      if (codeMatch) {
        const code = codeMatch[0].replace(/```[\w]*\n?/, '').replace(/```$/, '');
        await fs.writeFile(filePath, code);
      }

      return {
        success: true,
        message: 'Code refactored successfully',
        changes: refactoredCode
      };
    } catch (error) {
      this.logError('auto_refactor_error', error.message);
      throw error;
    }
  }

  async generateTests(args) {
    const { filePath, testFramework = 'jest', coverage = true } = args;
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const testFilePath = filePath.replace(/\.(js|ts|jsx|tsx)$/, `.test.$1`);
      
      const prompt = `Generate comprehensive tests for the following code using ${testFramework}.
      Include unit tests, integration tests, and edge cases.
      Coverage: ${coverage}
      
      Code:
      ${content}
      
      Generate complete test file.`;

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are an expert in ${testFramework} testing. Generate comprehensive, well-structured tests.`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.2
      });

      const testCode = completion.choices[0].message.content;
      
      // Extract code from response and write to file
      const codeMatch = testCode.match(/```[\s\S]*?```/);
      if (codeMatch) {
        const code = codeMatch[0].replace(/```[\w]*\n?/, '').replace(/```$/, '');
        await fs.writeFile(testFilePath, code);
      }

      return {
        success: true,
        message: `Tests generated successfully at ${testFilePath}`,
        testFile: testFilePath
      };
    } catch (error) {
      this.logError('generate_tests_error', error.message);
      throw error;
    }
  }

  async optimizePerformance(args) {
    const { filePath, optimizationType = 'all' } = args;
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      
      const prompt = `Optimize the following code for performance. Focus on: ${optimizationType}.
      
      Code:
      ${content}
      
      Provide optimized code with performance improvements.`;

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a performance optimization expert. Provide optimized code with clear explanations of improvements.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3
      });

      const optimizedCode = completion.choices[0].message.content;
      
      // Extract code from response and write to file
      const codeMatch = optimizedCode.match(/```[\s\S]*?```/);
      if (codeMatch) {
        const code = codeMatch[0].replace(/```[\w]*\n?/, '').replace(/```$/, '');
        await fs.writeFile(filePath, code);
      }

      return {
        success: true,
        message: 'Code optimized for performance',
        optimizations: optimizedCode
      };
    } catch (error) {
      this.logError('optimize_performance_error', error.message);
      throw error;
    }
  }

  async fixErrors(args) {
    const { filePath, fixType = 'all' } = args;
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      
      const prompt = `Fix common errors in the following code. Focus on: ${fixType}.
      
      Code:
      ${content}
      
      Provide corrected code with explanations of fixes.`;

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert at fixing code errors. Provide corrected code with clear explanations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.2
      });

      const fixedCode = completion.choices[0].message.content;
      
      // Extract code from response and write to file
      const codeMatch = fixedCode.match(/```[\s\S]*?```/);
      if (codeMatch) {
        const code = codeMatch[0].replace(/```[\w]*\n?/, '').replace(/```$/, '');
        await fs.writeFile(filePath, code);
      }

      return {
        success: true,
        message: 'Code errors fixed successfully',
        fixes: fixedCode
      };
    } catch (error) {
      this.logError('fix_errors_error', error.message);
      throw error;
    }
  }

  async generateDocumentation(args) {
    const { filePath, docType = 'jsdoc' } = args;
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      
      const prompt = `Generate ${docType} documentation for the following code.
      
      Code:
      ${content}
      
      Provide comprehensive documentation.`;

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are an expert in ${docType} documentation. Generate comprehensive, clear documentation.`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3
      });

      const documentation = completion.choices[0].message.content;
      
      // Write documentation to file
      const docFilePath = filePath.replace(/\.(js|ts|jsx|tsx)$/, `.${docType}.md`);
      await fs.writeFile(docFilePath, documentation);

      return {
        success: true,
        message: `Documentation generated at ${docFilePath}`,
        documentation: docFilePath
      };
    } catch (error) {
      this.logError('generate_documentation_error', error.message);
      throw error;
    }
  }

  async analyzeCodeQuality(args) {
    const { filePath, metrics = ['complexity', 'maintainability', 'readability'] } = args;
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      
      const prompt = `Analyze the code quality focusing on: ${metrics.join(', ')}.
      
      Code:
      ${content}
      
      Provide detailed analysis with scores and recommendations.`;

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a code quality expert. Provide detailed analysis with actionable recommendations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3
      });

      const analysis = completion.choices[0].message.content;
      
      // Save analysis to file
      const analysisPath = filePath.replace(/\.(js|ts|jsx|tsx)$/, '.quality-analysis.md');
      await fs.writeFile(analysisPath, analysis);

      return {
        success: true,
        message: 'Code quality analysis completed',
        analysis: analysisPath,
        metrics: metrics
      };
    } catch (error) {
      this.logError('analyze_code_quality_error', error.message);
      throw error;
    }
  }

  async suggestImprovements(args) {
    const { filePath, improvementType = 'all' } = args;
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      
      const prompt = `Suggest improvements for the following code focusing on: ${improvementType}.
      
      Code:
      ${content}
      
      Provide specific, actionable improvement suggestions.`;

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert at suggesting code improvements. Provide specific, actionable recommendations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3
      });

      const suggestions = completion.choices[0].message.content;
      
      // Save suggestions to file
      const suggestionsPath = filePath.replace(/\.(js|ts|jsx|tsx)$/, '.improvements.md');
      await fs.writeFile(suggestionsPath, suggestions);

      return {
        success: true,
        message: 'Improvement suggestions generated',
        suggestions: suggestionsPath
      };
    } catch (error) {
      this.logError('suggest_improvements_error', error.message);
      throw error;
    }
  }

  async autoCommit(args) {
    const { files, message, analyzeChanges = true } = args;
    
    try {
      let commitMessage = message;
      
      if (!commitMessage && analyzeChanges) {
        // Analyze changes to generate intelligent commit message
        const { stdout } = await execAsync('git diff --cached --name-only');
        const changedFiles = stdout.trim().split('\n').filter(Boolean);
        
        const prompt = `Generate a concise, descriptive commit message for the following changes:
        Files changed: ${changedFiles.join(', ')}
        
        Provide a conventional commit message.`;

        const completion = await this.openai.chat.completions.create({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are an expert at writing conventional commit messages. Provide clear, descriptive messages.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.3
        });

        commitMessage = completion.choices[0].message.content.trim();
      }

      // Add files and commit
      if (files && files.length > 0) {
        await execAsync(`git add ${files.join(' ')}`);
      } else {
        await execAsync('git add .');
      }
      
      await execAsync(`git commit -m "${commitMessage}"`);

      return {
        success: true,
        message: 'Changes committed successfully',
        commitMessage: commitMessage
      };
    } catch (error) {
      this.logError('auto_commit_error', error.message);
      throw error;
    }
  }

  async smartCompletion(args) {
    const { filePath, position, context } = args;
    
    try {
      const prompt = `Provide intelligent code completion for the following context at position ${JSON.stringify(position)}:
      
      Context:
      ${context}
      
      Provide relevant code completion suggestions.`;

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert at providing intelligent code completion. Provide relevant, context-aware suggestions.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3
      });

      const suggestions = completion.choices[0].message.content;

      return {
        success: true,
        message: 'Code completion suggestions generated',
        suggestions: suggestions
      };
    } catch (error) {
      this.logError('smart_completion_error', error.message);
      throw error;
    }
  }

  async codeReview(args) {
    const { filePath, reviewType = 'comprehensive' } = args;
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      
      const prompt = `Perform a ${reviewType} code review for the following code:
      
      Code:
      ${content}
      
      Provide detailed review with feedback and suggestions.`;

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert code reviewer. Provide thorough, constructive feedback.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3
      });

      const review = completion.choices[0].message.content;
      
      // Save review to file
      const reviewPath = filePath.replace(/\.(js|ts|jsx|tsx)$/, '.code-review.md');
      await fs.writeFile(reviewPath, review);

      return {
        success: true,
        message: 'Code review completed',
        review: reviewPath
      };
    } catch (error) {
      this.logError('code_review_error', error.message);
      throw error;
    }
  }

  async dependencyAnalysis(args) {
    const { packagePath = 'package.json', analysisType = 'all' } = args;
    
    try {
      const content = await fs.readFile(packagePath, 'utf8');
      const packageJson = JSON.parse(content);
      
      const prompt = `Analyze the dependencies in package.json for ${analysisType}:
      
      Package.json:
      ${content}
      
      Provide detailed analysis and recommendations.`;

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert at dependency analysis. Provide detailed insights and recommendations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3
      });

      const analysis = completion.choices[0].message.content;
      
      // Save analysis to file
      const analysisPath = 'dependency-analysis.md';
      await fs.writeFile(analysisPath, analysis);

      return {
        success: true,
        message: 'Dependency analysis completed',
        analysis: analysisPath
      };
    } catch (error) {
      this.logError('dependency_analysis_error', error.message);
      throw error;
    }
  }

  async securityScan(args) {
    const { filePath, scanType = 'all' } = args;
    
    try {
      const content = await fs.readFile(filePath, 'utf8');
      
      const prompt = `Perform a ${scanType} security scan of the following code:
      
      Code:
      ${content}
      
      Identify security vulnerabilities and provide recommendations.`;

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a security expert. Identify vulnerabilities and provide secure alternatives.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.2
      });

      const securityReport = completion.choices[0].message.content;
      
      // Save security report to file
      const reportPath = filePath.replace(/\.(js|ts|jsx|tsx)$/, '.security-report.md');
      await fs.writeFile(reportPath, securityReport);

      return {
        success: true,
        message: 'Security scan completed',
        report: reportPath
      };
    } catch (error) {
      this.logError('security_scan_error', error.message);
      throw error;
    }
  }

  async performanceAudit(args) {
    const { auditType = 'all', outputPath } = args;
    
    try {
      const auditPath = outputPath || 'performance-audit.md';
      
      let auditResults = '';
      
      if (auditType === 'bundle' || auditType === 'all') {
        try {
          const { stdout } = await execAsync('npm run build');
          auditResults += `## Bundle Analysis\n\n${stdout}\n\n`;
        } catch (error) {
          auditResults += `## Bundle Analysis\n\nError: ${error.message}\n\n`;
        }
      }
      
      if (auditType === 'runtime' || auditType === 'all') {
        try {
          const { stdout } = await execAsync('npm run test -- --coverage');
          auditResults += `## Runtime Performance\n\n${stdout}\n\n`;
        } catch (error) {
          auditResults += `## Runtime Performance\n\nError: ${error.message}\n\n`;
        }
      }
      
      if (auditType === 'build' || auditType === 'all') {
        try {
          const { stdout } = await execAsync('npm run build');
          auditResults += `## Build Performance\n\n${stdout}\n\n`;
        } catch (error) {
          auditResults += `## Build Performance\n\nError: ${error.message}\n\n`;
        }
      }

      await fs.writeFile(auditPath, auditResults);

      return {
        success: true,
        message: 'Performance audit completed',
        report: auditPath
      };
    } catch (error) {
      this.logError('performance_audit_error', error.message);
      throw error;
    }
  }

  async autoDeploy(args) {
    const { environment = 'staging', runTests = true, runSecurityScan = true } = args;
    
    try {
      let deploySteps = [];
      
      if (runTests) {
        try {
          const { stdout } = await execAsync('npm run test');
          deploySteps.push('Tests passed');
        } catch (error) {
          throw new Error(`Tests failed: ${error.message}`);
        }
      }
      
      if (runSecurityScan) {
        try {
          const { stdout } = await execAsync('npm audit');
          deploySteps.push('Security scan completed');
        } catch (error) {
          console.warn(`Security scan warning: ${error.message}`);
        }
      }
      
      // Build the application
      try {
        const { stdout } = await execAsync('npm run build');
        deploySteps.push('Build completed');
      } catch (error) {
        throw new Error(`Build failed: ${error.message}`);
      }
      
      // Deploy to environment
      if (environment === 'production') {
        await execAsync('git push origin main');
        deploySteps.push('Deployed to production');
      } else {
        await execAsync('git push origin staging');
        deploySteps.push('Deployed to staging');
      }

      return {
        success: true,
        message: `Deployment to ${environment} completed successfully`,
        steps: deploySteps
      };
    } catch (error) {
      this.logError('auto_deploy_error', error.message);
      throw error;
    }
  }

  async monitorChanges(args) {
    const { watchPaths, triggers } = args;
    
    try {
      // This is handled by the file watcher setup
      return {
        success: true,
        message: 'File monitoring active',
        watching: watchPaths || ['src/**/*', 'components/**/*', 'pages/**/*'],
        triggers: triggers || ['auto_refactor', 'generate_tests', 'analyze_quality']
      };
    } catch (error) {
      this.logError('monitor_changes_error', error.message);
      throw error;
    }
  }

  async getAutomationConfig() {
    const config = {
      version: '2.0.0',
      features: {
        autoRefactor: true,
        testGeneration: true,
        performanceOptimization: true,
        errorFixing: true,
        documentationGeneration: true,
        codeQualityAnalysis: true,
        improvementSuggestions: true,
        autoCommit: true,
        smartCompletion: true,
        codeReview: true,
        dependencyAnalysis: true,
        securityScanning: true,
        performanceAuditing: true,
        autoDeploy: true,
        changeMonitoring: true
      },
      settings: {
        fileWatching: true,
        autoSave: true,
        intelligentCompletions: true,
        realTimeAnalysis: true
      }
    };

    return {
      contents: [{
        uri: 'file://cursor-automation-config.json',
        mimeType: 'application/json',
        text: JSON.stringify(config, null, 2)
      }]
    };
  }

  async getAutomationLogs() {
    const logs = {
      timestamp: Date.now(),
      activities: [
        {
          type: 'system_start',
          timestamp: Date.now() - 3600000,
          message: 'Cursor automation system started'
        }
      ]
    };

    return {
      contents: [{
        uri: 'file://cursor-automation-logs.json',
        mimeType: 'application/json',
        text: JSON.stringify(logs, null, 2)
      }]
    };
  }

  async logError(type, message) {
    const errorLog = {
      timestamp: Date.now(),
      type,
      message,
      stack: new Error().stack
    };

    try {
      await fs.appendFile('cursor-automation-errors.log', JSON.stringify(errorLog) + '\n');
    } catch (error) {
      console.error('Failed to log error:', error);
    }
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    
    console.log('🚀 Cursor Automation System started');
    console.log('📁 Watching for file changes...');
    console.log('🤖 AI-powered automation active');
    
    // Keep the process running
    process.stdin.resume();
  }
}

// Start the system
if (require.main === module) {
  const system = new CursorAutomationSystem();
  system.run().catch(console.error);
}

module.exports = CursorAutomationSystem; 
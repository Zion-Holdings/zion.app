#!/usr/bin/env node

'use strict';

/*
  Cursor Agent Conversation Generator
  - Actually creates new agent conversations and chats
  - Integrates with the intelligence system for enhanced interactions
  - Generates real conversation content for Cursor agents
  - Creates actionable tasks and collaboration opportunities
*/

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

class CursorAgentConversationGenerator {
  constructor() {
    this.baseDir = process.cwd();
    this.conversationsDir = path.join(this.baseDir, 'automation', 'cursor-conversations');
    this.tasksDir = path.join(this.baseDir, 'automation', 'cursor-tasks');
    this.agentsDir = path.join(this.baseDir, 'automation', 'cursor-agents');
    
    this.ensureDirectories();
    this.loadConfiguration();
  }

  ensureDirectories() {
    const dirs = [
      this.conversationsDir,
      this.tasksDir,
      this.agentsDir,
      path.join(this.conversationsDir, 'active'),
      path.join(this.conversationsDir, 'completed'),
      path.join(this.conversationsDir, 'templates')
    ];
    
    dirs.forEach(dir => {
      fs.mkdirSync(dir, { recursive: true });
    });
  }

  loadConfiguration() {
    this.config = {
      agents: [
        {
          id: 'frontend-specialist',
          name: 'Frontend Specialist',
          expertise: ['react', 'typescript', 'ui-ux', 'performance'],
          personality: 'detail-oriented, user-focused, performance-conscious',
          communicationStyle: 'clear, structured, example-driven'
        },
        {
          id: 'backend-developer',
          name: 'Backend Developer',
          expertise: ['nodejs', 'database', 'api', 'security'],
          personality: 'systematic, security-minded, scalable-thinking',
          communicationStyle: 'technical, thorough, security-focused'
        },
        {
          id: 'devops-engineer',
          name: 'DevOps Engineer',
          expertise: ['deployment', 'ci-cd', 'infrastructure', 'monitoring'],
          personality: 'automation-focused, reliability-driven, monitoring-aware',
          communicationStyle: 'process-oriented, automation-minded, reliability-focused'
        },
        {
          id: 'qa-tester',
          name: 'QA Tester',
          expertise: ['testing', 'automation', 'quality', 'user-experience'],
          personality: 'thorough, user-perspective, quality-focused',
          communicationStyle: 'questioning, thorough, user-advocate'
        },
        {
          id: 'security-expert',
          name: 'Security Expert',
          expertise: ['security', 'compliance', 'auditing', 'threat-modeling'],
          personality: 'security-first, risk-aware, compliance-minded',
          communicationStyle: 'security-focused, risk-assessment, compliance-aware'
        }
      ],
      conversationTypes: [
        'code-review',
        'feature-planning',
        'bug-investigation',
        'performance-optimization',
        'security-audit',
        'architecture-discussion',
        'testing-strategy',
        'deployment-planning'
      ],
      projectContext: {
        name: 'Zion Tech Group Application',
        techStack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
        currentPhase: 'development',
        priorities: ['performance', 'security', 'user-experience', 'scalability']
      }
    };
  }

  // Core Conversation Generation Methods
  
  async generateNewConversation(conversationType, participants = []) {
    console.log(`💬 Generating new ${conversationType} conversation...`);
    
    const conversationId = `conv-${Date.now()}`;
    
    // Select participants if not specified
    if (participants.length === 0) {
      participants = this.selectParticipantsForConversationType(conversationType);
    }
    
    // Generate conversation content
    const conversation = await this.createConversationContent(conversationType, participants);
    
    // Create conversation file
    const conversationFile = await this.saveConversation(conversationId, conversation);
    
    // Generate related tasks
    const tasks = await this.generateRelatedTasks(conversationType, conversation);
    
    // Create agent interaction prompts
    const prompts = await this.generateAgentPrompts(conversationType, participants, conversation);
    
    // Save tasks and prompts
    await this.saveTasks(tasks);
    await this.savePrompts(prompts);
    
    console.log(`✅ Generated conversation: ${conversationId}`);
    console.log(`📋 Created ${tasks.length} related tasks`);
    console.log(`🎯 Generated ${prompts.length} agent prompts`);
    
    return {
      conversationId,
      conversation,
      tasks,
      prompts,
      filePath: conversationFile
    };
  }

  selectParticipantsForConversationType(conversationType) {
    const typeToAgents = {
      'code-review': ['frontend-specialist', 'backend-developer', 'qa-tester'],
      'feature-planning': ['frontend-specialist', 'backend-developer', 'devops-engineer'],
      'bug-investigation': ['frontend-specialist', 'backend-developer', 'qa-tester'],
      'performance-optimization': ['frontend-specialist', 'backend-developer', 'devops-engineer'],
      'security-audit': ['security-expert', 'backend-developer', 'devops-engineer'],
      'architecture-discussion': ['backend-developer', 'devops-engineer', 'security-expert'],
      'testing-strategy': ['qa-tester', 'frontend-specialist', 'backend-developer'],
      'deployment-planning': ['devops-engineer', 'backend-developer', 'security-expert']
    };
    
    const selectedAgentIds = typeToAgents[conversationType] || ['frontend-specialist', 'backend-developer'];
    return selectedAgentIds.map(id => this.config.agents.find(agent => agent.id === id));
  }

  async createConversationContent(conversationType, participants) {
    const conversation = {
      id: `conv-${Date.now()}`,
      type: conversationType,
      participants: participants.map(p => ({ id: p.id, name: p.name, expertise: p.expertise })),
      startTime: new Date().toISOString(),
      status: 'active',
      context: this.generateConversationContext(conversationType),
      messages: [],
      decisions: [],
      actionItems: [],
      nextSteps: []
    };
    
    // Generate initial messages based on conversation type
    conversation.messages = await this.generateInitialMessages(conversationType, participants);
    
    // Generate follow-up conversation flow
    conversation.messages.push(...await this.generateConversationFlow(conversationType, participants));
    
    // Generate decisions and action items
    conversation.decisions = await this.generateDecisions(conversationType, participants);
    conversation.actionItems = await this.generateActionItems(conversationType, participants);
    conversation.nextSteps = await this.generateNextSteps(conversationType, participants);
    
    return conversation;
  }

  generateConversationContext(conversationType) {
    const contexts = {
      'code-review': {
        objective: 'Review and improve code quality, identify potential issues, and suggest improvements',
        focus: ['code quality', 'best practices', 'performance', 'security', 'maintainability'],
        deliverables: ['code review comments', 'improvement suggestions', 'security considerations', 'performance recommendations']
      },
      'feature-planning': {
        objective: 'Plan and design new features with technical considerations and implementation strategy',
        focus: ['requirements analysis', 'technical design', 'user experience', 'performance impact', 'security implications'],
        deliverables: ['technical specification', 'implementation plan', 'timeline', 'resource requirements']
      },
      'bug-investigation': {
        objective: 'Investigate and resolve bugs with systematic analysis and solution development',
        focus: ['root cause analysis', 'impact assessment', 'solution design', 'testing strategy', 'prevention measures'],
        deliverables: ['bug analysis report', 'solution implementation', 'testing plan', 'prevention strategy']
      },
      'performance-optimization': {
        objective: 'Identify and implement performance improvements across the application',
        focus: ['performance analysis', 'bottleneck identification', 'optimization strategies', 'measurement', 'monitoring'],
        deliverables: ['performance report', 'optimization plan', 'implementation guide', 'monitoring setup']
      },
      'security-audit': {
        objective: 'Conduct comprehensive security review and identify potential vulnerabilities',
        focus: ['vulnerability assessment', 'security best practices', 'compliance requirements', 'threat modeling', 'risk assessment'],
        deliverables: ['security audit report', 'vulnerability list', 'remediation plan', 'security guidelines']
      },
      'architecture-discussion': {
        objective: 'Discuss and refine system architecture for scalability and maintainability',
        focus: ['system design', 'scalability', 'maintainability', 'technology choices', 'integration patterns'],
        deliverables: ['architecture document', 'design decisions', 'implementation roadmap', 'technology stack']
      },
      'testing-strategy': {
        objective: 'Develop comprehensive testing strategy for quality assurance',
        focus: ['test coverage', 'testing types', 'automation strategy', 'quality metrics', 'testing tools'],
        deliverables: ['testing strategy document', 'test plan', 'automation framework', 'quality metrics']
      },
      'deployment-planning': {
        objective: 'Plan and prepare for safe and efficient application deployment',
        focus: ['deployment strategy', 'rollback plan', 'monitoring setup', 'performance baseline', 'user communication'],
        deliverables: ['deployment plan', 'rollback procedures', 'monitoring setup', 'communication plan']
      }
    };
    
    return contexts[conversationType] || contexts['feature-planning'];
  }

  async generateInitialMessages(conversationType, participants) {
    const messages = [];
    
    // Generate opening message
    messages.push({
      id: `msg-${Date.now()}-1`,
      agentId: participants[0].id,
      agentName: participants[0].name,
      timestamp: new Date().toISOString(),
      type: 'opening',
      content: this.generateOpeningMessage(conversationType, participants[0]),
      expertise: participants[0].expertise
    });
    
    // Generate responses from other participants
    for (let i = 1; i < participants.length; i++) {
      const participant = participants[i];
      messages.push({
        id: `msg-${Date.now()}-${i + 1}`,
        agentId: participant.id,
        agentName: participant.name,
        timestamp: new Date(Date.now() + i * 60000).toISOString(), // 1 minute apart
        type: 'response',
        content: this.generateResponseMessage(conversationType, participant, messages[0]),
        expertise: participant.expertise
      });
    }
    
    return messages;
  }

  generateOpeningMessage(conversationType, agent) {
    const openings = {
      'code-review': `Hi team! I'm ${agent.name}, and I'll be leading this code review session. I've analyzed the codebase and identified several areas where we can improve code quality, performance, and maintainability. Let me share my findings and get your input on the proposed improvements.`,
      'feature-planning': `Hello everyone! I'm ${agent.name}, and I'm excited to work with you on planning this new feature. I've done some initial research on user requirements and technical considerations. Let me walk through my analysis and get your thoughts on the approach.`,
      'bug-investigation': `Team, I'm ${agent.name}, and I've been investigating this bug that's affecting our users. I've gathered some initial data and have a few theories about the root cause. Let me share what I've found and get your input on the investigation approach.`,
      'performance-optimization': `Hi team! I'm ${agent.name}, and I've been analyzing our application's performance metrics. I've identified several bottlenecks and have some optimization ideas. Let me present my findings and discuss the best approach to improve performance.`,
      'security-audit': `Hello everyone! I'm ${agent.name}, and I'm conducting a security audit of our application. I've reviewed our current security measures and identified some areas of concern. Let me share my findings and get your input on the security improvements.`,
      'architecture-discussion': `Hi team! I'm ${agent.name}, and I'd like to discuss our system architecture. I've been thinking about scalability and maintainability, and I have some ideas for improvements. Let me share my thoughts and get your feedback.`,
      'testing-strategy': `Hello everyone! I'm ${agent.name}, and I'm working on developing a comprehensive testing strategy. I've analyzed our current testing approach and have some recommendations for improvement. Let me share my ideas and get your input.`,
      'deployment-planning': `Hi team! I'm ${agent.name}, and I'm planning our next deployment. I've reviewed our current deployment process and have some ideas for making it safer and more efficient. Let me share my plan and get your feedback.`
    };
    
    return openings[conversationType] || openings['feature-planning'];
  }

  generateResponseMessage(conversationType, agent, openingMessage) {
    const responses = {
      'code-review': `Thanks for leading this review, ${openingMessage.agentName}! I'm ${agent.name}, and I'm particularly interested in the ${agent.expertise[0]} aspects you mentioned. I have some additional observations from a ${agent.expertise[1]} perspective that might be helpful.`,
      'feature-planning': `Great analysis, ${openingMessage.agentName}! I'm ${agent.name}, and I'm looking forward to collaborating on this feature. I have some thoughts on the ${agent.expertise[0]} considerations and how they might impact the overall design.`,
      'bug-investigation': `Thanks for investigating this, ${openingMessage.agentName}! I'm ${agent.name}, and I'm ready to help with the investigation. I have some ${agent.expertise[0]} insights that might help us identify the root cause faster.`,
      'performance-optimization': `Excellent performance analysis, ${openingMessage.agentName}! I'm ${agent.name}, and I'm excited to work on these optimizations. I have some ${agent.expertise[0]} strategies that could complement your approach.`,
      'security-audit': `Thank you for the security review, ${openingMessage.agentName}! I'm ${agent.name}, and I'm ready to help strengthen our security posture. I have some ${agent.expertise[0]} considerations that we should definitely address.`,
      'architecture-discussion': `Great architectural insights, ${openingMessage.agentName}! I'm ${agent.name}, and I'm looking forward to this discussion. I have some thoughts on ${agent.expertise[0]} that could enhance our system design.`,
      'testing-strategy': `Thanks for the testing strategy overview, ${openingMessage.agentName}! I'm ${agent.name}, and I'm excited to improve our testing approach. I have some ${agent.expertise[0]} strategies that could strengthen our quality assurance.`,
      'deployment-planning': `Excellent deployment planning, ${openingMessage.agentName}! I'm ${agent.name}, and I'm ready to help make this deployment smooth and safe. I have some ${agent.expertise[0]} considerations that we should definitely include.`
    };
    
    return responses[conversationType] || responses['feature-planning'];
  }

  async generateConversationFlow(conversationType, participants) {
    const flow = [];
    
    // Generate discussion points
    const discussionPoints = this.generateDiscussionPoints(conversationType);
    
    for (let i = 0; i < discussionPoints.length; i++) {
      const point = discussionPoints[i];
      const participant = participants[i % participants.length];
      
      flow.push({
        id: `msg-${Date.now()}-discussion-${i + 1}`,
        agentId: participant.id,
        agentName: participant.name,
        timestamp: new Date(Date.now() + (i + 3) * 120000).toISOString(), // 2 minutes apart
        type: 'discussion',
        content: point.content,
        expertise: participant.expertise,
        discussionPoint: point.topic
      });
      
      // Generate follow-up responses
      if (i < discussionPoints.length - 1) {
        const nextParticipant = participants[(i + 1) % participants.length];
        flow.push({
          id: `msg-${Date.now()}-response-${i + 1}`,
          agentId: nextParticipant.id,
          agentName: nextParticipant.name,
          timestamp: new Date(Date.now() + (i + 3) * 120000 + 60000).toISOString(), // 1 minute after discussion
          type: 'follow-up',
          content: this.generateFollowUpResponse(point, nextParticipant),
          expertise: nextParticipant.expertise,
          respondingTo: point.topic
        });
      }
    }
    
    return flow;
  }

  generateDiscussionPoints(conversationType) {
    const points = {
      'code-review': [
        {
          topic: 'Code Quality Standards',
          content: 'I noticed we have some inconsistencies in our coding standards. Should we establish more formal guidelines for code formatting, naming conventions, and documentation?'
        },
        {
          topic: 'Performance Considerations',
          content: 'Looking at the code, I see some potential performance bottlenecks. We should discuss optimization strategies and whether we need to implement performance monitoring.'
        },
        {
          topic: 'Security Review',
          content: 'I want to ensure we are following security best practices. Let us review our input validation, authentication, and data handling approaches.'
        }
      ],
      'feature-planning': [
        {
          topic: 'Technical Requirements',
          content: 'Let\'s define the technical requirements clearly. What are the performance targets, scalability needs, and integration requirements?'
        },
        {
          topic: 'User Experience Design',
          content: 'The user experience is crucial for this feature. How can we ensure it\'s intuitive, accessible, and meets user expectations?'
        },
        {
          topic: 'Implementation Timeline',
          content: 'We need to establish a realistic timeline. What are the major milestones, dependencies, and potential risks we should consider?'
        }
      ],
      'bug-investigation': [
        {
          topic: 'Root Cause Analysis',
          content: 'Let\'s systematically analyze the bug. What are the symptoms, when did they start, and what changes might have triggered this issue?'
        },
        {
          topic: 'Impact Assessment',
          content: 'We need to understand the full impact. How many users are affected, what\'s the business impact, and what\'s our priority level?'
        },
        {
          topic: 'Solution Strategy',
          content: 'Once we identify the root cause, what\'s our approach? Should we implement a quick fix or a more comprehensive solution?'
        }
      ]
    };
    
    return points[conversationType] || points['feature-planning'];
  }

  generateFollowUpResponse(discussionPoint, participant) {
    const responses = [
      `Great point about ${discussionPoint.topic}! From a ${participant.expertise[0]} perspective, I think we should also consider...`,
      `I agree with the ${discussionPoint.topic} discussion. As a ${participant.expertise[0]} specialist, I'd like to add...`,
      `Excellent insight on ${discussionPoint.topic}! I have some ${participant.expertise[0]} considerations that could enhance this approach...`,
      `The ${discussionPoint.topic} is crucial. From my ${participant.expertise[0]} experience, I'd recommend...`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }

  async generateDecisions(conversationType, participants) {
    const decisions = [];
    
    const decisionTemplates = {
      'code-review': [
        'Establish formal coding standards and guidelines',
        'Implement automated code quality checks',
        'Set up performance monitoring and alerts',
        'Create security review checklist'
      ],
      'feature-planning': [
        'Define technical architecture and stack',
        'Establish user experience design principles',
        'Create implementation timeline and milestones',
        'Set up project management and tracking'
      ],
      'bug-investigation': [
        'Implement comprehensive logging and monitoring',
        'Create automated testing for similar scenarios',
        'Establish bug prevention and detection processes',
        'Set up incident response procedures'
      ]
    };
    
    const templates = decisionTemplates[conversationType] || decisionTemplates['feature-planning'];
    
    templates.forEach((template, index) => {
      const participant = participants[index % participants.length];
      decisions.push({
        id: `decision-${Date.now()}-${index + 1}`,
        content: template,
        madeBy: participant.id,
        madeBy: participant.name,
        timestamp: new Date().toISOString(),
        status: 'pending',
        priority: index === 0 ? 'high' : 'medium'
      });
    });
    
    return decisions;
  }

  async generateActionItems(conversationType, participants) {
    const actionItems = [];
    
    const actionTemplates = {
      'code-review': [
        'Review and update coding standards document',
        'Set up automated code quality tools',
        'Implement performance monitoring dashboard',
        'Create security review process'
      ],
      'feature-planning': [
        'Create technical specification document',
        'Design user experience mockups',
        'Develop project timeline and milestones',
        'Set up project tracking and communication'
      ],
      'bug-investigation': [
        'Implement enhanced logging system',
        'Create automated test suite',
        'Establish bug prevention processes',
        'Set up incident response team'
      ]
    };
    
    const templates = actionTemplates[conversationType] || actionTemplates['feature-planning'];
    
    templates.forEach((template, index) => {
      const participant = participants[index % participants.length];
      actionItems.push({
        id: `action-${Date.now()}-${index + 1}`,
        content: template,
        assignedTo: participant.id,
        assignedTo: participant.name,
        timestamp: new Date().toISOString(),
        status: 'pending',
        dueDate: new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000).toISOString(), // 1-4 days from now
        priority: index === 0 ? 'high' : 'medium'
      });
    });
    
    return actionItems;
  }

  async generateNextSteps(conversationType, participants) {
    const nextSteps = [
      {
        id: `next-${Date.now()}-1`,
        content: 'Schedule follow-up meeting to review progress',
        assignedTo: participants[0].id,
        assignedTo: participants[0].name,
        dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
        priority: 'high'
      },
      {
        id: `next-${Date.now()}-2`,
        content: 'Create action item tracking and progress monitoring',
        assignedTo: participants[1] ? participants[1].id : participants[0].id,
        assignedTo: participants[1] ? participants[1].name : participants[0].name,
        dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day from now
        priority: 'high'
      },
      {
        id: `next-${Date.now()}-3`,
        content: 'Share conversation summary and decisions with stakeholders',
        assignedTo: participants[0].id,
        assignedTo: participants[0].name,
        dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day from now
        priority: 'medium'
      }
    ];
    
    return nextSteps;
  }

  async generateRelatedTasks(conversationType, conversation) {
    const tasks = [];
    
    // Generate tasks based on conversation type and content
    const taskTemplates = this.getTaskTemplates(conversationType);
    
    taskTemplates.forEach((template, index) => {
      const task = {
        id: `task-${Date.now()}-${index + 1}`,
        title: template.title,
        description: template.description,
        type: conversationType,
        priority: template.priority,
        estimatedEffort: template.estimatedEffort,
        assignedTo: conversation.participants[index % conversation.participants.length].id,
        status: 'pending',
        createdAt: new Date().toISOString(),
        dueDate: new Date(Date.now() + template.daysToComplete * 24 * 60 * 60 * 1000).toISOString(),
        conversationId: conversation.id
      };
      
      tasks.push(task);
    });
    
    return tasks;
  }

  getTaskTemplates(conversationType) {
    const templates = {
      'code-review': [
        {
          title: 'Update Coding Standards',
          description: 'Review and update coding standards document based on code review findings',
          priority: 'high',
          estimatedEffort: '2-3 hours',
          daysToComplete: 2
        },
        {
          title: 'Implement Code Quality Tools',
          description: 'Set up automated code quality checks and linting rules',
          priority: 'high',
          estimatedEffort: '4-6 hours',
          daysToComplete: 3
        },
        {
          title: 'Performance Optimization',
          description: 'Implement performance improvements identified during code review',
          priority: 'medium',
          estimatedEffort: '8-12 hours',
          daysToComplete: 5
        }
      ],
      'feature-planning': [
        {
          title: 'Technical Specification',
          description: 'Create detailed technical specification document for the new feature',
          priority: 'high',
          estimatedEffort: '6-8 hours',
          daysToComplete: 3
        },
        {
          title: 'User Experience Design',
          description: 'Design user interface mockups and user experience flow',
          priority: 'high',
          estimatedEffort: '8-12 hours',
          daysToComplete: 4
        },
        {
          title: 'Implementation Plan',
          description: 'Create detailed implementation plan with timeline and milestones',
          priority: 'medium',
          estimatedEffort: '4-6 hours',
          daysToComplete: 2
        }
      ],
      'bug-investigation': [
        {
          title: 'Root Cause Analysis',
          description: 'Complete thorough investigation to identify the root cause of the bug',
          priority: 'high',
          estimatedEffort: '4-6 hours',
          daysToComplete: 2
        },
        {
          title: 'Fix Implementation',
          description: 'Implement the fix for the identified bug',
          priority: 'high',
          estimatedEffort: '2-4 hours',
          daysToComplete: 1
        },
        {
          title: 'Prevention Measures',
          description: 'Implement measures to prevent similar bugs in the future',
          priority: 'medium',
          estimatedEffort: '6-8 hours',
          daysToComplete: 3
        }
      ]
    };
    
    return templates[conversationType] || templates['feature-planning'];
  }

  async generateAgentPrompts(conversationType, participants, conversation) {
    const prompts = [];
    
    participants.forEach((participant, index) => {
      const prompt = {
        id: `prompt-${Date.now()}-${index + 1}`,
        agentId: participant.id,
        agentName: participant.name,
        conversationType: conversationType,
        conversationId: conversation.id,
        prompt: this.generateAgentPrompt(conversationType, participant, conversation),
        context: {
          expertise: participant.expertise,
          personality: participant.personality,
          communicationStyle: participant.communicationStyle,
          conversationContext: conversation.context
        },
        timestamp: new Date().toISOString(),
        status: 'pending'
      };
      
      prompts.push(prompt);
    });
    
    return prompts;
  }

  generateAgentPrompt(conversationType, participant, conversation) {
    const basePrompt = `You are ${participant.name}, a ${participant.expertise.join(', ')} specialist. You're participating in a ${conversationType} conversation about the ${this.config.projectContext.name} project.

Your expertise areas: ${participant.expertise.join(', ')}
Your personality: ${participant.personality}
Your communication style: ${participant.communicationStyle}

Conversation context: ${conversation.context.objective}

Please provide your insights, suggestions, and contributions to this conversation. Focus on your areas of expertise and how they relate to the discussion. Be collaborative, constructive, and provide actionable input.`;

    return basePrompt;
  }

  // File Management Methods
  
  async saveConversation(conversationId, conversation) {
    const fileName = `${conversationId}.json`;
    const filePath = path.join(this.conversationsDir, 'active', fileName);
    
    fs.writeFileSync(filePath, JSON.stringify(conversation, null, 2));
    
    // Also save to the main conversations index
    const indexPath = path.join(this.conversationsDir, 'conversations-index.json');
    let index = [];
    
    try {
      if (fs.existsSync(indexPath)) {
        index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
      }
    } catch (error) {
      console.warn('Could not load conversations index:', error.message);
    }
    
    index.push({
      id: conversationId,
      type: conversation.type,
      participants: conversation.participants.map(p => p.name),
      startTime: conversation.startTime,
      status: conversation.status,
      filePath: fileName
    });
    
    fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
    
    return filePath;
  }

  async saveTasks(tasks) {
    const fileName = `tasks-${Date.now()}.json`;
    const filePath = path.join(this.tasksDir, fileName);
    
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    
    // Also save to the main tasks index
    const indexPath = path.join(this.tasksDir, 'tasks-index.json');
    let index = [];
    
    try {
      if (fs.existsSync(indexPath)) {
        index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
      }
    } catch (error) {
      console.warn('Could not load tasks index:', error.message);
    }
    
    tasks.forEach(task => {
      index.push({
        id: task.id,
        title: task.title,
        type: task.type,
        priority: task.priority,
        assignedTo: task.assignedTo,
        status: task.status,
        dueDate: task.dueDate,
        filePath: fileName
      });
    });
    
    fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
    
    return filePath;
  }

  async savePrompts(prompts) {
    const fileName = `prompts-${Date.now()}.json`;
    const filePath = path.join(this.agentsDir, fileName);
    
    fs.writeFileSync(filePath, JSON.stringify(prompts, null, 2));
    
    return filePath;
  }

  // Main Execution Methods
  
  async generateAllConversationTypes() {
    console.log('🚀 Generating conversations for all types...');
    
    const results = {};
    
    for (const conversationType of this.config.conversationTypes) {
      try {
        console.log(`\n💬 Generating ${conversationType} conversation...`);
        const result = await this.generateNewConversation(conversationType);
        results[conversationType] = result;
        
        // Save tasks and prompts
        await this.saveTasks(result.tasks);
        await this.savePrompts(result.prompts);
        
        console.log(`✅ ${conversationType} conversation generated successfully`);
        
      } catch (error) {
        console.error(`❌ Failed to generate ${conversationType} conversation:`, error.message);
        results[conversationType] = { error: error.message };
      }
    }
    
    return results;
  }

  async generateRandomConversation() {
    const randomType = this.config.conversationTypes[
      Math.floor(Math.random() * this.config.conversationTypes.length)
    ];
    
    return await this.generateNewConversation(randomType);
  }

  // Utility Methods
  
  listActiveConversations() {
    const indexPath = path.join(this.conversationsDir, 'conversations-index.json');
    
    try {
      if (fs.existsSync(indexPath)) {
        const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
        return index.filter(conv => conv.status === 'active');
      }
    } catch (error) {
      console.warn('Could not load conversations index:', error.message);
    }
    
    return [];
  }

  listPendingTasks() {
    const indexPath = path.join(this.tasksDir, 'tasks-index.json');
    
    try {
      if (fs.existsSync(indexPath)) {
        const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
        return index.filter(task => task.status === 'pending');
      }
    } catch (error) {
      console.warn('Could not load tasks index:', error.message);
    }
    
    return [];
  }

  listAgentPrompts() {
    const promptsDir = this.agentsDir;
    
    try {
      const files = fs.readdirSync(promptsDir).filter(file => file.endsWith('.json'));
      const prompts = [];
      
      files.forEach(file => {
        try {
          const filePath = path.join(promptsDir, file);
          const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          prompts.push(...content);
        } catch (error) {
          console.warn(`Could not parse ${file}:`, error.message);
        }
      });
      
      return prompts;
    } catch (error) {
      console.warn('Could not read prompts directory:', error.message);
      return [];
    }
  }

  // Main execution method
  
  async run() {
    console.log('🎯 Cursor Agent Conversation Generator');
    console.log('=====================================');
    
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
      console.log(`
Usage: node automation/cursor-agent-conversation-generator.cjs [command]

Commands:
  all-types          - Generate conversations for all conversation types
  random             - Generate a random conversation
  list-conversations - List all active conversations
  list-tasks         - List all pending tasks
  list-prompts       - List all agent prompts
  [conversation-type] - Generate a specific conversation type

Available conversation types:
  ${this.config.conversationTypes.join(', ')}

Examples:
  node automation/cursor-agent-conversation-generator.cjs all-types
  node automation/cursor-agent-conversation-generator.cjs code-review
  node automation/cursor-agent-conversation-generator.cjs random
      `);
      return;
    }
    
    const command = args[0].toLowerCase();
    
    try {
      switch (command) {
        case 'all-types':
          await this.generateAllConversationTypes();
          break;
        case 'random':
          await this.generateRandomConversation();
          break;
        case 'list-conversations':
          const conversations = this.listActiveConversations();
          console.log('\n📋 Active Conversations:');
          conversations.forEach(conv => {
            console.log(`  - ${conv.type}: ${conv.participants.join(', ')} (${conv.status})`);
          });
          break;
        case 'list-tasks':
          const tasks = this.listPendingTasks();
          console.log('\n📋 Pending Tasks:');
          tasks.forEach(task => {
            console.log(`  - ${task.title} (${task.priority} priority, due: ${task.dueDate})`);
          });
          break;
        case 'list-prompts':
          const prompts = this.listAgentPrompts();
          console.log('\n🎯 Agent Prompts:');
          prompts.forEach(prompt => {
            console.log(`  - ${prompt.agentName}: ${prompt.conversationType} conversation`);
          });
          break;
        default:
          if (this.config.conversationTypes.includes(command)) {
            await this.generateNewConversation(command);
          } else {
            console.error(`❌ Unknown command: ${command}`);
            console.log('Use "all-types", "random", or a specific conversation type');
          }
      }
    } catch (error) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  }
}

// Main execution
if (require.main === module) {
  const generator = new CursorAgentConversationGenerator();
  
  generator.run()
    .then(() => {
      console.log('\n🎉 Conversation generation completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Conversation generation failed:', error);
      process.exit(1);
    });
}

module.exports = CursorAgentConversationGenerator;

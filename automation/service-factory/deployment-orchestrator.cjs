#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const GENERATED_SERVICES_DIR = path.join(ROOT, 'generated-services');
const DEPLOYMENT_CONFIGS_DIR = path.join(ROOT, 'public', 'automation', 'deployments');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function readJson(p, f) { try { return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : f; } catch { return f; } }

class DeploymentOrchestrator {
  constructor() {
    this.deployments = {};
    this.cloudProviders = ['aws', 'gcp', 'azure', 'digitalocean'];
    this.deploymentTypes = ['container', 'serverless', 'vm', 'kubernetes'];
    ensureDir(DEPLOYMENT_CONFIGS_DIR);
  }

  async createDeploymentConfig(serviceName, options = {}) {
    console.log(`🚀 Creating deployment configuration for: ${serviceName}`);
    
    const servicePath = path.join(GENERATED_SERVICES_DIR, serviceName);
    if (!fs.existsSync(servicePath)) {
      throw new Error(`Service ${serviceName} not found`);
    }

    const config = {
      serviceName,
      timestamp: new Date().toISOString(),
      deploymentType: options.deploymentType || 'container',
      cloudProvider: options.cloudProvider || 'aws',
      regions: options.regions || ['us-west-2'],
      scaling: {
        minInstances: options.minInstances || 2,
        maxInstances: options.maxInstances || 10,
        targetCPU: options.targetCPU || 70,
        targetMemory: options.targetMemory || 80
      },
      monitoring: {
        enabled: true,
        metrics: ['cpu', 'memory', 'requests', 'errors'],
        alerts: ['high_cpu', 'high_memory', 'high_error_rate']
      },
      security: {
        ssl: true,
        secrets: true,
        vpc: true,
        firewall: true
      },
      backup: {
        enabled: true,
        frequency: 'daily',
        retention: '30 days'
      }
    };

    // Generate deployment files based on type and cloud provider
    await this.generateDeploymentFiles(serviceName, config);
    
    // Save configuration
    const configFile = path.join(DEPLOYMENT_CONFIGS_DIR, `${serviceName}-deployment.json`);
    fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
    
    this.deployments[serviceName] = config;
    
    console.log(`✅ Deployment configuration created for ${serviceName}`);
    return config;
  }

  async generateDeploymentFiles(serviceName, config) {
    const servicePath = path.join(GENERATED_SERVICES_DIR, serviceName);
    const deploymentPath = path.join(servicePath, 'deployment');
    ensureDir(deploymentPath);

    switch (config.deploymentType) {
      case 'container':
        await this.generateContainerDeployment(serviceName, config, deploymentPath);
        break;
      case 'serverless':
        await this.generateServerlessDeployment(serviceName, config, deploymentPath);
        break;
      case 'kubernetes':
        await this.generateKubernetesDeployment(serviceName, config, deploymentPath);
        break;
      case 'vm':
        await this.generateVMDeployment(serviceName, config, deploymentPath);
        break;
      default:
        throw new Error(`Unsupported deployment type: ${config.deploymentType}`);
    }
  }

  async generateContainerDeployment(serviceName, config, deploymentPath) {
    console.log(`🐳 Generating container deployment for ${serviceName}`);

    // Generate cloud-specific deployment files
    switch (config.cloudProvider) {
      case 'aws':
        await this.generateAWSContainerDeployment(serviceName, config, deploymentPath);
        break;
      case 'gcp':
        await this.generateGCPContainerDeployment(serviceName, config, deploymentPath);
        break;
      case 'azure':
        await this.generateAzureContainerDeployment(serviceName, config, deploymentPath);
        break;
      case 'digitalocean':
        await this.generateDigitalOceanContainerDeployment(serviceName, config, deploymentPath);
        break;
      default:
        throw new Error(`Unsupported cloud provider: ${config.cloudProvider}`);
    }
  }

  async generateAWSContainerDeployment(serviceName, config, deploymentPath) {
    // ECS Task Definition
    const taskDefinition = {
      family: serviceName,
      networkMode: 'awsvpc',
      requiresCompatibilities: ['FARGATE'],
      cpu: '256',
      memory: '512',
      executionRoleArn: 'arn:aws:iam::ACCOUNT:role/ecsTaskExecutionRole',
      taskRoleArn: 'arn:aws:iam::ACCOUNT:role/ecsTaskRole',
      containerDefinitions: [
        {
          name: serviceName,
          image: `${serviceName}:latest`,
          portMappings: [
            {
              containerPort: 8000,
              protocol: 'tcp'
            }
          ],
          environment: [
            {
              name: 'ENVIRONMENT',
              value: 'production'
            }
          ],
          logConfiguration: {
            logDriver: 'awslogs',
            options: {
              'awslogs-group': `/ecs/${serviceName}`,
              'awslogs-region': config.regions[0],
              'awslogs-stream-prefix': 'ecs'
            }
          }
        }
      ]
    };

    // ECS Service Definition
    const serviceDefinition = {
      serviceName: `${serviceName}-service`,
      cluster: `${serviceName}-cluster`,
      taskDefinition: serviceName,
      desiredCount: config.scaling.minInstances,
      launchType: 'FARGATE',
      networkConfiguration: {
        awsvpcConfiguration: {
          subnets: ['subnet-12345678', 'subnet-87654321'],
          securityGroups: ['sg-12345678'],
          assignPublicIp: 'ENABLED'
        }
      },
      loadBalancers: [
        {
          targetGroupArn: `arn:aws:elasticloadbalancing:${config.regions[0]}:ACCOUNT:targetgroup/${serviceName}-tg/12345678901234567890`,
          containerName: serviceName,
          containerPort: 8000
        }
      ]
    };

    // Auto Scaling Policy
    const autoScalingPolicy = {
      PolicyName: `${serviceName}-scaling-policy`,
      ServiceNamespace: 'ecs',
      ResourceId: `service/${serviceName}-cluster/${serviceName}-service`,
      ScalableDimension: 'ecs:service:DesiredCount',
      PolicyType: 'TargetTrackingScaling',
      TargetTrackingScalingPolicyConfiguration: {
        TargetValue: config.scaling.targetCPU,
        PredefinedMetricSpecification: {
          PredefinedMetricType: 'ECSServiceAverageCPUUtilization'
        },
        ScaleOutCooldown: 300,
        ScaleInCooldown: 300
      }
    };

    // Write deployment files
    fs.writeFileSync(
      path.join(deploymentPath, 'aws-ecs-task-definition.json'),
      JSON.stringify(taskDefinition, null, 2)
    );

    fs.writeFileSync(
      path.join(deploymentPath, 'aws-ecs-service.json'),
      JSON.stringify(serviceDefinition, null, 2)
    );

    fs.writeFileSync(
      path.join(deploymentPath, 'aws-auto-scaling-policy.json'),
      JSON.stringify(autoScalingPolicy, null, 2)
    );

    // Generate Terraform configuration
    await this.generateTerraformConfig(serviceName, config, deploymentPath, 'aws');
  }

  async generateGCPContainerDeployment(serviceName, config, deploymentPath) {
    // Cloud Run Service
    const cloudRunService = {
      apiVersion: 'serving.knative.dev/v1',
      kind: 'Service',
      metadata: {
        name: serviceName,
        namespace: 'default'
      },
      spec: {
        template: {
          metadata: {
            annotations: {
              'autoscaling.knative.dev/minScale': config.scaling.minInstances.toString(),
              'autoscaling.knative.dev/maxScale': config.scaling.maxInstances.toString()
            }
          },
          spec: {
            containers: [
              {
                image: `gcr.io/PROJECT_ID/${serviceName}:latest`,
                ports: [
                  {
                    containerPort: 8000
                  }
                ],
                env: [
                  {
                    name: 'ENVIRONMENT',
                    value: 'production'
                  }
                ],
                resources: {
                  limits: {
                    cpu: '1000m',
                    memory: '512Mi'
                  }
                }
              }
            ]
          }
        }
      }
    };

    // Write deployment files
    fs.writeFileSync(
      path.join(deploymentPath, 'gcp-cloud-run.yaml'),
      JSON.stringify(cloudRunService, null, 2)
    );

    // Generate Terraform configuration
    await this.generateTerraformConfig(serviceName, config, deploymentPath, 'gcp');
  }

  async generateAzureContainerDeployment(serviceName, config, deploymentPath) {
    // Azure Container Instances
    const containerInstance = {
      apiVersion: '2019-12-01',
      type: 'Microsoft.ContainerInstance/containerGroups',
      name: serviceName,
      location: config.regions[0],
      properties: {
        containers: [
          {
            name: serviceName,
            properties: {
              image: `${serviceName}:latest`,
              ports: [
                {
                  port: 8000
                }
              ],
              environmentVariables: [
                {
                  name: 'ENVIRONMENT',
                  value: 'production'
                }
              ],
              resources: {
                requests: {
                  memoryInGB: 0.5,
                  cpu: 0.5
                }
              }
            }
          }
        ],
        osType: 'Linux',
        restartPolicy: 'Always',
        ipAddress: {
          type: 'Public',
          ports: [
            {
              protocol: 'tcp',
              port: 8000
            }
          ]
        }
      }
    };

    // Write deployment files
    fs.writeFileSync(
      path.join(deploymentPath, 'azure-container-instance.json'),
      JSON.stringify(containerInstance, null, 2)
    );

    // Generate Terraform configuration
    await this.generateTerraformConfig(serviceName, config, deploymentPath, 'azure');
  }

  async generateDigitalOceanContainerDeployment(serviceName, config, deploymentPath) {
    // DigitalOcean App Platform
    const appSpec = {
      name: serviceName,
      region: config.regions[0],
      services: [
        {
          name: serviceName,
          source_dir: '/',
          github: {
            repo: `username/${serviceName}`,
            branch: 'main'
          },
          run_command: 'npm start',
          environment_slug: 'node-js',
          instance_count: config.scaling.minInstances,
          instance_size_slug: 'basic-xxs',
          routes: [
            {
              path: '/'
            }
          ],
          health_check: {
            http_path: '/health'
          }
        }
      ],
      databases: [
        {
          name: `${serviceName}-db`,
          engine: 'PG',
          version: '12',
          size: 'db-s-1vcpu-1gb'
        }
      ]
    };

    // Write deployment files
    fs.writeFileSync(
      path.join(deploymentPath, 'digitalocean-app.yaml'),
      JSON.stringify(appSpec, null, 2)
    );
  }

  async generateServerlessDeployment(serviceName, config, deploymentPath) {
    console.log(`⚡ Generating serverless deployment for ${serviceName}`);

    switch (config.cloudProvider) {
      case 'aws':
        await this.generateAWSServerlessDeployment(serviceName, config, deploymentPath);
        break;
      case 'gcp':
        await this.generateGCPServerlessDeployment(serviceName, config, deploymentPath);
        break;
      case 'azure':
        await this.generateAzureServerlessDeployment(serviceName, config, deploymentPath);
        break;
      default:
        throw new Error(`Serverless not supported for ${config.cloudProvider}`);
    }
  }

  async generateAWSServerlessDeployment(serviceName, config, deploymentPath) {
    // SAM Template
    const samTemplate = {
      AWSTemplateFormatVersion: '2010-09-09',
      Transform: 'AWS::Serverless-2016-10-31',
      Description: `${serviceName} Serverless Application`,
      Resources: {
        [`${serviceName}Function`]: {
          Type: 'AWS::Serverless::Function',
          Properties: {
            CodeUri: './',
            Handler: 'index.handler',
            Runtime: 'nodejs18.x',
            Timeout: 30,
            MemorySize: 512,
            Environment: {
              Variables: {
                ENVIRONMENT: 'production'
              }
            },
            Events: {
              Api: {
                Type: 'Api',
                Properties: {
                  Path: '/',
                  Method: 'GET'
                }
              }
            }
          }
        }
      },
      Outputs: {
        [`${serviceName}Api`]: {
          Description: 'API Gateway endpoint URL',
          Value: {
            'Fn::Sub': 'https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com/Prod/'
          }
        }
      }
    };

    // Write SAM template
    fs.writeFileSync(
      path.join(deploymentPath, 'aws-sam-template.yaml'),
      JSON.stringify(samTemplate, null, 2)
    );
  }

  async generateKubernetesDeployment(serviceName, config, deploymentPath) {
    console.log(`☸️ Generating Kubernetes deployment for ${serviceName}`);

    // Deployment
    const deployment = {
      apiVersion: 'apps/v1',
      kind: 'Deployment',
      metadata: {
        name: serviceName,
        labels: {
          app: serviceName
        }
      },
      spec: {
        replicas: config.scaling.minInstances,
        selector: {
          matchLabels: {
            app: serviceName
          }
        },
        template: {
          metadata: {
            labels: {
              app: serviceName
            }
          },
          spec: {
            containers: [
              {
                name: serviceName,
                image: `${serviceName}:latest`,
                ports: [
                  {
                    containerPort: 8000
                  }
                ],
                env: [
                  {
                    name: 'ENVIRONMENT',
                    value: 'production'
                  }
                ],
                resources: {
                  requests: {
                    memory: '256Mi',
                    cpu: '250m'
                  },
                  limits: {
                    memory: '512Mi',
                    cpu: '500m'
                  }
                },
                livenessProbe: {
                  httpGet: {
                    path: '/health',
                    port: 8000
                  },
                  initialDelaySeconds: 30,
                  periodSeconds: 10
                },
                readinessProbe: {
                  httpGet: {
                    path: '/health',
                    port: 8000
                  },
                  initialDelaySeconds: 5,
                  periodSeconds: 5
                }
              }
            ]
          }
        }
      }
    };

    // Service
    const service = {
      apiVersion: 'v1',
      kind: 'Service',
      metadata: {
        name: `${serviceName}-service`
      },
      spec: {
        selector: {
          app: serviceName
        },
        ports: [
          {
            protocol: 'TCP',
            port: 80,
            targetPort: 8000
          }
        ],
        type: 'ClusterIP'
      }
    };

    // Horizontal Pod Autoscaler
    const hpa = {
      apiVersion: 'autoscaling/v2',
      kind: 'HorizontalPodAutoscaler',
      metadata: {
        name: `${serviceName}-hpa`
      },
      spec: {
        scaleTargetRef: {
          apiVersion: 'apps/v1',
          kind: 'Deployment',
          name: serviceName
        },
        minReplicas: config.scaling.minInstances,
        maxReplicas: config.scaling.maxInstances,
        metrics: [
          {
            type: 'Resource',
            resource: {
              name: 'cpu',
              target: {
                type: 'Utilization',
                averageUtilization: config.scaling.targetCPU
              }
            }
          },
          {
            type: 'Resource',
            resource: {
              name: 'memory',
              target: {
                type: 'Utilization',
                averageUtilization: config.scaling.targetMemory
              }
            }
          }
        ]
      }
    };

    // Write Kubernetes files
    fs.writeFileSync(
      path.join(deploymentPath, 'kubernetes-deployment.yaml'),
      JSON.stringify(deployment, null, 2)
    );

    fs.writeFileSync(
      path.join(deploymentPath, 'kubernetes-service.yaml'),
      JSON.stringify(service, null, 2)
    );

    fs.writeFileSync(
      path.join(deploymentPath, 'kubernetes-hpa.yaml'),
      JSON.stringify(hpa, null, 2)
    );
  }

  async generateVMDeployment(serviceName, config, deploymentPath) {
    console.log(`🖥️ Generating VM deployment for ${serviceName}`);

    // Generate cloud-specific VM configurations
    switch (config.cloudProvider) {
      case 'aws':
        await this.generateAWSVMDeployment(serviceName, config, deploymentPath);
        break;
      case 'gcp':
        await this.generateGCPVMDeployment(serviceName, config, deploymentPath);
        break;
      case 'azure':
        await this.generateAzureVMDeployment(serviceName, config, deploymentPath);
        break;
      case 'digitalocean':
        await this.generateDigitalOceanVMDeployment(serviceName, config, deploymentPath);
        break;
      default:
        throw new Error(`VM deployment not supported for ${config.cloudProvider}`);
    }
  }

  async generateAWSVMDeployment(serviceName, config, deploymentPath) {
    // CloudFormation template for EC2
    const cloudFormation = {
      AWSTemplateFormatVersion: '2010-09-09',
      Description: `${serviceName} EC2 Instance`,
      Parameters: {
        InstanceType: {
          Type: 'String',
          Default: 't3.micro',
          Description: 'EC2 instance type'
        },
        KeyName: {
          Type: 'AWS::EC2::KeyPair::KeyName',
          Description: 'Name of an existing EC2 KeyPair'
        }
      },
      Resources: {
        [`${serviceName}Instance`]: {
          Type: 'AWS::EC2::Instance',
          Properties: {
            InstanceType: { Ref: 'InstanceType' },
            KeyName: { Ref: 'KeyName' },
            ImageId: 'ami-0c02fb55956c7d316',
            SecurityGroups: [`${serviceName}-sg`],
            UserData: {
              'Fn::Base64': {
                'Fn::Sub': [
                  '#!/bin/bash\n',
                  'yum update -y\n',
                  'yum install -y docker\n',
                  'systemctl start docker\n',
                  'systemctl enable docker\n',
                  'docker pull ${Image}\n',
                  'docker run -d -p 80:8000 ${Image}\n'
                ].join(''),
                Image: `${serviceName}:latest`
              }
            }
          }
        },
        [`${serviceName}SecurityGroup`]: {
          Type: 'AWS::EC2::SecurityGroup',
          Properties: {
            GroupDescription: `Security group for ${serviceName}`,
            SecurityGroupIngress: [
              {
                IpProtocol: 'tcp',
                FromPort: 22,
                ToPort: 22,
                CidrIp: '0.0.0.0/0'
              },
              {
                IpProtocol: 'tcp',
                FromPort: 80,
                ToPort: 80,
                CidrIp: '0.0.0.0/0'
              }
            ]
          }
        }
      },
      Outputs: {
        [`${serviceName}PublicIP`]: {
          Description: 'Public IP address of the instance',
          Value: { 'Fn::GetAtt': [`${serviceName}Instance`, 'PublicIp'] }
        }
      }
    };

    // Write CloudFormation template
    fs.writeFileSync(
      path.join(deploymentPath, 'aws-cloudformation.json'),
      JSON.stringify(cloudFormation, null, 2)
    );
  }

  async generateTerraformConfig(serviceName, config, deploymentPath, cloudProvider) {
    console.log(`🏗️ Generating Terraform configuration for ${cloudProvider}`);

    const terraformDir = path.join(deploymentPath, 'terraform');
    ensureDir(terraformDir);

    // Main configuration
    const mainTf = this.generateTerraformMain(serviceName, config, cloudProvider);
    const variablesTf = this.generateTerraformVariables(serviceName, config, cloudProvider);
    const outputsTf = this.generateTerraformOutputs(serviceName, config, cloudProvider);

    fs.writeFileSync(path.join(terraformDir, 'main.tf'), mainTf);
    fs.writeFileSync(path.join(terraformDir, 'variables.tf'), variablesTf);
    fs.writeFileSync(path.join(terraformDir, 'outputs.tf'), outputsTf);
  }

  generateTerraformMain(serviceName, config, cloudProvider) {
    switch (cloudProvider) {
      case 'aws':
        return `terraform {
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_ecs_cluster" "main" {
  name = "\${var.service_name}-cluster"
}

resource "aws_ecs_service" "main" {
  name            = "\${var.service_name}-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.main.arn
  desired_count   = var.min_instances
}

resource "aws_ecs_task_definition" "main" {
  family                   = "\${var.service_name}"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 256
  memory                   = 512

  container_definitions = jsonencode([
    {
      name  = "\${var.service_name}"
      image = "\${var.container_image}"
      portMappings = [{ containerPort = 8000 }]
    }
  ])
}`;
      
      case 'gcp':
        return `terraform {
  required_providers {
    google = { source = "hashicorp/google", version = "~> 4.0" }
  }
}

provider "google" {
  project = var.gcp_project
  region  = var.gcp_region
}

resource "google_cloud_run_service" "main" {
  name     = var.service_name
  location = var.gcp_region

  template {
    spec {
      containers {
        image = var.container_image
        ports {
          container_port = 8000
        }
      }
    }
  }
}`;
      
      default:
        return `# Terraform configuration for ${cloudProvider}`;
    }
  }

  generateTerraformVariables(serviceName, config, cloudProvider) {
    switch (cloudProvider) {
      case 'aws':
        return `variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "${config.regions[0]}"
}

variable "service_name" {
  description = "Name of the service"
  type        = string
  default     = "${serviceName}"
}

variable "container_image" {
  description = "Container image URI"
  type        = string
  default     = "${serviceName}:latest"
}

variable "min_instances" {
  description = "Minimum number of instances"
  type        = number
  default     = ${config.scaling.minInstances}
}

variable "max_instances" {
  description = "Maximum number of instances"
  type        = number
  default     = ${config.scaling.maxInstances}
}`;
      
      case 'gcp':
        return `variable "gcp_project" {
  description = "GCP project ID"
  type        = string
}

variable "gcp_region" {
  description = "GCP region"
  type        = string
  default     = "${config.regions[0]}"
}

variable "service_name" {
  description = "Name of the service"
  type        = string
  default     = "${serviceName}"
}

variable "container_image" {
  description = "Container image URI"
  type        = string
  default     = "${serviceName}:latest"
}`;
      
      default:
        return `# Variables for ${cloudProvider}`;
    }
  }

  generateTerraformOutputs(serviceName, config, cloudProvider) {
    switch (cloudProvider) {
      case 'aws':
        return `output "service_url" {
  description = "URL of the service"
  value       = "http://\${aws_ecs_service.main.name}"
}

output "cluster_name" {
  description = "Name of the ECS cluster"
  value       = aws_ecs_cluster.main.name
}`;
      
      case 'gcp':
        return `output "service_url" {
  description = "URL of the Cloud Run service"
  value       = google_cloud_run_service.main.status[0].url
}`;
      
      default:
        return `# Outputs for ${cloudProvider}`;
    }
  }

  async deployService(serviceName, environment = 'production') {
    console.log(`🚀 Deploying ${serviceName} to ${environment}...`);
    
    const config = this.deployments[serviceName];
    if (!config) {
      throw new Error(`No deployment configuration found for ${serviceName}`);
    }

    const deploymentPath = path.join(GENERATED_SERVICES_DIR, serviceName, 'deployment');
    
    try {
      // Generate deployment script
      const deployScript = this.generateDeployScript(serviceName, config, environment);
      const scriptPath = path.join(deploymentPath, 'deploy.sh');
      
      fs.writeFileSync(scriptPath, deployScript);
      fs.chmodSync(scriptPath, '755');
      
      console.log(`✅ Deployment script generated: ${scriptPath}`);
      console.log(`📋 Next steps:`);
      console.log(`   1. Review the deployment configuration in ${deploymentPath}`);
      console.log(`   2. Run: cd ${deploymentPath} && ./deploy.sh`);
      console.log(`   3. Monitor deployment progress`);
      
      return scriptPath;
      
    } catch (error) {
      console.error(`❌ Failed to generate deployment script: ${error.message}`);
      throw error;
    }
  }

  generateDeployScript(serviceName, config, environment) {
    const script = `#!/bin/bash

# Deployment script for ${serviceName}
# Environment: ${environment}
# Cloud Provider: ${config.cloudProvider}
# Deployment Type: ${config.deploymentType}

set -e

echo "🚀 Starting deployment of ${serviceName} to ${environment}..."

# Check prerequisites
command -v docker >/dev/null 2>&1 || { echo "❌ Docker is required but not installed"; exit 1; }
command -v kubectl >/dev/null 2>&1 || { echo "⚠️  kubectl not found (required for Kubernetes deployment)"; }

# Build and push container image
echo "📦 Building container image..."
docker build -t ${serviceName}:latest .
docker tag ${serviceName}:latest ${serviceName}:${environment}

# Deploy based on type
case "${config.deploymentType}" in
  "container")
    echo "🐳 Deploying as container..."
    docker-compose -f docker-compose.yml up -d
    ;;
  "kubernetes")
    echo "☸️  Deploying to Kubernetes..."
    kubectl apply -f kubernetes-deployment.yaml
    kubectl apply -f kubernetes-service.yaml
    kubectl apply -f kubernetes-hpa.yaml
    ;;
  "serverless")
    echo "⚡ Deploying as serverless..."
    # Add serverless deployment commands
    ;;
  *)
    echo "❌ Unsupported deployment type: ${config.deploymentType}"
    exit 1
    ;;
esac

echo "✅ Deployment complete!"
echo "🔍 Checking service health..."

# Wait for service to be ready
sleep 10

# Health check
curl -f http://localhost:8000/health || echo "⚠️  Health check failed"

echo "🎉 ${serviceName} deployed successfully to ${environment}!"
`;

    return script;
  }

  async listDeployments() {
    return Object.keys(this.deployments).map(name => ({
      name,
      ...this.deployments[name]
    }));
  }

  async getDeploymentStatus(serviceName) {
    const config = this.deployments[serviceName];
    if (!config) {
      return { status: 'Not Found', message: `No deployment configuration for ${serviceName}` };
    }

    // Check if deployment files exist
    const deploymentPath = path.join(GENERATED_SERVICES_DIR, serviceName, 'deployment');
    const hasDeploymentFiles = fs.existsSync(deploymentPath);

    return {
      serviceName,
      status: hasDeploymentFiles ? 'Configured' : 'Not Configured',
      deploymentType: config.deploymentType,
      cloudProvider: config.cloudProvider,
      scaling: config.scaling,
      hasDeploymentFiles,
      deploymentPath: hasDeploymentFiles ? deploymentPath : null
    };
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new DeploymentOrchestrator();
  
  const command = process.argv[2] || 'help';
  const serviceName = process.argv[3];
  const options = {
    deploymentType: process.argv[4] || 'container',
    cloudProvider: process.argv[5] || 'aws',
    regions: process.argv[6] ? [process.argv[6]] : ['us-west-2'],
    minInstances: parseInt(process.argv[7]) || 2,
    maxInstances: parseInt(process.argv[8]) || 10
  };
  
  switch (command) {
    case 'create':
      if (!serviceName) {
        console.log('Usage: node deployment-orchestrator.cjs create <service-name> [deployment-type] [cloud-provider] [region] [min-instances] [max-instances]');
        process.exit(1);
      }
      orchestrator.createDeploymentConfig(serviceName, options);
      break;
      
    case 'deploy':
      if (!serviceName) {
        console.log('Usage: node deployment-orchestrator.cjs deploy <service-name> [environment]');
        process.exit(1);
      }
      const environment = process.argv[4] || 'production';
      orchestrator.deployService(serviceName, environment);
      break;
      
    case 'list':
      orchestrator.listDeployments().then(deployments => {
        console.log('📋 Deployments:');
        deployments.forEach(dep => {
          console.log(`  - ${dep.name}: ${dep.deploymentType} on ${dep.cloudProvider}`);
        });
      });
      break;
      
    case 'status':
      if (!serviceName) {
        console.log('Usage: node deployment-orchestrator.cjs status <service-name>');
        process.exit(1);
      }
      orchestrator.getDeploymentStatus(serviceName).then(status => {
        console.log(JSON.stringify(status, null, 2));
      });
      break;
      
    case 'help':
    default:
      console.log('Deployment Orchestrator - Available Commands:');
      console.log('  create <name> [type] [cloud] [region] [min] [max] - Create deployment config');
      console.log('  deploy <name> [env]                              - Deploy service');
      console.log('  list                                             - List all deployments');
      console.log('  status <name>                                    - Get deployment status');
      console.log('  help                                             - Show this help');
      break;
  }
}

module.exports = DeploymentOrchestrator;
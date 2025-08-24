import React from 'react';
import Layout from '../components/layout/Layout';
import { Eye, Sparkles, Zap, Target, Camera, Clock, CheckCircle, Image, Video, Search } from 'lucide-react';

export default function AIComputerVision2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-violet-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Revolutionary 2041 Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  AI Computer Vision
                </span>
                <br />
                <span className="text-white">2041</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of visual intelligence with AI systems that see, understand, and 
                analyze images and video with human-like perception and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  See the Future
                </button>
                <button className="px-8 py-4 border-2 border-violet-400 text-violet-400 font-semibold rounded-xl hover:bg-violet-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the cutting-edge capabilities that make AI Computer Vision 2041 the most 
                advanced visual intelligence platform ever created.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Advanced Object Detection",
                  description: "AI systems that identify and locate objects in images and video with pixel-perfect accuracy.",
                  color: "from-violet-500 to-purple-500"
                },
                {
                  icon: <Image className="w-8 h-8" />,
                  title: "Image Recognition",
                  description: "Deep understanding of image content, context, and meaning with human-like comprehension.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Video className="w-8 h-8" />,
                  title: "Video Analysis",
                  description: "Real-time video processing and analysis for motion detection and activity recognition.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Search className="w-8 h-8" />,
                  title: "Visual Search",
                  description: "Find similar images and objects across massive visual databases instantly.",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Real-time Processing",
                  description: "Instant visual analysis and response with minimal latency for live applications.",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Facial Recognition",
                  description: "Advanced facial analysis and recognition with emotion and expression understanding.",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-r from-violet-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Computer Vision Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive visual intelligence solutions that cover every aspect of image and video analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Object Detection", description: "Identify and locate objects in images and video" },
                { name: "Image Classification", description: "Categorize images into predefined classes" },
                { name: "Semantic Segmentation", description: "Pixel-level understanding of image content" },
                { name: "Instance Segmentation", description: "Individual object instance identification" },
                { name: "Facial Recognition", description: "Identify and analyze human faces" },
                { name: "Optical Character Recognition", description: "Extract text from images and documents" },
                { name: "Motion Detection", description: "Detect and track movement in video" },
                { name: "Image Generation", description: "Create and modify images with AI" }
              ].map((capability, index) => (
                <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-violet-500/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{capability.name}</h3>
                  <p className="text-gray-400 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Process */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Computer Vision Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Understand how our AI systems process and understand visual information with unprecedented accuracy.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: "Image Input",
                  description: "AI receives and preprocesses images and video from various sources and formats",
                  features: ["Image preprocessing", "Format normalization", "Quality enhancement"]
                },
                {
                  phase: "Feature Extraction",
                  description: "Advanced algorithms extract meaningful features and patterns from visual data",
                  features: ["Feature detection", "Pattern recognition", "Edge detection"]
                },
                {
                  phase: "Object Recognition",
                  description: "AI identifies and classifies objects, people, and scenes in images",
                  features: ["Object detection", "Classification", "Localization"]
                },
                {
                  phase: "Context Understanding",
                  description: "Deep understanding of visual context, relationships, and meaning",
                  features: ["Scene analysis", "Context interpretation", "Relationship mapping"]
                },
                {
                  phase: "Response Generation",
                  description: "Intelligent generation of insights, annotations, and actions based on visual analysis",
                  features: ["Insight generation", "Action recommendations", "Visual feedback"]
                }
              ].map((phase, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl">
                  <div className="lg:w-1/3 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full text-white text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{phase.phase}</h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {phase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Models */}
        <section className="py-20 px-4 bg-gradient-to-r from-violet-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Vision Models
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                State-of-the-art computer vision models and architectures for every type of visual analysis task.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Object Detection",
                  description: "Models for detecting and localizing objects in images and video with high accuracy.",
                  models: ["YOLO", "Faster R-CNN", "SSD", "RetinaNet", "EfficientDet"]
                },
                {
                  category: "Image Classification",
                  description: "Models for categorizing images into predefined classes and categories.",
                  models: ["ResNet", "EfficientNet", "Vision Transformer", "ConvNeXt", "Swin Transformer"]
                },
                {
                  category: "Semantic Segmentation",
                  description: "Models for pixel-level understanding and segmentation of image content.",
                  models: ["U-Net", "DeepLab", "PSPNet", "SegNet", "FCN"]
                },
                {
                  category: "Facial Recognition",
                  description: "Specialized models for face detection, recognition, and analysis.",
                  models: ["FaceNet", "DeepFace", "ArcFace", "RetinaFace", "BlazeFace"]
                },
                {
                  category: "Video Analysis",
                  description: "Models designed for understanding temporal information in video sequences.",
                  models: ["3D ResNet", "I3D", "SlowFast", "X3D", "Video Swin"]
                },
                {
                  category: "Image Generation",
                  description: "Models for creating, modifying, and manipulating images with AI.",
                  models: ["GANs", "VAEs", "Diffusion Models", "StyleGAN", "DALL-E"]
                }
              ].map((category, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-violet-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                    {category.models.map((model, modelIndex) => (
                      <div key={modelIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{model}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover how AI Computer Vision 2041 transforms industries across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Manufacturing",
                  description: "Quality control, defect detection, and production monitoring with AI-powered vision systems.",
                  applications: ["Quality inspection", "Defect detection", "Production monitoring"]
                },
                {
                  industry: "Healthcare",
                  description: "Medical imaging analysis, diagnosis assistance, and patient monitoring with computer vision.",
                  applications: ["Medical imaging", "Diagnosis support", "Patient monitoring"]
                },
                {
                  industry: "Retail",
                  description: "Inventory management, customer analytics, and security with intelligent vision systems.",
                  applications: ["Inventory tracking", "Customer analytics", "Security monitoring"]
                },
                {
                  industry: "Transportation",
                  description: "Autonomous vehicles, traffic monitoring, and safety systems with computer vision.",
                  applications: ["Autonomous driving", "Traffic analysis", "Safety systems"]
                },
                {
                  industry: "Security",
                  description: "Surveillance, access control, and threat detection with AI-powered vision.",
                  applications: ["Surveillance", "Access control", "Threat detection"]
                },
                {
                  industry: "Agriculture",
                  description: "Crop monitoring, disease detection, and yield optimization with computer vision.",
                  applications: ["Crop monitoring", "Disease detection", "Yield optimization"]
                }
              ].map((industry, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-violet-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.industry}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-gradient-to-r from-violet-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the incredible benefits of implementing AI Computer Vision 2041 in your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Automated Inspection",
                  description: "Automate quality control and inspection processes with AI-powered visual analysis.",
                  icon: <Eye className="w-8 h-8" />,
                  color: "from-violet-500 to-purple-500"
                },
                {
                  title: "Enhanced Security",
                  description: "Improve security and surveillance with intelligent threat detection and monitoring.",
                  icon: <Camera className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Cost Reduction",
                  description: "Reduce manual inspection costs while improving accuracy and consistency.",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "24/7 Monitoring",
                  description: "Enable round-the-clock visual monitoring and analysis without human intervention.",
                  icon: <Clock className="w-8 h-8" />,
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-violet-500/30 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to See the Future?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Transform your business with AI-powered computer vision that delivers 
              automated inspection, enhanced security, and intelligent visual analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-violet-400 text-violet-400 font-semibold rounded-xl hover:bg-violet-400 hover:text-black transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
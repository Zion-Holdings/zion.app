export interface VideoProject {
  id: string;
  name: string;
  description: string;
  status: 'draft' | 'processing' | 'completed' | 'failed';
  createdAt: Date;
  lastModified: Date;
  duration: number; // in seconds
  resolution: VideoResolution;
  format: VideoFormat;
  size: number; // in bytes
  thumbnailUrl?: string;
  previewUrl?: string;
  outputUrl?: string;
}

export interface VideoResolution {
  width: number;
  height: number;
  aspectRatio: string;
}

export interface VideoFormat {
  name: string;
  extension: string;
  codec: string;
  quality: 'low' | 'medium' | 'high' | 'ultra';
}

export interface VideoClip {
  id: string;
  name: string;
  startTime: number; // in seconds
  endTime: number; // in seconds
  duration: number; // in seconds
  source: 'upload' | 'stock' | 'generated';
  url: string;
  thumbnailUrl?: string;
  metadata: {
    fps: number;
    bitrate: number;
    codec: string;
    resolution: VideoResolution;
  };
}

export interface VideoEffect {
  id: string;
  name: string;
  type: 'filter' | 'transition' | 'animation' | 'overlay';
  parameters: Record<string, any>;
  startTime: number;
  endTime: number;
  intensity: number; // 0-100
}

export interface VideoTimeline {
  id: string;
  projectId: string;
  tracks: VideoTrack[];
  duration: number;
  fps: number;
}

export interface VideoTrack {
  id: string;
  type: 'video' | 'audio' | 'text' | 'overlay';
  clips: VideoClip[];
  effects: VideoEffect[];
  volume?: number; // for audio tracks
  opacity?: number; // for overlay tracks
}

export interface VideoExportOptions {
  format: VideoFormat;
  resolution: VideoResolution;
  quality: 'low' | 'medium' | 'high' | 'ultra';
  fps: number;
  bitrate: number;
  includeAudio: boolean;
  watermark?: string;
  customSettings?: Record<string, any>;
}

export interface VideoAnalytics {
  projectId: string;
  processingTime: number;
  outputSize: number;
  qualityScore: number;
  compressionRatio: number;
  userSatisfaction?: number;
}

class VideoEditingService {
  private projects: VideoProject[] = [];
  private clips: VideoClip[] = [];
  private effects: VideoEffect[] = [];
  private timelines: VideoTimeline[] = [];
  private analytics: VideoAnalytics[] = [];

  constructor() {
    this.initializeDefaultEffects();
  }

  private initializeDefaultEffects(): void {
    const defaultEffects: Omit<VideoEffect, 'id'>[] = [
      {
        name: 'Fade In',
        type: 'transition',
        parameters: { direction: 'in', style: 'linear' },
        startTime: 0,
        endTime: 2,
        intensity: 100
      },
      {
        name: 'Fade Out',
        type: 'transition',
        parameters: { direction: 'out', style: 'linear' },
        startTime: 0,
        endTime: 2,
        intensity: 100
      },
      {
        name: 'Sepia Filter',
        type: 'filter',
        parameters: { saturation: 0.5, contrast: 1.2, brightness: 0.9 },
        startTime: 0,
        endTime: 0,
        intensity: 75
      },
      {
        name: 'Zoom In',
        type: 'animation',
        parameters: { scale: 1.5, duration: 3, easing: 'ease-in-out' },
        startTime: 0,
        endTime: 3,
        intensity: 100
      },
      {
        name: 'Text Overlay',
        type: 'overlay',
        parameters: { 
          text: 'Sample Text', 
          font: 'Arial', 
          size: 24, 
          color: '#FFFFFF',
          position: 'center'
        },
        startTime: 0,
        endTime: 5,
        intensity: 100
      }
    ];

    defaultEffects.forEach(effect => {
      this.effects.push({
        ...effect,
        id: `effect_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      });
    });
  }

  async createProject(name: string, description: string, resolution: VideoResolution): Promise<VideoProject> {
    const project: VideoProject = {
      id: `project_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      description,
      status: 'draft',
      createdAt: new Date(),
      lastModified: new Date(),
      duration: 0,
      resolution,
      format: {
        name: 'MP4',
        extension: 'mp4',
        codec: 'H.264',
        quality: 'high'
      },
      size: 0
    };

    this.projects.push(project);
    return project;
  }

  async uploadVideo(file: any, projectId: string): Promise<VideoClip> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) {
      throw new Error('Project not found');
    }

    // Simulate video processing
    const duration = Math.random() * 300 + 30; // 30 seconds to 5.5 minutes
    const fps = [24, 25, 30, 60][Math.floor(Math.random() * 4)];
    const bitrate = Math.random() * 5000000 + 1000000; // 1-6 Mbps

    const clip: VideoClip = {
      id: `clip_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: file.name || 'video.mp4',
      startTime: 0,
      endTime: duration,
      duration,
      source: 'upload',
      url: typeof URL !== 'undefined' ? URL.createObjectURL(file) : `blob:${Date.now()}`,
      metadata: {
        fps,
        bitrate: Math.round(bitrate),
        codec: 'H.264',
        resolution: project.resolution
      }
    };

    this.clips.push(clip);
    
    // Update project
    project.duration = Math.max(project.duration, duration);
    project.size += file.size;
    project.lastModified = new Date();

    return clip;
  }

  async createTimeline(projectId: string): Promise<VideoTimeline> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) {
      throw new Error('Project not found');
    }

    const timeline: VideoTimeline = {
      id: `timeline_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      projectId,
      tracks: [
        {
          id: `track_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          type: 'video',
          clips: [],
          effects: []
        },
        {
          id: `track_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          type: 'audio',
          clips: [],
          effects: [],
          volume: 100
        }
      ],
      duration: project.duration,
      fps: 30
    };

    this.timelines.push(timeline);
    return timeline;
  }

  async addClipToTimeline(timelineId: string, trackId: string, clip: VideoClip, startTime: number): Promise<void> {
    const timeline = this.timelines.find(t => t.id === timelineId);
    if (!timeline) {
      throw new Error('Timeline not found');
    }

    const track = timeline.tracks.find(t => t.id === trackId);
    if (!track) {
      throw new Error('Track not found');
    }

    // Create a copy of the clip with timeline positioning
    const timelineClip: VideoClip = {
      ...clip,
      id: `timeline_clip_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      startTime,
      endTime: startTime + clip.duration
    };

    track.clips.push(timelineClip);
    
    // Update timeline duration
    timeline.duration = Math.max(timeline.duration, startTime + clip.duration);
  }

  async addEffectToTrack(timelineId: string, trackId: string, effect: Omit<VideoEffect, 'id'>): Promise<VideoEffect> {
    const timeline = this.timelines.find(t => t.id === timelineId);
    if (!timeline) {
      throw new Error('Timeline not found');
    }

    const track = timeline.tracks.find(t => t.id === trackId);
    if (!track) {
      throw new Error('Track not found');
    }

    const newEffect: VideoEffect = {
      ...effect,
      id: `effect_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    track.effects.push(newEffect);
    return newEffect;
  }

  async applyFilter(clipId: string, filterName: string, parameters: Record<string, any>): Promise<void> {
    const clip = this.clips.find(c => c.id === clipId);
    if (!clip) {
      throw new Error('Clip not found');
    }

    // Simulate applying filter
    console.log(`Applying ${filterName} filter to clip ${clip.name} with parameters:`, parameters);
    
    // In a real implementation, this would process the video
    // For now, we'll just log the action
  }

  async addTextOverlay(
    timelineId: string, 
    text: string, 
    startTime: number, 
    duration: number,
    style: {
      font?: string;
      size?: number;
      color?: string;
      position?: 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    } = {}
  ): Promise<VideoEffect> {
    const timeline = this.timelines.find(t => t.id === timelineId);
    if (!timeline) {
      throw new Error('Timeline not found');
    }

    // Create a new overlay track if it doesn't exist
    let overlayTrack = timeline.tracks.find(t => t.type === 'overlay');
    if (!overlayTrack) {
      overlayTrack = {
        id: `track_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        type: 'overlay',
        clips: [],
        effects: [],
        opacity: 100
      };
      timeline.tracks.push(overlayTrack);
    }

    const textEffect: VideoEffect = {
      id: `effect_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Text Overlay',
      type: 'overlay',
      parameters: {
        text,
        font: style.font || 'Arial',
        size: style.size || 24,
        color: style.color || '#FFFFFF',
        position: style.position || 'center'
      },
      startTime,
      endTime: startTime + duration,
      intensity: 100
    };

    overlayTrack.effects.push(textEffect);
    return textEffect;
  }

  async addTransition(
    timelineId: string,
    fromClipId: string,
    toClipId: string,
    transitionType: 'fade' | 'slide' | 'zoom' | 'dissolve',
    duration: number = 1
  ): Promise<VideoEffect> {
    const timeline = this.timelines.find(t => t.id === timelineId);
    if (!timeline) {
      throw new Error('Timeline not found');
    }

    const videoTrack = timeline.tracks.find(t => t.type === 'video');
    if (!videoTrack) {
      throw new Error('Video track not found');
    }

    const transitionEffect: VideoEffect = {
      id: `effect_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: `${transitionType.charAt(0).toUpperCase() + transitionType.slice(1)} Transition`,
      type: 'transition',
      parameters: {
        type: transitionType,
        duration,
        easing: 'ease-in-out'
      },
      startTime: 0,
      endTime: duration,
      intensity: 100
    };

    videoTrack.effects.push(transitionEffect);
    return transitionEffect;
  }

  async exportVideo(
    timelineId: string, 
    options: VideoExportOptions,
    onProgress?: (progress: number) => void
  ): Promise<{ outputUrl: string; analytics: VideoAnalytics }> {
    const timeline = this.timelines.find(t => t.id === timelineId);
    if (!timeline) {
      throw new Error('Timeline not found');
    }

    const project = this.projects.find(p => p.id === timeline.projectId);
    if (!project) {
      throw new Error('Project not found');
    }

    // Simulate export process
    const totalSteps = 100;
    let currentStep = 0;

    const exportInterval = setInterval(() => {
      currentStep += Math.random() * 10 + 5; // Random progress
      if (currentStep >= totalSteps) {
        currentStep = totalSteps;
        clearInterval(exportInterval);
      }
      
      if (onProgress) {
        onProgress(Math.min(currentStep / totalSteps, 1));
      }
    }, 100);

    // Wait for export to complete
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate output URL (in real app, this would be the processed video)
    const outputUrl = `https://ziontechgroup.com/videos/exported/${project.id}_${Date.now()}.${options.format.extension}`;
    
    // Update project status
    project.status = 'completed';
    project.outputUrl = outputUrl;
    project.lastModified = new Date();

    // Calculate analytics
    const processingTime = 2000; // 2 seconds in this simulation
    const outputSize = Math.round(project.size * 0.8); // Assume 20% compression
    const qualityScore = this.calculateQualityScore(options);
    const compressionRatio = project.size / outputSize;

    const analytics: VideoAnalytics = {
      projectId: project.id,
      processingTime,
      outputSize,
      qualityScore,
      compressionRatio,
      userSatisfaction: Math.random() * 20 + 80 // 80-100
    };

    this.analytics.push(analytics);

    return { outputUrl, analytics };
  }

  private calculateQualityScore(options: VideoExportOptions): number {
    let score = 100;
    
    // Resolution scoring
    if (options.resolution.width < 1280) score -= 20;
    else if (options.resolution.width < 1920) score -= 10;
    
    // Quality scoring
    if (options.quality === 'low') score -= 30;
    else if (options.quality === 'medium') score -= 15;
    else if (options.quality === 'high') score -= 5;
    
    // FPS scoring
    if (options.fps < 24) score -= 15;
    else if (options.fps < 30) score -= 5;
    
    // Bitrate scoring
    if (options.bitrate < 1000000) score -= 25;
    else if (options.bitrate < 5000000) score -= 10;
    
    return Math.max(0, score);
  }

  async getProjects(): Promise<VideoProject[]> {
    return [...this.projects];
  }

  async getProject(id: string): Promise<VideoProject | null> {
    return this.projects.find(p => p.id === id) || null;
  }

  async getClips(projectId?: string): Promise<VideoClip[]> {
    if (projectId) {
      return this.clips.filter(c => c.source === 'upload');
    }
    return [...this.clips];
  }

  async getEffects(): Promise<VideoEffect[]> {
    return [...this.effects];
  }

  async getTimeline(projectId: string): Promise<VideoTimeline | null> {
    return this.timelines.find(t => t.projectId === projectId) || null;
  }

  async getAnalytics(projectId?: string): Promise<VideoAnalytics[]> {
    if (projectId) {
      return this.analytics.filter(a => a.projectId === projectId);
    }
    return [...this.analytics];
  }

  async deleteProject(id: string): Promise<boolean> {
    const projectIndex = this.projects.findIndex(p => p.id === id);
    if (projectIndex === -1) {
      return false;
    }

    // Remove related data
    this.timelines = this.timelines.filter(t => t.projectId !== id);
    this.analytics = this.analytics.filter(a => a.projectId !== id);

    this.projects.splice(projectIndex, 1);
    return true;
  }

  async duplicateProject(id: string, newName: string): Promise<VideoProject> {
    const originalProject = this.projects.find(p => p.id === id);
    if (!originalProject) {
      throw new Error('Project not found');
    }

    const duplicatedProject: VideoProject = {
      ...originalProject,
      id: `project_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: newName,
      status: 'draft',
      createdAt: new Date(),
      lastModified: new Date(),
      outputUrl: undefined
    };

    this.projects.push(duplicatedProject);
    return duplicatedProject;
  }

  async generateThumbnail(videoUrl: string, time: number = 0): Promise<string> {
    // Simulate thumbnail generation
    // In a real implementation, this would extract a frame from the video
    const thumbnailUrl = `https://ziontechgroup.com/thumbnails/${Date.now()}_${Math.random().toString(36).substr(2, 9)}.jpg`;
    
    return thumbnailUrl;
  }

  async getVideoMetadata(videoUrl: string): Promise<{
    duration: number;
    resolution: VideoResolution;
    fps: number;
    bitrate: number;
    codec: string;
    size: number;
  }> {
    // Simulate metadata extraction
    return {
      duration: Math.random() * 300 + 30,
      resolution: {
        width: [1280, 1920, 2560, 3840][Math.floor(Math.random() * 4)],
        height: [720, 1080, 1440, 2160][Math.floor(Math.random() * 4)],
        aspectRatio: '16:9'
      },
      fps: [24, 25, 30, 60][Math.floor(Math.random() * 4)],
      bitrate: Math.random() * 5000000 + 1000000,
      codec: 'H.264',
      size: Math.random() * 100000000 + 10000000
    };
  }
}

export const videoEditingService = new VideoEditingService();
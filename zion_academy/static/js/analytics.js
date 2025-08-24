/**
 * Zion Academy Analytics Library
 * Tracks user behavior and interactions for content improvement
 */

class ZionAnalytics {
    constructor() {
        this.sessionId = this.getSessionId();
        this.userId = this.getUserId();
        this.baseUrl = '/api/analytics';
        this.trackingEnabled = true;
        this.eventQueue = [];
        this.flushInterval = 30000; // Flush events every 30 seconds
        
        this.init();
    }
    
    init() {
        // Start periodic flushing
        setInterval(() => this.flushEvents(), this.flushInterval);
        
        // Track page views
        this.trackPageView();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Track time spent on page
        this.startTimeTracking();
    }
    
    getSessionId() {
        let sessionId = localStorage.getItem('zion_session_id');
        if (!sessionId) {
            sessionId = 'anon_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('zion_session_id', sessionId);
        }
        return sessionId;
    }
    
    getUserId() {
        // Get user ID from page data or localStorage
        const userIdElement = document.querySelector('[data-user-id]');
        if (userIdElement) {
            return userIdElement.dataset.userId;
        }
        return localStorage.getItem('zion_user_id') || null;
    }
    
    trackEvent(eventType, eventData = {}, contentContext = {}) {
        if (!this.trackingEnabled) return;
        
        const event = {
            event_type: eventType,
            event_data: eventData,
            session_id: this.sessionId,
            user_id: this.userId,
            timestamp: new Date().toISOString(),
            ...contentContext
        };
        
        this.eventQueue.push(event);
        
        // Send immediately for important events
        if (['click', 'completion', 'enrollment'].includes(eventType)) {
            this.sendEvent(event);
        }
        
        // Log to console in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('Analytics Event:', event);
        }
    }
    
    trackPageView() {
        const path = window.location.pathname;
        const title = document.title;
        
        // Extract content context from URL
        const contentContext = this.extractContentContext(path);
        
        this.trackEvent('view', {
            path: path,
            title: title,
            referrer: document.referrer
        }, contentContext);
    }
    
    trackClick(element, eventData = {}) {
        const clickData = {
            element: element.tagName.toLowerCase(),
            element_id: element.id || null,
            element_class: element.className || null,
            text: element.textContent?.substring(0, 100) || null,
            ...eventData
        };
        
        const contentContext = this.getContentContext(element);
        this.trackEvent('click', clickData, contentContext);
    }
    
    trackTimeSpent(seconds, contentContext = {}) {
        this.trackEvent('time_spent', {
            seconds: seconds,
            page_url: window.location.href
        }, contentContext);
    }
    
    trackScroll(depth, contentContext = {}) {
        this.trackEvent('scroll', {
            depth_percentage: depth,
            page_url: window.location.href
        }, contentContext);
    }
    
    trackCompletion(contentType, contentId, contentTitle) {
        this.trackEvent('completion', {
            content_title: contentTitle,
            completion_time: Date.now()
        }, {
            content_type: contentType,
            [contentType === 'course' ? 'course_id' : 'lesson_id']: contentId
        });
    }
    
    trackEnrollment(courseId, courseTitle) {
        this.trackEvent('enrollment', {
            course_title: courseTitle,
            enrollment_time: Date.now()
        }, {
            content_type: 'course',
            course_id: courseId
        });
    }
    
    extractContentContext(path) {
        // Extract course and lesson IDs from URL patterns
        const courseMatch = path.match(/\/course\/(\d+)/);
        const lessonMatch = path.match(/\/lesson\/(\d+)/);
        
        if (courseMatch) {
            return { content_type: 'course', course_id: parseInt(courseMatch[1]) };
        } else if (lessonMatch) {
            return { content_type: 'lesson', lesson_id: parseInt(lessonMatch[1]) };
        }
        
        return {};
    }
    
    getContentContext(element) {
        // Try to find content context from the element or its parents
        let currentElement = element;
        while (currentElement && currentElement !== document.body) {
            if (currentElement.dataset.courseId) {
                return { content_type: 'course', course_id: parseInt(currentElement.dataset.courseId) };
            }
            if (currentElement.dataset.lessonId) {
                return { content_type: 'lesson', lesson_id: parseInt(currentElement.dataset.lessonId) };
            }
            currentElement = currentElement.parentElement;
        }
        
        return this.extractContentContext(window.location.pathname);
    }
    
    setupEventListeners() {
        // Track clicks on interactive elements
        document.addEventListener('click', (e) => {
            const target = e.target;
            
            // Track clicks on course/lesson cards
            if (target.closest('.course-card, .lesson-card')) {
                const card = target.closest('.course-card, .lesson-card');
                const isCourse = card.classList.contains('course-card');
                const contentId = card.dataset.courseId || card.dataset.lessonId;
                const contentTitle = card.querySelector('h3, h4')?.textContent || 'Unknown';
                
                this.trackClick(target, {
                    content_type: isCourse ? 'course' : 'lesson',
                    content_id: contentId,
                    content_title: contentTitle
                });
            }
            
            // Track enrollment clicks
            if (target.closest('.enroll-btn, .enroll-button')) {
                const courseId = target.closest('[data-course-id]')?.dataset.courseId;
                const courseTitle = target.closest('.course-card')?.querySelector('h3')?.textContent || 'Unknown';
                
                if (courseId) {
                    this.trackEnrollment(courseId, courseTitle);
                }
            }
            
            // Track completion clicks
            if (target.closest('.complete-btn, .mark-complete')) {
                const lessonId = target.closest('[data-lesson-id]')?.dataset.lessonId;
                const lessonTitle = target.closest('.lesson-content')?.querySelector('h2')?.textContent || 'Unknown';
                
                if (lessonId) {
                    this.trackCompletion('lesson', lessonId, lessonTitle);
                }
            }
        });
        
        // Track scroll depth
        let maxScrollDepth = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollDepth = Math.round((scrollTop / docHeight) * 100);
            
            if (scrollDepth > maxScrollDepth) {
                maxScrollDepth = scrollDepth;
                
                // Track scroll milestones
                if (scrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                    this.trackScroll(scrollDepth);
                }
            }
        });
        
        // Track form submissions
        document.addEventListener('submit', (e) => {
            const form = e.target;
            if (form.classList.contains('feedback-form')) {
                this.trackEvent('feedback_submit', {
                    form_id: form.id || 'unknown',
                    form_action: form.action
                });
            }
        });
    }
    
    startTimeTracking() {
        const startTime = Date.now();
        
        // Track time spent every 30 seconds
        setInterval(() => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            const contentContext = this.extractContentContext(window.location.pathname);
            this.trackTimeSpent(timeSpent, contentContext);
        }, 30000);
        
        // Track time spent when leaving page
        window.addEventListener('beforeunload', () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            const contentContext = this.extractContentContext(window.location.pathname);
            this.trackTimeSpent(timeSpent, contentContext);
        });
    }
    
    sendEvent(event) {
        fetch(`${this.baseUrl}/track`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event)
        }).catch(error => {
            console.error('Failed to send analytics event:', error);
        });
    }
    
    flushEvents() {
        if (this.eventQueue.length === 0) return;
        
        // Send all queued events
        this.eventQueue.forEach(event => this.sendEvent(event));
        this.eventQueue = [];
    }
    
    // Public methods for manual tracking
    trackCustomEvent(eventName, data = {}) {
        this.trackEvent(eventName, data);
    }
    
    setUserId(userId) {
        this.userId = userId;
        localStorage.setItem('zion_user_id', userId);
    }
    
    disableTracking() {
        this.trackingEnabled = false;
    }
    
    enableTracking() {
        this.trackingEnabled = true;
    }
}

// Initialize analytics when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.zionAnalytics = new ZionAnalytics();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ZionAnalytics;
}
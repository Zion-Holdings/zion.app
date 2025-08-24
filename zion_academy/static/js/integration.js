/**
 * Zion Academy Analytics & Feedback Integration
 * This file shows how to integrate analytics and feedback into existing templates
 */

// Include these scripts in your HTML templates:
// <script src="/static/js/analytics.js"></script>
// <script src="/static/js/feedback.js"></script>
// <script src="/static/js/integration.js"></script>

class ZionIntegration {
    constructor() {
        this.analytics = window.zionAnalytics;
        this.feedback = window.zionFeedback;
        
        this.init();
    }
    
    init() {
        // Wait for analytics and feedback to be loaded
        if (!this.analytics || !this.feedback) {
            setTimeout(() => this.init(), 100);
            return;
        }
        
        this.setupContentTracking();
        this.setupFeedbackIntegration();
        console.log('Zion Analytics & Feedback integration initialized');
    }
    
    setupContentTracking() {
        // Add data attributes to existing content for better tracking
        this.addTrackingAttributes();
        
        // Track custom events for existing functionality
        this.trackExistingFeatures();
    }
    
    addTrackingAttributes() {
        // Add course tracking to course cards
        document.querySelectorAll('.course-card, .course-item').forEach(card => {
            const courseId = card.dataset.courseId || this.extractIdFromUrl(card.querySelector('a')?.href);
            if (courseId) {
                card.dataset.courseId = courseId;
            }
        });
        
        // Add lesson tracking to lesson items
        document.querySelectorAll('.lesson-card, .lesson-item').forEach(item => {
            const lessonId = item.dataset.lessonId || this.extractIdFromUrl(item.querySelector('a')?.href);
            if (lessonId) {
                item.dataset.lessonId = lessonId;
            }
        });
        
        // Add tracking to buttons
        document.querySelectorAll('.enroll-btn, .enroll-button').forEach(btn => {
            const courseId = btn.dataset.courseId || this.findNearestCourseId(btn);
            if (courseId) {
                btn.dataset.courseId = courseId;
            }
        });
        
        document.querySelectorAll('.complete-btn, .mark-complete').forEach(btn => {
            const lessonId = btn.dataset.lessonId || this.findNearestLessonId(btn);
            if (lessonId) {
                btn.dataset.lessonId = lessonId;
            }
        });
    }
    
    extractIdFromUrl(url) {
        if (!url) return null;
        const match = url.match(/\/(\d+)/);
        return match ? match[1] : null;
    }
    
    findNearestCourseId(element) {
        let current = element;
        while (current && current !== document.body) {
            if (current.dataset.courseId) return current.dataset.courseId;
            current = current.parentElement;
        }
        return null;
    }
    
    findNearestLessonId(element) {
        let current = element;
        while (current && current !== document.body) {
            if (current.dataset.lessonId) return current.dataset.lessonId;
            current = current.parentElement;
        }
        return null;
    }
    
    trackExistingFeatures() {
        // Track search functionality
        const searchForms = document.querySelectorAll('form[action*="search"], .search-form');
        searchForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const query = form.querySelector('input[name="q"], input[type="search"]')?.value;
                if (query) {
                    this.analytics.trackEvent('search', { query: query });
                }
            });
        });
        
        // Track navigation
        const navLinks = document.querySelectorAll('nav a, .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.analytics.trackEvent('navigation', {
                    from: window.location.pathname,
                    to: link.href,
                    link_text: link.textContent?.trim()
                });
            });
        });
        
        // Track form submissions
        const forms = document.querySelectorAll('form:not(.feedback-form)');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                this.analytics.trackEvent('form_submit', {
                    form_id: form.id || 'unknown',
                    form_action: form.action,
                    form_method: form.method
                });
            });
        });
    }
    
    setupFeedbackIntegration() {
        // Add feedback buttons to content pages
        this.addFeedbackButtons();
        
        // Add feedback links to course/lesson pages
        this.addFeedbackLinks();
    }
    
    addFeedbackButtons() {
        // Add feedback button to course pages
        const courseContent = document.querySelector('.course-content, .course-detail');
        if (courseContent) {
            const feedbackBtn = this.createFeedbackButton('course');
            courseContent.appendChild(feedbackBtn);
        }
        
        // Add feedback button to lesson pages
        const lessonContent = document.querySelector('.lesson-content, .lesson-detail');
        if (lessonContent) {
            const feedbackBtn = this.createFeedbackButton('lesson');
            lessonContent.appendChild(feedbackBtn);
        }
    }
    
    createFeedbackButton(contentType) {
        const button = document.createElement('button');
        button.className = 'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
        button.innerHTML = `
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            Report Issue
        `;
        
        button.addEventListener('click', () => {
            const contentId = this.getCurrentContentId();
            const contentTitle = document.title;
            this.feedback.showFeedbackForContent(contentType, contentId, contentTitle);
        });
        
        return button;
    }
    
    addFeedbackLinks() {
        // Add feedback links to course/lesson lists
        const courseItems = document.querySelectorAll('.course-item, .course-card');
        courseItems.forEach(item => {
            const feedbackLink = this.createFeedbackLink('course', item);
            item.appendChild(feedbackLink);
        });
        
        const lessonItems = document.querySelectorAll('.lesson-item, .lesson-card');
        lessonItems.forEach(item => {
            const feedbackLink = this.createFeedbackLink('lesson', item);
            item.appendChild(feedbackLink);
        });
    }
    
    createFeedbackLink(contentType, parentElement) {
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'text-sm text-gray-500 hover:text-gray-700 ml-2';
        link.innerHTML = 'Report Issue';
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const contentId = parentElement.dataset.courseId || parentElement.dataset.lessonId;
            const contentTitle = parentElement.querySelector('h3, h4')?.textContent || 'Unknown';
            this.feedback.showFeedbackForContent(contentType, contentId, contentTitle);
        });
        
        return link;
    }
    
    getCurrentContentId() {
        const path = window.location.pathname;
        const courseMatch = path.match(/\/course\/(\d+)/);
        const lessonMatch = path.match(/\/lesson\/(\d+)/);
        
        if (courseMatch) return courseMatch[1];
        if (lessonMatch) return lessonMatch[1];
        return null;
    }
    
    // Utility methods for manual tracking
    trackCustomEvent(eventName, data = {}) {
        if (this.analytics) {
            this.analytics.trackCustomEvent(eventName, data);
        }
    }
    
    trackContentView(contentType, contentId, contentTitle) {
        if (this.analytics) {
            this.analytics.trackEvent('view', {
                content_type: contentType,
                content_title: contentTitle
            }, {
                content_type: contentType,
                [contentType === 'course' ? 'course_id' : 'lesson_id']: contentId
            });
        }
    }
    
    trackContentCompletion(contentType, contentId, contentTitle) {
        if (this.analytics) {
            this.analytics.trackCompletion(contentType, contentId, contentTitle);
        }
    }
    
    showFeedback(contentType, contentId, contentTitle) {
        if (this.feedback) {
            this.feedback.showFeedbackForContent(contentType, contentId, contentTitle);
        }
    }
    
    // Method to get analytics data for display
    async getContentAnalytics(contentType, contentId) {
        try {
            const response = await fetch(`/api/analytics/content/${contentType}/${contentId}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch analytics:', error);
            return null;
        }
    }
    
    // Method to display analytics widget
    displayAnalyticsWidget(container, contentType, contentId) {
        this.getContentAnalytics(contentType, contentId).then(data => {
            if (data && container) {
                container.innerHTML = `
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h4 class="font-medium text-gray-900 mb-2">Content Analytics</h4>
                        <div class="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span class="text-gray-600">Views:</span>
                                <span class="font-medium">${data.current_metrics.total_views}</span>
                            </div>
                            <div>
                                <span class="text-gray-600">Clicks:</span>
                                <span class="font-medium">${data.current_metrics.total_clicks}</span>
                            </div>
                            <div>
                                <span class="text-gray-600">Completion:</span>
                                <span class="font-medium">${data.current_metrics.avg_completion_rate.toFixed(1)}%</span>
                            </div>
                            <div>
                                <span class="text-gray-600">Feedback:</span>
                                <span class="font-medium">${data.current_metrics.total_feedback}</span>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
    }
}

// Initialize integration when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.zionIntegration = new ZionIntegration();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ZionIntegration;
}
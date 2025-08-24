/**
 * Zion Academy Feedback Component
 * Allows users to submit feedback and flag content issues
 */

class ZionFeedback {
    constructor() {
        this.baseUrl = '/api/feedback';
        this.currentContent = this.getCurrentContent();
        this.feedbackForms = new Map();
        
        this.init();
    }
    
    init() {
        this.createFeedbackWidget();
        this.setupEventListeners();
    }
    
    getCurrentContent() {
        // Extract content context from current page
        const path = window.location.pathname;
        const courseMatch = path.match(/\/course\/(\d+)/);
        const lessonMatch = path.match(/\/lesson\/(\d+)/);
        
        if (courseMatch) {
            return {
                type: 'course',
                id: courseMatch[1],
                title: document.title
            };
        } else if (lessonMatch) {
            return {
                type: 'lesson',
                id: lessonMatch[1],
                title: document.title
            };
        }
        
        return {
            type: 'general',
            id: null,
            title: document.title
        };
    }
    
    createFeedbackWidget() {
        // Create floating feedback button
        const feedbackButton = document.createElement('div');
        feedbackButton.className = 'zion-feedback-button';
        feedbackButton.innerHTML = `
            <button class="feedback-trigger" title="Submit Feedback">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>
        `;
        
        // Create feedback modal
        const feedbackModal = document.createElement('div');
        feedbackModal.className = 'zion-feedback-modal';
        feedbackModal.style.display = 'none';
        feedbackModal.innerHTML = `
            <div class="feedback-modal-content">
                <div class="feedback-modal-header">
                    <h3>Submit Feedback</h3>
                    <button class="feedback-close">&times;</button>
                </div>
                <div class="feedback-modal-body">
                    <form class="feedback-form" id="feedback-form-${Date.now()}">
                        <div class="feedback-type-selection">
                            <label>Feedback Type:</label>
                            <div class="feedback-type-options">
                                <label class="feedback-type-option">
                                    <input type="radio" name="feedback_type" value="outdated" required>
                                    <span>Content is Outdated</span>
                                </label>
                                <label class="feedback-type-option">
                                    <input type="radio" name="feedback_type" value="request_detail" required>
                                    <span>Need More Detail</span>
                                </label>
                                <label class="feedback-type-option">
                                    <input type="radio" name="feedback_type" value="bug_report" required>
                                    <span>Bug Report</span>
                                </label>
                                <label class="feedback-type-option">
                                    <input type="radio" name="feedback_type" value="suggestion" required>
                                    <span>Suggestion</span>
                                </label>
                            </div>
                        </div>
                        
                        <div class="feedback-priority">
                            <label>Priority:</label>
                            <select name="priority" required>
                                <option value="low">Low</option>
                                <option value="medium" selected>Medium</option>
                                <option value="high">High</option>
                                <option value="critical">Critical</option>
                            </select>
                        </div>
                        
                        <div class="feedback-title">
                            <label>Title:</label>
                            <input type="text" name="title" placeholder="Brief description of the issue" required>
                        </div>
                        
                        <div class="feedback-description">
                            <label>Description:</label>
                            <textarea name="description" placeholder="Please provide detailed information..." rows="4" required></textarea>
                        </div>
                        
                        <div class="feedback-actions">
                            <button type="button" class="feedback-cancel">Cancel</button>
                            <button type="submit" class="feedback-submit">Submit Feedback</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(feedbackButton);
        document.body.appendChild(feedbackModal);
        
        // Store reference
        this.feedbackForms.set(feedbackModal, feedbackModal);
        
        // Add styles
        this.addStyles();
    }
    
    addStyles() {
        if (document.getElementById('zion-feedback-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'zion-feedback-styles';
        styles.textContent = `
            .zion-feedback-button {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
            }
            
            .feedback-trigger {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border: none;
                color: white;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .feedback-trigger:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            }
            
            .zion-feedback-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 1001;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .feedback-modal-content {
                background: white;
                border-radius: 12px;
                width: 90%;
                max-width: 500px;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            }
            
            .feedback-modal-header {
                padding: 20px;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .feedback-modal-header h3 {
                margin: 0;
                color: #333;
            }
            
            .feedback-close {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #666;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .feedback-close:hover {
                color: #333;
            }
            
            .feedback-modal-body {
                padding: 20px;
            }
            
            .feedback-form > div {
                margin-bottom: 20px;
            }
            
            .feedback-form label {
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #333;
            }
            
            .feedback-type-options {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
            }
            
            .feedback-type-option {
                display: flex;
                align-items: center;
                padding: 10px;
                border: 2px solid #eee;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .feedback-type-option:hover {
                border-color: #667eea;
                background: #f8f9ff;
            }
            
            .feedback-type-option input[type="radio"] {
                margin-right: 8px;
            }
            
            .feedback-type-option input[type="radio"]:checked + span {
                color: #667eea;
                font-weight: 600;
            }
            
            .feedback-priority select,
            .feedback-title input,
            .feedback-description textarea {
                width: 100%;
                padding: 12px;
                border: 2px solid #eee;
                border-radius: 8px;
                font-size: 14px;
                transition: border-color 0.2s ease;
            }
            
            .feedback-priority select:focus,
            .feedback-title input:focus,
            .feedback-description textarea:focus {
                outline: none;
                border-color: #667eea;
            }
            
            .feedback-actions {
                display: flex;
                gap: 10px;
                justify-content: flex-end;
            }
            
            .feedback-cancel,
            .feedback-submit {
                padding: 12px 24px;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 600;
                transition: all 0.2s ease;
            }
            
            .feedback-cancel {
                background: #f8f9fa;
                color: #666;
            }
            
            .feedback-cancel:hover {
                background: #e9ecef;
            }
            
            .feedback-submit {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }
            
            .feedback-submit:hover {
                transform: translateY(-1px);
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            }
            
            .feedback-submit:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none;
            }
            
            .feedback-success {
                text-align: center;
                padding: 40px 20px;
                color: #28a745;
            }
            
            .feedback-success svg {
                width: 48px;
                height: 48px;
                margin-bottom: 16px;
            }
            
            .feedback-error {
                color: #dc3545;
                font-size: 14px;
                margin-top: 8px;
            }
            
            @media (max-width: 600px) {
                .feedback-modal-content {
                    width: 95%;
                    margin: 20px;
                }
                
                .feedback-type-options {
                    grid-template-columns: 1fr;
                }
                
                .feedback-actions {
                    flex-direction: column;
                }
            }
        `;
        
        document.head.appendChild(styles);
    }
    
    setupEventListeners() {
        // Feedback button click
        document.addEventListener('click', (e) => {
            if (e.target.closest('.feedback-trigger')) {
                this.showFeedbackModal();
            }
            
            if (e.target.closest('.feedback-close') || e.target.closest('.feedback-cancel')) {
                this.hideFeedbackModal();
            }
        });
        
        // Form submission
        document.addEventListener('submit', (e) => {
            if (e.target.classList.contains('feedback-form')) {
                e.preventDefault();
                this.handleFeedbackSubmission(e.target);
            }
        });
        
        // Close modal on outside click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('zion-feedback-modal')) {
                this.hideFeedbackModal();
            }
        });
        
        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideFeedbackModal();
            }
        });
    }
    
    showFeedbackModal() {
        const modal = document.querySelector('.zion-feedback-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
    
    hideFeedbackModal() {
        const modal = document.querySelector('.zion-feedback-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
    
    async handleFeedbackSubmission(form) {
        const formData = new FormData(form);
        const submitButton = form.querySelector('.feedback-submit');
        const originalText = submitButton.textContent;
        
        // Disable submit button
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        
        // Clear previous errors
        form.querySelectorAll('.feedback-error').forEach(el => el.remove());
        
        try {
            const feedbackData = {
                feedback_type: formData.get('feedback_type'),
                content_type: this.currentContent.type,
                content_id: this.currentContent.id,
                title: formData.get('title'),
                description: formData.get('description'),
                priority: formData.get('priority')
            };
            
            const response = await fetch(`${this.baseUrl}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedbackData)
            });
            
            if (response.ok) {
                this.showSuccessMessage(form);
                
                // Track feedback submission in analytics
                if (window.zionAnalytics) {
                    window.zionAnalytics.trackEvent('feedback_submit', {
                        feedback_type: feedbackData.feedback_type,
                        content_type: feedbackData.content_type,
                        content_id: feedbackData.content_id
                    });
                }
            } else {
                const errorData = await response.json();
                this.showErrorMessage(form, errorData.error || 'Failed to submit feedback');
            }
        } catch (error) {
            this.showErrorMessage(form, 'Network error. Please try again.');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    }
    
    showSuccessMessage(form) {
        const modalBody = form.closest('.feedback-modal-body');
        modalBody.innerHTML = `
            <div class="feedback-success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22,4 12,14.01 9,11.01"></polyline>
                </svg>
                <h3>Thank You!</h3>
                <p>Your feedback has been submitted successfully. We'll review it and take action as needed.</p>
                <button class="feedback-submit" onclick="this.closest('.zion-feedback-modal').style.display='none'">
                    Close
                </button>
            </div>
        `;
    }
    
    showErrorMessage(form, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'feedback-error';
        errorDiv.textContent = message;
        form.appendChild(errorDiv);
    }
    
    // Public methods
    showFeedbackForContent(contentType, contentId, contentTitle) {
        this.currentContent = { type: contentType, id: contentId, title: contentTitle };
        this.showFeedbackModal();
    }
    
    getFeedbackStats() {
        return fetch(`${this.baseUrl}/list`)
            .then(response => response.json())
            .catch(error => {
                console.error('Failed to fetch feedback stats:', error);
                return { feedbacks: [] };
            });
    }
}

// Initialize feedback when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.zionFeedback = new ZionFeedback();
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ZionFeedback;
}
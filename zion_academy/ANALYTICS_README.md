# Zion Academy Analytics & Feedback System

This document explains how to use the new analytics and feedback features implemented in Zion Academy.

## Overview

The analytics and feedback system provides:

1. **User Behavior Tracking** - Monitor which content is most viewed, clicked, and engaged with
2. **Feedback Integration** - Allow users to flag outdated content and request improvements
3. **Admin Dashboard** - Comprehensive view of analytics and feedback for content improvement
4. **Automatic Tracking** - Seamless integration with existing content

## Features

### Analytics Tracking
- Page views and time spent
- Click tracking on interactive elements
- Scroll depth monitoring
- Content completion rates
- User session tracking
- Course and lesson performance metrics

### Feedback System
- Report outdated content
- Request more detail
- Bug reports
- General suggestions
- Priority-based feedback management
- Admin response system

### Admin Dashboard
- Real-time analytics overview
- Top performing content
- Feedback management interface
- Content performance charts
- User engagement metrics

## Installation

### 1. Include JavaScript Files

Add these scripts to your HTML templates:

```html
<!-- Analytics tracking -->
<script src="/static/js/analytics.js"></script>

<!-- Feedback system -->
<script src="/static/js/feedback.js"></script>

<!-- Integration utilities -->
<script src="/static/js/integration.js"></script>
```

### 2. Database Setup

Run the database initialization commands:

```bash
# Initialize database with new tables
flask init-db

# Seed with sample data (optional)
flask seed-db
```

### 3. Access Admin Dashboard

Navigate to `/admin/dashboard` to access the analytics and feedback management interface.

## Usage

### Automatic Tracking

The system automatically tracks:
- Page views when users visit content
- Clicks on course/lesson cards
- Time spent on pages
- Scroll depth
- Form submissions
- Navigation patterns

### Manual Tracking

You can manually track custom events:

```javascript
// Track custom events
window.zionAnalytics.trackCustomEvent('video_play', {
    video_id: 'intro_video',
    duration: 120
});

// Track content views
window.zionIntegration.trackContentView('course', 123, 'Introduction to Zion');

// Track completions
window.zionIntegration.trackContentCompletion('lesson', 456, 'Getting Started');
```

### Feedback Integration

#### Floating Feedback Button
A floating feedback button automatically appears on all pages, allowing users to submit feedback at any time.

#### Content-Specific Feedback
Add feedback buttons to specific content:

```javascript
// Show feedback for specific content
window.zionFeedback.showFeedbackForContent('course', 123, 'Course Title');

// Or use the integration helper
window.zionIntegration.showFeedback('course', 123, 'Course Title');
```

#### Feedback Types
Users can submit:
- **Outdated Content** - Flag content that needs updates
- **Request Detail** - Ask for more information
- **Bug Report** - Report technical issues
- **Suggestion** - Provide improvement ideas

### Analytics Display

#### Content Analytics Widget
Display analytics for specific content:

```javascript
// Create a container for analytics
const analyticsContainer = document.getElementById('analytics-widget');

// Display analytics widget
window.zionIntegration.displayAnalyticsWidget(
    analyticsContainer, 
    'course', 
    123
);
```

#### Custom Analytics Queries
Fetch analytics data programmatically:

```javascript
// Get analytics for specific content
const analytics = await window.zionIntegration.getContentAnalytics('course', 123);

console.log('Total views:', analytics.current_metrics.total_views);
console.log('Completion rate:', analytics.current_metrics.avg_completion_rate);
```

## API Endpoints

### Analytics Endpoints

- `POST /api/analytics/track` - Track user events
- `GET /api/analytics/content/<type>/<id>` - Get content analytics
- `GET /api/analytics/dashboard` - Get dashboard data
- `POST /api/analytics/update-content-metrics` - Update aggregated metrics

### Feedback Endpoints

- `POST /api/feedback/submit` - Submit feedback
- `GET /api/feedback/list` - List all feedback
- `PUT /api/feedback/<id>` - Update feedback status

## Configuration

### Analytics Settings

```javascript
// Disable tracking (e.g., for privacy compliance)
window.zionAnalytics.disableTracking();

// Re-enable tracking
window.zionAnalytics.enableTracking();

// Set user ID for authenticated users
window.zionAnalytics.setUserId('user_123');
```

### Feedback Settings

```javascript
// Customize feedback button position
.zion-feedback-button {
    bottom: 40px;  /* Adjust position */
    right: 40px;
}
```

## Data Models

### AnalyticsEvent
Tracks individual user interactions:
- Event type (view, click, scroll, etc.)
- Content context (course_id, lesson_id)
- User and session information
- Timestamp and metadata

### FeedbackSubmission
Stores user feedback:
- Feedback type and priority
- Content reference
- Description and status
- Admin responses

### ContentAnalytics
Aggregated daily metrics:
- View counts and engagement
- Completion rates
- Time spent metrics
- Feedback counts

## Privacy & Compliance

### Data Collection
- Session IDs for anonymous tracking
- Optional user ID for authenticated users
- IP addresses for security (configurable)
- No personal information collected without consent

### GDPR Compliance
- Users can disable tracking
- Session data is anonymized
- Data retention policies configurable
- Export and deletion capabilities

## Performance

### Optimization Features
- Event batching and queuing
- Asynchronous data transmission
- Minimal impact on page load
- Efficient database queries

### Monitoring
- Real-time dashboard updates
- Error logging and reporting
- Performance metrics tracking
- Scalable architecture

## Troubleshooting

### Common Issues

1. **Analytics not tracking**
   - Check browser console for errors
   - Verify JavaScript files are loaded
   - Check network requests to `/api/analytics/track`

2. **Feedback not submitting**
   - Verify form validation
   - Check network requests to `/api/feedback/submit`
   - Ensure proper content context

3. **Dashboard not loading**
   - Check database connectivity
   - Verify admin route access
   - Check browser console for JavaScript errors

### Debug Mode

Enable debug logging in development:

```javascript
// Analytics events are logged to console in development
// Check browser console for detailed event information
```

## Future Enhancements

### Planned Features
- A/B testing integration
- Advanced user segmentation
- Predictive analytics
- Automated content recommendations
- Integration with external analytics tools

### Customization Options
- Custom event tracking
- White-label analytics
- Multi-tenant support
- Advanced reporting
- Data export capabilities

## Support

For technical support or feature requests:
- Check the issue tracker
- Review the API documentation
- Contact the development team

## License

This analytics and feedback system is part of Zion Academy and follows the same licensing terms.
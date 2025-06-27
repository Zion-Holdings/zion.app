# User Feedback and Support Improvements

## ✅ Overview
- Consolidated feedback collection and support tools across the app.
- Added floating **FeedbackWidget** and **SupportWidget** globally via `AppLayout`.
- Implemented analytics page to review submissions.

## 🚀 Key Components
1. **FeedbackWidget** (`src/components/feedback/FeedbackWidget.tsx`)
   - Allows users to rate their experience from 1-5 stars.
   - Optional text comments stored locally and posted to `/api/feedback`.
   - Displays a short thank-you message after submission.
2. **Feedback Analytics** (`src/pages/FeedbackAnalytics.tsx`)
   - Summarizes total submissions and average rating using `feedbackService`.
   - Lists recent feedback with timestamps for quick review.
3. **SupportWidget** (`src/components/support/SupportWidget.tsx`)
   - Floating help button that opens a chat panel powered by `ChatBotPanel`.
   - Suggests quick replies and escalates to email or live agent after repeated failures.
   - Links to the Help Center for detailed articles.

## 🛠 Usage
- Widgets are mounted in `AppLayout.tsx` so they appear on every page.
- Visit `/feedback-analytics` to see aggregated feedback statistics.
- The support chat can connect users to a human agent if the automated assistant cannot help.

These additions provide continuous channels for users to share feedback and receive assistance, improving overall engagement and satisfaction.

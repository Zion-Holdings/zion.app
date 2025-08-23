# Community Posting Feature

## ✅ Overview
- Authenticated users can create new posts in any forum category.
- Discussions support threaded replies and voting on posts or replies.
- Members may follow categories to get updates.

## 🚀 Key Components
1. **CreatePostButton** (`src/components/community/CreatePostButton.tsx`)
   - Redirects guests to login with a return path.
   - Opens the post creation dialog for authenticated users.
2. **PostForm** and **ReplyForm**
   - Simple forms to submit post content or replies.
3. **PostCard** and **ReplyCard**
   - Display voting buttons and metadata such as author and timestamps.
4. **useFollowedCategories** (`src/hooks/useFollowedCategories.ts`)
   - Tracks followed categories in local storage.
5. **ForumCategoryPage** (`src/pages/ForumCategoryPage.tsx`)
   - Adds a Follow button beside **Create Post**.
   - Requires login before following a category.

## 🛠 Usage
- Navigate to `/community` and pick a category.
- Click **Create Post** to share a topic (login required).
- Open a post to reply or vote on answers.
- Use the **Follow** button on a category page to bookmark discussions.

*Generated on $(date -I)*

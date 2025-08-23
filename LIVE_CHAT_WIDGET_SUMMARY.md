# Live Chat Widget for Quick Support

## ✅ Overview
- Added a live chat widget to give users immediate help inside the marketplace.
- The widget loads on every page so assistance is always one click away.

## 🚀 Implementation Details
1. **Intercom Chat Integration**
   - `IntercomChat.tsx` injects the Intercom script using `NEXT_PUBLIC_INTERCOM_APP_ID`.
   - It is rendered in `pages/_app.tsx`, making the chat button globally available.
2. **Support Chatbot Fallback**
   - `SupportChatbot.tsx` offers an AI-powered assistant with canned answers when the main service is unreachable.
   - Used on the Help page and in the general React app.
3. **Listing Conversations**
   - `ChatWidget.tsx` enables buyers and sellers to exchange messages on individual listing pages via Socket.IO.
   - Includes message notifications and real‑time updates.
   - Saves chat history per room to local storage so conversations persist between visits.

## 🛠 Usage
- Set `NEXT_PUBLIC_INTERCOM_APP_ID` in your environment variables.
- Visit the marketplace and click the chat icon at the bottom-right to start chatting with support.

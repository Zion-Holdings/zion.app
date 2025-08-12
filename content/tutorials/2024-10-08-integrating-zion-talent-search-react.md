---
{
  "title": "Integrating Zion Talent Search into a React App",
  "excerpt": "Follow these steps to embed Zion's AI talent search within your React project.",
  "category": "Integration Tutorial",
  "tags": ["React", "Talent Search"],
  "featuredImage": "/images/blog-placeholder.svg",
  "author": "Zion Team",
  "publishedDate": "Oct 8, 2024",
  "readTime": "7 min read"
}
---
This guide shows how to connect your React application to Zion's Talent Search API.

## 1. Get API Credentials
Sign into Zion and create an API key from the developer dashboard. Keep the token secure.

## 2. Install Dependencies
Add `axios` or your preferred HTTP client to handle API requests:
```bash
npm install axios
```

## 3. Configure Environment Variables
Store your API key in a `.env` file and load it with `process.env` to avoid exposing secrets.

## 4. Build a Search Form
Create a simple input field and button so users can enter desired skills.

## 5. Call the Search Endpoint
Send a GET request to `/api/talent/search?skill=<skill>` using your API key. Handle loading and error states.

## 6. Display the Results
Render a list of candidate profiles returned from the API, showing names, skills, and availability.

## 7. Add Pagination or Filters
Enhance the user experience by paginating results or adding advanced filters for location and rate.

## 8. Deploy and Monitor
Deploy your React app and monitor API usage. Adjust queries or caching to keep performance smooth.

# SEO Content Generation Feature

## 1. Introduction

The SEO Content Generation feature is designed to automate the creation of various types of search-engine-optimized content. By leveraging a fine-tuned AI model, this tool assists users in generating drafts for blog posts, service descriptions, and FAQs, helping to enhance online visibility and engagement.

## 2. User Guide (Admin Interface)

This feature is accessible via the **Content Generator** page within the admin interface of the application.

### Accessing the Generator

Navigate to the "Content Generator" section (typically found at a URL like `/content-generator` after logging in).

### Content Types

The generator supports the creation of the following content types, specifically handled by the `generate-seo-content` function:

*   **Blog Post:** Generates a full blog post draft, including a title, introduction, structured sections with subheadings, and a conclusion.
*   **Service Description:** Creates compelling and SEO-optimized descriptions for services, highlighting key benefits and features.
*   **FAQ:** Generates concise and informative answers to frequently asked questions.

*(Note: The "Email Newsletter" option on the Content Generator page currently utilizes a different backend function, `generate-content`.)*

### Input Fields

To generate content, you will primarily use the following fields:

*   **Main Topic / User Prompt:**
    *   For **Blog Post**: Enter the main topic or a descriptive title (e.g., "Benefits of AI in Marketing").
    *   For **Service Description**: Specify the service you want to describe (e.g., "AI-Powered Chatbot Solutions").
    *   For **FAQ**: Input the question you want an answer for (e.g., "How does AI improve customer service?").
*   **Keywords (Optional, comma-separated):**
    *   Enter relevant keywords separated by commas (e.g., `AI, machine learning, SEO`). These will be incorporated naturally into the generated content. This field is optional.
*   **Detailed Instructions / Custom Prompt (Optional):**
    *   You can provide more specific instructions or a full custom prompt for the AI if the "Main Topic / User Prompt" field isn't sufficient for your needs. If this field is filled, its content will be used as the primary prompt for the AI.

### Generating and Previewing Content

1.  Select your desired "Content Type".
2.  Fill in the "Main Topic / User Prompt" field.
3.  Optionally, add "Keywords" and "Detailed Instructions".
4.  Click the "Generate Content" button.
5.  The generated text will appear in the preview area on the right side of the page. For all SEO content types, this will be the raw text output from the AI.

## 3. Developer Information (Supabase Function)

The backend for this feature is powered by a Supabase Edge Function.

*   **Function Name:** `generate-seo-content`
*   **Endpoint:** `POST /functions/v1/generate-seo-content`
*   **Authentication:** Standard Supabase JWT authentication is required. The JWT token must be included in the `Authorization` header as a Bearer token.

### Request Body

The function expects a JSON request body with the following structure:

```json
{
  "contentType": "blogPost" | "serviceDescription" | "faq",
  "userPrompt": "Your detailed topic or specific instruction for the AI",
  "keywords": ["keyword1", "keyword2"]
}
```
*   `contentType`: (Required) Specifies the type of content to generate.
*   `userPrompt`: (Required) The main input/prompt for the AI.
*   `keywords`: (Optional) An array of strings. If no keywords are provided, send an empty array or omit the field.

### Success Response (200 OK)

On successful generation, the function returns a JSON object:

```json
{
  "generatedContent": "The AI-generated text content will appear here..."
}
```

### Error Responses

*   **400 Bad Request:** Typically indicates missing required fields (`contentType`, `userPrompt`) or an invalid `contentType`.
    ```json
    {
      "error": "Error message describing the issue (e.g., Missing contentType or userPrompt in request body)"
    }
    ```
*   **500 Internal Server Error:** Indicates an issue on the server-side, such as a missing `OPENAI_API_KEY`, an error during the OpenAI API call, or other unexpected errors.
    ```json
    {
      "error": "Error message describing the issue (e.g., Missing OPENAI_API_KEY configuration)"
    }
    ```

### Fine-Tuned Model ID

The function is designed to use a specifically fine-tuned model for optimal SEO content generation.
*   **Target Model ID (Example):** `zion-seo-generator-v1` (This is a conceptual name; the actual ID would follow the format `ft:gpt-3.5-turbo:org:custom_suffix:id`)
*   **Current Placeholder:** The function currently uses `gpt-3.5-turbo` as a placeholder. This should be updated to the actual fine-tuned model ID once available.

## 4. Model Training & Data

The AI model for this feature is fine-tuned using custom datasets tailored for SEO.
*   **Training Script:** The fine-tuning process is managed by the script located at `scripts/zion-gpt-train.mjs`.
*   **Training Data:** The script prepares training data by incorporating various sources, including existing company blog posts and service descriptions. This data is compiled into a JSONL file, typically `seo-training-data.jsonl`, which is then used for fine-tuning with the OpenAI API.

## 5. Monitoring

The `generate-seo-content` Supabase Edge Function includes structured JSON logging for technical monitoring and debugging. These logs provide insights into:
*   Request reception (timestamp, method, URL, input parameters).
*   OpenAI API call details (model used, prompt characteristics).
*   Successful generation events (content length).
*   Errors encountered during processing (validation, configuration, API errors).

Refer to the Supabase function logs for detailed operational insights.
---

*This document provides an overview of the SEO Content Generation feature. For specific API integration details beyond this scope, consult the relevant source code and Supabase function logs.*

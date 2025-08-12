# ZionGPT Fine-Tuning Workflow

This document outlines the process for building and deploying a private fine-tuned GPT model named **ZionGPT**. The goal is to leverage internal datasets (job posts, talent profiles and support logs) to power job description generation, talent recommendations and a support chatbot that matches Zion's tone.

## 1. Data Ingestion

1. **Pull anonymized records** from the following tables via Supabase:
   - `job_posts`
   - `resumes`
   - `support_logs`
2. Strip personally identifiable information (PII) before use. The training
   script now automatically removes emails, phone numbers and simple names.
3. Convert each record to **prompt → completion** pairs as used by the OpenAI fine-tuning API.
4. Save the dataset to `training-data.jsonl`. The helper script `scripts/zion-gpt-train.js` performs these steps.

## 2. Fine-Tuning Setup

1. Ensure the environment variables `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` and `OPENAI_API_KEY` are configured.
2. Run the training script:

   ```sh
   node scripts/zion-gpt-train.js
   ```

3. The script uploads the dataset and creates a fine-tuning job targeting the `gpt-3.5-turbo` base model. Once complete, note the resulting model ID (e.g. `zion-job-generator-v1`).

## 3. Operator Management

- Track training jobs and versions in a `model_versions` table or a similar log.
- Update application configuration to reference the latest model (e.g. `zion-job-generator-v2`).
- Monitor for errors or token spikes via Supabase logging.

## 4. Live Deployment

- Route features such as the resume builder, job description generator and proposal tools to use the newest ZionGPT model.
- A/B test output quality against the base GPT model to verify improvements.

## 5. Optional Evaluation Dashboard

- Create an internal dashboard that compares ZionGPT outputs to base GPT, measuring accuracy and tone compliance.

## 6. Privacy Considerations

- Always remove PII before sending data to the training script. The helper
  script now strips emails, phone numbers and basic name patterns before
  uploading.
- Offer users a training opt‑out setting in the application so their content is skipped during dataset generation.

## 7. Specialized Content Generation Models

Beyond the general ZionGPT model, specialized models can be fine-tuned for specific content generation tasks, such as creating SEO-optimized content.

### SEO Content Generation

A dedicated workflow and fine-tuned model are utilized for generating various types of SEO-focused content, including blog posts, service descriptions, and FAQs. This model is trained on specific datasets relevant to these content types to ensure high quality and relevance.

For more details, see [SEO Content Generation](./SeoContentLoadedGeneration.md).

# ZionGPT Core

This document outlines the training workflow for the ZionGPT Core model. The goal is to continuously refine a language model using marketplace data and user interactions.

## Training Pipeline

1. **Data Collection** – Aggregates anonymized job posts, questions, chat logs and review sentiment.
2. **Fine Tuning** – `scripts/train-zion-gpt.js` prepares a dataset and calls the OpenAI API (or another model) to train a new version.
3. **Versioning** – Each run should pass a version tag, e.g. `v1.0`, and a summary file is written to `reports/` describing the dataset and timestamp.
4. **Embedding Generation** – The script can be extended to store embeddings for semantic search.
5. **Operator Control** – Trigger training manually or via the `/dashboard/ai-core` page which calls the `/api/zion-gpt/train` endpoint.

Use the `OPENAI_API_KEY` environment variable when running training.

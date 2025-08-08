### Operator: Resume Scoring

- Endpoint: `POST /api/score-resume`
- Use-cases:
  - After creating an application: call with `{ applicationId }`
  - Manual UI: call with `{ resumeText, jobDescription, jobId? }`
- Security: caller must be job poster for target job/application
- Env required: `OPENAI_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- Optional: enable embeddings by passing `useEmbeddings: true` and provisioning pgvector
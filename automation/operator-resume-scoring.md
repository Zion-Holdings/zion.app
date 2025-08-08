### Operator Workflow: Resume-to-Job Relevance Scoring

- Trigger:
  - Resume submitted to a job (application created/updated)
  - Manual via client UI button (Score Resume)

- Input:
  - Resume content (structured fields or full text)
  - Job description and skill tags

- Processing:
  - Use GPT (gpt-4o-mini) to evaluate:
    - Keywords and required skills
    - Role relevance
    - Experience alignment
    - Tech stack familiarity
  - Optional: compute vector embeddings for semantic comparison (OpenAI text-embedding-3-small)

- Output:
  - Relevance score (0–100)
  - Summary reason
  - Suggested action: Shortlist / Needs Review / Low Match
  - Match breakdown (keywords, role relevance, experience, tech stack)

- Data Handling:
  - Persist score and breakdown on `applications` row:
    - `relevance_score` (int)
    - `relevance_summary` (text)
    - `relevance_suggested_action` (text)
    - `relevance_breakdown` (jsonb)
    - `resume_embedding` (vector?) optional
    - `job_embedding` (vector?) optional
    - `relevance_scored_at` (timestamptz)

- Security:
  - Only job poster can access scoring for their applications
  - Never auto-reject; suggestions only

- API:
  - POST `/api/score-resume`
    - Request body: `{ applicationId? string, resumeText? string, jobId? string, jobDescription? string, skillTags? string[], useEmbeddings?: boolean }`
    - Returns: `{ applicationId, score, summary, suggestedAction, breakdown, useEmbeddings }`
from typing import List, Optional, Literal, Dict, Any
from pydantic import BaseModel, Field

ModelBase = Literal["gpt-3.5", "gpt-4", "mistral", "local", "gpt-4o-mini", "gpt-4o", "o3-mini"]
Tone = Literal["formal", "friendly", "dao-native", "professional", "inclusive"]
FineTuneScope = Literal["resume_only", "full_agent", "dao_replies"]

class UploadCorpusResponse(BaseModel):
    nation_id: str
    category: str
    files: List[str]

class ModelConfig(BaseModel):
    nation_id: str
    base: ModelBase = Field(default="gpt-4o-mini")
    output_length: int = Field(default=512, ge=64, le=8192)
    tone: Tone = Field(default="professional")
    fine_tune_scope: FineTuneScope = Field(default="full_agent")
    language_preferences: List[str] = Field(default_factory=list)
    operator_prompt: Optional[str] = None

class StartTrainingRequest(BaseModel):
    nation_id: str
    region: Optional[str] = None

class TrainingJob(BaseModel):
    job_id: str
    nation_id: str
    status: Literal["queued", "running", "succeeded", "failed"]
    base_model: str
    tuned_model_id: Optional[str] = None
    message: Optional[str] = None

class ChatRequest(BaseModel):
    nation_id: str
    user_id: Optional[str] = None
    message: str

class ChatResponse(BaseModel):
    nation_id: str
    model_id: str
    response: str
    tokens_used: Optional[int] = None

class FeedbackRequest(BaseModel):
    nation_id: str
    message: str
    response: str
    thumbs_up: bool
    correction: Optional[str] = None

class IntentLabel(BaseModel):
    intent: str
    count: int

class DeployRequest(BaseModel):
    nation_id: str
    channel: Literal["web", "cli", "slack", "browser_extension"] = "web"
    token_limit: Optional[int] = None
    throttle_tpm: Optional[int] = None

class NationStatus(BaseModel):
    nation_id: str
    config: Optional[ModelConfig] = None
    latest_job: Optional[TrainingJob] = None
    deployed_model_id: Optional[str] = None
    intents: List[IntentLabel] = Field(default_factory=list)
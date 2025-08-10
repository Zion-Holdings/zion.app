import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

DATA_DIR = Path(os.getenv("ZION_DATA_DIR", "/workspace/data")).resolve()
DATA_DIR.mkdir(parents=True, exist_ok=True)

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
MISTRAL_API_KEY = os.getenv("MISTRAL_API_KEY")

DEFAULT_BASE_MODEL = os.getenv("DEFAULT_BASE_MODEL", "gpt-4o-mini")

# Simple throttle defaults
DEFAULT_MAX_TOKENS = int(os.getenv("DEFAULT_MAX_TOKENS", "1024"))
DEFAULT_RATE_LIMIT_TPM = int(os.getenv("DEFAULT_RATE_LIMIT_TPM", "20000"))  # tokens per minute
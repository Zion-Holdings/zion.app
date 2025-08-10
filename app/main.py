from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from starlette.staticfiles import StaticFiles
import os

from app.routes.train import router as train_router
from app.routes.nation import router as nation_router
from app.routes.infer import router as infer_router

# Import providers to register them at startup
from app.services.providers import openai_provider as _openai_provider  # noqa: F401
from app.services.providers import mistral_provider as _mistral_provider  # noqa: F401
from app.services.providers import local_provider as _local_provider  # noqa: F401

app = FastAPI(title="ZionGPT Trainer Suite", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount analytics and synthetic outputs for quick browsing
analytics_dir = "/workspace/analytics"
synthetic_dir = "/workspace/data/synthetic"
if os.path.isdir(analytics_dir):
    app.mount("/analytics", StaticFiles(directory=analytics_dir), name="analytics")
if os.path.isdir(synthetic_dir):
    app.mount("/synthetic", StaticFiles(directory=synthetic_dir), name="synthetic")

app.include_router(train_router, prefix="")
app.include_router(nation_router, prefix="")
app.include_router(infer_router, prefix="")

@app.get("/healthz")
async def healthz():
    return {"service": "ZionGPT Trainer Suite", "status": "ok"}

@app.get("/", response_class=HTMLResponse)
async def index():
    repo = os.getenv("GITHUB_REPOSITORY", "<your-org/your-repo>")
    actions_base = f"https://github.com/{repo}/actions/workflows"
    html = f"""
<!doctype html>
<html>
<head>
  <meta charset=\"utf-8\" />
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
  <title>ZionGPT Trainer Suite</title>
  <style>
    body {{ font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; margin: 2rem; line-height: 1.5; }}
    h1 {{ margin-bottom: 0.25rem; }}
    .muted {{ color: #666; margin-top: 0; }}
    a {{ color: #0a66c2; text-decoration: none; }}
    a:hover {{ text-decoration: underline; }}
    .grid {{ display: grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap: 1rem; margin-top: 1rem; }}
    .card {{ border: 1px solid #e5e5e5; border-radius: 8px; padding: 1rem; background: #fff; }}
    code {{ background:#f6f8fa; padding: 2px 6px; border-radius: 6px; }}
  </style>
</head>
<body>
  <h1>ZionGPT Trainer Suite</h1>
  <p class=\"muted\">Autonomous training, evaluation, and deployment for DAOs, communities, and digital nations.</p>

  <div class=\"grid\">
    <div class=\"card\">
      <h3>Automation (Cloud)</h3>
      <ul>
        <li><a href=\"{actions_base}/automation.yml\" target=\"_blank\">Automation: 15-min cadence</a></li>
        <li><a href=\"{actions_base}/nightly.yml\" target=\"_blank\">Nightly full run</a></li>
        <li><a href=\"/analytics\">Browse analytics (evals, drift)</a></li>
        <li><a href=\"/synthetic\">Browse synthetic Q&A</a></li>
      </ul>
    </div>

    <div class=\"card\">
      <h3>Nation AI</h3>
      <ul>
        <li><a href=\"/nation/ai?nation_id=zion-africa\">Status & intents (zion-africa)</a></li>
        <li><a href=\"/docs\" target=\"_blank\">API docs</a></li>
      </ul>
    </div>

    <div class=\"card\">
      <h3>Train</h3>
      <ul>
        <li>POST <code>/train/zion-gpt/config</code></li>
        <li>POST <code>/train/zion-gpt/upload</code> (multipart)</li>
        <li>POST <code>/train/zion-gpt/start</code></li>
        <li>POST <code>/train/zion-gpt/test</code></li>
      </ul>
    </div>

    <div class=\"card\">
      <h3>Deploy & Chat</h3>
      <ul>
        <li>POST <code>/nation/deploy</code></li>
        <li>POST <code>/gpt/zion-africa/chat</code></li>
      </ul>
    </div>
  </div>

  <p class=\"muted\">Tip: set secrets <code>OPENAI_API_KEY</code>, <code>MISTRAL_API_KEY</code> in repository for cloud evaluations, and <code>GITHUB_TOKEN</code> is provided by Actions.</p>
</body>
</html>
"""
    return HTMLResponse(html)
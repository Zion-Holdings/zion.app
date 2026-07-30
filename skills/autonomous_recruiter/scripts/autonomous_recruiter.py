#!/usr/bin/env python3
"""Autonomous IT Field Recruiter OSINT Pipeline"""
import json, re, csv, time, random, os, sys
from datetime import datetime, timezone
from pathlib import Path

try:
    from scripts.utils.file_lock import single_instance
except Exception:
    def single_instance(lock_file, jitter=(2, 25), timeout_seconds=0):
        class _NoOpLock:
            def release(self): pass
        return _NoOpLock()

BASE = Path(__file__).resolve().parent
OUTPUT = BASE / "output"
OUTPUT.mkdir(exist_ok=True)

PIPELINE_CSV = OUTPUT / "pipeline_database.csv"
ERROR_LOG = OUTPUT / "recruitment_errors.log"
RUN_HISTORY = OUTPUT / "run_history.log"

HEADER = "Timestamp|Target_Location|Name|Title|Score|Phone_WhatsApp|Email|Profile_URL|Contract_Status|Drafted_WhatsApp_Msg"

DEFAULT_LOCATIONS = [
    "Taubaté, SP",
    "Pindamonhangaba, SP",
    "Caçapava, SP",
    "São José dos Campos, SP",
    "Campinas, SP",
    "Sorocaba, SP",
    "Ribeirão Preto, SP",
    "Guarulhos, SP",
    "Santo André, SP",
    "Santos, SP",
    "Curitiba, PR",
    "Belo Horizonte, MG",
]

DEFAULT_ROLES = [
    "Técnico de Campo",
    "Analista de Suporte Field",
    "Técnico de Redes e Infraestrutura",
    "Field Support Engineer",
    "Field Service Engineer",
]

PIPELINE_DB_COLUMNS = [
    "Timestamp", "Target_Location", "Name", "Title", "Score",
    "Phone_WhatsApp", "Email", "Profile_URL", "Contract_Status", "Drafted_WhatsApp_Msg"
]

WHATSAPP_TMPL = (
    "Oi! 👋 Vaga de **Field Support** em **{location}** para atuação presencial. "
    "Buscamos profissional com experiência em redes, hardware e rack, modelo **PJ/avulso ou mensal**. "
    "Você está disponível e qual modelo prefere?"
)


def log_error(location: str, phase: str, error_short: str, next_action: str):
    ts = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    line = f"{ts} | {location} | {phase} | {error_short} | {next_action}\n"
    with open(ERROR_LOG, "a", encoding="utf-8") as f:
        f.write(line)


def append_pipeline(rows: list[dict]):
    file_exists = PIPELINE_CSV.exists() and PIPELINE_CSV.stat().st_size > 0
    with open(PIPELINE_CSV, "a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=PIPELINE_DB_COLUMNS, delimiter="|", quoting=csv.QUOTE_MINIMAL)
        if not file_exists:
            writer.writeheader()
        for row in rows:
            writer.writerow(row)


def search_web(query: str) -> dict:
    try:
        from hermes_tools import web_search
    except Exception:
        log_error("GLOBAL", "import", "hermes_tools-unavailable", "skip-search")
        return {"data": {"web": []}}
    try:
        return web_search(query=query, limit=10)
    except Exception as e:
        log_error("GLOBAL", "web_search", str(e)[:120], "skip-search")
        return {"data": {"web": []}}


def search_linkedin(location: str, roles: list[str]) -> list[dict]:
    role_part = " OR ".join([f'"{r}"' for r in roles[:3]])
    query = f'site:linkedin.com/in ({role_part}) "{location}" -job -jobs'
    result = search_web(query)
    candidates = []
    for item in result.get("data", {}).get("web", []):
        title = item.get("title", "")
        desc = item.get("description", "") or ""
        url = item.get("url", "") or ""
        name = title.split(" - ")[0].strip() if " - " in title else title.strip()
        candidates.append({
            "name": name or "Unknown",
            "title": title,
            "location": location,
            "profile_url": url,
            "description": desc,
        })
    return candidates


def search_freelancer_platforms(location: str) -> list[dict]:
    queries = [
        f'site:99freelas.com.br/profile "{location}" "TI" OR "Suporte" OR "Redes"',
        f'site:workana.com/freelancers "{location}" "Suporte" OR "Infraestrutura"',
    ]
    candidates = []
    for q in queries:
        result = search_web(q)
        for item in result.get("data", {}).get("web", []):
            candidates.append({
                "name": item.get("title", "Unknown"),
                "title": item.get("title", ""),
                "location": location,
                "profile_url": item.get("url", ""),
                "description": item.get("description", "") or "",
            })
        time.sleep(random.randint(1, 3))
    return candidates


def search_job_boards(location: str) -> list[dict]:
    queries = [
        f'site:catho.com.br "Técnico" "{location}"',
        f'site:catho.com.br "Infraestrutura" "{location}"',
    ]
    candidates = []
    for q in queries:
        result = search_web(q)
        for item in result.get("data", {}).get("web", []):
            candidates.append({
                "name": item.get("title", "Unknown"),
                "title": item.get("title", ""),
                "location": location,
                "profile_url": item.get("url", ""),
                "description": item.get("description", "") or "",
            })
        time.sleep(random.randint(1, 3))
    return candidates


def search_github_portfolio(location: str) -> list[dict]:
    queries = [
        f'site:github.com "{location}" "TI" OR "suporte" OR "rede"',
    ]
    candidates = []
    for q in queries:
        result = search_web(q)
        for item in result.get("data", {}).get("web", []):
            candidates.append({
                "name": item.get("title", "Unknown"),
                "title": item.get("title", ""),
                "location": location,
                "profile_url": item.get("url", ""),
                "description": item.get("description", "") or "",
            })
        time.sleep(random.randint(1, 3))
    return candidates


def extract_contact_details(candidate: dict) -> tuple[str, str]:
    desc = candidate.get("description", "") or ""
    emails = re.findall(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}", desc)
    phones = re.findall(r"\+?\d{1,3}[\s.-]?\(?\d{2,3}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}", desc)
    email = emails[0] if emails else ""
    phone = phones[0] if phones else ""
    return email, phone


def score_candidate(candidate: dict, email: str, phone: str) -> int:
    desc = (candidate.get("description", "") or "").lower()
    title = (candidate.get("title", "") or "").lower()
    text = desc + " " + title
    score = 0
    if any(k in text for k in ["mikrotik", "cisco", "rack", "cabeamento", "hardware", "redes", "linux", "windows server"]):
        score += 30
    if any(k in text for k in ["pJ", "mei", "freelance", "prestador", "avulso", "chamados", "campo", "field service"]):
        score += 20
    if email or phone:
        score += 20
    if any(k in text for k in ["taubaté", "pindamonhangaba", "caçapava", "tremembé", "são josé dos campos", "vale do paraíba"]):
        score += 30
    elif candidate.get("location"):
        score += 10
    return min(score, 100)


def contract_status_from_text(candidate: dict, email: str, phone: str) -> str:
    desc = (candidate.get("description", "") or "").lower()
    title = (candidate.get("title", "") or "").lower()
    text = desc + " " + title
    if any(k in text for k in ["pJ", "mei", "freelance", "prestador", "autônomo"]):
        return "PJ/MEI/Independent"
    if any(k in text for k in ["clt", "mensal", "empresa", "trabalho"]):
        return "CLT-friendly but contractor-capable"
    return "Unknown"


def enrich_contact(candidate: dict) -> tuple[str, str]:
    email, phone = extract_contact_details(candidate)
    if not email and not phone:
        try:
            from hermes_tools import web_search
            q = f'"{candidate.get("name", "")}" email OR contato OR portfolio OR github OR telefone'
            res = web_search(query=q, limit=5)
            for item in res.get("data", {}).get("web", []):
                desc = item.get("description", "") or ""
                emails = re.findall(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}", desc)
                phones = re.findall(r"\+?\d{1,3}[\s.-]?\(?\d{2,3}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}", desc)
                if emails:
                    email = emails[0]
                if phones:
                    phone = phones[0]
                if email or phone:
                    break
        except Exception:
            pass
    return email, phone


def make_whatsapp(location: str, name: str = "") -> str:
    return WHATSAPP_TMPL.format(location=location)


def run_location(location: str, roles: list[str], batch_size: int) -> tuple[list[dict], int]:
    seen = set()
    rows = []
    errors = 0
    if PIPELINE_CSV.exists():
        try:
            with open(PIPELINE_CSV, "r", encoding="utf-8") as f:
                reader = csv.DictReader(f, delimiter="|")
                for row in reader:
                    url = row.get("Profile_URL", "")
                    if url:
                        seen.add(url)
        except Exception:
            pass

    sources = [
        ("linkedin", search_linkedin),
        ("freelancers", search_freelancer_platforms),
        ("jobboards", search_job_boards),
        ("github", search_github_portfolio),
    ]

    for src_name, src_fn in sources:
        if len(rows) >= batch_size:
            break
        try:
            candidates = src_fn(location)
        except Exception as e:
            log_error(location, src_name, str(e)[:120], "skip-source")
            errors += 1
            continue
        time.sleep(random.randint(1, 3))
        for c in candidates:
            if len(rows) >= batch_size:
                break
            profile_url = c.get("profile_url", "")
            if not profile_url or profile_url in seen:
                continue
            email, phone = enrich_contact(c)
            score = score_candidate(c, email, phone)
            if score < 60:
                continue
            status = contract_status_from_text(c, email, phone)
            row = {
                "Timestamp": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
                "Target_Location": location,
                "Name": c.get("name", "Unknown"),
                "Title": c.get("title", ""),
                "Score": score,
                "Phone_WhatsApp": phone,
                "Email": email,
                "Profile_URL": profile_url,
                "Contract_Status": status,
                "Drafted_WhatsApp_Msg": make_whatsapp(location, c.get("name", "")),
            }
            rows.append(row)
            seen.add(profile_url)
    return rows, errors


def log_run(locations: list[str], total_candidates: int, qualified: int, errors: int):
    ts = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    line = (
        f"{ts} | locations={len(locations)} | total_candidates={total_candidates} "
        f"| qualified={qualified} | errors={errors} | status=completed\n"
    )
    with open(RUN_HISTORY, "a", encoding="utf-8") as f:
        f.write(line)


def main():
    lock = single_instance(OUTPUT / 'autonomous_recruiter.lock', jitter=(2, 25), timeout_seconds=0)
    try:
        locations = DEFAULT_LOCATIONS
        roles = DEFAULT_ROLES
        batch_size = 20
        total_candidates = 0
        qualified = 0
        total_errors = 0

        for location in locations:
            rows, errors = run_location(location, roles, batch_size)
            total_errors += errors
            if rows:
                append_pipeline(rows)
                total_candidates += len(rows)
                qualified += len(rows)

        log_run(locations, total_candidates, qualified, total_errors)
        print(json.dumps({
            "locations": len(locations),
            "total_candidates": total_candidates,
            "qualified": qualified,
            "errors": total_errors,
            "pipeline_csv": str(PIPELINE_CSV),
        }, ensure_ascii=False, indent=2))
    finally:
        try:
            lock.release()
        except Exception:
            pass


if __name__ == "__main__":
    main()

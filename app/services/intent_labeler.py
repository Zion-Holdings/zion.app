from collections import Counter
from typing import List, Dict, Any

_KEYWORD_TO_INTENT = {
    "apply": "job_application",
    "resume": "resume_help",
    "cv": "resume_help",
    "salary": "compensation",
    "benefit": "compensation",
    "vote": "dao_governance",
    "proposal": "dao_governance",
    "constitution": "governance_constitution",
    "manifesto": "governance_manifesto",
    "talent": "talent_profiles",
    "profile": "talent_profiles",
    "french": "language_french_support",
    "français": "language_french_support",
    "english": "language_english_support",
    "interview": "interview_prep",
    "guide": "industry_guidance",
}


def auto_label_intents(conversations: List[Dict[str, Any]], top_k: int = 10) -> List[Dict[str, Any]]:
    counter: Counter[str] = Counter()
    for row in conversations:
        text = (row.get("message") or "") + "\n" + (row.get("response") or "")
        text_lower = text.lower()
        matched = False
        for kw, intent in _KEYWORD_TO_INTENT.items():
            if kw in text_lower:
                counter[intent] += 1
                matched = True
        if not matched:
            counter["other"] += 1
    common = counter.most_common(top_k)
    return [{"intent": k, "count": v} for k, v in common]
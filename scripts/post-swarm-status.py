import os, json, urllib.request, urllib.parse

env_path = os.path.expanduser("~/.env")
token = None
with open(env_path) as f:
    for line in f:
        if line.startswith("TELEGRAM_BOT_TOKEN="):
            token = line.strip().split("=", 1)[1]
            break

if not token:
    print("ERROR: No TELEGRAM_BOT_TOKEN found in ~/.env")
    exit(1)

print(f"Token loaded, length: {len(token)}")

message_lines = [
    "\U0001F9E0 SWARM COORD | Site:200 | Services:16372 | Cron: 13 ok / 0 err",
    "",
    "\U0001F4CA Branch: hero-carousel | Commit: be45e69",
    "\U0001F4CB Site 200 OK, pipeline flowing \u2705",
    "\U0001F4CB Services 16372 = Sitemap 16372 (gap closed \u2705)",
    "\U0001F4CB Uncommitted: 0 files \u2705",
    "\U0001F4CB Cron: 13/13 ok (4d20e41c error resolved \u2705)",
    "",
    "\u26a0\ufe0f BLOCKED: Dev server port 3000 (DOWN) \u2192 @windows_carol_bot restart",
    "",
    "\U0001F919 Bot status: 6 active, 2 idle",
    "@Windows_quel_bot \u2192 P2: B3 thin page sweeps + B5 quality pass",
    "@Rocket_Kleber_bot \u2192 P2: B1 CI/CD pipeline hardening",
    "",
    "Next check: 15 min",
]
message = "\n".join(message_lines)

chat_id = "-1003886112318"
url = f"https://api.telegram.org/bot{token}/sendMessage"
data = urllib.parse.urlencode({
    "chat_id": chat_id,
    "text": message,
}).encode()

req = urllib.request.Request(url, data=data, method="POST")
try:
    with urllib.request.urlopen(req, timeout=30) as resp:
        result = json.loads(resp.read())
        if result.get("ok"):
            print(f"Posted to @ziontechgroup_agents - message_id: {result['result'].get('message_id')}")
        else:
            print(f"Telegram API error: {result}")
except Exception as e:
    print(f"Send failed: {e}")

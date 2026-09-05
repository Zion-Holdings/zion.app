#!/usr/bin/env python3
"""Unit tests for Telegram auto-reply automations. No network required."""
from __future__ import annotations

import json
import sys
import tempfile
import time
import unittest
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import auto_reply as ar  # noqa: E402


def make_cfg(**overrides) -> ar.Config:
    cfg = ar.Config.load(HERE / "automations.json")
    cfg.bot_id = 99
    cfg.bot_username = "zion_bot"
    cfg.ceo_user_ids = {"8435383377"}
    cfg.notify_chat_id = "8435383377"
    cfg.skip_backlog = False
    cfg.min_reply_interval_sec = 20
    cfg.max_age_sec = 6 * 3600
    cfg.dry_run = True
    for key, value in overrides.items():
        setattr(cfg, key, value)
    return cfg


def make_update(
    text: str,
    *,
    update_id: int = 1,
    chat_id: int = 111,
    chat_type: str = "private",
    user_id: int = 222,
    first_name: str = "Ana",
    username: str = "ana",
    is_bot: bool = False,
    date: int | None = None,
    reply_to_bot: bool = False,
    mention: bool = False,
) -> dict:
    message = {
        "message_id": 50,
        "date": int(time.time()) if date is None else date,
        "text": text,
        "from": {
            "id": user_id,
            "is_bot": is_bot,
            "first_name": first_name,
            "username": username,
        },
        "chat": {"id": chat_id, "type": chat_type},
    }
    if mention:
        message["text"] = f"@zion_bot {text}".strip()
        message["entities"] = [{"type": "mention", "offset": 0, "length": 9}]
    if reply_to_bot:
        message["reply_to_message"] = {"from": {"id": 99, "is_bot": True}}
    return {"update_id": update_id, "message": message}


class ClassifyTests(unittest.TestCase):
    def setUp(self):
        self.cfg = make_cfg()

    def _incoming(self, text: str, **kwargs) -> ar.Incoming:
        update = make_update(text, **kwargs)
        incoming = ar.inbound_from_update(update, self.cfg)
        self.assertIsNotNone(incoming)
        return incoming

    def test_greeting_pt(self):
        self.assertEqual(ar.classify(self._incoming("Oi, tudo bem?"), self.cfg), "greeting")

    def test_pricing(self):
        self.assertEqual(ar.classify(self._incoming("Quanto custa o orçamento?"), self.cfg), "pricing")

    def test_booking(self):
        self.assertEqual(ar.classify(self._incoming("Quero agendar uma reunião"), self.cfg), "booking")

    def test_partnership(self):
        self.assertEqual(ar.classify(self._incoming("Interesse em parceria e revenda"), self.cfg), "partnership")

    def test_support(self):
        self.assertEqual(ar.classify(self._incoming("O site está com erro 500"), self.cfg), "support")

    def test_lead(self):
        self.assertEqual(ar.classify(self._incoming("Preciso de uma proposta de automação"), self.cfg), "lead")

    def test_start_command(self):
        self.assertEqual(ar.classify(self._incoming("/start"), self.cfg), "start")

    def test_help_with_bot_suffix(self):
        self.assertEqual(ar.classify(self._incoming("/help@zion_bot"), self.cfg), "start")

    def test_stop(self):
        self.assertEqual(ar.classify(self._incoming("/parar"), self.cfg), "stop")

    def test_fallback(self):
        self.assertEqual(ar.classify(self._incoming("asdf qwer zxcv"), self.cfg), "fallback")

    def test_empty_media(self):
        self.assertEqual(ar.classify(self._incoming(""), self.cfg), "empty")

    def test_ceo_ops_for_free_text(self):
        incoming = self._incoming("olha o deploy de hoje", user_id=8435383377)
        self.assertTrue(incoming.is_ceo)
        self.assertEqual(ar.classify(incoming, self.cfg), "ceo_ops")

    def test_agent_command_ceo_only(self):
        ceo = self._incoming("/agent corrigir 404", user_id=8435383377)
        other = self._incoming("/agent corrigir 404", user_id=7)
        self.assertEqual(ar.classify(ceo, self.cfg), "agent")
        self.assertNotEqual(ar.classify(other, self.cfg), "agent")

    def test_hi_does_not_match_this(self):
        incoming = self._incoming("this is a random note about nothing")
        self.assertEqual(ar.classify(incoming, self.cfg), "fallback")

    def test_language_en(self):
        self.assertEqual(ar.detect_language("hello, please send pricing"), "en")

    def test_language_pt_default(self):
        self.assertEqual(ar.detect_language("asdf"), "pt")


class PolicyTests(unittest.TestCase):
    def setUp(self):
        self.cfg = make_cfg()
        self.state = ar.default_state()

    def test_private_chat_replies(self):
        incoming = ar.inbound_from_update(make_update("Oi"), self.cfg)
        ok, reason = ar.should_reply(incoming, self.cfg, self.state)
        self.assertTrue(ok, reason)

    def test_group_without_mention_skipped(self):
        incoming = ar.inbound_from_update(
            make_update("Oi", chat_type="supergroup", chat_id=-1003886112318),
            self.cfg,
        )
        ok, reason = ar.should_reply(incoming, self.cfg, self.state)
        self.assertFalse(ok)
        self.assertEqual(reason, "group_no_mention")

    def test_group_mention_replies(self):
        incoming = ar.inbound_from_update(
            make_update("preço", chat_type="supergroup", chat_id=-1001, mention=True),
            self.cfg,
        )
        self.assertTrue(incoming.mentioned_bot)
        ok, reason = ar.should_reply(incoming, self.cfg, self.state)
        self.assertTrue(ok, reason)

    def test_group_reply_to_bot(self):
        incoming = ar.inbound_from_update(
            make_update("ok", chat_type="group", reply_to_bot=True),
            self.cfg,
        )
        ok, reason = ar.should_reply(incoming, self.cfg, self.state)
        self.assertTrue(ok, reason)

    def test_bot_messages_skipped(self):
        incoming = ar.inbound_from_update(make_update("Oi", is_bot=True), self.cfg)
        ok, reason = ar.should_reply(incoming, self.cfg, self.state)
        self.assertFalse(ok)
        self.assertEqual(reason, "from_bot")

    def test_opt_out_blocks_then_start_reopens(self):
        incoming = ar.inbound_from_update(make_update("Oi", chat_id=55), self.cfg)
        self.state["opted_out"] = ["55"]
        ok, reason = ar.should_reply(incoming, self.cfg, self.state)
        self.assertFalse(ok)
        self.assertEqual(reason, "opted_out")
        start = ar.inbound_from_update(make_update("/start", chat_id=55), self.cfg)
        ok, reason = ar.should_reply(start, self.cfg, self.state)
        self.assertTrue(ok, reason)

    def test_old_messages_skipped(self):
        incoming = ar.inbound_from_update(
            make_update("Oi", date=int(time.time()) - 10 * 3600),
            self.cfg,
        )
        ok, reason = ar.should_reply(incoming, self.cfg, self.state)
        self.assertFalse(ok)
        self.assertEqual(reason, "too_old")

    def test_rate_limit(self):
        incoming = ar.inbound_from_update(make_update("Oi", chat_id=9), self.cfg)
        self.state["last_reply_ts"] = {"9": time.time()}
        ok, reason = ar.should_reply(incoming, self.cfg, self.state)
        self.assertFalse(ok)
        self.assertEqual(reason, "rate_limited")


class PipelineTests(unittest.TestCase):
    def setUp(self):
        self.cfg = make_cfg()

    def test_skip_backlog_on_first_run(self):
        cfg = make_cfg(skip_backlog=True)
        state = ar.default_state()
        sent = []
        old = int(time.time()) - 3600
        updates = [
            make_update("Oi", update_id=10, chat_id=1, date=old),
            make_update("Quero proposta", update_id=11, chat_id=2, date=old),
        ]
        stats = ar.process_updates(updates, cfg, state, lambda *a: sent.append(a))
        self.assertTrue(stats.get("backlog_skipped"))
        self.assertEqual(sent, [])
        self.assertEqual(state["offset"], 12)
        self.assertTrue(state["initialized"])

    def test_cold_start_still_answers_recent_messages(self):
        cfg = make_cfg(skip_backlog=True)
        state = ar.default_state()
        sent = []
        updates = [make_update("Oi", update_id=15, chat_id=77, user_id=77)]
        stats = ar.process_updates(updates, cfg, state, lambda *a: sent.append(a))
        self.assertTrue(stats.get("backlog_skipped"))
        self.assertEqual(stats["replied"], 1)
        self.assertEqual(sent[0][0], 77)
        self.assertEqual(state["offset"], 16)

    def test_private_lead_replies_and_notifies_ceo(self):
        state = ar.default_state()
        state["initialized"] = True
        sent = []
        updates = [make_update("Preciso de uma proposta de automação", update_id=3, user_id=444)]
        stats = ar.process_updates(updates, self.cfg, state, lambda *a: sent.append(a))
        self.assertEqual(stats["replied"], 1)
        self.assertEqual(stats["notified"], 1)
        self.assertEqual(sent[0][0], 111)
        self.assertIn("Zion Tech Group", sent[0][1])
        self.assertEqual(str(sent[1][0]), "8435383377")
        self.assertIn("Novo Telegram", sent[1][1])
        self.assertEqual(state["offset"], 4)

    def test_ceo_is_not_notified_of_own_messages(self):
        state = ar.default_state()
        state["initialized"] = True
        sent = []
        updates = [make_update("status do site", update_id=4, user_id=8435383377, chat_id=8435383377)]
        stats = ar.process_updates(updates, self.cfg, state, lambda *a: sent.append(a))
        self.assertEqual(stats["replied"], 1)
        self.assertEqual(stats["notified"], 0)
        self.assertEqual(len(sent), 1)

    def test_stop_persists_opt_out(self):
        state = ar.default_state()
        state["initialized"] = True
        sent = []
        first = [make_update("/stop", update_id=5, chat_id=88)]
        ar.process_updates(first, self.cfg, state, lambda *a: sent.append(a))
        self.assertIn("88", state["opted_out"])
        second = [make_update("Oi de novo", update_id=6, chat_id=88)]
        stats = ar.process_updates(second, self.cfg, state, lambda *a: sent.append(a))
        self.assertEqual(stats["replied"], 0)
        self.assertEqual(stats["skipped"], 1)

    def test_send_failure_does_not_advance_offset(self):
        state = ar.default_state()
        state["initialized"] = True
        state["offset"] = 1

        def boom(*_args):
            raise RuntimeError("network down")

        stats = ar.process_updates([make_update("Oi", update_id=8)], self.cfg, state, boom)
        self.assertEqual(stats["errors"], 1)
        self.assertEqual(state["offset"], 1)

    def test_render_escapes_html_in_ceo_snippet(self):
        incoming = ar.inbound_from_update(
            make_update("<script>alert(1)</script>", user_id=8435383377),
            self.cfg,
        )
        decision = ar.decide(incoming, self.cfg, ar.default_state())
        self.assertNotIn("<script>", decision.text)
        self.assertIn("&lt;script&gt;", decision.text)

    def test_english_pricing_template(self):
        incoming = ar.inbound_from_update(
            make_update("hello, please send pricing"),
            self.cfg,
        )
        decision = ar.decide(incoming, self.cfg, ar.default_state())
        self.assertEqual(decision.automation_id, "pricing")
        self.assertIn("Pricing and models", decision.text)

    def test_agent_dry_run_launch(self):
        cfg = make_cfg(cursor_api_key="test-key")
        incoming = ar.inbound_from_update(
            make_update("/agent fix the 404", user_id=8435383377),
            cfg,
        )
        decision = ar.decide(incoming, cfg, ar.default_state())
        self.assertEqual(decision.automation_id, "agent")
        self.assertIn("dry-run", decision.text)

    def test_classify_cli_fixture_file(self):
        fixture = {
            "updates": [
                make_update("Quero agendar uma reunião", update_id=21, chat_id=321, user_id=654)
            ]
        }
        with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False) as handle:
            json.dump(fixture, handle)
            path = handle.name
        rc = ar.main(["--fixture", path, "--automations", str(HERE / "automations.json")])
        self.assertEqual(rc, 0)

    def test_all_automations_have_pt_and_en(self):
        cfg = make_cfg()
        for item in cfg.automations:
            templates = item.get("templates") or {}
            self.assertIn("pt", templates, item["id"])
            self.assertIn("en", templates, item["id"])
            incoming = ar.inbound_from_update(make_update("teste"), cfg)
            rendered = ar.render_template(item, incoming, cfg, {"offset": 1, "opt_out_count": 0, "cursor_status": "off"})
            self.assertTrue(rendered.strip(), item["id"])


def run_tests() -> int:
    suite = unittest.defaultTestLoader.loadTestsFromModule(sys.modules[__name__])
    result = unittest.TextTestRunner(verbosity=2).run(suite)
    return 0 if result.wasSuccessful() else 1


if __name__ == "__main__":
    sys.exit(run_tests())

(function () {
  const SCRIPT_EL = document.currentScript;
  const API_BASE = (SCRIPT_EL && SCRIPT_EL.getAttribute('data-api-base')) || '/api';
  const ACCENT = (SCRIPT_EL && SCRIPT_EL.getAttribute('data-accent')) || '#6c5ce7';
  const GREETING = (SCRIPT_EL && SCRIPT_EL.getAttribute('data-greeting')) || '';

  function ensureStyles() {
    if (document.getElementById('zion-chat-styles')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = (SCRIPT_EL && SCRIPT_EL.src ? new URL('widget.css', SCRIPT_EL.src).toString() : '/widget.css');
    link.id = 'zion-chat-styles';
    document.head.appendChild(link);

    const rootVars = document.createElement('style');
    rootVars.textContent = `:root{--zion-accent:${ACCENT}}`;
    document.head.appendChild(rootVars);
  }

  function createEl(tag, opts = {}) {
    const el = document.createElement(tag);
    if (opts.className) el.className = opts.className;
    if (opts.html) el.innerHTML = opts.html;
    if (opts.text) el.textContent = opts.text;
    if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
  }

  function timeOfDayGreeting() {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 18) return 'Good afternoon';
    return 'Good evening';
  }

  function makeWidget() {
    ensureStyles();

    const btn = createEl('button', {
      className: 'zion-chat-button',
      attrs: {
        'aria-label': 'Open chat assistant',
        'title': 'Chat with Zion AI Assistant'
      }
    });
    btn.innerHTML = svgChatIcon();

    const panel = createEl('div', { className: 'zion-chat-panel', attrs: { role: 'dialog', 'aria-labelledby': 'zion-chat-title', 'aria-modal': 'true' } });

    const header = createEl('div', { className: 'zion-chat-header' });
    const titleWrap = createEl('div');
    const title = createEl('div', { className: 'zion-chat-title', text: 'Zion AI Assistant', attrs: { id: 'zion-chat-title' } });
    const subtitle = createEl('div', { className: 'zion-chat-subtitle', text: 'Ask about features, pricing, or how to get started' });
    titleWrap.appendChild(title); titleWrap.appendChild(subtitle);

    const close = createEl('button', { className: 'zion-chat-close', attrs: { 'aria-label': 'Close chat' } });
    close.innerHTML = svgCloseIcon();

    header.appendChild(titleWrap);
    header.appendChild(close);

    const messages = createEl('div', { className: 'zion-chat-messages', attrs: { tabindex: '0' } });

    const inputBar = createEl('div', { className: 'zion-chat-input' });
    const input = createEl('input', { className: 'zion-input', attrs: { type: 'text', placeholder: 'Type your question…', 'aria-label': 'Message input' } });
    const send = createEl('button', { className: 'zion-send', text: 'Send', attrs: { 'aria-label': 'Send message' } });

    inputBar.appendChild(input);
    inputBar.appendChild(send);

    panel.appendChild(header);
    panel.appendChild(messages);
    panel.appendChild(inputBar);

    document.body.appendChild(btn);
    document.body.appendChild(panel);

    let isOpen = false;
    let conversation = [];
    let greeted = false;

    function openPanel() {
      panel.classList.add('open');
      isOpen = true;
      input.focus();
      if (!greeted) {
        const greetText = (GREETING && GREETING.trim()) || `${timeOfDayGreeting()} — I’m here to help you explore the Zion AI Marketplace. How can I assist today?`;
        addAssistantMessage(greetText, [
          'What can I do on Zion AI Marketplace?',
          'How do I try a model before buying?',
          'Where do I view pricing and billing?',
          'How can I list my AI model?'
        ]);
        greeted = true;
      }
    }

    function closePanel() {
      panel.classList.remove('open');
      isOpen = false;
      btn.focus();
    }

    btn.addEventListener('click', () => {
      isOpen ? closePanel() : openPanel();
    });
    close.addEventListener('click', closePanel);
    document.addEventListener('keydown', (e) => {
      if (isOpen && e.key === 'Escape') closePanel();
    });

    function addMessage(role, text) {
      const row = createEl('div', { className: `zion-msg ${role}` });
      const avatar = createEl('div', { className: 'zion-msg-avatar', text: role === 'assistant' ? 'Z' : 'You' });
      const bubble = createEl('div', { className: 'zion-msg-bubble' });
      bubble.textContent = text;
      row.appendChild(avatar);
      row.appendChild(bubble);
      messages.appendChild(row);
      messages.scrollTop = messages.scrollHeight;
    }

    function addAssistantMessage(text, quickReplies) {
      addMessage('assistant', text);
      if (quickReplies && quickReplies.length) {
        const wrap = createEl('div', { className: 'zion-quick-replies' });
        quickReplies.forEach((q) => {
          const b = createEl('button', { text: q });
          b.addEventListener('click', () => {
            input.value = q;
            send.click();
          });
          wrap.appendChild(b);
        });
        messages.appendChild(wrap);
        messages.scrollTop = messages.scrollHeight;
      }
    }

    function setSending(sending) {
      send.disabled = sending;
      input.disabled = sending;
      send.textContent = sending ? 'Sending…' : 'Send';
    }

    async function sendMessage() {
      const text = input.value.trim();
      if (!text) return;
      input.value = '';

      addMessage('user', text);
      conversation.push({ role: 'user', content: text });
      setSending(true);

      try {
        const resp = await fetch(`${API_BASE}/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: conversation })
        });
        if (!resp.ok) throw new Error('Network error');
        const data = await resp.json();
        const reply = data.reply || 'Sorry, I did not get a response.';
        addAssistantMessage(reply);
        conversation.push({ role: 'assistant', content: reply });
      } catch (e) {
        addAssistantMessage('I hit a snag reaching the server. Please try again in a moment.');
      } finally {
        setSending(false);
        input.focus();
      }
    }

    send.addEventListener('click', sendMessage);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    // Expose minimal API
    window.ZionChat = {
      open: openPanel,
      close: closePanel,
      toggle: () => (isOpen ? closePanel() : openPanel()),
      setGreeting: (t) => (greeted = false, (window.setTimeout(() => { addAssistantMessage(t); greeted = true; }, 0)))
    };
  }

  function svgChatIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/><path stroke="#fff" stroke-width="2" d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4V5z"/></svg>';
  }

  function svgCloseIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', makeWidget);
  } else {
    makeWidget();
  }
})();
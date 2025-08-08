(function () {
  const dialog = document.getElementById('hire-dialog');
  const openButtons = Array.from(document.querySelectorAll('.hire-now-btn'));
  const submitButton = document.getElementById('contact-submit');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  function openDialog(source) {
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
    // Prefill a hint in the message
    if (!messageInput.value) {
      messageInput.value = `Hi Jordan,\n\nI found your profile and would like to discuss a project.\n\nProject summary:\n- Goals: \n- Timeline: \n- Budget: \n\nThanks!`;
    }
    if (source) dialog.dataset.source = source;
    window.setTimeout(() => nameInput.focus(), 10);
  }

  function closeDialog() {
    dialog.close && dialog.close();
    dialog.removeAttribute('open');
  }

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const source = btn.getAttribute('data-source') || 'unknown';
      openDialog(source);
    });
  });

  // Handle submission via mailto
  submitButton?.addEventListener('click', (e) => {
    // Let the dialog resolve; prevent default to build our mailto
    e.preventDefault();

    const name = (nameInput.value || '').trim();
    const email = (emailInput.value || '').trim();
    const message = (messageInput.value || '').trim();

    if (!name || !email || !message) {
      // Basic validation
      [nameInput, emailInput, messageInput].forEach((el) => {
        if (!el.value) {
          el.setAttribute('aria-invalid', 'true');
          el.focus();
        } else {
          el.removeAttribute('aria-invalid');
        }
      });
      return;
    }

    const subject = encodeURIComponent(`Project inquiry — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}\nSource: ${dialog.dataset.source || 'unknown'}`);

    const mailto = `mailto:talent@example.com?subject=${subject}&body=${body}`;

    // Open the user's mail client
    window.location.href = mailto;

    closeDialog();
  });
})();
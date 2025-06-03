
async function ask() {
  const prompt = document.getElementById('prompt').value;
  if (!prompt.trim()) {
    document.getElementById('output').textContent = 'Please enter a prompt.';
    return;
  }
  try {
    const res = await chrome.runtime.sendMessage({ type: 'ask', prompt });
    document.getElementById('output').textContent = res.answer;
  } catch (err) {
    console.error('Failed to contact background script', err);
    document.getElementById('output').textContent =
      'Error contacting background script.';
  }
}

// Attach handlers once the DOM is fully loaded to avoid null element errors
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ask')?.addEventListener('click', ask);

  document.getElementById('post-job')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'post-job' });
  });
  document.getElementById('resume-search')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'resume-search' });
  });
  document.getElementById('view-notifications')?.addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'view-notifications' });
  });
});

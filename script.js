const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

function smoothScrollTo(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href && href.length > 1) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  });
});

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.style.display = expanded ? 'none' : 'block';
  });
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const form = document.getElementById('waitlist-form');
const submitBtn = document.getElementById('submit-btn');
const successEl = document.getElementById('form-success');

function setError(id, message) {
  const error = document.querySelector(`small.error[data-for="${id}"]`);
  if (error) error.textContent = message || '';
}

function validate() {
  let ok = true;
  const requiredFields = ['name', 'email', 'company', 'role', 'interest'];
  requiredFields.forEach((id) => setError(id, ''));

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const company = document.getElementById('company');
  const role = document.getElementById('role');
  const interest = document.getElementById('interest');

  if (!name || !name.value.trim()) { setError('name', 'Name is required'); ok = false; }
  if (!email || !email.value.trim() || !emailRe.test(email.value)) { setError('email', 'Valid email required'); ok = false; }
  if (!company || !company.value.trim()) { setError('company', 'Company is required'); ok = false; }
  if (!role || !role.value.trim()) { setError('role', 'Role is required'); ok = false; }
  if (!interest || !interest.value) { setError('interest', 'Please select one'); ok = false; }

  return ok;
}

async function postWaitlist(payload) {
  const endpoints = [
    '/.netlify/functions/waitlist',
  ];
  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) return true;
    } catch (_) {
      // try next
    }
  }
  return false;
}

if (form && submitBtn && successEl) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    successEl.textContent = '';
    if (!validate()) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      role: form.role.value.trim(),
      interest: form.interest.value,
      newsletter: !!form.newsletter.checked
    };

    try {
      const ok = await postWaitlist(payload);
      if (ok) {
        successEl.textContent = 'Thanks! You are on the waitlist. We will be in touch shortly.';
        form.reset();
      } else {
        successEl.textContent = 'Submitted locally. Backend not configured yet.';
        console.log('Waitlist payload (no backend)', payload);
      }
    } catch (err) {
      successEl.textContent = 'Something went wrong. Please try again.';
      console.error(err);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Request Invite';
    }
  });
}

function deriveGithubRepo() {
  const meta = document.querySelector('meta[name="github-repo"]');
  if (meta && meta.content.includes('/')) return meta.content;
  const { hostname, pathname } = window.location;
  if (hostname.endsWith('github.io')) {
    const owner = hostname.split('.')[0];
    const parts = pathname.split('/').filter(Boolean);
    const repo = parts[0] || `${owner}.github.io`;
    return `${owner}/${repo}`;
  }
  return '';
}

function hydrateAutomationLinks() {
  const repo = deriveGithubRepo();
  if (!repo) return;
  document.querySelectorAll('[data-workflow]').forEach((a) => {
    const wf = a.getAttribute('data-workflow');
    a.href = `https://github.com/${repo}/actions/workflows/${wf}`;
    a.target = '_blank';
    a.rel = 'noopener';
  });
  document.querySelectorAll('[data-runs]').forEach((a) => {
    const wf = a.getAttribute('data-runs');
    a.href = `https://github.com/${repo}/actions/workflows/${wf}`;
    a.target = '_blank';
    a.rel = 'noopener';
  });
  document.querySelectorAll('img[data-badge]').forEach((img) => {
    const wf = img.getAttribute('data-badge');
    img.src = `https://github.com/${repo}/actions/workflows/${wf}/badge.svg`;
  });
}

document.addEventListener('DOMContentLoaded', hydrateAutomationLinks);
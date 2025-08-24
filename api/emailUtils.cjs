const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email) {
  if (!email) return false;
  return EMAIL_REGEX.test(String(email).trim());
}

module.exports = { EMAIL_REGEX, isValidEmail };

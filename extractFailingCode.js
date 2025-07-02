// extractFailingCode.js
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

// Check if the file path is provided
if (process.argv.length < 3) {
  console.error('Usage: node extractFailingCode.js <path_to_eslint_report.json>');
  process.exit(1);
}

const reportPath = process.argv[2];

try {
  const reportContent = fs.readFileSync(reportPath, 'utf8');
  const report = JSON.parse(reportContent);

  // Extract the first error message or a default message
  const firstErrorMessage = report[0]?.messages?.[0]?.message || 'No error found in ESLint report.';

  // For now, log the error message and a placeholder function as per the issue.
  // A more sophisticated approach would involve reading the actual file and line number
  // (from report[0]?.filePath and report[0]?.messages?.[0]?.line)
  // to extract the surrounding code. This is a placeholder for that.
  console.log(`// Extracted problem:
// ${firstErrorMessage}
function bug() {
  // Placeholder for the actual failing code snippet
  console.log("This is a placeholder for the failing code.");
}`);

} catch (error) {
  console.error(`Error processing ESLint report: ${error.message}`);
  process.exit(1);
}

import openai from 'openai';
import fs from 'fs';

const filePath = './app/componentWithBug.js';
const code = fs.readFileSync(filePath, 'utf8');

const fixPrompt = `You are a senior React developer. Fix the following code. Annotate all changes.

\`\`\`jsx
${code}
\`\`\`
`;

async function runFixer() {
  const response = await openai.createCompletion({
    model: 'code-davinci-002',
    prompt: fixPrompt,
    temperature: 0.2,
    max_tokens: 1000
  });

  fs.writeFileSync('./app/componentWithBug.fixed.js', response.data.choices[0].text);
  // console.warn('Fix written to componentWithBug.fixed.js');
}

runFixer();

const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/webhook/trigger-fix', (req, res) => {
  console.log('🔁 Webhook received! Starting Codex fix pipeline...');

  exec('openai-operator run ./codex-pipeline.yaml', (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Execution error: ${error.message}`);
      return res.status(500).send('Fix failed');
    }
    if (stderr) {
      console.error(`⚠️ stderr: ${stderr}`);
    }
    console.log(`✅ stdout: ${stdout}`);
    res.status(200).send('Fix triggered successfully');
  });
});

app.listen(port, () => {
  console.log(`🚀 Webhook server listening on port ${port}`);
});

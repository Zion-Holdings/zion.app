const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello world' });
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {
    console.log(`Stub server running on port ${PORT}`);
  });
}

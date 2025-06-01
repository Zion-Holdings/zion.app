const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const { mongoUri } = require('./config');

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Mongo connection error', err));

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

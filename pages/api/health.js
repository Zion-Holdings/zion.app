<<<<<<< HEAD
default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: Zion App is running successfully!',
    mode: Simple Working App',
    build: Working
  });
=======
export export export default function handler(req, res)       { res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString(), message: 'App is running successfully!', automation: 'completed', nodeVersion: process.version, environment: process.env.NODE_ENV || 'development' }); }
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858

export default function handler(req, res) {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'Zion App is running successfully!',
    automation: 'Comprehensive automation system active',
    build: 'Working'
  });
}
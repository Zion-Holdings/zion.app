function getSpecializations(complexity) {
  const specializations = [
  "ai-optimization",
  "quantum-optimization"
];
  return specializations[complexity] || [];
}

module.exports = { getSpecializations };
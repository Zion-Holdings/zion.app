function getSpecializations(complexity) {
  const specializations = [
  "ai-testing",
  "chaos-engineering"
];
  return specializations[complexity] || [];
}

module.exports = { getSpecializations };
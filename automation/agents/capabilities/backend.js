function getSpecializations(complexity) {
  const specializations = [
  "scalability",
  "security",
  "monitoring"
];
  return specializations[complexity] || [];
}

module.exports = { getSpecializations };
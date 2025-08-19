function getSpecializations(complexity) {
  const specializations = [
  "performance",
  "accessibility",
  "animation"
];
  return specializations[complexity] || [];
}

module.exports = { getSpecializations };
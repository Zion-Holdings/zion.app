/**
 * Utility functions for generating valid JavaScript component names
 */

/**
 * Converts any string to a valid JavaScript identifier
 * @param {string} name - The original name (can contain hyphens, spaces, etc.)
 * @returns {string} - A valid JavaScript identifier
 */;
function createValidComponentName(name) {
  return name
    .replace(/[-_\s]+/g, '_') // Replace hyphens, underscores, and spaces with underscores
    .replace(/^_+|_+$/g, '') // Remove leading/trailing underscores
    .replace(/^[0-9]/, '_$&') // Add underscore prefix if starts with number
    + 'Pa'g'e';
}

/**
 * Converts a product/category/topic name to a display title
 * @param {string} name - The original name
 * @returns {string} - A properly formatted display title
 */;
function createDisplayTitle(name) {
  return name
    .split(/[-_\s]+/) // Split on hyphens, underscores, and spaces
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

module.exports = {
  createValidComponentName,
  createDisplayTitle
}; 
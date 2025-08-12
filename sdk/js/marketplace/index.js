// sdk/js/marketplace/index.js

/**
 * @file Marketplace module for Zion.js
 * @description Handles interactions with marketplace listings, products, services, quotes, jobs, and talent profiles.
 */

/**
 * Fetches a list of products (can be services, talent profiles, job postings, etc.) from the marketplace.
 * @param {object} [options={}] - Filtering and pagination options.
 * @param {number} [options.page=1] - Page number for pagination.
 * @param {number} [options.limit=20] - Number of items per page.
 * @param {string} [options.category] - Filter by category.
 * @param {string} [options.sortBy] - Field to sort by (e.g., "price_asc", "price_desc", "date_added").
 * @param {string} [options.type] - Filter by type of listing (e.g., "service", "product", "talent_profile", "job_posting").
 * @returns {Promise<Array<object>>} A promise that resolves with an array of product objects.
 * @throws {Error} If the request fails.
 */
async function listProducts(options = {}) {
  const { page = 1, limit = 20, category, sortBy, ...otherFilters } = options;
  console.log('listProducts called with:', options);

  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (category) {
    queryParams.append('category', category); // Backend expects a 'category' query param
  }
  if (sortBy) {
    queryParams.append('sortBy', sortBy); // Matches the sort options used in the UI
  }
  // Append other filters dynamically
  for (const [key, value] of Object.entries(otherFilters)) {
    if (value !== undefined && value !== null) {
      queryParams.append(key, String(value));
    }
  }

  const response = await fetch(`/api/marketplace/products?${queryParams.toString()}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Failed to list products' }));
    throw new Error(errorData.message || `Failed to list products. Status: ${response.status}`);
  }

  return response.json();
}

/**
 * Fetches details for a specific product or service.
 * @param {string} productId - The ID of the product/service to fetch.
 * @returns {Promise<object|null>} A promise that resolves with the product/service object, or null if not found.
 * @throws {Error} If the request fails.
 */
async function getProductDetails(productId) {
  console.log('getProductDetails called for productId:', productId);

  if (!productId) {
    throw new Error('Product ID is required.');
  }

  const response = await fetch(`/api/marketplace/product/${productId}`);

  if (response.status === 404) {
    return null; // Product not found
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: `Failed to get product details for ID ${productId}` }));
    throw new Error(errorData.message || `Failed to get product details. Status: ${response.status}`);
  }

  return response.json();
}

/**
 * Submits a quote request.
 * @param {object} quoteDetails - The details for the quote request.
 * @param {string} quoteDetails.name - Customer's full name.
 * @param {string} quoteDetails.email - Customer's email address.
 * @param {string} quoteDetails.phone - Customer's phone number.
 * @param {string} quoteDetails.details - A detailed description of the requested service or product.
 * @param {string} [quoteDetails.productId] - If the quote is for a specific existing product/service.
 * @param {string} [quoteDetails.country] - Customer's country.
 * @param {string} [quoteDetails.service] - Specific service being requested if not tied to a `productId`.
 * @returns {Promise<object>} A promise that resolves with the response from the quote submission.
 * @throws {Error} If the quote submission fails.
 */
async function submitQuoteRequest(quoteDetails) {
  console.log('submitQuoteRequest called with:', quoteDetails);

  if (!quoteDetails || !quoteDetails.name || !quoteDetails.email || !quoteDetails.phone || !quoteDetails.details) {
    throw new Error('Missing required fields in quoteDetails: name, email, phone, details are required.');
  }

  const response = await fetch('/api/quotes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quoteDetails),
  });

  const responseData = await response.json();

  if (!response.ok || !responseData.success) {
    // If responseData.success is false but response.ok is true, it's a business logic error from the API
    throw new Error(responseData.error || responseData.message || `Failed to submit quote request. Status: ${response.status}`);
  }

  return responseData; // e.g., { success: true, ... }
}

// --- Placeholders for Future Functions ---

/**
 * Fetches the current status of a previously submitted quote request.
 * @param {string} quoteId - The ID of the quote to fetch status for.
 * @returns {Promise<object|null>} A promise that resolves with the quote status object, or null if not found.
 * @throws {Error} If the request fails.
 */
async function getQuoteStatus(quoteId) {
  console.log('getQuoteStatus called for quoteId:', quoteId);
  if (!quoteId) {
    throw new Error('Quote ID is required.');
  }

  const response = await fetch(`/api/marketplace/quotes/${quoteId}/status`);

  if (response.status === 404) {
    return null; // Quote not found
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: `Failed to get status for quote ${quoteId}` }));
    throw new Error(errorData.message || `Failed to get quote status. Status: ${response.status}`);
  }

  return response.json();
}

/**
 * Fetches a list of job postings from the marketplace.
 * @param {object} [options={}] - Filtering and pagination options.
 * @param {number} [options.page=1] - Page number.
 * @param {number} [options.limit=20] - Items per page.
 * @param {string} [options.skill] - Filter by specific skill.
 * @param {string} [options.jobType] - Filter by job type (e.g., "full-time", "contract", "freelance").
 * @param {string} [options.budgetRange] - Filter by budget range.
 * @returns {Promise<Array<object>>} A promise that resolves with an array of job objects.
 * @throws {Error} If the request fails.
 */
async function listJobs(options = {}) {
  console.log('listJobs called with options:', options);
  const { page = 1, limit = 20, ...filters } = options;

  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  for (const [key, value] of Object.entries(filters)) {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  }

  const response = await fetch(`/api/marketplace/jobs?${params.toString()}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Failed to list jobs' }));
    throw new Error(errorData.message || `Failed to list jobs. Status: ${response.status}`);
  }

  return response.json();
}

/**
 * Fetches details for a specific job posting.
 * @param {string} jobId - The ID of the job to fetch.
 * @returns {Promise<object|null>} A promise that resolves with the job object, or null if not found.
 * @throws {Error} If the request fails.
 */
async function getJobDetails(jobId) {
  console.log('getJobDetails called for jobId:', jobId);
  if (!jobId) {
    throw new Error('Job ID is required.');
  }

  const response = await fetch(`/api/marketplace/jobs/${jobId}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: `Failed to get job details for ID ${jobId}` }));
    throw new Error(errorData.message || `Failed to get job details. Status: ${response.status}`);
  }

  return response.json();
}

/**
 * Fetches a list of talent profiles from the marketplace.
 * @param {object} [options={}] - Filtering and pagination options.
 * @param {number} [options.page=1] - Page number.
 * @param {number} [options.limit=20] - Items per page.
 * @param {string} [options.skills] - Filter by skills (e.g., "React,Node.js").
 * @param {string} [options.experienceLevel] - Filter by experience level.
 * @param {string} [options.availability] - Filter by availability.
 * @returns {Promise<Array<object>>} A promise that resolves with an array of talent profile objects.
 * @throws {Error} If the request fails.
 */
async function listTalent(options = {}) {
  console.log('listTalent called with options:', options);
  const { page = 1, limit = 20, ...filters } = options;

  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  for (const [key, value] of Object.entries(filters)) {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  }

  const response = await fetch(`/api/marketplace/talent?${params.toString()}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Failed to list talent' }));
    throw new Error(errorData.message || `Failed to list talent. Status: ${response.status}`);
  }

  return response.json();
}

/**
 * Fetches details for a specific talent profile.
 * @param {string} talentId - The ID of the talent profile to fetch.
 * @returns {Promise<object|null>} A promise that resolves with the talent profile object, or null if not found.
 * @throws {Error} If the request fails.
 */
async function getTalentDetails(talentId) {
  console.log('getTalentDetails called for talentId:', talentId);
  if (!talentId) {
    throw new Error('Talent ID is required.');
  }

  const response = await fetch(`/api/marketplace/talent/${talentId}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: `Failed to get talent details for ID ${talentId}` }));
    throw new Error(errorData.message || `Failed to get talent details. Status: ${response.status}`);
  }

  return response.json();
}

export {
  listProducts,
  getProductDetails,
  submitQuoteRequest,
  getQuoteStatus,
  listJobs,
  getJobDetails,
  listTalent,
  getTalentDetails
};

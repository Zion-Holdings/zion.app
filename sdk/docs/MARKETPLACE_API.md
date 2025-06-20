# Marketplace API (MARKETPLACE_API.md)

This module provides functionalities for interacting with the Zion OS marketplace. This includes listing available products, services, or talent, viewing details, and managing interactions like quote requests.

## Methods

### `listProducts(options)`

Fetches a list of products or services from the marketplace.

*   **Parameters:**
    *   `options` (object, optional): Filtering and pagination options.
        *   `options.page` (number, optional, default: 1): Page number for pagination.
        *   `options.limit` (number, optional, default: 20): Number of items per page.
        *   `options.category` (string, optional): Filter by a specific category.
        *   `options.sortBy` (string, optional): Field to sort by (e.g., "price_asc", "price_desc", "date_added").
        *   `options.type` (string, optional): Filter by type of listing (e.g., "service", "product", "talent_profile", "job_posting").
*   **Returns:** `Promise<Array<object>>` - A promise that resolves with an array of product/service objects. Each object should contain at least `id`, `name`, `description`, `price` (if applicable), and `category`.
*   **Throws:** `Error` - If the request fails due to network issues or backend errors.

### `getProductDetails(productId)`

Fetches detailed information for a specific product or service.

*   **Parameters:**
    *   `productId` (string, required): The unique identifier of the product or service.
*   **Returns:** `Promise<object|null>` - A promise that resolves with the detailed product/service object, or `null` if not found. The object should include all relevant fields like `id`, `name`, `description`, `images`, `price`, `vendorInfo`, etc.
*   **Throws:** `Error` - If the request fails.

### `submitQuoteRequest(quoteDetails)`

Submits a request for a quote, typically for services or custom orders.

*   **Parameters:**
    *   `quoteDetails` (object, required): Details for the quote request.
        *   `quoteDetails.name` (string, required): Customer's full name.
        *   `quoteDetails.email` (string, required): Customer's email address.
        *   `quoteDetails.phone` (string, required): Customer's phone number.
        *   `quoteDetails.details` (string, required): A detailed description of the requested service or product.
        *   `quoteDetails.productId` (string, optional): If the quote is for a specific existing product/service.
        *   `quoteDetails.country` (string, optional): Customer's country.
        *   `quoteDetails.service` (string, optional): Specific service being requested if not tied to a `productId`.
*   **Returns:** `Promise<object>` - A promise that resolves with a confirmation object (e.g., `{ success: true, quoteId: 'xyz123', message: 'Quote request submitted successfully.' }`).
*   **Throws:** `Error` - If the quote submission fails (e.g., validation error, server error).

---

### Additional Methods:

#### `getQuoteStatus(quoteId)`
*   **Purpose:** Fetches the current status of a previously submitted quote request.
*   **Parameters:** `quoteId` (string, required)
*   **Returns:** `Promise<object|null>` - `null` if the quote is not found.

#### `listJobs(options)`
*   **Purpose:** Fetches a list of job postings from the marketplace.
*   **Parameters:** `options` (object, optional) - Similar to `listProducts` but with job-specific filters (e.g., `skill`, `jobType`, `budgetRange`).
*   **Returns:** `Promise<Array<object>>`

#### `getJobDetails(jobId)`
*   **Purpose:** Fetches details for a specific job posting.
*   **Parameters:** `jobId` (string, required)
*   **Returns:** `Promise<object|null>` - `null` if the job is not found.

#### `listTalent(options)`
*   **Purpose:** Fetches a list of talent profiles.
*   **Parameters:** `options` (object, optional) - Similar to `listProducts` but with talent-specific filters (e.g., `skills`, `experienceLevel`, `availability`).
*   **Returns:** `Promise<Array<object>>`

#### `getTalentDetails(talentId)`
*   **Purpose:** Fetches details for a specific talent profile.
*   **Parameters:** `talentId` (string, required)
*   **Returns:** `Promise<object|null>` - `null` if the talent profile is not found.

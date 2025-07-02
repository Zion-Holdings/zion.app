# Hardcoded Strings Report

Generated on: 2025-06-29T01:35:35.651Z

## Summary

- **Total Files Analyzed**: 2022
- **Files Using Translation**: 40
- **Files with Hardcoded Strings**: 1398
- **Translation Coverage**: 2%

## 🔴 High Priority - Files Without Translation Setup

These files contain hardcoded strings and don't use the translation system:

### .storybook/main.ts

**Hardcoded strings found:**
- "@storybook/addon-essentials"
- "@storybook/addon-a11y"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### api/contact.js

**Hardcoded strings found:**
- "All fields are required"
- "Failed to send message"
- "Method Not Allowed"
- "New contact message:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### api/create-checkout-session.js

**Hardcoded strings found:**
- "Refusing to use live Stripe key on non-production domain"
- "Create checkout session error:"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### api/create-payment-intent.js

**Hardcoded strings found:**
- "Invalid amount"
- "Refusing to use live Stripe key on non-production domain"
- "Create payment intent error:"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### api/feedback.js

**Hardcoded strings found:**
- "Failed to save feedback"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### api/newsletter/subscribe.js

**Hardcoded strings found:**
- "Subscription failed"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### api/nft/mint.js

**Hardcoded strings found:**
- "Invalid chain selected"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### api/onsite-request.js

**Hardcoded strings found:**
- "Missing required fields"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### api/quotes.js

**Hardcoded strings found:**
- "Missing required fields"
- "Quote submission failed"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### api/service-request.js

**Hardcoded strings found:**
- "Missing required fields"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### api/stripe-webhook.js

**Hardcoded strings found:**
- "Failed to update order"
- "Method Not Allowed"
- "Webhook Error: ${err.message}"
- "checkout.session.completed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### api/subscribe.js

**Hardcoded strings found:**
- "Subscription failed"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### api/wallet.js

**Hardcoded strings found:**
- "Failed to fetch wallet"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/add_to_cart.cy.ts

**Hardcoded strings found:**
- "add to cart"
- "/cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/ai_matcher_home_card.cy.ts

**Hardcoded strings found:**
- "AI Matcher home card"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/auth-integration.cy.ts

**Hardcoded strings found:**
- "register and login flow"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/black_screen_spec.cy.ts

**Hardcoded strings found:**
- "Zion App Load Test"
- "Should load without black screen or major rendering failure"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/blank_render.cy.ts

**Hardcoded strings found:**
- "Blank render detection"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/blog.cy.ts

**Hardcoded strings found:**
- "Latest Articles"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/browse_talent_detail.cy.ts

**Hardcoded strings found:**
- "View"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/buy_now_login_redirect.cy.ts

**Hardcoded strings found:**
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/cart_badge.cy.ts

**Hardcoded strings found:**
- "Cart"
- "cart badge"
- "Add to Cart"
- "/cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/cart_page.cy.ts

**Hardcoded strings found:**
- "cart page loads"
- "shows cart heading"
- "/cart"
- "Your Cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/checkout_flow_spec.cy.ts

**Hardcoded strings found:**
- "Checkout Flow with Mocked Stripe"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/checkout_payment.cy.ts

**Hardcoded strings found:**
- "test checkout purchase"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/checkout_test_route_spec.cy.ts

**Hardcoded strings found:**
- "Checkout Test Route"
- "Test Product Checkout"
- "should redirect to order confirmation page on successful payment"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/community-auth.cy.ts

**Hardcoded strings found:**
- "community create post auth redirect"
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/community-category.cy.ts

**Hardcoded strings found:**
- "Getting Hired"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/criticalPaths.cy.ts

**Hardcoded strings found:**
- "Rack Mount"
- "This post was created by Cypress during an automated test."
- "Critical user journeys"
- "Registers a new user successfully"
- "Logs in and completes Stripe test checkout"
- "Loads equipment detail page"
- "Creates a community post"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/error_handling.cy.ts

**Hardcoded strings found:**
- "Error Handling"
- "should load the main page (e.g., Home) without the global error boundary being visible"
- "should display global error fallback for a render error and allow retry"
- "/test-error-render"
- "should display global error fallback for an error thrown on mount and allow retry"
- "/test-error-mount"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/footer_newsletter.cy.ts

**Hardcoded strings found:**
- "Subscribe"
- "Successfully subscribed to newsletter!"
- "Internal Server Error"
- "s check for the data.error message if provided.
    cy.contains("
- "Footer Newsletter Form"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/forgot-password.cy.ts

**Hardcoded strings found:**
- "Send Reset Link"
- "An internal server error occurred. Please try again later."
- "Failed to send reset link. Please try again."
- "Forgot Password Page"
- "should allow a user to request a password reset and see a success message"
- "handles server errors without uncaught exceptions"
- "An internal server error occurred..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/full_checkout_flow.cy.ts

**Hardcoded strings found:**
- "buy now full checkout"
- "Pay"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/home_error_boundary.cy.ts

**Hardcoded strings found:**
- "home page error handling"
- "shows fallback banner when server-side props fail"
- "/?forceError=1"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/home_page_health.cy.ts

**Hardcoded strings found:**
- "Home Page Health"
- "should load the home page without runtime errors and display content"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/loader_overlay.cy.ts

**Hardcoded strings found:**
- "/about"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/login-page-renders-and-attempts-auth.cy.ts

**Hardcoded strings found:**
- "some error"
- "Enter password"
- "Welcome back"
- "form.setError("
- ", { message: result.error });"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/login.cy.ts

**Hardcoded strings found:**
- "Invalid credentials"
- "Enter password"
- "login flow"
- "shows error on invalid password"
- "/auth/login"
- "/login"
- "Login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/login_api.cy.ts

**Hardcoded strings found:**
- "Invalid credentials"
- "returns error on 401"
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/login_contains_signin.cy.ts

**Hardcoded strings found:**
- "login page contains Sign In"
- "shows Sign In text"
- "/login"
- "Sign In"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/login_marketplace.cy.ts

**Hardcoded strings found:**
- "login to reach marketplace"
- "allows user to login and redirect to marketplace"
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/login_nav.cy.ts

**Hardcoded strings found:**
- "login link navigation"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/logout.cy.ts

**Hardcoded strings found:**
- "logout flow"
- "logs out and shows login link"
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/marketplace-loads.cy.ts

**Hardcoded strings found:**
- "Marketplace Page"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/marketplace-view.cy.ts

**Hardcoded strings found:**
- "List view"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/marketplace_dropdown.cy.ts

**Hardcoded strings found:**
- "Marketplace dropdown navigation"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/marketplace_overview.cy.ts

**Hardcoded strings found:**
- "Marketplace Overview"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/navigation_links.cy.ts

**Hardcoded strings found:**
- "Main navigation links"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/oauth_google.cy.ts

**Hardcoded strings found:**
- "google oauth callback"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/orders.cy.ts

**Hardcoded strings found:**
- "loads orders and shows download link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/quote-request.cy.ts

**Hardcoded strings found:**
- "cannot continue without selecting a service"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/register-auto-login.cy.ts

**Hardcoded strings found:**
- "register auto login redirect"
- "creates account and goes to dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/register.cy.ts

**Hardcoded strings found:**
- "User registered successfully"
- "register flow"
- "can register a new user"
- "visiting /register shows register form and sign-in link works"
- "/register"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/request-service.cy.ts

**Hardcoded strings found:**
- "Your name"
- "Phone"
- "John Doe"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/reset-password.cy.ts

**Hardcoded strings found:**
- "New password"
- "Confirm password"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/responsive_layout_spec.cy.js

**Hardcoded strings found:**
- "Should render layout correctly"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/return_home_404.cy.ts

**Hardcoded strings found:**
- "404 Return Home link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/search-suggestions.cy.ts

**Hardcoded strings found:**
- "Search Suggestions Navigation"
- "should maintain search state when navigating back"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/search_autocomplete.cy.ts

**Hardcoded strings found:**
- "Search autocomplete navigation"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/search_bar_interactive.cy.ts

**Hardcoded strings found:**
- "Search..."
- "Search Bar Interaction"
- "Home Page"
- "should show search suggestions when typing on home page"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/search_functionality.cy.ts

**Hardcoded strings found:**
- "Search Functionality"
- "Mod"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/search_product.cy.ts

**Hardcoded strings found:**
- "Search"
- "Product Search"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/searchbar_mobile_responsiveness.cy.ts

**Hardcoded strings found:**
- "Search Bar Mobile Responsiveness"
- "should not have horizontal scroll on mobile and search input should be visible"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/services_page.cy.ts

**Hardcoded strings found:**
- "Services page"
- "/services"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/signup-auto-login.cy.ts

**Hardcoded strings found:**
- "Signup and Auto-Login Flow"
- "should register a new user, auto-login, and redirect to marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/signup.cy.ts

**Hardcoded strings found:**
- "sign up flow"
- "registers new user"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/signup_login_checkout.cy.ts

**Hardcoded strings found:**
- "signup to checkout flow"
- "registers, logs in, adds to cart and completes checkout"
- "/auth/register"
- "Pay"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/social-login.cy.ts

**Hardcoded strings found:**
- "Sign in with Google"
- "Sign in with Facebook"
- "social login buttons redirect through NextAuth"
- "/login"
- "google button triggers NextAuth sign-in"
- "facebook button triggers NextAuth sign-in"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/talent-profile.cy.ts

**Hardcoded strings found:**
- "Talent Profile Page"
- "Alexandra Chen"
- "directly navigates to a talent profile page and checks the heading"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/talent-view.cy.ts

**Hardcoded strings found:**
- "View"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/unauthenticated-root-redirect.cy.ts

**Hardcoded strings found:**
- "Unauthenticated Root Access"
- "should allow unauthenticated users to view the home page"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/e2e/wallet.cy.ts

**Hardcoded strings found:**
- "wallet dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### cypress/support/e2e.ts

**Hardcoded strings found:**
- "WebSocket closed without opened"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### extension/background.js

**Hardcoded strings found:**
- "OpenAI request failed"
- "OpenAI request error"
- "Unauthorized sender"
- "Ask ZionGPT error:"
- "Failed to process request"
- "Post job error:"
- "Failed to open job posting page"
- "resume-search"
- "Resume search error:"
- "Failed to open talent page"
- "View notifications error:"
- "Failed to open notifications page"
- "Unknown message type"
- "Model key missing"
- "Error contacting model"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### extension/popup.js

**Hardcoded strings found:**
- "Request timeout"
- "Failed to contact background script"
- "Post job"
- "Resume search"
- "View notifications"
- "Please enter a prompt."
- "resume-search"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### extractFailingCode.js

**Hardcoded strings found:**
- "No error found in ESLint report."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### fix-router-imports.js

**Hardcoded strings found:**
- "Found ${files.length} files to fix"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### instrumentation.ts

**Hardcoded strings found:**
- "ResizeObserver"
- "Non-Error promise rejection captured"
- "Loading chunk"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### monitoring/src/alerter.ts

**Hardcoded strings found:**
- "Unknown error"
- "marketplace-next-app"
- "(This should only apply to non-K8s services)."
- "Failed to restart (PM2) service"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### monitoring/src/index.ts

**Hardcoded strings found:**
- "Error during initial monitoring run:"
- "Unknown error"
- "Error during scheduled monitoring run:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### monitoring/src/latencyTester.ts

**Hardcoded strings found:**
- "Unknown error"
- "Custom Server Health"
- "NonExistent Service"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### monitoring/src/monitor.ts

**Hardcoded strings found:**
- "Custom Server Health"
- "No responses measured or all responses were errors before latency could be determined."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### netlify/functions/healthCheckCron.ts

**Hardcoded strings found:**
- "Health check successful for ${healthEndpoint}: Status ${response.status}, Duration ${duration}ms"
- "Health check latency exceeded for ${healthEndpoint}: ${duration}ms"
- "Error during health check for ${healthEndpoint}: ${error instanceof Error ? error.message : String(error)}. Duration: ${duration}ms. Stack: ${error instanceof Error ? error.stack?.substring(0, 100) : String(error)}...(truncated)"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### netlify/functions/sentryCheck.ts

**Hardcoded strings found:**
- "Sentry DSN not configured"
- "Sentry DSN is configured"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### netlify/functions/sentryDsnCheckCron.ts

**Hardcoded strings found:**
- "Error hitting DSN check route"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### next-env.d.ts

**Hardcoded strings found:**
- "next/image-types/global"
- "next/navigation-types/compat/navigation"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/403.tsx

**Hardcoded strings found:**
- "Access Denied"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/500.tsx

**Hardcoded strings found:**
- "Return to Home"
- "Server Error"
- "next/link"
- "500 - Server Error"
- "An unexpected error occurred."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/_app.tsx

**Hardcoded strings found:**
- "Loading..."
- "Service initialization failed"
- "Poppins Fallback"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/activity-log.tsx

**Hardcoded strings found:**
- "User Activity Log"
- "Clear Log"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/admin/pitch-generator.tsx

**Hardcoded strings found:**
- "Loading user information..."
- "Access Denied"
- "Go to Admin Dashboard"
- "Error:"
- "Step 1: Provide Company Details"
- "Step 2: Confirm Marketplace Data"
- "Loading synced data..."
- "Step 3: Edit Your Pitch Deck"
- "Back to Data"
- "Google Slides"
- "Generating slides, please wait..."
- "Saving version, please wait..."
- "Version History"
- "Load Version"
- "Pitch Deck Generator"
- "No deck to save!"
- "Failed to save version"
- "Failed to save version:"
- "Failed to save version."
- "Failed to fetch version history"
- "Version ${newVersionNumber} saved successfully (mocked). Now working on v${newVersionNumber + 1}."
- "Solution"
- "Zion.app provides a unified AI services marketplace connecting businesses with verified AI professionals."
- "Market Opportunity"
- "Traction"
- "Business Model"
- "Arial, sans-serif"
- "Proceed to Editor / Regenerate"
- "Generate Pitch Deck & Edit"
- "slide-editor"
- "Regenerate AI Deck"
- "Save v${deckVersion}"
- "Regenerate"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/auth/[...nextauth].ts

**Hardcoded strings found:**
- "WalletConnectProvider: Error looking up user by wallet address:"
- "WalletConnectProvider: Supabase signUp error:"
- "User already registered"
- "WalletConnectProvider: Error creating user profile after signup:"
- "WalletConnectProvider: Error during signature verification or DB operation:"
- "Supabase sign-in error:"
- "WalletConnectProvider: Missing address, signature, or message."
- "WalletConnectProvider: User profile created and linked for ${authUserId}"
- "WalletConnectProvider: Signature verification failed. Expected ${credentials.address}, got ${recoveredAddress}"
- "Credentials missing"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/auth/confirm.ts

**Hardcoded strings found:**
- "Method not allowed"
- "/error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/auth/forgot.ts

**Hardcoded strings found:**
- "Auth0 configuration missing"
- "Method not allowed"
- "Invalid input"
- "Authentication service not configured"
- "Failed to send reset link. Please try again."
- "Password reset error:"
- "Allow"
- "Password reset ticket created successfully for:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/auth/health.ts

**Hardcoded strings found:**
- "Auth service not configured"
- "Authentication service configuration incomplete"
- "Supabase health check failed with status"
- "Supabase health check error:"
- "NEXT_PUBLIC_SUPABASE_ANON_KEY"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/auth/register.ts

**Hardcoded strings found:**
- "Password must be at least 8 characters long"
- "Authentication service not configured"
- "Supabase signup error:"
- "already registered"
- "Password should be"
- "Failed to create account"
- "SIGNUP_ERROR"
- "Registration error:"
- "Internal server error during registration"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/auth/resend-verification-email.ts

**Hardcoded strings found:**
- "Auth provider not configured"
- "Allow"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/blog/[slug].ts

**Hardcoded strings found:**
- "Slug is required"
- "Post not found"
- "Internal Server Error: Failed to fetch blog post"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/blog/index.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/categories/[slug]/items.ts

**Hardcoded strings found:**
- "Database query timeout"
- "Prisma disconnect error:"
- "Allow"
- "Method ${req.method} Not Allowed"
- "${profile.professional_title} with ${profile.years_experience || 0} years experience"
- "Category with slug"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/categories.ts

**Hardcoded strings found:**
- "Database query timeout"
- "Allow"
- "Method ${req.method} Not Allowed"
- "Using ${CATEGORIES.length} fallback categories"
- "No categories data available"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/checkout/session.ts

**Hardcoded strings found:**
- "Missing cart"
- "Checkout session error:"
- "Allow"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/checkout-session.ts

**Hardcoded strings found:**
- "Mock checkout session created for development"
- "Checkout session creation error:"
- "StripeCardError"
- "Payment processing error"
- "StripeInvalidRequestError"
- "Invalid checkout request"
- "Failed to create checkout session"
- "Internal server error"
- "No STRIPE_TEST_SECRET_KEY configured, using dummy key for development"
- "Allow"
- "Method ${req.method} Not Allowed"
- "Using dummy Stripe key - returning mock checkout session"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/create-payment-intent.ts

**Hardcoded strings found:**
- "Invalid amount"
- "Refusing to use live Stripe key on non-production domain"
- "Create payment intent error:"
- "An error occurred"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/dev/dashboard.ts

**Hardcoded strings found:**
- "Unauthorized"
- "Dashboard metrics error:"
- "Allow"
- "Method ${req.method} Not Allowed"
- "X-Dashboard-Status"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/equipment.ts

**Hardcoded strings found:**
- "Request timeout after 5 seconds"
- "Internal Server Error: Failed to fetch equipment"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/extension-health.ts

**Hardcoded strings found:**
- "Method not allowed"
- "Extension health check error:"
- "Internal server error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/favorites.ts

**Hardcoded strings found:**
- "Supabase not configured"
- "Missing userId"
- "Error fetching favorites:"
- "Failed to fetch favorites"
- "Missing fields"
- "Error adding favorite:"
- "Failed to add favorite"
- "Added"
- "Allow"
- "DELETE"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/feedback.ts

**Hardcoded strings found:**
- "Invalid feedback data"
- "Error saving feedback:"
- "Failed to save feedback"
- "Feedback"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/health/environment.ts

**Hardcoded strings found:**
- "Supabase configuration missing"
- "Supabase credentials are placeholder values"
- "Allow"
- "Method ${req.method} Not Allowed"
- "Supabase credentials appear to be placeholders"
- "Sentry DSN appears to be a placeholder"
- "Sentry DSN appears to be a placeholder value"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/health/index.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/hello.ts

**Hardcoded strings found:**
- "Hello world"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/image/[...params].ts

**Hardcoded strings found:**
- "Invalid image path"
- "Forbidden path"
- "Image not found"
- "Not a file"
- "Unsupported image format"
- "Image serving error:"
- "Internal server error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/jobs.ts

**Hardcoded strings found:**
- "Senior React Developer"
- "DevOps Engineer"
- "Bearer"
- "Allow"
- "Computing jobs with filters: ${filterParams}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/kb-chat.ts

**Hardcoded strings found:**
- "Messages array is required"
- "No user message found"
- "Internal server error"
- "Allow"
- "Method ${req.method} Not Allowed"
- "Our pricing varies by service. You can view detailed pricing on our marketplace or contact sales@ziontechgroup.com for custom quotes."
- "To create an account, click"
- "m here to help with questions about Zion"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/logs.ts

**Hardcoded strings found:**
- "Method not allowed"
- "Invalid log entry format"
- "Error processing logs:"
- "Internal server error"
- "Failed to process log entries"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/marketplace/categories.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} not allowed"
- "Content-Type"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/marketplace/equipment.ts

**Hardcoded strings found:**
- "High-performance GPU for AI workloads and machine learning training"
- "In Stock"
- "Limited Stock"
- "Tesla T4 GPU Server"
- "Cloud-optimized GPU server for AI inference and training"
- "Supermicro AI Workstation"
- "Pre-order"
- "Edge AI Computing Box"
- "Compact edge computing device for IoT and edge AI applications"
- "Quantum Development Kit"
- "Allow"
- "Method ${req.method} not allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/marketplace/overview.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} not allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/marketplace/product/[productId].ts

**Hardcoded strings found:**
- "Error fetching product ${productId}:"
- "Allow"
- "Method ${req.method} Not Allowed"
- "Internal server error while fetching product details."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/marketplace/products.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/marketplace/talent.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} not allowed"
- "Returning ${mappedProfiles.length} talent profiles (page ${page}, limit ${limit})"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/newsletter.ts

**Hardcoded strings found:**
- "Newsletter integration error:"
- "Subscription failed"
- "Newsletter subscription error:"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/points/redeem.ts

**Hardcoded strings found:**
- "Invalid request"
- "Allow"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/products/index.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/push/send.ts

**Hardcoded strings found:**
- "Push send failed"
- "Allow"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/push/subscribe.ts

**Hardcoded strings found:**
- "Failed to save push subscription"
- "Failed to save subscription"
- "Allow"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/resend-verification-email.ts

**Hardcoded strings found:**
- "Supabase configuration missing"
- "Internal server error"
- "Unknown error"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/reviews/[productId].ts

**Hardcoded strings found:**
- "Supabase not configured"
- "Error fetching reviews:"
- "Failed to fetch reviews"
- "Internal server error while fetching reviews."
- "Unknown error"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/reviews/index.ts

**Hardcoded strings found:**
- "Supabase not configured"
- "Error fetching reviews:"
- "Failed to fetch reviews"
- "Error creating review:"
- "Failed to create review"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/search/suggest.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"
- "DevOps"
- "Hardware & Equipment"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/search.ts

**Hardcoded strings found:**
- "Search query failed:"
- "${profile.professional_title} - ${profile.bio ||"
- "Allow"
- "Method ${req.method} Not Allowed"
- "Performing search for:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/services.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/status.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/stripe/webhook.ts

**Hardcoded strings found:**
- "Failed to update order"
- "Allow"
- "Method Not Allowed"
- "Webhook Error: ${err.message}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/talent/[id].ts

**Hardcoded strings found:**
- "Invalid id"
- "Talent not found"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/api/talent.ts

**Hardcoded strings found:**
- "An internal server error occurred while fetching talent profiles"
- "Jane Smith"
- "Full Stack Developer"
- "React"
- "Alex Chen"
- "Python"
- "TensorFlow"
- "Maria Garcia"
- "Figma"
- "Adobe Creative Suite"
- "Allow"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/auth/error.tsx

**Hardcoded strings found:**
- "Authentication Error - Zion Tech Marketplace"
- "Authentication Error"
- "Try Again"
- "Go to Homepage"
- "next/link"
- "next/head"
- "Authentication error page"
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/auth/login.tsx

**Hardcoded strings found:**
- "This should only take a moment"
- "Already Logged In"
- "Redirecting to your dashboard..."
- "Sign In - Zion Tech Marketplace"
- "Sign in to your account"
- "Session Check Timed Out"
- "Check Status"
- "Password"
- "Authentication Error"
- "Or continue with"
- "Google"
- "GitHub"
- "Terms of Service"
- "Privacy Policy"
- "Zion Tech"
- "next/link"
- "LoginPage: Error getting session:"
- "An unexpected error occurred. Please try again."
- "Supabase sign-in error:"
- "Login failed. Please check your credentials and try again."
- "invalid login credentials"
- "Network error. Please check your internet connection and try again."
- "Your account has been disabled. Please contact support."
- "Login failed due to an unknown error. Please try again."
- "ExceptionError"
- "Google OAuth error:"
- "GitHub OAuth error:"
- "LoginPage: Initial session check effect runs."
- "LoginPage: Session check timeout after 5 seconds"
- "LoginPage: onAuthStateChange event:"
- "LoginPage: Unmounting, cleaning up auth listener."
- "LoginPage: Redirection effect runs. sessionChecked: ${sessionChecked}, isLoading: ${isLoading}, user: ${user?.id}, pathname: ${router.pathname}"
- "/dashboard"
- "LoginPage: Conditions met for redirect. Current path: ${router.pathname}, Target: ${returnTo}"
- "LoginPage: Executing delayed redirect to ${returnTo}"
- "ValidationError"
- "Supabase sign-in returned no error but no user."
- "LoginPage: Rendering"
- "LoginPage: Rendering login form. sessionChecked: ${sessionChecked}, user: ${user?.id}, isLoading: ${isLoading}"
- "Sign in to your Zion Tech Marketplace account"
- "/auth/register"
- "Hide"
- "Didn"
- "Sign in"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/auth/register.tsx

**Hardcoded strings found:**
- "Create Account - Zion Tech Marketplace"
- "Create your account"
- "Or continue with"
- "Google"
- "GitHub"
- "Terms of Service"
- "Privacy Policy"
- "Zion Tech"
- "next/link"
- "Create your Zion Tech Marketplace account"
- "/auth/login"
- "Google signup button clicked - href may be incorrect if NextAuth is not used."
- "GitHub signup button clicked - href may be incorrect if NextAuth is not used."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/auth/verify-email.tsx

**Hardcoded strings found:**
- "Go to Login"
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/blog/[slug].tsx

**Hardcoded strings found:**
- "Article not found"
- "BlogPosting"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/cart/index.tsx

**Hardcoded strings found:**
- "@/context/CartContext"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/checkout/[id].tsx

**Hardcoded strings found:**
- "Loading checkout..."
- "@/pages/CheckoutPage"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/checkout/index.tsx

**Hardcoded strings found:**
- "Loading checkout..."
- "@/pages/Checkout"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/checkout-test/index.tsx

**Hardcoded strings found:**
- "Test Product Checkout"
- "Dummy Product"
- "This is a test checkout flow using Stripe test mode. No real charges will be made."
- "Checkout error:"
- "Payment intent error:"
- "Test Product"
- "✅ Checkout session created successfully! In production, you would be redirected to Stripe."
- "❌ Checkout test failed. Check console for details."
- "✅ Payment intent created successfully!"
- "Arial, sans-serif"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/checkout-test/mock.tsx

**Hardcoded strings found:**
- "Mock Checkout Complete!"
- "Configure real Stripe test keys in environment variables"
- "Continue Shopping"
- "next/link"
- "/checkout"
- "bg-zion-blue-light/80 backdrop-blur-md rounded-lg border border-zion-cyan/20 p-8 text-center"
- "/cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/community/[slug].tsx

**Hardcoded strings found:**
- "Create New Post"
- "Login required"
- "Loading..."
- "Load More"
- "Be the first to post"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/constitution.tsx

**Hardcoded strings found:**
- "Constitution"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/dashboard/ai-core/index.tsx

**Hardcoded strings found:**
- "next/dynamic"
- "@/pages/AICoreDashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/dashboard/index.tsx

**Hardcoded strings found:**
- "Loading dashboard..."
- "Failed to load Dashboard component:"
- "@/pages/Dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/deploy/genesis.tsx

**Hardcoded strings found:**
- "Zion OS Instance Deployment"
- "Instance Configuration"
- "Instance Name"
- "English"
- "Spanish"
- "German"
- "Custom"
- "Deployment Region"
- "Asia-Pacific"
- "Token Activation"
- "Governance Mode"
- "Admin"
- "Hybrid"
- "Branding &amp; Customization"
- "Logo Upload"
- "Subdomain"
- "Auto-Deploy Modules"
- "Deploy Instance"
- "/book-store (Zion hardcover print + linkable chapters)"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/dev/dashboard.tsx

**Hardcoded strings found:**
- "Loading dashboard..."
- "Dashboard Error"
- "Retry"
- "Development Dashboard - Zion App"
- "Development Dashboard"
- "Build Information"
- "Cache Performance"
- "Runtime Metrics"
- "Environment Configuration"
- "Build Status"
- "Total Pages"
- "Bundle Size"
- "Environment"
- "Uptime"
- "Heap Used"
- "Platform"
- "Node Version"
- "Supabase"
- "Stripe"
- "Sentry"
- "Reown"
- "next/head"
- "Bytes"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/equipment/[id].tsx

**Hardcoded strings found:**
- "next/dynamic"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/equipment/index.tsx

**Hardcoded strings found:**
- "next/dynamic"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/error.tsx

**Hardcoded strings found:**
- "Authentication Error - Zion Tech Marketplace"
- "Authentication Error"
- "There was an issue with your authentication request"
- "Try Again"
- "Go to Homepage"
- "Contact Support"
- "next/link"
- "next/head"
- "Authentication error page"
- "/auth/login"
- "/contact"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/forgot-password.tsx

**Hardcoded strings found:**
- "Forgot Password"
- "Login"
- "next/link"
- "Reset failed"
- "Failed to send reset link. Please try again."
- "Reset Link Sent"
- "Send Reset Link"
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/governance/[proposalId].tsx

**Hardcoded strings found:**
- "Loading proposal details..."
- "Cast Your Vote"
- "Connect Wallet to Participate"
- "To cast your vote or see your voting status, please connect your wallet."
- "Approve"
- "Reject"
- "Abstain"
- "next/link"
- "Please connect your wallet to vote."
- "Please enter a valid voting power greater than 0."
- "SUCCESSFUL"
- "EXECUTED"
- "CANCELED"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/governance/create.tsx

**Hardcoded strings found:**
- "Create New Proposal"
- "Title"
- "Summary"
- "Proposal Type"
- "Proposal Title"
- "Select a proposal type"
- "Submission error:"
- "Failed to create proposal."
- "Error:"
- "Submitting..."
- "Submit Proposal"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/governance/index.tsx

**Hardcoded strings found:**
- "Zion Governance"
- "My Votes"
- "Create Proposal"
- "Newest First"
- "Expiring Soon"
- "Most Funded"
- "Loading proposals..."
- "Search by title or summary..."
- "Filter by Status"
- "Filter by Type"
- "Sort By"
- "next/link"
- "Fetch error:"
- "/governance/create"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/governance/my-votes.tsx

**Hardcoded strings found:**
- "My Voting History"
- "Please connect your wallet to see your voting history."
- "Back to Proposals"
- "Loading your votes..."
- "You haven't voted on any proposals yet with the connected wallet, or your votes are associated with a platform login that isn't linked to this wallet address on the backend."
- "Proposal Title"
- "Your Vote"
- "Voting Power Used"
- "Date Voted"
- "next/link"
- "s main authentication, or this feature might require wallet-based vote fetching in the future if platform login is separate."
- "t voted on any proposals yet with the connected wallet, or your votes are associated with a platform login that isn"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/governance/zgp-library.tsx

**Hardcoded strings found:**
- "Zion Governance Proposal Library"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/index.tsx

**Hardcoded strings found:**
- "Throw Test Error"
- "Button error test:"
- "Failed to load home page."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/kids.tsx

**Hardcoded strings found:**
- "Loading storybook..."
- "next/dynamic"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/login.tsx

**Hardcoded strings found:**
- "Redirecting to Login - Zion Tech Marketplace"
- "Redirecting to login..."
- "/auth/login${queryString}"
- "Redirecting to login page"
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/marketplace/index.tsx

**Hardcoded strings found:**
- "next/dynamic"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/marketplace/listing/[slug].tsx

**Hardcoded strings found:**
- "Home"
- "Marketplace"
- "Add to Cart"
- "Add to Wishlist"
- "next/link"
- "Added to cart"
- "${listing.title} has been added to your cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/messages.tsx

**Hardcoded strings found:**
- "next/dynamic"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/offline.tsx

**Hardcoded strings found:**
- "You're Offline - Zion Tech Marketplace"
- "Go to Homepage"
- "Available Offline Features"
- "Access"
- "Requires Internet"
- "Recently viewed pages are cached and available offline"
- "Form submissions will be synced when you reconnect"
- "Connection restored"
- "next/link"
- "Browse Cached Equipment"
- "View Bookmarks"
- "Return to the main page"
- "You"
- "Connection Restored"
- "Offline Mode"
- "Try Again"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/order-success.tsx

**Hardcoded strings found:**
- "Thank you for your purchase!"
- "View Orders"
- "next/link"
- "Failed to load session"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/orders/[orderId].tsx

**Hardcoded strings found:**
- "next/dynamic"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/orders/index.tsx

**Hardcoded strings found:**
- "next/dynamic"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/payment-flow-test/index.tsx

**Hardcoded strings found:**
- "Payment Flow Smoke Test"
- "Add Test Product"
- "Add to Cart"
- "Environment Info"
- "Checkout failed"
- "Checkout error:"
- "Checkout session error"
- "Error:"
- "Payment intent error"
- "Added ${p.title} to cart"
- "Test Product"
- "Arial, sans-serif"
- "Not logged in"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/philosophy.tsx

**Hardcoded strings found:**
- "Philosophy"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/private.tsx

**Hardcoded strings found:**
- "Private Profile - Zion Tech Marketplace"
- "Private User Profile"
- "This page is only accessible to authenticated users"
- "User Information"
- "Authentication Details"
- "Last Sign In:"
- "Go to Dashboard"
- "Back to Home"
- "next/link"
- "Private user profile page"
- "Verified"
- "Unverified"
- "Never"
- "/dashboard"
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/product/[id].tsx

**Hardcoded strings found:**
- "Product Not Found"
- "Go back to homepage"
- "Home"
- "Marketplace"
- "Description"
- "next/link"
- "Product"
- "Product description"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/products/index.tsx

**Hardcoded strings found:**
- "next/dynamic"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/profile.tsx

**Hardcoded strings found:**
- "next/dynamic"
- "@/pages/Profile"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/project-room/[projectId].tsx

**Hardcoded strings found:**
- "Project Room"
- "next/router"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/register.tsx

**Hardcoded strings found:**
- "next/dynamic"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/request-quote/index.tsx

**Hardcoded strings found:**
- "Loading quote wizard..."
- "next/dynamic"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/resources/docs.tsx

**Hardcoded strings found:**
- "Getting Started"
- "Learn the basics of using Zion's platform and services."
- "Integration Guide"
- "Zion Tech Marketplace Quick Start"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/search/[slug].tsx

**Hardcoded strings found:**
- "Filters"
- "Relevance"
- "Newest"
- "Price: Low to High"
- "Price: High to Low"
- "Highest Rated"
- "All Categories"
- "All Ratings"
- "Loading..."
- "Search marketplace..."
- "filter-button"
- "sort-select"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/search.tsx

**Hardcoded strings found:**
- "Content Type"
- "Category"
- "All Categories"
- "Price Range"
- "Minimum Rating"
- "Any Rating"
- "Search Suggestions:"
- "Relevance"
- "Price: Low to High"
- "Price: High to Low"
- "Highest Rated"
- "Search Filters"
- "Filters"
- "Clear All"
- "Talent"
- "Services"
- "(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g,"
- "Blockchain Development"
- "${profile.professional_title} - ${profile.bio ||"
- "/search?q=${encodeURIComponent(term)}"
- "🔍 SearchPage component rendered with:"
- "{searchTerm}"
- "(${activeFiltersCount})"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/sentry-test.tsx

**Hardcoded strings found:**
- "Sentry Integration Test Page"
- "Throw Client-Side Error"
- "Sentry Client Test Error - Button Clicked!"
- "Client-side error thrown and captured by Sentry. Check your Sentry dashboard (or console for DSN issues)."
- "Arial, sans-serif"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/services/[slug].tsx

**Hardcoded strings found:**
- "Service"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/services/index.tsx

**Hardcoded strings found:**
- "next/dynamic"
- "@/pages/ServicesPage"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/static-props-example.tsx

**Hardcoded strings found:**
- "Static Props Example"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/talent/[id].tsx

**Hardcoded strings found:**
- "Error"
- "Failed to load talent profile."
- "Hire"
- "An error occurred while fetching the data."
- "{ profile: TalentProfile }"
- "profile-name"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/talent/index.tsx

**Hardcoded strings found:**
- "next/dynamic"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/verify-status.tsx

**Hardcoded strings found:**
- "Verification Status"
- "Check Verification Status"
- "Try Login"
- "Go Back"
- "Contact Support"
- "Network error. Please try again."
- "Error checking verification status:"
- "An unexpected error occurred while checking status. Please try again."
- "/contact"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages/video-call/[roomId].tsx

**Hardcoded strings found:**
- "Video Call"
- "next/router"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages_backup/500.tsx

**Hardcoded strings found:**
- "Retry"
- "react-error-boundary"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages_backup/SearchPage.tsx

**Hardcoded strings found:**
- "Loading..."
- "{searchQuery}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### pages_backup/[slug].tsx

**Hardcoded strings found:**
- "Page not found"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### plugins/wallet-connector/cypress/e2e/specs/components/WalletProvider.spec.tsx

**Hardcoded strings found:**
- "Error: Wallet context not found"
- "Connect"
- "WalletProvider"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### public/service-worker.js

**Hardcoded strings found:**
- "Background sync replay failed"
- "Zion Notification"
- "New message"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### public/sw.js

**Hardcoded strings found:**
- "Offline"
- "📡 Background fetch failed for:"
- "Content-Type"
- "🔄 Background sync triggered:"
- "View"
- "Dismiss"
- "Zion Notification"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### remote/dao/test-env.js

**Hardcoded strings found:**
- "Synced proposals and votes over satellite link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/analyze-bundle.js

**Hardcoded strings found:**
- "Large Dependencies Detected"
- "Bundle Optimization Suggestions"
- "Review if all features are needed"
- "Replace large dependencies with smaller alternatives"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/auto-lint-fix.js

**Hardcoded strings found:**
- ").filter(line => line.trim() !=="
- "ESLint auto-fix script finished."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/check-coverage-threshold.js

**Hardcoded strings found:**
- "Error checking coverage threshold:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/check-performance-logs.ts

**Hardcoded strings found:**
- "gh pr create --title"
- "No log entries found"
- "Average response time: ${avg.toFixed(2)}ms"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/check_coverage_and_notify.js

**Hardcoded strings found:**
- "Failed to create GitHub issue:"
- "gh issue create --title"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/cleanup-duplicate-pages.js

**Hardcoded strings found:**
- "📋 Found ${toDelete.length} files to delete:\n"
- "❌ Failed to delete: ${errorCount} files"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/codex-bug-fix.js

**Hardcoded strings found:**
- "Missing GITHUB_TOKEN environment variable"
- "Missing ISSUE_NUMBER environment variable"
- "Missing ISSUE_TITLE environment variable"
- "t let it stop the script.
    // The main error (e.g., patch apply failure) is more critical.
  }
}

function extractFilePaths(text) {
  if (!text) return [];
  const stricterRegex = /([\w.-]+\/)*[\w.-]+\.\w+/g;
  const paths = text.match(stricterRegex);
  return paths ? [...new Set(paths)] : [];
}

async function fetchFileContent(octokitInstance, owner, repo, filePath) {
  try {
    const response = await octokitInstance.rest.repos.getContent({
      owner,
      repo,
      path: filePath,
    });
    if (response.data.type ==="
- "Unhandled error in main execution"
- "Unhandled error in main execution (and failed to comment on issue)"
- "Error fetching file ${filePath}: ${error.message}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/codexWebhookServer.js

**Hardcoded strings found:**
- "❌ Execution error: ${error.message}"
- "Fix failed"
- "Fix triggered successfully"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/debug-login.js

**Hardcoded strings found:**
- "\n✅ Debug test completed successfully!"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/deploy-optimization.cjs

**Hardcoded strings found:**
- "Consider code splitting"
- "Address warnings"
- "Several warnings were detected during optimization."
- "Setup production monitoring"
- "Environment variables configured"
- "Security"
- "\n⚠️  WARNINGS:"
- "• ${warning}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/deploy-zion-ipfs.js

**Hardcoded strings found:**
- "Failed to add files to Helia."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/fix-api-types.js

**Hardcoded strings found:**
- "❌ Error processing ${filePath}:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/generate-ai-blog-post.js

**Hardcoded strings found:**
- "Use <h1> for the title and <h2> for section headings. Include at least two internal links to relevant service pages such as /services or /it-onsite-services."
- "Blog post saved to ${filePath}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/index-elasticsearch.js

**Hardcoded strings found:**
- "Indexing error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/link-checker/index.js

**Hardcoded strings found:**
- "Server responded with ${error.response.status}"
- "Found ${brokenExternal} broken external link(s) (4xx/5xx status)."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/maintenance/generate-tests.js

**Hardcoded strings found:**
- "Created placeholder test:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/monitor-backlinks.js

**Hardcoded strings found:**
- "Toxic backlinks: ${toxic.length}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/perf/monitor.js

**Hardcoded strings found:**
- "Monitor error:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/setup-auth0.js

**Hardcoded strings found:**
- "Please enter a valid Auth0 Client ID (32+ characters)"
- "Please enter a valid Auth0 Client Secret (64+ characters)"
- "No .env.local file found"
- "All required environment variables are set"
- "Auth0 domain test failed: ${error.message}"
- "Verify Health Check"
- "Setup cancelled by user"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/switch-netlify-site.js

**Hardcoded strings found:**
- "Missing Netlify environment variables"
- "Failed to rollback new site assignment:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/test-api-performance.js

**Hardcoded strings found:**
- "Request timeout"
- "Failed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/test-login-trace.js

**Hardcoded strings found:**
- "Should fail with missing credentials message"
- "❌ No test cases configured. Please check your environment variables."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/test-root-path.js

**Hardcoded strings found:**
- "Request timeout"
- "No title"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/update-icon-imports.js

**Hardcoded strings found:**
- "❌ Error processing ${filePath}:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/validate-environment.ts

**Hardcoded strings found:**
- "NEXT_PUBLIC_SENTRY_DSN appears to be a placeholder value"
- "NEXT_PUBLIC_REOWN_PROJECT_ID appears to be a placeholder value"
- "❌ ERRORS (must be fixed):"
- "• ${error}"
- "⚠️  WARNINGS:"
- "• ${warning}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/verify-production.js

**Hardcoded strings found:**
- "next/head"
- "• ${result.route}: ${result.error} (${result.type})"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/verify-staging.js

**Hardcoded strings found:**
- "/auth/login"
- "/about"
- "\nErrors:"
- "• ${error.route}: ${error.error}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/watchdog.js

**Hardcoded strings found:**
- "Failed to ensure single instance"
- "Failed to send Discord alert"
- "Self-heal command timed out after 10 minutes"
- "Self-heal action completed successfully. Resetting streaks."
- "Failed to start self-heal command"
- "Disabled"
- "Failed to use WATCHDOG_LOG_PATH at ${envPath}. Falling back to local logs directory."
- "Failed to create cwd log directory at ${cwdPath}"
- "Failed to create fallback log directory at ${fallback}"
- "Failed to create tmp log directory at ${tmpPath}"
- "Performance error detected. Streak: ${perfErrorStreak}"
- "3 consecutive performance errors"
- "3 consecutive security patches"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### scripts/watchdog.test.js

**Hardcoded strings found:**
- "Test Discord Alert"
- "Test error case"
- "Network Error"
- "Failed to send alert to Discord. Error: Network Error"
- "should call logError if axios returns an error"
- "Test self-heal trigger"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### sdk/js/auth/index.js

**Hardcoded strings found:**
- "Error fetching CSRF token:"
- "Login failed with status:"
- "Login succeeded but session data could not be retrieved."
- "Wallet login failed with status:"
- "Wallet login succeeded but session data could not be retrieved."
- "loginWithWallet error:"
- "Error fetching user session:"
- "Error polling auth state:"
- "Test User"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### sdk/js/marketplace/index.js

**Hardcoded strings found:**
- "Failed to list jobs"
- "Failed to list talent"
- "Failed to submit quote request. Status: ${response.status}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### sentry.ts

**Hardcoded strings found:**
- "ResizeObserver"
- "Non-Error promise rejection"
- "Loading chunk"
- "ChunkLoadError"
- "Sentry DSN not configured for production - error monitoring disabled"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### server/app.js

**Hardcoded strings found:**
- "Codex fix process failed to start or execute."
- "Codex fix process triggered successfully."
- "Codex execution error: ${error.message}"
- "Codex execution failed for route ${route ||"
- "}: ${error.message}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### server/controllers/authController.js

**Hardcoded strings found:**
- "Account inactive"
- "Incorrect password"
- "Missing required fields"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### server/controllers/syncController.js

**Hardcoded strings found:**
- "Invalid merkle root"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### server/routes/alerts.js

**Hardcoded strings found:**
- "Missing required fields: ip_address, route, reason"
- "Slack alert sent successfully"
- "Failed to send Slack alert"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### server/routes/stripe.js

**Hardcoded strings found:**
- "Subscription not found in Stripe"
- "User not found"
- "Internal Server Error: Stripe SDK not initialized."
- "Internal Server Error: Webhook secret not configured."
- "Webhook Error: ${err.message}"
- "Webhook Error: Subscription ${invoice.subscription} not found in Stripe for invoice ${invoice.id}"
- "Webhook Error: User not found for Stripe customer ID ${subscription.customer}"
- "Error processing ${event.type}: ${err.message}"
- "Webhook Warning: Subscription ${subscription.id} not found in DB for deletion."
- "Error processing customer.subscription.deleted: ${err.message}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### server/stubServer.js

**Hardcoded strings found:**
- "Hello world"
- "/hello"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/api/favorites.ts

**Hardcoded strings found:**
- "Failed to toggle favorite"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/api/recommendations.ts

**Hardcoded strings found:**
- "Failed to fetch recommendations"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/api/wallet.js

**Hardcoded strings found:**
- "Failed to fetch wallet"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/AIListingGenerator.tsx

**Hardcoded strings found:**
- "Title"
- "Category"
- "Generate Optimized Content"
- "Generated Content"
- "Description"
- "Tags"
- "Suggested Price Range"
- "Apply to My Listing"
- "Enter your product or service title"
- "Error generating content:"
- "Failed to generate content. Please try again."
- "Missing required fields"
- "Please provide at least a title and category."
- "Content Generated"
- "AI has created optimized listing content for you."
- "Generation Failed"
- "Content Applied"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/AIMatchingResults.tsx

**Hardcoded strings found:**
- "No matches found"
- "Your search:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/AIMatchmaker.tsx

**Hardcoded strings found:**
- "Describe what you&apos;re looking for and our AI will find the best matches"
- "Find Matches"
- "Error during AI matching:"
- "Please enter a description"
- "Matches Found"
- "Matching Error"
- "We couldn"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/AnalyticsConsentBanner.tsx

**Hardcoded strings found:**
- "Learn more"
- "Decline"
- "Accept"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ApiErrorBoundary.tsx

**Hardcoded strings found:**
- "Try Again"
- "Reload Page"
- "Offline"
- "Debug Info (Development Only)"
- "Something went wrong"
- "An unexpected error occurred while loading the page."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/AuthButtons.tsx

**Hardcoded strings found:**
- "Sign in with Google"
- "Sign in with GitHub"
- "Sign in with Facebook"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/AuthGuard.tsx

**Hardcoded strings found:**
- "Loading..."
- "Authentication Required"
- "Please log in to access this feature."
- "Access Denied"
- "/login"
- "/dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/BackToTopButton.tsx

**Hardcoded strings found:**
- "Back to top"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/BlogSection.tsx

**Hardcoded strings found:**
- "Stay updated with trends in AI technology, marketplace strategies, and IT services"
- "View All Articles"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/BreadcrumbJsonLd.tsx

**Hardcoded strings found:**
- "BreadcrumbList"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/CategoryCard.tsx

**Hardcoded strings found:**
- "next/link"
- "mb-4 p-3 bg-background rounded-full"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/CategoryListingPage.tsx

**Hardcoded strings found:**
- "No listings found"
- "Try adjusting your filters or search query"
- "Clear all filters"
- "Search listings..."
- "Sort By"
- "Filter"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ChatAssistant/ChatAssistant.tsx

**Hardcoded strings found:**
- "Promise"
- "Confirm Message"
- "Cancel"
- "Send"
- "Close chat"
- "Escape"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ChatAssistant/ChatInput.tsx

**Hardcoded strings found:**
- "Enter"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ChatAssistantTrigger.tsx

**Hardcoded strings found:**
- "Open chat assistant"
- "Error in AI chat:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ChatWidget.tsx

**Hardcoded strings found:**
- "Chat"
- "Send"
- "Close chat widget"
- "New message"
- "Notification"
- "Enter"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/CommunityDiscussion.tsx

**Hardcoded strings found:**
- "Community Discussion"
- "Cancel"
- "Post"
- "Title (e.g., Share an AI tool, Ask for help...)"
- "What"
- "Anna Zhou"
- "David Kim"
- "Quick tip: How to rank your Zion listing higher"
- "You"
- "Now"
- "New Post"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ComparisonSection.tsx

**Hardcoded strings found:**
- "Compare & Save"
- "Service"
- "Traditional Providers"
- "With Zion"
- "Savings"
- "Calculate Your Savings"
- "Server Hosting"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ConnectWalletButton.tsx

**Hardcoded strings found:**
- "Disconnect Wallet"
- "Connect Wallet"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ContactPublisherModal.tsx

**Hardcoded strings found:**
- "Contact Publisher"
- "Cancel"
- "Send message"
- "Failed to send message. Please try again."
- "contact-publisher-title"
- "Send Message"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ContactSection.tsx

**Hardcoded strings found:**
- "Get In Touch"
- "Request Commercial Proposal"
- "Send Us a Message"
- "Name"
- "Subject"
- "Message"
- "Thank you! We'll be in touch."
- "Message must be at least 10 characters"
- "Please check your form and try again"
- "Failed to send message"
- "Form Validation Error"
- "Message Sent"
- "ve received your message and will get back to you soon."
- "Submission Error"
- "w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ?"
- "w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ?"
- "w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.message ?"
- "Send Message"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/DynamicListingPage.tsx

**Hardcoded strings found:**
- "Filters"
- "Categories"
- "Brand"
- "All Brands"
- "Specifications"
- "Availability"
- "All"
- "Price Range"
- "Minimum Rating"
- "Clear All"
- "Newest"
- "Price: Low to High"
- "Price: High to Low"
- "Highest Rating"
- "No listings found"
- "Try adjusting your filters or search query"
- "Select Brand"
- "Search specifications..."
- "Select Availability"
- "Price range"
- "Search listings..."
- "Sort"
- "Listing filter error:"
- "Grid view"
- "Quote Requested"
- "cat-${filter.value}"
- "Clearing filters"
- "Search query:"
- "List view"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/EnhancedNewsletterForm.tsx

**Hardcoded strings found:**
- "Stay Updated"
- "Get exclusive offers, trending AI news, and early access to best deals"
- "Thank you for subscribing!"
- "Join 10,000+ tech professionals who already subscribe"
- "Subscription failed. Please try again."
- "Newsletter subscription error:"
- "Unable to subscribe right now. Please try again later."
- "Subscribe"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/EquipmentErrorBoundary.tsx

**Hardcoded strings found:**
- "Something went wrong"
- "Try Again"
- "Equipment page error:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ErrorBoundary.tsx

**Hardcoded strings found:**
- "Something went wrong"
- "Go Home"
- "ErrorBoundary caught an error:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ErrorGuard.tsx

**Hardcoded strings found:**
- "react-error-boundary"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ErrorOverlay.tsx

**Hardcoded strings found:**
- "Dismiss"
- "An unexpected error occurred"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/FaqSection.tsx

**Hardcoded strings found:**
- "Find answers to common questions about AI product listings, IT equipment rentals, and datacenter maintenance services"
- "Common Questions"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/FavoriteButton.tsx

**Hardcoded strings found:**
- "Login required"
- "Save to favorites"
- "Added to wishlist"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/FeaturedListingsSection.tsx

**Hardcoded strings found:**
- "Featured Listings"
- "View All Listings"
- "next/link"
- "Cloud GPU Rental"
- "Powerful GPUs, Anytime, Anywhere"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/FeaturesGuideSection.tsx

**Hardcoded strings found:**
- "Your Complete Guide to Zion"
- "How to Use"
- "Explore Full Marketplace"
- "next/link"
- "Try AI Matcher"
- "View Services"
- "Browse Equipment"
- "View Analytics"
- "Chat with Assistant"
- "Create Listing"
- "View Resources"
- "Talent Directory"
- "Services Marketplace"
- "Browse service categories on the marketplace"
- "Equipment Catalog"
- "Rent or buy specialized hardware and tech equipment for AI development and research."
- "Search the equipment catalog by category or specifications"
- "Marketplace Analytics"
- "Zion AI Assistant"
- "Click on the chat icon in the bottom right corner"
- "List Your Services"
- "Create or log in to your account"
- "Help & Resources"
- "Visit our comprehensive knowledge base"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/FloatingCTA.tsx

**Hardcoded strings found:**
- "Register today to access all features!"
- "Register Now"
- "Close"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/Footer.tsx

**Hardcoded strings found:**
- "Marketplace"
- "Services"
- "Talent"
- "Equipment"
- "Categories"
- "Company"
- "About Us"
- "Blog"
- "Innovation"
- "Partners"
- "Careers"
- "Contact"
- "Newsletter"
- "Stay updated with the latest news on tech, AI, and marketplace opportunities."
- "Back to Top"
- "Privacy Policy"
- "Terms of Service"
- "Twitter"
- "LinkedIn"
- "Facebook"
- "Instagram"
- "GitHub"
- "Back to top"
- "next/link"
- "/services"
- "/about"
- "/contact"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/FooterNewsletter.tsx

**Hardcoded strings found:**
- "Successfully subscribed to newsletter!"
- "Subscription failed. Please try again."
- "Newsletter subscription error:"
- "Unable to subscribe right now. Please try again later."
- "Subscribe"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/GlobalErrorBoundary.tsx

**Hardcoded strings found:**
- "Error Details"
- "Status Page"
- "Contact Support"
- "Report Issue"
- "next/link"
- "react-error-boundary"
- "Failed to show report confirmation"
- "Unknown component"
- "GlobalErrorBoundaryHandler"
- "An unexpected error occurred. Our team has been notified."
- "A background request encountered an issue (Not Found). If you see this after a successful action, the action likely completed."
- "A network error occurred. Please check your internet connection and try again."
- "s a background issue
        autoHideDuration: 5000,
      });
    } catch (e) {
      logError(e, { context:"
- "Detailed error info:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/GlobalErrorHandler.tsx

**Hardcoded strings found:**
- "Promise"
- "Global Error Handler:"
- "useGlobalErrorHandler must be used within a GlobalErrorHandler"
- "NETWORK_ERROR"
- "Try Again"
- "Retry"
- "Log In"
- "Something went wrong"
- "Connection Issue"
- "No Internet Connection"
- "Authentication Required"
- "Unable to connect to our servers. Please check your internet connection."
- "Your session has expired. Please log in again."
- "You don"
- "The requested information could not be found."
- "Request timed out. Please try again."
- "Please check your input and try again."
- "Our servers are experiencing issues. Please try again in a moment."
- "An unexpected error occurred. Please try again."
- "Success"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/GlobalServiceSection.tsx

**Hardcoded strings found:**
- "Global IT Services"
- "Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes"
- "Servers"
- "Enterprise-grade servers for any workload with 24/7 maintenance and support"
- "Storage"
- "Networking"
- "Connectivity solutions including switches, routers, and network security devices"
- "Recycling Services"
- "Equipment Rentals"
- "global-services"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/HowItWorksVideo.tsx

**Hardcoded strings found:**
- "How Zion Marketplace Works"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/HydrationErrorBoundary.tsx

**Hardcoded strings found:**
- "[HydrationErrorBoundary] Hydration mismatch detected, forcing client-side render"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/InstallPrompt.tsx

**Hardcoded strings found:**
- "Install"
- "Dismiss install prompt"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/JsonLd.tsx

**Hardcoded strings found:**
- "next/head"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ListingCard.tsx

**Hardcoded strings found:**
- "next/link"
- "/profile/${profileId}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ListingScoreCard.tsx

**Hardcoded strings found:**
- "No Image"
- "Request Quote"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/MarketplaceErrorBoundary.tsx

**Hardcoded strings found:**
- "Something went wrong in the marketplace"
- "Retry"
- "Reload Page"
- "react-error-boundary"
- "Error during retry:"
- "An unexpected error occurred while loading marketplace content."
- "MarketplaceErrorBoundary caught an error:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/MarketplaceLayout.tsx

**Hardcoded strings found:**
- "flex min-h-screen bg-background"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/MarketplaceSidebar.jsx

**Hardcoded strings found:**
- "Toggle marketplace sidebar"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/NavLink.tsx

**Hardcoded strings found:**
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/NewsletterForm.tsx

**Hardcoded strings found:**
- "Thank you for subscribing!"
- "Subscribe"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/NewsletterSection.tsx

**Hardcoded strings found:**
- "Stay Informed"
- "Subscribe to our newsletter for the latest updates on Zion's services, Google trending tech news, and marketplace opportunities."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/NotificationCenter.tsx

**Hardcoded strings found:**
- "Open notifications"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/OfflineIndicator.tsx

**Hardcoded strings found:**
- "back online"
- "Connection restored"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/OfflineToast.tsx

**Hardcoded strings found:**
- "Offline"
- "You are offline. Changes will sync when you are back online."
- "Back online. Syncing queued actions..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/PageErrorBoundary.tsx

**Hardcoded strings found:**
- "Configuration Required"
- "Technical Details"
- "Try Again"
- "Go Home"
- "Marketplace"
- "Talent"
- "Services"
- "About"
- "Need help? Contact our support team"
- "Service Status"
- "next/link"
- "react-error-boundary"
- "PageErrorBoundary"
- "Page Unavailable"
- "An unexpected error occurred while loading this page"
- "/services"
- "/about"
- "PageErrorBoundary caught error on ${pageName ||"
- "Resetting error boundary for ${pageName ||"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/PerformanceDashboard.tsx

**Hardcoded strings found:**
- "Performance Dashboard"
- "Build Size"
- "Total build output"
- "Page Count"
- "Generated pages"
- "Load Time"
- "Average page load"
- "Health Status"
- "Healthy"
- "Check Health Status"
- "Bundle Analysis"
- "Fixed Search Bar Issues"
- "NextAuth Configuration Fix"
- "Bundle Analyzer Integration"
- "Health Check Endpoint"
- "Created production monitoring endpoint for environment and service health"
- "Bundle analysis available with: npm run build:analyze"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/PrivateRoute.tsx

**Hardcoded strings found:**
- "/auth/login?returnTo=${returnTo}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ProductActions.tsx

**Hardcoded strings found:**
- "Promise"
- "Contact Publisher"
- "Failed to add to cart:"
- "./ContactPublisherModal"
- "Adding..."
- "Added!"
- "Add to Cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ProductCard.tsx

**Hardcoded strings found:**
- "Promise"
- "Product information unavailable."
- "No Image"
- "Add to Cart"
- "Login required"
- "next/link"
- "Invalid product data received by ProductCard"
- "View Cart"
- "Add to favorites"
- "In stock"
- "Out of stock"
- "Low stock"
- "product-card-error"
- "Login Required"
- "/auth/login?returnTo=${encodeURIComponent(router.asPath)}"
- "Added to cart"
- "${productTitle} has been added to your cart"
- "/cart"
- "absolute top-2 right-2 p-1 rounded-full bg-background/70"
- "absolute top-10 left-2 p-1 rounded-full bg-background/70"
- "absolute top-2 left-2 p-1 rounded-full bg-background/70"
- "Buy Now"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ProductListingCard.tsx

**Hardcoded strings found:**
- "Featured"
- "Loading..."
- "Buy Now"
- "Request Quote"
- "View Cart"
- "In stock"
- "Out of stock"
- "Low stock"
- "Custom pricing"
- "Navigation Error"
- "Product information is incomplete"
- "1× ${listing.title} added"
- "/cart"
- "bg-card/70 backdrop-blur-md border border-primary/10 sm:border-primary/20 rounded-lg overflow-hidden flex ${isGrid ?"
- "Enter"
- "bg-background text-foreground/80 border-primary/10"
- "Add to Cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ProductReviews.tsx

**Hardcoded strings found:**
- "Product Reviews"
- "Loading reviews..."
- "Write a Review"
- "Please"
- "next/link"
- "Please select a rating."
- "Mock User"
- "Anonymous"
- "Submitting..."
- "Submit Review"
- "/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ProductSubmissionForm.tsx

**Hardcoded strings found:**
- "Manual Creation"
- "Product Title"
- "Create a compelling title that describes your product"
- "Description"
- "Provide a detailed description of what you're offering"
- "Category"
- "Select a category"
- "Digital Product"
- "Service"
- "Course"
- "Other"
- "Tags"
- "Add relevant tags to help users find your product (e.g., ai, productivity, design)"
- "Product Image"
- "Upload a 3D model for interactive viewing"
- "Enter product title"
- "Enter tags separated by commas"
- "Product image preview"
- "Price must be a valid number"
- "Error invoking moderation:"
- "An unknown error occurred"
- "Title must be at least 3 characters"
- "Description must be at least 10 characters"
- "Authentication Required"
- "Your product has been successfully published on Zion."
- "Publication Failed"
- "Publish Product"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ProductionErrorBoundary.tsx

**Hardcoded strings found:**
- "Environment configuration"
- "NEXT_PUBLIC_"
- "ChunkLoadError"
- "Loading chunk"
- "ProductionErrorBoundary caught an error:"
- "ProductionErrorBoundary"
- "Unknown"
- "Configuration Error"
- "Application Update Required"
- "Something Went Wrong"
- "An unexpected error occurred."
- "Try Again"
- "Reload Page"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ProtectedRoute.tsx

**Hardcoded strings found:**
- "/auth/login?returnTo=${returnTo}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/PwaInstallButton.tsx

**Hardcoded strings found:**
- "PWA install error:"
- "Installation not available"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/QuoteRequestForm/AutoFillModal.tsx

**Hardcoded strings found:**
- "Describe your project"
- "Cancel"
- "Brief project description"
- "Continue"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/QuoteRequestForm/BudgetStep.tsx

**Hardcoded strings found:**
- "Fixed Budget"
- "Pay per hour of work"
- "Budget Range"
- "Fixed budget"
- "Minimum budget"
- "Maximum budget"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/QuoteRequestForm/ProjectDetailsStep.tsx

**Hardcoded strings found:**
- "Tell us about your project"
- "Project Name"
- "Project Description"
- "Contact Information"
- "Name"
- "Company"
- "Phone"
- "Enter a name for your project"
- "Your name"
- "Your company name"
- "Your phone number"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/QuoteRequestForm/ServiceTypeStep.tsx

**Hardcoded strings found:**
- "Services"
- "Talent"
- "Equipment"
- "Servers, workstations, specialized hardware"
- "Failed to fetch"
- "Invalid response"
- "Failed to load services:"
- "Failed to load services"
- "Search ${formData.serviceType}..."
- "Sample listing description"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/QuoteRequestForm/StepProgress.tsx

**Hardcoded strings found:**
- "Service"
- "Details"
- "Timeline"
- "Budget"
- "Summary"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/QuoteRequestForm/SummaryStep.tsx

**Hardcoded strings found:**
- "Review Your Request"
- "Service Information"
- "Service Type"
- "Project Details"
- "Project Name"
- "Project Description"
- "Timeline"
- "Timeline Type"
- "Start Date"
- "End Date"
- "Budget"
- "Budget Type"
- "Amount"
- "Contact Information"
- "Name"
- "Company"
- "Phone"
- "Error during AI matching:"
- "Matching Error"
- "We couldn"
- "Match Selected"
- "You"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/QuoteRequestForm/TimelineStep.tsx

**Hardcoded strings found:**
- "Fixed Dates"
- "Flexible Timeline"
- "Start Date"
- "Pick a date"
- "End Date"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/QuoteRequestForm.tsx

**Hardcoded strings found:**
- "Request a Quote"
- "Tell us about your project and we'll create a customized quote for you"
- "Back"
- "Continue"
- "Request failed"
- "auto fill error"
- "Service Required"
- "Quote Request Submitted"
- "Submission Failed"
- "There was an error submitting your request. Please try again."
- "Auto-fill Failed"
- "We couldn"
- "Submitting..."
- "Submit Request"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/RewardsWidget.tsx

**Hardcoded strings found:**
- "Rewards"
- "Your Rewards"
- "Gold"
- "Silver"
- "Bronze"
- "Complete your profile"
- "Buy any service"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/RootErrorBoundary.tsx

**Hardcoded strings found:**
- "Something went wrong"
- "Retry"
- "Loading..."
- "react-error-boundary"
- "UI Error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/RouteChangeHandler.tsx

**Hardcoded strings found:**
- "Route change error occurred"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/SEO.tsx

**Hardcoded strings found:**
- "next/head"
- "Zion - The Future of Tech & AI Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/SearchBar.tsx

**Hardcoded strings found:**
- "Search..."
- "Clear search"
- "Failed to fetch suggestions"
- "search-bar"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ServiceCard.tsx

**Hardcoded strings found:**
- "Request Quote"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ServiceQuoteModal.tsx

**Hardcoded strings found:**
- "Request Service Quote"
- "Selected Service"
- "Project Description"
- "Estimated Budget"
- "Project Timeline"
- "Expected Start Date"
- "Pick a date"
- "Expected End Date"
- "Quote Summary"
- "Previous"
- "Cancel"
- "Next"
- "Select your budget range"
- "Select your timeline"
- "Error submitting quote:"
- "Quote Request Submitted!"
- "Error"
- "There was an error submitting your quote request. Please try again."
- "Custom Service"
- "Submitting..."
- "Submit Request"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ServicesList.tsx

**Hardcoded strings found:**
- "Failed to load services."
- "Retry"
- "Failed to fetch services: ${res.status}"
- "services-loading"
- "services-error"
- "services-list"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/SitemapPage.tsx

**Hardcoded strings found:**
- "Public Pages"
- "Talent Pages"
- "Requires talent or creator account"
- "Client Pages"
- "Authenticated User Pages"
- "Requires any account type"
- "Admin Pages"
- "Requires admin account"
- "Dynamic Pages"
- "Pages with dynamic parameters"
- "next/link"
- "/about"
- "/content/about"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/SkipLink.tsx

**Hardcoded strings found:**
- "Skip to content"
- "Skip to main content"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/SupportChatbot.tsx

**Hardcoded strings found:**
- "Help Bot"
- "Open help chat"
- "Close help bot"
- "Chatbot error:"
- "m here to help you with questions about Zion. What can I assist you with today?"
- "m experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/TestimonialCarousel.tsx

**Hardcoded strings found:**
- "What Our Users Say"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ToastContainer.tsx

**Hardcoded strings found:**
- "Clear"
- "Toast Manager Debug"
- "Clear All"
- "Test Toast"
- "Test toast message"
- "fixed top-4 left-4 z-[102] p-3 bg-background border border-border rounded-lg shadow-lg text-xs space-y-2 max-w-sm"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/TrustedBySection.tsx

**Hardcoded strings found:**
- "Trusted By Industry Leaders"
- "Join the growing network of companies relying on Zion's marketplace"
- "American Express"
- "American Express logo"
- "Walt Disney"
- "Walt Disney logo"
- "Apple"
- "Apple logo"
- "Louis Vuitton"
- "Louis Vuitton logo"
- "Nike"
- "Nike logo"
- "Pandora"
- "Pandora logo"
- "Huawei"
- "Huawei logo"
- "Johnson & Johnson"
- "Johnson & Johnson logo"
- "Universal"
- "Universal Studios logo"
- "Ubisoft"
- "Ubisoft logo"
- "Bayer"
- "Bayer logo"
- "Avaya"
- "Avaya logo"
- "Silicon Valley Bank"
- "Silicon Valley Bank logo"
- "Dell"
- "Dell logo"
- "Lenovo"
- "Lenovo logo"
- "Citi Bank"
- "Citi Bank logo"
- "Thomson Reuters"
- "Thomson Reuters logo"
- "max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/VerifiedBadge.tsx

**Hardcoded strings found:**
- "Verified talent"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/VideoCall/VideoCallRoom.tsx

**Hardcoded strings found:**
- "Video Call"
- "Close"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/WaitlistSection.tsx

**Hardcoded strings found:**
- "Register Now"
- "Full Name"
- "Your Role"
- "I agree to receive updates about Zion and understand I can unsubscribe anytime."
- "John Smith"
- "Missing information"
- "Please fill all fields and agree to the terms."
- "Success!"
- "Thank you for registering with Zion. We"
- "Something went wrong"
- "Complete Registration"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/WhitepaperPreviewPanel.tsx

**Hardcoded strings found:**
- "Distribution Chart"
- "Cannot read property"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/WhitepaperSectionEditor.tsx

**Hardcoded strings found:**
- "Undo"
- "Redo"
- "Hide Suggestions"
- "An unexpected error occurred while fetching suggestions."
- "Error getting suggestions for section"
- "Get AI Suggestions"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/AdminLayout.tsx

**Hardcoded strings found:**
- "Back Office"
- "next/link"
- "Services"
- "/admin/services"
- "Users"
- "Moderation"
- "Zion Brain"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/fraud-detection/ActionButtons.tsx

**Hardcoded strings found:**
- "Ignore"
- "View Details"
- "View details"
- "Send Warning"
- "Send warning"
- "Suspend User"
- "Suspend user"
- "Ban User"
- "Ban user"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/fraud-detection/EmptyFraudState.tsx

**Hardcoded strings found:**
- "Clear Filters"
- "Try adjusting your filters"
- "You don"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/fraud-detection/FraudFilters.tsx

**Hardcoded strings found:**
- "All Statuses"
- "Pending"
- "Reviewed"
- "Ignored"
- "Actioned"
- "All Severities"
- "Safe"
- "Suspicious"
- "Dangerous"
- "All Types"
- "Signups"
- "Jobs"
- "Messages"
- "Quotes"
- "Reviews"
- "Reset Filters"
- "Search by user or content..."
- "Status"
- "Severity"
- "Content Type"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/fraud-detection/FraudFlagsTable.tsx

**Hardcoded strings found:**
- "Severity"
- "User"
- "Content"
- "Type"
- "Reason"
- "Timestamp"
- "Status"
- "Actions"
- "Not analyzed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/fraud-detection/FraudStatsCards.tsx

**Hardcoded strings found:**
- "Total Flags"
- "Pending Review"
- "Suspicious"
- "Dangerous"
- "Actions Taken"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/fraud-detection/FraudTabContent.tsx

**Hardcoded strings found:**
- "Pending Review Flags"
- "Dangerous Flags"
- "Actioned Flags"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/moderation/FlaggedListingsTable.tsx

**Hardcoded strings found:**
- "No flagged listings"
- "Type"
- "Status"
- "Actions"
- "Approve"
- "Reject"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/performance-dashboard.tsx

**Hardcoded strings found:**
- "Performance Dashboard"
- "Monitor bundle size, performance metrics, and optimization opportunities"
- "Performance Score"
- "Bundle Size"
- "Load Time"
- "Average chunk load time"
- "First Contentful Paint"
- "Time to first paint"
- "Largest Contentful Paint"
- "Time to largest paint"
- "Bundle Chunks"
- "Optimization Recommendations"
- "Performance monitoring active"
- "Real-time performance tracking is helping optimize your application"
- "Consider more aggressive code splitting"
- "PerformanceObserver"
- "/_next/static/"
- "w-4 h-4 mr-2 ${isLoading ?"
- "Excellent"
- "Good"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/pitch-generator/DataSync.tsx

**Hardcoded strings found:**
- "Year-over-Year Growth"
- "Global Reach"
- "Marketplace Conversion Funnel"
- "Next: Generate Pitch Deck"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/pitch-generator/InputFields.tsx

**Hardcoded strings found:**
- "Company Mission"
- "Current Funding Stage"
- "Vision/Goals"
- "Round Type"
- "Seed"
- "Token Sale"
- "Additional Photos (Optional)"
- "Next: Data Sync"
- "Logo preview"
- "Photo preview"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/pitch-generator/SlideEditor.tsx

**Hardcoded strings found:**
- "Add Slide (AI)"
- "Previous"
- "Next"
- "Slide Title"
- "Slide Content"
- "Delete Slide"
- "Cannot delete the last slide."
- "slide-editor p-4 bg-gray-100 rounded-lg"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/quotes/QuoteStatusCards.tsx

**Hardcoded strings found:**
- "In Review"
- "Quotes being evaluated"
- "Responded"
- "Quotes with responses sent"
- "Accepted"
- "Successfully converted quotes"
- "Closed"
- "Finalized or declined quotes"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/quotes/QuotesFilter.tsx

**Hardcoded strings found:**
- "Status"
- "All Statuses"
- "New"
- "In Review"
- "Responded"
- "Accepted"
- "Closed"
- "Archive"
- "Active Only"
- "Archived Only"
- "All Quotes"
- "Date Range"
- "Date range"
- "Reset Filters"
- "Search quotes..."
- "Archive Status"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/quotes/QuotesTable.tsx

**Hardcoded strings found:**
- "Talent"
- "Requester"
- "Project"
- "Budget"
- "Date"
- "Status"
- "Actions"
- "View Details"
- "Unarchive"
- "Delete"
- "Mark as New"
- "Mark as In Review"
- "Mark as Responded"
- "Mark as Accepted"
- "Mark as Closed"
- "Archive"
- "More actions"
- "Unknown Talent"
- "Not specified"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/reviews/ReviewsModerationTable.tsx

**Hardcoded strings found:**
- "No reviews to moderate"
- "All reviews have been processed. Check back later for new submissions."
- "Reviewer"
- "Rating"
- "Date"
- "Status"
- "Actions"
- "Anonymous"
- "View details"
- "Mark as rejected"
- "Mark as approved"
- "Review Details"
- "Additional Ratings"
- "Reject"
- "Approve"
- "Mark as Rejected"
- "Mark as Approved"
- "Review updated"
- "Error"
- "Failed to update review: ${error.message}"
- "User"
- "None"
- "Would work again"
- "Would not work again"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/whitelabel/TenantsList.tsx

**Hardcoded strings found:**
- "Brand"
- "Subdomain"
- "Custom Domain"
- "Status"
- "Created At"
- "Actions"
- "None"
- "Edit Tenant"
- "Manage Admins"
- "Disable Tenant"
- "Enable Tenant"
- "Error toggling tenant status:"
- "Error verifying DNS:"
- "Failed to update tenant"
- "Verified"
- "Pending"
- "Active"
- "Inactive"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/whitelabel/WhitelabelRequestForm.tsx

**Hardcoded strings found:**
- "Create White-Label Instance"
- "Create a customized version of the platform for your client or partner."
- "Brand Name"
- "Subdomain"
- "Primary Brand Color"
- "Light"
- "Dark"
- "Neon"
- "Corporate"
- "Startup"
- "Landing Page Copy"
- "Headline"
- "Subtitle"
- "Acme AI Solutions"
- "Find the best AI talent"
- "Get Started"
- "Brand name must be at least 2 characters"
- "Subdomain must be at least 3 characters"
- "Subdomain must be at most 20 characters"
- "Subdomain can only contain lowercase letters, numbers, and hyphens"
- "Headline must be at least 5 characters"
- "Subtitle must be at least 5 characters"
- "Something went wrong"
- "White-label tenant created!"
- "Error creating tenant"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/zion-brain/ZionBrainDashboard.tsx

**Hardcoded strings found:**
- "Zion Brain"
- "Prompt Router"
- "Reflex Engine"
- "Prompt Optimizer"
- "Visualization"
- "Auto-Prompt Router"
- "Resume builder"
- "Tokenomics simulator"
- "Governance summarizer"
- "Nation assistant"
- "Surge in signups"
- "Spike in dispute flags"
- "Drop in ZION$ velocity"
- "Run Optimization"
- "Visualization Dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/admin/zion-gpt/ModelManager.tsx

**Hardcoded strings found:**
- "ZionGPT Models"
- "Manage fine-tuned AI models for different platform features"
- "Version"
- "Purpose"
- "Base Model"
- "Status"
- "Created"
- "Actions"
- "Ready"
- "Failed"
- "Training"
- "Queued"
- "Active"
- "Check"
- "Activate"
- "Error"
- "Error fetching models:"
- "Unknown error"
- "Error checking status for model ${modelId}:"
- "Error toggling model active state:"
- "Training failed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/advanced/DynamicComponentLoader.tsx

**Hardcoded strings found:**
- "Promise"
- "Try Again"
- "Loading chart..."
- "Loading 3D renderer..."
- "Loading component..."
- "Failed to load component"
- "Dynamic component loading failed:"
- "Loading Failed"
- "Offline"
- "Please check your internet connection"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ai-enhancement/AIEnhancementButton.tsx

**Hardcoded strings found:**
- "Apply"
- "Cancel"
- "Not enough content"
- "Please enter at least ${contentLength} characters before enhancing."
- "Content applied"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ai-enhancement/AIEnhancementPanel.tsx

**Hardcoded strings found:**
- "Content to enhance"
- "Generate Enhanced Content"
- "Generated content"
- "Copied"
- "Copy"
- "Cancel"
- "Apply to Form"
- "Add any relevant context to guide the AI..."
- "Focus on leadership skills"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/analytics/AnalyticsChart.tsx

**Hardcoded strings found:**
- "Line"
- "Bar"
- "Time Range"
- "Chart Type"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/analytics/AnalyticsContainer.tsx

**Hardcoded strings found:**
- "Loading..."
- "Analytics Dashboard"
- "Track user behavior, page views, and conversion rates"
- "Track user behavior, page views, and conversion rates to improve your platform performance"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/analytics/AnalyticsSummary.tsx

**Hardcoded strings found:**
- "Total Page Views"
- "Unique Visitors"
- "Conversion Rate"
- "Avg. Session"
- "Last Updated"
- "Never"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/analytics/ConversionAnalysisChart.tsx

**Hardcoded strings found:**
- "Conversion Analysis"
- "Track different conversion types"
- "Unknown"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/analytics/ExportPanel.tsx

**Hardcoded strings found:**
- "Download analytics data for further analysis"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/analytics/FeatureUsageChart.tsx

**Hardcoded strings found:**
- "Feature Usage"
- "How often key features are used"
- "Unknown"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/analytics/PageViewsChart.tsx

**Hardcoded strings found:**
- "Page Views Trend"
- "Daily page view statistics"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/analytics/PageViewsTable.tsx

**Hardcoded strings found:**
- "Top Pages"
- "Most viewed pages on your platform"
- "Last 24h"
- "Last 7 days"
- "Last 30 days"
- "Last 3 months"
- "Last year"
- "No page view data available for this time period"
- "Time Range"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/analytics/UserBehaviorStats.tsx

**Hardcoded strings found:**
- "Form Submissions"
- "Conversions"
- "User Behavior Over Time"
- "Error fetching behavior data:"
- "Button and link interactions"
- "Completed forms and sign-ups"
- "Goal completions"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/auth/AuthConfigurationError.tsx

**Hardcoded strings found:**
- "Authentication Service Unavailable"
- "Setup Guide"
- "Check Again"
- "Create Auth0 Account:"
- "Visit Auth0 Dashboard"
- "Create Application:"
- "Create a "Regular Web Application" named "Zion AI Marketplace""
- "Copy credentials to"
- "Run"
- "Browse Marketplace"
- "View Talent Pool"
- "Contact Support"
- "Automated Setup Available"
- "next/link"
- "Regular Web Application"
- "Zion AI Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/auth/AuthModal.tsx

**Hardcoded strings found:**
- "Authentication Required"
- "Please log in or sign up to continue with your purchase."
- "Sign Up"
- "Login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/auth/RegisterForm.tsx

**Hardcoded strings found:**
- "Create account"
- "Password"
- "Confirm Password"
- "Already have an account? Sign in"
- "next/link"
- "Passwords do not match"
- "Registration failed"
- "error-message"
- "Create Account"
- "/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/auth/SignupForm.tsx

**Hardcoded strings found:**
- "Full Name"
- "Password"
- "Password Strength"
- "Confirm Password"
- "Enter your full name"
- "Create a strong password"
- "Confirm your password"
- "Signup error:"
- "Password is too weak. Please choose a stronger password."
- "Unexpected signup error:"
- "An unexpected error occurred during signup. Please try again."
- "Strong"
- "Show password"
- "Show confirm password"
- "Account Created Successfully!"
- "Signup Failed"
- "Hide password"
- "Hide confirm password"
- "Create Account"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/auth/UserProfile.tsx

**Hardcoded strings found:**
- "Not Signed In"
- "Sign In"
- "User Profile"
- "Sign Out"
- "/auth/login"
- "Verified"
- "Unverified"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/auth/login/LoginCard.tsx

**Hardcoded strings found:**
- "Welcome back"
- "Create account"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/auth/login/LoginContent.tsx

**Hardcoded strings found:**
- "Join the Zion Community"
- "Connect with thousands of AI professionals, discover new opportunities, and showcase your services to a global audience."
- "./LoginCard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/auth/login/LoginErrorFallback.tsx

**Hardcoded strings found:**
- "Login Error"
- "Sorry, the login form could not be displayed due to an error."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/auth/login/LoginForm.tsx

**Hardcoded strings found:**
- "Password"
- "Check status"
- "Create account"
- "Enter password"
- "next/link"
- "Login failed. Please try again."
- "Hide password"
- "Show password"
- "Login"
- "Resend / Verify e-mail"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/auth/login/SocialLogin.tsx

**Hardcoded strings found:**
- "Or continue with"
- "Sign in with Google"
- "Sign in with Facebook"
- "Sign in with Twitter"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/auth/login/Web3Login.tsx

**Hardcoded strings found:**
- "Web3 Login Unavailable"
- "Sign in with Web3"
- "Failed to connect wallet. Please try again."
- "Web3 login error:"
- "Please install MetaMask or another compatible wallet."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/blog/CommentsSection.tsx

**Hardcoded strings found:**
- "Post Comment"
- "Your name"
- "Add a comment..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/blog/SocialShareButtons.tsx

**Hardcoded strings found:**
- "LinkedIn"
- "Copy Link"
- "Failed to copy link"
- "Twitter"
- "Facebook"
- "Link copied to clipboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/cart/CartDrawer.tsx

**Hardcoded strings found:**
- "Cart"
- "next/link"
- "/cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/cart/GuestCheckoutModal.tsx

**Hardcoded strings found:**
- "Guest Checkout"
- "Shipping Address"
- "Cancel"
- "Continue to Payment"
- "Enter your full shipping address..."
- "Please fill in all required fields"
- "guest-address"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/checkout/CardForm.tsx

**Hardcoded strings found:**
- "Failed to create payment"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/checkout/CheckoutButton.jsx

**Hardcoded strings found:**
- "Stripe not loaded"
- "Failed to create session"
- "Stripe redirect error:"
- "Checkout error:"
- "Pay with Stripe"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/community/CreatePostButton.tsx

**Hardcoded strings found:**
- "Create New Post"
- "Please log in to use this feature"
- "create-new-post-button"
- "Login Required"
- "Redirecting to login page..."
- "/auth/login?returnTo=${returnTo}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/community/EmptyState.tsx

**Hardcoded strings found:**
- "Login required"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/community/ForumCategories.tsx

**Hardcoded strings found:**
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/community/NewPostDialog.tsx

**Hardcoded strings found:**
- "Create New Post"
- "Post created"
- "Your post has been published successfully"
- "Error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/community/PostCard.tsx

**Hardcoded strings found:**
- "Featured"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/community/PostForm.tsx

**Hardcoded strings found:**
- "Title"
- "Content"
- "Category"
- "Getting Hired"
- "Project Help"
- "Edit Post"
- "Create New Post"
- "Submitting..."
- "Update Post"
- "Create Post"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/community/ReplyCard.tsx

**Hardcoded strings found:**
- "Answer"
- "Mark as Answer"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/community/ReplyForm.tsx

**Hardcoded strings found:**
- "Promise"
- "Submitting..."
- "Post Reply"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/ContractBuilder.tsx

**Hardcoded strings found:**
- "Contract Details"
- "Preview"
- "Smart Contract Builder"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/SmartContractBuilder.tsx

**Hardcoded strings found:**
- "Contract Details"
- "Preview"
- "Failed to deploy smart contract"
- "Error deploying contract:"
- "Deploy to Blockchain"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/blockchain/SmartContractDeployment.tsx

**Hardcoded strings found:**
- "Promise"
- "Smart Contract Deployment"
- "Deploy to blockchain"
- "Select blockchain network"
- "Wallet address for transactions"
- "Smart Contract Preview"
- "Download .sol File"
- "Use escrow"
- "Please enter a wallet address for blockchain deployment"
- "Deployment error:"
- "wallet-address"
- "Solidity contract downloaded"
- "max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono"
- "Deploy Contract"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/components/AdditionalClausesFields.tsx

**Hardcoded strings found:**
- "Additional Clauses"
- "Select additional clauses to include in your contract"
- "Protect sensitive information"
- "Intellectual Property Transfer"
- "Termination Clause"
- "Define conditions for ending the contract"
- "Define how changes to the contract are handled"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/components/ContractForm.tsx

**Hardcoded strings found:**
- "Contract Builder"
- "Reset Form"
- "Start date is required"
- "Error generating contract:"
- "Something went wrong. Please try again."
- "Milestones Generated"
- "Contract Generation Failed"
- "Generate Contract"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/components/ContractPreview.tsx

**Hardcoded strings found:**
- "Contract Preview"
- "Ready to Sign"
- "Pending Review"
- "Draft"
- "Contract Deployment Info"
- "Close"
- "Sign Contract"
- "Deploy on Blockchain"
- "Unknown"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/components/PaymentTermsFields.tsx

**Hardcoded strings found:**
- "Payment Terms"
- "Fixed Price"
- "Payment Amount"
- "Select payment terms"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/components/ProjectDetailsFields.tsx

**Hardcoded strings found:**
- "Project Name"
- "Scope Summary"
- "Be specific about what is included and any limitations"
- "Start Date"
- "Pick a date"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/page/ContractBuilderContent.tsx

**Hardcoded strings found:**
- "Alex Chen"
- "Full Stack Developer"
- "Website Redesign"
- "Acme Corp"
- "Mobile App Development"
- "TechStart Inc"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/page/ContractHeader.tsx

**Hardcoded strings found:**
- "Smart Contract Builder"
- "Create New Contract"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/page/ContractTypeCards.tsx

**Hardcoded strings found:**
- "Create Standard Contract"
- "Blockchain Powered"
- "Create Smart Contract"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/page/RecentContractsTable.tsx

**Hardcoded strings found:**
- "Contract Title"
- "Client"
- "Talent"
- "Date"
- "Type"
- "Actions"
- "Smart Contract"
- "Standard"
- "View"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/templates/TemplateList.tsx

**Hardcoded strings found:**
- "Please log in to use this feature"
- "Cancel"
- "Delete"
- "/auth/login?returnTo=${encodeURIComponent(currentPath)}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/templates/TemplateSaveForm.tsx

**Hardcoded strings found:**
- "Cancel"
- "Title is required"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/contracts/utils/contractUtils.ts

**Hardcoded strings found:**
- "Failed to generate contract"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/creator/CreatorSidebar.tsx

**Hardcoded strings found:**
- "Home"
- "Messages"
- "Notifications"
- "My Content"
- "Analytics"
- "Profile"
- "Settings"
- "Dashboard"
- "Content"
- "/creator-dashboard"
- "/profile"
- "/settings"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/dashboard/LegalTemplates.tsx

**Hardcoded strings found:**
- "Download"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/developers/ApiDocsLayout.tsx

**Hardcoded strings found:**
- "Main"
- "next/link"
- "Getting Started"
- "Webhooks"
- "Sample Code"
- "/developers/docs/errors"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/developers/ApiDocumentation.tsx

**Hardcoded strings found:**
- "Jobs"
- "Talent"
- "Quotes"
- "Webhooks"
- "Errors"
- "Authentication"
- "Event Types"
- "Event Type"
- "Description"
- "When a talent applies to one of your jobs"
- "When a project milestone is approved"
- "When you hire talent for a project"
- "Sample Payloads"
- "Here's an example of a"
- "Error Responses"
- "Status Code"
- "The request was successful."
- "The resource was successfully created."
- "Error Response Format"
- "Rate Limiting"
- "Rate limit information is included in the response headers:"
- "Parameters"
- "Name"
- "Type"
- "Request Example"
- "Response"
- "The request was invalid"
- "Project name is required"
- "Senior React Developer"
- "Job title"
- "Content-Type"
- "Invalid signature"
- "JavaScript"
- "Python"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/developers/ApiKeysManager.tsx

**Hardcoded strings found:**
- "Key Name"
- "Scopes"
- "Cancel"
- "Create Key"
- "This key will only be displayed once. Please save it securely."
- "Active"
- "Revoked"
- "Regenerate"
- "Revoke"
- "Last Used"
- "More options"
- "Access to view job listings"
- "Create and manage job listings"
- "Access to view talent profiles"
- "Create and manage quotes"
- "Never"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/developers/ApiLogs.tsx

**Hardcoded strings found:**
- "Success"
- "Client Error"
- "Server Error"
- "Other"
- "Show"
- "Timestamp"
- "Method"
- "Endpoint"
- "Status"
- "Response Time"
- "IP Address"
- "Loading logs..."
- "Previous"
- "Next"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/developers/ApiLogsChart.tsx

**Hardcoded strings found:**
- "Logs per Day"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/developers/ApiPlayground.tsx

**Hardcoded strings found:**
- "Request failed"
- "Failed to fetch"
- "Unknown error occurred"
- "DELETE"
- "Send Request"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/developers/CodeBlock.tsx

**Hardcoded strings found:**
- "Copy code"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/developers/WebhooksManager.tsx

**Hardcoded strings found:**
- "Webhooks"
- "Add Webhook"
- "Create Webhook"
- "Add a webhook endpoint to receive event notifications."
- "Webhook Name"
- "Event Types"
- "Cancel"
- "Loading webhooks..."
- "Create one to receive event notifications."
- "Test"
- "Delete"
- "Test Webhook"
- "Event Type"
- "Send Test"
- "Response Status"
- "Response Body"
- "Close"
- "Test Another Event"
- "Delete Webhook?"
- "Enter secret key"
- "Secret key"
- "Toggle webhook"
- "More options"
- "Select an event type"
- "When a talent applies to a job"
- "When a project milestone is approved"
- "When talent is hired for a project"
- "Active"
- "Inactive"
- "No response body"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/disputes/DisputeDashboard.tsx

**Hardcoded strings found:**
- "Dispute Resolution Center"
- "Open Disputes"
- "Awaiting review"
- "Under Review"
- "Being actively processed"
- "Resolved"
- "Successfully concluded"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/disputes/DisputeDetail.tsx

**Hardcoded strings found:**
- "Loading dispute details..."
- "Dispute not found"
- "Back to Disputes"
- "Dispute Case"
- "Back to List"
- "Start Review"
- "This dispute has been resolved"
- "Overview"
- "Messages"
- "Admin Notes"
- "Dispute Details"
- "Information about this dispute case"
- "Reason"
- "Description"
- "Project"
- "Related Milestone"
- "Timeline"
- "Under review"
- "Resolution"
- "Communication regarding this dispute"
- "No messages yet"
- "Files related to this dispute"
- "Admin Actions"
- "Handle this dispute as an administrator"
- "Change Status"
- "Mark as Open"
- "Mark as Under Review"
- "Close Dispute"
- "Resolve Dispute"
- "Resolution Type"
- "In Client's Favor"
- "In Talent's Favor"
- "Compromise"
- "Dismissed"
- "No admin notes yet"
- "Add Admin Note"
- "Parties Involved"
- "Client"
- "Talent"
- "Case Information"
- "Created:"
- "Add an admin note (only visible to administrators)..."
- "Error loading dispute data:"
- "Failed to load dispute"
- "Failed to update dispute status"
- "Please provide a resolution summary"
- "Failed to resolve dispute"
- "Error sending message:"
- "/dashboard/disputes"
- "Unknown Project"
- "User avatar"
- "Unknown User"
- "Send Message"
- "Admin avatar"
- "Admin"
- "Client avatar"
- "Unknown Client"
- "Talent avatar"
- "Unknown Talent"
- "Unknown"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/disputes/DisputeForm.tsx

**Hardcoded strings found:**
- "Report an Issue"
- "Reason for dispute"
- "Describe the issue in detail"
- "Cancel"
- "Select a reason"
- "Please provide specific details about the issue..."
- "Please select a reason for the dispute"
- "Description must be at least 20 characters"
- "Error submitting dispute:"
- "Failed to submit dispute. Please try again."
- "Would upload ${files.length} files for dispute ${dispute.id}"
- "Submitting..."
- "Submit Dispute"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/disputes/DisputeStatusBadge.tsx

**Hardcoded strings found:**
- "Under Dispute"
- "This dispute is under review by our team"
- "This dispute has been resolved"
- "This dispute has been closed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/disputes/DisputesList.tsx

**Hardcoded strings found:**
- "Project"
- "Parties"
- "Created"
- "Status"
- "Actions"
- "No disputes found"
- "No active disputes match the selected filter"
- "All"
- "Open"
- "Under Review"
- "Resolved"
- "Closed"
- "View Details"
- "next/link"
- "Unknown Project"
- "Unknown Client"
- "Unknown Talent"
- "/dashboard/disputes/${dispute.id}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/disputes/RaiseDisputeButton.tsx

**Hardcoded strings found:**
- "Raise Dispute"
- "Raise a Dispute"
- "Please provide details about the issue you're experiencing with this project."
- "/dashboard/disputes/${disputeId}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/EnterpriseCTA.tsx

**Hardcoded strings found:**
- "Contact Sales"
- "Personalized walkthrough of the platform"
- "Custom pricing based on your team size"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/EnterpriseFeatures.tsx

**Hardcoded strings found:**
- "Built for Enterprise Needs"
- "Our enterprise solutions offer powerful tools designed for large teams and complex hiring needs"
- "Private Hiring Portal"
- "Dedicated Talent Pool"
- "Branded Onboarding"
- "Admin Dashboards"
- "Global Access"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/EnterpriseHero.tsx

**Hardcoded strings found:**
- "Enterprise"
- "Talent Solutions"
- "Download Brochure"
- "Custom branding & white labeling"
- "Enterprise Dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/EnterprisePricingTable.tsx

**Hardcoded strings found:**
- "Enterprise Plans"
- "Plan Features"
- "Most Popular"
- "Dedicated success manager"
- "Enterprise"
- "Request Quote"
- "Get Started"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/EnterpriseStickyNav.tsx

**Hardcoded strings found:**
- "Features"
- "Pricing"
- "Testimonials"
- "Contact Us"
- "Toggle navigation"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/EnterpriseTestimonials.tsx

**Hardcoded strings found:**
- "Trusted by Leading Companies"
- "See how enterprise teams are transforming their hiring process"
- "Sarah Johnson"
- "Michael Chen"
- "InnovateCorp"
- "Elena Rodriguez"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/EnterpriseTrustBadges.tsx

**Hardcoded strings found:**
- "Enterprise-Grade Security & Compliance"
- "We maintain the highest standards of data protection and compliance"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/admin/AdminDashboard.tsx

**Hardcoded strings found:**
- "Role Assignment"
- "Team Activity"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/admin/AdminHeader.tsx

**Hardcoded strings found:**
- "Enterprise Admin Dashboard"
- "Settings"
- "Subscription Plan"
- "Billing Cycle"
- "Customize Workspace"
- "Enterprise"
- "Loading..."
- "Annual"
- "Company"
- "Company Name"
- "loading..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/admin/RoleManagement.tsx

**Hardcoded strings found:**
- "Role Permissions"
- "Role"
- "View Candidates"
- "Can view candidate profiles and applications"
- "Edit Candidates"
- "Can edit candidate information and status"
- "Create Jobs"
- "Can create and publish job listings"
- "Manage Team"
- "Billing Access"
- "Can view and manage billing information"
- "Admin"
- "Recruiter"
- "Manager"
- "Viewer"
- "View candidates"
- "Edit candidates"
- "Create jobs"
- "Manage team"
- "View billing"
- "Permission updated"
- "Full access to all features and settings"
- "Read-only access to candidates"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/admin/TeamActivity.tsx

**Hardcoded strings found:**
- "Recent Team Activity"
- "User"
- "Activity"
- "Target"
- "Category"
- "Time"
- "Previous"
- "Next"
- "Search activities..."
- "Filter by date"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/admin/TeamManagement.tsx

**Hardcoded strings found:**
- "Role"
- "Admin"
- "Recruiter"
- "Manager"
- "Viewer"
- "Cancel"
- "Send Invitation"
- "Name"
- "Status"
- "Last Active"
- "Actions"
- "Resend"
- "Invitation sent"
- "Invitation resent"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/admin/UsageStats.tsx

**Hardcoded strings found:**
- "Job Postings"
- "Monthly job posting limit"
- "Save Changes"
- "Budget Controls"
- "Monthly budget"
- "Contact Us"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/billing/BillingDashboard.tsx

**Hardcoded strings found:**
- "Subscription"
- "Payment Methods"
- "Invoice History"
- "Usage Overview"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/billing/BillingHeader.tsx

**Hardcoded strings found:**
- "Billing & Invoices"
- "Contact Billing Support"
- "Analytics"
- "Manage your subscription, view invoice history, and update payment methods."
- "next/link"
- "/dashboard/client/analytics"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/billing/CurrentSubscription.tsx

**Hardcoded strings found:**
- "Current Subscription"
- "Active"
- "Your subscription details and plan information"
- "Plan"
- "Billing Cycle"
- "Amount"
- "Start Date"
- "Next Billing Date"
- "Annual discount applied"
- "Change Plan"
- "Cancel Subscription"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/billing/InvoiceHistory.tsx

**Hardcoded strings found:**
- "Paid"
- "Pending"
- "Overdue"
- "Invoice History"
- "Invoice Number"
- "Date"
- "Billing Period"
- "Amount"
- "Status"
- "Actions"
- "View"
- "Previous"
- "Showing 1 - 6 of 12 invoices"
- "Next"
- "Search invoices..."
- "Downloading invoice"
- "Downloading invoice ${invoiceId} as PDF."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/billing/PaymentMethods.tsx

**Hardcoded strings found:**
- "Payment Methods"
- "Manage your payment methods for automatic billing"
- "Add Payment Method"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/billing/UsageOverview.tsx

**Hardcoded strings found:**
- "Usage Overview"
- "Track your team's resource usage across the platform"
- "Current Period"
- "Historical"
- "Interviews Conducted"
- "Messages Sent"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/workspace/QuickActions.tsx

**Hardcoded strings found:**
- "Quick Actions"
- "Fast access to common tasks"
- "Post New Job"
- "Find Talent"
- "Schedule Interview"
- "Create a new job posting"
- "Invite someone to your team"
- "Search the talent pool"
- "Set up candidate interviews"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/workspace/RecentActivity.tsx

**Hardcoded strings found:**
- "Job"
- "Candidate"
- "Interview"
- "Comment"
- "Activity"
- "Recent Activity"
- "View All Activity"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/workspace/SharedInbox.tsx

**Hardcoded strings found:**
- "Shared Inbox"
- "Team messages and notifications"
- "No new messages"
- "View All Messages"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/workspace/TalentPool.tsx

**Hardcoded strings found:**
- "Available"
- "Interviewing"
- "Hired"
- "Dedicated Talent Pool"
- "Candidates matched to your company"
- "View All"
- "View Profile"
- "Contact"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/workspace/TeamStats.tsx

**Hardcoded strings found:**
- "Performance metrics for your team"
- "Team capacity"
- "Job postings"
- "Avg. time to hire"
- "Interviews this month"
- "View Full Analytics"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/enterprise/workspace/WorkspaceHeader.tsx

**Hardcoded strings found:**
- "Active Job Listings"
- "Candidate Applications"
- "Interviews Scheduled"
- "Notifications"
- "Workspace settings"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/errors/GlobalErrorBoundary.tsx

**Hardcoded strings found:**
- "Oops! Something went wrong"
- "Try Again"
- "Go Home"
- "Error Message:"
- "Copy Details"
- "Report Issue"
- "GlobalErrorBoundary"
- "Error:"
- "Error Info:"
- "Enhanced Error:"
- "Failed to copy error details:"
- "Failed to report error:"
- "Please check your internet connection and try again."
- "Hide"
- "Show"
- "withErrorBoundary(${Component.displayName || Component.name})"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/expo/AgendaTimeline.tsx

**Hardcoded strings found:**
- "Agenda"
- "py-12 bg-background text-foreground"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/expo/ExpoGPTPrompt.tsx

**Hardcoded strings found:**
- "py-12 bg-background text-center"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/expo/ExpoHero.tsx

**Hardcoded strings found:**
- "Zion Global Expo"
- "Showcasing Multiverse Innovation"
- "Hybrid Virtual Summit"
- "View Agenda"
- "Zion Expo Welcome"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/expo/ExportsSection.tsx

**Hardcoded strings found:**
- "Send Summary"
- "Claimable NFT ticket & proof-of-attendance"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/expo/InteractiveMap.tsx

**Hardcoded strings found:**
- "Zion Multiverse Map"
- "World map"
- "py-12 bg-background text-foreground"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/expo/KeynotesSection.tsx

**Hardcoded strings found:**
- "Keynotes"
- "Founder Keynote"
- "Nations Panel"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/expo/LivestreamSection.tsx

**Hardcoded strings found:**
- "Livestream"
- "Watch the Replay"
- "Zion Expo Livestream"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/expo/MultiverseLaunchesSection.tsx

**Hardcoded strings found:**
- "New Multiverse Launches"
- "Open Source Protocol Update"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/expo/PartnerBoothsSection.tsx

**Hardcoded strings found:**
- "Partner Booths"
- "Interactive showcase"
- "Top Universities"
- "Major Banks"
- "Leading DAOs"
- "py-12 bg-background text-foreground"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/feedback/FeedbackWidget.tsx

**Hardcoded strings found:**
- "Feedback"
- "Your Feedback"
- "Thank you for your feedback!"
- "Add Screenshot"
- "Submit"
- "Close"
- "Star rating"
- "Screenshot preview"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/forms/ValidatedFormField.tsx

**Hardcoded strings found:**
- "Show password"
- "Hide password"
- "Password must contain at least 8 characters with uppercase, lowercase, number, and special character"
- "Please enter a valid phone number"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/gallery/ProductGallery.tsx

**Hardcoded strings found:**
- "Images"
- "Video"
- "Video preview"
- "Zoomed view"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/gamification/MyBadgesPreview.tsx

**Hardcoded strings found:**
- "My Badges"
- "Complete your profile for more rewards!"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/gamification/UserLeaderboard.tsx

**Hardcoded strings found:**
- "Leaderboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/gamification/UserProgress.tsx

**Hardcoded strings found:**
- "Progress"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/governance/ProposalCard.tsx

**Hardcoded strings found:**
- "View Details & Vote"
- "next/link"
- "EXECUTED"
- "CANCELED"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/header/AvatarMenu.tsx

**Hardcoded strings found:**
- "Profile"
- "Orders"
- "Logout"
- "next/link"
- "User"
- "/profile"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/header/Logo.tsx

**Hardcoded strings found:**
- "Zion Logo"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/header/MainNavigation.tsx

**Hardcoded strings found:**
- "next/link"
- "Home"
- "Find Talent"
- "Services"
- "Equipment"
- "Blog"
- "Case Studies"
- "Categories"
- "About Us"
- "Partner Program"
- "Register"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/header/MobileBottomNav.tsx

**Hardcoded strings found:**
- "next/link"
- "Browse"
- "/cart"
- "/dashboard"
- "md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/header/UserProfileDropdown.tsx

**Hardcoded strings found:**
- "Profile"
- "Orders"
- "Settings"
- "Logout"
- "User profile"
- "User menu"
- "next/link"
- "Enter"
- "/profile"
- "/settings"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/hiring-tracker/CandidateCard.tsx

**Hardcoded strings found:**
- "Hire Candidate"
- "Message"
- "View Resume"
- "Stalled"
- "Save Notes"
- "Resume"
- "No Resume"
- "Hire"
- "Add private notes about this candidate..."
- "next/link"
- "Notes saved"
- "Your notes have been saved"
- "Hiring process initiated"
- "Candidate"
- "Applicant"
- "Hide notes"
- "Add notes"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/hiring-tracker/HireConfirmationModal.tsx

**Hardcoded strings found:**
- "Confirm Hire"
- "Project Name"
- "Project Description"
- "Update talent availability to "Unavailable""
- "Cancel"
- "Error updating availability:"
- "Error hiring candidate:"
- "Required fields missing"
- "Not authenticated"
- "Missing talent data"
- "Error creating project"
- "Error creating hiring record"
- "Error updating availability"
- "Candidate hired successfully"
- "Error hiring candidate"
- "Unavailable"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/hiring-tracker/HiringAnalytics.tsx

**Hardcoded strings found:**
- "Loading analytics data..."
- "No data available"
- "You need applications to generate analytics"
- "Application Status Distribution"
- "Time to Hire"
- "Application Conversion Rate"
- "Applications to hired ratio"
- "Hiring Funnel"
- "Shortlisted"
- "Interview"
- "Hired"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/hiring-tracker/KanbanBoard.tsx

**Hardcoded strings found:**
- "No applications yet"
- "Applied"
- "New applications"
- "Shortlisted"
- "Candidates selected for review"
- "Interview"
- "Scheduled for interview"
- "Hired"
- "Successful candidates"
- "Rejected"
- "Not moving forward"
- "Status updated"
- "Failed to update status"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/hiring-tracker/KanbanColumn.tsx

**Hardcoded strings found:**
- "Drag candidates here"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/home/FeatureHighlights.tsx

**Hardcoded strings found:**
- "Tailored Solutions for Everyone"
- "For Talent Seekers"
- "For Talent & Service Providers"
- "Professional development resources and community support"
- "Customizable workflow and approval processes"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/home/InteractiveFeatures.tsx

**Hardcoded strings found:**
- "Key Features"
- "Hover or click a card to learn more about what Zion offers"
- "Learn more"
- "next/link"
- "Talent Directory"
- "Every profile is vetted for quality and authenticity so you can hire with confidence."
- "Services Marketplace"
- "Discover professional tech and AI services for your business."
- "/services"
- "Equipment Catalog"
- "Find specialized hardware for development and research."
- "Access cutting-edge technology with flexible options to buy, rent or lease the gear you need."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/icons/index.tsx

**Hardcoded strings found:**
- "Icon"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/integrations/IntegrationCards.tsx

**Hardcoded strings found:**
- "Connected"
- "Pending"
- "Not Connected"
- "Manage"
- "Connect"
- "Slack"
- "Salesforce"
- "Microsoft Teams"
- "Connect Slack"
- "Connect Salesforce"
- "Receive updates through Microsoft Teams."
- "Connect Teams"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/integrations/IntegrationConnectionModal.tsx

**Hardcoded strings found:**
- "Sync Settings"
- "Sync job details"
- "Sync applicant data"
- "Disconnect"
- "Save Settings"
- "Contact information"
- "Job details and descriptions"
- "Applicant data and status"
- "Activity logs and notes"
- "Integration settings saved"
- "Connect your ${integration.name} account"
- "Never"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/integrations/IntegrationsHub.tsx

**Hardcoded strings found:**
- "Integrations Hub"
- "Connect your platform with the tools and services you use every day"
- "Connect New Integration"
- "Status"
- "Healthy"
- "Connected Services"
- "Last Sync"
- "Pending Webhooks"
- "Recent Activity"
- "Slack notification sent"
- "New job application received"
- "Google Calendar sync"
- "Interview scheduled"
- "Contract signed"
- "View All Activity"
- "Marketplace"
- "Webhooks"
- "Synchronization Log"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/integrations/IntegrationsSyncLog.tsx

**Hardcoded strings found:**
- "Success"
- "Error"
- "Warning"
- "Unknown"
- "Integration"
- "Event"
- "Status"
- "Time"
- "Details"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/integrations/WebhookManager.tsx

**Hardcoded strings found:**
- "Create Webhook"
- "Webhook Name"
- "Add"
- "Your Webhooks"
- "Loading webhooks..."
- "No webhooks configured yet. Create your first webhook above."
- "Delete"
- "Webhook Test Result"
- "Select event"
- "Test webhook"
- "This event is already added"
- "Please fill in all required fields"
- "New Application Received"
- "Quote Request Received"
- "Milestone Approved"
- "Talent Hired"
- "Active"
- "Inactive"
- "Disable"
- "Enable"
- "Never triggered"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/integrations/ZapierIntegration.tsx

**Hardcoded strings found:**
- "Active"
- "Popular Zaps"
- "Create Slack notifications for new jobs"
- "Explore Zion Zaps"
- "New Job Posted"
- "Set Up Trigger"
- "New Application"
- "Contract Signed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/interviews/InterviewCard.tsx

**Hardcoded strings found:**
- "Promise"
- "Pending"
- "Live Now"
- "Confirmed"
- "Declined"
- "Rescheduled"
- "Completed"
- "Cancelled"
- "Cancel Request"
- "Cancel Interview Request"
- "Are you sure you want to cancel this interview request? This action cannot be undone."
- "Go Back"
- "Cancel Interview"
- "Respond"
- "Decline"
- "Cancel Confirmed Interview"
- "Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified."
- "Respond to Interview Request"
- "Took place ${formatDistanceToNow(interviewDate)} ago"
- "Error"
- "Failed to respond to the interview request. Please try again."
- "Interview cancelled"
- "Failed to cancel the interview. Please try again."
- "Talent"
- "Client"
- "Join Now"
- "Join Meeting"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/interviews/InterviewRequestForm.tsx

**Hardcoded strings found:**
- "Interview Title"
- "Date"
- "Pick a date"
- "Time"
- "Duration"
- "Platform"
- "Zoom"
- "Google Meet"
- "Microsoft Teams"
- "Other"
- "Cancel"
- "Brief title for the interview"
- "Select time"
- "Select duration"
- "Select platform"
- "Share what you"
- "Please select a date for the interview."
- "Interview date must be in the future"
- "Please select a meeting platform."
- "Please provide a brief title for the interview."
- "Authentication required"
- "Interview requested"
- "Failed to schedule interview"
- "Add your ${form.watch("
- "Schedule Interview"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/interviews/InterviewResponseForm.tsx

**Hardcoded strings found:**
- "Promise"
- "Cancel"
- "Client"
- "Confirm Interview"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/interviews/UpcomingInterviewsCard.tsx

**Hardcoded strings found:**
- "Upcoming Interviews"
- "No upcoming interviews scheduled"
- "Schedule Interview"
- "Soon"
- "View All Interviews"
- "next/link"
- "Error loading upcoming interviews:"
- "Interview"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/ApplicationScoreCard.tsx

**Hardcoded strings found:**
- "Resume Match Score"
- "Match Score"
- "Summary"
- "Suggestion"
- "View detailed breakdown"
- "Failed to check scoring status"
- "Strongly Recommended"
- "Recommended for Review"
- "Low Match"
- "Score Resume"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/ApplyToJobForm.tsx

**Hardcoded strings found:**
- "Cover Letter"
- "Loading your resumes..."
- "No resume"
- "No resumes found"
- "Create Resume"
- "Or Upload CV (PDF)"
- "Cancel"
- "Submitting..."
- "Select a resume"
- "You must be logged in to apply"
- "Please provide a cover letter"
- "Failed to submit application"
- "/login?returnTo=${encodeURIComponent("
- "Untitled Resume"
- "/dashboard/talent/portfolio"
- "Submit Application"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/EmptyMatchesCard.tsx

**Hardcoded strings found:**
- "No talent matches yet"
- "Find AI Matches"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/JobCard.tsx

**Hardcoded strings found:**
- "Apply Now"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/JobMatchCard.tsx

**Hardcoded strings found:**
- "Available"
- "Invite"
- "View Details"
- "Apply Now"
- "bg-background"
- "Independent"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/JobMatchesCard.tsx

**Hardcoded strings found:**
- "Applied"
- "Declined"
- "Apply Now"
- "Decline"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/JobsList.tsx

**Hardcoded strings found:**
- "Post Your First Job"
- "View Details"
- "next/link"
- "Error fetching jobs:"
- "No jobs with status"
- "You haven"
- "/jobs/${job.id}/edit"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/MyApplications.tsx

**Hardcoded strings found:**
- "New"
- "Viewed"
- "Shortlisted"
- "Interview"
- "Hired"
- "Rejected"
- "You haven't submitted any applications yet."
- "Browse Jobs"
- "View Job"
- "Contact Client"
- "next/link"
- "Unknown Job"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/NoJobsCard.tsx

**Hardcoded strings found:**
- "No job suggestions available yet. Complete your profile to get AI-matched jobs."
- "Update Profile"
- "next/link"
- "/profile"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/SuggestedJobs.tsx

**Hardcoded strings found:**
- "New Job Matches"
- "Previously Viewed"
- "Applied Jobs"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/SuggestedTalents.tsx

**Hardcoded strings found:**
- "Error"
- "View talent profile:"
- "View Profile"
- "Navigating to talent profile: ${talentId}"
- "Invite Talent"
- "Talent"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/applications/ApplicationActions.tsx

**Hardcoded strings found:**
- "Promise"
- "Status"
- "Shortlist"
- "Schedule Interview"
- "Hire"
- "Reject"
- "Contact"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/applications/ApplicationCard.tsx

**Hardcoded strings found:**
- "Prepare for Interview"
- "View Interview Details"
- "View Offer"
- "View Feedback"
- "Your Cover Letter"
- "Download"
- "Match Score"
- "View Job"
- "Message Client"
- "next/link"
- "Unknown Job"
- "Resume"
- "Show Less"
- "Show More"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/applications/ApplicationProgress.tsx

**Hardcoded strings found:**
- "Submitted"
- "Viewed"
- "Shortlisted"
- "Interview"
- "Decision"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/applications/ApplicationRow.tsx

**Hardcoded strings found:**
- "Promise"
- "View"
- "No resume"
- "Unknown"
- "Talent"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/applications/ApplicationsTable.tsx

**Hardcoded strings found:**
- "Promise"
- "Candidate"
- "Applied"
- "Status"
- "Match Score"
- "Actions"
- "Not scored"
- "Hire"
- "Hiring process initiated"
- "Applicant"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/applications/ApplicationsTracker.tsx

**Hardcoded strings found:**
- "All"
- "Submitted"
- "Viewed"
- "Shortlisted"
- "Interview"
- "Hired"
- "Not Selected"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/applications/EmptyState.tsx

**Hardcoded strings found:**
- "No Applications Yet"
- "You haven't submitted any applications yet. Browse available jobs to get started!"
- "Browse Jobs"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/applications/ErrorState.tsx

**Hardcoded strings found:**
- "Something went wrong"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/applications/ScoreBadge.tsx

**Hardcoded strings found:**
- "Not scored"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/applications/ScoreDialog.tsx

**Hardcoded strings found:**
- "Application Match Score"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/applications/StatusBadge.tsx

**Hardcoded strings found:**
- "Submitted"
- "Viewed"
- "Shortlisted"
- "Interview"
- "Hired"
- "Not Selected"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/job-posting/BasicInfoFields.tsx

**Hardcoded strings found:**
- "Job Title"
- "Company"
- "Job Category"
- "Select a category"
- "Development"
- "Design"
- "Marketing"
- "Content"
- "Data"
- "Business"
- "Other"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/job-posting/DateFields.tsx

**Hardcoded strings found:**
- "Pick a date"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/job-posting/DescriptionFields.tsx

**Hardcoded strings found:**
- "Job Description"
- "Enter a detailed description of the job role"
- "List the main responsibilities of this job"
- "List the required qualifications for this job"
- "Provide instructions on how to apply for this job"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/job-posting/JobPostingForm.tsx

**Hardcoded strings found:**
- "Loading..."
- "Post a Job"
- "Fill in the details below to create a job posting."
- "Failed to load job"
- "Error creating/updating job:"
- "Failed to post job"
- "Submitting..."
- "Update Job"
- "Post Job"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/jobs/job-posting/useJobForm.ts

**Hardcoded strings found:**
- "You must be logged in to post a job"
- "Error in job form submission:"
- "Failed to process form"
- "/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/listing/AIListingForm.tsx

**Hardcoded strings found:**
- "Title"
- "Category"
- "Generate Optimized Content"
- "Enter your product or service title"
- "Missing required fields"
- "Please provide at least a title and category."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/listing/AIListingGenerator.tsx

**Hardcoded strings found:**
- "Error generating content:"
- "Failed to generate content. Please try again."
- "Content Generated"
- "AI has created optimized listing content for you."
- "Generation Failed"
- "Content Applied"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/listing/GeneratedContentDisplay.tsx

**Hardcoded strings found:**
- "Generated Content"
- "Description"
- "Tags"
- "Suggested Price Range"
- "Apply to My Listing"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/loyalty/PointsBadge.tsx

**Hardcoded strings found:**
- "Point Breakdown"
- "Click to view full rewards program"
- "Zion Rewards Program"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/ConversationDetailView.tsx

**Hardcoded strings found:**
- "No Conversation Selected"
- "Send"
- "Enter"
- "Admin"
- "User"
- "Context"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/ConversationsList.tsx

**Hardcoded strings found:**
- "Promise"
- "Conversations"
- "No conversations yet"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/FraudDetectionMiddleware.tsx

**Hardcoded strings found:**
- "Promise"
- "Error analyzing message:"
- "Message Flagged"
- "Message Blocked"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/MessageBubble.tsx

**Hardcoded strings found:**
- "Attachment"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/MessageTalentModal.tsx

**Hardcoded strings found:**
- "Message"
- "Cancel"
- "Message required"
- "Please enter a message before sending."
- "Message sent"
- "Message not sent"
- "There was an error sending your message. Please try again."
- "Send Message"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/job-application/ApplyForm.tsx

**Hardcoded strings found:**
- "Promise"
- "Message"
- "Resume"
- "Cancel"
- "Submitting..."
- "Failed to submit application"
- "s a link to my proposal: ${proposalLink}`;
      }
      
      // Add info about attached resume if available
      if (selectedResume) {
        fullMessage += `\n\nI"
- "Message required"
- "Please enter a message before applying."
- "Application sent"
- "Your application for"
- "Application failed"
- "There was an error sending your application. Please try again."
- "Submit Application"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/job-application/ApplyToJobModal.tsx

**Hardcoded strings found:**
- "Complete your application for this position"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/job-application/MessageTab.tsx

**Hardcoded strings found:**
- "Application Message"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/job-application/ResumeTab.tsx

**Hardcoded strings found:**
- "Promise"
- "Please select a resume to continue"
- "Submitting..."
- "Submit Application"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/job-application/types.ts

**Hardcoded strings found:**
- "Promise"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/resume-selector/ResumePreviewCard.tsx

**Hardcoded strings found:**
- "Download Resume"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/resume-selector/ResumeSelector.tsx

**Hardcoded strings found:**
- "Attach Resume"
- "Use most recent AI Resume"
- "Upload a custom resume (PDF)"
- "Generate Resume Now"
- "Resume"
- "Error loading resumes:"
- "Error downloading PDF:"
- "Invalid file type"
- "custom-upload"
- "Success!"
- "Your resume has been downloaded."
- "Download failed"
- "There was an error downloading your resume."
- "/dashboard/talent/portfolio"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/resume-selector/SelectResumeSection.tsx

**Hardcoded strings found:**
- "No saved resumes found."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/messaging/resume-selector/UploadSection.tsx

**Hardcoded strings found:**
- "Browse Files"
- "Drag & drop your PDF or click to browse"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/AppFeatures.tsx

**Hardcoded strings found:**
- "Powerful Features"
- "Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed."
- "Resume Builder"
- "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired."
- "Real-time Notifications"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/AppScreenshots.tsx

**Hardcoded strings found:**
- "Scroll left"
- "Scroll right"
- "Dashboard screen"
- "Talent matching screen"
- "Resume builder screen"
- "Messaging screen"
- "Profile screen"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/AppStoreBanner.tsx

**Hardcoded strings found:**
- "Zion AI Marketplace"
- "Get the full experience on our app"
- "View"
- "Dismiss banner"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/AppStoreButtons.tsx

**Hardcoded strings found:**
- "Download on the"
- "App Store"
- "Google Play"
- "Download on the App Store"
- "Get it on Google Play"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/AppTestimonials.tsx

**Hardcoded strings found:**
- "What Our Users Say"
- "Sarah Williams"
- "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive."
- "Michael Chen"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/CommunityTrust.tsx

**Hardcoded strings found:**
- "Trusted by the"
- "Tech Community"
- "Join thousands of professionals who are already using the Zion mobile app to connect, hire, and work"
- "Sarah Johnson"
- "App Store Rating"
- "Downloads"
- "User Satisfaction"
- "Matches Made"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/DownloadSection.tsx

**Hardcoded strings found:**
- "Get The App Today"
- "Download the Zion app now and take your tech career or hiring needs to the next level. Available on iOS and Android."
- "Scan to download"
- "App Store button clicked"
- "Google Play button clicked"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/MobileAppHero.tsx

**Hardcoded strings found:**
- "Zion"
- "Open App"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/MobileEmailCapture.tsx

**Hardcoded strings found:**
- "Get Early Access to New Features"
- "Subscribe to our mobile app updates and be the first to try new features before they're released to the public."
- "We respect your privacy and will never share your information."
- "Error subscribing:"
- "Subscribe"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/MobileFeatureShowcase.tsx

**Hardcoded strings found:**
- "Everything You Need On The Go"
- "The Zion mobile app brings the power of our AI marketplace to your pocket with these key features"
- "Track Milestones"
- "Instant Messaging"
- "Biometric Security"
- "Login quickly and securely with Face ID or Touch ID on supported devices."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/MobileLaunchHero.tsx

**Hardcoded strings found:**
- "The Power of"
- "Zion"
- "In Your Pocket"
- "Open App"
- "See Features"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/QrCodeDownload.tsx

**Hardcoded strings found:**
- "Download"
- "Zion"
- "Scan to download"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/SmartAppBanner.tsx

**Hardcoded strings found:**
- "Show banner"
- "Get our app for the best experience"
- "View"
- "Dismiss"
- "next/link"
- "Zion Marketplace"
- "/download"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/admin/ChangelogManager.tsx

**Hardcoded strings found:**
- "Version History"
- "Add"
- "No changelog entries yet"
- "What"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/admin/ExportPanel.tsx

**Hardcoded strings found:**
- "Installation Analytics"
- "Enable Analytics"
- "Analytics tracking enabled"
- "Install"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/admin/MetadataForm.tsx

**Hardcoded strings found:**
- "App Metadata"
- "App Title"
- "Short Description"
- "Long Description"
- "Keywords"
- "Add keywords to improve discoverability (max 100 characters total)"
- "App Version"
- "Enter app title"
- "Brief description of your app"
- "Detailed description of your app"
- "Add keywords (press Enter or comma to add)"
- "Enter"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/admin/MetadataManager.tsx

**Hardcoded strings found:**
- "Failed to save metadata"
- "Save Metadata"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/mobile-app/admin/ScreenshotManager.tsx

**Hardcoded strings found:**
- "Select Files"
- "App screenshot"
- "Please select valid image files"
- "Android"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/navigation/Navigation.tsx

**Hardcoded strings found:**
- "next/link"
- "Home"
- "Marketplace"
- "Overview"
- "Categories"
- "Talent"
- "Equipment"
- "Community"
- "Blog"
- "Partners"
- "Resources"
- "Docs"
- "Tutorials"
- "Case Studies"
- "About"
- "Dashboard"
- "/dashboard"
- "absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/notifications/NotificationFilter.tsx

**Hardcoded strings found:**
- "All"
- "Unread"
- "Onboarding"
- "Messages"
- "Orders"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/notifications/NotificationFooter.tsx

**Hardcoded strings found:**
- "View all notifications"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/notifications/NotificationHeader.tsx

**Hardcoded strings found:**
- "Promise"
- "Notifications"
- "Mark all as read"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/notifications/NotificationItem.tsx

**Hardcoded strings found:**
- "Promise"
- "New"
- "Mark as read"
- "Dismiss"
- "Dismiss notification"
- "You have a new notification"
- "Notification"
- "Just now"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/notifications/NotificationList.tsx

**Hardcoded strings found:**
- "Promise"
- "Try Again"
- "No Notifications"
- "You"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/onboarding/AdvancedOnboardingSteps.tsx

**Hardcoded strings found:**
- "Discover Advanced Features"
- "Explore AI tools"
- "Connect Slack integration"
- "Join the community forum"
- "Join"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/onboarding/CategorySelection.tsx

**Hardcoded strings found:**
- "Preferred Categories"
- "Select categories you want to see more of"
- "Finish"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/onboarding/ClientOnboardingSteps.tsx

**Hardcoded strings found:**
- "Get Started With Hiring"
- "Post your first job"
- "Send invitation to talent"
- "Receive your first application"
- "Check Dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/onboarding/GuidedTour.tsx

**Hardcoded strings found:**
- "Skip"
- "Next"
- "Finish"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/onboarding/InterestSelection.tsx

**Hardcoded strings found:**
- "Choose topics you're interested in"
- "Continue"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/onboarding/OnboardingTracker.tsx

**Hardcoded strings found:**
- "Complete Your Profile"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/onboarding/OnboardingWizard.tsx

**Hardcoded strings found:**
- "Post your first job"
- "Describe the talent you need for your project"
- "Post a Job"
- "View suggested matches"
- "View Matches"
- "Skip for now"
- "Contact talent"
- "Browse Talent"
- "Complete your profile"
- "Add your skills, experience, and preferences"
- "Edit Profile"
- "Define skills & availability"
- "Set Availability"
- "Preview your profile"
- "Preview Profile"
- "Enable AI matchmaking"
- "Let our AI find the perfect opportunities for you"
- "Enable Matchmaking"
- "border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md"
- "Let"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/onboarding/ProfileSetup.tsx

**Hardcoded strings found:**
- "Help others get to know you better"
- "Full Name"
- "Professional Headline"
- "Bio"
- "Complete Profile"
- "Your full name"
- "Headline must be less than 100 characters"
- "Service Provider"
- "Talent"
- "Client"
- "User"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/onboarding/TalentOnboardingSteps.tsx

**Hardcoded strings found:**
- "Complete your profile"
- "Add your top skills"
- "Set your availability"
- "Receive your first job match"
- "View Matches"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/onboarding/UserTypeSelection.tsx

**Hardcoded strings found:**
- "Choose your role"
- "This helps us personalize your experience"
- "I want to discover and hire talent or services"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/orders/OrderTimeline.tsx

**Hardcoded strings found:**
- "No tracking info yet."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/partners/PartnerDashboard.tsx

**Hardcoded strings found:**
- "Total Referrals"
- "Conversion Rate"
- "Of clicks that convert to sign-ups"
- "Total Earnings"
- "Performance Overview"
- "Track your referral performance over time"
- "Detailed analytics will be available soon"
- "Recent Referrals"
- "Your latest partner referrals"
- "View All"
- "No referrals yet"
- "Start sharing your referral links to earn rewards"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/partners/PartnerLeaderboard.tsx

**Hardcoded strings found:**
- "Top Partners"
- "This month's top-performing partners"
- "Elite"
- "Trending"
- "Leaderboard will appear here"
- "Start referring to earn your spot on the leaderboard"
- "Your Ranking"
- "How you compare to other partners"
- "Start referring to appear on the leaderboard"
- "New Partner"
- "Rewards Program"
- "Exclusive perks for top partners"
- "Elite Partner"
- "Featured on Zion AI home page"
- "Early access to new Zion AI features"
- "Monthly strategy call with Zion AI team"
- "Custom landing page for your referrals"
- "Co-marketing opportunities"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/partners/PartnerReferralLinks.tsx

**Hardcoded strings found:**
- "Your Referral Link"
- "Share this link with your audience to earn rewards"
- "Copy"
- "Custom Campaign Links"
- "Create New Link"
- "Create Custom Campaign Link"
- "Generate a trackable link for specific marketing campaigns"
- "Campaign Type"
- "YouTube"
- "Newsletter"
- "Blog"
- "Podcast"
- "Social Media"
- "Cancel"
- "Generate Link"
- "Create First Link"
- "Select campaign type"
- "The referral link has been copied to your clipboard"
- "Name,Link"
- "Campaign Link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/partners/PartnerRegistrationForm.tsx

**Hardcoded strings found:**
- "Partner Registration"
- "Register to become a Zion AI partner and start earning rewards"
- "Name / Brand"
- "Your Niche"
- "Audience Size"
- "Preferred Payout Method"
- "PayPal"
- "Bank Transfer"
- "Cryptocurrency"
- "Platform Credit"
- "Bio"
- "Limit: 500 characters"
- "Your name or brand name"
- "Select audience size"
- "Select payout method"
- "Tell us about yourself and how you plan to promote Zion AI"
- "Please specify your niche."
- "Please select your audience size."
- "Please select a payout method."
- "Error submitting partner application:"
- "Already registered"
- "You have already registered as a partner."
- "Authentication required"
- "Application submitted!"
- "Submission failed"
- "Submitting..."
- "Submit Application"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/partners/PartnerResources.tsx

**Hardcoded strings found:**
- "Marketing Resources"
- "Promotion Guidelines"
- "Best practices for promoting the Zion AI Marketplace"
- "Do's"
- "Share your unique referral link in your content"
- "Focus on how the platform can help your audience solve their AI talent needs"
- "Use manipulative or misleading marketing tactics"
- "Spam your referral link across unrelated content"
- "Partner Support"
- "Need help with your affiliate marketing? Contact our partner support team."
- "Contact Partner Support"
- "Download"
- "Zion AI Logo Pack"
- "Brand Guidelines"
- "Social Media Banners"
- "Pre-designed graphics for your social channels"
- "Promotional Video"
- "Short explainer video about Zion AI Marketplace"
- "Download started"
- "Downloading ${resource.title}"
- "Visit Link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/pricing/ClientBudgetRecommender.tsx

**Hardcoded strings found:**
- "Get Budget Recommendation"
- "Error generating budget suggestion:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/pricing/PricingSuggestionBox.tsx

**Hardcoded strings found:**
- "Apply Suggestion"
- "Apply this suggestion to your pricing field"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/pricing/TalentRateRecommender.tsx

**Hardcoded strings found:**
- "Error generating rate suggestion:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/AvatarUpload.tsx

**Hardcoded strings found:**
- "Upload Avatar"
- "Image upload feature is currently unavailable."
- "Avatar preview"
- "next-cloudinary"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/BackToDirectoryButton.tsx

**Hardcoded strings found:**
- "Back to Talent Directory"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/ContactPublisherModal.tsx

**Hardcoded strings found:**
- "Contact Publisher"
- "Subject"
- "Message"
- "contact-publisher-title"
- "Escape"
- "Send Message"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/HireNowCTA.tsx

**Hardcoded strings found:**
- "Profile Completeness"
- "Request to Hire"
- "Schedule Interview"
- "This Talent"
- "Talent"
- "Professional"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/ProfileAvailability.tsx

**Hardcoded strings found:**
- "Availability"
- "Weekly Availability"
- "Available Now"
- "Limited Availability"
- "Currently Unavailable"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/ProfileContact.tsx

**Hardcoded strings found:**
- "Contact"
- "Subject"
- "Message Sent"
- "Your message has been sent to ${profileName}."
- "Message to ${profileName}..."
- "Send Message"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/ProfileErrorState.tsx

**Hardcoded strings found:**
- "Back to Talent Directory"
- "next/link"
- "Something went wrong"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/ProfileExperience.tsx

**Hardcoded strings found:**
- "Experience"
- "Present"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/ProfileForm.tsx

**Hardcoded strings found:**
- "Name"
- "Bio"
- "Save"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/ProfileHero.tsx

**Hardcoded strings found:**
- "Service Provider"
- "Talent"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/ProfileLoadingState.tsx

**Hardcoded strings found:**
- "Loading profile..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/ProfileRatings.tsx

**Hardcoded strings found:**
- "Positive"
- "Critical"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/ProfileSkills.tsx

**Hardcoded strings found:**
- "Skills"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/SaveTalentButton.tsx

**Hardcoded strings found:**
- "h-4 w-4 ${isSaved ?"
- "Saved"
- "Save"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/ServiceProviderRegistrationForm.tsx

**Hardcoded strings found:**
- "Service Profile Created!"
- "Your service provider profile has been successfully created and published."
- "Create Your Service Provider Profile"
- "Basic Information"
- "Full Name"
- "Business/Service Name"
- "Profile Picture"
- "Upload Photo"
- "Service Description"
- "About Your Services"
- "Apply"
- "Professional Summary"
- "Suggested Services"
- "Services Offered"
- "Services"
- "Add"
- "Press Enter or click Add to include a service"
- "No services added yet"
- "Pricing & Availability"
- "Current Status"
- "Available for Work"
- "Limited Availability"
- "Currently Unavailable"
- "Save as Draft"
- "Your full name"
- "City, State/Province, Country"
- "Avatar preview"
- "Add a service..."
- "Rate must be a number"
- "service-profile-enhancer"
- "Error generating enhanced profile:"
- "There was an error generating your enhanced profile. Please try again."
- "User not authenticated"
- "Error enhancing profile:"
- "Error creating profile:"
- "There was an error creating your profile. Please try again."
- "Full Name must be at least 2 characters long"
- "Business name/title is required"
- "Bio must be at least 50 characters long"
- "Enter at least one service"
- "Enter"
- "More information needed"
- "Please provide at least a detailed bio before generating enhanced content."
- "Enhanced Profile Generated"
- "Generation failed"
- "Services required"
- "Please add at least one service to your profile."
- "Your Zion Service Profile Is Ready"
- "Profile Created Successfully"
- "/service-dashboard"
- "Error Creating Profile"
- "Generate Enhanced Profile"
- "Creating Profile..."
- "Create Service Profile"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/TalentCard.tsx

**Hardcoded strings found:**
- "Rate not specified"
- "Hire"
- "View"
- "next/link"
- "Talent Avatar"
- "h-5 w-5 ${isSaved ?"
- "Saved"
- "Save"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/TalentOnboardingForm.tsx

**Hardcoded strings found:**
- "Error uploading CV:"
- "Failed to upload CV"
- "Professional title is required"
- "Project title is required"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/TalentProfile.tsx

**Hardcoded strings found:**
- "Reviews & Ratings"
- "Hire Now"
- "Message"
- "${profile.professional_title} with ${profile.years_experience} years of experience"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/TalentRegistrationForm.tsx

**Hardcoded strings found:**
- "Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!"
- "We've added a professional summary and categorized your skills to help you stand out."
- "Create Your Talent Profile"
- "Basic Information"
- "Full Name"
- "Professional Title"
- "Profile Picture"
- "Upload Photo"
- "Professional Bio"
- "About Yourself"
- "Apply"
- "Professional Summary"
- "Categorized Skills"
- "Skills & Expertise"
- "Skills"
- "Add"
- "Press Enter or click Add to include a skill"
- "No skills added yet"
- "Availability"
- "Current Status"
- "Available Now"
- "Limited Availability"
- "Currently Unavailable"
- "Save as Draft"
- "Your full name"
- "City, State/Province, Country"
- "Avatar preview"
- "Add a skill..."
- "talent-profile-enhancer"
- "Error generating enhanced profile:"
- "There was an error generating your enhanced profile. Please try again."
- "User not authenticated"
- "Error enhancing profile:"
- "Error creating profile:"
- "There was an error creating your profile. Please try again."
- "Full Name must be at least 2 characters long"
- "Professional title is required"
- "Bio must be at least 50 characters long"
- "Enter at least one skill"
- "Enter"
- "More information needed"
- "Please provide at least a detailed bio before generating enhanced content."
- "Enhanced Profile Generated"
- "Generation failed"
- "Your Zion Talent Profile Has Been Enhanced"
- "Skills required"
- "Please add at least one skill to your profile."
- "Profile Created Successfully"
- "Error Creating Profile"
- "Generate Enhanced Profile"
- "Creating Profile..."
- "Create Profile"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/hire-request/HireRequestForm.tsx

**Hardcoded strings found:**
- "Cancel"
- "Submitting..."
- "Submit Request"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/hire-request/PersonalInfoFields.tsx

**Hardcoded strings found:**
- "Your Name"
- "Enter your full name"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/hire-request/ProjectDetailsField.tsx

**Hardcoded strings found:**
- "Project Overview"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/hire-request/TimelineField.tsx

**Hardcoded strings found:**
- "Project Timeline"
- "Select estimated timeline"
- "Less than 1 week"
- "Ongoing"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/hire-request/useHireRequestForm.ts

**Hardcoded strings found:**
- "Maximum budget must be greater than or equal to minimum budget"
- "Error submitting hire request:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/talent-card/TalentCardAvailability.tsx

**Hardcoded strings found:**
- "Full-time"
- "Part-time"
- "Project"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/talent-card/TalentCardBadges.tsx

**Hardcoded strings found:**
- "Featured"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/talent-card/TalentCardFooter.tsx

**Hardcoded strings found:**
- "Hire"
- "View"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/talent-card/TalentCardHeader.tsx

**Hardcoded strings found:**
- "Verified Expert"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/profile/talent-card/TalentCardSaveButton.tsx

**Hardcoded strings found:**
- "Save to favorites"
- "Authentication required"
- "/auth/login?returnTo=${returnTo}"
- "Added to favorites"
- "${profileName} has been added to your favorites"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/ActiveProjectsCard.tsx

**Hardcoded strings found:**
- "Your ongoing work"
- "Find Opportunities"
- "View Project"
- "next/link"
- "Starting"
- "In Progress"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/ProjectOfferBanner.tsx

**Hardcoded strings found:**
- "View Offer"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/AIMilestoneGenerator.tsx

**Hardcoded strings found:**
- "Generate Milestones"
- "Add Selected to Project"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/AddMilestoneForm.tsx

**Hardcoded strings found:**
- "Title"
- "Pick a date"
- "Cancel"
- "Milestone title"
- "Describe what needs to be delivered"
- "Title is required"
- "Add Milestone"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/MilestoneActivities.tsx

**Hardcoded strings found:**
- "No activity found for this project"
- "Project Activity"
- "Error fetching milestone activities:"
- "created a new milestone"
- "updated milestone details"
- "added a deliverable"
- "} alt={activity.created_by_profile?.display_name ||"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/MilestoneCard.tsx

**Hardcoded strings found:**
- "Promise"
- "Reject"
- "Approve"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/MilestoneSuggestions.tsx

**Hardcoded strings found:**
- "These milestones will be added to your contract"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/MilestonesList.tsx

**Hardcoded strings found:**
- "Promise"
- "Add Milestone"
- "Create New Milestone"
- "No Milestones Yet"
- "Create First Milestone"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/PaymentSummary.tsx

**Hardcoded strings found:**
- "Payment Summary"
- "Total Payment"
- "Payment Terms"
- "Paid Amount"
- "Not specified"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/ProjectHeader.tsx

**Hardcoded strings found:**
- "Back"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/ProjectMilestonesContent.tsx

**Hardcoded strings found:**
- "Payment Milestones"
- "Milestones"
- "Activity"
- "Create Milestone"
- "Error loading project:"
- "Other"
- "Untitled Project"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/components/MilestoneActivities.tsx

**Hardcoded strings found:**
- "Activity will be shown here"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/components/MilestoneCreator.tsx

**Hardcoded strings found:**
- "Promise"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/components/MilestoneManager.tsx

**Hardcoded strings found:**
- "Promise"
- "Error approving milestone:"
- "Error rejecting milestone:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/milestones/components/ProjectActions.tsx

**Hardcoded strings found:**
- "View Active Dispute"
- "Add Milestone"
- "next/link"
- "/dashboard/disputes/${disputeId}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/projects/reviews/ProjectReviewSection.tsx

**Hardcoded strings found:**
- "Reviews"
- "Reviews are visible once the project is completed and both parties submit feedback"
- "Share your experience"
- "Your review will help build a trustworthy community"
- "Leave Review"
- "Thank you for your review!"
- "Edit Review"
- "Reviews will be available once the project is completed"
- "After the project is marked as completed, both parties will be able to leave reviews"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/prompts/PromptCard.tsx

**Hardcoded strings found:**
- "Copy prompt"
- "p-4 border rounded-md bg-background flex flex-col justify-between"
- "Copied"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/quote/QuoteWizard.tsx

**Hardcoded strings found:**
- "Retry"
- "Continue"
- "Back"
- "Submit Quote"
- "Quote Submitted Successfully!"
- "Request Another Quote"
- "Unable to load services"
- "loading-indicator"
- "fetch-error-alert"
- "Enter"
- "Talent"
- "selection-error"
- "Service"
- "success-step"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/quotes/EmptyStateCard.tsx

**Hardcoded strings found:**
- "You haven"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/quotes/ExportToCSV.tsx

**Hardcoded strings found:**
- "Unknown"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/quotes/QuoteDetails.tsx

**Hardcoded strings found:**
- "Requester Information"
- "Project Timeline"
- "Project Details"
- "Additional Details"
- "Close"
- "Not specified"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/quotes/QuoteRequestCard.tsx

**Hardcoded strings found:**
- "View Details"
- "Mark Responded"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/quotes/QuoteStatusBadge.tsx

**Hardcoded strings found:**
- "New"
- "In Review"
- "Accepted"
- "Responded"
- "Closed"
- "Archived"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/quotes/RequestsHeader.tsx

**Hardcoded strings found:**
- "All Statuses"
- "New"
- "In Review"
- "Responded"
- "Accepted"
- "Closed"
- "Active Only"
- "Archived Only"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/referral/ReferralMiddleware.tsx

**Hardcoded strings found:**
- "Error tracking referral"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/referrals/ReferralGuide.tsx

**Hardcoded strings found:**
- "How Referrals Work"
- "Follow these steps to earn rewards through referrals"
- "Share your referral link"
- "They sign up"
- "When someone clicks your link and creates an account, they"
- "They complete onboarding"
- "Once they complete their profile setup, your referral is confirmed"
- "You earn rewards"
- "Rewards are issued based on the type of user who completes onboarding"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/referrals/ReferralLeaderboard.tsx

**Hardcoded strings found:**
- "Leaderboard"
- "Top referrers this month"
- "Jordan Lee"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/referrals/ReferralLink.tsx

**Hardcoded strings found:**
- "Your Referral Link"
- "Share this link with others to earn rewards when they join and complete onboarding"
- "Copy"
- "Share on social media:"
- "Twitter"
- "Facebook"
- "LinkedIn"
- "Copy referral link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/referrals/ReferralStats.tsx

**Hardcoded strings found:**
- "Total Referrals"
- "People you"
- "Completed"
- "Signed up & completed onboarding"
- "Pending"
- "Not yet completed onboarding"
- "Total Rewards"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/referrals/ReferralTable.tsx

**Hardcoded strings found:**
- "Pending"
- "Completed"
- "Expired"
- "No referrals yet"
- "Date"
- "Status"
- "User Type"
- "Completed On"
- "Reward"
- "Issued"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/referrals/RewardsCard.tsx

**Hardcoded strings found:**
- "Your Rewards"
- "No rewards yet"
- "Refer users to earn rewards once they complete onboarding"
- "Visibility Boost"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/reviews/LeaveReviewModal.tsx

**Hardcoded strings found:**
- "Your feedback helps build a trustworthy community. It will be visible after moderation."
- "Edit Your Review"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/reviews/ReviewCard.tsx

**Hardcoded strings found:**
- "Promise"
- "Communication"
- "Quality"
- "Timeliness"
- "Report"
- "Report Review"
- "If you believe this review violates our community guidelines, please provide details below."
- "Cancel"
- "Anonymous"
- "User"
- "Would work again"
- "Would not work again"
- "Submitting..."
- "Submit Report"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/reviews/ReviewForm.tsx

**Hardcoded strings found:**
- "Promise"
- "Your Review"
- "Additional Ratings (Optional)"
- "Communication"
- "Quality of Work"
- "Timeliness"
- "Submit anonymously"
- "Share your experience and feedback..."
- "Would work again"
- "Review must be at least 20 characters"
- "Yes"
- "Submitting..."
- "Save Changes"
- "Submit Review"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/reviews/ReviewsList.tsx

**Hardcoded strings found:**
- "Promise"
- "No Reviews Yet"
- "Once reviews are submitted and approved, they will appear here."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/search/ActiveFiltersBar.tsx

**Hardcoded strings found:**
- "Active filters:"
- "Clear all"
- "Type"
- "Category"
- "Price"
- "Rating"
- "Sort"
- "Talent"
- "Price: Low to High"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/search/AdvancedSearchResults.tsx

**Hardcoded strings found:**
- "Content Type"
- "Category"
- "All Categories"
- "Price Range"
- "Minimum Rating"
- "Any Rating"
- "Search Suggestions:"
- "Relevance"
- "Price: Low to High"
- "Price: High to Low"
- "Highest Rated"
- "Search Filters"
- "Filters"
- "Clear All"
- "Loading..."
- "Search failed"
- "Talent"
- "Services"
- "(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g,"
- "Blockchain Development"
- "/search?q=${encodeURIComponent(term)}"
- "Searching..."
- "(${activeFiltersCount})"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/search/AutocompleteSuggestions.test.tsx

**Hardcoded strings found:**
- "Apple"
- "AutocompleteSuggestions"
- "Test Apple Case"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/search/AutocompleteSuggestions.tsx

**Hardcoded strings found:**
- "absolute z-50 top-full left-0 right-0 w-full mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg max-h-64 overflow-y-auto search-dropdown"
- "search-suggestions"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/search/EnhancedSearchInput.test.tsx

**Hardcoded strings found:**
- "Search..."
- "Clear search"
- "EnhancedSearchInput"
- "Debouncing"
- "filters suggestions only after debounce timeout"
- "Apple"
- "cancels debounce on unmount"
- "Keyboard Navigation"
- "ArrowDown cycles through suggestions"
- "Apple MacBook"
- "ArrowUp cycles through suggestions"
- "Enter does nothing if no suggestion highlighted and allows form submission"
- "NonExistent"
- "Escape hides suggestions and blurs input"
- "Clear button clears input"
- "TestValue"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/search/MarketplaceSearch.tsx

**Hardcoded strings found:**
- "Marketplace search"
- "ArrowDown"
- "Enter"
- "marketplace-search-input"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/search/SearchResultsPage.tsx

**Hardcoded strings found:**
- "Content Type"
- "Category"
- "All Categories"
- "Price Range"
- "Minimum Rating"
- "Any Rating"
- "Search Suggestions:"
- "Relevance"
- "Price: Low to High"
- "Price: High to Low"
- "Highest Rated"
- "Search Filters"
- "Filters"
- "Clear All"
- "Loading..."
- "Search failed"
- "Talent"
- "Services"
- "(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g,"
- "Blockchain Development"
- "/search?q=${encodeURIComponent(term)}"
- "Searching..."
- "(${activeFiltersCount})"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/seo/AdvancedSEO.tsx

**Hardcoded strings found:**
- "Zion Tech Marketplace"
- "Article"
- "Product"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/CountrySelector.tsx

**Hardcoded strings found:**
- "Popular Countries"
- "All Countries"
- "Select a country"
- "United States"
- "United Kingdom"
- "Select Country for IT Onsite Service"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/CountryServiceCard.tsx

**Hardcoded strings found:**
- "Popular"
- "Service available in major cities"
- "Hardware & network support"
- "First hour included"
- "Select Service"
- "Get Quote"
- "Contact Sales"
- "next/link"
- "United States"
- "United Kingdom"
- "Unknown Country"
- "/contact"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/GeneratedDescriptionDisplay.tsx

**Hardcoded strings found:**
- "Generated Description"
- "Done"
- "Edit"
- "Save Changes"
- "Description Saved"
- "Your edited description has been saved."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/ITServicePricingTable.tsx

**Hardcoded strings found:**
- "Country"
- "Price Per Incident"
- "No countries match your search"
- "Search by country..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/OnsiteQuoteModal.tsx

**Hardcoded strings found:**
- "Request a Quote"
- "Your Name"
- "Phone"
- "Project details"
- "Request failed"
- "Please fill in all required fields."
- "Submitting..."
- "Submit Request"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/PageSections/CountryTabs.tsx

**Hardcoded strings found:**
- "Featured Countries"
- "All Countries"
- "Browse our most popular service destinations"
- "Search by country..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/PageSections/EnterpriseCallToAction.tsx

**Hardcoded strings found:**
- "Get Custom Enterprise Quote"
- "Need volume pricing or custom SLAs? Contact our enterprise sales team."
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/PageSections/PageHero.tsx

**Hardcoded strings found:**
- "Global IT Onsite Services"
- "Professional IT onsite support services with transparent pricing across 190+ countries worldwide"
- "Global Coverage"
- "IT onsite services available in over 190 countries and territories worldwide"
- "Guaranteed 4-hour response time for critical issues in most major cities"
- "Transparent Pricing"
- "Clear per-incident pricing includes transportation and first hour onsite"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/PageSections/ServiceDetailsSection.tsx

**Hardcoded strings found:**
- "Select a Country for Details"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/PageSections/ServiceIncludes.tsx

**Hardcoded strings found:**
- "What's Included in Every Service"
- "Transportation to Site"
- "First Hour of Service"
- "Technical Assessment"
- "Basic Hardware Diagnostics"
- "Network Connectivity"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/PageSections/ServiceProcessSteps.tsx

**Hardcoded strings found:**
- "How Our IT Onsite Service Works"
- "Select Country"
- "Choose the country where you need onsite IT support services."
- "Purchase Service"
- "Provide Details"
- "Service Delivery"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/PaymentSection.tsx

**Hardcoded strings found:**
- "Selected Country"
- "Price includes transportation and first hour onsite. Additional hours billed separately."
- "Processing your request"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/ServiceDescriptionForm.tsx

**Hardcoded strings found:**
- "Provide basic details about your service and let AI create a professional description"
- "Service Title"
- "Key Features"
- "Target Audience"
- "Generate Description"
- "e.g. Professional Web Design Services"
- "Enter key features, separated by commas"
- "Error generating description:"
- "Failed to generate description. Please try again."
- "Title must be at least 3 characters"
- "Description Generated"
- "Generation Failed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/ServiceDetails.tsx

**Hardcoded strings found:**
- "Service Instructions"
- "What's Included"
- "Transportation to your site"
- "First hour of onsite technical support"
- "Basic hardware diagnosis"
- "Network connectivity troubleshooting"
- "Equipment installation assistance"
- "United States"
- "New York"
- "Los Angeles"
- "Major metropolitan areas"
- "Local timezone"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/services/ServiceLandingTemplate.tsx

**Hardcoded strings found:**
- "next/image"
- "bg-background text-white"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/settings/FraudDetectionSettings.tsx

**Hardcoded strings found:**
- "Message Content Scanning"
- "Scan message content for potentially harmful or abusive material"
- "Activity Monitoring"
- "Monitor account activity for suspicious patterns"
- "Pattern detection in messages and job postings"
- "Monitoring for suspicious account activities"
- "Message scanning"
- "Activity monitoring"
- "Error saving preferences:"
- "Settings saved"
- "Error"
- "Failed to save your preferences. Please try again."
- "Save Preferences"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/skeletons/FilterSidebarSkeleton.tsx

**Hardcoded strings found:**
- "Filters"
- "Category"
- "Price Range"
- "Minimum Rating"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/summit/AgendaSection.tsx

**Hardcoded strings found:**
- "Agenda"
- "Featured Speaker: Founder"
- "py-12 bg-background text-foreground"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/summit/LivestreamSection.tsx

**Hardcoded strings found:**
- "Livestream"
- "Watch the Replay"
- "Zion Summit Livestream"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/summit/PartnersSection.tsx

**Hardcoded strings found:**
- "Partners"
- "Become a Sponsor"
- "next/link"
- "py-12 bg-background"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/summit/RegistrationForm.tsx

**Hardcoded strings found:**
- "Register"
- "Name"
- "Role"
- "Country"
- "Registered!"
- "Submitting..."
- "Sign Up"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/summit/SpeakersSection.tsx

**Hardcoded strings found:**
- "Speakers"
- "Twitter"
- "LinkedIn"
- "next/image"
- "Alex Zion"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/summit/SummitHero.tsx

**Hardcoded strings found:**
- "June 20, 2025 • Virtual &amp; New York City"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/support/ChatBotPanel.tsx

**Hardcoded strings found:**
- "Chat with Live Agent"
- "Send message"
- "t process your request. Please try again."
- "Error in AI chat:"
- "m experiencing technical difficulties. Please try again later."
- "Communication Error"
- "Support escalation triggered"
- "Support request submitted"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/support/ChatMessage.tsx

**Hardcoded strings found:**
- "User avatar"
- "Zion Support"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/support/HelpArticleList.tsx

**Hardcoded strings found:**
- "Category not found"
- "No articles found"
- "Try adjusting your search query or browse another category."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/support/HelpArticleView.tsx

**Hardcoded strings found:**
- "Article not found"
- "Yes"
- "We're sorry this article wasn't helpful. Please contact our support team for further assistance."
- "Contact Support"
- "Thank you for your feedback!"
- "re sorry this article wasn"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/support/HelpCategoryList.tsx

**Hardcoded strings found:**
- "Try adjusting your search query or browse all categories."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/support/HelpCenter.tsx

**Hardcoded strings found:**
- "Help Center"
- "Articles"
- "Contact Us"
- "How do I contact support?"
- "Contact Support"
- "Open Live Chat"
- "Feedback & Suggestions"
- "Submit Feedback"
- "Search for help articles..."
- "Subject"
- "Your feedback or suggestion"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/support/SupportWidget.tsx

**Hardcoded strings found:**
- "Zion Support"
- "Open support"
- "Help center"
- "Close support"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/support/help-content.tsx

**Hardcoded strings found:**
- "ll have access to the marketplace and can start browsing or listing services based on your account type."
- "Learn the basics of using the Zion AI Marketplace"
- "create-account"
- "Creating your account"
- "Welcome to Zion AI Marketplace! This guide will walk you through the process of creating and setting up your account.\n\nTo create a new account on Zion AI Marketplace:\n\n1. Click on the"
- "complete-profile"
- "Completing your profile"
- "Navigating the platform"
- "How to find and hire talent on the platform"
- "Posting a job"
- "Posting a job on Zion AI Marketplace is quick and straightforward. Follow these steps to create an effective job posting:\n\n1. Click on the"
- "Using AI matching"
- "Zion"
- "Scheduling interviews"
- "Once you"
- "Making an offer"
- "After finding the right talent for your project, it"
- "Optimize your profile for better visibility"
- "talent-profile"
- "Setting up a talent profile"
- "client-profile"
- "Setting up a client profile"
- "Building an effective portfolio"
- "Accepted payment methods"
- "How to handle and resolve contract disputes"
- "How to file a dispute"
- "The mediation process"
- "When disputes can"
- "Tips for preventing disputes"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/ActiveFilters.tsx

**Hardcoded strings found:**
- "Active filters:"
- "Clear All"
- "Full-time"
- "Part-time"
- "Project-based"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/FilterSidebar.tsx

**Hardcoded strings found:**
- "Filters"
- "Clear All"
- "Apply Filters"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/MobileFilterBar.tsx

**Hardcoded strings found:**
- "Search by name or skill"
- "mobile-talent-search"
- "mobile-talent-search-help"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/SortDropdown.tsx

**Hardcoded strings found:**
- "Sort by"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/TalentCard.tsx

**Hardcoded strings found:**
- "Rate not specified"
- "Hire"
- "View"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/TalentDetails.tsx

**Hardcoded strings found:**
- "Skills"
- "Contact"
- "Portfolio"
- "Hire"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/TalentGrid.tsx

**Hardcoded strings found:**
- "Clear Filters"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/TalentPlaceholder.tsx

**Hardcoded strings found:**
- "Talent Directory Coming Soon"
- "Join as Talent"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/TalentProfileSkeleton.tsx

**Hardcoded strings found:**
- "talent-profile-skeleton"
- "Skills"
- "Contact"
- "Portfolio"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/filters/AvailabilityFilter.tsx

**Hardcoded strings found:**
- "Availability"
- "Full-time"
- "Part-time"
- "Project-based"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/filters/ExperienceFilter.tsx

**Hardcoded strings found:**
- "Years of Experience"
- "Experience range"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/filters/RegionFilter.tsx

**Hardcoded strings found:**
- "Region"
- "North America"
- "Europe"
- "Asia"
- "South America"
- "Australia"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/filters/SearchFilter.tsx

**Hardcoded strings found:**
- "talent-search"
- "talent-search-help"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/filters/SkillsFilter.tsx

**Hardcoded strings found:**
- "Skills"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/talent/filters/SortFilter.tsx

**Hardcoded strings found:**
- "Sort by"
- "Relevance"
- "Highest Rating"
- "Most Experienced"
- "Price: Low to High"
- "Price: High to Low"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/testing/ErrorTriggerComponent.tsx

**Hardcoded strings found:**
- "Test error triggered on mount"
- "Test error triggered on render"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/transactions/PaymentButton.tsx

**Hardcoded strings found:**
- "Purchase"
- "create-checkout"
- "Payment error:"
- "Authentication required"
- "Please sign in to make a purchase."
- "/checkout?sku=${serviceId}"
- "/auth/login?returnTo=${returnTo}"
- "Payment error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/transactions/TransactionHistory.tsx

**Hardcoded strings found:**
- "In Escrow"
- "Pending"
- "Released"
- "Completed"
- "Disputed"
- "Refunded"
- "Cancelled"
- "Unknown"
- "Failed to load transactions"
- "Try Again"
- "Transaction History"
- "All"
- "Escrow"
- "Payment to"
- "Client"
- "Release Funds"
- "Request Refund"
- "Cancel"
- "No transactions found"
- "Transaction updated successfully"
- "Error managing transaction:"
- "Failed to update transaction"
- "Success"
- "Error"
- "Service Payment"
- "Cancelled:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/EmptyState.tsx

**Hardcoded strings found:**
- "Try Again"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/ImageWithRetry.tsx

**Hardcoded strings found:**
- "Retry"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/alert-dialog.tsx

**Hardcoded strings found:**
- "AlertDialogHeader"
- "AlertDialogFooter"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/alert.tsx

**Hardcoded strings found:**
- "Alert"
- "AlertTitle"
- "AlertDescription"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/breadcrumb.tsx

**Hardcoded strings found:**
- "BreadcrumbLink"
- "Breadcrumb"
- "BreadcrumbList"
- "BreadcrumbSeparator"
- "BreadcrumbElipssis"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/bundle-analyzer.tsx

**Hardcoded strings found:**
- "Bundle Analyzer"
- "Cache Hit Rate"
- "Failed to collect bundle info:"
- "/_next/static/"
- "bg-background/80 backdrop-blur-sm"
- "bg-background/95 backdrop-blur-sm border shadow-lg"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/button.tsx

**Hardcoded strings found:**
- "Button"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/calendar.tsx

**Hardcoded strings found:**
- "Calendar"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/card.tsx

**Hardcoded strings found:**
- "Card"
- "CardHeader"
- "CardTitle"
- "CardDescription"
- "CardContent"
- "CardFooter"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/carousel.tsx

**Hardcoded strings found:**
- "Previous slide"
- "Next slide"
- "ArrowLeft"
- "Carousel"
- "CarouselContent"
- "CarouselPrevious"
- "CarouselNext"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/chart.tsx

**Hardcoded strings found:**
- "Chart"
- "ChartTooltip"
- "ChartLegend"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/clickable-badge.tsx

**Hardcoded strings found:**
- "ml-1 rounded-full p-0.5 hover:bg-background/20"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/command.tsx

**Hardcoded strings found:**
- "CommandShortcut"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/context-menu.tsx

**Hardcoded strings found:**
- "ContextMenuShortcut"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/dialog.tsx

**Hardcoded strings found:**
- "Close"
- "DialogHeader"
- "DialogFooter"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/drawer.tsx

**Hardcoded strings found:**
- "Drawer"
- "DrawerContent"
- "DrawerHeader"
- "DrawerFooter"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/dropdown-menu.tsx

**Hardcoded strings found:**
- "DropdownMenuShortcut"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/empty-state.tsx

**Hardcoded strings found:**
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/enhanced-loading-states.tsx

**Hardcoded strings found:**
- "Error Details (Development)"
- "Offline"
- "Loading..."
- "No Internet Connection"
- "Connection Error"
- "Request Timeout"
- "Access Denied"
- "Something went wrong"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/form.tsx

**Hardcoded strings found:**
- "FormMessage"
- "FormLabel"
- "FormControl"
- "FormDescription"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/input-otp.tsx

**Hardcoded strings found:**
- "InputOTPGroup"
- "z-10 ring-2 ring-ring ring-offset-background"
- "InputOTPSlot"
- "InputOTPSeparator"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/input.tsx

**Hardcoded strings found:**
- "Input"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/markdown.tsx

**Hardcoded strings found:**
- "Loading..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/menubar.tsx

**Hardcoded strings found:**
- "MenubarShortcut"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/optimized-image.tsx

**Hardcoded strings found:**
- "Failed to load image"
- "Gallery"
- "backdrop-blur-sm bg-gray-200/50"
- "PerformanceObserver"
- "Slow image loading:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/pagination.tsx

**Hardcoded strings found:**
- "Previous"
- "Next"
- "More pages"
- "Go to previous page"
- "Go to next page"
- "PaginationLink"
- "PaginationButton"
- "Pagination"
- "PaginationContent"
- "PaginationPrevious"
- "PaginationNext"
- "PaginationEllipsis"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/performance-monitor.tsx

**Hardcoded strings found:**
- "Performance Monitor"
- "Load Time"
- "bg-background/80 backdrop-blur-sm"
- "bg-background/95 backdrop-blur-sm border shadow-lg"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/quick-actions.tsx

**Hardcoded strings found:**
- "Quick Actions"
- "Test error for Sentry integration - this is intentional!"
- "Enable Performance Monitor"
- "Enable Bundle Analyzer"
- "Clear Cache"
- "Preload Critical Resources"
- "Download Performance Report"
- "Test Error Boundary"
- "Show real-time performance metrics"
- "Monitor bundle size and chunks"
- "Clear browser cache and storage"
- "Trigger an error to test Sentry integration"
- "Force reload with cache bypass"
- "bg-background/80 backdrop-blur-sm"
- "bg-background/95 backdrop-blur-sm border shadow-lg max-h-96 overflow-y-auto"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/radio-group.tsx

**Hardcoded strings found:**
- "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/sheet.tsx

**Hardcoded strings found:**
- "Close"
- "SheetHeader"
- "SheetFooter"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/sidebar/Sidebar.tsx

**Hardcoded strings found:**
- "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/sidebar/SidebarMenuButton.tsx

**Hardcoded strings found:**
- "SidebarMenuButton"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/sidebar/SidebarTrigger.tsx

**Hardcoded strings found:**
- "Toggle Sidebar"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/sidebar/sidebar-content.tsx

**Hardcoded strings found:**
- "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
- "SidebarInput"
- "SidebarHeader"
- "SidebarFooter"
- "SidebarSeparator"
- "SidebarContent"
- "SidebarBasicGroup"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/sidebar/sidebar-context.tsx

**Hardcoded strings found:**
- "SidebarProvider"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/sidebar/sidebar-group.tsx

**Hardcoded strings found:**
- "SidebarGroup"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/sidebar/sidebar-main.tsx

**Hardcoded strings found:**
- "Toggle Sidebar"
- "Sidebar"
- "SidebarRail"
- "SidebarInset"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/sidebar/sidebar-trigger.tsx

**Hardcoded strings found:**
- "Toggle Sidebar"
- "SidebarTrigger"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/skeleton.tsx

**Hardcoded strings found:**
- "Skeleton"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/sonner.tsx

**Hardcoded strings found:**
- "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/spinner.tsx

**Hardcoded strings found:**
- "Spinner"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/switch.tsx

**Hardcoded strings found:**
- "ArrowLeft"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/table.tsx

**Hardcoded strings found:**
- "Table"
- "TableHeader"
- "TableBody"
- "TableFooter"
- "TableRow"
- "TableHead"
- "TableCell"
- "TableCaption"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/tabs.tsx

**Hardcoded strings found:**
- "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/ui/textarea.tsx

**Hardcoded strings found:**
- "Textarea"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/video/VideoCallRoom.tsx

**Hardcoded strings found:**
- "Video Call"
- "Host"
- "Share the meeting link to invite others"
- "Leave call"
- "Mute microphone"
- "Enable camera"
- "Share screen"
- "Enable audio only"
- "Unmute microphone"
- "Disable camera"
- "Stop sharing screen"
- "Disable audio only"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/wallet/OnChainExport.tsx

**Hardcoded strings found:**
- "Connect Wallet"
- "Could not connect to wallet"
- "Wallet not detected"
- "Wallet connected"
- "Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully"
- "Connection failed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/wallet/RedeemTokensCard.tsx

**Hardcoded strings found:**
- "Exchange your ZION$ for rewards and perks"
- "View Available Rewards"
- "Available Rewards"
- "Close"
- "Learn More"
- "platform-credit"
- "$5 Platform Credit"
- "Get $5 credit to use on any paid service"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/wallet/TokenDisplay.tsx

**Hardcoded strings found:**
- "Your current token balance"
- "View Wallet"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/components/wallet/TransactionHistory.tsx

**Hardcoded strings found:**
- "Transaction History"
- "Loading transactions..."
- "Your recent ZION$ activity"
- "Earned"
- "Spent"
- "No tokens earned yet"
- "No tokens spent yet"
- "Token reward"
- "Feature purchase"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/config/env.ts

**Hardcoded strings found:**
- "Warning: NEXT_PUBLIC_REOWN_PROJECT_ID is not set or is a placeholder. Using fallback."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/config/sitemap.ts

**Hardcoded strings found:**
- "Home"
- "About Us"
- "Contact"
- "Talent Directory"
- "Marketplace"
- "Services"
- "Equipment"
- "Categories"
- "Blog"
- "Terms of Service"
- "Privacy Policy"
- "Careers"
- "Innovation"
- "Global Map"
- "Login"
- "Sign Up"
- "Talent Registration"
- "Client Registration"
- "Forgot Password"
- "Talent Dashboard"
- "Talent Onboarding"
- "Portfolio"
- "Create Profile"
- "Client Dashboard"
- "Post a Job"
- "Hiring Pipeline"
- "Messages"
- "Notifications"
- "Project Room"
- "Disputes"
- "Analytics"
- "Reviews Moderation"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/context/AnalyticsContext.tsx

**Hardcoded strings found:**
- "Error logging analytics event:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/context/CartContext.tsx

**Hardcoded strings found:**
- "useCart must be used within a CartProvider"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/context/CommunityContext.tsx

**Hardcoded strings found:**
- "Best practices for AI model fine-tuning"
- "How to build an effective AI talent profile?"
- "Looking for feedback on my automated testing approach"
- "Feature request: Team collaboration tools"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/context/ErrorContext.tsx

**Hardcoded strings found:**
- "useError must be used within ErrorProvider"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/context/FavoritesContext.tsx

**Hardcoded strings found:**
- "Promise"
- "Toggle favorite failed"
- "Login required to save favorites"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/context/FeedbackContext.tsx

**Hardcoded strings found:**
- "useFeedback must be used within FeedbackProvider"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/context/RequestQuoteWizard.tsx

**Hardcoded strings found:**
- "Promise"
- "Failed to submit quote"
- "Services"
- "Error submitting quote"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/context/WalletContext.tsx

**Hardcoded strings found:**
- "Promise"
- "WalletContext: Critical Error - Reown AppKit Project ID is not set or is a placeholder. Please set NEXT_PUBLIC_REOWN_PROJECT_ID environment variable."
- "WalletContext: CRITICAL error creating appKitInstance with valid Project ID:"
- "WalletContext: Error getting signer or updating wallet state:"
- "WalletContext: Error opening wallet modal:"
- "WalletContext: Error during disconnect."
- "WalletContext: Error disconnecting wallet:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/context/auth/AuthProvider.tsx

**Hardcoded strings found:**
- "AuthProvider: Supabase authentication failed"
- "Authentication failed. Please try again."
- "invalid login credentials"
- "An unknown authentication error occurred."
- "An unexpected error occurred during login. Please try again."
- "Auth0 signup error:"
- "An unexpected error occurred during signup."
- "Signup failed"
- "Supabase password reset error:"
- "Password reset failed"
- "An unexpected error occurred during password reset."
- "Login Failed"
- "Signup Failed"
- "Signup Successful"
- "Profile Load Error"
- "User Data Error"
- "Profile Not Found"
- "User Initialization Error"
- "Password Reset Failed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/context/auth/useAuthEventHandlers.tsx

**Hardcoded strings found:**
- "Welcome back!"
- "You"
- "Complete your profile"
- "Signed out"
- "You have been successfully logged out"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/context/notifications/types.ts

**Hardcoded strings found:**
- "Promise"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/context/notifications/useNotificationOperations.ts

**Hardcoded strings found:**
- "Error fetching notifications:"
- "Error marking notification as read:"
- "Error marking all notifications as read:"
- "Error dismissing notification:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/blog-posts.ts

**Hardcoded strings found:**
- "Editorial Team"
- "Staff Writer"
- "Automated Model Optimization"
- "How SMBs Can Leverage AI Marketplaces to Scale Fast"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/careersJobs.ts

**Hardcoded strings found:**
- "ai-research-engineer"
- "AI Research Engineer"
- "Full Stack Developer"
- "Product Manager"
- "Growth Marketing Manager"
- "Content Strategist"
- "Community Manager"
- "Talent Acquisition Specialist"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/case-studies.ts

**Hardcoded strings found:**
- "Zion"
- "Streamlined Data Ingestion"
- "Head of Data"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/equipmentData.ts

**Hardcoded strings found:**
- "Performance Analytics"
- "Dell PowerEdge R750 Server"
- "Cisco Catalyst 9300 48-Port Switch"
- "Stackable"
- "Hot-Swappable Batteries"
- "Vertiv Liebert Precision Cooling Unit"
- "High Efficiency"
- "backup-appliance-1"
- "Veeam Backup & Replication Appliance"
- "Cloud Integration"
- "F5 BIG-IP Virtual Edition"
- "SolarWinds NPM Monitoring Server"
- "Locking Side Panels"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/features.ts

**Hardcoded strings found:**
- "Talent Directory"
- "Services Marketplace"
- "/services"
- "Equipment Catalog"
- "Marketplace Analytics"
- "Zion AI Assistant"
- "List Your Services"
- "/create-profile"
- "Help & Resources"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/initialMarketplaceProducts.ts

**Hardcoded strings found:**
- "Enterprise AI Analytics Platform"
- "Advanced Data Science Development Suite"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/jobsData.ts

**Hardcoded strings found:**
- "React Developer Needed"
- "Seeking a React developer for a 3 month contract building dashboards."
- "Part-time DevOps Engineer"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/listingData.ts

**Hardcoded strings found:**
- "Machine Learning"
- "Custom Machine Learning Model Development"
- "AI-Powered Business Intelligence Dashboard"
- "Edge AI Development Kit"
- "Managed Data Labeling Service"
- "Cloud GPU Rental Service"
- "Virtual assistant"
- "Enterprise AI solutions"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/marketplaceData.ts

**Hardcoded strings found:**
- "Custom Machine Learning Model Development"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/mockProfiles.ts

**Hardcoded strings found:**
- "@/types/profile"
- "Enterprise AI Integration Services"
- "Healthcare AI Platform"
- "Healthcare"
- "Machine Learning"
- "Financial Analytics Suite"
- "Supply Chain Optimization"
- "Alexandra Chen"
- "Senior AI Engineer & Machine Learning Expert"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/mockTalents.ts

**Hardcoded strings found:**
- "Alexandra Chen"
- "Senior AI Engineer & Machine Learning Expert"
- "Michael Reynolds"
- "DevOps Specialist & Cloud Architect"
- "Cloud Migration & Modernization"
- "DevOps Automation Pipeline"
- "Priya Sharma"
- "Data Scientist & Statistical Analyst"
- "Customer Segmentation Analysis"
- "Sales Forecasting Model"
- "James Wilson"
- "Cybersecurity Expert & Ethical Hacker"
- "Enterprise Security Assessment"
- "Security Operations Center Design"
- "Healthcare"
- "David Martinez"
- "Full-Stack Developer & React Expert"
- "Real-Time Analytics Dashboard"
- "SaaS Application"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/newProductsData.ts

**Hardcoded strings found:**
- "Data Visualization Dashboard"
- "Smart Home IoT Control Hub"
- "Automated Code Review Service"
- "Social Media Sentiment Monitor"
- "np-video-edit-suite"
- "AI Video Editing Suite"
- "Customer Support Chatbot Platform"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/newServicesData.ts

**Hardcoded strings found:**
- "Full-stack Web App Development"
- "Cloud Cost Optimization"
- "Business Process Automation"
- "Disaster Recovery Planning"
- "User Experience Consulting"
- "Advanced Threat Monitoring"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/onsiteServicePricing.ts

**Hardcoded strings found:**
- "Ghana"
- "Gibraltar"
- "Greece"
- "Mali"
- "Malta"
- "Marshall Islands"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/projectsData.ts

**Hardcoded strings found:**
- "AI Dashboard Development"
- "Alexandra Chen"
- "Senior AI Engineer"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/proposalTemplates.ts

**Hardcoded strings found:**
- "Amend Constitution"
- "Adjust Tokenomics"
- "Update Voting Rules"
- "Launch New Vertical"
- "Deploy New Multiverse"
- "Integrate New Payment Method"
- "Grant Proposal"
- "Partnership Request"
- "ZionGPT Model Fork"
- "Enable Cross-Chain Talent Sync"
- "Upgrade Governance Engine"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/roadmap.ts

**Hardcoded strings found:**
- "ai-search"
- "AI-Powered Search"
- "Improve marketplace search relevancy using machine learning."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/sampleServices.ts

**Hardcoded strings found:**
- "Cloud Migration"
- "Data Scientist"
- "Workstation"
- "Server Rack"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/servicesData.ts

**Hardcoded strings found:**
- "Cybersecurity Assessment & Protection"
- "DevOps Automation Setup"
- "Enterprise SaaS Deployment"
- "Machine Learning Model Optimization"
- "Blockchain Integration Consulting"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/sortOptions.ts

**Hardcoded strings found:**
- "Relevance"
- "Highest Rating"
- "Most Experienced"
- "Price: Low to High"
- "Price: High to Low"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/talentData.ts

**Hardcoded strings found:**
- "Alexandra Chen"
- "Senior AI Engineer & Machine Learning Expert"
- "Michael Reynolds"
- "DevOps Specialist & Cloud Architect"
- "Cloud Migration & Modernization"
- "DevOps Automation Pipeline"
- "Priya Sharma"
- "Data Scientist & Statistical Analyst"
- "Customer Segmentation Analysis"
- "Sales Forecasting Model"
- "James Wilson"
- "Cybersecurity Expert & Ethical Hacker"
- "Enterprise Security Assessment"
- "Security Operations Center Design"
- "David Martinez"
- "Full-Stack Developer & React Expert"
- "Real-Time Analytics Dashboard"
- "Sarah Johnson"
- "Algorithmic Impact Assessment"
- "Daniel Kim"
- "Computer Vision Engineer & Deep Learning Specialist"
- "Manufacturing Defect Detection"
- "Olivia Rodriguez"
- "Natural Language Processing Researcher"
- "Sentiment Analysis for Social Listening"
- "Robert Zhang"
- "Quantum Machine Learning Researcher"
- "Quantum Portfolio Optimization"
- "Quantum ML for Drug Discovery"
- "Predictive Analytics Platform"
- "Marcus Johnson"
- "Sophia Lee"
- "Healthcare AI Specialist & Medical Imaging Expert"
- "Medical imaging specialist with expertise in applying AI to healthcare challenges. I develop deep learning solutions for medical image analysis, diagnostics, and personalized treatment planning in clinical settings."
- "Medical Imaging"
- "Deep Learning"
- "PyTorch"
- "Cancer Treatment Response Prediction"
- "Isabella Garcia"
- "Data Engineer & ETL Specialist"
- "Cloud Data Warehouse Migration"
- "Streaming Analytics Pipeline"
- "Liam Turner"
- "Mobile Banking App"
- "Ethan Patel"
- "Blockchain Developer"
- "DeFi Staking Platform"
- "Chloe Nguyen"
- "Cloud Security Specialist"
- "Container Security Initiative"
- "Multi-Cloud Compliance Automation"
- "Noah Smith"
- "Mobile App Developer"
- "Food Delivery App"
- "Developed cross-platform mobile app reaching over 100k downloads and maintaining 4.8 star store rating."
- "Fitness Tracking Platform"
- "Ava Williams"
- "Data Analyst & Visualization Expert"
- "Sales KPI Dashboard"
- "Customer Churn Analysis"
- "William Chen"
- "AI Research Scientist"
- "Generative Adversarial Networks"
- "Multimodal Representation Learning"
- "Grace Lee"
- "Open Source Library Docs"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/data/tutorials.ts

**Hardcoded strings found:**
- "Setting Up a Private GPT Model"
- "Alex Rivera"
- "Zion Team"
- "Uploading a Product to the Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/auth/useEmailAuth.ts

**Hardcoded strings found:**
- "An unexpected error occurred"
- "Login error:"
- "Signup error:"
- "Password reset error:"
- "Login failed"
- "Signup failed"
- "Signup successful"
- "Password reset failed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/auth/useLogout.ts

**Hardcoded strings found:**
- "Error during logout:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/auth/useProfileManagement.ts

**Hardcoded strings found:**
- "User ID is required"
- "Profile update error:"
- "An unexpected error occurred"
- "Profile update failed"
- "Profile updated"
- "Your profile has been updated successfully."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/auth/useSocialAuth.ts

**Hardcoded strings found:**
- "Google login error:"
- "An unexpected error occurred"
- "GitHub login error:"
- "Facebook login error:"
- "Twitter login error:"
- "Google login failed"
- "GitHub login failed"
- "Facebook login failed"
- "Twitter login failed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/messaging/useConversations.ts

**Hardcoded strings found:**
- "Error fetching conversations:"
- "Error creating conversation:"
- "Failed to create conversation"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/messaging/useMessages.ts

**Hardcoded strings found:**
- "Promise"
- "Error fetching messages:"
- "Conversation not found"
- "Error sending message:"
- "Failed to send message"
- "Error marking messages as read:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/messaging/useMessagingRealtime.ts

**Hardcoded strings found:**
- "Promise"
- "Someone"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/milestones/useCreateMilestone.ts

**Hardcoded strings found:**
- "Error creating milestone:"
- "Failed to create milestone:"
- "Milestone created successfully"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/milestones/useDeleteMilestone.ts

**Hardcoded strings found:**
- "Error deleting milestone:"
- "Failed to delete milestone:"
- "Milestone deleted successfully"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/milestones/useLoadMilestones.ts

**Hardcoded strings found:**
- "Error fetching milestones:"
- "Failed to fetch milestones"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/milestones/useRecordActivity.ts

**Hardcoded strings found:**
- "Error recording activity:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/milestones/useUpdateMilestone.ts

**Hardcoded strings found:**
- "Milestone not found"
- "Error updating milestone status:"
- "Failed to update status:"
- "Error updating milestone:"
- "Failed to update milestone:"
- "Milestone Completed"
- "Milestone"
- "Milestone Approved"
- "Milestone updated successfully"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/milestones/useUploadDeliverable.ts

**Hardcoded strings found:**
- "Milestone not found"
- "Error uploading deliverable:"
- "Failed to upload deliverable:"
- "Deliverable added successfully"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/resume/useCertifications.ts

**Hardcoded strings found:**
- "You must be logged in to add certifications"
- "Could not add certification"
- "You must be logged in to update certifications"
- "Could not update certification"
- "You must be logged in to delete certifications"
- "Could not delete certification"
- "Certification added"
- "Your certification has been added to your resume"
- "Certification updated"
- "Your certification has been updated"
- "Certification deleted"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/resume/useEducation.ts

**Hardcoded strings found:**
- "You must be logged in to add education"
- "Could not add education"
- "You must be logged in to update education"
- "Could not update education"
- "You must be logged in to delete education"
- "Could not delete education"
- "Education added"
- "Your education has been added to your resume"
- "Education updated"
- "Your education has been updated"
- "Education deleted"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/resume/useFetchResume.ts

**Hardcoded strings found:**
- "You must be logged in to access resumes"
- "Error fetching resume:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/resume/useResumeActions.ts

**Hardcoded strings found:**
- "You must be logged in to create a resume"
- "Could not create resume"
- "You must be logged in to update a resume"
- "Could not update resume"
- "You must be logged in to set active resume"
- "Could not set active resume"
- "Your resume has been created successfully"
- "Resume updated"
- "Your resume information has been updated"
- "Active resume set"
- "Your selected resume is now marked as active"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/resume/useResumeList.ts

**Hardcoded strings found:**
- "You must be logged in to access resumes"
- "Error fetching resumes:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/resume/useResumeUtils.ts

**Hardcoded strings found:**
- "Error: ${errorMessage}"
- "Error"
- "${errorMessage}: ${e.message}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/resume/useSkills.ts

**Hardcoded strings found:**
- "You must be logged in to add skills"
- "Could not add skill"
- "You must be logged in to delete skills"
- "Could not delete skill"
- "Skill added"
- "Your skill has been added to your resume"
- "Skill deleted"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/resume/useWorkExperience.ts

**Hardcoded strings found:**
- "You must be logged in to update work experience"
- "Could not add work experience"
- "Could not update work experience"
- "You must be logged in to delete work experience"
- "Could not delete work experience"
- "Work experience added"
- "Your work experience has been added to your resume"
- "Work experience updated"
- "Your work experience has been updated"
- "Work experience deleted"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/talent/useSavedTalents.ts

**Hardcoded strings found:**
- "Error toggling saved talent:"
- "Authentication required"
- "/auth/login?returnTo=${returnTo}"
- "Added to favorites"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/talent/useTalentData.ts

**Hardcoded strings found:**
- "talent-profiles"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useAIContentEnhancer.ts

**Hardcoded strings found:**
- "Failed to enhance content"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useAISearch.ts

**Hardcoded strings found:**
- "Project"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useAdminQuotes.ts

**Hardcoded strings found:**
- "Status updated"
- "The quote request status has been updated"
- "Error"
- "Failed to update status:"
- "Quote archived"
- "Quote unarchived"
- "Failed to update quote:"
- "Quote deleted"
- "The quote request has been permanently deleted"
- "Failed to delete quote:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useApiErrorHandling.ts

**Hardcoded strings found:**
- "An unexpected error occurred"
- "Network error – please retry"
- "Request timed out - please try again"
- "Authentication required - please log in"
- "Access denied - insufficient permissions"
- "Requested resource not found"
- "Server error - please try again later"
- "Error"
- "Retry Failed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useApiKeys.ts

**Hardcoded strings found:**
- "Authentication required"
- "An unknown error occurred"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useAuth.ts

**Hardcoded strings found:**
- "Not available"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useAuthGuard.tsx

**Hardcoded strings found:**
- "Authentication Error"
- "Auth guard session error:"
- "Auth guard error:"
- "Authentication error"
- "/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useAuthOperations.ts

**Hardcoded strings found:**
- "Failed to sign in."
- "Error during signup"
- "Failed to complete signup rewards"
- "Failed to sign up. Please try again."
- "Failed to sign up."
- "Logout failed:"
- "Profile data or user ID is missing."
- "Profile update failed:"
- "Failed to update profile."
- "Web3 wallet not found"
- "Unable to connect wallet"
- "Login successful!"
- "Failed to sign in. Please check your credentials."
- "Signup successful!"
- "Logout successful!"
- "Logout failed"
- "There was an issue logging you out. Please try again."
- "Failed to update profile"
- "Profile updated!"
- "Your profile has been successfully updated."
- "Profile update failed"
- "There was an issue updating your profile. Please try again."
- "Wallet connected"
- "Web3 login failed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useCompanyWorkspace.ts

**Hardcoded strings found:**
- "Acme Corporation"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useContractTemplates.ts

**Hardcoded strings found:**
- "User not authenticated"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useDisputeCheck.ts

**Hardcoded strings found:**
- "Error checking dispute status:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useDisputes.ts

**Hardcoded strings found:**
- "Error fetching disputes:"
- "Failed to fetch disputes"
- "Error fetching dispute:"
- "Failed to fetch dispute details"
- "You must be logged in to create a dispute"
- "Error creating dispute:"
- "Failed to submit dispute"
- "Error updating dispute status:"
- "Failed to update dispute status"
- "Error resolving dispute:"
- "Failed to resolve dispute"
- "Error fetching dispute messages:"
- "Failed to fetch messages"
- "You must be logged in to send a message"
- "Error sending message:"
- "Failed to send message"
- "Untitled Project"
- "Dispute status updated to ${status}"
- "Dispute resolved successfully"
- "Message sent successfully"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useFavorites.ts

**Hardcoded strings found:**
- "Failed to fetch favorites"
- "Failed to toggle favorite"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useFraudPreventionSignup.ts

**Hardcoded strings found:**
- "Error getting IP:"
- "Signup blocked"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useHireRequest.ts

**Hardcoded strings found:**
- "Error submitting hire request:"
- "Request Submitted"
- "Your request to hire ${requestData.talent.full_name} has been sent successfully."
- "Error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useInfiniteScroll.ts

**Hardcoded strings found:**
- "Promise"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useInterviews.ts

**Hardcoded strings found:**
- "Interview Confirmed"
- "Interview Declined"
- "Interview Rescheduled"
- "Error requesting interview:"
- "Error in requestInterview:"
- "Error fetching interviews:"
- "Error in fetchInterviews:"
- "Error responding to interview:"
- "Error fetching interview:"
- "Error in respondToInterview:"
- "Error creating notification:"
- "t have permission to cancel this interview"
- "Error in cancelInterview:"
- "Authentication required"
- "Your interview request has been declined"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useJobApplications.ts

**Hardcoded strings found:**
- "Error fetching applications:"
- "Failed to fetch applications"
- "You must be logged in to apply for jobs"
- "You have already applied to this job"
- "Error applying to job:"
- "Failed to submit application:"
- "Error updating application status:"
- "Failed to update application status:"
- "Error marking application as viewed:"
- "Uploaded CV"
- "Application submitted successfully"
- "Application status updated to ${status}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useJobDetails.ts

**Hardcoded strings found:**
- "Error loading job details:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useJobMatches.ts

**Hardcoded strings found:**
- "Error fetching job matches:"
- "Error triggering AI matching:"
- "Error"
- "Matching Failed"
- "Could not process talent matching. Please try again later."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useJobSuggestions.ts

**Hardcoded strings found:**
- "Error fetching job matches:"
- "Error updating job match status:"
- "Error"
- "Failed to load job suggestions"
- "Application Submitted"
- "Job Declined"
- "Failed to update job status"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useJobs.ts

**Hardcoded strings found:**
- "Error fetching jobs:"
- "Failed to fetch jobs. Please try again."
- "Failed to fetch jobs"
- "Error updating job status:"
- "Failed to update job status"
- "Error deleting job:"
- "Failed to delete job"
- "Job status updated successfully"
- "Job deleted successfully"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useMarketplace.ts

**Hardcoded strings found:**
- "Marketplace Error:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useMarketplaceSearch.ts

**Hardcoded strings found:**
- "Web App"
- "Script"
- "Website"
- "Game"
- "Bot"
- "United States"
- "Europe"
- "Asia"
- "Online"
- "Immediate"
- "Within 1 Week"
- "Within 1 Month"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useMilestoneGenerator.ts

**Hardcoded strings found:**
- "Error generating milestones:"
- "Failed to generate milestones"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useOnboardingStatus.tsx

**Hardcoded strings found:**
- "Error fetching onboarding status:"
- "Error in onboarding status hook:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useOrder.ts

**Hardcoded strings found:**
- "Failed to fetch order"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useOrders.ts

**Hardcoded strings found:**
- "Failed to fetch orders"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/usePortfolio.ts

**Hardcoded strings found:**
- "You must be logged in to add a portfolio project"
- "Error adding portfolio project:"
- "You must be logged in to update a portfolio project"
- "Error updating portfolio project:"
- "You must be logged in to delete a portfolio project"
- "Error deleting portfolio project:"
- "Project added"
- "Your project has been added to your portfolio"
- "Error"
- "Could not add project: ${e.message}"
- "Project updated"
- "Your portfolio project has been updated"
- "Could not update project: ${e.message}"
- "Project deleted"
- "Your portfolio project has been deleted"
- "Could not delete project: ${e.message}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/usePricingSuggestionAnalytics.ts

**Hardcoded strings found:**
- "Error fetching pricing suggestion analytics:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useProjects.ts

**Hardcoded strings found:**
- "Error fetching project:"
- "Failed to fetch project details"
- "Error updating project status:"
- "Failed to update project status"
- "Project status updated to ${status}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useQuoteWizard.ts

**Hardcoded strings found:**
- "Failed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useRecommendations.ts

**Hardcoded strings found:**
- "Failed to fetch recommendations"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useReferrals.ts

**Hardcoded strings found:**
- "Error fetching referral code:"
- "Error in fetchReferralCode:"
- "Error fetching referrals:"
- "Error fetching rewards:"
- "Error generating referral code:"
- "Authentication required"
- "Success!"
- "Your referral code has been generated"
- "Error generating code"
- "Referral link copied to clipboard"
- "Cannot copy link"
- "Please generate a referral code first"
- "Cannot share"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useResumeEnhancer.ts

**Hardcoded strings found:**
- "Failed to enhance content"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useReviews.ts

**Hardcoded strings found:**
- "Error fetching reviews:"
- "Error fetching user reviews:"
- "Error submitting review:"
- "Error updating review:"
- "Error reporting review:"
- "Error"
- "Failed to load reviews"
- "You must be logged in to submit a review"
- "Success"
- "Your review has been submitted and is pending approval"
- "You have already submitted a review for this project"
- "Failed to submit review"
- "Your review has been updated"
- "Failed to update review"
- "You have already reported this review"
- "Report Submitted"
- "Thank you. Our team will review your report"
- "Failed to report review"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useSmartContracts.ts

**Hardcoded strings found:**
- "Failed to generate Solidity contract"
- "Error generating Solidity contract:"
- "Failed to generate smart contract"
- "You must be logged in to deploy a contract"
- "Error deploying smart contract:"
- "Failed to deploy smart contract"
- "Smart contract deployed successfully!"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useTalentProfile.ts

**Hardcoded strings found:**
- "No profile ID provided"
- "Profile not found"
- "Error fetching profile:"
- "Failed to load profile data"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useTalentProfileEnhancer.ts

**Hardcoded strings found:**
- "talent-profile-enhancer"
- "No enhanced profile data received"
- "Failed to enhance profile"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useTalentQuotes.ts

**Hardcoded strings found:**
- "Status updated"
- "Quote marked as viewed"
- "Quote marked as responded"
- "Failed to update status"
- "Failed to update quote"
- "The quote request status has been updated"
- "Quote archived"
- "Quote unarchived"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useTokenBalance.ts

**Hardcoded strings found:**
- "function balanceOf(address owner) view returns (uint256)"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useUser.ts

**Hardcoded strings found:**
- "Failed to fetch user"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useWallet.ts

**Hardcoded strings found:**
- "Error fetching wallet:"
- "Error fetching transactions:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useWebhooks.ts

**Hardcoded strings found:**
- "Authentication required"
- "Failed to fetch webhooks"
- "Error fetching webhooks:"
- "An unknown error occurred"
- "Failed to create webhook"
- "Error creating webhook:"
- "Failed to update webhook"
- "Error toggling webhook:"
- "Failed to delete webhook"
- "Error deleting webhook:"
- "Failed to test webhook"
- "Error testing webhook:"
- "Error fetching webhooks"
- "Webhook Created"
- "Your webhook has been created successfully."
- "Error creating webhook"
- "Webhook Activated"
- "Webhook Deactivated"
- "} successfully."
- "Error updating webhook"
- "Webhook Deleted"
- "The webhook has been deleted successfully."
- "Error deleting webhook"
- "Webhook Test Sent"
- "Error testing webhook"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/hooks/useWhitelabelTenant.ts

**Hardcoded strings found:**
- "Failed to load tenant configuration"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/integrations/mailchimp/MailchimpService.ts

**Hardcoded strings found:**
- "Mailchimp list ID missing"
- "Mailchimp error: ${res.status} ${text}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/integrations/salesforce/SalesforceService.ts

**Hardcoded strings found:**
- "Salesforce access token missing"
- "Salesforce error: ${res.status} ${text}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/integrations/supabase/client.ts

**Hardcoded strings found:**
- "Fetch failed"
- "X-Client-Info"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/integrations/supabase/types.ts

**Hardcoded strings found:**
- "Views"
- "Tables"
- "Enums"
- "CompositeTypes"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/integrations/teams/TeamsService.ts

**Hardcoded strings found:**
- "Teams error: ${res.status} ${message}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/layout/AppLayout.tsx

**Hardcoded strings found:**
- "Main content"
- "flex flex-col min-h-screen bg-background"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/legal/PrivacyPolicy.jsx

**Hardcoded strings found:**
- "Privacy Policy"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/legal/termsContent.ts

**Hardcoded strings found:**
- "When you create an account you must provide accurate information and keep your login credentials confidential. You are responsible for all activity under your account."
- "If you have questions about these Terms, please contact us at"
- "Introduction"
- "<p>When you create an account you must provide accurate information and keep your login credentials confidential. You are responsible for all activity under your account.</p>"
- "Prohibited Activities"
- "Termination"
- "Contact Us"
- "<p>If you have questions about these Terms, please contact us at <a href="

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/lib/ai-matchmaking.ts

**Hardcoded strings found:**
- "Error in matchmaking:"
- "Senior AI Engineer"
- "Experienced AI engineer with expertise in machine learning and computer vision"
- "Python"
- "Custom AI model training service with data preparation and deployment"
- "High-performance GPU server for AI model training and inference"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/lib/analytics.ts

**Hardcoded strings found:**
- "Error logging analytics event to Supabase"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/lib/axios.ts

**Hardcoded strings found:**
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/lib/database.ts

**Hardcoded strings found:**
- "Promise"
- "Unknown error"
- "Database query timeout after ${timeoutMs}ms"
- "Returning fallback data due to database error"
- "Database connection successful"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/lib/email.ts

**Hardcoded strings found:**
- "SendGrid error response:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/lib/investor-matching.ts

**Hardcoded strings found:**
- "Hi ${investorName},\n\n${startup} here. ${summary}\n\nI believe our vision aligns with your investment focus. Looking forward to the opportunity to connect.\n\nBest regards,\n${startup} Team"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/lib/serverCache.ts

**Hardcoded strings found:**
- "Promise"
- "Cache CLEAR error:"
- "Cache GET error for ${key}:"
- "Cache SET error for ${key}:"
- "Cache DELETE: ${key} (${category})"
- "Cache DELETE error for ${key}:"
- "Cache CLEARED: all categories"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/middleware/cors.ts

**Hardcoded strings found:**
- "Promise"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/MobileApp.tsx

**Hardcoded strings found:**
- "CartContextTester: OK"
- "CartContextTester: useCart() FAILED!"
- "CartContextTester: useCart() successful"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/browse/BrowseCards.tsx

**Hardcoded strings found:**
- "View Details"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/browse/BrowseFilters.tsx

**Hardcoded strings found:**
- "Filter"
- "Job Type"
- "Full Time"
- "Part Time"
- "Contract"
- "Experience Level"
- "Entry Level"
- "Mid Level"
- "Senior"
- "Specialization"
- "Developer"
- "Designer"
- "Marketing"
- "Content"
- "United States"
- "Europe"
- "Asia"
- "Salary Range"
- "Skills"
- "JavaScript"
- "React"
- "Python"
- "Figma"
- "Only show verified profiles"
- "Reset"
- "Apply Filters"
- "Newest"
- "Best Match"
- "Highest Pay"
- "Years of experience"
- "Min"
- "Max"
- "Sort By"
- "Experience: 3+ years"
- "Jobs"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/common/BottomNavigation.tsx

**Hardcoded strings found:**
- "next/link"
- "Home"
- "Marketplace"
- "Community"
- "Profile"
- "/mobile/profile"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/common/MobileHeader.tsx

**Hardcoded strings found:**
- "Back"
- "Notifications"
- "Settings"
- "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/dashboard/ClientDashboard.tsx

**Hardcoded strings found:**
- "Post a New Job"
- "View all"
- "Website Redesign"
- "In Progress • Due in 12 days"
- "Progress"
- "View Details"
- "Sarah Johnson"
- "Figma"
- "User Testing"
- "View Profile"
- "Message"
- "Michael Chen"
- "Full Stack Dev • 8 years exp"
- "React"
- "Recent Updates"
- "Sarah submitted Milestone 2 for review"
- "View All Notifications"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/dashboard/TalentDashboard.tsx

**Hardcoded strings found:**
- "New Job Matches"
- "View all"
- "Senior React Developer"
- "Full-time"
- "Apply Now"
- "View Details"
- "Creative Studios"
- "Hybrid"
- "Contract"
- "Application Tracker"
- "Active Applications"
- "Interviews Scheduled"
- "Jobs Saved"
- "Jobs Viewed"
- "View All Applications"
- "Quick Actions"
- "Update Resume"
- "Portfolio"
- "Availability"
- "Learning Hub"
- "Improve your profile visibility"
- "View Portfolio"
- "Set Availability"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/messaging/MobileChatView.tsx

**Hardcoded strings found:**
- "Go back"
- "Start audio call"
- "Start video call"
- "More options"
- "Attach file"
- "Send message"
- "Enter"
- "mobile-${contact.id}"
- "mobile-audio-${contact.id}"
- "sticky top-0 z-10 bg-background border-b border-border"
- "Online"
- "sticky bottom-0 bg-background border-t border-border p-2"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/messaging/MobileConversationList.tsx

**Hardcoded strings found:**
- "All"
- "Unread"
- "Interviews"
- "Search messages..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/onboarding/LanguageThemeSelector.tsx

**Hardcoded strings found:**
- "Select your language"
- "Choose your preferred language"
- "Select your preferred appearance"
- "Light"
- "Dark"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/onboarding/RolePicker.tsx

**Hardcoded strings found:**
- "Choose how you want to use our platform"
- "I'm offering services"
- "Find work and showcase your skills"
- "Post jobs and find talented professionals"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/onboarding/SignUpForm.tsx

**Hardcoded strings found:**
- "Continue with Google"
- "Continue with Facebook"
- "Full name"
- "Password"
- "Please wait..."
- "Sign In"
- "Enter your full name"
- "Create a password"
- "next/link"
- "Full name is required"
- "Password is required"
- "Signup/Login error:"
- "An unexpected error occurred. Please try again."
- "Create your account"
- "Welcome back"
- "Create Account"
- "Don"
- "/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/projects/MobileProjectView.tsx

**Hardcoded strings found:**
- "Progress"
- "Start Date"
- "End Date"
- "Total Amount"
- "Status"
- "Description"
- "Contract"
- "Message"
- "Call"
- "Milestones"
- "View Details"
- "Opening message thread with client"
- "Not set"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/components/resume/MobileResumeBuilder.tsx

**Hardcoded strings found:**
- "Basics"
- "Experience"
- "Education"
- "Skills"
- "Save & Preview"
- "Resume Title"
- "Full Name"
- "Phone Number"
- "Professional Summary"
- "Job Title"
- "Company"
- "Start Date"
- "End Date"
- "Description"
- "Add Another Experience"
- "Institution"
- "Degree"
- "Field of Study"
- "Add Another Education"
- "Beginner"
- "Intermediate"
- "Advanced"
- "Expert"
- "Add Another Skill"
- "Skill Categories"
- "Development"
- "Design"
- "Marketing"
- "Business"
- "Data Analysis"
- "Languages"
- "Your full name"
- "Your phone number"
- "City, Country"
- "Write a brief summary about yourself"
- "Company name"
- "Present"
- "School or university name"
- "Level"
- "address-level2"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/pages/MobileBrowse.tsx

**Hardcoded strings found:**
- "Jobs"
- "Senior React Developer"
- "Creative Studios"
- "Full Stack Engineer"
- "Sarah Johnson"
- "Michael Chen"
- "Full Stack Dev • 8 years exp"
- "Elena Rodriguez"
- "Project Manager • 10 years exp"
- "Browse Jobs"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/pages/MobileHome.tsx

**Hardcoded strings found:**
- "Client Dashboard"
- "Talent Dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/pages/MobileJobPost.tsx

**Hardcoded strings found:**
- "Back"
- "Job Details"
- "Job Title"
- "Company Name"
- "On-site"
- "Hybrid"
- "Job Type"
- "Full-time"
- "Part-time"
- "Contract"
- "Job Description"
- "Experience Level"
- "Entry Level"
- "Mid Level"
- "Senior"
- "Expert"
- "Education"
- "High School"
- "Associate Degree"
- "Bachelor's Degree"
- "Master's Degree"
- "Required Skills"
- "Add"
- "Key Responsibilities"
- "Budget & Timeline"
- "Payment Type"
- "Fixed Price"
- "Salary"
- "Salary Range"
- "Application Deadline"
- "Expected Start Date"
- "Project Duration"
- "Less than a week"
- "Less than a month"
- "Ongoing"
- "Additional Budget Information"
- "Job Preview"
- "Senior React Developer"
- "React"
- "TypeScript"
- "Description"
- "We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app..."
- "Edit Job Post"
- "Your company name"
- "Select job type"
- "Describe the job role and responsibilities"
- "Select experience level"
- "Select required education"
- "Add a skill"
- "List the key responsibilities for this role"
- "Select payment type"
- "Min"
- "Max"
- "Currency"
- "Select project duration"
- "Any additional information about budget or payment"
- "Publish Job"
- "Continue"
- "ml-1 rounded-full hover:bg-background/20 p-1"
- "Enter"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/pages/MobileMessages.tsx

**Hardcoded strings found:**
- "Messages"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/pages/MobileOnboarding.tsx

**Hardcoded strings found:**
- "Welcome to Zion"
- "Let's set up your experience"
- "Continue"
- "Tell us about you"
- "Choose what brought you to Zion"
- "Create your account to get started"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/pages/MobileProjects.tsx

**Hardcoded strings found:**
- "Project Details"
- "Website Redesign"
- "Homepage Development"
- "Product Pages"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mobile/pages/MobileResumeBuilder.tsx

**Hardcoded strings found:**
- "Resume Builder"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/mocks/handlers.ts

**Hardcoded strings found:**
- "Internal Server Error"
- "Unhandled mock scenario"
- "servererror@example.com"
- "Product 1 Valid Date"
- "Product 2 Invalid Date"
- "Product 3 Missing Date"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/offworld/orbitdb.ts

**Hardcoded strings found:**
- "Error initializing OrbitDB:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/AICoreDashboard.tsx

**Hardcoded strings found:**
- "ZionGPT Core"
- "Trigger Training"
- "Training error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/AIMatcher.tsx

**Hardcoded strings found:**
- "All Categories"
- "Services"
- "Talent"
- "Equipment"
- "Match Selected"
- "You"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/AITalentMatchingPage.tsx

**Hardcoded strings found:**
- "Precise Candidate Matching"
- "Streamlined Hiring Workflow"
- "Automated screening and ranking saves your team valuable time."
- "Scalable Talent Pools"
- "Raj Patel"
- "The quality of candidates has improved dramatically since using Zion"
- "Find Your AI Talent"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/About.tsx

**Hardcoded strings found:**
- "About Zion"
- "Our Mission"
- "Our Vision"
- "Our Values"
- "Innovation"
- "Community"
- "Trust"
- "Meet the Team"
- "AI & IT services"
- "About Zion - The Future of AI & Tech Marketplace"
- "Team collaboration"
- "Tech innovation"
- "next/link"
- "/services"
- "/contact"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Account.tsx

**Hardcoded strings found:**
- "My Account"
- "Profile"
- "Orders"
- "Recent Orders"
- "View"
- "next/link"
- "Error updating profile:"
- "Failed to update profile. Please try again."
- "Error updating profile"
- "Manage your profile and settings"
- "/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/AccountSettings.tsx

**Hardcoded strings found:**
- "Account Settings"
- "Profile Settings"
- "Manage your personal information and privacy"
- "Web3 Identity Handle"
- "Connect"
- "Link your decentralized identity to display on your profile"
- "Display Web3 Identity"
- "Decentralized Backup"
- "Backup your profile data to IPFS/Arweave"
- "Data will be backed up to decentralized storage. This feature is in beta."
- "Web3 Features"
- "Manage your Web3 connections and features"
- "Connected Wallet"
- "No wallet connected"
- "Backup Status"
- "Profile Data"
- "Resume Data"
- "Project History"
- "Reviews"
- "Recovery Options"
- "Failed to save settings"
- "No wallet detected. Please install MetaMask or another compatible wallet."
- "ENS lookup error:"
- "Failed to connect wallet"
- "Manage your account"
- "Save Settings"
- "Backed up"
- "Not backed up"
- "Enable backup first to use this feature"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Achievements.tsx

**Hardcoded strings found:**
- "Profile Complete"
- "Complete your user profile"
- "First Purchase"
- "Complete your first checkout"
- "Referrer"
- "Refer a new user to Zion"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/AdditionalTalentsPage.tsx

**Hardcoded strings found:**
- "Digital Marketing Specialist"
- "AI Researcher"
- "Scrum Master"
- "Technical Writer"
- "Network Engineer"
- "Game Developer"
- "Creates immersive augmented and virtual reality experiences."
- "Big Data Analyst"
- "Computer Vision Engineer"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/AdminDashboard.tsx

**Hardcoded strings found:**
- "Admin Dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/AdminPerformancePage.tsx

**Hardcoded strings found:**
- "Loading metrics..."
- "Access Denied"
- "Go to Admin Dashboard"
- "@/pages/dev/dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/AllCategoriesPage.tsx

**Hardcoded strings found:**
- "All Categories"
- "Services"
- "/services"
- "Equipment"
- "Rent or buy specialized hardware, servers, and devices"
- "Innovation"
- "Discover cutting-edge solutions and tech breakthroughs"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Analytics.tsx

**Hardcoded strings found:**
- "Error fetching feature usage:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ApiDocsHub.tsx

**Hardcoded strings found:**
- "Go to Developer Portal"
- "next/link"
- "Getting Started"
- "Webhooks"
- "Sample Code"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ApiErrorCodes.tsx

**Hardcoded strings found:**
- "Error Format"
- "Most errors include:"
- "Common Error Codes"
- "Status"
- "Error Code"
- "Message"
- "Details"
- "Handling Errors"
- "Rate Limiting"
- "Endpoint"
- "Limit"
- "Notes"
- "Rate Limit Headers"
- "next/link"
- "The request was invalid"
- "Title is required"
- "Rate limit exceeded. Try again in 30 seconds"
- "An unexpected error occurred."
- "/contact"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ApiGettingStarted.tsx

**Hardcoded strings found:**
- "Getting Started"
- "Overview"
- "Authentication"
- "Developer Portal"
- "Content Type"
- "Content-Type"
- "Quick Start"
- "Postman Collection"
- "Download Postman Collection"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ApiReference.tsx

**Hardcoded strings found:**
- "Try It"
- "Request"
- "Parameters"
- "Name"
- "Type"
- "Required"
- "Description"
- "Example Request"
- "Responses"
- "Rate limit exceeded. Please try again in 60 seconds"
- "Invalid input"
- "Title is required"
- "Senior React Developer"
- "Create a new job posting"
- "Job title"
- "Jane Smith"
- "Full Stack Developer"
- "React"
- "Yes"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ApiSampleCode.tsx

**Hardcoded strings found:**
- "Sample Code"
- "Authentication"
- "Security Warning"
- "Code Examples"
- "Python"
- "Using the Examples"
- "Developer Portal"
- "Additional Resources"
- "Postman Collection"
- "GitHub repository"
- "Developer Discord"
- "next/link"
- "Error fetching jobs:"
- "Error creating job:"
- "Error searching talent:"
- "Data Scientist"
- "Backend Developer"
- "We need a skilled backend developer..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ApiWebhooks.tsx

**Hardcoded strings found:**
- "Webhooks"
- "Event Type"
- "Description"
- "Triggered when a talent applies to one of your job postings"
- "Triggered when a talent is hired for a project"
- "Triggered when you receive a quote request"
- "Triggered when you receive a new message"
- "Setting Up Webhooks"
- "You can configure webhooks in the"
- "Developer Portal"
- "The event types you want to subscribe to"
- "Webhook Payload Format"
- "New Application"
- "Talent Hired"
- "Quote Received"
- "Message Received"
- "Verifying Webhook Signatures"
- "Testing Webhooks"
- "Best Practices"
- "Respond quickly"
- "Verify signatures"
- "Monitor webhook activity"
- "next/link"
- "Missing signature or timestamp"
- "Invalid signature"
- "Webhook received"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ApplicationStatusTracker.tsx

**Hardcoded strings found:**
- "Application Status Tracker"
- "Track where you stand in the hiring process"
- "Your Applications"
- "Application Status Tracker | Zion AI Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Blog.tsx

**Hardcoded strings found:**
- "Blog"
- "Expert perspectives on artificial intelligence, tech innovation, and digital transformation"
- "Featured Article"
- "Read Article"
- "Loading articles..."
- "No articles found"
- "Try adjusting your search or filter criteria"
- "Clear all filters"
- "Search articles..."
- "Filter by category"
- "Select Category"
- "next/link"
- "All Categories"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/BlogPost.tsx

**Hardcoded strings found:**
- "Loading article..."
- "Retry"
- "Back to Blog"
- "Back to all articles"
- "Share"
- "Facebook"
- "Twitter"
- "LinkedIn"
- "Related Articles"
- "AI services"
- "All Articles"
- "Share on Facebook"
- "Share on Twitter"
- "Share on LinkedIn"
- "next/link"
- "Failed to fetch blog post"
- "Failed to load article"
- "BlogPosting"
- "/services"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/BookBuilder.tsx

**Hardcoded strings found:**
- "Zion OS: Building the Civilization Protocol"
- "Intro – Founder's Story"
- "Early vision and motivations"
- "Decentralized commerce layers"
- "Trustless onboarding"
- "Chapter 2 – ZionGPT + The AI State"
- "Decentralized intelligence replaces central authority"
- "Chapter 3 – The Tokenized Workforce"
- "On-chain credentials"
- "Work marketplace incentives"
- "Chapter 4 – The Multiverse & Digital Nations"
- "Cross-chain identity"
- "Immersive virtual economies"
- "Chapter 5 – ZionDAO + The Constitution"
- "Community law and governance"
- "On-chain proposals"
- "Chapter 6 – Building a Post-Platform World"
- "Protocol over platform philosophy"
- "Appendix – Protocol Maps & Timelines"
- "Architecture diagrams"
- "Key governance votes"
- "Download PDF"
- "Print"
- "Zion OS Book Builder"
- "min-h-screen bg-background prose lg:prose-xl font-serif mx-auto p-8"
- "Auto-layout hardcover edition."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CareerJobDetails.tsx

**Hardcoded strings found:**
- "Job Description"
- "Apply for this role"
- "Name"
- "Cover Letter"
- "Back to Careers"
- "next/link"
- "Submit Application"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Careers.tsx

**Hardcoded strings found:**
- "Join Our Team"
- "Help us build the future of AI and technology"
- "Open Positions"
- "Engineering"
- "Product"
- "Marketing"
- "Operations"
- "View Details"
- "Send General Application"
- "Careers at Zion - Join Our Team"
- "Team collaboration"
- "next/link"
- "Flexible Work"
- "Health & Wellness"
- "Continuous Learning"
- "Competitive Compensation"
- "Salary packages that recognize your value, plus equity options to share in our success."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CaseStudies.tsx

**Hardcoded strings found:**
- "Case Studies"
- "Learn how organizations use Zion to achieve their goals"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CaseStudy.tsx

**Hardcoded strings found:**
- "Home"
- "Case Studies"
- "Back to Case Studies"
- "Download PDF"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Categories.tsx

**Hardcoded strings found:**
- "Browse Categories"
- "Please try again later."
- "No categories yet"
- "Explore ${category.name.toLowerCase()} in our marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CategoryDetail.tsx

**Hardcoded strings found:**
- "next/link"
- "Category load error:"
- "Failed to load category"
- "Services"
- "Equipment"
- "Rent or buy specialized hardware, servers, and devices"
- "Innovation"
- "Discover cutting-edge solutions and tech breakthroughs"
- "Access cutting-edge AI models with easy integration"
- "Content Creation"
- "Data Analysis"
- "Computer Vision"
- "Image and video processing solutions"
- "Intelligent automation for your workflow"
- "Voice & Speech"
- "Speech recognition and synthesis tools"
- "Developer Tools"
- "Business Solutions"
- "Enterprise AI integrations and services"
- "Explore our collection in this category"
- "Error"
- "Quote Requested"
- "Category | Zion Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CategoryPage.tsx

**Hardcoded strings found:**
- "Category Error"
- "Try Again"
- "Back to Marketplace"
- "Category Not Found"
- "next/link"
- "Failed to fetch"
- "Unable to connect to the server. Please check your internet connection and try again."
- "Unexpected token"
- "Server configuration error. The development team has been notified."
- "Server returned an unexpected response format. Please try again or contact support."
- "AbortError"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Checkout.tsx

**Hardcoded strings found:**
- "Home"
- "Checkout"
- "Continue Shopping"
- "Order Summary"
- "Address *"
- "Enter your full name"
- "Enter your address"
- "Enter your city"
- "Enter your country"
- "next/link"
- "Checkout error:"
- "Failed to process checkout. Please try again."
- "street-address"
- "address-level2"
- "/checkout"
- "Checkout failed"
- "Continue to Payment ($${total.toFixed(2)})"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CheckoutPage.tsx

**Hardcoded strings found:**
- "Checkout"
- "Continue shopping"
- "Order Summary"
- "Payment Successful!"
- "Thank you for your order."
- "Continue Shopping"
- "Totals"
- "Subtotal"
- "Shipping"
- "Total"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CheckoutSuccess.tsx

**Hardcoded strings found:**
- "Loading order..."
- "Thank you for your purchase!"
- "View Orders"
- "next/link"
- "Failed to load session"
- "payment-success-message"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ClientDashboard.tsx

**Hardcoded strings found:**
- "My Jobs"
- "Manage your job postings and talent applications"
- "Hiring Pipeline"
- "Post New Job"
- "All"
- "New"
- "Active"
- "Filled"
- "Closed"
- "Select a job to see AI-matched talent suggestions"
- "Client Dashboard | Zion AI Marketplace"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CommunityPage.tsx

**Hardcoded strings found:**
- "Community Forum"
- "Join the conversation, ask questions, and share your knowledge"
- "Categories"
- "Featured"
- "Recent"
- "Community - Join the Zion Tech Marketplace Network"
- "/auth/login?returnTo=${returnTo}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CommunityProfilePage.tsx

**Hardcoded strings found:**
- "User not found"
- "Back to Community"
- "Forum"
- "Profile"
- "Moderator"
- "Reputation"
- "Badges"
- "Replies"
- "Recent Activity"
- "Replied to"
- "Looking for feedback on my automated testing approach"
- "Earned badge"
- "Top Contributor"
- "Created post"
- "Best practices for AI model fine-tuning"
- "Answer was accepted in"
- "next/link"
- "community, forum, profile, user profile, ${user.name}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CompanyWorkspace.tsx

**Hardcoded strings found:**
- "Zion AI Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Congress.tsx

**Hardcoded strings found:**
- "Zion Planetary Congress"
- "Chamber of Nations"
- "Instance"
- "Vote"
- "Submit Global Proposal"
- "Post Proposal"
- "Live Coordination"
- "Planetary Congress"
- "Title"
- "Proposal body"
- "Origin instance"
- "Suggested global action"
- "Proposal submitted (mock)"
- "Zion Health"
- "Zion Law"
- "min-h-screen bg-background"
- "Cross-instance governance"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Contact.tsx

**Hardcoded strings found:**
- "Contact Us"
- "Get in Touch"
- "Your Name"
- "Message"
- "Our Offices"
- "Live AI Support"
- "Get instant answers to your questions"
- "Chat With Our AI Assistant"
- "Zion blog"
- "John Doe"
- "Tell us what you"
- "next/link"
- "Message must be at least 10 characters"
- "Please check your form and try again"
- "Failed to send message"
- "An unexpected error occurred during submission."
- "An unexpected critical error occurred."
- "Error in AI chat"
- "[ContactForm] handleSubmit triggered."
- "Form Validation Error"
- "[ContactForm] Message submission successful."
- "Message Sent"
- "Submission Error"
- "Critical Submission Error"
- "Chat Error"
- "bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ?"
- "Send Message"
- "/services"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ContentGenerator.tsx

**Hardcoded strings found:**
- "Loading..."
- "Content Generator"
- "Content Settings"
- "Content Type"
- "Blog Post"
- "Service Description"
- "Main Topic / User Prompt"
- "Auto-Publish"
- "Generate Image Prompt"
- "Generate Content"
- "Content Preview"
- "No Content Generated Yet"
- "Use the settings panel to configure your content and click "Generate" to create AI-powered content."
- "Select content type"
- "Error generating content:"
- "Failed to generate content. Please try again."
- "Generate newsletter content first"
- "Error sending test newsletter:"
- "Failed to send test newsletter. Please try again."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ContractBuilder.tsx

**Hardcoded strings found:**
- "Smart Contract Builder | Zion AI Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CreatePostPage.tsx

**Hardcoded strings found:**
- "Forum"
- "Create Post"
- "Create New Post"
- "Create New Post | Community Forum | Zion AI Marketplace"
- "next/link"
- "/auth/login?returnTo=${encodeURIComponent(currentPath)}"
- "Post created"
- "Your post has been published successfully"
- "Error ${res.status}"
- "Error"
- "community, forum, discussion, create post, new thread"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CreateServiceProfile.tsx

**Hardcoded strings found:**
- "Create Your Service Provider Profile"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CreateTalentProfile.tsx

**Hardcoded strings found:**
- "Join Our Talent Network"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/CreatorDashboard.tsx

**Hardcoded strings found:**
- "Creator Dashboard"
- "Analytics"
- "Views"
- "Welcome back, Creator!"
- "Create new content, monitor your analytics, or manage your account using the sidebar menu."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Dashboard.tsx

**Hardcoded strings found:**
- "Loading..."
- "Loading dashboard..."
- "Redirecting to login..."
- "Edit Profile"
- "Your Activity"
- "Profile Completion"
- "View Wallet"
- "Badges Earned"
- "Send Test Notification"
- "Send Onboarding Nudge"
- "Recent Notifications"
- "View All Notifications"
- "Dashboard"
- "Logout"
- "Getting Started"
- "Complete your profile to unlock all features."
- "Your Badges"
- "Newcomer"
- "First Post"
- "Locked"
- "Community"
- "Recent Orders"
- "View"
- "View all"
- "Wishlist"
- "No Orders"
- "next/link"
- "Test notification created"
- "Error creating test notification"
- "New User"
- "profile-link"
- "/profile"
- "Onboarding notification sent"
- "Error sending notification"
- "dashboard-header"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/DevNet.tsx

**Hardcoded strings found:**
- "DevNet Sandbox"
- "Token Faucet"
- "Proposal Sandbox"
- "Start it locally with"
- "next/link"
- "/governance/create"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/DeveloperPortal.tsx

**Hardcoded strings found:**
- "Developer Portal"
- "Webhooks"
- "Logs"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/DocsPage.tsx

**Hardcoded strings found:**
- "Docs"
- "next/link"
- "Introduction"
- "Architecture"
- "Governance"
- "Developer Tools"
- "Legal + Manifestos"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/EditPostPage.tsx

**Hardcoded strings found:**
- "Post not found"
- "Back to Community"
- "Permission Denied"
- "You don't have permission to edit this post."
- "Back to Post"
- "Forum"
- "Post"
- "Edit"
- "Edit Post"
- "Edit Post | Community Forum | Zion AI Marketplace"
- "next/link"
- "Best practices for AI model fine-tuning"
- "Post updated"
- "Your post has been updated successfully"
- "Error"
- "community, forum, discussion, edit post"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/EnterpriseAdmin.tsx

**Hardcoded strings found:**
- "Enterprise Admin - Zion AI Marketplace"
- "min-h-screen bg-background"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/EnterpriseBilling.tsx

**Hardcoded strings found:**
- "Enterprise Billing - Zion AI Marketplace"
- "min-h-screen bg-background"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/EnterprisePlans.tsx

**Hardcoded strings found:**
- "Enterprise Plans - Zion AI Marketplace"
- "min-h-screen bg-background"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/EquipmentDetail.tsx

**Hardcoded strings found:**
- "Loading equipment details..."
- "Go Back"
- "Browse Equipment"
- "Equipment"
- "Description"
- "Specifications"
- "Warranty"
- "Returns"
- "Loading Equipment..."
- "Equipment Not Found"
- "No equipment ID provided"
- "Equipment not found"
- "Error loading equipment:"
- "Failed to load equipment details"
- "Something went wrong"
- "t load the equipment details. Please try again."
- "Authentication Required"
- "Added to Cart"
- "${equipment.name} has been added to your cart."
- "Error"
- "The equipment you"
- "Enterprise Grade"
- "add-to-cart-button"
- "Adding..."
- "In Cart"
- "Add to Cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/EquipmentPage.test.tsx

**Hardcoded strings found:**
- "Network Error"
- "Something went wrong on the server"
- "Raw error object in fetchEquipment:"
- "Error response data in fetchEquipment:"
- "Failed to fetch"
- "Failed to fetch equipment"
- "server error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/EquipmentPage.tsx

**Hardcoded strings found:**
- "Avg Price"
- "Avg Rating"
- "In Stock"
- "All Categories"
- "Newest First"
- "Price: Low to High"
- "Price: High to Low"
- "Highest Rated"
- "View Details"
- "Something went wrong"
- "Try Again"
- "Datacenter Equipment"
- "Unable to load equipment"
- "Load More Equipment"
- "Error in fetchEquipment:"
- "Failed to load equipment data. Please try again."
- "Dell PowerEdge R750 Server"
- "Cisco Nexus 9000 Switch"
- "NetApp AFF A250 All-Flash Array"
- "Arista 7050X Series Switch"
- "All Equipment"
- "Recommended"
- "equipment-${filterCategory}-${showRecommended}"
- ").getTime() - new Date(a.createdAt ||"
- "Servers & Compute"
- "Networking"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/EquipmentRecommendations.tsx

**Hardcoded strings found:**
- "Authentication required"
- "Please sign in to get personalized AI picks."
- "Sign In"
- "next/link"
- "/auth/login?returnTo=/equipment/recommendations"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ExpoPage.tsx

**Hardcoded strings found:**
- "Zion Global Expo"
- "Virtual summit showcasing multiverse innovation"
- "bg-background"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Favorites.tsx

**Hardcoded strings found:**
- "Favorites"
- "No favorites added."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Featured.tsx

**Hardcoded strings found:**
- "Featured Listings"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/FeedbackAnalytics.tsx

**Hardcoded strings found:**
- "Feedback Overview"
- "Recent Feedback"
- "No feedback submitted yet."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ForgotPassword.jsx

**Hardcoded strings found:**
- "Forgot Password"
- "Send Reset Link"
- "Login"
- "next/link"
- "@/services/auth"
- "/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ForgotPassword.tsx

**Hardcoded strings found:**
- "Request failed"
- "Failed to send reset link"
- "Submit"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ForumCategoryPage.tsx

**Hardcoded strings found:**
- "Forum"
- "Clear Search"
- "Create Post"
- "Access Restricted"
- "Back to Community"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ForumPostPage.tsx

**Hardcoded strings found:**
- "Post not found"
- "Back to Community"
- "Forum"
- "Edit"
- "Report"
- "Accepted Answer"
- "Your Response"
- "Please"
- "next/link"
- "Best practices for AI model fine-tuning"
- "Authentication required"
- "/auth/login?returnTo=${returnTo}"
- "Vote recorded"
- "You upvoted this post"
- "You downvoted this post"
- "Please sign in to reply"
- "Reply posted"
- "Your reply has been added to the discussion"
- "Permission denied"
- "Only the original poster or moderators can mark answers"
- "Answer marked"
- "The reply has been marked as the accepted answer"
- "Please sign in to report content"
- "Report submitted"
- "Post unpinned"
- "Post pinned"
- "The post has been pinned to the top"
- "Post unlocked"
- "Post locked"
- "/community/edit/${post.id}"
- "Unpin"
- "Pin"
- "Unlock"
- "Lock"
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/FoundationPage.tsx

**Hardcoded strings found:**
- "Zion Foundation"
- "Registry & Legal Structure"
- "Cayman Foundation"
- "Swiss Verein"
- "Foundation Charter"
- "Governance"
- "Appoint Core Stewards"
- "Public trust portal for the Zion protocol"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/FounderBackupVault.tsx

**Hardcoded strings found:**
- "Founder Backup Vault"
- "Download Encrypted ZIP"
- "Simulate Recovery"
- "DAO Genesis Key / Multisig fallback"
- "Treasury recovery address"
- "Whitepaper + roadmap history"
- "Vault password"
- "Set a password"
- "Recovery successful"
- "Incorrect password"
- "zion_backup.zip"
- "zion_backup.pdf"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/FounderBot.tsx

**Hardcoded strings found:**
- "Ask the Founder"
- "Open Founder Chat"
- "Founder bot error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/FounderCoursePage.tsx

**Hardcoded strings found:**
- "Zion Founder Course"
- "Summarize This Module"
- "Take Quiz"
- "Module Summary"
- "Loading quiz..."
- "Quiz"
- "Failed to fetch summary"
- "Failed to fetch quiz"
- "Module 1 — \uD83C\uDF0D Introduction to Zion"
- "Multiverse config"
- "Module 3 — \uD83D\uDEE0 Deployment & Setup"
- "Initial DAO config + manifestos"
- "Module 4 — \uD83D\uDCAC Community, Support, Scaling"
- "Module 5 — \uD83D\uDDFC Legal & Launch"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Fundraising.tsx

**Hardcoded strings found:**
- "Fundraising Toolkit"
- "Funding Stage"
- "Seed / Strategic Angels"
- "Series A / Institutional"
- "Public Token Round"
- "Deck Prompt"
- "Generate Deck"
- "Deal Room Uploads"
- "Investor"
- "Stage"
- "Contacted"
- "Close Round"
- "Fundraising"
- "Overview"
- "Arial, sans-serif"
- "Fundraising toolkit"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/GPTLibraryPage.tsx

**Hardcoded strings found:**
- "ZionGPT Prompt Library"
- "Tap a prompt to copy or send it directly to ZionGPT."
- "Add Your Own"
- "Enter your prompt"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/GlobalMap.tsx

**Hardcoded strings found:**
- "Global Instances"
- "Top Regions by Talent"
- "Live Feed"
- "Global Zion Map"
- "Latin America"
- "Zion Health"
- "ZionGPT upgraded to v1.7 in Egypt"
- "min-h-screen bg-background"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Grants.tsx

**Hardcoded strings found:**
- "Grant Application"
- "Project Name"
- "Team Info"
- "Proposal Summary"
- "Timeline"
- "Supporting Links / Pitch Deck"
- "Category"
- "Save Draft"
- "Submit for Review"
- "My Applications"
- "Required"
- "Submitted"
- "Draft"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/GreenIT.tsx

**Hardcoded strings found:**
- "Green IT Solutions"
- "Sustainable technology solutions that reduce environmental impact without compromising performance"
- "Sustainable IT for a Better Future"
- "Explore Green IT Solutions"
- "Our Green IT Solutions"
- "Contact Our Team"
- "Green IT Solutions - Sustainable Technology"
- "Green IT sustainability"
- "next/link"
- "Energy-Efficient Hardware"
- "Renewable Energy Integration"
- "/contact"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Help.tsx

**Hardcoded strings found:**
- "Help Center"
- "Loading..."
- "Try Again"
- "Search articles..."
- "Help article fetch error:"
- "Failed to load articles"
- "Search our knowledge base"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/HelpCenterPage.tsx

**Hardcoded strings found:**
- "Help Center | Zion AI Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/HiringTracker.tsx

**Hardcoded strings found:**
- "Hiring Pipeline"
- "Track and manage your candidates through the hiring process"
- "Kanban Board"
- "Analytics"
- "Hiring Tracker | Zion AI Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ITOnsiteServicesPage.tsx

**Hardcoded strings found:**
- "Full IT Onsite Services Pricing"
- "Payment Successful"
- "Your IT onsite service request has been received. Our team will contact you shortly."
- "/it-onsite-services/${slugify(country.country)}?service=standard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ITSupportPage.tsx

**Hardcoded strings found:**
- "IT Support Services"
- "Certified Professionals"
- "Multi-Channel Support"
- "Carlos Diaz"
- "Get IT Support"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/InternationalProposals.tsx

**Hardcoded strings found:**
- "International Proposals"
- "Title"
- "Institution"
- "Region"
- "Status"
- "Draft"
- "Digital Labor Initiative"
- "min-h-screen bg-background"
- "Transparency for global outreach"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Interviews.tsx

**Hardcoded strings found:**
- "Interviews"
- "Schedule and manage your video interviews"
- "Past"
- "No upcoming interviews"
- "No pending interviews"
- "No past interviews"
- "Interviews | Zion AI Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/InvestorMatch.tsx

**Hardcoded strings found:**
- "Investor Matchmaker"
- "Startup Name"
- "Industry"
- "Round Type"
- "Team Size"
- "Pitch Summary"
- "Deck or Website Link"
- "Pre-seed, Seed, etc"
- "Find Investors"
- "Searching..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/JobDetails.tsx

**Hardcoded strings found:**
- "Job Not Found"
- "View All Jobs"
- "Job Description"
- "Required Skills"
- "Budget"
- "Deadline"
- "Job Type"
- "Apply Now"
- "This is your job posting"
- "Please log in to apply for this job"
- "Only job seekers can apply for jobs"
- "Zion AI Marketplace"
- "Not specified"
- "Application submitted successfully!"
- "Flexible"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ListingDetail.tsx

**Hardcoded strings found:**
- "Listing Not Found"
- "Back to Marketplace"
- "No image available"
- "Description"
- "Key Features"
- "State-of-the-art machine learning techniques"
- "Enterprise Security"
- "Built-in data protection and encryption"
- "Tags"
- "Featured"
- "Custom Pricing"
- "Contact Publisher"
- "Publisher"
- "Listed on"
- "next/link"
- "Buy Now"
- "Payment Processing"
- "Request Quote"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Login.tsx

**Hardcoded strings found:**
- "Checking login status…"
- "react-error-boundary"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/MarketplaceLanding.tsx

**Hardcoded strings found:**
- "Loading..."
- "Marketplace"
- "/checkout/${p.id}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/MessagingInbox.tsx

**Hardcoded strings found:**
- "Messages"
- "Start Call"
- "Failed to load messages. Please try again."
- "Please select a conversation first"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/MobileAppPage.tsx

**Hardcoded strings found:**
- "Zion AI Marketplace App"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/MobileLaunchPage.tsx

**Hardcoded strings found:**
- "Get the Zion App - AI Marketplace in Your Pocket"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/MoreTalentsPage.tsx

**Hardcoded strings found:**
- "Backend Developer"
- "Cloud Architect"
- "Data Engineer"
- "Blockchain Developer"
- "Mobile App Developer"
- "Creates high-performance iOS and Android applications."
- "Robotics Engineer"
- "Product Manager"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/MyAccount.tsx

**Hardcoded strings found:**
- "My Account"
- "Profile"
- "Orders"
- "Recent Orders"
- "View"
- "next/link"
- "Error updating profile:"
- "Failed to update profile. Please try again."
- "Error updating profile"
- "Manage your profile and settings"
- "/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/NationBuilder.tsx

**Hardcoded strings found:**
- "Create a Digital Nation"
- "Nation Name"
- "Flag"
- "Governance Style"
- "Admin"
- "Token-weighted vote"
- "Delegate model"
- "Funding Model"
- "Partner subsidies"
- "Create Nation"
- "Select governance"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/NationDashboard.tsx

**Hardcoded strings found:**
- "Population metrics"
- "Talent vs. Client ratio"
- "Nation currency details"
- "Editable roadmap"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/NationProfilePage.tsx

**Hardcoded strings found:**
- "This is a public profile for the nation."
- "View Dashboard"
- "next/link"
- "/nations/${slug}/dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/NewPost.jsx

**Hardcoded strings found:**
- "New Post"
- "Preview"
- "Loading..."
- "Title"
- "Write your post in markdown"
- "Failed to create post"
- "Post creation error:"
- "Post"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/NewServicesPage.tsx

**Hardcoded strings found:**
- "New Services"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Notifications.tsx

**Hardcoded strings found:**
- "Message"
- "Quote Request"
- "Booking"
- "Hire Request"
- "Onboarding"
- "Project"
- "Milestone"
- "Order"
- "Notification"
- "Promise"
- "New"
- "Mark as read"
- "Dismiss"
- "Mark all as read"
- "All"
- "Unread"
- "Messages"
- "Orders"
- "No notifications found"
- "Notifications | Zion AI Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/OAuthCallback.jsx

**Hardcoded strings found:**
- "Loading..."
- "Failed to decode token"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/OAuthCallback.tsx

**Hardcoded strings found:**
- "OAuth Error:"
- "Authentication token not found. Please try logging in again."
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/OffworldLab.tsx

**Hardcoded strings found:**
- "Offworld Lab"
- "Cast Offline Vote"
- "Sync to Satellite"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Onboarding.tsx

**Hardcoded strings found:**
- "Loading..."
- "Welcome to Zion"
- "Complete your profile to get started"
- "Back"
- "Error updating profile:"
- "Error saving onboarding data:"
- "Tell us about yourself"
- "Tailor your experience"
- "Authentication Error"
- "/login"
- "Profile completed!"
- "Your profile has been set up successfully."
- "Error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/OpenAppRedirect.tsx

**Hardcoded strings found:**
- "If nothing happens, download the app first."
- "App Not Installed"
- "We're redirecting you to download the Zion app."
- "Opening App Failed"
- "We're taking you to our mobile app page where you can download the app."
- "Go to Mobile App Page"
- "Opening Zion App"
- "next/link"
- "Redirecting to the Zion AI Marketplace mobile app"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/OrderConfirmation.tsx

**Hardcoded strings found:**
- "Thank you for your order!"
- "View Orders"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/OrderDetail.tsx

**Hardcoded strings found:**
- "Shipping Address"
- "Tracking"
- "Download PDF Invoice"
- "Copy Summary"
- "Resend Receipt"
- "Back to orders"
- "next/link"
- "<p>Thank you for your purchase. Total ${order.total}.</p>"
- "Failed to send receipt"
- "Order summary copied to clipboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Orders.tsx

**Hardcoded strings found:**
- "In Escrow"
- "Released"
- "Disputed"
- "Order History"
- "Date"
- "Total"
- "Status"
- "View"
- "No Orders"
- "next/link"
- "You haven"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/OrgChart.tsx

**Hardcoded strings found:**
- "Organization Chart"
- "All Roles"
- "All Zones"
- "All Teams"
- "Tree View"
- "Photo"
- "Zion Org Chart"
- "Role"
- "Zone"
- "Team"
- "Meet the Zion team and DAO delegates"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/PartnerIntegration.tsx

**Hardcoded strings found:**
- "Application received"
- "Institution Name"
- "Entity Type"
- "University"
- "Government"
- "Bank"
- "Other"
- "Use Case"
- "Education Partnership"
- "Workforce Development"
- "Token Integration"
- "Custom Marketplace Instance"
- "Additional Details"
- "Submit Application"
- "Use Cases"
- "Banks → Sync KYC for token wallet support"
- "Acme University"
- "Select type"
- "Select use case"
- "bg-background text-white py-12"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Payments.tsx

**Hardcoded strings found:**
- "Transaction History"
- "Payment Settings"
- "Manage Payment Methods"
- "Escrow Settings"
- "Set your preferences for escrow services. Escrow holds funds until both parties confirm the service has been completed satisfactorily."
- "Payment Notifications"
- "Push notifications"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Philosophy.tsx

**Hardcoded strings found:**
- "Zion Philosophy"
- "Foundational Beliefs"
- "Talent is sovereign"
- "Decentralized reputation is better than centralized scores"
- "Open knowledge &gt; closed platforms"
- "Governance Principles"
- "Weighted voting"
- "Time-based quorum rules"
- "Transparency of decision-making"
- "Zero lock-in"
- "Right to self-train on your own interactions"
- "Version Control"
- "Constitution v1 → v2 (updates by community or core team)"
- "Sign with Wallet"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/PodcastHost.tsx

**Hardcoded strings found:**
- "Podcast Host"
- "Invitee Name"
- "Invitee Bio"
- "Topic"
- "Failed to generate"
- "Failed to generate podcast script"
- "Generate Script"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Points.tsx

**Hardcoded strings found:**
- "Zion Rewards Program"
- "Join Now to Start Earning"
- "Multiple ways to accumulate rewards"
- "Upcoming Rewards"
- "Coming Soon"
- "Create Account"
- "Your Rewards"
- "Keep Earning"
- "More ways to boost your point balance"
- "Available Rewards"
- "Browse Marketplace"
- "Join Community"
- "next/link"
- "Sign Up & Profile Setup"
- "Get Started"
- "First Purchase"
- "Make your first purchase on the marketplace"
- "Post in the community or comment on discussions"
- "Discount"
- "Subscription"
- "Zion Swag Pack"
- "Merchandise"
- "Service"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/PortfolioBuilder.tsx

**Hardcoded strings found:**
- "Resume & Portfolio Builder"
- "Resume"
- "Portfolio"
- "Portfolio Builder | Zion AI Marketplace"
- "Create and customize your resume and portfolio to showcase your skills and experience."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/PostJob.tsx

**Hardcoded strings found:**
- "Loading..."
- "Post a Job"
- "Post a Job | Zion AI Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ProductPage.tsx

**Hardcoded strings found:**
- "Loading product details..."
- "Product not found"
- "Error fetching product"
- "1× ${product.title} added"
- "In Cart"
- "Adding..."
- "Add to Cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ProductsAdminPage.tsx

**Hardcoded strings found:**
- "Name"
- "Category"
- "Status"
- "Approve"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Profile.tsx

**Hardcoded strings found:**
- "Account"
- "Profile"
- "Orders"
- "Settings"
- "next/link"
- "/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ProfileDetail.tsx

**Hardcoded strings found:**
- "Loading profile..."
- "Profile not found."
- "About Me"
- "Skills"
- "Experience"
- "Portfolio"
- "Contact"
- "Website"
- "Social"
- "GitHub"
- "Twitter"
- "LinkedIn"
- "Profile ID is missing."
- "Failed to fetch profile."
- "Error"
- "${profileData.full_name} | Zion AI Marketplace"
- "Check out this talent"
- "Present"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ProfilePage.tsx

**Hardcoded strings found:**
- "User Profile"
- "Name"
- "Bio"
- "Save Changes"
- "Enter your name"
- "Tell us a bit about yourself..."
- "s not submitting yet
            style={{
              padding:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ProjectDetails.tsx

**Hardcoded strings found:**
- "Offer Sent"
- "Offer Accepted"
- "Changes Requested"
- "In Progress"
- "Completed"
- "Canceled"
- "Loading project details..."
- "Project Not Found"
- "Return to Dashboard"
- "Accept Offer"
- "Cancel"
- "Request Changes"
- "Mark as Completed"
- "Milestones"
- "Project Room"
- "Message"
- "Project Details"
- "Timeline"
- "Shared Notes"
- "Reviews"
- "Project Scope"
- "Project details and expectations"
- "Project Description"
- "Payment Terms"
- "Job Details"
- "Project Timeline"
- "Key dates and milestones"
- "Start Date"
- "Project Status"
- "Uploaded when project was created"
- "View"
- "Project Notes"
- "Shared notes and updates"
- "No notes yet. Add the first note to this project."
- "Project Owner"
- "Discuss Changes"
- "This project has been canceled."
- "Add a note or update to the project..."
- "next/link"
- "Error fetching project notes:"
- "An error occurred while loading project notes."
- "Error adding note:"
- "An error occurred while adding note."
- "Project not found"
- "Failed to load notes"
- "Note added"
- "Your note has been added to the project."
- "Failed to add note"
- "/dashboard"
- "Project"
- "User"
- "Post Note"
- "Talent"
- "Professional"
- "Client"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ProjectMilestones.tsx

**Hardcoded strings found:**
- "Payment Milestones | Zion AI Marketplace"
- "Manage project payment milestones and deliverables"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ProjectRoom.tsx

**Hardcoded strings found:**
- "End Call"
- "Chat"
- "Files"
- "Video"
- "Calendar"
- "Team"
- "Settings"
- "Project Chat"
- "Project Files"
- "Video Meetings"
- "Schedule and join video calls"
- "Start a video call with your team"
- "Start Video Call"
- "No recent calls for this project"
- "Project Calendar"
- "Project Settings"
- "Configure project parameters"
- "You"
- "Video call started"
- "Video call ended"
- "Collaborate on your project"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Projects.tsx

**Hardcoded strings found:**
- "View Details"
- "next/link"
- "Project"
- "Project details"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/PublicTalentProfilePage.tsx

**Hardcoded strings found:**
- "Failed to load profile."
- "Skills"
- "About Me"
- "Portfolio"
- "Experience"
- "Connect"
- "GitHub"
- "Twitter"
- "LinkedIn"
- "Error fetching profile"
- "Error"
- "Failed to load profile. Please try again later."
- "loading loading-ring loading-lg"
- "${profileData.full_name} | Talent Profile"
- "View the profile of this talented individual."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/PublishProduct.tsx

**Hardcoded strings found:**
- "Loading..."
- "Publish on Zion"
- "Publish Your Product"
- "Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals."
- "publish product, sell online, digital marketplace, AI tools, tech services"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/RecommendationsPage.jsx

**Hardcoded strings found:**
- "Failed to fetch recommendations"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Referrals.tsx

**Hardcoded strings found:**
- "Referral Program"
- "Invite others to Zion AI Marketplace and earn rewards"
- "Share Referral Link"
- "Your Referrals"
- "Rewards"
- "Authentication required"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/RequestService.tsx

**Hardcoded strings found:**
- "Your name"
- "Phone"
- "Describe your request"
- "Request failed"
- "Missing Information"
- "Request sent – we"
- "Submission Failed"
- "There was an error submitting your request."
- "Submit"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ResetPassword.jsx

**Hardcoded strings found:**
- "Reset Your Password"
- "Enter new password"
- "Confirm new password"
- "Failed to reset password. Please try again."
- "Reset Password"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ResetPassword.tsx

**Hardcoded strings found:**
- "Loading..."
- "New password"
- "Confirm password"
- "Passwords do not match"
- "Reset failed"
- "Reset Password"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Rewards.tsx

**Hardcoded strings found:**
- "Rewards"
- "Swag Pack"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Roadmap.tsx

**Hardcoded strings found:**
- "Product Roadmap"
- "Details"
- "Suggest a Feature"
- "Zion Roadmap"
- "next/link"
- "Login required"
- "Please sign in to vote"
- "Vote on upcoming features"
- "min-h-screen bg-background py-24"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/RoadmapFeature.tsx

**Hardcoded strings found:**
- "Feature not found"
- "Back to Roadmap"
- "next/link"
- "Login required"
- "Please sign in to follow"
- "min-h-screen bg-background py-24"
- "Following"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/RoadmapSuggest.tsx

**Hardcoded strings found:**
- "Suggest a Feature"
- "Submit"
- "Community Queue"
- "Back to Roadmap"
- "Feature title"
- "Description"
- "next/link"
- "Login required"
- "Please sign in to suggest"
- "Suggestion added"
- "Thank you for your feedback"
- "Share your ideas"
- "min-h-screen bg-background py-24"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/RootPage.tsx

**Hardcoded strings found:**
- "Dashboard - Zion"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/SavedTalentsPage.tsx

**Hardcoded strings found:**
- "Error fetching talent profile"
- "Error toggling saved talent"
- "/auth/login?returnTo=${encodeURIComponent(router.asPath)}"
- "Error"
- "Hire Request Sent"
- "Talent Saved"
- "Talent saved to your list."
- "Browse Talent"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/SearchPage.tsx

**Hardcoded strings found:**
- "Search failed:"
- "search-${routeKey}-${router.asPath}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/SearchResultsPage.tsx

**Hardcoded strings found:**
- "All Types"
- "Services"
- "Talent"
- "Relevance"
- "Loading..."
- "Try searching for:"
- "Previous"
- "Next"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ServiceDescriptionGenerator.tsx

**Hardcoded strings found:**
- "Loading..."
- "Service Description Generator"
- "Create professional service descriptions with the help of AI. Just provide basic details about your service."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ServiceOnboarding.tsx

**Hardcoded strings found:**
- "Join Our Service Provider Network"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ServicesPage.tsx

**Hardcoded strings found:**
- "Avg Price"
- "Avg Rating"
- "Total Services"
- "Available Now"
- "All Categories"
- "Newest First"
- "Price: Low to High"
- "Price: High to Low"
- "Highest Rated"
- "Contact"
- "IT & AI Services"
- "Professional services for modern businesses and enterprises"
- "Error Loading Services"
- "Failed to load services. Please try again."
- "Retry"
- "Professional services for digital transformation and technology innovation"
- "All Services"
- "Recommended"
- "Available"
- ").getTime() - new Date(a.createdAt ||"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Signup.spec.tsx

**Hardcoded strings found:**
- "Home Page"
- "Dashboard Page"
- "Login Page"
- "Custom Path Page"
- "Passwords do not match"
- "Internal Server Error"
- "s root error area
    expect(screen.getByText("
- "next/router"
- "Signup Page"
- "/dashboard"
- "/login"
- "should successfully register, store token, update context, and redirect to home"
- "create-account-button"
- "path on successful registration if provided"
- "test-auth-token-next"
- "should show password mismatch error if passwords do not match"
- "should show generic error toast for 500 server error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Signup.tsx

**Hardcoded strings found:**
- "Partner Application"
- "Join the Zion AI Partner Program and start earning rewards"
- "Full Name"
- "Password"
- "Confirm Password"
- "Terms of Service"
- "Privacy Policy"
- "Go to Login"
- "Check Verification Status"
- "If signup fails, please try again in a few minutes or contact support."
- "next/link"
- "Authentication service is experiencing issues"
- "Auth service health check failed"
- "Network Error"
- "Network connection issues detected"
- "Unable to verify authentication service status"
- "Signup error details:"
- "Signup failed. Please try again."
- "s password-related
          if (errorMsg.toLowerCase().includes("
- "success-alert"
- "error-alert"
- "Create Account"
- "Partner application submitted!"
- "Signup failed"
- "Retry"
- "signup-submit"
- "Try Creating Account"
- "/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/SimpleSignup.tsx

**Hardcoded strings found:**
- "Password"
- "Signup error:"
- "Signup failed"
- "Sign Up"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Sitemap.tsx

**Hardcoded strings found:**
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/StartupOS.tsx

**Hardcoded strings found:**
- "Dashboard Home"
- "My Profile"
- "Cap Table"
- "Investor Relations"
- "Founder Dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Status.tsx

**Hardcoded strings found:**
- "Real-time monitoring of Zion platform services"
- "Live Status Dashboard"
- "Loading detailed status information..."
- "View Simplified Status"
- "Service Status Overview"
- "Current status of core platform services"
- "For detailed incident history and real-time updates:"
- "Visit Full Status Page"
- "If you're experiencing issues not reflected here, please contact our support team."
- "Contact Support"
- "Zion Status Page"
- "next/link"
- "Operational"
- "Degraded Performance"
- "Service Outage"
- "Scheduled Maintenance"
- "Unknown"
- "/contact"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/SummitPage.tsx

**Hardcoded strings found:**
- "Zion Global Summit"
- "Join us for the Zion Global Launch Summit"
- "bg-background"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/TalentDashboard.tsx

**Hardcoded strings found:**
- "Talent Dashboard"
- "Find opportunities matched to your skills and experience"
- "Profile Settings"
- "Application Tracker"
- "Online"
- "Rating"
- "Messages"
- "Profile views"
- "Job matches"
- "Applications"
- "Profile completion"
- "My Applications"
- "Saved Jobs"
- "View Full Application Tracker"
- "You haven't saved any jobs yet."
- "Browse Jobs"
- "Talent Dashboard | Zion AI Marketplace"
- "next/link"
- "Your personalized talent dashboard with job matches and professional opportunities."
- "/settings/account"
- "/dashboard/talent/applications"
- "User"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/TalentDetail.tsx

**Hardcoded strings found:**
- "Talent not found"
- "Contact"
- "talent-loading"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/TalentDirectory.tsx

**Hardcoded strings found:**
- "No talent profiles are currently available."
- "Be the first to list a talent"
- "Add Talent"
- "Filter & Sort"
- "Close"
- "No talent"
- "next/link"
- "Unable to load talent profiles."
- "/create-talent-profile"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/TalentOnboarding.tsx

**Hardcoded strings found:**
- "Join Our Talent Network"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/TalentProfilePage.tsx

**Hardcoded strings found:**
- "Hire Now"
- "Message"
- "Error loading profile"
- "Authentication required"
- "/login?returnTo=${encodeURIComponent("

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/TalentsPage.tsx

**Hardcoded strings found:**
- "Avg Monthly"
- "Avg Rating"
- "Avg Experience"
- "All Specializations"
- "All Availability"
- "Full Time"
- "Part Time"
- "Project Based"
- "Consulting"
- "Newest First"
- "Rate: Low to High"
- "Rate: High to Low"
- "Highest Rated"
- "Most Experienced"
- "Verified First"
- "Hire Talent"
- "Connect with world-class AI and technology professionals"
- "Try Again"
- "Connect with world-class professionals specializing in AI, machine learning, and modern technology"
- "Load More"
- "Recommended"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Terms.tsx

**Hardcoded strings found:**
- "Terms of Service"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/TimeOS.tsx

**Hardcoded strings found:**
- "Governance Calendar"
- "Proposal cooldowns"
- "Cross-instance sync schedules"
- "Manifesto Days"
- "Treasury report cycles"
- "Talent Festival launches"
- "Stores every proposal, milestone and manifesto"
- "Pushes governance anniversaries into roadmap voting"
- "Sync Options"
- "Push via webhooks to DAO chat or mobile app"
- "Auto-invite function for DAO votes"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/TokenIntegrations.tsx

**Hardcoded strings found:**
- "LayerZero Cross-Chain Bridge"
- "Estimate Fee"
- "DePIN Rewards"
- "Suggest Chain"
- "Amount of ZION$ to bridge"
- "Region"
- "Stake"
- "Bridging"
- "Please select chains and enter a valid amount."
- "Please connect your wallet."
- "Please select chains and enter a valid amount to bridge."
- "Bridging error:"
- "Initiating"
- "Bridge Now"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/TokenSimulator.tsx

**Hardcoded strings found:**
- "Scenario"
- "Token Velocity"
- "Run Analysis"
- "Total escrow locked"
- "Rewards issued/month"
- "Treasury balance"
- "Growth-only"
- "Bear market"
- "Airdrop unlock"
- "Circulating Supply"
- "Month"
- "Supply"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Tutorial.tsx

**Hardcoded strings found:**
- "Back to Tutorials"
- "next/link"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Tutorials.tsx

**Hardcoded strings found:**
- "Tutorials"
- "Learn how to use Zion with these in-depth tutorials"
- "next/link"
- "Step-by-step guides to help you build with Zion"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/UNBridge.tsx

**Hardcoded strings found:**
- "Global Outreach Proposal"
- "Workforce Dev"
- "Education"
- "Generate Proposal"
- "Proposal Preview"
- "Download Markdown"
- "Target institution"
- "Proposal type"
- "Regional scope"
- "Budget / Resolution goals"
- "min-h-screen bg-background"
- "Draft proposals for global institutions"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/UpdatePassword.tsx

**Hardcoded strings found:**
- "Update your password"
- "Request new reset link"
- "Password updated"
- "Your password has been successfully updated."
- "Redirecting you to login..."
- "New Password"
- "Confirm Password"
- "Back to login"
- "Password Recovery"
- "Set a strong password to secure your account and continue your journey in the Zion marketplace."
- "Enter password"
- "New password"
- "Confirm password"
- "Passwords do not match"
- "No access token found. Please request a new password reset link."
- "Password update error"
- "An unexpected error occurred"
- "Password update failed"
- "Password updated successfully"
- "/login"
- "Update Password"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/VerifyIdentity.tsx

**Hardcoded strings found:**
- "Verify Identity"
- "Full Legal Name"
- "Submit"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/VideoCall.tsx

**Hardcoded strings found:**
- "Join Video Call"
- "You"
- "Call ended"
- "Zion video call"
- "Join Call"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/WalletDashboard.tsx

**Hardcoded strings found:**
- "Promise"
- "Wallet"
- "Transaction History"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/WhitepaperGeneratorPage.tsx

**Hardcoded strings found:**
- "Whitepaper Configuration"
- "Share"
- "Token Distribution"
- "Additional Distribution Details (Text):"
- "Shareable Link:"
- "Copy"
- "Generating shareable link..."
- "Submitting to counsel..."
- "Edit Generated Sections"
- "Download as Markdown"
- "Download as PDF"
- "Generate Shareable Link"
- "Category"
- "create-shared-whitepaper"
- "Failed to get ID for shareable link for counsel."
- "Error generating whitepaper"
- "An unexpected error occurred."
- "Error downloading Markdown"
- "Failed to download Markdown file."
- "Error downloading PDF"
- "Failed to download PDF file."
- "Please generate the whitepaper content first before creating a shareable link."
- "Failed to get ID for shareable link."
- "Error generating shareable link"
- "Failed to generate shareable link:"
- "Failed to generate shareable link."
- "No shareable whitepaper selected or status is unknown."
- "set-shared-whitepaper-public-status"
- "Error toggling public status"
- "Failed to update public status:"
- "Failed to update public status."
- "Please generate and finalize the whitepaper before submitting."
- "Error submitting to counsel"
- "Failed to submit to counsel:"
- "My Awesome Token"
- "Team & Advisors"
- "Full Draft"
- "Unnamed"
- "Generate Whitepaper Draft"
- "Make Private"
- "Make Public"
- "Submitting..."
- "Submit to Counsel"
- "Hide"
- "Show"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/WhitepaperViewPage.tsx

**Hardcoded strings found:**
- "Loading whitepaper..."
- "Back to Home"
- "Access Denied"
- "Back"
- "next/link"
- "get-shared-whitepaper"
- "Shared whitepaper not found or data is invalid."
- "Error fetching shared whitepaper:"
- "An unexpected error occurred."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/Wishlist.tsx

**Hardcoded strings found:**
- "Wishlist"
- "Loading..."
- "} added"
- "In Cart"
- "Add to Cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/WorkFuturesSimulator.tsx

**Hardcoded strings found:**
- "ZionGPT Work Futures Simulator"
- "Preferences"
- "Scenario Lens"
- "Roleplay"
- "Sector"
- "Run Simulation"
- "Network Visualizer"
- "WorkFuturesSimulator.runSimulation"
- "WorkFuturesSimulator.useEffect"
- "Invalid position"
- "Invalid connection"
- "Token barter"
- "Gift economy"
- "Talent"
- "Coordinator"
- "Nation-builder"
- "Health"
- "Creative"
- "Tech"
- "Simulation failed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ZionBook.tsx

**Hardcoded strings found:**
- "Zion OS Book"
- "Chapter 1 – The Why"
- "Origin story"
- "Vision: AI + Talent + Trust"
- "Chapter 2 – The Blueprint"
- "Zion OS architecture"
- "Chapter 3 – Manifesto & Constitution"
- "Published values"
- "Founding principles"
- "Chapter 4 – Design Evolution"
- "Figma timeline"
- "Chapter 5 – Global Footprint"
- "Multiverse map"
- "Roadmap"
- "Zion’s future as protocol, not platform"
- "Download PDF"
- "Print"
- "min-h-screen bg-background prose lg:prose-xl font-serif mx-auto p-8"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/ZionHireAI.tsx

**Hardcoded strings found:**
- "Get Started"
- "Powerful AI Hiring Tools"
- "Job Description Generator"
- "Create compelling job descriptions with AI assistance to attract top talent."
- "Optimized for inclusivity"
- "Resume Screener"
- "Identify skill matches"
- "Experience verification"
- "Custom"
- "Customizable scoring criteria"
- "Candidate Matchmaker"
- "Relevancy scoring"
- "Culture fit prediction"
- "Data"
- "Performance tracking"
- "Add an AI assistant to your careers page to answer applicant questions."
- "Instant FAQ responses"
- "Customizable branding"
- "Code"
- "Simple JavaScript snippet"
- "Advanced Analytics"
- "Time-to-hire tracking"
- "Candidate funnel metrics"
- "Cost per hire analysis"
- "White-Labeled Platform"
- "Custom logo and colors"
- "Co-branded or white-labeled"
- "Access"
- "Team roles & permissions"
- "Zion Hire AI - White-labeled AI Recruiting Assistant"
- "Zion Hire AI Dashboard"
- "next/link"
- "/login"
- "absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl"
- "py-16 bg-background"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/academy/Storybook.tsx

**Hardcoded strings found:**
- "The Day the Protocol Woke Up"
- "Download PDF"
- "Download ePub"
- "Audio Narration Script"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/AppMetadataManager.tsx

**Hardcoded strings found:**
- "App Metadata Manager"
- "Manage app store metadata for the Zion mobile application"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/FraudDetection.tsx

**Hardcoded strings found:**
- "All Flags"
- "Pending Review"
- "Dangerous"
- "Actioned"
- "Error"
- "Flag updated"
- "Action"
- "Failed to update flag"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/IntegrationsPage.tsx

**Hardcoded strings found:**
- "Integrations - Zion AI Marketplace"
- "min-h-screen bg-background"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/KycDashboard.tsx

**Hardcoded strings found:**
- "KYC Dashboard"
- "Verification Queue"
- "Approve"
- "Reject"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/ListingModeration.tsx

**Hardcoded strings found:**
- "Listing Moderation"
- "Error"
- "Failed to load moderation logs"
- "Failed to update log"
- "Updated"
- "Moderate product and service listings"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/PartnerManager.tsx

**Hardcoded strings found:**
- "Pending"
- "Approved"
- "Rejected"
- "Approve and manage affiliate partners"
- "Overview"
- "Pending Applications"
- "Partners waiting for review and approval"
- "Active Partners"
- "Currently approved and active partners"
- "Partners"
- "Manage partnership applications and settings"
- "All"
- "Partner Details"
- "Review the details of the partner application"
- "Name"
- "Status"
- "Bio"
- "Niche"
- "Audience Size"
- "Website"
- "Social Media"
- "Payout Method"
- "Commission Rate"
- "Reject"
- "Approve"
- "Partner Settings"
- "Configure commission rates and other settings"
- "Partner Name"
- "Percentage of reward granted to this partner for successful referrals"
- "Cancel"
- "Save Changes"
- "Loading partner data..."
- "Audience"
- "Date"
- "Actions"
- "Settings"
- "View"
- "Search partners..."
- "No Partners Found"
- "Error fetching partners"
- "Error updating partner status"
- "Error updating partner settings"
- "/auth/login?returnTo="
- "Error"
- "Failed to load partner data"
- "Partner Approved"
- "Failed to update partner status"
- "Settings Updated"
- "Partner settings have been updated successfully."
- "Failed to update partner settings"
- "No bio provided"
- "Not specified"
- "Over"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/QuoteManager.tsx

**Hardcoded strings found:**
- "Quote Request Manager"
- "Active Quotes"
- "Archived Quotes"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/ReviewsModeration.tsx

**Hardcoded strings found:**
- "Review Moderation"
- "Manage, approve, or reject reviews"
- "Review and moderate user-submitted reviews before they go live"
- "Pending Reviews"
- "Reported Reviews"
- "Review Moderation | Zion AI Marketplace"
- "Error fetching reviews"
- "Error"
- "Failed to load reviews. Please try again later."
- "Moderate and manage reviews in the Zion AI Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/SupportRequests.tsx

**Hardcoded strings found:**
- "New Support Case"
- "In Progress"
- "Resolved"
- "Escalated"
- "Need Response"
- "All Statuses"
- "Open"
- "All Priorities"
- "High"
- "Medium"
- "Low"
- "All Categories"
- "Authentication"
- "Billing"
- "Disputes"
- "Verification"
- "Profile"
- "Reset Filters"
- "User"
- "Issue"
- "Status"
- "Priority"
- "Category"
- "Created"
- "Last Updated"
- "Actions"
- "View"
- "Assign"
- "Awaiting Response"
- "Search by ID, user or issue..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/TenantOnboarding.tsx

**Hardcoded strings found:**
- "Tenant Onboarding"
- "Create a new white-label instance of Zion Hire AI for a company."
- "New Tenant Setup"
- "Company Info"
- "Branding"
- "Domain Setup"
- "Company Name"
- "Industry"
- "Technology"
- "Healthcare"
- "Finance"
- "Education"
- "Retail"
- "Manufacturing"
- "Professional Services"
- "Other"
- "Company Size"
- "Primary Brand Color"
- "Light"
- "Dark"
- "Corporate"
- "Startup"
- "Neon"
- "Co-branding"
- "Show "Powered by Zion AI" in the footer and elsewhere"
- "Subdomain"
- "Cancel"
- "Tenant Onboarding - Zion AI Marketplace"
- "Acme Corporation"
- "Select industry"
- "Select company size"
- "Error creating tenant"
- "Failed to create tenant"
- "Create Tenant"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/TokenManager.tsx

**Hardcoded strings found:**
- "Token Manager"
- "Issue or Revoke Tokens"
- "Transaction History"
- "Amount"
- "Failed"
- "Error ${res.status}"
- "Success"
- "Transaction processed"
- "Error"
- "Issue"
- "Revoke"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/WhitelabelManager.tsx

**Hardcoded strings found:**
- "Create New"
- "Record Type"
- "Name"
- "Value"
- "Password Reset"
- "Quote Request"
- "Invoice"
- "Receipt"
- "Admin Access"
- "Create and manage white-label instances of the Zion AI Marketplace platform."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/admin/ZionBrain.tsx

**Hardcoded strings found:**
- "Zion Brain - Admin"
- "Manage prompt routing and reflex rules"
- "min-h-screen bg-background p-6"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/auth/verify-email.tsx

**Hardcoded strings found:**
- "Go to Login"
- "Verification page error"
- "An unexpected error occurred during verification."
- "/login"
- "Verification failed: ${errorDescription}"
- "Arial, sans-serif"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/community/Category.jsx

**Hardcoded strings found:**
- "Load more"
- "Request failed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/community/NationDetailPage.tsx

**Hardcoded strings found:**
- "Nation Detail Page"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/dashboard/DisputeDetailPage.tsx

**Hardcoded strings found:**
- "Dispute Details | Zion AI Marketplace"
- "View and manage dispute details"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/dashboard/DisputesPage.tsx

**Hardcoded strings found:**
- "Dispute Resolution Center | Zion AI Marketplace"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/dashboard/MetricsDashboard.tsx

**Hardcoded strings found:**
- "Zion Metrics"
- "Real-time protocol KPIs"
- "Marketplace"
- "Token"
- "Jobs Posted"
- "Public View"
- "Internal View"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/dashboard/RequestsPanel.tsx

**Hardcoded strings found:**
- "Archived"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/deploy/GenesisDeployPage.tsx

**Hardcoded strings found:**
- "Genesis Deploy Page"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/features/AIPoweredContent.tsx

**Hardcoded strings found:**
- "Improve search rankings with keyword optimized text."
- "Create multilingual content to reach a global audience."
- "Can I edit the generated text?"
- "Try ZionGPT Now"
- "Screenshot of ZionGPT content tool"
- "next/link"
- "bg-background text-white py-12"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/features/AdminDashboard.tsx

**Hardcoded strings found:**
- "Admin Dashboard"
- "Who can access the dashboard?"
- "View Dashboard"
- "Screenshot of admin dashboard"
- "next/link"
- "bg-background text-white py-12"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/features/Ecommerce.tsx

**Hardcoded strings found:**
- "Start Shopping"
- "Screenshot of marketplace interface"
- "next/link"
- "Buy and sell hardware, software and services in the Zion marketplace."
- "bg-background text-white py-12"
- "Publish Product"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/features/InstantMessaging.tsx

**Hardcoded strings found:**
- "Instant Messaging"
- "Real-time notifications keep everyone updated."
- "Share files and links directly within the conversation."
- "Is chat history saved?"
- "You can mute rooms or disable notifications in your account settings."
- "Start Chatting"
- "Screenshot of chat interface"
- "next/link"
- "bg-background text-white py-12"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/features/Integrations.tsx

**Hardcoded strings found:**
- "Learn More"
- "Screenshot showing integrations"
- "next/link"
- "bg-background text-white py-12"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/features/Internationalization.tsx

**Hardcoded strings found:**
- "Internationalization"
- "Our interface and search support multiple languages so you can collaborate without barriers."
- "Yes, community contributions help us continually add new languages."
- "Explore Zion"
- "Screenshot of language options"
- "next/link"
- "bg-background text-white py-12"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/features/Search.tsx

**Hardcoded strings found:**
- "Advanced Search"
- "Save favorite searches and get notified of new matches."
- "Sort by rating, price, or recency to surface the best options."
- "Can I search in multiple languages?"
- "Try Search"
- "next/link"
- "Find exactly what you need with fast, filterable search powered by Elasticsearch."
- "bg-background text-white py-12"
- "/search"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/features/TalentMarketplace.tsx

**Hardcoded strings found:**
- "Talent Marketplace"
- "Browse Talent"
- "Screenshot of talent directory"
- "next/link"
- "bg-background text-white py-12"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/governance/index.tsx

**Hardcoded strings found:**
- "Governance Page"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/launch/index.tsx

**Hardcoded strings found:**
- "Launch Operations Toolkit"
- "General"
- "Web3 Focused"
- "Institutional Focused"
- "Media Kit"
- "Brand Guidelines"
- "Download (.md)"
- "Color Palette"
- "Typography"
- "Logos"
- "Zion Logo - Color"
- "Zion Logo - White"
- "Generate with Date"
- "Social Media Kit"
- "Banners"
- "LinkedIn Banner"
- "Twitter Banner"
- "Download (GIF)"
- "Explainer Copy Blocks"
- "Loading copy..."
- "General Explainer"
- "Download (.txt)"
- "No explainer copy loaded."
- "Rollout Timeline"
- "Suggested Schedule"
- "Closed Beta Invite"
- "ZionGPT Core Reveal"
- "Token Airdrop Snapshot"
- "Zion Global Summit"
- "Playbooks"
- "Download Pre-launch Playbook (.md)"
- "Download Post-launch Playbook (.md)"
- "Optional Activations"
- "Legal Bundle"
- "Download (.md) (If applicable)"
- "Generate PDF Kit"
- "Download Sample PDF Kit"
- "Zion Logo Color"
- "LinkedIn Banner Placeholder"
- "Twitter Banner Placeholder"
- "Promo GIF Placeholder"
- "Error creating ZIP:"
- "An unknown error occurred while creating ZIP."
- "Error loading explainer copy:"
- "An unknown error occurred."
- "Please enter a date."
- "Loading..."
- "explainer_copy_1.txt"
- "Zion_Sample_Kit.pdf"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/marketplace/OrderConfirmationPage.tsx

**Hardcoded strings found:**
- "Order Confirmation Page"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/payment-canceled.tsx

**Hardcoded strings found:**
- "Payment Canceled"
- "Your payment process was canceled. No charges have been made to your account."
- "Try Again"
- "Return to Dashboard"
- "/dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/pages/talent/[id].tsx

**Hardcoded strings found:**
- "Skills"
- "Social Links"
- "Profile not found"
- "Failed to load profile"
- "profile-name"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/routes/AuthRoutes.tsx

**Hardcoded strings found:**
- "next/navigation"
- "/register"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/routes/config.tsx

**Hardcoded strings found:**
- "Test Error Render - Zion"
- "Test Error Mount - Zion"
- "Not Found - Zion"
- "Marketplace - Zion"
- "Categories - Zion"
- "Blog - Zion"
- "/services"
- "Services - Zion"
- "/login"
- "/about"
- "About - Zion"
- "/register"
- "Register - Zion"
- "Sign Up - Zion"
- "Zion Global Summit"
- "/dashboard"
- "Dashboard - Zion"
- "Investor Match - Zion"
- "Team - Zion"
- "Org Chart - Zion"
- "Roadmap - Zion"
- "Suggest Feature - Zion"
- "Feature - Zion"
- "Verify Identity"
- "/cart"
- "Cart - Zion"
- "/checkout/:id"
- "Community - Zion"
- "Developers - Zion"
- "/test-error-render"
- "/test-error-mount"
- "Startup OS - Zion"
- "/founder-dashboard"
- "/founder/backup"
- "Founder Backup Vault - Zion"
- "Global Map - Zion"
- "Planetary Congress - Zion"
- "International Proposals - Zion"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/scripts/run-update-icons.ts

**Hardcoded strings found:**
- "Error executing script: ${error}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/apiClient.ts

**Hardcoded strings found:**
- "Failed to logout after 401"
- "Validation error"
- "Authentication required"
- "Not found"
- "Server error"
- "DELETE"
- "/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/apiHelper.ts

**Hardcoded strings found:**
- "Promise"
- "Unexpected error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/auth.ts

**Hardcoded strings found:**
- "Register error:"
- "Forgot password error:"
- "Reset password error:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/authService.ts

**Hardcoded strings found:**
- "t toast.
    // For example, you might want to ensure the error object has a specific structure
    // if it doesn"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/escrowService.ts

**Hardcoded strings found:**
- "Escrow released successfully"
- "Dispute initiated successfully"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/feedbackService.ts

**Hardcoded strings found:**
- "Failed to submit feedback"
- "Error ${res.status}: Failed to submit feedback"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/fraud/analyzeContent.ts

**Hardcoded strings found:**
- "Suspicious punctuation pattern"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/fraud/flagContent.ts

**Hardcoded strings found:**
- "Error flagging content:"
- "Unknown error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/fraud/signupCheck.ts

**Hardcoded strings found:**
- "Error checking signup patterns:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/marketplace.ts

**Hardcoded strings found:**
- "Marketplace request interceptor error:"
- "Alex Chen"
- "Senior AI Engineer"
- "Specialized in computer vision and deep learning with 8+ years experience"
- "Sarah Rodriguez"
- "Our servers are experiencing issues. Please try again later."
- "Please log in to access marketplace data."
- "Request timeout. Please check your connection and try again."
- "No internet connection. Please check your network."
- "Unable to load marketplace data. Please try again."
- "Unnamed Product"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/messages.ts

**Hardcoded strings found:**
- "Unknown error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/pricingSuggestionService.ts

**Hardcoded strings found:**
- "Error generating budget suggestion:"
- "Error generating rate suggestion:"
- "Error tracking pricing suggestion:"
- "Low"
- "Medium"
- "High"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/productService.ts

**Hardcoded strings found:**
- "Error fetching product ${productId}: ${response.status} ${response.statusText}"
- "An error occurred in fetchProductById:"
- "Sample Product"
- "This is a sample product for build time"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/shippoService.ts

**Hardcoded strings found:**
- "Shippo create shipment error:"
- "Content-Type"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/services/signupApi.ts

**Hardcoded strings found:**
- "Signup error:"
- "Signup failed"
- "Network error – please retry."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/types/api.ts

**Hardcoded strings found:**
- "Method not allowed"
- "Invalid input"
- "Please check your request data and try again"
- "Unauthorized"
- "You must be logged in to access this resource"
- "Forbidden"
- "You do not have permission to access this resource"
- "Not found"
- "The requested resource was not found"
- "Please try again later"
- "Internal server error"
- "Something went wrong. Please try again later"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/types/auth.ts

**Hardcoded strings found:**
- "Promise"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/types/common.ts

**Hardcoded strings found:**
- "DELETE"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/types/disputes.ts

**Hardcoded strings found:**
- "Quality of Deliverable"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/types/messaging.ts

**Hardcoded strings found:**
- "Promise"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/types/next-stubs.d.ts

**Hardcoded strings found:**
- "next/*"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/types/next.d.ts

**Hardcoded strings found:**
- "next/router"
- "next/head"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/types/next.ts

**Hardcoded strings found:**
- "next/router"
- "next/head"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/types/reown-appkit.d.ts

**Hardcoded strings found:**
- "Promise"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/accessibility.ts

**Hardcoded strings found:**
- "Tab"
- "Image missing alt attribute"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/apiErrorHandler.ts

**Hardcoded strings found:**
- "Network Error"
- "Unexpected error – please try again later."
- "Error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/bundleMonitor.ts

**Hardcoded strings found:**
- "/_next/static/"
- "Slow bundle chunk loading:"
- "Bundle chunks are loading slowly. Check network conditions and consider CDN."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/config.ts

**Hardcoded strings found:**
- "NEXT_PUBLIC_SUPABASE_ANON_KEY"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/consoleErrorToast.ts

**Hardcoded strings found:**
- "React"
- "Uncaught"
- "TypeError"
- "ReferenceError"
- "Warning:"
- "Unexpected Error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/customErrorReporter.ts

**Hardcoded strings found:**
- "webhook-warning-shown"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/developmentLogger.ts

**Hardcoded strings found:**
- "[INFO] ${message}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/devtools.ts

**Hardcoded strings found:**
- "Zero height – may be broken"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/dynamicImports.ts

**Hardcoded strings found:**
- "Promise"
- "@/pages/talent-dashboard"
- "@/pages/creator-dashboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/enhancedErrorHandlers.ts

**Hardcoded strings found:**
- "Authentication required - please log in"
- "Access denied - insufficient permissions"
- "Requested resource not found"
- "Validation failed - please check your input"
- "Server error - please try again later"
- "No internet connection - please check your network"
- "Request failed - please try again"
- "Network request failed"
- "Uncaught"
- "TypeError"
- "ReferenceError"
- "Error reporting to logger:"
- "Request failed"
- "Authentication required"
- "Access denied"
- "Server error"
- "Network error – please retry"
- "/_next/"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/environmentConfig.ts

**Hardcoded strings found:**
- "Production Environment Configuration Errors:\n"
- "Supabase is not configured - using placeholder values"
- "LogRocket is not configured"
- "⚠️ Development Environment Warnings:\n"
- "⚠️ Production Environment Warnings:\n"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/equipmentAutoFeedAlgorithm.ts

**Hardcoded strings found:**
- "Power & Cooling"
- "In Stock"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/fetchMarketplaceData.ts

**Hardcoded strings found:**
- "Invalid response format: expected array"
- "Error fetching marketplace data:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/formatDate.ts

**Hardcoded strings found:**
- "Today"
- "Yesterday"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/generateBookPdf.ts

**Hardcoded strings found:**
- "Decentralized commerce layers\nTrustless onboarding"
- "Chapter 2 – ZionGPT + The AI State"
- "Chapter 3 – The Tokenized Workforce"
- "On-chain credentials\nWork marketplace incentives"
- "Chapter 4 – The Multiverse & Digital Nations"
- "Cross-chain identity\nImmersive virtual economies"
- "Chapter 5 – ZionDAO + The Constitution"
- "Community law and governance\nOn-chain proposals"
- "Chapter 6 – Building a Post-Platform World"
- "Appendix – Protocol Maps & Timelines"
- "Architecture diagrams\nKey governance votes"
- "Times"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/generateRandomBlogPost.ts

**Hardcoded strings found:**
- "Auto Bot"
- "Content Automation"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/generateRandomEquipment.ts

**Hardcoded strings found:**
- "Liquid Cooling"
- "In Stock"
- "Edge AI Camera Kit"
- "Preorder"
- "Autonomous Drone Kit"
- "fallback-${timestamp}"
- "Equipment"
- "Professional equipment"
- "Unknown"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/generateRandomListing.ts

**Hardcoded strings found:**
- "Servers"
- "Professional Suite"
- "Enterprise Package"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/generateRandomTalentListing.ts

**Hardcoded strings found:**
- "Logan Taylor"
- "Python"
- "Policy"
- "Risk Assessment"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/generateStorybookEpub.ts

**Hardcoded strings found:**
- "The Day the Protocol Woke Up"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/getStripe.ts

**Hardcoded strings found:**
- "Stripe: Forced test mode is active, but no test publishable key (NEXT_PUBLIC_STRIPE_TEST_KEY or NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY) is set. Stripe will not load."
- "Stripe: Production domain detected, but NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set. Stripe will not load."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/globalAppErrors.ts

**Hardcoded strings found:**
- "Global error:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/globalFetchInterceptor.ts

**Hardcoded strings found:**
- "Network error – please retry"
- "/_next/"
- "s an auth error (401/403) and the user is on a public page, don"
- "/login"
- "Unauthorized"
- "Forbidden"
- "Not Found"
- "Validation Error"
- "Server Error"
- "Request Failed"
- "Server error. Please try again in a moment."
- "Network Error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/globalToastManager.ts

**Hardcoded strings found:**
- "Failed to log toast error:"
- "Authentication Required"
- "Enhanced Global Error Handler:"
- "Retry"
- "Max retries exceeded for error: ${errorMessage}"
- "Network error – please retry"
- "Request timed out - please try again"
- "Please log in to continue"
- "Requested resource not found"
- "Server error - please try again later"
- "${error.substring(0, 100)}..."
- "Validation Error"
- "Critical Error"
- "Error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/imageOptimization.tsx

**Hardcoded strings found:**
- "Image not available"
- "/_next/image"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/logError.ts

**Hardcoded strings found:**
- "Unknown error: non-Error object thrown"
- "Unknown error: non-Error object thrown. Could not serialize error object."
- "Unknown error"
- "s stack or name if they exist (though less likely for non-Errors)
      errorToSend.stack = (error as any)?.stack || errorToSend.stack;
      errorToSend.name = (error as any)?.name || errorToSend.name;
    } catch {
      // ignore if properties can"
- "Failed to report error to Sentry:"
- "Error sending logError to backend:"
- "Failed to prepare or send error to custom backend:"
- "Failed to log error to LogRocket:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/logger.ts

**Hardcoded strings found:**
- "Failed to report error to monitoring service:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/notificationUtils.ts

**Hardcoded strings found:**
- "Complete your profile"
- "Add your skills"
- "Set your availability"
- "Post your first job"
- "View your AI matches"
- "Invite talent"
- "Error creating notification:"
- "Add your skills to get better job matches"
- "Post your first job to start finding talent"
- "Check out your AI-matched talent suggestions"
- "Invite talent to speed up your hiring process"
- "New Message Received"
- "View Messages"
- "New Hire Request for Talent"
- "Review Request"
- "Find Talent"
- "View Order"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/notifications/createHireRequestNotifications.ts

**Hardcoded strings found:**
- "New Hire Request for Talent"
- "Review Request"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/notifications/createNotification.ts

**Hardcoded strings found:**
- "Error creating notification"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/notifications/createOnboardingNotification.ts

**Hardcoded strings found:**
- "Complete your profile"
- "Add your skills"
- "Set your availability"
- "Post your first job"
- "View your AI matches"
- "Invite talent"
- "Add your skills to get better job matches"
- "Post your first job to start finding talent"
- "Check out your AI-matched talent suggestions"
- "Invite talent to speed up your hiring process"
- "Find Talent"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/notifications/createTestNotification.ts

**Hardcoded strings found:**
- "New Message Received"
- "View Messages"
- "View Order"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/passwordStrength.ts

**Hardcoded strings found:**
- "Very weak"
- "Weak"
- "Fair"
- "Good"
- "Strong"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/pdf/sections/basicInfoSection.ts

**Hardcoded strings found:**
- "Resume"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/pdf/sections/skillsSection.ts

**Hardcoded strings found:**
- "Other"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/performance.ts

**Hardcoded strings found:**
- "Promise"
- "Failed to load component"
- "PerformanceObserver"
- "🔤 Font loading started: ${(event as any).fontface.family}"
- "❌ Font loading error: ${(event as any).fontface.family}"
- "Long task detected: ${entry.duration}ms"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/performanceOptimizer.ts

**Hardcoded strings found:**
- "Failed to initialize performance monitoring"
- "Failed to apply performance optimizations"
- "PerformanceObserver"
- "Slow page load detected"
- "First Contentful Paint"
- "Largest Contentful Paint"
- "Large resource detected"
- "Slow resource loading"
- "Service Worker registered"
- "Service Worker registration failed"
- "IntersectionObserver"
- "Bundle Size"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/prismaConnect.ts

**Hardcoded strings found:**
- "Database connection timed out"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/productionErrorMonitoring.ts

**Hardcoded strings found:**
- "ProductionErrorMonitor"
- "ProductionErrorMonitor captured error:"
- "Failed to send error to webhook:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/productionLogger.ts

**Hardcoded strings found:**
- "Performance Metrics Summary"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/productionOptimizations.ts

**Hardcoded strings found:**
- "Production Error:"
- "Service Worker registered:"
- "Poor LCP detected: ${entry.startTime}ms"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/pushSubscription.ts

**Hardcoded strings found:**
- "Push subscription failed"
- "PushManager"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/recommendationEngine.ts

**Hardcoded strings found:**
- "equipment recommendation error"
- "feature recommendation error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/referralUtils.ts

**Hardcoded strings found:**
- "Error formatting date:"
- "Error tracking referral:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/retry.ts

**Hardcoded strings found:**
- "Promise"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/routeUtils.ts

**Hardcoded strings found:**
- "Home"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/routerErrorHandler.ts

**Hardcoded strings found:**
- "Router error occurred:"
- "Router push error:"
- "Router replace error:"
- "/dashboard"
- "Route change error:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/searchUtils.ts

**Hardcoded strings found:**
- "recent-${search}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/servicesAutoFeedAlgorithm.ts

**Hardcoded strings found:**
- "Mobile Development"
- "Automation"
- "Available"
- "Consultation Required"
- "Other"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/setupAnalyticsTables.ts

**Hardcoded strings found:**
- "Error creating analytics tables:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/setupSupabaseTables.ts

**Hardcoded strings found:**
- "Error creating profiles table:"
- "Error setting up profiles table:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/suggestFix.ts

**Hardcoded strings found:**
- "Provide a concise suggestion to resolve or work around this error: ${error.message}"
- "Something went wrong while generating a fix suggestion. Please try again later."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/supabase/middleware.ts

**Hardcoded strings found:**
- "Middleware: Error during authentication check:"
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/talentAutoFeedAlgorithm.ts

**Hardcoded strings found:**
- "Senior AI Engineer"
- "Full-Stack Developer"
- "Consulting firm"
- "Technology"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/tokenRewards.ts

**Hardcoded strings found:**
- "Error ${res.status}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/validateEnv.ts

**Hardcoded strings found:**
- "NEXT_PUBLIC_REOWN_PROJECT_ID"
- "NEXT_PUBLIC_SUPABASE_ANON_KEY"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/withAsyncErrorGuard.ts

**Hardcoded strings found:**
- "Promise"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/withErrorHandling.ts

**Hardcoded strings found:**
- "An error occurred while loading the page"
- "Unexpected error handling state"
- "Environment configuration error:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/withErrorLogging.ts

**Hardcoded strings found:**
- "Internal server error"
- "./logError"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### src/utils/zion-gpt.ts

**Hardcoded strings found:**
- "No model data returned"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### stories/TalentProfilePage.stories.tsx

**Hardcoded strings found:**
- "Sample Talent"
- "Software Engineer"
- "React"
- "TypeScript"
- "Pages/TalentProfilePage"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/_shared/shippo.ts

**Hardcoded strings found:**
- "Shippo create shipment failed: ${msg}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/ai-chat/index.ts

**Hardcoded strings found:**
- "Error in ai-chat function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/ai-content-enhancer/index.ts

**Hardcoded strings found:**
- "Either content or context is required"
- "Error in ai-content-enhancer function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/ai-listing-generator/index.ts

**Hardcoded strings found:**
- "Missing required fields: title and category are required"
- "Error in AI listing generator:"
- "Failed to generate optimized listing content"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/ai-search/index.ts

**Hardcoded strings found:**
- "Query is required"
- "ai-search error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/analyze-content-fraud/index.ts

**Hardcoded strings found:**
- "Missing required environment variables"
- "Invalid request body"
- "No content provided for analysis"
- "No content type provided"
- "Unknown error"
- "Error calling OpenAI:"
- "Error analyzing content:"
- "Invalid"
- "An unexpected error occurred"
- "Analysis completed successfully:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/api-key-manager/index.ts

**Hardcoded strings found:**
- "Missing authorization header"
- "Unauthorized"
- "Invalid action"
- "Error processing request:"
- "Internal server error"
- "Authorization"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/check-training-status/index.ts

**Hardcoded strings found:**
- "Either modelId or jobId is required"
- "Fine-tuning job not found"
- "Unknown error occurred during training"
- "Training job was cancelled"
- "Error in check-training-status function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/checkout_sessions/index.ts

**Hardcoded strings found:**
- ")}/cancel"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/create-checkout/index.ts

**Hardcoded strings found:**
- "Invalid payment amount"
- "User not authenticated"
- "Checkout error:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/create-shared-whitepaper/index.test.ts

**Hardcoded strings found:**
- "Insert failed"
- "DB error: Insert failed"
- "DB error: ${error.message}"
- "create-shared-whitepaper: successful creation"
- "create-shared-whitepaper: handles missing required data"
- "create-shared-whitepaper: handles Supabase insert error"
- "ErrorToken"
- "NoDataToken"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/create-shared-whitepaper/index.ts

**Hardcoded strings found:**
- "Error saving shared whitepaper:"
- "Failed to create shared whitepaper, no data returned after insert."
- "Error in create-shared-whitepaper function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/cron-daily-retention/index.ts

**Hardcoded strings found:**
- "Unauthorized"
- "Daily retention process executed"
- "Error in cron-daily-retention:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/cron-monthly-leaderboard/index.ts

**Hardcoded strings found:**
- "Method Not Allowed"
- "Unauthorized"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/escrow-service/index.ts

**Hardcoded strings found:**
- "escrow-service error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/founder-bot/index.ts

**Hardcoded strings found:**
- "Error in ai-chat function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/generate-content/index.ts

**Hardcoded strings found:**
- "Supabase credentials are not set in environment variables"
- "Error saving blog post:"
- "Error in generate-content function:"
- "Create a DALL-E prompt for a thumbnail image for this blog post title:"
- "Zion AI Team"
- "Content Team"
- "New Blog Post Generated"
- "View Post"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/generate-contract/index.ts

**Hardcoded strings found:**
- "Failed to generate contract"
- "Error generating contract:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/generate-milestones/index.ts

**Hardcoded strings found:**
- "Failed to generate milestones"
- "Failed to parse AI response"
- "Error generating milestones:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/generate-seo-content/index.ts

**Hardcoded strings found:**
- "Missing contentType or userPrompt"
- "Missing contentType or userPrompt in request body"
- "You are an expert SEO content writer and copywriter."
- "An unexpected error occurred."
- "As an expert SEO content writer, generate a comprehensive blog post about"
- "}. The tone should be informative and engaging."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/generate-service-description/index.ts

**Hardcoded strings found:**
- "Missing required field: title"
- "Error in generate-service-description:"
- "Failed to generate service description"
- "Not specified"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/generate-smart-contract/index.ts

**Hardcoded strings found:**
- "Failed to generate smart contract"
- "Error generating smart contract:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/generate-whitepaper/index.test.ts

**Hardcoded strings found:**
- "Missing required core parameters"
- "Missing distribution information"
- "zion-gpt error: GPT failed"
- "zion-gpt error: ${gptError.message}"
- "generate-whitepaper: successful generation with basic data"
- "Fair launch. Include a placeholder"
- "generate-whitepaper: successful generation with distributionData"
- "generate-whitepaper: handles missing distribution information"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/generate-whitepaper/index.ts

**Hardcoded strings found:**
- "Missing required core parameters"
- "Missing distribution information: provide either distributionData or distributionBreakdown text."
- "Error invoking zion-gpt:"
- "Error in generate-whitepaper function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/get-shared-whitepaper/index.test.ts

**Hardcoded strings found:**
- "Shared whitepaper not found."
- "Row not found"
- "Some other DB error"
- "DB error: Some other DB error"
- "DB error: ${error.message}"
- "get-shared-whitepaper: successful fetch"
- "get-shared-whitepaper: handles missing ID"
- "get-shared-whitepaper: handles other Supabase errors"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/get-shared-whitepaper/index.ts

**Hardcoded strings found:**
- "Not Found"
- "Shared whitepaper not found."
- "Error in get-shared-whitepaper function:"
- "Failed to fetch shared whitepaper: ${error.message}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/get-whitepaper-section-suggestions/index.test.ts

**Hardcoded strings found:**
- "Missing required parameters"
- "zion-gpt error: GPT suggestions failed"
- "zion-gpt error: ${gptError.message}"
- "get-section-suggestions: successful suggestion generation"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/get-whitepaper-section-suggestions/index.ts

**Hardcoded strings found:**
- "Error invoking zion-gpt for section suggestions:"
- "Error in get-whitepaper-section-suggestions function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/get_feature_usage_stats/index.ts

**Hardcoded strings found:**
- "Error fetching feature usage data:"
- "Error:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/job-talent-matcher/ai-matcher.ts

**Hardcoded strings found:**
- "Error in normalizeSkillsWithAI:"
- "Error in findBestMatches:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/job-talent-matcher/index.ts

**Hardcoded strings found:**
- "Job ID is required"
- "No talent profiles found"
- "Job matching completed"
- "Error in job-talent-matcher:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/job-talent-matcher/job-matching.ts

**Hardcoded strings found:**
- "Error in processJobMatching:"
- "New Job Match"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/mailchimp-sync-new-users/index.ts

**Hardcoded strings found:**
- "mailchimp-sync-new-users error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/manage-transaction/index.ts

**Hardcoded strings found:**
- "User not authenticated"
- "Transaction ID is required"
- "Transaction not found"
- "You are not authorized to manage this transaction"
- "This transaction cannot be refunded"
- "Refund processed successfully"
- "Only pending transactions can be cancelled"
- "Transaction cancelled successfully"
- "Invalid action"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/moderate-listing/index.ts

**Hardcoded strings found:**
- "Missing required fields"
- "Error moderating listing:"
- "Listing flagged for review"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/notify-legal-team/index.test.ts

**Hardcoded strings found:**
- "Missing required parameters"
- "notify-legal-team: successful notification logging with all params"
- "notify-legal-team: successful logging with optional params missing"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/notify-legal-team/index.ts

**Hardcoded strings found:**
- "Error in notify-legal-team function:"
- "has been submitted for legal review. You can view it here: ${sharableLink}. Submitted by: ${submittedBy ||"
- "Failed to update whitepaper status: ${updateError.message}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/notify-milestone-deadlines/index.ts

**Hardcoded strings found:**
- "Error processing milestone deadlines:"
- "Milestone"
- "Milestone Due Soon"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/onsite-service-request/index.ts

**Hardcoded strings found:**
- "New Onsite Service Request"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/process-hire-request/index.ts

**Hardcoded strings found:**
- "You've Received a New Project Request"
- "Project Details"
- "Please log in to your Zion AI Marketplace account to respond to this request."
- "The Zion AI Marketplace Team"
- "Error parsing AI response:"
- "Error generating enhanced content:"
- "Error fetching admin users:"
- "Error creating admin notification:"
- "Hire request processed successfully"
- "Error processing hire request:"
- "Failed to process hire request"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/process-quote/index.ts

**Hardcoded strings found:**
- "OpenAI error:"
- "Error in process-quote function:"
- "Custom Service"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/process-retention-emails/index.ts

**Hardcoded strings found:**
- "Internal server error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/process-scheduled-jobs/index.ts

**Hardcoded strings found:**
- "Continue your onboarding process"
- "Error processing resume scoring:"
- "Application Scored"
- "An application for"
- "Newsletter Draft Ready"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/process-scheduled-reminders/index.ts

**Hardcoded strings found:**
- "Failed to fetch pending jobs"
- "Failed to update job status:"
- "Internal server error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/profile-summary-generator/index.ts

**Hardcoded strings found:**
- "Bio must be at least 20 characters long"
- "Failed to generate profile content"
- "Error parsing OpenAI response:"
- "Failed to parse the generated content"
- "Error in profile-summary-generator function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/resume-enhancer/index.ts

**Hardcoded strings found:**
- "Content is required"
- "Error in resume-enhancer function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/resume-scorer/index.ts

**Hardcoded strings found:**
- "Application ID is required"
- "Application not found"
- "Error fetching resume:"
- "Invalid response format"
- "Error parsing AI response:"
- "Error in resume-scorer function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/send-interview-reminder/index.ts

**Hardcoded strings found:**
- "Please be ready on time!"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/send-leaderboard-email/index.ts

**Hardcoded strings found:**
- "Monthly Leaderboard"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/send-newsletter/index.ts

**Hardcoded strings found:**
- "Error in send-newsletter function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/send-onboarding-reminder/index.ts

**Hardcoded strings found:**
- "Your next step is to"
- "Continue my setup"
- "The Zion AI Marketplace Team"
- "Missing required fields"
- "User not found"
- "Failed to create notification:"
- "Internal server error"
- "Complete your next step on Zion AI Marketplace"
- "Complete your next step"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/send-retention-email/index.ts

**Hardcoded strings found:**
- "Welcome to Zion AI Marketplace!"
- "Here's what to do next to get started:"
- "Add your skills and expertise"
- "Set your availability preferences"
- "Browse available jobs and start applying"
- "Complete Your Profile"
- "The Zion AI Marketplace Team"
- "Complete your company profile"
- "Post your first job or project"
- "Browse talent profiles in our directory"
- "Connect with AI professionals that match your needs"
- "Post Your First Job"
- "This week's top AI talent"
- "Browse Top Talent"
- "We miss you! Special offer inside"
- "Claim Your Offer"
- "Exclusive hiring discount inside"
- "Post a Job"
- "Boost your profile visibility"
- "We noticed you haven't received applications recently. Here are some tips to make your profile stand out:"
- "Add more details to your skills and experience"
- "Upload samples of your work to your portfolio"
- "Make sure your availability is up to date"
- "Adjust your rate if needed to be more competitive"
- "Update Your Profile"
- "Let's find talent for your job"
- "Review and update your job description with more details"
- "Consider adjusting your budget range if possible"
- "Update Job Post"
- "Log In Now"
- "Welcome to Zion AI Marketplace, ${firstName}!"
- "Find Talent"
- "t had a chance to ${nextAction ||"
- "Zion"
- "Boost your profile visibility, ${firstName}"
- "Tips to find the perfect talent for"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/service-profile-enhancer/index.ts

**Hardcoded strings found:**
- "Missing required service provider data"
- "Failed to generate enhanced profile content"
- "Error parsing AI response:"
- "Failed to parse AI response"
- "Function error:"
- "Internal server error"
- "Current Services: ${providerData.services.join("

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/set-shared-whitepaper-public-status/index.test.ts

**Hardcoded strings found:**
- "Missing required parameters"
- "Update did not return data."
- "Public status updated."
- "Not found"
- "Update DB error"
- "DB error: Update DB error"
- "DB error: ${error.message}"
- "set-public-status: successfully updates to public"
- "set-public-status: successfully updates to private"
- "set-public-status: handles other Supabase errors"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/set-shared-whitepaper-public-status/index.ts

**Hardcoded strings found:**
- "Failed to update, no data returned."
- "Public status updated successfully."
- "Error in set-shared-whitepaper-public-status function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/stripe-webhook/index.ts

**Hardcoded strings found:**
- "Error creating shipment"
- "Error creating order notification:"
- "Webhook Error: ${err.message}"
- "Order Paid"
- "Not found"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/talent-profile-enhancer/index.ts

**Hardcoded strings found:**
- "Bio must be at least 20 characters long"
- "Failed to generate profile content"
- "Error parsing OpenAI response:"
- "Failed to parse the generated content"
- "Error in talent-profile-enhancer function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/tenant-detector/index.ts

**Hardcoded strings found:**
- "Required environment variables are not set"
- "No hostname or subdomain provided"
- "Database error:"
- "Tenant detector error:"
- "Internal server error"
- "No hostname"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/token-manager/index.ts

**Hardcoded strings found:**
- "Missing parameters"
- "Invalid action"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/track-email-event/index.ts

**Hardcoded strings found:**
- "Missing required parameters"
- "Invalid event type"
- "Error processing event"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/track-referral/index.ts

**Hardcoded strings found:**
- "Error finding referral code:"
- "Invalid referral code"
- "User already has a referral"
- "Error creating referral:"
- "Failed to create referral"
- "Unexpected error processing referral:"
- "Internal server error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/translate-content/index.ts

**Hardcoded strings found:**
- "Content is required"
- "Error in translate-content function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/webhook-manager/index.ts

**Hardcoded strings found:**
- "Missing authorization header"
- "Unauthorized"
- "Invalid action"
- "Error processing request:"
- "Internal server error"
- "Error creating webhook:"
- "Failed to create webhook"
- "Webhook created successfully"
- "Error in createWebhook:"
- "Error fetching webhooks:"
- "Failed to fetch webhooks"
- "Error in getUserWebhooks:"
- "Error toggling webhook:"
- "Failed to update webhook or webhook not found"
- "Error in toggleWebhook:"
- "Error deleting webhook:"
- "Failed to delete webhook"
- "Webhook not found"
- "Webhook deleted successfully"
- "Error in deleteWebhook:"
- "Webhook not found or access denied"
- "Test webhook sent"
- "Error sending test webhook:"
- "Failed to send test webhook"
- "Error in testWebhook:"
- "This is a test webhook event"
- "Authorization"
- "Content-Type"
- "Test Milestone"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### supabase/functions/zion-gpt/index.ts

**Hardcoded strings found:**
- "Prompt is required"
- "Error in zion-gpt function:"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/_error.tsx

**Hardcoded strings found:**
- "Go to Home Page"
- "Debug Info:"
- "Go Back"
- "Error Details:"
- "next/link"
- "No error details available"
- "Error"
- "Application Error"
- "The page you"
- "An unexpected error occurred in the application."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/about.tsx

**Hardcoded strings found:**
- "About Zion"
- "Our Mission"
- "Our Vision"
- "Our Values"
- "Innovation"
- "Community"
- "Trust"
- "AI & IT services"
- "About Zion - The Future of AI & Tech Marketplace"
- "Team collaboration"
- "Tech innovation"
- "next/link"
- "/services"
- "/contact"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/auth/login.ts

**Hardcoded strings found:**
- "Method not allowed"
- "Development authentication successful"
- "Invalid credentials"
- "Authentication failed"
- "Authentication successful"
- "Internal server error"
- "Test User"
- "🔧 LOGIN TRACE: Development user authenticated successfully"
- "🔧 LOGIN TRACE: Available dev users:"
- "🔧 LOGIN TRACE: Supabase authentication successful"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/auth/logout.ts

**Hardcoded strings found:**
- "Allow"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/auth/register.ts

**Hardcoded strings found:**
- "already registered"
- "Password is too weak"
- "Registration successful"
- "Network error. Please try again."
- "Allow"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/auth/resend-verification-email.ts

**Hardcoded strings found:**
- "Auth provider not configured"
- "Allow"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/blog.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/categories/[slug]/items.ts

**Hardcoded strings found:**
- "Invalid slug"
- "Category not found"
- "Internal server error"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/categories.ts

**Hardcoded strings found:**
- "Internal Server Error: Failed to fetch categories"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/checkout/session.ts

**Hardcoded strings found:**
- "Missing cart"
- "Checkout session error:"
- "Allow"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/checkout-session.ts

**Hardcoded strings found:**
- "Checkout session error:"
- "Allow"
- "Method Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/equipment/recommendations.ts

**Hardcoded strings found:**
- "User ID is required for recommendations"
- "Internal Server Error: Failed to fetch recommendations"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/equipment.ts

**Hardcoded strings found:**
- "Performance Analytics"
- "Request timeout after 5 seconds"
- "Internal Server Error: Failed to fetch equipment"
- "Dell PowerEdge R750 Server"
- "Cisco Catalyst 9300 48-Port Switch"
- "Stackable"
- "Hot-Swappable Batteries"
- "Vertiv Liebert Precision Cooling Unit"
- "backup-appliance-1"
- "Veeam Backup & Replication Appliance"
- "Cloud Integration"
- "F5 BIG-IP Virtual Edition"
- "SolarWinds NPM Monitoring Server"
- "Locking Side Panels"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/feedback.ts

**Hardcoded strings found:**
- "Invalid input data"
- "Error saving feedback:"
- "Failed to save feedback"
- "Feedback"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/generate-quiz.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/health.ts

**Hardcoded strings found:**
- "Failed to retrieve health information:"
- "@/utils/withErrorLogging"
- "Failed to retrieve health information."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/log-error.ts

**Hardcoded strings found:**
- "Invalid error report: Missing body, message, or stack."
- "Error report received, analysis initiated."
- "dbRecordId is not defined in exec callback"
- "Server error during error processing."
- "Method Not Allowed"
- "Received error report request"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/marketplace/index.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/marketplace/overview.ts

**Hardcoded strings found:**
- "Error fetching marketplace overview:"
- "Failed to fetch marketplace overview"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/marketplace/product/[productId].ts

**Hardcoded strings found:**
- "Internal server error while fetching product details."
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/marketplace/products.ts

**Hardcoded strings found:**
- "An unexpected error occurred."
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/newsletter.ts

**Hardcoded strings found:**
- "Newsletter subscription error:"
- "Subscription failed"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/podcast/generate.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"
- "Intro (0:00): Welcome to the Zion Podcast. Today we chat with ${invitee}.\n"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/points/increment.ts

**Hardcoded strings found:**
- "fetch profile error:"
- "Failed to fetch user"
- "Internal server error"
- "Allow"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/search/suggest.ts

**Hardcoded strings found:**
- "Error fetching search suggestions:"
- "Failed to fetch suggestions"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/search.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/sentry-dsn-check.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/services.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/stripe/webhook.ts

**Hardcoded strings found:**
- "Failed to update order"
- "Allow"
- "Method Not Allowed"
- "Webhook Error: ${err.message}"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/summarize.ts

**Hardcoded strings found:**
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/talent/index.ts

**Hardcoded strings found:**
- "Error fetching talent profiles:"
- "Failed to fetch talent profiles"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/track-referral.ts

**Hardcoded strings found:**
- "Error calling track-referral function:"
- "Internal server error"
- "Allow"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/users/[id].ts

**Hardcoded strings found:**
- "User not found"
- "Allow"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/users/data.ts

**Hardcoded strings found:**
- "Method not allowed"
- "Not found"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/users/me.ts

**Hardcoded strings found:**
- "DELETE"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/api/zion-gpt/train.ts

**Hardcoded strings found:**
- "Training error:"
- "Allow"
- "Method ${req.method} Not Allowed"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### temp_essential_pages/index.tsx

**Hardcoded strings found:**
- "Throw Test Error"
- "Failed to load home page."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### test-server.js

**Hardcoded strings found:**
- "/error"
- "Internal Server Error simulation."
- "/random-error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/404-fallback.test.tsx

**Hardcoded strings found:**
- "Header"
- "Footer"
- "Go Back"
- "Browse Marketplace"
- "Find Talent"
- "Browse Categories"
- "Get Help"
- "go-back-btn"
- "home-link"
- "Return to Home"
- "next/router"
- "test-error-id"
- "Oops! Page not found"
- "errors.page_not_found"
- "errors.return_home"
- "errors.go_to_marketplace"
- "shows localized error message"
- "provides go back functionality"
- "includes home navigation link"
- "provides comprehensive error recovery options"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/Accessibility.test.tsx

**Hardcoded strings found:**
- "Click me"
- "Test Card"
- "Content"
- "Footer"
- "Test Input"
- "Test Label"
- "Test Checkbox Visual"
- "Option 1 Visual"
- "Option 2 Visual"
- "Test Textarea"
- "Test Alert"
- "Open Alert Dialog"
- "Alert Dialog Title"
- "Description"
- "Cancel"
- "Continue"
- "Open Dialog"
- "Dialog Title"
- "Close"
- "Test Table Caption"
- "Child Content"
- "Test input"
- "Test Radio Group"
- "Test Select Trigger"
- "Select an option"
- "Test textarea"
- "@/context/CartContext"
- "Zion"
- "ModeToggle has no accessibility violations"
- "Button has no accessibility violations"
- "Card has no accessibility violations"
- "Input has no accessibility violations"
- "Label has no accessibility violations"
- "Checkbox has no accessibility violations"
- "RadioGroup has no accessibility violations"
- "Select has no accessibility violations"
- "Textarea has no accessibility violations"
- "Alert has no accessibility violations"
- "AlertDialog has no accessibility violations when closed"
- "Dialog has no accessibility violations when closed"
- "Table has no accessibility violations"
- "Header has no accessibility violations"
- "MainNavigation has no accessibility violations"
- "AvatarMenu has no accessibility violations"
- "Logo has no accessibility violations"
- "Footer has no accessibility violations"
- "Home page has no accessibility violations"
- "Login page has no accessibility violations"
- "Contact page has no accessibility violations"
- "Blog page has no accessibility violations"
- "Checkbox"
- "RadioGroup"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/BlogSearch.test.tsx

**Hardcoded strings found:**
- "Search articles..."

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/CartPersistence.test.tsx

**Hardcoded strings found:**
- "Login Page"
- "/cart"
- "/login"
- "cart persistence"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/CategoryCard.test.tsx

**Hardcoded strings found:**
- "Test Category"
- "Crème Brûlée"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/CategoryDetail.test.tsx

**Hardcoded strings found:**
- "Services"
- "/category/services"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/CategoryListingPageLoading.test.tsx

**Hardcoded strings found:**
- "spinner disappears after loading"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/CheckoutPageSnapshot.test.tsx

**Hardcoded strings found:**
- "Checkout page renders header"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/CommunityCategory.test.tsx

**Hardcoded strings found:**
- "Sample post"
- "Content"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/ContactPublisherModal.test.tsx

**Hardcoded strings found:**
- "Bad"
- "successful send closes modal and shows toast"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/DynamicListingPage.test.tsx

**Hardcoded strings found:**
- "Buy Now"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/EquipmentDetail.test.tsx

**Hardcoded strings found:**
- "EquipmentDetail page"
- "displays equipment info"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/EquipmentRecommendations.test.tsx

**Hardcoded strings found:**
- "Desc"
- "/auth/login?returnTo=/equipment&reco=1"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/ExploreNavigation.test.tsx

**Hardcoded strings found:**
- "/services"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/HeroSection.test.tsx

**Hardcoded strings found:**
- "HeroSection"
- "clicking Sign Up navigates to /signup"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/Login.test.tsx

**Hardcoded strings found:**
- "Invalid credentials"
- "LoginForm"
- "shows server error on 401 response"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/LoginForm.test.tsx

**Hardcoded strings found:**
- "Invalid credentials"
- "@/services/authService"
- "LoginForm"
- "valid credentials navigates to dashboard"
- "invalid credentials show error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/LoginFormFetch.test.tsx

**Hardcoded strings found:**
- "LoginForm fetch"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/LoginPage.test.tsx

**Hardcoded strings found:**
- "Login Page Rendering with Unavailable Wallet"
- "/login"
- "Login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/MarketplaceCard.test.tsx

**Hardcoded strings found:**
- "MarketplaceCard Buy Now"
- "navigates to login when unauthenticated"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/MarketplaceViewToggle.test.tsx

**Hardcoded strings found:**
- "toggling view updates container class"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/NavLink.test.tsx

**Hardcoded strings found:**
- "Dash"
- "next/link"
- "next/router"
- "NavLink"
- "adds active classes when pathname matches"
- "/dashboard"
- "does not add active classes when pathname differs"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/Navbar.test.tsx

**Hardcoded strings found:**
- "renders single navbar on ServicesPage"
- "renders single navbar on SearchPage"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/NewPostRoute.test.tsx

**Hardcoded strings found:**
- "/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/NotificationCenter.test.tsx

**Hardcoded strings found:**
- "Open notifications"
- "opening dropdown does not show error toast"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/PrismaForumPosts.test.ts

**Hardcoded strings found:**
- "First post"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/ProductActions.test.tsx

**Hardcoded strings found:**
- "Added!"
- "Add to Cart"
- "ProductActions"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/QuoteWizard.test.tsx

**Hardcoded strings found:**
- "loads services and advances to step 2"
- "shows error and allows retry"
- "recovers after a transient error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/RecommendationsPageSnapshot.test.tsx

**Hardcoded strings found:**
- "RecommendationsPage renders header"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/RegisterApi.jest.test.ts

**Hardcoded strings found:**
- "successful registration returns 201 with token and user"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/RegisterApi.test.ts

**Hardcoded strings found:**
- "User already registered"
- "returns 201 on success"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/RegisterRoute.test.tsx

**Hardcoded strings found:**
- "First name"
- "register route shows signup form"
- "/register"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/RegistrationForm.test.tsx

**Hardcoded strings found:**
- "Bad"
- "John Doe"
- "RegistrationForm"
- "Account created"
- "shows error toast on server 400"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/RequestQuotePage.test.tsx

**Hardcoded strings found:**
- "renders quote wizard without runtime errors"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/RequestQuoteSnapshot.test.tsx

**Hardcoded strings found:**
- "RequestQuote page renders header"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/RewardsWidget.test.tsx

**Hardcoded strings found:**
- "RewardsWidget"
- "shows login modal when not authenticated"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/RootErrorBoundary.test.tsx

**Hardcoded strings found:**
- "Something went wrong"
- "Reload"
- "react-error-boundary"
- "shows fallback and logs error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/SearchAPI.test.ts

**Hardcoded strings found:**
- "applies minimum rating filter"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/ServiceSlugRoute.test.ts

**Hardcoded strings found:**
- "../pages/services/[slug]"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/ServiceTypeStep.test.tsx

**Hardcoded strings found:**
- "Services"
- "hides skeleton once services load"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/ServicesNavigation.test.tsx

**Hardcoded strings found:**
- "Services"
- "Services navigation links"
- "MainNavigation Services link navigates to /services"
- "Explore Services button navigates to /services"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/ServicesPage.test.tsx

**Hardcoded strings found:**
- "Test Service"
- "shows error and allows retry"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/Signup.test.tsx

**Hardcoded strings found:**
- "Success"
- "John Doe"
- "next/router"
- "next/head"
- "Signup form"
- "shows validation errors"
- "Account created successfully!"
- "Welcome to the platform. You can now log in."
- "/login"
- "shows error toast and alert on general failure"
- "Signup failed"
- "error-alert"
- "clears error message when form is resubmitted"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/SkipLink.test.tsx

**Hardcoded strings found:**
- "Main"
- "Content"
- "SkipLink accessibility"
- "AppLayout includes SkipLink"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/TalentProfilePage.test.tsx

**Hardcoded strings found:**
- "TalentProfilePage"
- "fetches and displays profile name"
- "profile-name"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/ViewModeContext.test.tsx

**Hardcoded strings found:**
- "List view"
- "toggle state updates and class applied"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/WalletPage.test.tsx

**Hardcoded strings found:**
- "WalletPage"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/__mocks__/@sentry/nextjs.js

**Hardcoded strings found:**
- "BrowserTracing"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/__mocks__/next-cloudinary.js

**Hardcoded strings found:**
- "Upload"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/accessibility-issue-17.test.tsx

**Hardcoded strings found:**
- "Button Text"
- "Search"
- "User profile"
- "Test User"
- "UserProfileDropdown: Proper ARIA attributes"
- "Test Service"
- "Test Category"
- "Keyboard navigation follows accessibility standards"
- "Icon Accessibility Patterns"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/apiClient.msw.test.ts

**Hardcoded strings found:**
- "Unexpected error – please try again later."
- "Unauthorized"
- "Server err"
- "Network Error"
- "Invalid data"
- "Not Found"
- "Server Error"
- "VALIDATION_ERROR"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/apiClient.test.ts

**Hardcoded strings found:**
- "Unexpected error – please try again later."
- "Bad"
- "handles other errors"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/apiErrorHandler.test.ts

**Hardcoded strings found:**
- "Network Error"
- "Unexpected error – please try again later."
- "Server err"
- "Invalid data"
- "handles validation error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/auth0-signup-fix.test.js

**Hardcoded strings found:**
- "Auth service not configured"
- "Authentication service not configured"
- "Connection error to authentication service"
- "Environment Variable Validation"
- "generateAuth0Secret creates valid secret"
- "Configuration File Handling"
- "Signup Flow Validation"
- "Kal Catrao"
- "signup success response structure"
- "signup error response structure"
- "Environment Setup Validation"
- "Auth0 secret generation is cryptographically secure"
- "Integration Test Scenarios"
- "Environment configured"
- "Health check passes"
- "Signup form accessible"
- "Error Recovery Scenarios"
- "error messages guide user to correct configuration"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/authController.test.ts

**Hardcoded strings found:**
- "loginUser controller"
- "returns token and user on success"
- "calls next with 401 on bad credentials"
- "calls next with 403 on inactive account"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/authService.test.ts

**Hardcoded strings found:**
- "Server error. Please try again later."
- "loginUser service"
- "returns data on success"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/cart-localization.test.tsx

**Hardcoded strings found:**
- "Tu carrito está vacío"
- "Ilustración de carrito de compras vacío"
- "El carrito está vacío"
- "All required translation keys exist in Spanish"
- "Translation consistency - no hardcoded English text"
- "Alt text changes when language is switched"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/cartSlice.test.ts

**Hardcoded strings found:**
- "clears cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/devtools.test.ts

**Hardcoded strings found:**
- "adds outlines in development"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/e2e/login-error-banner.spec.ts

**Hardcoded strings found:**
- "shows error banner on failed login"
- "Unauthorized"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/e2e/login-error-toast.spec.ts

**Hardcoded strings found:**
- "shows toast on failed login"
- "Unauthorized"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/e2e/login.spec.ts

**Hardcoded strings found:**
- "shows toast on failed login"
- "Unauthorized"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/e2e/logout.spec.ts

**Hardcoded strings found:**
- "user can logout via avatar menu"
- "/auth/login"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/e2e/public-marketplace.spec.ts

**Hardcoded strings found:**
- "Add to Cart"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/e2e/searchbar.mobile.spec.ts

**Hardcoded strings found:**
- "/search"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/e2e/searchbar.position.spec.ts

**Hardcoded strings found:**
- "search suggestions appear below the nav"
- "/search"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/e2e/sentry-api.spec.ts

**Hardcoded strings found:**
- "Sentry event not found within 30 seconds"
- "Sentry test error endpoint sends error to Sentry"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/e2e/user-flow.spec.ts

**Hardcoded strings found:**
- "Test User"
- "Address"
- "Testville"
- "Testland"
- "user can signup, login, checkout and read blog"
- "/auth/register"
- "/auth/login"
- "Country"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/forgot-password.test.tsx

**Hardcoded strings found:**
- "Server error"
- "next/link"
- "ForgotPasswordPage fetch failure"
- "shows alert and logs error on 500"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/hello.pact.js

**Hardcoded strings found:**
- "Hello world"
- "HelloService contract"
- "GET /hello"
- "Hello endpoint returns greeting"
- "a request for hello message"
- "returns hello message"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/hello.provider.test.js

**Hardcoded strings found:**
- "HelloService"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/login-redirect-fix.test.tsx

**Hardcoded strings found:**
- "Please login to continue"
- "Navigation failed"
- "next/router"
- "next/head"
- "LoginRedirect Component"
- "should redirect to /auth/login without query parameters"
- "/dashboard"
- "should display loading state while redirecting"
- "Redirecting to login..."
- "should provide fallback link if redirect fails"
- "Navigation Link Updates"
- "should verify login links use Auth0 route"
- "Iniciar Sesión"
- "Edge Cases"
- "/search?q=AI & Machine Learning"
- "Error Handling"
- "should provide manual fallback if JavaScript is disabled"
- "/auth/login"
- "Performance"
- "Backward Compatibility"
- "User Experience"
- "should show appropriate loading message"
- "should provide clear fallback instructions"
- "If you"
- "should have proper loading spinner"
- "Security"
- "should not expose sensitive information in redirect"
- "should use replace() instead of push() to prevent back button issues"
- "Route Resolution"
- "should verify all login routes point to Auth0"
- "should handle login flow end-to-end"
- "Multi-language Support"
- "should support Spanish login button"
- "Sign In"
- "${loginRoute}?locale=${locale}"
- "Mobile Support"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/page-crashes-fix.test.tsx

**Hardcoded strings found:**
- "Test Page Content"
- "Test error for error boundary"
- "Auth0 environment variables are not configured"
- "Test Page"
- "page-error-boundary"
- "Environment Configuration"
- "Page Error Boundary"
- "should render children when no error occurs"
- "should handle Auth0 configuration errors specifically"
- "should detect different types of configuration errors"
- "Environment File Validation"
- "Page Loading Validation"
- "Error Recovery"
- "Try Again"
- "Contact Support"
- "should provide support contact information"
- "Production Configuration"
- "Regular Web Application"
- "Issue Resolution Validation"
- "Environment configuration fix"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/pages/index.test.tsx

**Hardcoded strings found:**
- "Something went wrong"
- "ErrorBoundary integration"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/quoteWizard.pact.js

**Hardcoded strings found:**
- "services exist"
- "returns a list of services"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/slugify.test.ts

**Hardcoded strings found:**
- "Crème Brûlée"
- "Multi Word Title"
- "Multiple   Words"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/storybook/Pagination.visual.test.ts

**Hardcoded strings found:**
- "Pagination five page view"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/supabaseSafeFetch.test.ts

**Hardcoded strings found:**
- "Network error"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/usePostsByCategory.test.tsx

**Hardcoded strings found:**
- "Test"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### tests/visual-regression.test.ts

**Hardcoded strings found:**
- "Homepage visual regression"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

### types/next/index.d.ts

**Hardcoded strings found:**
- "Promise"

**Action needed:**
1. Add `import { useTranslation } from 'react-i18next';`
2. Add `const { t } = useTranslation();` in the component
3. Replace hardcoded strings with `t('key')` calls

## 🟡 Medium Priority - Files with Partial Translation

These files use translations but still have some hardcoded strings:

### pages/404.tsx

**Remaining hardcoded strings:**
- "Go Back"
- "Explore Our Marketplace"
- "Browse Marketplace"
- "Find Talent"
- "Browse Categories"
- "Get Help"
- "next/link"
- "errors.page_not_found"
- "errors.return_home"
- "errors.go_to_marketplace"
- "bg-zion-blue-dark/50 backdrop-blur-sm rounded-2xl border border-zion-blue-light p-6 mb-8"

### src/components/BenefitsSection.tsx

**Remaining hardcoded strings:**
- "react-i18next"

### src/components/CategoriesSection.tsx

**Remaining hardcoded strings:**
- "next/link"
- "categories.services"
- "Briefcase"
- "Users"
- "HardDrive"
- "Lightbulb"
- "categories.it_onsite_services"
- "home.no_categories_title"
- "home.no_categories_desc"
- "home.no_categories_support"
- "home.categories_title"
- "home.categories_subtitle"
- "home.featured_services"
- "home.view_all_categories"

### src/components/HeroSection.tsx

**Remaining hardcoded strings:**
- "next/link"
- "home.hero_title"
- "home.hero_subtitle"
- "home.browse_marketplace"

### src/components/HowItWorksSection.tsx

**Remaining hardcoded strings:**
- "react-i18next"
- "home.how_it_works_title"
- "home.how_it_works_subtitle"

### src/components/LanguageSwitcher.tsx

**Remaining hardcoded strings:**
- "Enter"
- "ArrowDown"

### src/components/NotFound.tsx

**Remaining hardcoded strings:**
- "next/link"
- "react-i18next"
- "errors.page_not_found"
- "errors.forgot_password_prompt"
- "errors.reset_password"
- "errors.or_return_home"

### src/components/QuoteFormSection.tsx

**Remaining hardcoded strings:**
- "quote_form.submit_another"
- "quote_form.labels.additional_details"
- "quote_form.submit"

### src/components/SocialShareSection.tsx

**Remaining hardcoded strings:**
- "Share Zion with Your Network"
- "Help others discover the future of AI & tech marketplace"
- "The link has been copied to your clipboard"
- "errors.failed_to_copy"
- "Twitter"
- "Facebook"
- "LinkedIn"
- "Copy Link"

### src/components/cart/MiniCartPreview.tsx

**Remaining hardcoded strings:**
- "cart.subtotal"

### src/components/header/Header.tsx

**Remaining hardcoded strings:**
- "Login"
- "Sign up"
- "next/link"
- "react-i18next"
- "/search?q=${encodeURIComponent(trimmed)}"
- "Search navigation failed"
- "sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"
- "Header search suggestion selected:"
- "/auth/login"

### src/components/header/LanguageSelector.tsx

**Remaining hardcoded strings:**
- "LanguageSelector: Error changing language:"

### src/components/header/MobileMenu.tsx

**Remaining hardcoded strings:**
- "Menu"
- "Close menu"
- "next/link"
- "/dashboard"

### src/components/home/AllFeaturesSection.tsx

**Remaining hardcoded strings:**
- "next/link"
- "home.all_features_title"
- "Explore All Features"

### src/components/home/FeatureCTAs.tsx

**Remaining hardcoded strings:**
- "next/link"
- "/services"
- "home.features_heading"
- "home.features_subheading"

### src/components/home/ITServiceRequestHero.tsx

**Remaining hardcoded strings:**
- "Zion logo"
- "Full name"
- "Company name"
- "Service address or city"
- "Briefly describe the issue or equipment"
- "Missing Information"
- "Request received"
- "Submission Failed"
- "There was an error submitting your request."
- "Enter the main contact for this request."
- "Include a direct line for urgent updates."

### src/components/home/QuickAccess.tsx

**Remaining hardcoded strings:**
- "next/link"
- "home.tool_ai_matcher"
- "home.tool_ai_matcher_desc"
- "home.tool_talent"
- "home.tool_talent_desc"
- "home.tool_services"
- "home.tool_services_desc"
- "/services"
- "home.tool_equipment"
- "home.tool_equipment_desc"
- "home.tool_chat_desc"
- "home.tool_mobile_app"
- "Mobile App"
- "home.tool_mobile_app_desc"
- "Zion on the go"
- "home.quick_access_title"
- "Quick Access"
- "home.quick_access_subtitle"
- "Jump directly to our most popular features"

### src/components/jobs/TranslatableJobForm.tsx

**Remaining hardcoded strings:**
- "Error translating ${field}:"
- "translation.unknown_error"
- "translation.translation_success"
- "jobs.submitting"

### src/components/marketplace/EmptyState.tsx

**Remaining hardcoded strings:**
- "If this issue continues, please contact our support team."
- "next/link"
- "Login to Add Product"
- "Try Again"
- "Reset Filters"
- "Clear Search"
- "Retry"
- "No Categories Found"
- "No Talent Profiles"
- "No talent profiles match your criteria. Try adjusting your filters or search terms."
- "No Equipment Available"
- "Equipment listings are being updated. Please check back soon for the latest hardware offerings."
- "Try adjusting your search terms or browse our categories to discover what we have available."
- "Unable to Load Data"
- "Connection Issue"
- "Loading..."

### src/components/navigation/ResponsiveNavigation.tsx

**Remaining hardcoded strings:**
- "next/link"
- "Home"
- "Marketplace"
- "Overview"
- "Categories"
- "Talent"
- "Equipment"
- "Community"
- "Blog"
- "Partners"
- "Resources"
- "Docs"
- "Tutorials"
- "Case Studies"
- "About"
- "Dashboard"

### src/components/search/EnhancedSearchInput.tsx

**Remaining hardcoded strings:**
- "Search..."
- "Clear search"
- "Failed to fetch suggestions"
- "general.search"
- "ArrowDown"

### src/context/LanguageContext.tsx

**Remaining hardcoded strings:**
- "Promise"
- "LanguageContext: Error setting initial language in i18n"
- "LanguageContext: Error changing language:"
- "Error"
- "Failed to change language"

### src/hooks/useTranslationService.ts

**Remaining hardcoded strings:**
- "Translation error:"
- "Translation service error:"
- "Unknown translation error"

### src/layout/AppHeader.tsx

**Remaining hardcoded strings:**
- "Main navigation"
- "next/link"
- "auth.login"
- "Messaging context not available"
- "sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md"
- "home.header_tagline"
- "/auth/login"
- "login-link"
- "absolute inset-0 bg-black/50 backdrop-blur-sm"

### src/layout/MainNavigation.tsx

**Remaining hardcoded strings:**
- "Toggle navigation"
- "Main navigation"
- "Wishlist"
- "Wallet"
- "Messages"
- "next/link"
- "nav.cart"
- "/talent-dashboard"
- "/dashboard"
- "/client-dashboard"
- "/cart"
- "Cart"

### src/layout/PrimaryNav.tsx

**Remaining hardcoded strings:**
- "Primary"
- "next/link"
- "Search navigation failed"
- "/search?q=${encodeURIComponent(trimmed)}"
- "sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md"
- "PrimaryNav search suggestion selected:"
- "/auth/login"
- "login-link"
- "auth.login"
- "absolute inset-0 bg-black/50 backdrop-blur-sm"

### src/pages/Cart.tsx

**Remaining hardcoded strings:**
- "Browse Equipment"
- "All transactions are encrypted and secure"
- "Fast Shipping"
- "Your Cart"
- "Add to Wishlist"
- "Order Summary"
- "Estimated Tax"
- "Shipping"
- "Total"
- "Proceed to Checkout"
- "SSL Encrypted Checkout"
- "next/link"
- "Session ID missing in response"
- "Stripe redirect error:"
- "Checkout error:"
- "Checkout failed"
- "Added to wishlist"

### src/pages/Home.tsx

**Remaining hardcoded strings:**
- "Zion Tech Marketplace - Discover Innovative Tech Solutions"
- "min-h-screen bg-background"
- "home-greeting"

### src/pages/LandingPage.tsx

**Remaining hardcoded strings:**
- "next/link"
- "home.tool_ai_matcher"
- "home.tool_ai_matcher_desc"
- "home.tool_talent"
- "home.tool_talent_desc"
- "home.tool_services"
- "home.tool_services_desc"
- "/services"
- "home.tool_equipment"
- "home.tool_equipment_desc"
- "home.tool_analytics"
- "home.tool_analytics_desc"
- "Mobile App"
- "Take Zion with you on the go with our mobile app for iOS and Android"
- "home.seo_title"
- "home.seo_description"
- "home.explore_tools"
- "home.tools_description"

### src/pages/Marketplace.tsx

**Remaining hardcoded strings:**
- "Avg Price"
- "Avg Rating"
- "Categories"
- "All Categories"
- "Newest First"
- "Price: Low to High"
- "Price: High to Low"
- "Highest Rated"
- "Most Popular"
- "Any"
- "Any Availability"
- "Try Again"
- "Featured"
- "Failed to navigate to checkout:"
- "Recommended"
- "Admin Access Required"
- "500 Server error"
- "Server Error"
- "Filters updated"
- "marketplace-loading"
- "Navigation Error"
- "loading-${i}"

### src/pages/MarketplacePage.tsx

**Remaining hardcoded strings:**
- "Avg Price"
- "Avg Rating"
- "Available"
- "All Categories"
- "Newest First"
- "Price: Low to High"
- "Price: High to Low"
- "Highest Rated"
- "Most Popular"
- "View Details"
- "Unable to load marketplace"
- "Try Again"
- "Add to cart"
- "Marketplace - Zion Tech Marketplace Solutions & Services"
- "Failed to load marketplace data. Please try again."
- "View Cart"
- "Recommended"
- "add-to-cart-listing-button"
- ").getTime() - new Date(a.createdAt ||"
- "Cloud Services"
- "Added to cart"
- "/cart"

### src/pages/NotFound.tsx

**Remaining hardcoded strings:**
- "next/link"
- "errors.page_not_found"
- "errors.return_home"

### src/pages/Partners.tsx

**Remaining hardcoded strings:**
- "next/link"
- "Partner login auth health check failed"
- "PartnersPage rendering Unauthenticated View"
- "partner.steps.share_title"
- "partner.steps.share_desc"
- "/login"
- "partner.login"
- "partner.login_unavailable"
- "partner.dashboard_title"
- "partner.dashboard_desc"

### src/pages/TranslationManager.tsx

**Remaining hardcoded strings:**
- "General"
- "Admin"
- "Error translating key ${key}:"
- "translation.unknown_error"
- "translation.search_placeholder"
- "translation.saved"
- "translation.translation_success"
- "general.save"
- "general.cancel"
- "translation.edit"

### src/pages/Unauthorized.tsx

**Remaining hardcoded strings:**
- "next/link"
- "errors.access_denied"
- "errors.no_permission"
- "errors.return_home"
- "/auth/login"
- "errors.login_different_account"

### src/pages/payment-success.tsx

**Remaining hardcoded strings:**
- "errors.payment_success_title"
- "errors.payment_success_message"
- "/dashboard"
- "errors.go_to_dashboard"
- "errors.return_home"

### tests/accessibility-comprehensive.test.tsx

**Remaining hardcoded strings:**
- "next/router"
- "Test User"
- "@/context/CartContext"
- "react-i18next"
- "Icon Accessibility"
- "Mobile navigation icons are properly marked as decorative"
- "Navigation Dropdown Accessibility"
- "Dropdown triggers have proper ARIA attributes"
- "Keyboard navigation works correctly"
- "Tab navigation works properly"
- "Focus indicators are visible"
- "Screen Reader Support"
- "Hidden content is properly marked"
- "Responsive Accessibility"
- "Mobile navigation maintains accessibility"
- "Language switcher works on mobile"
- "Error Prevention and Recovery"
- "Invalid states are announced"
- "Loading states are accessible"

### tests/responsive-320px.test.tsx

**Remaining hardcoded strings:**
- "Test content"
- "This is a very long text that should wrap properly on narrow screens without causing horizontal overflow issues"
- "Twitter"
- "LinkedIn"
- "Facebook"
- "Instagram"
- "GitHub"
- "react-i18next"
- "PrimaryNav renders without horizontal overflow"
- "Search form uses responsive width at small screens"
- "Footer columns stack properly at narrow width"
- "Marketplace"
- "Footer social icons wrap correctly"
- "Footer newsletter section is responsive"
- "Footer legal links wrap properly"
- "Privacy Policy"
- "Responsive utility classes exist"
- "Container has proper responsive padding"
- "Touch Target Accessibility"
- "Buttons meet minimum touch target size"
- "Text Wrapping and Overflow"
- "Long text content wraps properly"
- "Search Dropdown Responsiveness"
- "Search dropdown constrains to viewport width"
- "search-dropdown"
- "Footer columns stack without poor layout"
- "Company"
- "Newsletter"
- "Flex-wrap behavior works correctly"

## All Hardcoded Strings (5986)

Here are all unique hardcoded strings found that should be translated:

1. "$5 Platform Credit" → `t('5_platform_credit')`
2. "${equipment.name} has been added to your cart." → `t('equipmentname_has_been_added_t')`
3. "${error.substring(0, 100)}..." → `t('errorsubstring0_100')`
4. "${errorMessage}: ${e.message}" → `t('errormessage_emessage')`
5. "${listing.title} has been added to your cart" → `t('listingtitle_has_been_added_to')`
6. "${loginRoute}?locale=${locale}" → `t('loginroutelocalelocale')`
7. "${productTitle} has been added to your cart" → `t('producttitle_has_been_added_to')`
8. "${profile.professional_title} - ${profile.bio ||" → `t('profileprofessionaltitle_profi')`
9. "${profile.professional_title} with ${profile.years_experience || 0} years experience" → `t('profileprofessionaltitle_with_')`
10. "${profile.professional_title} with ${profile.years_experience} years of experience" → `t('profileprofessionaltitle_with_')`
11. "${profileData.full_name} | Talent Profile" → `t('profiledatafullname_talent_pro')`
12. "${profileData.full_name} | Zion AI Marketplace" → `t('profiledatafullname_zion_ai_ma')`
13. "${profileName} has been added to your favorites" → `t('profilename_has_been_added_to_')`
14. "(${activeFiltersCount})" → `t('activefilterscount')`
15. "(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g," → `t('searchtermreplaceg')`
16. "(This should only apply to non-K8s services)." → `t('this_should_only_apply_to_nonk')`
17. ").filter(line => line.trim() !==" → `t('filterline_linetrim_')`
18. ").getTime() - new Date(a.createdAt ||" → `t('gettime_new_dateacreatedat_')`
19. ")}/cancel" → `t('cancel')`
20. ", { message: result.error });" → `t('_message_resulterror_')`
21. "../pages/services/[slug]" → `t('pagesservicesslug')`
22. "./ContactPublisherModal" → `t('contactpublishermodal')`
23. "./LoginCard" → `t('logincard')`
24. "./logError" → `t('logerror')`
25. "/?forceError=1" → `t('forceerror1')`
26. "/_next/" → `t('next')`
27. "/_next/image" → `t('nextimage')`
28. "/_next/static/" → `t('nextstatic')`
29. "/about" → `t('about')`
30. "/admin/services" → `t('adminservices')`
31. "/auth/login" → `t('authlogin')`
32. "/auth/login${queryString}" → `t('authloginquerystring')`
33. "/auth/login?returnTo=" → `t('authloginreturnto')`
34. "/auth/login?returnTo=${encodeURIComponent(currentPath)}" → `t('authloginreturntoencodeuricomp')`
35. "/auth/login?returnTo=${encodeURIComponent(router.asPath)}" → `t('authloginreturntoencodeuricomp')`
36. "/auth/login?returnTo=${returnTo}" → `t('authloginreturntoreturnto')`
37. "/auth/login?returnTo=/equipment&reco=1" → `t('authloginreturntoequipmentreco')`
38. "/auth/login?returnTo=/equipment/recommendations" → `t('authloginreturntoequipmentreco')`
39. "/auth/register" → `t('authregister')`
40. "/book-store (Zion hardcover print + linkable chapters)" → `t('bookstore_zion_hardcover_print')`
41. "/cart" → `t('cart')`
42. "/category/services" → `t('categoryservices')`
43. "/checkout" → `t('checkout')`
44. "/checkout/${p.id}" → `t('checkoutpid')`
45. "/checkout/:id" → `t('checkoutid')`
46. "/checkout?sku=${serviceId}" → `t('checkoutskuserviceid')`
47. "/client-dashboard" → `t('clientdashboard')`
48. "/community/edit/${post.id}" → `t('communityeditpostid')`
49. "/contact" → `t('contact')`
50. "/content/about" → `t('contentabout')`
51. "/create-profile" → `t('createprofile')`
52. "/create-talent-profile" → `t('createtalentprofile')`
53. "/creator-dashboard" → `t('creatordashboard')`
54. "/dashboard" → `t('dashboard')`
55. "/dashboard/client/analytics" → `t('dashboardclientanalytics')`
56. "/dashboard/disputes" → `t('dashboarddisputes')`
57. "/dashboard/disputes/${dispute.id}" → `t('dashboarddisputesdisputeid')`
58. "/dashboard/disputes/${disputeId}" → `t('dashboarddisputesdisputeid')`
59. "/dashboard/talent/applications" → `t('dashboardtalentapplications')`
60. "/dashboard/talent/portfolio" → `t('dashboardtalentportfolio')`
61. "/developers/docs/errors" → `t('developersdocserrors')`
62. "/download" → `t('download')`
63. "/error" → `t('error')`
64. "/founder-dashboard" → `t('founderdashboard')`
65. "/founder/backup" → `t('founderbackup')`
66. "/governance/create" → `t('governancecreate')`
67. "/hello" → `t('hello')`
68. "/it-onsite-services/${slugify(country.country)}?service=standard" → `t('itonsiteservicesslugifycountry')`
69. "/jobs/${job.id}/edit" → `t('jobsjobidedit')`
70. "/login" → `t('login')`
71. "/login?returnTo=${encodeURIComponent(" → `t('loginreturntoencodeuricomponen')`
72. "/mobile/profile" → `t('mobileprofile')`
73. "/nations/${slug}/dashboard" → `t('nationsslugdashboard')`
74. "/profile" → `t('profile')`
75. "/profile/${profileId}" → `t('profileprofileid')`
76. "/random-error" → `t('randomerror')`
77. "/register" → `t('register')`
78. "/search" → `t('search')`
79. "/search?q=${encodeURIComponent(term)}" → `t('searchqencodeuricomponentterm')`
80. "/search?q=${encodeURIComponent(trimmed)}" → `t('searchqencodeuricomponenttrimm')`
81. "/search?q=AI & Machine Learning" → `t('searchqai_machine_learning')`
82. "/service-dashboard" → `t('servicedashboard')`
83. "/services" → `t('services')`
84. "/settings" → `t('settings')`
85. "/settings/account" → `t('settingsaccount')`
86. "/talent-dashboard" → `t('talentdashboard')`
87. "/test-error-mount" → `t('testerrormount')`
88. "/test-error-render" → `t('testerrorrender')`
89. "1× ${listing.title} added" → `t('1_listingtitle_added')`
90. "1× ${product.title} added" → `t('1_producttitle_added')`
91. "3 consecutive performance errors" → `t('3_consecutive_performance_erro')`
92. "3 consecutive security patches" → `t('3_consecutive_security_patches')`
93. "404 Return Home link" → `t('404_return_home_link')`
94. "500 - Server Error" → `t('500_server_error')`
95. "500 Server error" → `t('500_server_error')`
96. "<p>If you have questions about these Terms, please contact us at <a href=" → `t('pif_you_have_questions_about_t')`
97. "<p>Thank you for your purchase. Total ${order.total}.</p>" → `t('pthank_you_for_your_purchase_t')`
98. "<p>When you create an account you must provide accurate information and keep your login credentials confidential. You are responsible for all activity under your account.</p>" → `t('pwhen_you_create_an_account_yo')`
99. "@/context/CartContext" → `t('contextcartcontext')`
100. "@/pages/AICoreDashboard" → `t('pagesaicoredashboard')`
101. "@/pages/Checkout" → `t('pagescheckout')`
102. "@/pages/CheckoutPage" → `t('pagescheckoutpage')`
103. "@/pages/Dashboard" → `t('pagesdashboard')`
104. "@/pages/Profile" → `t('pagesprofile')`
105. "@/pages/ServicesPage" → `t('pagesservicespage')`
106. "@/pages/creator-dashboard" → `t('pagescreatordashboard')`
107. "@/pages/dev/dashboard" → `t('pagesdevdashboard')`
108. "@/pages/talent-dashboard" → `t('pagestalentdashboard')`
109. "@/services/auth" → `t('servicesauth')`
110. "@/services/authService" → `t('servicesauthservice')`
111. "@/types/profile" → `t('typesprofile')`
112. "@/utils/withErrorLogging" → `t('utilswitherrorlogging')`
113. "@storybook/addon-a11y" → `t('storybookaddona11y')`
114. "@storybook/addon-essentials" → `t('storybookaddonessentials')`
115. "A background request encountered an issue (Not Found). If you see this after a successful action, the action likely completed." → `t('a_background_request_encounter')`
116. "A network error occurred. Please check your internet connection and try again." → `t('a_network_error_occurred_pleas')`
117. "AI & IT services" → `t('ai_it_services')`
118. "AI Dashboard Development" → `t('ai_dashboard_development')`
119. "AI Matcher home card" → `t('ai_matcher_home_card')`
120. "AI Research Engineer" → `t('ai_research_engineer')`
121. "AI Research Scientist" → `t('ai_research_scientist')`
122. "AI Researcher" → `t('ai_researcher')`
123. "AI Video Editing Suite" → `t('ai_video_editing_suite')`
124. "AI has created optimized listing content for you." → `t('ai_has_created_optimized_listi')`
125. "AI services" → `t('ai_services')`
126. "AI-Powered Business Intelligence Dashboard" → `t('aipowered_business_intelligenc')`
127. "AI-Powered Search" → `t('aipowered_search')`
128. "AbortError" → `t('aborterror')`
129. "About" → `t('about')`
130. "About - Zion" → `t('about_zion')`
131. "About Me" → `t('about_me')`
132. "About Us" → `t('about_us')`
133. "About Your Services" → `t('about_your_services')`
134. "About Yourself" → `t('about_yourself')`
135. "About Zion" → `t('about_zion')`
136. "About Zion - The Future of AI & Tech Marketplace" → `t('about_zion_the_future_of_ai_te')`
137. "Abstain" → `t('abstain')`
138. "Accept" → `t('accept')`
139. "Accept Offer" → `t('accept_offer')`
140. "Accepted" → `t('accepted')`
141. "Accepted Answer" → `t('accepted_answer')`
142. "Accepted payment methods" → `t('accepted_payment_methods')`
143. "Access" → `t('access')`
144. "Access Denied" → `t('access_denied')`
145. "Access Restricted" → `t('access_restricted')`
146. "Access cutting-edge AI models with easy integration" → `t('access_cuttingedge_ai_models_w')`
147. "Access cutting-edge technology with flexible options to buy, rent or lease the gear you need." → `t('access_cuttingedge_technology_')`
148. "Access denied" → `t('access_denied')`
149. "Access denied - insufficient permissions" → `t('access_denied_insufficient_per')`
150. "Access to view job listings" → `t('access_to_view_job_listings')`
151. "Access to view talent profiles" → `t('access_to_view_talent_profiles')`
152. "Account" → `t('account')`
153. "Account Created Successfully!" → `t('account_created_successfully')`
154. "Account Settings" → `t('account_settings')`
155. "Account created" → `t('account_created')`
156. "Account created successfully!" → `t('account_created_successfully')`
157. "Account inactive" → `t('account_inactive')`
158. "Acme AI Solutions" → `t('acme_ai_solutions')`
159. "Acme Corp" → `t('acme_corp')`
160. "Acme Corporation" → `t('acme_corporation')`
161. "Acme University" → `t('acme_university')`
162. "Action" → `t('action')`
163. "Actioned" → `t('actioned')`
164. "Actioned Flags" → `t('actioned_flags')`
165. "Actions" → `t('actions')`
166. "Actions Taken" → `t('actions_taken')`
167. "Activate" → `t('activate')`
168. "Active" → `t('active')`
169. "Active Applications" → `t('active_applications')`
170. "Active Job Listings" → `t('active_job_listings')`
171. "Active Only" → `t('active_only')`
172. "Active Partners" → `t('active_partners')`
173. "Active Quotes" → `t('active_quotes')`
174. "Active filters:" → `t('active_filters')`
175. "Active resume set" → `t('active_resume_set')`
176. "Activity" → `t('activity')`
177. "Activity Monitoring" → `t('activity_monitoring')`
178. "Activity logs and notes" → `t('activity_logs_and_notes')`
179. "Activity monitoring" → `t('activity_monitoring')`
180. "Activity will be shown here" → `t('activity_will_be_shown_here')`
181. "Add" → `t('add')`
182. "Add Admin Note" → `t('add_admin_note')`
183. "Add Another Education" → `t('add_another_education')`
184. "Add Another Experience" → `t('add_another_experience')`
185. "Add Another Skill" → `t('add_another_skill')`
186. "Add Milestone" → `t('add_milestone')`
187. "Add Payment Method" → `t('add_payment_method')`
188. "Add Screenshot" → `t('add_screenshot')`
189. "Add Selected to Project" → `t('add_selected_to_project')`
190. "Add Slide (AI)" → `t('add_slide_ai')`
191. "Add Talent" → `t('add_talent')`
192. "Add Test Product" → `t('add_test_product')`
193. "Add Webhook" → `t('add_webhook')`
194. "Add Your Own" → `t('add_your_own')`
195. "Add a comment..." → `t('add_a_comment')`
196. "Add a note or update to the project..." → `t('add_a_note_or_update_to_the_pr')`
197. "Add a service..." → `t('add_a_service')`
198. "Add a skill" → `t('add_a_skill')`
199. "Add a skill..." → `t('add_a_skill')`
200. "Add a webhook endpoint to receive event notifications." → `t('add_a_webhook_endpoint_to_rece')`
201. "Add an AI assistant to your careers page to answer applicant questions." → `t('add_an_ai_assistant_to_your_ca')`
202. "Add an admin note (only visible to administrators)..." → `t('add_an_admin_note_only_visible')`
203. "Add any relevant context to guide the AI..." → `t('add_any_relevant_context_to_gu')`
204. "Add keywords (press Enter or comma to add)" → `t('add_keywords_press_enter_or_co')`
205. "Add keywords to improve discoverability (max 100 characters total)" → `t('add_keywords_to_improve_discov')`
206. "Add more details to your skills and experience" → `t('add_more_details_to_your_skill')`
207. "Add notes" → `t('add_notes')`
208. "Add private notes about this candidate..." → `t('add_private_notes_about_this_c')`
209. "Add relevant tags to help users find your product (e.g., ai, productivity, design)" → `t('add_relevant_tags_to_help_user')`
210. "Add to Cart" → `t('add_to_cart')`
211. "Add to Wishlist" → `t('add_to_wishlist')`
212. "Add to cart" → `t('add_to_cart')`
213. "Add to favorites" → `t('add_to_favorites')`
214. "Add your ${form.watch(" → `t('add_your_formwatch')`
215. "Add your skills" → `t('add_your_skills')`
216. "Add your skills and expertise" → `t('add_your_skills_and_expertise')`
217. "Add your skills to get better job matches" → `t('add_your_skills_to_get_better_')`
218. "Add your skills, experience, and preferences" → `t('add_your_skills_experience_and')`
219. "Add your top skills" → `t('add_your_top_skills')`
220. "Added" → `t('added')`
221. "Added ${p.title} to cart" → `t('added_ptitle_to_cart')`
222. "Added to Cart" → `t('added_to_cart')`
223. "Added to cart" → `t('added_to_cart')`
224. "Added to favorites" → `t('added_to_favorites')`
225. "Added to wishlist" → `t('added_to_wishlist')`
226. "Added!" → `t('added')`
227. "Adding..." → `t('adding')`
228. "Additional Budget Information" → `t('additional_budget_information')`
229. "Additional Clauses" → `t('additional_clauses')`
230. "Additional Details" → `t('additional_details')`
231. "Additional Distribution Details (Text):" → `t('additional_distribution_detail')`
232. "Additional Photos (Optional)" → `t('additional_photos_optional')`
233. "Additional Ratings" → `t('additional_ratings')`
234. "Additional Ratings (Optional)" → `t('additional_ratings_optional')`
235. "Additional Resources" → `t('additional_resources')`
236. "Address" → `t('address')`
237. "Address *" → `t('address_')`
238. "Address warnings" → `t('address_warnings')`
239. "Adjust Tokenomics" → `t('adjust_tokenomics')`
240. "Adjust your rate if needed to be more competitive" → `t('adjust_your_rate_if_needed_to_')`
241. "Admin" → `t('admin')`
242. "Admin Access" → `t('admin_access')`
243. "Admin Access Required" → `t('admin_access_required')`
244. "Admin Actions" → `t('admin_actions')`
245. "Admin Dashboard" → `t('admin_dashboard')`
246. "Admin Dashboards" → `t('admin_dashboards')`
247. "Admin Notes" → `t('admin_notes')`
248. "Admin Pages" → `t('admin_pages')`
249. "Admin avatar" → `t('admin_avatar')`
250. "Adobe Creative Suite" → `t('adobe_creative_suite')`
251. "Advanced" → `t('advanced')`
252. "Advanced Analytics" → `t('advanced_analytics')`
253. "Advanced Data Science Development Suite" → `t('advanced_data_science_developm')`
254. "Advanced Search" → `t('advanced_search')`
255. "Advanced Threat Monitoring" → `t('advanced_threat_monitoring')`
256. "After finding the right talent for your project, it" → `t('after_finding_the_right_talent')`
257. "After the project is marked as completed, both parties will be able to leave reviews" → `t('after_the_project_is_marked_as')`
258. "Agenda" → `t('agenda')`
259. "Airdrop unlock" → `t('airdrop_unlock')`
260. "Alert" → `t('alert')`
261. "Alert Dialog Title" → `t('alert_dialog_title')`
262. "Alert has no accessibility violations" → `t('alert_has_no_accessibility_vio')`
263. "AlertDescription" → `t('alertdescription')`
264. "AlertDialog has no accessibility violations when closed" → `t('alertdialog_has_no_accessibili')`
265. "AlertDialogFooter" → `t('alertdialogfooter')`
266. "AlertDialogHeader" → `t('alertdialogheader')`
267. "AlertTitle" → `t('alerttitle')`
268. "Alex Chen" → `t('alex_chen')`
269. "Alex Rivera" → `t('alex_rivera')`
270. "Alex Zion" → `t('alex_zion')`
271. "Alexandra Chen" → `t('alexandra_chen')`
272. "Algorithmic Impact Assessment" → `t('algorithmic_impact_assessment')`
273. "All" → `t('all')`
274. "All Articles" → `t('all_articles')`
275. "All Availability" → `t('all_availability')`
276. "All Brands" → `t('all_brands')`
277. "All Categories" → `t('all_categories')`
278. "All Countries" → `t('all_countries')`
279. "All Equipment" → `t('all_equipment')`
280. "All Flags" → `t('all_flags')`
281. "All Priorities" → `t('all_priorities')`
282. "All Quotes" → `t('all_quotes')`
283. "All Ratings" → `t('all_ratings')`
284. "All Roles" → `t('all_roles')`
285. "All Services" → `t('all_services')`
286. "All Severities" → `t('all_severities')`
287. "All Specializations" → `t('all_specializations')`
288. "All Statuses" → `t('all_statuses')`
289. "All Teams" → `t('all_teams')`
290. "All Types" → `t('all_types')`
291. "All Zones" → `t('all_zones')`
292. "All fields are required" → `t('all_fields_are_required')`
293. "All required environment variables are set" → `t('all_required_environment_varia')`
294. "All required translation keys exist in Spanish" → `t('all_required_translation_keys_')`
295. "All reviews have been processed. Check back later for new submissions." → `t('all_reviews_have_been_processe')`
296. "All transactions are encrypted and secure" → `t('all_transactions_are_encrypted')`
297. "Allow" → `t('allow')`
298. "Already Logged In" → `t('already_logged_in')`
299. "Already have an account? Sign in" → `t('already_have_an_account_sign_i')`
300. "Already registered" → `t('already_registered')`
301. "Alt text changes when language is switched" → `t('alt_text_changes_when_language')`
302. "Amend Constitution" → `t('amend_constitution')`
303. "American Express" → `t('american_express')`
304. "American Express logo" → `t('american_express_logo')`
305. "Amount" → `t('amount')`
306. "Amount of ZION$ to bridge" → `t('amount_of_zion_to_bridge')`
307. "An application for" → `t('an_application_for')`
308. "An error occurred" → `t('an_error_occurred')`
309. "An error occurred in fetchProductById:" → `t('an_error_occurred_in_fetchprod')`
310. "An error occurred while adding note." → `t('an_error_occurred_while_adding')`
311. "An error occurred while fetching the data." → `t('an_error_occurred_while_fetchi')`
312. "An error occurred while loading project notes." → `t('an_error_occurred_while_loadin')`
313. "An error occurred while loading the page" → `t('an_error_occurred_while_loadin')`
314. "An internal server error occurred while fetching talent profiles" → `t('an_internal_server_error_occur')`
315. "An internal server error occurred. Please try again later." → `t('an_internal_server_error_occur')`
316. "An internal server error occurred..." → `t('an_internal_server_error_occur')`
317. "An unexpected critical error occurred." → `t('an_unexpected_critical_error_o')`
318. "An unexpected error occurred" → `t('an_unexpected_error_occurred')`
319. "An unexpected error occurred during login. Please try again." → `t('an_unexpected_error_occurred_d')`
320. "An unexpected error occurred during password reset." → `t('an_unexpected_error_occurred_d')`
321. "An unexpected error occurred during signup." → `t('an_unexpected_error_occurred_d')`
322. "An unexpected error occurred during signup. Please try again." → `t('an_unexpected_error_occurred_d')`
323. "An unexpected error occurred during submission." → `t('an_unexpected_error_occurred_d')`
324. "An unexpected error occurred during verification." → `t('an_unexpected_error_occurred_d')`
325. "An unexpected error occurred in the application." → `t('an_unexpected_error_occurred_i')`
326. "An unexpected error occurred while checking status. Please try again." → `t('an_unexpected_error_occurred_w')`
327. "An unexpected error occurred while fetching suggestions." → `t('an_unexpected_error_occurred_w')`
328. "An unexpected error occurred while loading marketplace content." → `t('an_unexpected_error_occurred_w')`
329. "An unexpected error occurred while loading the page." → `t('an_unexpected_error_occurred_w')`
330. "An unexpected error occurred while loading this page" → `t('an_unexpected_error_occurred_w')`
331. "An unexpected error occurred." → `t('an_unexpected_error_occurred')`
332. "An unexpected error occurred. Our team has been notified." → `t('an_unexpected_error_occurred_o')`
333. "An unexpected error occurred. Please try again." → `t('an_unexpected_error_occurred_p')`
334. "An unknown authentication error occurred." → `t('an_unknown_authentication_erro')`
335. "An unknown error occurred" → `t('an_unknown_error_occurred')`
336. "An unknown error occurred while creating ZIP." → `t('an_unknown_error_occurred_whil')`
337. "An unknown error occurred." → `t('an_unknown_error_occurred')`
338. "Analysis completed successfully:" → `t('analysis_completed_successfull')`
339. "Analytics" → `t('analytics')`
340. "Analytics Dashboard" → `t('analytics_dashboard')`
341. "Analytics tracking enabled" → `t('analytics_tracking_enabled')`
342. "Android" → `t('android')`
343. "Anna Zhou" → `t('anna_zhou')`
344. "Annual" → `t('annual')`
345. "Annual discount applied" → `t('annual_discount_applied')`
346. "Anonymous" → `t('anonymous')`
347. "Answer" → `t('answer')`
348. "Answer marked" → `t('answer_marked')`
349. "Answer was accepted in" → `t('answer_was_accepted_in')`
350. "Any" → `t('any')`
351. "Any Availability" → `t('any_availability')`
352. "Any Rating" → `t('any_rating')`
353. "Any additional information about budget or payment" → `t('any_additional_information_abo')`
354. "App Metadata" → `t('app_metadata')`
355. "App Metadata Manager" → `t('app_metadata_manager')`
356. "App Not Installed" → `t('app_not_installed')`
357. "App Store" → `t('app_store')`
358. "App Store Rating" → `t('app_store_rating')`
359. "App Store button clicked" → `t('app_store_button_clicked')`
360. "App Title" → `t('app_title')`
361. "App Version" → `t('app_version')`
362. "App screenshot" → `t('app_screenshot')`
363. "AppLayout includes SkipLink" → `t('applayout_includes_skiplink')`
364. "Appendix – Protocol Maps & Timelines" → `t('appendix_protocol_maps_timelin')`
365. "Apple" → `t('apple')`
366. "Apple MacBook" → `t('apple_macbook')`
367. "Apple logo" → `t('apple_logo')`
368. "Applicant" → `t('applicant')`
369. "Applicant data and status" → `t('applicant_data_and_status')`
370. "Application Conversion Rate" → `t('application_conversion_rate')`
371. "Application Deadline" → `t('application_deadline')`
372. "Application Error" → `t('application_error')`
373. "Application ID is required" → `t('application_id_is_required')`
374. "Application Match Score" → `t('application_match_score')`
375. "Application Message" → `t('application_message')`
376. "Application Scored" → `t('application_scored')`
377. "Application Status Distribution" → `t('application_status_distributio')`
378. "Application Status Tracker" → `t('application_status_tracker')`
379. "Application Status Tracker | Zion AI Marketplace" → `t('application_status_tracker_zio')`
380. "Application Submitted" → `t('application_submitted')`
381. "Application Tracker" → `t('application_tracker')`
382. "Application Update Required" → `t('application_update_required')`
383. "Application failed" → `t('application_failed')`
384. "Application not found" → `t('application_not_found')`
385. "Application received" → `t('application_received')`
386. "Application sent" → `t('application_sent')`
387. "Application status updated to ${status}" → `t('application_status_updated_to_')`
388. "Application submitted successfully" → `t('application_submitted_successf')`
389. "Application submitted successfully!" → `t('application_submitted_successf')`
390. "Application submitted!" → `t('application_submitted')`
391. "Applications" → `t('applications')`
392. "Applications to hired ratio" → `t('applications_to_hired_ratio')`
393. "Applied" → `t('applied')`
394. "Applied Jobs" → `t('applied_jobs')`
395. "Apply" → `t('apply')`
396. "Apply Filters" → `t('apply_filters')`
397. "Apply Now" → `t('apply_now')`
398. "Apply Suggestion" → `t('apply_suggestion')`
399. "Apply for this role" → `t('apply_for_this_role')`
400. "Apply this suggestion to your pricing field" → `t('apply_this_suggestion_to_your_')`
401. "Apply to Form" → `t('apply_to_form')`
402. "Apply to My Listing" → `t('apply_to_my_listing')`
403. "Appoint Core Stewards" → `t('appoint_core_stewards')`
404. "Approve" → `t('approve')`
405. "Approve and manage affiliate partners" → `t('approve_and_manage_affiliate_p')`
406. "Approved" → `t('approved')`
407. "Architecture" → `t('architecture')`
408. "Architecture diagrams" → `t('architecture_diagrams')`
409. "Architecture diagrams\nKey governance votes" → `t('architecture_diagramsnkey_gove')`
410. "Archive" → `t('archive')`
411. "Archive Status" → `t('archive_status')`
412. "Archived" → `t('archived')`
413. "Archived Only" → `t('archived_only')`
414. "Archived Quotes" → `t('archived_quotes')`
415. "Are you sure you want to cancel this interview request? This action cannot be undone." → `t('are_you_sure_you_want_to_cance')`
416. "Are you sure you want to cancel this interview? This action cannot be undone and the other party will be notified." → `t('are_you_sure_you_want_to_cance')`
417. "Arial, sans-serif" → `t('arial_sansserif')`
418. "Arista 7050X Series Switch" → `t('arista_7050x_series_switch')`
419. "ArrowDown" → `t('arrowdown')`
420. "ArrowDown cycles through suggestions" → `t('arrowdown_cycles_through_sugge')`
421. "ArrowLeft" → `t('arrowleft')`
422. "ArrowUp cycles through suggestions" → `t('arrowup_cycles_through_suggest')`
423. "Article" → `t('article')`
424. "Article not found" → `t('article_not_found')`
425. "Articles" → `t('articles')`
426. "As a recruiter, this app has saved me countless hours. The talent quality is exceptional and the mobile interface is intuitive." → `t('as_a_recruiter_this_app_has_sa')`
427. "As an expert SEO content writer, generate a comprehensive blog post about" → `t('as_an_expert_seo_content_write')`
428. "Asia" → `t('asia')`
429. "Asia-Pacific" → `t('asiapacific')`
430. "Ask ZionGPT error:" → `t('ask_ziongpt_error')`
431. "Ask the Founder" → `t('ask_the_founder')`
432. "Assign" → `t('assign')`
433. "Associate Degree" → `t('associate_degree')`
434. "Attach Resume" → `t('attach_resume')`
435. "Attach file" → `t('attach_file')`
436. "Attachment" → `t('attachment')`
437. "Audience" → `t('audience')`
438. "Audience Size" → `t('audience_size')`
439. "Audio Narration Script" → `t('audio_narration_script')`
440. "Australia" → `t('australia')`
441. "Auth guard error:" → `t('auth_guard_error')`
442. "Auth guard session error:" → `t('auth_guard_session_error')`
443. "Auth provider not configured" → `t('auth_provider_not_configured')`
444. "Auth service health check failed" → `t('auth_service_health_check_fail')`
445. "Auth service not configured" → `t('auth_service_not_configured')`
446. "Auth0 configuration missing" → `t('auth0_configuration_missing')`
447. "Auth0 domain test failed: ${error.message}" → `t('auth0_domain_test_failed_error')`
448. "Auth0 environment variables are not configured" → `t('auth0_environment_variables_ar')`
449. "Auth0 secret generation is cryptographically secure" → `t('auth0_secret_generation_is_cry')`
450. "Auth0 signup error:" → `t('auth0_signup_error')`
451. "AuthProvider: Supabase authentication failed" → `t('authprovider_supabase_authenti')`
452. "Authenticated User Pages" → `t('authenticated_user_pages')`
453. "Authentication" → `t('authentication')`
454. "Authentication Details" → `t('authentication_details')`
455. "Authentication Error" → `t('authentication_error')`
456. "Authentication Error - Zion Tech Marketplace" → `t('authentication_error_zion_tech')`
457. "Authentication Required" → `t('authentication_required')`
458. "Authentication Service Unavailable" → `t('authentication_service_unavail')`
459. "Authentication error" → `t('authentication_error')`
460. "Authentication error page" → `t('authentication_error_page')`
461. "Authentication failed" → `t('authentication_failed')`
462. "Authentication failed. Please try again." → `t('authentication_failed_please_t')`
463. "Authentication required" → `t('authentication_required')`
464. "Authentication required - please log in" → `t('authentication_required_please')`
465. "Authentication service configuration incomplete" → `t('authentication_service_configu')`
466. "Authentication service is experiencing issues" → `t('authentication_service_is_expe')`
467. "Authentication service not configured" → `t('authentication_service_not_con')`
468. "Authentication successful" → `t('authentication_successful')`
469. "Authentication token not found. Please try logging in again." → `t('authentication_token_not_found')`
470. "Authorization" → `t('authorization')`
471. "Auto Bot" → `t('auto_bot')`
472. "Auto-Deploy Modules" → `t('autodeploy_modules')`
473. "Auto-Prompt Router" → `t('autoprompt_router')`
474. "Auto-Publish" → `t('autopublish')`
475. "Auto-fill Failed" → `t('autofill_failed')`
476. "Auto-invite function for DAO votes" → `t('autoinvite_function_for_dao_vo')`
477. "Auto-layout hardcover edition." → `t('autolayout_hardcover_edition')`
478. "AutocompleteSuggestions" → `t('autocompletesuggestions')`
479. "Automated Code Review Service" → `t('automated_code_review_service')`
480. "Automated Model Optimization" → `t('automated_model_optimization')`
481. "Automated Setup Available" → `t('automated_setup_available')`
482. "Automated screening and ranking saves your team valuable time." → `t('automated_screening_and_rankin')`
483. "Automation" → `t('automation')`
484. "Autonomous Drone Kit" → `t('autonomous_drone_kit')`
485. "Ava Williams" → `t('ava_williams')`
486. "Availability" → `t('availability')`
487. "Available" → `t('available')`
488. "Available Now" → `t('available_now')`
489. "Available Offline Features" → `t('available_offline_features')`
490. "Available Rewards" → `t('available_rewards')`
491. "Available for Work" → `t('available_for_work')`
492. "Avatar preview" → `t('avatar_preview')`
493. "AvatarMenu has no accessibility violations" → `t('avatarmenu_has_no_accessibilit')`
494. "Avaya" → `t('avaya')`
495. "Avaya logo" → `t('avaya_logo')`
496. "Average chunk load time" → `t('average_chunk_load_time')`
497. "Average page load" → `t('average_page_load')`
498. "Average response time: ${avg.toFixed(2)}ms" → `t('average_response_time_avgtofix')`
499. "Avg Experience" → `t('avg_experience')`
500. "Avg Monthly" → `t('avg_monthly')`
501. "Avg Price" → `t('avg_price')`
502. "Avg Rating" → `t('avg_rating')`
503. "Avg. Session" → `t('avg_session')`
504. "Avg. time to hire" → `t('avg_time_to_hire')`
505. "Awaiting Response" → `t('awaiting_response')`
506. "Awaiting review" → `t('awaiting_review')`
507. "Bachelor's Degree" → `t('bachelors_degree')`
508. "Back" → `t('back')`
509. "Back Office" → `t('back_office')`
510. "Back online. Syncing queued actions..." → `t('back_online_syncing_queued_act')`
511. "Back to Blog" → `t('back_to_blog')`
512. "Back to Careers" → `t('back_to_careers')`
513. "Back to Case Studies" → `t('back_to_case_studies')`
514. "Back to Community" → `t('back_to_community')`
515. "Back to Data" → `t('back_to_data')`
516. "Back to Disputes" → `t('back_to_disputes')`
517. "Back to Home" → `t('back_to_home')`
518. "Back to List" → `t('back_to_list')`
519. "Back to Marketplace" → `t('back_to_marketplace')`
520. "Back to Post" → `t('back_to_post')`
521. "Back to Proposals" → `t('back_to_proposals')`
522. "Back to Roadmap" → `t('back_to_roadmap')`
523. "Back to Talent Directory" → `t('back_to_talent_directory')`
524. "Back to Top" → `t('back_to_top')`
525. "Back to Tutorials" → `t('back_to_tutorials')`
526. "Back to all articles" → `t('back_to_all_articles')`
527. "Back to login" → `t('back_to_login')`
528. "Back to orders" → `t('back_to_orders')`
529. "Back to top" → `t('back_to_top')`
530. "Backed up" → `t('backed_up')`
531. "Backend Developer" → `t('backend_developer')`
532. "Background sync replay failed" → `t('background_sync_replay_failed')`
533. "Backup Status" → `t('backup_status')`
534. "Backup your profile data to IPFS/Arweave" → `t('backup_your_profile_data_to_ip')`
535. "Backward Compatibility" → `t('backward_compatibility')`
536. "Bad" → `t('bad')`
537. "Badges" → `t('badges')`
538. "Badges Earned" → `t('badges_earned')`
539. "Ban User" → `t('ban_user')`
540. "Ban user" → `t('ban_user')`
541. "Bank" → `t('bank')`
542. "Bank Transfer" → `t('bank_transfer')`
543. "Banks → Sync KYC for token wallet support" → `t('banks_sync_kyc_for_token_walle')`
544. "Banners" → `t('banners')`
545. "Bar" → `t('bar')`
546. "Base Model" → `t('base_model')`
547. "Basic Hardware Diagnostics" → `t('basic_hardware_diagnostics')`
548. "Basic Information" → `t('basic_information')`
549. "Basic hardware diagnosis" → `t('basic_hardware_diagnosis')`
550. "Basics" → `t('basics')`
551. "Bayer" → `t('bayer')`
552. "Bayer logo" → `t('bayer_logo')`
553. "Be specific about what is included and any limitations" → `t('be_specific_about_what_is_incl')`
554. "Be the first to list a talent" → `t('be_the_first_to_list_a_talent')`
555. "Be the first to post" → `t('be_the_first_to_post')`
556. "Bear market" → `t('bear_market')`
557. "Bearer" → `t('bearer')`
558. "Become a Sponsor" → `t('become_a_sponsor')`
559. "Beginner" → `t('beginner')`
560. "Being actively processed" → `t('being_actively_processed')`
561. "Best Match" → `t('best_match')`
562. "Best Practices" → `t('best_practices')`
563. "Best practices for AI model fine-tuning" → `t('best_practices_for_ai_model_fi')`
564. "Best practices for promoting the Zion AI Marketplace" → `t('best_practices_for_promoting_t')`
565. "Big Data Analyst" → `t('big_data_analyst')`
566. "Billing" → `t('billing')`
567. "Billing & Invoices" → `t('billing_invoices')`
568. "Billing Access" → `t('billing_access')`
569. "Billing Cycle" → `t('billing_cycle')`
570. "Billing Period" → `t('billing_period')`
571. "Bio" → `t('bio')`
572. "Bio must be at least 20 characters long" → `t('bio_must_be_at_least_20_charac')`
573. "Bio must be at least 50 characters long" → `t('bio_must_be_at_least_50_charac')`
574. "Biometric Security" → `t('biometric_security')`
575. "Blank render detection" → `t('blank_render_detection')`
576. "Blockchain Developer" → `t('blockchain_developer')`
577. "Blockchain Development" → `t('blockchain_development')`
578. "Blockchain Integration Consulting" → `t('blockchain_integration_consult')`
579. "Blockchain Powered" → `t('blockchain_powered')`
580. "Blog" → `t('blog')`
581. "Blog - Zion" → `t('blog_zion')`
582. "Blog Post" → `t('blog_post')`
583. "Blog page has no accessibility violations" → `t('blog_page_has_no_accessibility')`
584. "Blog post saved to ${filePath}" → `t('blog_post_saved_to_filepath')`
585. "BlogPosting" → `t('blogposting')`
586. "Booking" → `t('booking')`
587. "Boost your profile visibility" → `t('boost_your_profile_visibility')`
588. "Boost your profile visibility, ${firstName}" → `t('boost_your_profile_visibility_')`
589. "Bot" → `t('bot')`
590. "Brand" → `t('brand')`
591. "Brand Guidelines" → `t('brand_guidelines')`
592. "Brand Name" → `t('brand_name')`
593. "Brand name must be at least 2 characters" → `t('brand_name_must_be_at_least_2_')`
594. "Branded Onboarding" → `t('branded_onboarding')`
595. "Branding" → `t('branding')`
596. "Branding &amp; Customization" → `t('branding_amp_customization')`
597. "Breadcrumb" → `t('breadcrumb')`
598. "BreadcrumbElipssis" → `t('breadcrumbelipssis')`
599. "BreadcrumbLink" → `t('breadcrumblink')`
600. "BreadcrumbList" → `t('breadcrumblist')`
601. "BreadcrumbSeparator" → `t('breadcrumbseparator')`
602. "Bridge Now" → `t('bridge_now')`
603. "Bridging" → `t('bridging')`
604. "Bridging error:" → `t('bridging_error')`
605. "Brief description of your app" → `t('brief_description_of_your_app')`
606. "Brief project description" → `t('brief_project_description')`
607. "Brief title for the interview" → `t('brief_title_for_the_interview')`
608. "Briefcase" → `t('briefcase')`
609. "Briefly describe the issue or equipment" → `t('briefly_describe_the_issue_or_')`
610. "Bronze" → `t('bronze')`
611. "Browse" → `t('browse')`
612. "Browse Cached Equipment" → `t('browse_cached_equipment')`
613. "Browse Categories" → `t('browse_categories')`
614. "Browse Equipment" → `t('browse_equipment')`
615. "Browse Files" → `t('browse_files')`
616. "Browse Jobs" → `t('browse_jobs')`
617. "Browse Marketplace" → `t('browse_marketplace')`
618. "Browse Talent" → `t('browse_talent')`
619. "Browse Top Talent" → `t('browse_top_talent')`
620. "Browse available jobs and start applying" → `t('browse_available_jobs_and_star')`
621. "Browse our most popular service destinations" → `t('browse_our_most_popular_servic')`
622. "Browse service categories on the marketplace" → `t('browse_service_categories_on_t')`
623. "Browse talent profiles in our directory" → `t('browse_talent_profiles_in_our_')`
624. "BrowserTracing" → `t('browsertracing')`
625. "Budget" → `t('budget')`
626. "Budget & Timeline" → `t('budget_timeline')`
627. "Budget / Resolution goals" → `t('budget_resolution_goals')`
628. "Budget Controls" → `t('budget_controls')`
629. "Budget Range" → `t('budget_range')`
630. "Budget Type" → `t('budget_type')`
631. "Build Information" → `t('build_information')`
632. "Build Size" → `t('build_size')`
633. "Build Status" → `t('build_status')`
634. "Building an effective portfolio" → `t('building_an_effective_portfoli')`
635. "Built for Enterprise Needs" → `t('built_for_enterprise_needs')`
636. "Built-in data protection and encryption" → `t('builtin_data_protection_and_en')`
637. "Bundle Analysis" → `t('bundle_analysis')`
638. "Bundle Analyzer" → `t('bundle_analyzer')`
639. "Bundle Analyzer Integration" → `t('bundle_analyzer_integration')`
640. "Bundle Chunks" → `t('bundle_chunks')`
641. "Bundle Optimization Suggestions" → `t('bundle_optimization_suggestion')`
642. "Bundle Size" → `t('bundle_size')`
643. "Bundle analysis available with: npm run build:analyze" → `t('bundle_analysis_available_with')`
644. "Bundle chunks are loading slowly. Check network conditions and consider CDN." → `t('bundle_chunks_are_loading_slow')`
645. "Business" → `t('business')`
646. "Business Model" → `t('business_model')`
647. "Business Process Automation" → `t('business_process_automation')`
648. "Business Solutions" → `t('business_solutions')`
649. "Business name/title is required" → `t('business_nametitle_is_required')`
650. "Business/Service Name" → `t('businessservice_name')`
651. "Button" → `t('button')`
652. "Button Text" → `t('button_text')`
653. "Button and link interactions" → `t('button_and_link_interactions')`
654. "Button error test:" → `t('button_error_test')`
655. "Button has no accessibility violations" → `t('button_has_no_accessibility_vi')`
656. "Buttons meet minimum touch target size" → `t('buttons_meet_minimum_touch_tar')`
657. "Buy Now" → `t('buy_now')`
658. "Buy and sell hardware, software and services in the Zion marketplace." → `t('buy_and_sell_hardware_software')`
659. "Buy any service" → `t('buy_any_service')`
660. "Bytes" → `t('bytes')`
661. "CANCELED" → `t('canceled')`
662. "Cache CLEAR error:" → `t('cache_clear_error')`
663. "Cache CLEARED: all categories" → `t('cache_cleared_all_categories')`
664. "Cache DELETE error for ${key}:" → `t('cache_delete_error_for_key')`
665. "Cache DELETE: ${key} (${category})" → `t('cache_delete_key_category')`
666. "Cache GET error for ${key}:" → `t('cache_get_error_for_key')`
667. "Cache Hit Rate" → `t('cache_hit_rate')`
668. "Cache Performance" → `t('cache_performance')`
669. "Cache SET error for ${key}:" → `t('cache_set_error_for_key')`
670. "Calculate Your Savings" → `t('calculate_your_savings')`
671. "Calendar" → `t('calendar')`
672. "Call" → `t('call')`
673. "Call ended" → `t('call_ended')`
674. "Campaign Link" → `t('campaign_link')`
675. "Campaign Type" → `t('campaign_type')`
676. "Can I edit the generated text?" → `t('can_i_edit_the_generated_text')`
677. "Can I search in multiple languages?" → `t('can_i_search_in_multiple_langu')`
678. "Can create and publish job listings" → `t('can_create_and_publish_job_lis')`
679. "Can edit candidate information and status" → `t('can_edit_candidate_information')`
680. "Can view and manage billing information" → `t('can_view_and_manage_billing_in')`
681. "Can view candidate profiles and applications" → `t('can_view_candidate_profiles_an')`
682. "Cancel" → `t('cancel')`
683. "Cancel Confirmed Interview" → `t('cancel_confirmed_interview')`
684. "Cancel Interview" → `t('cancel_interview')`
685. "Cancel Interview Request" → `t('cancel_interview_request')`
686. "Cancel Request" → `t('cancel_request')`
687. "Cancel Subscription" → `t('cancel_subscription')`
688. "Canceled" → `t('canceled')`
689. "Cancelled" → `t('cancelled')`
690. "Cancelled:" → `t('cancelled')`
691. "Cancer Treatment Response Prediction" → `t('cancer_treatment_response_pred')`
692. "Candidate" → `t('candidate')`
693. "Candidate Applications" → `t('candidate_applications')`
694. "Candidate Matchmaker" → `t('candidate_matchmaker')`
695. "Candidate funnel metrics" → `t('candidate_funnel_metrics')`
696. "Candidate hired successfully" → `t('candidate_hired_successfully')`
697. "Candidates matched to your company" → `t('candidates_matched_to_your_com')`
698. "Candidates selected for review" → `t('candidates_selected_for_review')`
699. "Cannot copy link" → `t('cannot_copy_link')`
700. "Cannot delete the last slide." → `t('cannot_delete_the_last_slide')`
701. "Cannot read property" → `t('cannot_read_property')`
702. "Cannot share" → `t('cannot_share')`
703. "Cap Table" → `t('cap_table')`
704. "Card" → `t('card')`
705. "Card has no accessibility violations" → `t('card_has_no_accessibility_viol')`
706. "CardContent" → `t('cardcontent')`
707. "CardDescription" → `t('carddescription')`
708. "CardFooter" → `t('cardfooter')`
709. "CardHeader" → `t('cardheader')`
710. "CardTitle" → `t('cardtitle')`
711. "Careers" → `t('careers')`
712. "Careers at Zion - Join Our Team" → `t('careers_at_zion_join_our_team')`
713. "Carlos Diaz" → `t('carlos_diaz')`
714. "Carousel" → `t('carousel')`
715. "CarouselContent" → `t('carouselcontent')`
716. "CarouselNext" → `t('carouselnext')`
717. "CarouselPrevious" → `t('carouselprevious')`
718. "Cart" → `t('cart')`
719. "Cart - Zion" → `t('cart_zion')`
720. "CartContextTester: OK" → `t('cartcontexttester_ok')`
721. "CartContextTester: useCart() FAILED!" → `t('cartcontexttester_usecart_fail')`
722. "CartContextTester: useCart() successful" → `t('cartcontexttester_usecart_succ')`
723. "Case Information" → `t('case_information')`
724. "Case Studies" → `t('case_studies')`
725. "Cast Offline Vote" → `t('cast_offline_vote')`
726. "Cast Your Vote" → `t('cast_your_vote')`
727. "Categories" → `t('categories')`
728. "Categories - Zion" → `t('categories_zion')`
729. "Categorized Skills" → `t('categorized_skills')`
730. "Category" → `t('category')`
731. "Category Error" → `t('category_error')`
732. "Category Not Found" → `t('category_not_found')`
733. "Category load error:" → `t('category_load_error')`
734. "Category not found" → `t('category_not_found')`
735. "Category with slug" → `t('category_with_slug')`
736. "Category | Zion Marketplace" → `t('category_zion_marketplace')`
737. "Cayman Foundation" → `t('cayman_foundation')`
738. "Certification added" → `t('certification_added')`
739. "Certification deleted" → `t('certification_deleted')`
740. "Certification updated" → `t('certification_updated')`
741. "Certified Professionals" → `t('certified_professionals')`
742. "Chamber of Nations" → `t('chamber_of_nations')`
743. "Change Plan" → `t('change_plan')`
744. "Change Status" → `t('change_status')`
745. "Changes Requested" → `t('changes_requested')`
746. "Chapter 1 – The Why" → `t('chapter_1_the_why')`
747. "Chapter 2 – The Blueprint" → `t('chapter_2_the_blueprint')`
748. "Chapter 2 – ZionGPT + The AI State" → `t('chapter_2_ziongpt_the_ai_state')`
749. "Chapter 3 – Manifesto & Constitution" → `t('chapter_3_manifesto_constituti')`
750. "Chapter 3 – The Tokenized Workforce" → `t('chapter_3_the_tokenized_workfo')`
751. "Chapter 4 – Design Evolution" → `t('chapter_4_design_evolution')`
752. "Chapter 4 – The Multiverse & Digital Nations" → `t('chapter_4_the_multiverse_digit')`
753. "Chapter 5 – Global Footprint" → `t('chapter_5_global_footprint')`
754. "Chapter 5 – ZionDAO + The Constitution" → `t('chapter_5_ziondao_the_constitu')`
755. "Chapter 6 – Building a Post-Platform World" → `t('chapter_6_building_a_postplatf')`
756. "Chart" → `t('chart')`
757. "Chart Type" → `t('chart_type')`
758. "ChartLegend" → `t('chartlegend')`
759. "ChartTooltip" → `t('charttooltip')`
760. "Chat" → `t('chat')`
761. "Chat Error" → `t('chat_error')`
762. "Chat With Our AI Assistant" → `t('chat_with_our_ai_assistant')`
763. "Chat with Assistant" → `t('chat_with_assistant')`
764. "Chat with Live Agent" → `t('chat_with_live_agent')`
765. "Chatbot error:" → `t('chatbot_error')`
766. "Check" → `t('check')`
767. "Check Again" → `t('check_again')`
768. "Check Dashboard" → `t('check_dashboard')`
769. "Check Health Status" → `t('check_health_status')`
770. "Check Status" → `t('check_status')`
771. "Check Verification Status" → `t('check_verification_status')`
772. "Check out this talent" → `t('check_out_this_talent')`
773. "Check out your AI-matched talent suggestions" → `t('check_out_your_aimatched_talen')`
774. "Check status" → `t('check_status')`
775. "Checkbox" → `t('checkbox')`
776. "Checkbox has no accessibility violations" → `t('checkbox_has_no_accessibility_')`
777. "Checking login status…" → `t('checking_login_status')`
778. "Checkout" → `t('checkout')`
779. "Checkout Flow with Mocked Stripe" → `t('checkout_flow_with_mocked_stri')`
780. "Checkout Test Route" → `t('checkout_test_route')`
781. "Checkout error:" → `t('checkout_error')`
782. "Checkout failed" → `t('checkout_failed')`
783. "Checkout page renders header" → `t('checkout_page_renders_header')`
784. "Checkout session creation error:" → `t('checkout_session_creation_erro')`
785. "Checkout session error" → `t('checkout_session_error')`
786. "Checkout session error:" → `t('checkout_session_error')`
787. "Child Content" → `t('child_content')`
788. "Chloe Nguyen" → `t('chloe_nguyen')`
789. "Choose how you want to use our platform" → `t('choose_how_you_want_to_use_our')`
790. "Choose the country where you need onsite IT support services." → `t('choose_the_country_where_you_n')`
791. "Choose topics you're interested in" → `t('choose_topics_youre_interested')`
792. "Choose what brought you to Zion" → `t('choose_what_brought_you_to_zio')`
793. "Choose your preferred language" → `t('choose_your_preferred_language')`
794. "Choose your role" → `t('choose_your_role')`
795. "ChunkLoadError" → `t('chunkloaderror')`
796. "Circulating Supply" → `t('circulating_supply')`
797. "Cisco Catalyst 9300 48-Port Switch" → `t('cisco_catalyst_9300_48port_swi')`
798. "Cisco Nexus 9000 Switch" → `t('cisco_nexus_9000_switch')`
799. "Citi Bank" → `t('citi_bank')`
800. "Citi Bank logo" → `t('citi_bank_logo')`
801. "City, Country" → `t('city_country')`
802. "City, State/Province, Country" → `t('city_stateprovince_country')`
803. "Claim Your Offer" → `t('claim_your_offer')`
804. "Claimable NFT ticket & proof-of-attendance" → `t('claimable_nft_ticket_proofofat')`
805. "Clear" → `t('clear')`
806. "Clear All" → `t('clear_all')`
807. "Clear Cache" → `t('clear_cache')`
808. "Clear Filters" → `t('clear_filters')`
809. "Clear Log" → `t('clear_log')`
810. "Clear Search" → `t('clear_search')`
811. "Clear all" → `t('clear_all')`
812. "Clear all filters" → `t('clear_all_filters')`
813. "Clear browser cache and storage" → `t('clear_browser_cache_and_storag')`
814. "Clear button clears input" → `t('clear_button_clears_input')`
815. "Clear per-incident pricing includes transportation and first hour onsite" → `t('clear_perincident_pricing_incl')`
816. "Clear search" → `t('clear_search')`
817. "Clearing filters" → `t('clearing_filters')`
818. "Click me" → `t('click_me')`
819. "Click on the chat icon in the bottom right corner" → `t('click_on_the_chat_icon_in_the_')`
820. "Click to view full rewards program" → `t('click_to_view_full_rewards_pro')`
821. "Client" → `t('client')`
822. "Client Dashboard" → `t('client_dashboard')`
823. "Client Dashboard | Zion AI Marketplace" → `t('client_dashboard_zion_ai_marke')`
824. "Client Error" → `t('client_error')`
825. "Client Pages" → `t('client_pages')`
826. "Client Registration" → `t('client_registration')`
827. "Client avatar" → `t('client_avatar')`
828. "Client-side error thrown and captured by Sentry. Check your Sentry dashboard (or console for DSN issues)." → `t('clientside_error_thrown_and_ca')`
829. "Close" → `t('close')`
830. "Close Dispute" → `t('close_dispute')`
831. "Close Round" → `t('close_round')`
832. "Close chat" → `t('close_chat')`
833. "Close chat widget" → `t('close_chat_widget')`
834. "Close help bot" → `t('close_help_bot')`
835. "Close menu" → `t('close_menu')`
836. "Close support" → `t('close_support')`
837. "Closed" → `t('closed')`
838. "Closed Beta Invite" → `t('closed_beta_invite')`
839. "Cloud Architect" → `t('cloud_architect')`
840. "Cloud Cost Optimization" → `t('cloud_cost_optimization')`
841. "Cloud Data Warehouse Migration" → `t('cloud_data_warehouse_migration')`
842. "Cloud GPU Rental" → `t('cloud_gpu_rental')`
843. "Cloud GPU Rental Service" → `t('cloud_gpu_rental_service')`
844. "Cloud Integration" → `t('cloud_integration')`
845. "Cloud Migration" → `t('cloud_migration')`
846. "Cloud Migration & Modernization" → `t('cloud_migration_modernization')`
847. "Cloud Security Specialist" → `t('cloud_security_specialist')`
848. "Cloud Services" → `t('cloud_services')`
849. "Cloud-optimized GPU server for AI inference and training" → `t('cloudoptimized_gpu_server_for_')`
850. "Co-branded or white-labeled" → `t('cobranded_or_whitelabeled')`
851. "Co-branding" → `t('cobranding')`
852. "Co-marketing opportunities" → `t('comarketing_opportunities')`
853. "Code" → `t('code')`
854. "Code Examples" → `t('code_examples')`
855. "Codex execution error: ${error.message}" → `t('codex_execution_error_errormes')`
856. "Codex execution failed for route ${route ||" → `t('codex_execution_failed_for_rou')`
857. "Codex fix process failed to start or execute." → `t('codex_fix_process_failed_to_st')`
858. "Codex fix process triggered successfully." → `t('codex_fix_process_triggered_su')`
859. "Collaborate on your project" → `t('collaborate_on_your_project')`
860. "Color Palette" → `t('color_palette')`
861. "Coming Soon" → `t('coming_soon')`
862. "CommandShortcut" → `t('commandshortcut')`
863. "Comment" → `t('comment')`
864. "Commission Rate" → `t('commission_rate')`
865. "Common Error Codes" → `t('common_error_codes')`
866. "Common Questions" → `t('common_questions')`
867. "Communication" → `t('communication')`
868. "Communication Error" → `t('communication_error')`
869. "Communication regarding this dispute" → `t('communication_regarding_this_d')`
870. "Community" → `t('community')`
871. "Community - Join the Zion Tech Marketplace Network" → `t('community_join_the_zion_tech_m')`
872. "Community - Zion" → `t('community_zion')`
873. "Community Discussion" → `t('community_discussion')`
874. "Community Forum" → `t('community_forum')`
875. "Community Manager" → `t('community_manager')`
876. "Community Queue" → `t('community_queue')`
877. "Community law and governance" → `t('community_law_and_governance')`
878. "Community law and governance\nOn-chain proposals" → `t('community_law_and_governanceno')`
879. "Compact edge computing device for IoT and edge AI applications" → `t('compact_edge_computing_device_')`
880. "Company" → `t('company')`
881. "Company Info" → `t('company_info')`
882. "Company Mission" → `t('company_mission')`
883. "Company Name" → `t('company_name')`
884. "Company Size" → `t('company_size')`
885. "Company name" → `t('company_name')`
886. "Compare & Save" → `t('compare_save')`
887. "Competitive Compensation" → `t('competitive_compensation')`
888. "Complete Profile" → `t('complete_profile')`
889. "Complete Registration" → `t('complete_registration')`
890. "Complete Your Profile" → `t('complete_your_profile')`
891. "Complete your application for this position" → `t('complete_your_application_for_')`
892. "Complete your company profile" → `t('complete_your_company_profile')`
893. "Complete your first checkout" → `t('complete_your_first_checkout')`
894. "Complete your next step" → `t('complete_your_next_step')`
895. "Complete your next step on Zion AI Marketplace" → `t('complete_your_next_step_on_zio')`
896. "Complete your profile" → `t('complete_your_profile')`
897. "Complete your profile for more rewards!" → `t('complete_your_profile_for_more')`
898. "Complete your profile to get started" → `t('complete_your_profile_to_get_s')`
899. "Complete your profile to unlock all features." → `t('complete_your_profile_to_unloc')`
900. "Complete your user profile" → `t('complete_your_user_profile')`
901. "Completed" → `t('completed')`
902. "Completed On" → `t('completed_on')`
903. "Completed forms and sign-ups" → `t('completed_forms_and_signups')`
904. "Completing your profile" → `t('completing_your_profile')`
905. "CompositeTypes" → `t('compositetypes')`
906. "Compromise" → `t('compromise')`
907. "Computer Vision" → `t('computer_vision')`
908. "Computer Vision Engineer" → `t('computer_vision_engineer')`
909. "Computer Vision Engineer & Deep Learning Specialist" → `t('computer_vision_engineer_deep_')`
910. "Computing jobs with filters: ${filterParams}" → `t('computing_jobs_with_filters_fi')`
911. "Configuration Error" → `t('configuration_error')`
912. "Configuration File Handling" → `t('configuration_file_handling')`
913. "Configuration Required" → `t('configuration_required')`
914. "Configure commission rates and other settings" → `t('configure_commission_rates_and')`
915. "Configure project parameters" → `t('configure_project_parameters')`
916. "Configure real Stripe test keys in environment variables" → `t('configure_real_stripe_test_key')`
917. "Confirm Hire" → `t('confirm_hire')`
918. "Confirm Interview" → `t('confirm_interview')`
919. "Confirm Message" → `t('confirm_message')`
920. "Confirm Password" → `t('confirm_password')`
921. "Confirm new password" → `t('confirm_new_password')`
922. "Confirm password" → `t('confirm_password')`
923. "Confirm your password" → `t('confirm_your_password')`
924. "Confirmed" → `t('confirmed')`
925. "Connect" → `t('connect')`
926. "Connect New Integration" → `t('connect_new_integration')`
927. "Connect Salesforce" → `t('connect_salesforce')`
928. "Connect Slack" → `t('connect_slack')`
929. "Connect Slack integration" → `t('connect_slack_integration')`
930. "Connect Teams" → `t('connect_teams')`
931. "Connect Wallet" → `t('connect_wallet')`
932. "Connect Wallet to Participate" → `t('connect_wallet_to_participate')`
933. "Connect with AI professionals that match your needs" → `t('connect_with_ai_professionals_')`
934. "Connect with thousands of AI professionals, discover new opportunities, and showcase your services to a global audience." → `t('connect_with_thousands_of_ai_p')`
935. "Connect with world-class AI and technology professionals" → `t('connect_with_worldclass_ai_and')`
936. "Connect with world-class professionals specializing in AI, machine learning, and modern technology" → `t('connect_with_worldclass_profes')`
937. "Connect your ${integration.name} account" → `t('connect_your_integrationname_a')`
938. "Connect your platform with the tools and services you use every day" → `t('connect_your_platform_with_the')`
939. "Connected" → `t('connected')`
940. "Connected Services" → `t('connected_services')`
941. "Connected Wallet" → `t('connected_wallet')`
942. "Connection Error" → `t('connection_error')`
943. "Connection Issue" → `t('connection_issue')`
944. "Connection Restored" → `t('connection_restored')`
945. "Connection error to authentication service" → `t('connection_error_to_authentica')`
946. "Connection failed" → `t('connection_failed')`
947. "Connection restored" → `t('connection_restored')`
948. "Connectivity solutions including switches, routers, and network security devices" → `t('connectivity_solutions_includi')`
949. "Consider adjusting your budget range if possible" → `t('consider_adjusting_your_budget')`
950. "Consider code splitting" → `t('consider_code_splitting')`
951. "Consider more aggressive code splitting" → `t('consider_more_aggressive_code_')`
952. "Constitution" → `t('constitution')`
953. "Constitution v1 → v2 (updates by community or core team)" → `t('constitution_v1_v2_updates_by_')`
954. "Consultation Required" → `t('consultation_required')`
955. "Consulting" → `t('consulting')`
956. "Consulting firm" → `t('consulting_firm')`
957. "Contact" → `t('contact')`
958. "Contact Billing Support" → `t('contact_billing_support')`
959. "Contact Client" → `t('contact_client')`
960. "Contact Information" → `t('contact_information')`
961. "Contact Our Team" → `t('contact_our_team')`
962. "Contact Partner Support" → `t('contact_partner_support')`
963. "Contact Publisher" → `t('contact_publisher')`
964. "Contact Sales" → `t('contact_sales')`
965. "Contact Support" → `t('contact_support')`
966. "Contact Us" → `t('contact_us')`
967. "Contact information" → `t('contact_information')`
968. "Contact page has no accessibility violations" → `t('contact_page_has_no_accessibil')`
969. "Contact talent" → `t('contact_talent')`
970. "Contacted" → `t('contacted')`
971. "Container Security Initiative" → `t('container_security_initiative')`
972. "Container has proper responsive padding" → `t('container_has_proper_responsiv')`
973. "Content" → `t('content')`
974. "Content Applied" → `t('content_applied')`
975. "Content Automation" → `t('content_automation')`
976. "Content Creation" → `t('content_creation')`
977. "Content Generated" → `t('content_generated')`
978. "Content Generator" → `t('content_generator')`
979. "Content Preview" → `t('content_preview')`
980. "Content Settings" → `t('content_settings')`
981. "Content Strategist" → `t('content_strategist')`
982. "Content Team" → `t('content_team')`
983. "Content Type" → `t('content_type')`
984. "Content applied" → `t('content_applied')`
985. "Content is required" → `t('content_is_required')`
986. "Content to enhance" → `t('content_to_enhance')`
987. "Content-Type" → `t('contenttype')`
988. "Context" → `t('context')`
989. "ContextMenuShortcut" → `t('contextmenushortcut')`
990. "Continue" → `t('continue')`
991. "Continue Shopping" → `t('continue_shopping')`
992. "Continue my setup" → `t('continue_my_setup')`
993. "Continue shopping" → `t('continue_shopping')`
994. "Continue to Payment" → `t('continue_to_payment')`
995. "Continue to Payment ($${total.toFixed(2)})" → `t('continue_to_payment_totaltofix')`
996. "Continue with Facebook" → `t('continue_with_facebook')`
997. "Continue with Google" → `t('continue_with_google')`
998. "Continue your onboarding process" → `t('continue_your_onboarding_proce')`
999. "Continuous Learning" → `t('continuous_learning')`
1000. "Contract" → `t('contract')`
1001. "Contract Builder" → `t('contract_builder')`
1002. "Contract Deployment Info" → `t('contract_deployment_info')`
1003. "Contract Details" → `t('contract_details')`
1004. "Contract Generation Failed" → `t('contract_generation_failed')`
1005. "Contract Preview" → `t('contract_preview')`
1006. "Contract Signed" → `t('contract_signed')`
1007. "Contract Title" → `t('contract_title')`
1008. "Contract signed" → `t('contract_signed')`
1009. "Conversation not found" → `t('conversation_not_found')`
1010. "Conversations" → `t('conversations')`
1011. "Conversion Analysis" → `t('conversion_analysis')`
1012. "Conversion Rate" → `t('conversion_rate')`
1013. "Conversions" → `t('conversions')`
1014. "Coordinator" → `t('coordinator')`
1015. "Copied" → `t('copied')`
1016. "Copy" → `t('copy')`
1017. "Copy Details" → `t('copy_details')`
1018. "Copy Link" → `t('copy_link')`
1019. "Copy Summary" → `t('copy_summary')`
1020. "Copy code" → `t('copy_code')`
1021. "Copy credentials to" → `t('copy_credentials_to')`
1022. "Copy prompt" → `t('copy_prompt')`
1023. "Copy referral link" → `t('copy_referral_link')`
1024. "Corporate" → `t('corporate')`
1025. "Cost per hire analysis" → `t('cost_per_hire_analysis')`
1026. "Could not add certification" → `t('could_not_add_certification')`
1027. "Could not add education" → `t('could_not_add_education')`
1028. "Could not add project: ${e.message}" → `t('could_not_add_project_emessage')`
1029. "Could not add skill" → `t('could_not_add_skill')`
1030. "Could not add work experience" → `t('could_not_add_work_experience')`
1031. "Could not connect to wallet" → `t('could_not_connect_to_wallet')`
1032. "Could not create resume" → `t('could_not_create_resume')`
1033. "Could not delete certification" → `t('could_not_delete_certification')`
1034. "Could not delete education" → `t('could_not_delete_education')`
1035. "Could not delete project: ${e.message}" → `t('could_not_delete_project_emess')`
1036. "Could not delete skill" → `t('could_not_delete_skill')`
1037. "Could not delete work experience" → `t('could_not_delete_work_experien')`
1038. "Could not process talent matching. Please try again later." → `t('could_not_process_talent_match')`
1039. "Could not set active resume" → `t('could_not_set_active_resume')`
1040. "Could not update certification" → `t('could_not_update_certification')`
1041. "Could not update education" → `t('could_not_update_education')`
1042. "Could not update project: ${e.message}" → `t('could_not_update_project_emess')`
1043. "Could not update resume" → `t('could_not_update_resume')`
1044. "Could not update work experience" → `t('could_not_update_work_experien')`
1045. "Country" → `t('country')`
1046. "Course" → `t('course')`
1047. "Cover Letter" → `t('cover_letter')`
1048. "Create Account" → `t('create_account')`
1049. "Create Account - Zion Tech Marketplace" → `t('create_account_zion_tech_marke')`
1050. "Create Application:" → `t('create_application')`
1051. "Create Auth0 Account:" → `t('create_auth0_account')`
1052. "Create Custom Campaign Link" → `t('create_custom_campaign_link')`
1053. "Create First Link" → `t('create_first_link')`
1054. "Create First Milestone" → `t('create_first_milestone')`
1055. "Create Jobs" → `t('create_jobs')`
1056. "Create Key" → `t('create_key')`
1057. "Create Listing" → `t('create_listing')`
1058. "Create Milestone" → `t('create_milestone')`
1059. "Create Nation" → `t('create_nation')`
1060. "Create New" → `t('create_new')`
1061. "Create New Contract" → `t('create_new_contract')`
1062. "Create New Link" → `t('create_new_link')`
1063. "Create New Milestone" → `t('create_new_milestone')`
1064. "Create New Post" → `t('create_new_post')`
1065. "Create New Post | Community Forum | Zion AI Marketplace" → `t('create_new_post_community_foru')`
1066. "Create New Proposal" → `t('create_new_proposal')`
1067. "Create Post" → `t('create_post')`
1068. "Create Profile" → `t('create_profile')`
1069. "Create Proposal" → `t('create_proposal')`
1070. "Create Resume" → `t('create_resume')`
1071. "Create Service Profile" → `t('create_service_profile')`
1072. "Create Slack notifications for new jobs" → `t('create_slack_notifications_for')`
1073. "Create Smart Contract" → `t('create_smart_contract')`
1074. "Create Standard Contract" → `t('create_standard_contract')`
1075. "Create Tenant" → `t('create_tenant')`
1076. "Create Webhook" → `t('create_webhook')`
1077. "Create White-Label Instance" → `t('create_whitelabel_instance')`
1078. "Create Your Service Provider Profile" → `t('create_your_service_provider_p')`
1079. "Create Your Talent Profile" → `t('create_your_talent_profile')`
1080. "Create a "Regular Web Application" named "Zion AI Marketplace"" → `t('create_a_regular_web_applicati')`
1081. "Create a DALL-E prompt for a thumbnail image for this blog post title:" → `t('create_a_dalle_prompt_for_a_th')`
1082. "Create a Digital Nation" → `t('create_a_digital_nation')`
1083. "Create a compelling title that describes your product" → `t('create_a_compelling_title_that')`
1084. "Create a customized version of the platform for your client or partner." → `t('create_a_customized_version_of')`
1085. "Create a new job posting" → `t('create_a_new_job_posting')`
1086. "Create a new white-label instance of Zion Hire AI for a company." → `t('create_a_new_whitelabel_instan')`
1087. "Create a password" → `t('create_a_password')`
1088. "Create a strong password" → `t('create_a_strong_password')`
1089. "Create account" → `t('create_account')`
1090. "Create and customize your resume and portfolio to showcase your skills and experience." → `t('create_and_customize_your_resu')`
1091. "Create and manage job listings" → `t('create_and_manage_job_listings')`
1092. "Create and manage quotes" → `t('create_and_manage_quotes')`
1093. "Create and manage white-label instances of the Zion AI Marketplace platform." → `t('create_and_manage_whitelabel_i')`
1094. "Create and publish your product, service or digital asset on Zion marketplace. Reach our community of tech and AI professionals." → `t('create_and_publish_your_produc')`
1095. "Create checkout session error:" → `t('create_checkout_session_error')`
1096. "Create compelling job descriptions with AI assistance to attract top talent." → `t('create_compelling_job_descript')`
1097. "Create jobs" → `t('create_jobs')`
1098. "Create multilingual content to reach a global audience." → `t('create_multilingual_content_to')`
1099. "Create new content, monitor your analytics, or manage your account using the sidebar menu." → `t('create_new_content_monitor_you')`
1100. "Create one to receive event notifications." → `t('create_one_to_receive_event_no')`
1101. "Create or log in to your account" → `t('create_or_log_in_to_your_accou')`
1102. "Create payment intent error:" → `t('create_payment_intent_error')`
1103. "Create professional service descriptions with the help of AI. Just provide basic details about your service." → `t('create_professional_service_de')`
1104. "Create professional, AI-enhanced resumes that highlight your skills and increase your chances of getting hired." → `t('create_professional_aienhanced')`
1105. "Create your Zion Tech Marketplace account" → `t('create_your_zion_tech_marketpl')`
1106. "Create your account" → `t('create_your_account')`
1107. "Create your account to get started" → `t('create_your_account_to_get_sta')`
1108. "Created" → `t('created')`
1109. "Created At" → `t('created_at')`
1110. "Created placeholder test:" → `t('created_placeholder_test')`
1111. "Created post" → `t('created_post')`
1112. "Created production monitoring endpoint for environment and service health" → `t('created_production_monitoring_')`
1113. "Created:" → `t('created')`
1114. "Creates a community post" → `t('creates_a_community_post')`
1115. "Creates high-performance iOS and Android applications." → `t('creates_highperformance_ios_an')`
1116. "Creates immersive augmented and virtual reality experiences." → `t('creates_immersive_augmented_an')`
1117. "Creating Profile..." → `t('creating_profile')`
1118. "Creating your account" → `t('creating_your_account')`
1119. "Creative" → `t('creative')`
1120. "Creative Studios" → `t('creative_studios')`
1121. "Creator Dashboard" → `t('creator_dashboard')`
1122. "Credentials missing" → `t('credentials_missing')`
1123. "Critical" → `t('critical')`
1124. "Critical Error" → `t('critical_error')`
1125. "Critical Submission Error" → `t('critical_submission_error')`
1126. "Critical user journeys" → `t('critical_user_journeys')`
1127. "Cross-chain identity" → `t('crosschain_identity')`
1128. "Cross-chain identity\nImmersive virtual economies" → `t('crosschain_identitynimmersive_')`
1129. "Cross-instance governance" → `t('crossinstance_governance')`
1130. "Cross-instance sync schedules" → `t('crossinstance_sync_schedules')`
1131. "Cryptocurrency" → `t('cryptocurrency')`
1132. "Crème Brûlée" → `t('crme_brle')`
1133. "Culture fit prediction" → `t('culture_fit_prediction')`
1134. "Currency" → `t('currency')`
1135. "Current Funding Stage" → `t('current_funding_stage')`
1136. "Current Period" → `t('current_period')`
1137. "Current Services: ${providerData.services.join(" → `t('current_services_providerdatas')`
1138. "Current Status" → `t('current_status')`
1139. "Current Subscription" → `t('current_subscription')`
1140. "Current status of core platform services" → `t('current_status_of_core_platfor')`
1141. "Currently Unavailable" → `t('currently_unavailable')`
1142. "Currently approved and active partners" → `t('currently_approved_and_active_')`
1143. "Custom" → `t('custom')`
1144. "Custom AI model training service with data preparation and deployment" → `t('custom_ai_model_training_servi')`
1145. "Custom Campaign Links" → `t('custom_campaign_links')`
1146. "Custom Domain" → `t('custom_domain')`
1147. "Custom Machine Learning Model Development" → `t('custom_machine_learning_model_')`
1148. "Custom Marketplace Instance" → `t('custom_marketplace_instance')`
1149. "Custom Path Page" → `t('custom_path_page')`
1150. "Custom Pricing" → `t('custom_pricing')`
1151. "Custom Server Health" → `t('custom_server_health')`
1152. "Custom Service" → `t('custom_service')`
1153. "Custom branding & white labeling" → `t('custom_branding_white_labeling')`
1154. "Custom landing page for your referrals" → `t('custom_landing_page_for_your_r')`
1155. "Custom logo and colors" → `t('custom_logo_and_colors')`
1156. "Custom pricing" → `t('custom_pricing')`
1157. "Custom pricing based on your team size" → `t('custom_pricing_based_on_your_t')`
1158. "Customer Churn Analysis" → `t('customer_churn_analysis')`
1159. "Customer Segmentation Analysis" → `t('customer_segmentation_analysis')`
1160. "Customer Support Chatbot Platform" → `t('customer_support_chatbot_platf')`
1161. "Customizable branding" → `t('customizable_branding')`
1162. "Customizable scoring criteria" → `t('customizable_scoring_criteria')`
1163. "Customizable workflow and approval processes" → `t('customizable_workflow_and_appr')`
1164. "Customize Workspace" → `t('customize_workspace')`
1165. "Cybersecurity Assessment & Protection" → `t('cybersecurity_assessment_prote')`
1166. "Cybersecurity Expert & Ethical Hacker" → `t('cybersecurity_expert_ethical_h')`
1167. "DAO Genesis Key / Multisig fallback" → `t('dao_genesis_key_multisig_fallb')`
1168. "DB error: ${error.message}" → `t('db_error_errormessage')`
1169. "DB error: Insert failed" → `t('db_error_insert_failed')`
1170. "DB error: Some other DB error" → `t('db_error_some_other_db_error')`
1171. "DB error: Update DB error" → `t('db_error_update_db_error')`
1172. "DELETE" → `t('delete')`
1173. "Daily page view statistics" → `t('daily_page_view_statistics')`
1174. "Daily retention process executed" → `t('daily_retention_process_execut')`
1175. "Dangerous" → `t('dangerous')`
1176. "Dangerous Flags" → `t('dangerous_flags')`
1177. "Daniel Kim" → `t('daniel_kim')`
1178. "Dark" → `t('dark')`
1179. "Dash" → `t('dash')`
1180. "Dashboard" → `t('dashboard')`
1181. "Dashboard - Zion" → `t('dashboard_zion')`
1182. "Dashboard Error" → `t('dashboard_error')`
1183. "Dashboard Home" → `t('dashboard_home')`
1184. "Dashboard Page" → `t('dashboard_page')`
1185. "Dashboard metrics error:" → `t('dashboard_metrics_error')`
1186. "Dashboard screen" → `t('dashboard_screen')`
1187. "Data" → `t('data')`
1188. "Data Analysis" → `t('data_analysis')`
1189. "Data Analyst & Visualization Expert" → `t('data_analyst_visualization_exp')`
1190. "Data Engineer" → `t('data_engineer')`
1191. "Data Engineer & ETL Specialist" → `t('data_engineer_etl_specialist')`
1192. "Data Scientist" → `t('data_scientist')`
1193. "Data Scientist & Statistical Analyst" → `t('data_scientist_statistical_ana')`
1194. "Data Visualization Dashboard" → `t('data_visualization_dashboard')`
1195. "Data will be backed up to decentralized storage. This feature is in beta." → `t('data_will_be_backed_up_to_dece')`
1196. "Database connection successful" → `t('database_connection_successful')`
1197. "Database connection timed out" → `t('database_connection_timed_out')`
1198. "Database error:" → `t('database_error')`
1199. "Database query timeout" → `t('database_query_timeout')`
1200. "Database query timeout after ${timeoutMs}ms" → `t('database_query_timeout_after_t')`
1201. "Datacenter Equipment" → `t('datacenter_equipment')`
1202. "Date" → `t('date')`
1203. "Date Range" → `t('date_range')`
1204. "Date Voted" → `t('date_voted')`
1205. "Date range" → `t('date_range')`
1206. "David Kim" → `t('david_kim')`
1207. "David Martinez" → `t('david_martinez')`
1208. "DeFi Staking Platform" → `t('defi_staking_platform')`
1209. "DePIN Rewards" → `t('depin_rewards')`
1210. "Deadline" → `t('deadline')`
1211. "Deal Room Uploads" → `t('deal_room_uploads')`
1212. "Debouncing" → `t('debouncing')`
1213. "Debug Info (Development Only)" → `t('debug_info_development_only')`
1214. "Debug Info:" → `t('debug_info')`
1215. "Decentralized Backup" → `t('decentralized_backup')`
1216. "Decentralized commerce layers" → `t('decentralized_commerce_layers')`
1217. "Decentralized commerce layers\nTrustless onboarding" → `t('decentralized_commerce_layersn')`
1218. "Decentralized intelligence replaces central authority" → `t('decentralized_intelligence_rep')`
1219. "Decentralized reputation is better than centralized scores" → `t('decentralized_reputation_is_be')`
1220. "Decision" → `t('decision')`
1221. "Deck Prompt" → `t('deck_prompt')`
1222. "Deck or Website Link" → `t('deck_or_website_link')`
1223. "Decline" → `t('decline')`
1224. "Declined" → `t('declined')`
1225. "Dedicated Talent Pool" → `t('dedicated_talent_pool')`
1226. "Dedicated success manager" → `t('dedicated_success_manager')`
1227. "Deep Learning" → `t('deep_learning')`
1228. "Define conditions for ending the contract" → `t('define_conditions_for_ending_t')`
1229. "Define how changes to the contract are handled" → `t('define_how_changes_to_the_cont')`
1230. "Define skills & availability" → `t('define_skills_availability')`
1231. "Degraded Performance" → `t('degraded_performance')`
1232. "Degree" → `t('degree')`
1233. "Delegate model" → `t('delegate_model')`
1234. "Delete" → `t('delete')`
1235. "Delete Slide" → `t('delete_slide')`
1236. "Delete Webhook?" → `t('delete_webhook')`
1237. "Deliverable added successfully" → `t('deliverable_added_successfully')`
1238. "Dell" → `t('dell')`
1239. "Dell PowerEdge R750 Server" → `t('dell_poweredge_r750_server')`
1240. "Dell logo" → `t('dell_logo')`
1241. "Deploy Contract" → `t('deploy_contract')`
1242. "Deploy Instance" → `t('deploy_instance')`
1243. "Deploy New Multiverse" → `t('deploy_new_multiverse')`
1244. "Deploy on Blockchain" → `t('deploy_on_blockchain')`
1245. "Deploy to Blockchain" → `t('deploy_to_blockchain')`
1246. "Deploy to blockchain" → `t('deploy_to_blockchain')`
1247. "Deployment Region" → `t('deployment_region')`
1248. "Deployment error:" → `t('deployment_error')`
1249. "Desc" → `t('desc')`
1250. "Describe the issue in detail" → `t('describe_the_issue_in_detail')`
1251. "Describe the job role and responsibilities" → `t('describe_the_job_role_and_resp')`
1252. "Describe the talent you need for your project" → `t('describe_the_talent_you_need_f')`
1253. "Describe what needs to be delivered" → `t('describe_what_needs_to_be_deli')`
1254. "Describe what you&apos;re looking for and our AI will find the best matches" → `t('describe_what_youaposre_lookin')`
1255. "Describe your project" → `t('describe_your_project')`
1256. "Describe your request" → `t('describe_your_request')`
1257. "Description" → `t('description')`
1258. "Description Generated" → `t('description_generated')`
1259. "Description Saved" → `t('description_saved')`
1260. "Description must be at least 10 characters" → `t('description_must_be_at_least_1')`
1261. "Description must be at least 20 characters" → `t('description_must_be_at_least_2')`
1262. "Design" → `t('design')`
1263. "Designer" → `t('designer')`
1264. "Detailed analytics will be available soon" → `t('detailed_analytics_will_be_ava')`
1265. "Detailed description of your app" → `t('detailed_description_of_your_a')`
1266. "Detailed error info:" → `t('detailed_error_info')`
1267. "Details" → `t('details')`
1268. "DevNet Sandbox" → `t('devnet_sandbox')`
1269. "DevOps" → `t('devops')`
1270. "DevOps Automation Pipeline" → `t('devops_automation_pipeline')`
1271. "DevOps Automation Setup" → `t('devops_automation_setup')`
1272. "DevOps Engineer" → `t('devops_engineer')`
1273. "DevOps Specialist & Cloud Architect" → `t('devops_specialist_cloud_archit')`
1274. "Developed cross-platform mobile app reaching over 100k downloads and maintaining 4.8 star store rating." → `t('developed_crossplatform_mobile')`
1275. "Developer" → `t('developer')`
1276. "Developer Discord" → `t('developer_discord')`
1277. "Developer Portal" → `t('developer_portal')`
1278. "Developer Tools" → `t('developer_tools')`
1279. "Developers - Zion" → `t('developers_zion')`
1280. "Development" → `t('development')`
1281. "Development Dashboard" → `t('development_dashboard')`
1282. "Development Dashboard - Zion App" → `t('development_dashboard_zion_app')`
1283. "Development authentication successful" → `t('development_authentication_suc')`
1284. "Dialog Title" → `t('dialog_title')`
1285. "Dialog has no accessibility violations when closed" → `t('dialog_has_no_accessibility_vi')`
1286. "DialogFooter" → `t('dialogfooter')`
1287. "DialogHeader" → `t('dialogheader')`
1288. "Didn" → `t('didn')`
1289. "Digital Labor Initiative" → `t('digital_labor_initiative')`
1290. "Digital Marketing Specialist" → `t('digital_marketing_specialist')`
1291. "Digital Product" → `t('digital_product')`
1292. "Disable" → `t('disable')`
1293. "Disable Tenant" → `t('disable_tenant')`
1294. "Disable audio only" → `t('disable_audio_only')`
1295. "Disable camera" → `t('disable_camera')`
1296. "Disabled" → `t('disabled')`
1297. "Disaster Recovery Planning" → `t('disaster_recovery_planning')`
1298. "Disconnect" → `t('disconnect')`
1299. "Disconnect Wallet" → `t('disconnect_wallet')`
1300. "Discount" → `t('discount')`
1301. "Discover Advanced Features" → `t('discover_advanced_features')`
1302. "Discover cutting-edge solutions and tech breakthroughs" → `t('discover_cuttingedge_solutions')`
1303. "Discover professional tech and AI services for your business." → `t('discover_professional_tech_and')`
1304. "Discuss Changes" → `t('discuss_changes')`
1305. "Dismiss" → `t('dismiss')`
1306. "Dismiss banner" → `t('dismiss_banner')`
1307. "Dismiss install prompt" → `t('dismiss_install_prompt')`
1308. "Dismiss notification" → `t('dismiss_notification')`
1309. "Dismissed" → `t('dismissed')`
1310. "Display Web3 Identity" → `t('display_web3_identity')`
1311. "Dispute Case" → `t('dispute_case')`
1312. "Dispute Details" → `t('dispute_details')`
1313. "Dispute Details | Zion AI Marketplace" → `t('dispute_details_zion_ai_market')`
1314. "Dispute Resolution Center" → `t('dispute_resolution_center')`
1315. "Dispute Resolution Center | Zion AI Marketplace" → `t('dispute_resolution_center_zion')`
1316. "Dispute initiated successfully" → `t('dispute_initiated_successfully')`
1317. "Dispute not found" → `t('dispute_not_found')`
1318. "Dispute resolved successfully" → `t('dispute_resolved_successfully')`
1319. "Dispute status updated to ${status}" → `t('dispute_status_updated_to_stat')`
1320. "Disputed" → `t('disputed')`
1321. "Disputes" → `t('disputes')`
1322. "Distribution Chart" → `t('distribution_chart')`
1323. "Do's" → `t('dos')`
1324. "Docs" → `t('docs')`
1325. "Domain Setup" → `t('domain_setup')`
1326. "Don" → `t('don')`
1327. "Done" → `t('done')`
1328. "Download" → `t('download')`
1329. "Download (.md)" → `t('download_md')`
1330. "Download (.md) (If applicable)" → `t('download_md_if_applicable')`
1331. "Download (.txt)" → `t('download_txt')`
1332. "Download (GIF)" → `t('download_gif')`
1333. "Download .sol File" → `t('download_sol_file')`
1334. "Download Brochure" → `t('download_brochure')`
1335. "Download Encrypted ZIP" → `t('download_encrypted_zip')`
1336. "Download Markdown" → `t('download_markdown')`
1337. "Download PDF" → `t('download_pdf')`
1338. "Download PDF Invoice" → `t('download_pdf_invoice')`
1339. "Download Performance Report" → `t('download_performance_report')`
1340. "Download Post-launch Playbook (.md)" → `t('download_postlaunch_playbook_m')`
1341. "Download Postman Collection" → `t('download_postman_collection')`
1342. "Download Pre-launch Playbook (.md)" → `t('download_prelaunch_playbook_md')`
1343. "Download Resume" → `t('download_resume')`
1344. "Download Sample PDF Kit" → `t('download_sample_pdf_kit')`
1345. "Download analytics data for further analysis" → `t('download_analytics_data_for_fu')`
1346. "Download as Markdown" → `t('download_as_markdown')`
1347. "Download as PDF" → `t('download_as_pdf')`
1348. "Download ePub" → `t('download_epub')`
1349. "Download failed" → `t('download_failed')`
1350. "Download on the" → `t('download_on_the')`
1351. "Download on the App Store" → `t('download_on_the_app_store')`
1352. "Download started" → `t('download_started')`
1353. "Download the Zion app now and take your tech career or hiring needs to the next level. Available on iOS and Android." → `t('download_the_zion_app_now_and_')`
1354. "Downloading ${resource.title}" → `t('downloading_resourcetitle')`
1355. "Downloading invoice" → `t('downloading_invoice')`
1356. "Downloading invoice ${invoiceId} as PDF." → `t('downloading_invoice_invoiceid_')`
1357. "Downloads" → `t('downloads')`
1358. "Draft" → `t('draft')`
1359. "Draft proposals for global institutions" → `t('draft_proposals_for_global_ins')`
1360. "Drag & drop your PDF or click to browse" → `t('drag_drop_your_pdf_or_click_to')`
1361. "Drag candidates here" → `t('drag_candidates_here')`
1362. "Drawer" → `t('drawer')`
1363. "DrawerContent" → `t('drawercontent')`
1364. "DrawerFooter" → `t('drawerfooter')`
1365. "DrawerHeader" → `t('drawerheader')`
1366. "Drop in ZION$ velocity" → `t('drop_in_zion_velocity')`
1367. "Dropdown triggers have proper ARIA attributes" → `t('dropdown_triggers_have_proper_')`
1368. "DropdownMenuShortcut" → `t('dropdownmenushortcut')`
1369. "Dummy Product" → `t('dummy_product')`
1370. "Duration" → `t('duration')`
1371. "Dynamic Pages" → `t('dynamic_pages')`
1372. "Dynamic component loading failed:" → `t('dynamic_component_loading_fail')`
1373. "ENS lookup error:" → `t('ens_lookup_error')`
1374. "ESLint auto-fix script finished." → `t('eslint_autofix_script_finished')`
1375. "EXECUTED" → `t('executed')`
1376. "Early access to new Zion AI features" → `t('early_access_to_new_zion_ai_fe')`
1377. "Early vision and motivations" → `t('early_vision_and_motivations')`
1378. "Earned" → `t('earned')`
1379. "Earned badge" → `t('earned_badge')`
1380. "Edge AI Camera Kit" → `t('edge_ai_camera_kit')`
1381. "Edge AI Computing Box" → `t('edge_ai_computing_box')`
1382. "Edge AI Development Kit" → `t('edge_ai_development_kit')`
1383. "Edge Cases" → `t('edge_cases')`
1384. "Edit" → `t('edit')`
1385. "Edit Candidates" → `t('edit_candidates')`
1386. "Edit Generated Sections" → `t('edit_generated_sections')`
1387. "Edit Job Post" → `t('edit_job_post')`
1388. "Edit Post" → `t('edit_post')`
1389. "Edit Post | Community Forum | Zion AI Marketplace" → `t('edit_post_community_forum_zion')`
1390. "Edit Profile" → `t('edit_profile')`
1391. "Edit Review" → `t('edit_review')`
1392. "Edit Tenant" → `t('edit_tenant')`
1393. "Edit Your Review" → `t('edit_your_review')`
1394. "Edit candidates" → `t('edit_candidates')`
1395. "Editable roadmap" → `t('editable_roadmap')`
1396. "Editorial Team" → `t('editorial_team')`
1397. "Education" → `t('education')`
1398. "Education Partnership" → `t('education_partnership')`
1399. "Education added" → `t('education_added')`
1400. "Education deleted" → `t('education_deleted')`
1401. "Education updated" → `t('education_updated')`
1402. "Either content or context is required" → `t('either_content_or_context_is_r')`
1403. "Either modelId or jobId is required" → `t('either_modelid_or_jobid_is_req')`
1404. "El carrito está vacío" → `t('el_carrito_est_vaco')`
1405. "Elena Rodriguez" → `t('elena_rodriguez')`
1406. "Elite" → `t('elite')`
1407. "Elite Partner" → `t('elite_partner')`
1408. "Enable" → `t('enable')`
1409. "Enable AI matchmaking" → `t('enable_ai_matchmaking')`
1410. "Enable Analytics" → `t('enable_analytics')`
1411. "Enable Bundle Analyzer" → `t('enable_bundle_analyzer')`
1412. "Enable Cross-Chain Talent Sync" → `t('enable_crosschain_talent_sync')`
1413. "Enable Matchmaking" → `t('enable_matchmaking')`
1414. "Enable Performance Monitor" → `t('enable_performance_monitor')`
1415. "Enable Tenant" → `t('enable_tenant')`
1416. "Enable audio only" → `t('enable_audio_only')`
1417. "Enable backup first to use this feature" → `t('enable_backup_first_to_use_thi')`
1418. "Enable camera" → `t('enable_camera')`
1419. "End Call" → `t('end_call')`
1420. "End Date" → `t('end_date')`
1421. "Endpoint" → `t('endpoint')`
1422. "Energy-Efficient Hardware" → `t('energyefficient_hardware')`
1423. "Engineering" → `t('engineering')`
1424. "English" → `t('english')`
1425. "Enhanced Error:" → `t('enhanced_error')`
1426. "Enhanced Global Error Handler:" → `t('enhanced_global_error_handler')`
1427. "Enhanced Profile Generated" → `t('enhanced_profile_generated')`
1428. "EnhancedSearchInput" → `t('enhancedsearchinput')`
1429. "Enter" → `t('enter')`
1430. "Enter a detailed description of the job role" → `t('enter_a_detailed_description_o')`
1431. "Enter a name for your project" → `t('enter_a_name_for_your_project')`
1432. "Enter app title" → `t('enter_app_title')`
1433. "Enter at least one service" → `t('enter_at_least_one_service')`
1434. "Enter at least one skill" → `t('enter_at_least_one_skill')`
1435. "Enter does nothing if no suggestion highlighted and allows form submission" → `t('enter_does_nothing_if_no_sugge')`
1436. "Enter key features, separated by commas" → `t('enter_key_features_separated_b')`
1437. "Enter new password" → `t('enter_new_password')`
1438. "Enter password" → `t('enter_password')`
1439. "Enter product title" → `t('enter_product_title')`
1440. "Enter secret key" → `t('enter_secret_key')`
1441. "Enter tags separated by commas" → `t('enter_tags_separated_by_commas')`
1442. "Enter the main contact for this request." → `t('enter_the_main_contact_for_thi')`
1443. "Enter your address" → `t('enter_your_address')`
1444. "Enter your city" → `t('enter_your_city')`
1445. "Enter your country" → `t('enter_your_country')`
1446. "Enter your full name" → `t('enter_your_full_name')`
1447. "Enter your full shipping address..." → `t('enter_your_full_shipping_addre')`
1448. "Enter your name" → `t('enter_your_name')`
1449. "Enter your product or service title" → `t('enter_your_product_or_service_')`
1450. "Enter your prompt" → `t('enter_your_prompt')`
1451. "Enterprise" → `t('enterprise')`
1452. "Enterprise AI Analytics Platform" → `t('enterprise_ai_analytics_platfo')`
1453. "Enterprise AI Integration Services" → `t('enterprise_ai_integration_serv')`
1454. "Enterprise AI integrations and services" → `t('enterprise_ai_integrations_and')`
1455. "Enterprise AI solutions" → `t('enterprise_ai_solutions')`
1456. "Enterprise Admin - Zion AI Marketplace" → `t('enterprise_admin_zion_ai_marke')`
1457. "Enterprise Admin Dashboard" → `t('enterprise_admin_dashboard')`
1458. "Enterprise Billing - Zion AI Marketplace" → `t('enterprise_billing_zion_ai_mar')`
1459. "Enterprise Dashboard" → `t('enterprise_dashboard')`
1460. "Enterprise Grade" → `t('enterprise_grade')`
1461. "Enterprise Package" → `t('enterprise_package')`
1462. "Enterprise Plans" → `t('enterprise_plans')`
1463. "Enterprise Plans - Zion AI Marketplace" → `t('enterprise_plans_zion_ai_marke')`
1464. "Enterprise SaaS Deployment" → `t('enterprise_saas_deployment')`
1465. "Enterprise Security" → `t('enterprise_security')`
1466. "Enterprise Security Assessment" → `t('enterprise_security_assessment')`
1467. "Enterprise-Grade Security & Compliance" → `t('enterprisegrade_security_compl')`
1468. "Enterprise-grade servers for any workload with 24/7 maintenance and support" → `t('enterprisegrade_servers_for_an')`
1469. "Entity Type" → `t('entity_type')`
1470. "Entry Level" → `t('entry_level')`
1471. "Enums" → `t('enums')`
1472. "Environment" → `t('environment')`
1473. "Environment Configuration" → `t('environment_configuration')`
1474. "Environment File Validation" → `t('environment_file_validation')`
1475. "Environment Info" → `t('environment_info')`
1476. "Environment Setup Validation" → `t('environment_setup_validation')`
1477. "Environment Variable Validation" → `t('environment_variable_validatio')`
1478. "Environment configuration" → `t('environment_configuration')`
1479. "Environment configuration error:" → `t('environment_configuration_erro')`
1480. "Environment configuration fix" → `t('environment_configuration_fix')`
1481. "Environment configured" → `t('environment_configured')`
1482. "Environment variables configured" → `t('environment_variables_configur')`
1483. "Equipment" → `t('equipment')`
1484. "Equipment Catalog" → `t('equipment_catalog')`
1485. "Equipment Not Found" → `t('equipment_not_found')`
1486. "Equipment Rentals" → `t('equipment_rentals')`
1487. "Equipment installation assistance" → `t('equipment_installation_assista')`
1488. "Equipment listings are being updated. Please check back soon for the latest hardware offerings." → `t('equipment_listings_are_being_u')`
1489. "Equipment not found" → `t('equipment_not_found')`
1490. "Equipment page error:" → `t('equipment_page_error')`
1491. "EquipmentDetail page" → `t('equipmentdetail_page')`
1492. "Error" → `t('error')`
1493. "Error ${res.status}" → `t('error_resstatus')`
1494. "Error ${res.status}: Failed to submit feedback" → `t('error_resstatus_failed_to_subm')`
1495. "Error Code" → `t('error_code')`
1496. "Error Creating Profile" → `t('error_creating_profile')`
1497. "Error Details" → `t('error_details')`
1498. "Error Details (Development)" → `t('error_details_development')`
1499. "Error Details:" → `t('error_details')`
1500. "Error Format" → `t('error_format')`
1501. "Error Handling" → `t('error_handling')`
1502. "Error Info:" → `t('error_info')`
1503. "Error Loading Services" → `t('error_loading_services')`
1504. "Error Message:" → `t('error_message')`
1505. "Error Prevention and Recovery" → `t('error_prevention_and_recovery')`
1506. "Error Recovery" → `t('error_recovery')`
1507. "Error Recovery Scenarios" → `t('error_recovery_scenarios')`
1508. "Error Response Format" → `t('error_response_format')`
1509. "Error Responses" → `t('error_responses')`
1510. "Error adding favorite:" → `t('error_adding_favorite')`
1511. "Error adding note:" → `t('error_adding_note')`
1512. "Error adding portfolio project:" → `t('error_adding_portfolio_project')`
1513. "Error analyzing content:" → `t('error_analyzing_content')`
1514. "Error analyzing message:" → `t('error_analyzing_message')`
1515. "Error applying to job:" → `t('error_applying_to_job')`
1516. "Error approving milestone:" → `t('error_approving_milestone')`
1517. "Error calling OpenAI:" → `t('error_calling_openai')`
1518. "Error calling track-referral function:" → `t('error_calling_trackreferral_fu')`
1519. "Error checking coverage threshold:" → `t('error_checking_coverage_thresh')`
1520. "Error checking dispute status:" → `t('error_checking_dispute_status')`
1521. "Error checking signup patterns:" → `t('error_checking_signup_patterns')`
1522. "Error checking status for model ${modelId}:" → `t('error_checking_status_for_mode')`
1523. "Error checking verification status:" → `t('error_checking_verification_st')`
1524. "Error contacting model" → `t('error_contacting_model')`
1525. "Error creating ZIP:" → `t('error_creating_zip')`
1526. "Error creating admin notification:" → `t('error_creating_admin_notificat')`
1527. "Error creating analytics tables:" → `t('error_creating_analytics_table')`
1528. "Error creating conversation:" → `t('error_creating_conversation')`
1529. "Error creating dispute:" → `t('error_creating_dispute')`
1530. "Error creating hiring record" → `t('error_creating_hiring_record')`
1531. "Error creating job:" → `t('error_creating_job')`
1532. "Error creating milestone:" → `t('error_creating_milestone')`
1533. "Error creating notification" → `t('error_creating_notification')`
1534. "Error creating notification:" → `t('error_creating_notification')`
1535. "Error creating order notification:" → `t('error_creating_order_notificat')`
1536. "Error creating profile:" → `t('error_creating_profile')`
1537. "Error creating profiles table:" → `t('error_creating_profiles_table')`
1538. "Error creating project" → `t('error_creating_project')`
1539. "Error creating referral:" → `t('error_creating_referral')`
1540. "Error creating review:" → `t('error_creating_review')`
1541. "Error creating shipment" → `t('error_creating_shipment')`
1542. "Error creating tenant" → `t('error_creating_tenant')`
1543. "Error creating test notification" → `t('error_creating_test_notificati')`
1544. "Error creating webhook" → `t('error_creating_webhook')`
1545. "Error creating webhook:" → `t('error_creating_webhook')`
1546. "Error creating/updating job:" → `t('error_creatingupdating_job')`
1547. "Error deleting job:" → `t('error_deleting_job')`
1548. "Error deleting milestone:" → `t('error_deleting_milestone')`
1549. "Error deleting portfolio project:" → `t('error_deleting_portfolio_proje')`
1550. "Error deleting webhook" → `t('error_deleting_webhook')`
1551. "Error deleting webhook:" → `t('error_deleting_webhook')`
1552. "Error deploying contract:" → `t('error_deploying_contract')`
1553. "Error deploying smart contract:" → `t('error_deploying_smart_contract')`
1554. "Error dismissing notification:" → `t('error_dismissing_notification')`
1555. "Error downloading Markdown" → `t('error_downloading_markdown')`
1556. "Error downloading PDF" → `t('error_downloading_pdf')`
1557. "Error downloading PDF:" → `t('error_downloading_pdf')`
1558. "Error during AI matching:" → `t('error_during_ai_matching')`
1559. "Error during health check for ${healthEndpoint}: ${error instanceof Error ? error.message : String(error)}. Duration: ${duration}ms. Stack: ${error instanceof Error ? error.stack?.substring(0, 100) : String(error)}...(truncated)" → `t('error_during_health_check_for_')`
1560. "Error during initial monitoring run:" → `t('error_during_initial_monitorin')`
1561. "Error during logout:" → `t('error_during_logout')`
1562. "Error during retry:" → `t('error_during_retry')`
1563. "Error during scheduled monitoring run:" → `t('error_during_scheduled_monitor')`
1564. "Error during signup" → `t('error_during_signup')`
1565. "Error enhancing profile:" → `t('error_enhancing_profile')`
1566. "Error executing script: ${error}" → `t('error_executing_script_error')`
1567. "Error fetching CSRF token:" → `t('error_fetching_csrf_token')`
1568. "Error fetching admin users:" → `t('error_fetching_admin_users')`
1569. "Error fetching applications:" → `t('error_fetching_applications')`
1570. "Error fetching behavior data:" → `t('error_fetching_behavior_data')`
1571. "Error fetching conversations:" → `t('error_fetching_conversations')`
1572. "Error fetching dispute messages:" → `t('error_fetching_dispute_message')`
1573. "Error fetching dispute:" → `t('error_fetching_dispute')`
1574. "Error fetching disputes:" → `t('error_fetching_disputes')`
1575. "Error fetching favorites:" → `t('error_fetching_favorites')`
1576. "Error fetching feature usage data:" → `t('error_fetching_feature_usage_d')`
1577. "Error fetching feature usage:" → `t('error_fetching_feature_usage')`
1578. "Error fetching file ${filePath}: ${error.message}" → `t('error_fetching_file_filepath_e')`
1579. "Error fetching interview:" → `t('error_fetching_interview')`
1580. "Error fetching interviews:" → `t('error_fetching_interviews')`
1581. "Error fetching job matches:" → `t('error_fetching_job_matches')`
1582. "Error fetching jobs:" → `t('error_fetching_jobs')`
1583. "Error fetching marketplace data:" → `t('error_fetching_marketplace_dat')`
1584. "Error fetching marketplace overview:" → `t('error_fetching_marketplace_ove')`
1585. "Error fetching messages:" → `t('error_fetching_messages')`
1586. "Error fetching milestone activities:" → `t('error_fetching_milestone_activ')`
1587. "Error fetching milestones:" → `t('error_fetching_milestones')`
1588. "Error fetching models:" → `t('error_fetching_models')`
1589. "Error fetching notifications:" → `t('error_fetching_notifications')`
1590. "Error fetching onboarding status:" → `t('error_fetching_onboarding_stat')`
1591. "Error fetching partners" → `t('error_fetching_partners')`
1592. "Error fetching pricing suggestion analytics:" → `t('error_fetching_pricing_suggest')`
1593. "Error fetching product" → `t('error_fetching_product')`
1594. "Error fetching product ${productId}:" → `t('error_fetching_product_product')`
1595. "Error fetching product ${productId}: ${response.status} ${response.statusText}" → `t('error_fetching_product_product')`
1596. "Error fetching profile" → `t('error_fetching_profile')`
1597. "Error fetching profile:" → `t('error_fetching_profile')`
1598. "Error fetching project notes:" → `t('error_fetching_project_notes')`
1599. "Error fetching project:" → `t('error_fetching_project')`
1600. "Error fetching referral code:" → `t('error_fetching_referral_code')`
1601. "Error fetching referrals:" → `t('error_fetching_referrals')`
1602. "Error fetching resume:" → `t('error_fetching_resume')`
1603. "Error fetching resumes:" → `t('error_fetching_resumes')`
1604. "Error fetching reviews" → `t('error_fetching_reviews')`
1605. "Error fetching reviews:" → `t('error_fetching_reviews')`
1606. "Error fetching rewards:" → `t('error_fetching_rewards')`
1607. "Error fetching search suggestions:" → `t('error_fetching_search_suggesti')`
1608. "Error fetching shared whitepaper:" → `t('error_fetching_shared_whitepap')`
1609. "Error fetching talent profile" → `t('error_fetching_talent_profile')`
1610. "Error fetching talent profiles:" → `t('error_fetching_talent_profiles')`
1611. "Error fetching transactions:" → `t('error_fetching_transactions')`
1612. "Error fetching user reviews:" → `t('error_fetching_user_reviews')`
1613. "Error fetching user session:" → `t('error_fetching_user_session')`
1614. "Error fetching wallet:" → `t('error_fetching_wallet')`
1615. "Error fetching webhooks" → `t('error_fetching_webhooks')`
1616. "Error fetching webhooks:" → `t('error_fetching_webhooks')`
1617. "Error finding referral code:" → `t('error_finding_referral_code')`
1618. "Error flagging content:" → `t('error_flagging_content')`
1619. "Error formatting date:" → `t('error_formatting_date')`
1620. "Error generating Solidity contract:" → `t('error_generating_solidity_cont')`
1621. "Error generating budget suggestion:" → `t('error_generating_budget_sugges')`
1622. "Error generating code" → `t('error_generating_code')`
1623. "Error generating content:" → `t('error_generating_content')`
1624. "Error generating contract:" → `t('error_generating_contract')`
1625. "Error generating description:" → `t('error_generating_description')`
1626. "Error generating enhanced content:" → `t('error_generating_enhanced_cont')`
1627. "Error generating enhanced profile:" → `t('error_generating_enhanced_prof')`
1628. "Error generating milestones:" → `t('error_generating_milestones')`
1629. "Error generating rate suggestion:" → `t('error_generating_rate_suggesti')`
1630. "Error generating referral code:" → `t('error_generating_referral_code')`
1631. "Error generating shareable link" → `t('error_generating_shareable_lin')`
1632. "Error generating smart contract:" → `t('error_generating_smart_contrac')`
1633. "Error generating whitepaper" → `t('error_generating_whitepaper')`
1634. "Error getting IP:" → `t('error_getting_ip')`
1635. "Error getting suggestions for section" → `t('error_getting_suggestions_for_')`
1636. "Error hiring candidate" → `t('error_hiring_candidate')`
1637. "Error hiring candidate:" → `t('error_hiring_candidate')`
1638. "Error hitting DSN check route" → `t('error_hitting_dsn_check_route')`
1639. "Error in AI chat" → `t('error_in_ai_chat')`
1640. "Error in AI chat:" → `t('error_in_ai_chat')`
1641. "Error in AI listing generator:" → `t('error_in_ai_listing_generator')`
1642. "Error in ai-chat function:" → `t('error_in_aichat_function')`
1643. "Error in ai-content-enhancer function:" → `t('error_in_aicontentenhancer_fun')`
1644. "Error in cancelInterview:" → `t('error_in_cancelinterview')`
1645. "Error in check-training-status function:" → `t('error_in_checktrainingstatus_f')`
1646. "Error in create-shared-whitepaper function:" → `t('error_in_createsharedwhitepape')`
1647. "Error in createWebhook:" → `t('error_in_createwebhook')`
1648. "Error in cron-daily-retention:" → `t('error_in_crondailyretention')`
1649. "Error in deleteWebhook:" → `t('error_in_deletewebhook')`
1650. "Error in fetchEquipment:" → `t('error_in_fetchequipment')`
1651. "Error in fetchInterviews:" → `t('error_in_fetchinterviews')`
1652. "Error in fetchReferralCode:" → `t('error_in_fetchreferralcode')`
1653. "Error in findBestMatches:" → `t('error_in_findbestmatches')`
1654. "Error in generate-content function:" → `t('error_in_generatecontent_funct')`
1655. "Error in generate-service-description:" → `t('error_in_generateservicedescri')`
1656. "Error in generate-whitepaper function:" → `t('error_in_generatewhitepaper_fu')`
1657. "Error in get-shared-whitepaper function:" → `t('error_in_getsharedwhitepaper_f')`
1658. "Error in get-whitepaper-section-suggestions function:" → `t('error_in_getwhitepapersections')`
1659. "Error in getUserWebhooks:" → `t('error_in_getuserwebhooks')`
1660. "Error in job form submission:" → `t('error_in_job_form_submission')`
1661. "Error in job-talent-matcher:" → `t('error_in_jobtalentmatcher')`
1662. "Error in matchmaking:" → `t('error_in_matchmaking')`
1663. "Error in normalizeSkillsWithAI:" → `t('error_in_normalizeskillswithai')`
1664. "Error in notify-legal-team function:" → `t('error_in_notifylegalteam_funct')`
1665. "Error in onboarding status hook:" → `t('error_in_onboarding_status_hoo')`
1666. "Error in process-quote function:" → `t('error_in_processquote_function')`
1667. "Error in processJobMatching:" → `t('error_in_processjobmatching')`
1668. "Error in profile-summary-generator function:" → `t('error_in_profilesummarygenerat')`
1669. "Error in requestInterview:" → `t('error_in_requestinterview')`
1670. "Error in respondToInterview:" → `t('error_in_respondtointerview')`
1671. "Error in resume-enhancer function:" → `t('error_in_resumeenhancer_functi')`
1672. "Error in resume-scorer function:" → `t('error_in_resumescorer_function')`
1673. "Error in send-newsletter function:" → `t('error_in_sendnewsletter_functi')`
1674. "Error in set-shared-whitepaper-public-status function:" → `t('error_in_setsharedwhitepaperpu')`
1675. "Error in talent-profile-enhancer function:" → `t('error_in_talentprofileenhancer')`
1676. "Error in testWebhook:" → `t('error_in_testwebhook')`
1677. "Error in toggleWebhook:" → `t('error_in_togglewebhook')`
1678. "Error in translate-content function:" → `t('error_in_translatecontent_func')`
1679. "Error in zion-gpt function:" → `t('error_in_ziongpt_function')`
1680. "Error initializing OrbitDB:" → `t('error_initializing_orbitdb')`
1681. "Error invoking moderation:" → `t('error_invoking_moderation')`
1682. "Error invoking zion-gpt for section suggestions:" → `t('error_invoking_ziongpt_for_sec')`
1683. "Error invoking zion-gpt:" → `t('error_invoking_ziongpt')`
1684. "Error loading dispute data:" → `t('error_loading_dispute_data')`
1685. "Error loading equipment:" → `t('error_loading_equipment')`
1686. "Error loading explainer copy:" → `t('error_loading_explainer_copy')`
1687. "Error loading job details:" → `t('error_loading_job_details')`
1688. "Error loading profile" → `t('error_loading_profile')`
1689. "Error loading project:" → `t('error_loading_project')`
1690. "Error loading resumes:" → `t('error_loading_resumes')`
1691. "Error loading upcoming interviews:" → `t('error_loading_upcoming_intervi')`
1692. "Error logging analytics event to Supabase" → `t('error_logging_analytics_event_')`
1693. "Error logging analytics event:" → `t('error_logging_analytics_event')`
1694. "Error managing transaction:" → `t('error_managing_transaction')`
1695. "Error marking all notifications as read:" → `t('error_marking_all_notification')`
1696. "Error marking application as viewed:" → `t('error_marking_application_as_v')`
1697. "Error marking messages as read:" → `t('error_marking_messages_as_read')`
1698. "Error marking notification as read:" → `t('error_marking_notification_as_')`
1699. "Error moderating listing:" → `t('error_moderating_listing')`
1700. "Error parsing AI response:" → `t('error_parsing_ai_response')`
1701. "Error parsing OpenAI response:" → `t('error_parsing_openai_response')`
1702. "Error polling auth state:" → `t('error_polling_auth_state')`
1703. "Error processing ${event.type}: ${err.message}" → `t('error_processing_eventtype_err')`
1704. "Error processing customer.subscription.deleted: ${err.message}" → `t('error_processing_customersubsc')`
1705. "Error processing event" → `t('error_processing_event')`
1706. "Error processing hire request:" → `t('error_processing_hire_request')`
1707. "Error processing logs:" → `t('error_processing_logs')`
1708. "Error processing milestone deadlines:" → `t('error_processing_milestone_dea')`
1709. "Error processing request:" → `t('error_processing_request')`
1710. "Error processing resume scoring:" → `t('error_processing_resume_scorin')`
1711. "Error recording activity:" → `t('error_recording_activity')`
1712. "Error rejecting milestone:" → `t('error_rejecting_milestone')`
1713. "Error report received, analysis initiated." → `t('error_report_received_analysis')`
1714. "Error reporting review:" → `t('error_reporting_review')`
1715. "Error reporting to logger:" → `t('error_reporting_to_logger')`
1716. "Error requesting interview:" → `t('error_requesting_interview')`
1717. "Error resolving dispute:" → `t('error_resolving_dispute')`
1718. "Error responding to interview:" → `t('error_responding_to_interview')`
1719. "Error response data in fetchEquipment:" → `t('error_response_data_in_fetcheq')`
1720. "Error saving blog post:" → `t('error_saving_blog_post')`
1721. "Error saving feedback:" → `t('error_saving_feedback')`
1722. "Error saving onboarding data:" → `t('error_saving_onboarding_data')`
1723. "Error saving preferences:" → `t('error_saving_preferences')`
1724. "Error saving shared whitepaper:" → `t('error_saving_shared_whitepaper')`
1725. "Error searching talent:" → `t('error_searching_talent')`
1726. "Error sending logError to backend:" → `t('error_sending_logerror_to_back')`
1727. "Error sending message:" → `t('error_sending_message')`
1728. "Error sending notification" → `t('error_sending_notification')`
1729. "Error sending test newsletter:" → `t('error_sending_test_newsletter')`
1730. "Error sending test webhook:" → `t('error_sending_test_webhook')`
1731. "Error setting up profiles table:" → `t('error_setting_up_profiles_tabl')`
1732. "Error submitting dispute:" → `t('error_submitting_dispute')`
1733. "Error submitting hire request:" → `t('error_submitting_hire_request')`
1734. "Error submitting partner application:" → `t('error_submitting_partner_appli')`
1735. "Error submitting quote" → `t('error_submitting_quote')`
1736. "Error submitting quote:" → `t('error_submitting_quote')`
1737. "Error submitting review:" → `t('error_submitting_review')`
1738. "Error submitting to counsel" → `t('error_submitting_to_counsel')`
1739. "Error subscribing:" → `t('error_subscribing')`
1740. "Error testing webhook" → `t('error_testing_webhook')`
1741. "Error testing webhook:" → `t('error_testing_webhook')`
1742. "Error toggling model active state:" → `t('error_toggling_model_active_st')`
1743. "Error toggling public status" → `t('error_toggling_public_status')`
1744. "Error toggling saved talent" → `t('error_toggling_saved_talent')`
1745. "Error toggling saved talent:" → `t('error_toggling_saved_talent')`
1746. "Error toggling tenant status:" → `t('error_toggling_tenant_status')`
1747. "Error toggling webhook:" → `t('error_toggling_webhook')`
1748. "Error tracking pricing suggestion:" → `t('error_tracking_pricing_suggest')`
1749. "Error tracking referral" → `t('error_tracking_referral')`
1750. "Error tracking referral:" → `t('error_tracking_referral')`
1751. "Error translating ${field}:" → `t('error_translating_field')`
1752. "Error translating key ${key}:" → `t('error_translating_key_key')`
1753. "Error triggering AI matching:" → `t('error_triggering_ai_matching')`
1754. "Error updating application status:" → `t('error_updating_application_sta')`
1755. "Error updating availability" → `t('error_updating_availability')`
1756. "Error updating availability:" → `t('error_updating_availability')`
1757. "Error updating dispute status:" → `t('error_updating_dispute_status')`
1758. "Error updating job match status:" → `t('error_updating_job_match_statu')`
1759. "Error updating job status:" → `t('error_updating_job_status')`
1760. "Error updating milestone status:" → `t('error_updating_milestone_statu')`
1761. "Error updating milestone:" → `t('error_updating_milestone')`
1762. "Error updating partner settings" → `t('error_updating_partner_setting')`
1763. "Error updating partner status" → `t('error_updating_partner_status')`
1764. "Error updating portfolio project:" → `t('error_updating_portfolio_proje')`
1765. "Error updating profile" → `t('error_updating_profile')`
1766. "Error updating profile:" → `t('error_updating_profile')`
1767. "Error updating project status:" → `t('error_updating_project_status')`
1768. "Error updating review:" → `t('error_updating_review')`
1769. "Error updating webhook" → `t('error_updating_webhook')`
1770. "Error uploading CV:" → `t('error_uploading_cv')`
1771. "Error uploading deliverable:" → `t('error_uploading_deliverable')`
1772. "Error verifying DNS:" → `t('error_verifying_dns')`
1773. "Error:" → `t('error')`
1774. "Error: ${errorMessage}" → `t('error_errormessage')`
1775. "Error: Wallet context not found" → `t('error_wallet_context_not_found')`
1776. "ErrorBoundary caught an error:" → `t('errorboundary_caught_an_error')`
1777. "ErrorBoundary integration" → `t('errorboundary_integration')`
1778. "ErrorToken" → `t('errortoken')`
1779. "Errors" → `t('errors')`
1780. "Escalated" → `t('escalated')`
1781. "Escape" → `t('escape')`
1782. "Escape hides suggestions and blurs input" → `t('escape_hides_suggestions_and_b')`
1783. "Escrow" → `t('escrow')`
1784. "Escrow Settings" → `t('escrow_settings')`
1785. "Escrow released successfully" → `t('escrow_released_successfully')`
1786. "Estimate Fee" → `t('estimate_fee')`
1787. "Estimated Budget" → `t('estimated_budget')`
1788. "Estimated Tax" → `t('estimated_tax')`
1789. "Ethan Patel" → `t('ethan_patel')`
1790. "Europe" → `t('europe')`
1791. "Event" → `t('event')`
1792. "Event Type" → `t('event_type')`
1793. "Event Types" → `t('event_types')`
1794. "Every profile is vetted for quality and authenticity so you can hire with confidence." → `t('every_profile_is_vetted_for_qu')`
1795. "Everything You Need On The Go" → `t('everything_you_need_on_the_go')`
1796. "Everything you love about Zion, now in your pocket. Our mobile app brings all the powerful features you need to succeed." → `t('everything_you_love_about_zion')`
1797. "Example Request" → `t('example_request')`
1798. "Excellent" → `t('excellent')`
1799. "ExceptionError" → `t('exceptionerror')`
1800. "Exchange your ZION$ for rewards and perks" → `t('exchange_your_zion_for_rewards')`
1801. "Exclusive hiring discount inside" → `t('exclusive_hiring_discount_insi')`
1802. "Exclusive perks for top partners" → `t('exclusive_perks_for_top_partne')`
1803. "Expected End Date" → `t('expected_end_date')`
1804. "Expected Start Date" → `t('expected_start_date')`
1805. "Experience" → `t('experience')`
1806. "Experience Level" → `t('experience_level')`
1807. "Experience range" → `t('experience_range')`
1808. "Experience verification" → `t('experience_verification')`
1809. "Experience: 3+ years" → `t('experience_3_years')`
1810. "Experienced AI engineer with expertise in machine learning and computer vision" → `t('experienced_ai_engineer_with_e')`
1811. "Expert" → `t('expert')`
1812. "Expert perspectives on artificial intelligence, tech innovation, and digital transformation" → `t('expert_perspectives_on_artific')`
1813. "Expired" → `t('expired')`
1814. "Expiring Soon" → `t('expiring_soon')`
1815. "Explainer Copy Blocks" → `t('explainer_copy_blocks')`
1816. "Explore ${category.name.toLowerCase()} in our marketplace" → `t('explore_categorynametolowercas')`
1817. "Explore AI tools" → `t('explore_ai_tools')`
1818. "Explore All Features" → `t('explore_all_features')`
1819. "Explore Full Marketplace" → `t('explore_full_marketplace')`
1820. "Explore Green IT Solutions" → `t('explore_green_it_solutions')`
1821. "Explore Our Marketplace" → `t('explore_our_marketplace')`
1822. "Explore Services button navigates to /services" → `t('explore_services_button_naviga')`
1823. "Explore Zion" → `t('explore_zion')`
1824. "Explore Zion Zaps" → `t('explore_zion_zaps')`
1825. "Explore our collection in this category" → `t('explore_our_collection_in_this')`
1826. "Extension health check error:" → `t('extension_health_check_error')`
1827. "F5 BIG-IP Virtual Edition" → `t('f5_bigip_virtual_edition')`
1828. "Facebook" → `t('facebook')`
1829. "Facebook login error:" → `t('facebook_login_error')`
1830. "Facebook login failed" → `t('facebook_login_failed')`
1831. "Failed" → `t('failed')`
1832. "Failed to add favorite" → `t('failed_to_add_favorite')`
1833. "Failed to add files to Helia." → `t('failed_to_add_files_to_helia')`
1834. "Failed to add note" → `t('failed_to_add_note')`
1835. "Failed to add to cart:" → `t('failed_to_add_to_cart')`
1836. "Failed to apply performance optimizations" → `t('failed_to_apply_performance_op')`
1837. "Failed to cancel the interview. Please try again." → `t('failed_to_cancel_the_interview')`
1838. "Failed to change language" → `t('failed_to_change_language')`
1839. "Failed to check scoring status" → `t('failed_to_check_scoring_status')`
1840. "Failed to collect bundle info:" → `t('failed_to_collect_bundle_info')`
1841. "Failed to complete signup rewards" → `t('failed_to_complete_signup_rewa')`
1842. "Failed to connect wallet" → `t('failed_to_connect_wallet')`
1843. "Failed to connect wallet. Please try again." → `t('failed_to_connect_wallet_pleas')`
1844. "Failed to contact background script" → `t('failed_to_contact_background_s')`
1845. "Failed to copy error details:" → `t('failed_to_copy_error_details')`
1846. "Failed to copy link" → `t('failed_to_copy_link')`
1847. "Failed to create GitHub issue:" → `t('failed_to_create_github_issue')`
1848. "Failed to create account" → `t('failed_to_create_account')`
1849. "Failed to create checkout session" → `t('failed_to_create_checkout_sess')`
1850. "Failed to create conversation" → `t('failed_to_create_conversation')`
1851. "Failed to create cwd log directory at ${cwdPath}" → `t('failed_to_create_cwd_log_direc')`
1852. "Failed to create fallback log directory at ${fallback}" → `t('failed_to_create_fallback_log_')`
1853. "Failed to create milestone:" → `t('failed_to_create_milestone')`
1854. "Failed to create notification:" → `t('failed_to_create_notification')`
1855. "Failed to create payment" → `t('failed_to_create_payment')`
1856. "Failed to create post" → `t('failed_to_create_post')`
1857. "Failed to create proposal." → `t('failed_to_create_proposal')`
1858. "Failed to create referral" → `t('failed_to_create_referral')`
1859. "Failed to create review" → `t('failed_to_create_review')`
1860. "Failed to create session" → `t('failed_to_create_session')`
1861. "Failed to create shared whitepaper, no data returned after insert." → `t('failed_to_create_shared_whitep')`
1862. "Failed to create tenant" → `t('failed_to_create_tenant')`
1863. "Failed to create tmp log directory at ${tmpPath}" → `t('failed_to_create_tmp_log_direc')`
1864. "Failed to create webhook" → `t('failed_to_create_webhook')`
1865. "Failed to decode token" → `t('failed_to_decode_token')`
1866. "Failed to delete job" → `t('failed_to_delete_job')`
1867. "Failed to delete milestone:" → `t('failed_to_delete_milestone')`
1868. "Failed to delete quote:" → `t('failed_to_delete_quote')`
1869. "Failed to delete webhook" → `t('failed_to_delete_webhook')`
1870. "Failed to deploy smart contract" → `t('failed_to_deploy_smart_contrac')`
1871. "Failed to download Markdown file." → `t('failed_to_download_markdown_fi')`
1872. "Failed to download PDF file." → `t('failed_to_download_pdf_file')`
1873. "Failed to enhance content" → `t('failed_to_enhance_content')`
1874. "Failed to enhance profile" → `t('failed_to_enhance_profile')`
1875. "Failed to ensure single instance" → `t('failed_to_ensure_single_instan')`
1876. "Failed to fetch" → `t('failed_to_fetch')`
1877. "Failed to fetch applications" → `t('failed_to_fetch_applications')`
1878. "Failed to fetch blog post" → `t('failed_to_fetch_blog_post')`
1879. "Failed to fetch dispute details" → `t('failed_to_fetch_dispute_detail')`
1880. "Failed to fetch disputes" → `t('failed_to_fetch_disputes')`
1881. "Failed to fetch equipment" → `t('failed_to_fetch_equipment')`
1882. "Failed to fetch favorites" → `t('failed_to_fetch_favorites')`
1883. "Failed to fetch jobs" → `t('failed_to_fetch_jobs')`
1884. "Failed to fetch jobs. Please try again." → `t('failed_to_fetch_jobs_please_tr')`
1885. "Failed to fetch marketplace overview" → `t('failed_to_fetch_marketplace_ov')`
1886. "Failed to fetch messages" → `t('failed_to_fetch_messages')`
1887. "Failed to fetch milestones" → `t('failed_to_fetch_milestones')`
1888. "Failed to fetch order" → `t('failed_to_fetch_order')`
1889. "Failed to fetch orders" → `t('failed_to_fetch_orders')`
1890. "Failed to fetch pending jobs" → `t('failed_to_fetch_pending_jobs')`
1891. "Failed to fetch profile." → `t('failed_to_fetch_profile')`
1892. "Failed to fetch project details" → `t('failed_to_fetch_project_detail')`
1893. "Failed to fetch quiz" → `t('failed_to_fetch_quiz')`
1894. "Failed to fetch recommendations" → `t('failed_to_fetch_recommendation')`
1895. "Failed to fetch reviews" → `t('failed_to_fetch_reviews')`
1896. "Failed to fetch services: ${res.status}" → `t('failed_to_fetch_services_resst')`
1897. "Failed to fetch shared whitepaper: ${error.message}" → `t('failed_to_fetch_shared_whitepa')`
1898. "Failed to fetch suggestions" → `t('failed_to_fetch_suggestions')`
1899. "Failed to fetch summary" → `t('failed_to_fetch_summary')`
1900. "Failed to fetch talent profiles" → `t('failed_to_fetch_talent_profile')`
1901. "Failed to fetch user" → `t('failed_to_fetch_user')`
1902. "Failed to fetch version history" → `t('failed_to_fetch_version_histor')`
1903. "Failed to fetch wallet" → `t('failed_to_fetch_wallet')`
1904. "Failed to fetch webhooks" → `t('failed_to_fetch_webhooks')`
1905. "Failed to generate" → `t('failed_to_generate')`
1906. "Failed to generate Solidity contract" → `t('failed_to_generate_solidity_co')`
1907. "Failed to generate content. Please try again." → `t('failed_to_generate_content_ple')`
1908. "Failed to generate contract" → `t('failed_to_generate_contract')`
1909. "Failed to generate description. Please try again." → `t('failed_to_generate_description')`
1910. "Failed to generate enhanced profile content" → `t('failed_to_generate_enhanced_pr')`
1911. "Failed to generate milestones" → `t('failed_to_generate_milestones')`
1912. "Failed to generate optimized listing content" → `t('failed_to_generate_optimized_l')`
1913. "Failed to generate podcast script" → `t('failed_to_generate_podcast_scr')`
1914. "Failed to generate profile content" → `t('failed_to_generate_profile_con')`
1915. "Failed to generate service description" → `t('failed_to_generate_service_des')`
1916. "Failed to generate shareable link." → `t('failed_to_generate_shareable_l')`
1917. "Failed to generate shareable link:" → `t('failed_to_generate_shareable_l')`
1918. "Failed to generate smart contract" → `t('failed_to_generate_smart_contr')`
1919. "Failed to get ID for shareable link for counsel." → `t('failed_to_get_id_for_shareable')`
1920. "Failed to get ID for shareable link." → `t('failed_to_get_id_for_shareable')`
1921. "Failed to initialize performance monitoring" → `t('failed_to_initialize_performan')`
1922. "Failed to list jobs" → `t('failed_to_list_jobs')`
1923. "Failed to list talent" → `t('failed_to_list_talent')`
1924. "Failed to load Dashboard component:" → `t('failed_to_load_dashboard_compo')`
1925. "Failed to load article" → `t('failed_to_load_article')`
1926. "Failed to load articles" → `t('failed_to_load_articles')`
1927. "Failed to load category" → `t('failed_to_load_category')`
1928. "Failed to load component" → `t('failed_to_load_component')`
1929. "Failed to load dispute" → `t('failed_to_load_dispute')`
1930. "Failed to load equipment data. Please try again." → `t('failed_to_load_equipment_data_')`
1931. "Failed to load equipment details" → `t('failed_to_load_equipment_detai')`
1932. "Failed to load home page." → `t('failed_to_load_home_page')`
1933. "Failed to load image" → `t('failed_to_load_image')`
1934. "Failed to load job" → `t('failed_to_load_job')`
1935. "Failed to load job suggestions" → `t('failed_to_load_job_suggestions')`
1936. "Failed to load marketplace data. Please try again." → `t('failed_to_load_marketplace_dat')`
1937. "Failed to load messages. Please try again." → `t('failed_to_load_messages_please')`
1938. "Failed to load moderation logs" → `t('failed_to_load_moderation_logs')`
1939. "Failed to load notes" → `t('failed_to_load_notes')`
1940. "Failed to load partner data" → `t('failed_to_load_partner_data')`
1941. "Failed to load profile" → `t('failed_to_load_profile')`
1942. "Failed to load profile data" → `t('failed_to_load_profile_data')`
1943. "Failed to load profile." → `t('failed_to_load_profile')`
1944. "Failed to load profile. Please try again later." → `t('failed_to_load_profile_please_')`
1945. "Failed to load reviews" → `t('failed_to_load_reviews')`
1946. "Failed to load reviews. Please try again later." → `t('failed_to_load_reviews_please_')`
1947. "Failed to load services" → `t('failed_to_load_services')`
1948. "Failed to load services." → `t('failed_to_load_services')`
1949. "Failed to load services. Please try again." → `t('failed_to_load_services_please')`
1950. "Failed to load services:" → `t('failed_to_load_services')`
1951. "Failed to load session" → `t('failed_to_load_session')`
1952. "Failed to load talent profile." → `t('failed_to_load_talent_profile')`
1953. "Failed to load tenant configuration" → `t('failed_to_load_tenant_configur')`
1954. "Failed to load transactions" → `t('failed_to_load_transactions')`
1955. "Failed to log error to LogRocket:" → `t('failed_to_log_error_to_logrock')`
1956. "Failed to log toast error:" → `t('failed_to_log_toast_error')`
1957. "Failed to logout after 401" → `t('failed_to_logout_after_401')`
1958. "Failed to navigate to checkout:" → `t('failed_to_navigate_to_checkout')`
1959. "Failed to open job posting page" → `t('failed_to_open_job_posting_pag')`
1960. "Failed to open notifications page" → `t('failed_to_open_notifications_p')`
1961. "Failed to open talent page" → `t('failed_to_open_talent_page')`
1962. "Failed to parse AI response" → `t('failed_to_parse_ai_response')`
1963. "Failed to parse the generated content" → `t('failed_to_parse_the_generated_')`
1964. "Failed to post job" → `t('failed_to_post_job')`
1965. "Failed to prepare or send error to custom backend:" → `t('failed_to_prepare_or_send_erro')`
1966. "Failed to process checkout. Please try again." → `t('failed_to_process_checkout_ple')`
1967. "Failed to process form" → `t('failed_to_process_form')`
1968. "Failed to process hire request" → `t('failed_to_process_hire_request')`
1969. "Failed to process log entries" → `t('failed_to_process_log_entries')`
1970. "Failed to process request" → `t('failed_to_process_request')`
1971. "Failed to report error to Sentry:" → `t('failed_to_report_error_to_sent')`
1972. "Failed to report error to monitoring service:" → `t('failed_to_report_error_to_moni')`
1973. "Failed to report error:" → `t('failed_to_report_error')`
1974. "Failed to report review" → `t('failed_to_report_review')`
1975. "Failed to reset password. Please try again." → `t('failed_to_reset_password_pleas')`
1976. "Failed to resolve dispute" → `t('failed_to_resolve_dispute')`
1977. "Failed to respond to the interview request. Please try again." → `t('failed_to_respond_to_the_inter')`
1978. "Failed to restart (PM2) service" → `t('failed_to_restart_pm2_service')`
1979. "Failed to retrieve health information." → `t('failed_to_retrieve_health_info')`
1980. "Failed to retrieve health information:" → `t('failed_to_retrieve_health_info')`
1981. "Failed to rollback new site assignment:" → `t('failed_to_rollback_new_site_as')`
1982. "Failed to save feedback" → `t('failed_to_save_feedback')`
1983. "Failed to save metadata" → `t('failed_to_save_metadata')`
1984. "Failed to save push subscription" → `t('failed_to_save_push_subscripti')`
1985. "Failed to save settings" → `t('failed_to_save_settings')`
1986. "Failed to save subscription" → `t('failed_to_save_subscription')`
1987. "Failed to save version" → `t('failed_to_save_version')`
1988. "Failed to save version." → `t('failed_to_save_version')`
1989. "Failed to save version:" → `t('failed_to_save_version')`
1990. "Failed to save your preferences. Please try again." → `t('failed_to_save_your_preference')`
1991. "Failed to schedule interview" → `t('failed_to_schedule_interview')`
1992. "Failed to send Discord alert" → `t('failed_to_send_discord_alert')`
1993. "Failed to send Slack alert" → `t('failed_to_send_slack_alert')`
1994. "Failed to send alert to Discord. Error: Network Error" → `t('failed_to_send_alert_to_discor')`
1995. "Failed to send error to webhook:" → `t('failed_to_send_error_to_webhoo')`
1996. "Failed to send message" → `t('failed_to_send_message')`
1997. "Failed to send message. Please try again." → `t('failed_to_send_message_please_')`
1998. "Failed to send receipt" → `t('failed_to_send_receipt')`
1999. "Failed to send reset link" → `t('failed_to_send_reset_link')`
2000. "Failed to send reset link. Please try again." → `t('failed_to_send_reset_link_plea')`
2001. "Failed to send test newsletter. Please try again." → `t('failed_to_send_test_newsletter')`
2002. "Failed to send test webhook" → `t('failed_to_send_test_webhook')`
2003. "Failed to show report confirmation" → `t('failed_to_show_report_confirma')`
2004. "Failed to sign in." → `t('failed_to_sign_in')`
2005. "Failed to sign in. Please check your credentials." → `t('failed_to_sign_in_please_check')`
2006. "Failed to sign up." → `t('failed_to_sign_up')`
2007. "Failed to sign up. Please try again." → `t('failed_to_sign_up_please_try_a')`
2008. "Failed to start self-heal command" → `t('failed_to_start_selfheal_comma')`
2009. "Failed to submit application" → `t('failed_to_submit_application')`
2010. "Failed to submit application:" → `t('failed_to_submit_application')`
2011. "Failed to submit dispute" → `t('failed_to_submit_dispute')`
2012. "Failed to submit dispute. Please try again." → `t('failed_to_submit_dispute_pleas')`
2013. "Failed to submit feedback" → `t('failed_to_submit_feedback')`
2014. "Failed to submit quote" → `t('failed_to_submit_quote')`
2015. "Failed to submit quote request. Status: ${response.status}" → `t('failed_to_submit_quote_request')`
2016. "Failed to submit review" → `t('failed_to_submit_review')`
2017. "Failed to submit to counsel:" → `t('failed_to_submit_to_counsel')`
2018. "Failed to test webhook" → `t('failed_to_test_webhook')`
2019. "Failed to toggle favorite" → `t('failed_to_toggle_favorite')`
2020. "Failed to update application status:" → `t('failed_to_update_application_s')`
2021. "Failed to update dispute status" → `t('failed_to_update_dispute_statu')`
2022. "Failed to update flag" → `t('failed_to_update_flag')`
2023. "Failed to update job status" → `t('failed_to_update_job_status')`
2024. "Failed to update job status:" → `t('failed_to_update_job_status')`
2025. "Failed to update log" → `t('failed_to_update_log')`
2026. "Failed to update milestone:" → `t('failed_to_update_milestone')`
2027. "Failed to update order" → `t('failed_to_update_order')`
2028. "Failed to update partner settings" → `t('failed_to_update_partner_setti')`
2029. "Failed to update partner status" → `t('failed_to_update_partner_statu')`
2030. "Failed to update profile" → `t('failed_to_update_profile')`
2031. "Failed to update profile." → `t('failed_to_update_profile')`
2032. "Failed to update profile. Please try again." → `t('failed_to_update_profile_pleas')`
2033. "Failed to update project status" → `t('failed_to_update_project_statu')`
2034. "Failed to update public status." → `t('failed_to_update_public_status')`
2035. "Failed to update public status:" → `t('failed_to_update_public_status')`
2036. "Failed to update quote" → `t('failed_to_update_quote')`
2037. "Failed to update quote:" → `t('failed_to_update_quote')`
2038. "Failed to update review" → `t('failed_to_update_review')`
2039. "Failed to update review: ${error.message}" → `t('failed_to_update_review_errorm')`
2040. "Failed to update status" → `t('failed_to_update_status')`
2041. "Failed to update status:" → `t('failed_to_update_status')`
2042. "Failed to update tenant" → `t('failed_to_update_tenant')`
2043. "Failed to update transaction" → `t('failed_to_update_transaction')`
2044. "Failed to update webhook" → `t('failed_to_update_webhook')`
2045. "Failed to update webhook or webhook not found" → `t('failed_to_update_webhook_or_we')`
2046. "Failed to update whitepaper status: ${updateError.message}" → `t('failed_to_update_whitepaper_st')`
2047. "Failed to update, no data returned." → `t('failed_to_update_no_data_retur')`
2048. "Failed to upload CV" → `t('failed_to_upload_cv')`
2049. "Failed to upload deliverable:" → `t('failed_to_upload_deliverable')`
2050. "Failed to use WATCHDOG_LOG_PATH at ${envPath}. Falling back to local logs directory." → `t('failed_to_use_watchdoglogpath_')`
2051. "Fair" → `t('fair')`
2052. "Fair launch. Include a placeholder" → `t('fair_launch_include_a_placehol')`
2053. "Fast Shipping" → `t('fast_shipping')`
2054. "Fast access to common tasks" → `t('fast_access_to_common_tasks')`
2055. "Favorites" → `t('favorites')`
2056. "Feature - Zion" → `t('feature_zion')`
2057. "Feature Usage" → `t('feature_usage')`
2058. "Feature not found" → `t('feature_not_found')`
2059. "Feature purchase" → `t('feature_purchase')`
2060. "Feature request: Team collaboration tools" → `t('feature_request_team_collabora')`
2061. "Feature title" → `t('feature_title')`
2062. "Featured" → `t('featured')`
2063. "Featured Article" → `t('featured_article')`
2064. "Featured Countries" → `t('featured_countries')`
2065. "Featured Listings" → `t('featured_listings')`
2066. "Featured Speaker: Founder" → `t('featured_speaker_founder')`
2067. "Featured on Zion AI home page" → `t('featured_on_zion_ai_home_page')`
2068. "Features" → `t('features')`
2069. "Feedback" → `t('feedback')`
2070. "Feedback & Suggestions" → `t('feedback_suggestions')`
2071. "Feedback Overview" → `t('feedback_overview')`
2072. "Fetch error:" → `t('fetch_error')`
2073. "Fetch failed" → `t('fetch_failed')`
2074. "Field of Study" → `t('field_of_study')`
2075. "Figma" → `t('figma')`
2076. "Figma timeline" → `t('figma_timeline')`
2077. "Files" → `t('files')`
2078. "Files related to this dispute" → `t('files_related_to_this_dispute')`
2079. "Fill in the details below to create a job posting." → `t('fill_in_the_details_below_to_c')`
2080. "Filled" → `t('filled')`
2081. "Filter" → `t('filter')`
2082. "Filter & Sort" → `t('filter_sort')`
2083. "Filter by Status" → `t('filter_by_status')`
2084. "Filter by Type" → `t('filter_by_type')`
2085. "Filter by category" → `t('filter_by_category')`
2086. "Filter by date" → `t('filter_by_date')`
2087. "Filters" → `t('filters')`
2088. "Filters updated" → `t('filters_updated')`
2089. "Finalized or declined quotes" → `t('finalized_or_declined_quotes')`
2090. "Finance" → `t('finance')`
2091. "Financial Analytics Suite" → `t('financial_analytics_suite')`
2092. "Find AI Matches" → `t('find_ai_matches')`
2093. "Find Investors" → `t('find_investors')`
2094. "Find Matches" → `t('find_matches')`
2095. "Find Opportunities" → `t('find_opportunities')`
2096. "Find Talent" → `t('find_talent')`
2097. "Find Your AI Talent" → `t('find_your_ai_talent')`
2098. "Find answers to common questions about AI product listings, IT equipment rentals, and datacenter maintenance services" → `t('find_answers_to_common_questio')`
2099. "Find exactly what you need with fast, filterable search powered by Elasticsearch." → `t('find_exactly_what_you_need_wit')`
2100. "Find opportunities matched to your skills and experience" → `t('find_opportunities_matched_to_')`
2101. "Find specialized hardware for development and research." → `t('find_specialized_hardware_for_')`
2102. "Find the best AI talent" → `t('find_the_best_ai_talent')`
2103. "Find work and showcase your skills" → `t('find_work_and_showcase_your_sk')`
2104. "Fine-tuning job not found" → `t('finetuning_job_not_found')`
2105. "Finish" → `t('finish')`
2106. "First Contentful Paint" → `t('first_contentful_paint')`
2107. "First Hour of Service" → `t('first_hour_of_service')`
2108. "First Post" → `t('first_post')`
2109. "First Purchase" → `t('first_purchase')`
2110. "First hour included" → `t('first_hour_included')`
2111. "First hour of onsite technical support" → `t('first_hour_of_onsite_technical')`
2112. "First name" → `t('first_name')`
2113. "First post" → `t('first_post')`
2114. "Fitness Tracking Platform" → `t('fitness_tracking_platform')`
2115. "Fix failed" → `t('fix_failed')`
2116. "Fix triggered successfully" → `t('fix_triggered_successfully')`
2117. "Fixed Budget" → `t('fixed_budget')`
2118. "Fixed Dates" → `t('fixed_dates')`
2119. "Fixed Price" → `t('fixed_price')`
2120. "Fixed Search Bar Issues" → `t('fixed_search_bar_issues')`
2121. "Fixed budget" → `t('fixed_budget')`
2122. "Flag" → `t('flag')`
2123. "Flag updated" → `t('flag_updated')`
2124. "Flex-wrap behavior works correctly" → `t('flexwrap_behavior_works_correc')`
2125. "Flexible" → `t('flexible')`
2126. "Flexible Timeline" → `t('flexible_timeline')`
2127. "Flexible Work" → `t('flexible_work')`
2128. "Focus indicators are visible" → `t('focus_indicators_are_visible')`
2129. "Focus on how the platform can help your audience solve their AI talent needs" → `t('focus_on_how_the_platform_can_')`
2130. "Focus on leadership skills" → `t('focus_on_leadership_skills')`
2131. "Follow these steps to earn rewards through referrals" → `t('follow_these_steps_to_earn_rew')`
2132. "Following" → `t('following')`
2133. "Food Delivery App" → `t('food_delivery_app')`
2134. "Footer" → `t('footer')`
2135. "Footer Newsletter Form" → `t('footer_newsletter_form')`
2136. "Footer columns stack properly at narrow width" → `t('footer_columns_stack_properly_')`
2137. "Footer columns stack without poor layout" → `t('footer_columns_stack_without_p')`
2138. "Footer has no accessibility violations" → `t('footer_has_no_accessibility_vi')`
2139. "Footer legal links wrap properly" → `t('footer_legal_links_wrap_proper')`
2140. "Footer newsletter section is responsive" → `t('footer_newsletter_section_is_r')`
2141. "Footer social icons wrap correctly" → `t('footer_social_icons_wrap_corre')`
2142. "For Talent & Service Providers" → `t('for_talent_service_providers')`
2143. "For Talent Seekers" → `t('for_talent_seekers')`
2144. "For detailed incident history and real-time updates:" → `t('for_detailed_incident_history_')`
2145. "Forbidden" → `t('forbidden')`
2146. "Forbidden path" → `t('forbidden_path')`
2147. "Force reload with cache bypass" → `t('force_reload_with_cache_bypass')`
2148. "Forgot Password" → `t('forgot_password')`
2149. "Forgot Password Page" → `t('forgot_password_page')`
2150. "Forgot password error:" → `t('forgot_password_error')`
2151. "ForgotPasswordPage fetch failure" → `t('forgotpasswordpage_fetch_failu')`
2152. "Form Submissions" → `t('form_submissions')`
2153. "Form Validation Error" → `t('form_validation_error')`
2154. "Form submissions will be synced when you reconnect" → `t('form_submissions_will_be_synce')`
2155. "FormControl" → `t('formcontrol')`
2156. "FormDescription" → `t('formdescription')`
2157. "FormLabel" → `t('formlabel')`
2158. "FormMessage" → `t('formmessage')`
2159. "Forum" → `t('forum')`
2160. "Found ${brokenExternal} broken external link(s) (4xx/5xx status)." → `t('found_brokenexternal_broken_ex')`
2161. "Found ${files.length} files to fix" → `t('found_fileslength_files_to_fix')`
2162. "Foundation Charter" → `t('foundation_charter')`
2163. "Foundational Beliefs" → `t('foundational_beliefs')`
2164. "Founder Backup Vault" → `t('founder_backup_vault')`
2165. "Founder Backup Vault - Zion" → `t('founder_backup_vault_zion')`
2166. "Founder Dashboard" → `t('founder_dashboard')`
2167. "Founder Keynote" → `t('founder_keynote')`
2168. "Founder bot error" → `t('founder_bot_error')`
2169. "Founding principles" → `t('founding_principles')`
2170. "Full Draft" → `t('full_draft')`
2171. "Full IT Onsite Services Pricing" → `t('full_it_onsite_services_pricin')`
2172. "Full Legal Name" → `t('full_legal_name')`
2173. "Full Name" → `t('full_name')`
2174. "Full Name must be at least 2 characters long" → `t('full_name_must_be_at_least_2_c')`
2175. "Full Stack Dev • 8 years exp" → `t('full_stack_dev_8_years_exp')`
2176. "Full Stack Developer" → `t('full_stack_developer')`
2177. "Full Stack Engineer" → `t('full_stack_engineer')`
2178. "Full Time" → `t('full_time')`
2179. "Full access to all features and settings" → `t('full_access_to_all_features_an')`
2180. "Full name" → `t('full_name')`
2181. "Full name is required" → `t('full_name_is_required')`
2182. "Full-Stack Developer" → `t('fullstack_developer')`
2183. "Full-Stack Developer & React Expert" → `t('fullstack_developer_react_expe')`
2184. "Full-stack Web App Development" → `t('fullstack_web_app_development')`
2185. "Full-time" → `t('fulltime')`
2186. "Function error:" → `t('function_error')`
2187. "Funding Model" → `t('funding_model')`
2188. "Funding Stage" → `t('funding_stage')`
2189. "Fundraising" → `t('fundraising')`
2190. "Fundraising Toolkit" → `t('fundraising_toolkit')`
2191. "Fundraising toolkit" → `t('fundraising_toolkit')`
2192. "GET /hello" → `t('get_hello')`
2193. "Gallery" → `t('gallery')`
2194. "Game" → `t('game')`
2195. "Game Developer" → `t('game_developer')`
2196. "General" → `t('general')`
2197. "General Explainer" → `t('general_explainer')`
2198. "Generate Content" → `t('generate_content')`
2199. "Generate Contract" → `t('generate_contract')`
2200. "Generate Deck" → `t('generate_deck')`
2201. "Generate Description" → `t('generate_description')`
2202. "Generate Enhanced Content" → `t('generate_enhanced_content')`
2203. "Generate Enhanced Profile" → `t('generate_enhanced_profile')`
2204. "Generate Image Prompt" → `t('generate_image_prompt')`
2205. "Generate Link" → `t('generate_link')`
2206. "Generate Milestones" → `t('generate_milestones')`
2207. "Generate Optimized Content" → `t('generate_optimized_content')`
2208. "Generate PDF Kit" → `t('generate_pdf_kit')`
2209. "Generate Pitch Deck & Edit" → `t('generate_pitch_deck_edit')`
2210. "Generate Proposal" → `t('generate_proposal')`
2211. "Generate Resume Now" → `t('generate_resume_now')`
2212. "Generate Script" → `t('generate_script')`
2213. "Generate Shareable Link" → `t('generate_shareable_link')`
2214. "Generate Whitepaper Draft" → `t('generate_whitepaper_draft')`
2215. "Generate a trackable link for specific marketing campaigns" → `t('generate_a_trackable_link_for_')`
2216. "Generate newsletter content first" → `t('generate_newsletter_content_fi')`
2217. "Generate with Date" → `t('generate_with_date')`
2218. "Generated Content" → `t('generated_content')`
2219. "Generated Description" → `t('generated_description')`
2220. "Generated content" → `t('generated_content')`
2221. "Generated pages" → `t('generated_pages')`
2222. "Generating shareable link..." → `t('generating_shareable_link')`
2223. "Generating slides, please wait..." → `t('generating_slides_please_wait')`
2224. "Generation Failed" → `t('generation_failed')`
2225. "Generation failed" → `t('generation_failed')`
2226. "Generative Adversarial Networks" → `t('generative_adversarial_network')`
2227. "Genesis Deploy Page" → `t('genesis_deploy_page')`
2228. "German" → `t('german')`
2229. "Get $5 credit to use on any paid service" → `t('get_5_credit_to_use_on_any_pai')`
2230. "Get AI Suggestions" → `t('get_ai_suggestions')`
2231. "Get Budget Recommendation" → `t('get_budget_recommendation')`
2232. "Get Custom Enterprise Quote" → `t('get_custom_enterprise_quote')`
2233. "Get Early Access to New Features" → `t('get_early_access_to_new_featur')`
2234. "Get Help" → `t('get_help')`
2235. "Get IT Support" → `t('get_it_support')`
2236. "Get In Touch" → `t('get_in_touch')`
2237. "Get Quote" → `t('get_quote')`
2238. "Get Started" → `t('get_started')`
2239. "Get Started With Hiring" → `t('get_started_with_hiring')`
2240. "Get The App Today" → `t('get_the_app_today')`
2241. "Get exclusive offers, trending AI news, and early access to best deals" → `t('get_exclusive_offers_trending_')`
2242. "Get in Touch" → `t('get_in_touch')`
2243. "Get instant answers to your questions" → `t('get_instant_answers_to_your_qu')`
2244. "Get it on Google Play" → `t('get_it_on_google_play')`
2245. "Get our app for the best experience" → `t('get_our_app_for_the_best_exper')`
2246. "Get the Zion App - AI Marketplace in Your Pocket" → `t('get_the_zion_app_ai_marketplac')`
2247. "Get the full experience on our app" → `t('get_the_full_experience_on_our')`
2248. "Getting Hired" → `t('getting_hired')`
2249. "Getting Started" → `t('getting_started')`
2250. "Ghana" → `t('ghana')`
2251. "Gibraltar" → `t('gibraltar')`
2252. "Gift economy" → `t('gift_economy')`
2253. "GitHub" → `t('github')`
2254. "GitHub OAuth error:" → `t('github_oauth_error')`
2255. "GitHub login error:" → `t('github_login_error')`
2256. "GitHub login failed" → `t('github_login_failed')`
2257. "GitHub repository" → `t('github_repository')`
2258. "GitHub signup button clicked - href may be incorrect if NextAuth is not used." → `t('github_signup_button_clicked_h')`
2259. "Global Access" → `t('global_access')`
2260. "Global Coverage" → `t('global_coverage')`
2261. "Global Error Handler:" → `t('global_error_handler')`
2262. "Global IT Onsite Services" → `t('global_it_onsite_services')`
2263. "Global IT Services" → `t('global_it_services')`
2264. "Global Instances" → `t('global_instances')`
2265. "Global Map" → `t('global_map')`
2266. "Global Map - Zion" → `t('global_map_zion')`
2267. "Global Outreach Proposal" → `t('global_outreach_proposal')`
2268. "Global Reach" → `t('global_reach')`
2269. "Global Zion Map" → `t('global_zion_map')`
2270. "Global error:" → `t('global_error')`
2271. "GlobalErrorBoundary" → `t('globalerrorboundary')`
2272. "GlobalErrorBoundaryHandler" → `t('globalerrorboundaryhandler')`
2273. "Go Back" → `t('go_back')`
2274. "Go Home" → `t('go_home')`
2275. "Go back" → `t('go_back')`
2276. "Go back to homepage" → `t('go_back_to_homepage')`
2277. "Go to Admin Dashboard" → `t('go_to_admin_dashboard')`
2278. "Go to Dashboard" → `t('go_to_dashboard')`
2279. "Go to Developer Portal" → `t('go_to_developer_portal')`
2280. "Go to Home Page" → `t('go_to_home_page')`
2281. "Go to Homepage" → `t('go_to_homepage')`
2282. "Go to Login" → `t('go_to_login')`
2283. "Go to Mobile App Page" → `t('go_to_mobile_app_page')`
2284. "Go to next page" → `t('go_to_next_page')`
2285. "Go to previous page" → `t('go_to_previous_page')`
2286. "Goal completions" → `t('goal_completions')`
2287. "Gold" → `t('gold')`
2288. "Good" → `t('good')`
2289. "Google" → `t('google')`
2290. "Google Calendar sync" → `t('google_calendar_sync')`
2291. "Google Meet" → `t('google_meet')`
2292. "Google OAuth error:" → `t('google_oauth_error')`
2293. "Google Play" → `t('google_play')`
2294. "Google Play button clicked" → `t('google_play_button_clicked')`
2295. "Google Slides" → `t('google_slides')`
2296. "Google login error:" → `t('google_login_error')`
2297. "Google login failed" → `t('google_login_failed')`
2298. "Google signup button clicked - href may be incorrect if NextAuth is not used." → `t('google_signup_button_clicked_h')`
2299. "Governance" → `t('governance')`
2300. "Governance Calendar" → `t('governance_calendar')`
2301. "Governance Mode" → `t('governance_mode')`
2302. "Governance Page" → `t('governance_page')`
2303. "Governance Principles" → `t('governance_principles')`
2304. "Governance Style" → `t('governance_style')`
2305. "Governance summarizer" → `t('governance_summarizer')`
2306. "Government" → `t('government')`
2307. "Grace Lee" → `t('grace_lee')`
2308. "Grant Application" → `t('grant_application')`
2309. "Grant Proposal" → `t('grant_proposal')`
2310. "Greece" → `t('greece')`
2311. "Green IT Solutions" → `t('green_it_solutions')`
2312. "Green IT Solutions - Sustainable Technology" → `t('green_it_solutions_sustainable')`
2313. "Green IT sustainability" → `t('green_it_sustainability')`
2314. "Grid view" → `t('grid_view')`
2315. "Growth Marketing Manager" → `t('growth_marketing_manager')`
2316. "Growth-only" → `t('growthonly')`
2317. "Guaranteed 4-hour response time for critical issues in most major cities" → `t('guaranteed_4hour_response_time')`
2318. "Guest Checkout" → `t('guest_checkout')`
2319. "Handle this dispute as an administrator" → `t('handle_this_dispute_as_an_admi')`
2320. "Handling Errors" → `t('handling_errors')`
2321. "HardDrive" → `t('harddrive')`
2322. "Hardware & Equipment" → `t('hardware_equipment')`
2323. "Hardware & network support" → `t('hardware_network_support')`
2324. "Head of Data" → `t('head_of_data')`
2325. "Header" → `t('header')`
2326. "Header has no accessibility violations" → `t('header_has_no_accessibility_vi')`
2327. "Header search suggestion selected:" → `t('header_search_suggestion_selec')`
2328. "Headline" → `t('headline')`
2329. "Headline must be at least 5 characters" → `t('headline_must_be_at_least_5_ch')`
2330. "Headline must be less than 100 characters" → `t('headline_must_be_less_than_100')`
2331. "Health" → `t('health')`
2332. "Health & Wellness" → `t('health_wellness')`
2333. "Health Check Endpoint" → `t('health_check_endpoint')`
2334. "Health Status" → `t('health_status')`
2335. "Health check latency exceeded for ${healthEndpoint}: ${duration}ms" → `t('health_check_latency_exceeded_')`
2336. "Health check passes" → `t('health_check_passes')`
2337. "Health check successful for ${healthEndpoint}: Status ${response.status}, Duration ${duration}ms" → `t('health_check_successful_for_he')`
2338. "Healthcare" → `t('healthcare')`
2339. "Healthcare AI Platform" → `t('healthcare_ai_platform')`
2340. "Healthcare AI Specialist & Medical Imaging Expert" → `t('healthcare_ai_specialist_medic')`
2341. "Healthy" → `t('healthy')`
2342. "Heap Used" → `t('heap_used')`
2343. "Hello endpoint returns greeting" → `t('hello_endpoint_returns_greetin')`
2344. "Hello world" → `t('hello_world')`
2345. "HelloService" → `t('helloservice')`
2346. "HelloService contract" → `t('helloservice_contract')`
2347. "Help & Resources" → `t('help_resources')`
2348. "Help Bot" → `t('help_bot')`
2349. "Help Center" → `t('help_center')`
2350. "Help Center | Zion AI Marketplace" → `t('help_center_zion_ai_marketplac')`
2351. "Help article fetch error:" → `t('help_article_fetch_error')`
2352. "Help center" → `t('help_center')`
2353. "Help others discover the future of AI & tech marketplace" → `t('help_others_discover_the_futur')`
2354. "Help others get to know you better" → `t('help_others_get_to_know_you_be')`
2355. "Help us build the future of AI and technology" → `t('help_us_build_the_future_of_ai')`
2356. "Here's an example of a" → `t('heres_an_example_of_a')`
2357. "Here's what to do next to get started:" → `t('heres_what_to_do_next_to_get_s')`
2358. "HeroSection" → `t('herosection')`
2359. "Hi ${investorName},\n\n${startup} here. ${summary}\n\nI believe our vision aligns with your investment focus. Looking forward to the opportunity to connect.\n\nBest regards,\n${startup} Team" → `t('hi_investornamennstartup_here_')`
2360. "Hidden content is properly marked" → `t('hidden_content_is_properly_mar')`
2361. "Hide" → `t('hide')`
2362. "Hide Suggestions" → `t('hide_suggestions')`
2363. "Hide confirm password" → `t('hide_confirm_password')`
2364. "Hide notes" → `t('hide_notes')`
2365. "Hide password" → `t('hide_password')`
2366. "High" → `t('high')`
2367. "High Efficiency" → `t('high_efficiency')`
2368. "High School" → `t('high_school')`
2369. "High-performance GPU for AI workloads and machine learning training" → `t('highperformance_gpu_for_ai_wor')`
2370. "High-performance GPU server for AI model training and inference" → `t('highperformance_gpu_server_for')`
2371. "Highest Pay" → `t('highest_pay')`
2372. "Highest Rated" → `t('highest_rated')`
2373. "Highest Rating" → `t('highest_rating')`
2374. "Hire" → `t('hire')`
2375. "Hire Candidate" → `t('hire_candidate')`
2376. "Hire Now" → `t('hire_now')`
2377. "Hire Request" → `t('hire_request')`
2378. "Hire Request Sent" → `t('hire_request_sent')`
2379. "Hire Talent" → `t('hire_talent')`
2380. "Hire request processed successfully" → `t('hire_request_processed_success')`
2381. "Hired" → `t('hired')`
2382. "Hiring Funnel" → `t('hiring_funnel')`
2383. "Hiring Pipeline" → `t('hiring_pipeline')`
2384. "Hiring Tracker | Zion AI Marketplace" → `t('hiring_tracker_zion_ai_marketp')`
2385. "Hiring process initiated" → `t('hiring_process_initiated')`
2386. "Historical" → `t('historical')`
2387. "Home" → `t('home')`
2388. "Home Page" → `t('home_page')`
2389. "Home Page Health" → `t('home_page_health')`
2390. "Home page has no accessibility violations" → `t('home_page_has_no_accessibility')`
2391. "Homepage Development" → `t('homepage_development')`
2392. "Homepage visual regression" → `t('homepage_visual_regression')`
2393. "Host" → `t('host')`
2394. "Hot-Swappable Batteries" → `t('hotswappable_batteries')`
2395. "Hover or click a card to learn more about what Zion offers" → `t('hover_or_click_a_card_to_learn')`
2396. "How Our IT Onsite Service Works" → `t('how_our_it_onsite_service_work')`
2397. "How Referrals Work" → `t('how_referrals_work')`
2398. "How SMBs Can Leverage AI Marketplaces to Scale Fast" → `t('how_smbs_can_leverage_ai_marke')`
2399. "How Zion Marketplace Works" → `t('how_zion_marketplace_works')`
2400. "How do I contact support?" → `t('how_do_i_contact_support')`
2401. "How often key features are used" → `t('how_often_key_features_are_use')`
2402. "How to Use" → `t('how_to_use')`
2403. "How to build an effective AI talent profile?" → `t('how_to_build_an_effective_ai_t')`
2404. "How to file a dispute" → `t('how_to_file_a_dispute')`
2405. "How to find and hire talent on the platform" → `t('how_to_find_and_hire_talent_on')`
2406. "How to handle and resolve contract disputes" → `t('how_to_handle_and_resolve_cont')`
2407. "How you compare to other partners" → `t('how_you_compare_to_other_partn')`
2408. "Huawei" → `t('huawei')`
2409. "Huawei logo" → `t('huawei_logo')`
2410. "Hybrid" → `t('hybrid')`
2411. "Hybrid Virtual Summit" → `t('hybrid_virtual_summit')`
2412. "I agree to receive updates about Zion and understand I can unsubscribe anytime." → `t('i_agree_to_receive_updates_abo')`
2413. "I want to discover and hire talent or services" → `t('i_want_to_discover_and_hire_ta')`
2414. "I'm offering services" → `t('im_offering_services')`
2415. "IP Address" → `t('ip_address')`
2416. "IT & AI Services" → `t('it_ai_services')`
2417. "IT Support Services" → `t('it_support_services')`
2418. "IT onsite services available in over 190 countries and territories worldwide" → `t('it_onsite_services_available_i')`
2419. "Icon" → `t('icon')`
2420. "Icon Accessibility" → `t('icon_accessibility')`
2421. "Icon Accessibility Patterns" → `t('icon_accessibility_patterns')`
2422. "Identify skill matches" → `t('identify_skill_matches')`
2423. "If nothing happens, download the app first." → `t('if_nothing_happens_download_th')`
2424. "If signup fails, please try again in a few minutes or contact support." → `t('if_signup_fails_please_try_aga')`
2425. "If this issue continues, please contact our support team." → `t('if_this_issue_continues_please')`
2426. "If you" → `t('if_you')`
2427. "If you believe this review violates our community guidelines, please provide details below." → `t('if_you_believe_this_review_vio')`
2428. "If you have questions about these Terms, please contact us at" → `t('if_you_have_questions_about_th')`
2429. "If you're experiencing issues not reflected here, please contact our support team." → `t('if_youre_experiencing_issues_n')`
2430. "Ignore" → `t('ignore')`
2431. "Ignored" → `t('ignored')`
2432. "Ilustración de carrito de compras vacío" → `t('ilustracin_de_carrito_de_compr')`
2433. "Image and video processing solutions" → `t('image_and_video_processing_sol')`
2434. "Image missing alt attribute" → `t('image_missing_alt_attribute')`
2435. "Image not available" → `t('image_not_available')`
2436. "Image not found" → `t('image_not_found')`
2437. "Image serving error:" → `t('image_serving_error')`
2438. "Image upload feature is currently unavailable." → `t('image_upload_feature_is_curren')`
2439. "Images" → `t('images')`
2440. "Immediate" → `t('immediate')`
2441. "Immersive virtual economies" → `t('immersive_virtual_economies')`
2442. "Improve marketplace search relevancy using machine learning." → `t('improve_marketplace_search_rel')`
2443. "Improve search rankings with keyword optimized text." → `t('improve_search_rankings_with_k')`
2444. "Improve your profile visibility" → `t('improve_your_profile_visibilit')`
2445. "In Cart" → `t('in_cart')`
2446. "In Client's Favor" → `t('in_clients_favor')`
2447. "In Escrow" → `t('in_escrow')`
2448. "In Progress" → `t('in_progress')`
2449. "In Progress • Due in 12 days" → `t('in_progress_due_in_12_days')`
2450. "In Review" → `t('in_review')`
2451. "In Stock" → `t('in_stock')`
2452. "In Talent's Favor" → `t('in_talents_favor')`
2453. "In Your Pocket" → `t('in_your_pocket')`
2454. "In stock" → `t('in_stock')`
2455. "Inactive" → `t('inactive')`
2456. "Include a direct line for urgent updates." → `t('include_a_direct_line_for_urge')`
2457. "Incorrect password" → `t('incorrect_password')`
2458. "Independent" → `t('independent')`
2459. "Indexing error" → `t('indexing_error')`
2460. "Industry" → `t('industry')`
2461. "Information about this dispute case" → `t('information_about_this_dispute')`
2462. "Iniciar Sesión" → `t('iniciar_sesin')`
2463. "Initial DAO config + manifestos" → `t('initial_dao_config_manifestos')`
2464. "Initiating" → `t('initiating')`
2465. "InnovateCorp" → `t('innovatecorp')`
2466. "Innovation" → `t('innovation')`
2467. "Input" → `t('input')`
2468. "Input has no accessibility violations" → `t('input_has_no_accessibility_vio')`
2469. "InputOTPGroup" → `t('inputotpgroup')`
2470. "InputOTPSeparator" → `t('inputotpseparator')`
2471. "InputOTPSlot" → `t('inputotpslot')`
2472. "Insert failed" → `t('insert_failed')`
2473. "Instagram" → `t('instagram')`
2474. "Install" → `t('install')`
2475. "Installation Analytics" → `t('installation_analytics')`
2476. "Installation not available" → `t('installation_not_available')`
2477. "Instance" → `t('instance')`
2478. "Instance Configuration" → `t('instance_configuration')`
2479. "Instance Name" → `t('instance_name')`
2480. "Instant FAQ responses" → `t('instant_faq_responses')`
2481. "Instant Messaging" → `t('instant_messaging')`
2482. "Institution" → `t('institution')`
2483. "Institution Name" → `t('institution_name')`
2484. "Institutional Focused" → `t('institutional_focused')`
2485. "Integrate New Payment Method" → `t('integrate_new_payment_method')`
2486. "Integration" → `t('integration')`
2487. "Integration Guide" → `t('integration_guide')`
2488. "Integration Test Scenarios" → `t('integration_test_scenarios')`
2489. "Integration settings saved" → `t('integration_settings_saved')`
2490. "Integrations - Zion AI Marketplace" → `t('integrations_zion_ai_marketpla')`
2491. "Integrations Hub" → `t('integrations_hub')`
2492. "Intellectual Property Transfer" → `t('intellectual_property_transfer')`
2493. "Intelligent automation for your workflow" → `t('intelligent_automation_for_you')`
2494. "Interactive showcase" → `t('interactive_showcase')`
2495. "Intermediate" → `t('intermediate')`
2496. "Internal Server Error" → `t('internal_server_error')`
2497. "Internal Server Error simulation." → `t('internal_server_error_simulati')`
2498. "Internal Server Error: Failed to fetch blog post" → `t('internal_server_error_failed_t')`
2499. "Internal Server Error: Failed to fetch categories" → `t('internal_server_error_failed_t')`
2500. "Internal Server Error: Failed to fetch equipment" → `t('internal_server_error_failed_t')`
2501. "Internal Server Error: Failed to fetch recommendations" → `t('internal_server_error_failed_t')`
2502. "Internal Server Error: Stripe SDK not initialized." → `t('internal_server_error_stripe_s')`
2503. "Internal Server Error: Webhook secret not configured." → `t('internal_server_error_webhook_')`
2504. "Internal View" → `t('internal_view')`
2505. "Internal server error" → `t('internal_server_error')`
2506. "Internal server error during registration" → `t('internal_server_error_during_r')`
2507. "Internal server error while fetching product details." → `t('internal_server_error_while_fe')`
2508. "Internal server error while fetching reviews." → `t('internal_server_error_while_fe')`
2509. "International Proposals" → `t('international_proposals')`
2510. "International Proposals - Zion" → `t('international_proposals_zion')`
2511. "Internationalization" → `t('internationalization')`
2512. "IntersectionObserver" → `t('intersectionobserver')`
2513. "Interview" → `t('interview')`
2514. "Interview Confirmed" → `t('interview_confirmed')`
2515. "Interview Declined" → `t('interview_declined')`
2516. "Interview Rescheduled" → `t('interview_rescheduled')`
2517. "Interview Title" → `t('interview_title')`
2518. "Interview cancelled" → `t('interview_cancelled')`
2519. "Interview date must be in the future" → `t('interview_date_must_be_in_the_')`
2520. "Interview requested" → `t('interview_requested')`
2521. "Interview scheduled" → `t('interview_scheduled')`
2522. "Interviewing" → `t('interviewing')`
2523. "Interviews" → `t('interviews')`
2524. "Interviews Conducted" → `t('interviews_conducted')`
2525. "Interviews Scheduled" → `t('interviews_scheduled')`
2526. "Interviews this month" → `t('interviews_this_month')`
2527. "Interviews | Zion AI Marketplace" → `t('interviews_zion_ai_marketplace')`
2528. "Intro (0:00): Welcome to the Zion Podcast. Today we chat with ${invitee}.\n" → `t('intro_000_welcome_to_the_zion_')`
2529. "Intro – Founder's Story" → `t('intro_founders_story')`
2530. "Introduction" → `t('introduction')`
2531. "Invalid" → `t('invalid')`
2532. "Invalid action" → `t('invalid_action')`
2533. "Invalid amount" → `t('invalid_amount')`
2534. "Invalid chain selected" → `t('invalid_chain_selected')`
2535. "Invalid checkout request" → `t('invalid_checkout_request')`
2536. "Invalid connection" → `t('invalid_connection')`
2537. "Invalid credentials" → `t('invalid_credentials')`
2538. "Invalid data" → `t('invalid_data')`
2539. "Invalid error report: Missing body, message, or stack." → `t('invalid_error_report_missing_b')`
2540. "Invalid event type" → `t('invalid_event_type')`
2541. "Invalid feedback data" → `t('invalid_feedback_data')`
2542. "Invalid file type" → `t('invalid_file_type')`
2543. "Invalid id" → `t('invalid_id')`
2544. "Invalid image path" → `t('invalid_image_path')`
2545. "Invalid input" → `t('invalid_input')`
2546. "Invalid input data" → `t('invalid_input_data')`
2547. "Invalid log entry format" → `t('invalid_log_entry_format')`
2548. "Invalid merkle root" → `t('invalid_merkle_root')`
2549. "Invalid payment amount" → `t('invalid_payment_amount')`
2550. "Invalid position" → `t('invalid_position')`
2551. "Invalid product data received by ProductCard" → `t('invalid_product_data_received_')`
2552. "Invalid referral code" → `t('invalid_referral_code')`
2553. "Invalid request" → `t('invalid_request')`
2554. "Invalid request body" → `t('invalid_request_body')`
2555. "Invalid response" → `t('invalid_response')`
2556. "Invalid response format" → `t('invalid_response_format')`
2557. "Invalid response format: expected array" → `t('invalid_response_format_expect')`
2558. "Invalid signature" → `t('invalid_signature')`
2559. "Invalid slug" → `t('invalid_slug')`
2560. "Invalid states are announced" → `t('invalid_states_are_announced')`
2561. "Investor" → `t('investor')`
2562. "Investor Match - Zion" → `t('investor_match_zion')`
2563. "Investor Matchmaker" → `t('investor_matchmaker')`
2564. "Investor Relations" → `t('investor_relations')`
2565. "Invitation resent" → `t('invitation_resent')`
2566. "Invitation sent" → `t('invitation_sent')`
2567. "Invite" → `t('invite')`
2568. "Invite Talent" → `t('invite_talent')`
2569. "Invite others to Zion AI Marketplace and earn rewards" → `t('invite_others_to_zion_ai_marke')`
2570. "Invite someone to your team" → `t('invite_someone_to_your_team')`
2571. "Invite talent" → `t('invite_talent')`
2572. "Invite talent to speed up your hiring process" → `t('invite_talent_to_speed_up_your')`
2573. "Invitee Bio" → `t('invitee_bio')`
2574. "Invitee Name" → `t('invitee_name')`
2575. "Invoice" → `t('invoice')`
2576. "Invoice History" → `t('invoice_history')`
2577. "Invoice Number" → `t('invoice_number')`
2578. "Is chat history saved?" → `t('is_chat_history_saved')`
2579. "Isabella Garcia" → `t('isabella_garcia')`
2580. "Issue" → `t('issue')`
2581. "Issue Resolution Validation" → `t('issue_resolution_validation')`
2582. "Issue or Revoke Tokens" → `t('issue_or_revoke_tokens')`
2583. "Issued" → `t('issued')`
2584. "James Wilson" → `t('james_wilson')`
2585. "Jane Smith" → `t('jane_smith')`
2586. "JavaScript" → `t('javascript')`
2587. "Job" → `t('job')`
2588. "Job Category" → `t('job_category')`
2589. "Job Declined" → `t('job_declined')`
2590. "Job Description" → `t('job_description')`
2591. "Job Description Generator" → `t('job_description_generator')`
2592. "Job Details" → `t('job_details')`
2593. "Job ID is required" → `t('job_id_is_required')`
2594. "Job Not Found" → `t('job_not_found')`
2595. "Job Postings" → `t('job_postings')`
2596. "Job Preview" → `t('job_preview')`
2597. "Job Title" → `t('job_title')`
2598. "Job Type" → `t('job_type')`
2599. "Job deleted successfully" → `t('job_deleted_successfully')`
2600. "Job details and descriptions" → `t('job_details_and_descriptions')`
2601. "Job matches" → `t('job_matches')`
2602. "Job matching completed" → `t('job_matching_completed')`
2603. "Job postings" → `t('job_postings')`
2604. "Job status updated successfully" → `t('job_status_updated_successfull')`
2605. "Job title" → `t('job_title')`
2606. "Jobs" → `t('jobs')`
2607. "Jobs Posted" → `t('jobs_posted')`
2608. "Jobs Saved" → `t('jobs_saved')`
2609. "Jobs Viewed" → `t('jobs_viewed')`
2610. "John Doe" → `t('john_doe')`
2611. "John Smith" → `t('john_smith')`
2612. "Johnson & Johnson" → `t('johnson_johnson')`
2613. "Johnson & Johnson logo" → `t('johnson_johnson_logo')`
2614. "Join" → `t('join')`
2615. "Join 10,000+ tech professionals who already subscribe" → `t('join_10000_tech_professionals_')`
2616. "Join Call" → `t('join_call')`
2617. "Join Community" → `t('join_community')`
2618. "Join Meeting" → `t('join_meeting')`
2619. "Join Now" → `t('join_now')`
2620. "Join Now to Start Earning" → `t('join_now_to_start_earning')`
2621. "Join Our Service Provider Network" → `t('join_our_service_provider_netw')`
2622. "Join Our Talent Network" → `t('join_our_talent_network')`
2623. "Join Our Team" → `t('join_our_team')`
2624. "Join Video Call" → `t('join_video_call')`
2625. "Join as Talent" → `t('join_as_talent')`
2626. "Join the Zion AI Partner Program and start earning rewards" → `t('join_the_zion_ai_partner_progr')`
2627. "Join the Zion Community" → `t('join_the_zion_community')`
2628. "Join the community forum" → `t('join_the_community_forum')`
2629. "Join the conversation, ask questions, and share your knowledge" → `t('join_the_conversation_ask_ques')`
2630. "Join the growing network of companies relying on Zion's marketplace" → `t('join_the_growing_network_of_co')`
2631. "Join thousands of professionals who are already using the Zion mobile app to connect, hire, and work" → `t('join_thousands_of_professional')`
2632. "Join us for the Zion Global Launch Summit" → `t('join_us_for_the_zion_global_la')`
2633. "Jordan Lee" → `t('jordan_lee')`
2634. "Jump directly to our most popular features" → `t('jump_directly_to_our_most_popu')`
2635. "June 20, 2025 • Virtual &amp; New York City" → `t('june_20_2025_virtual_amp_new_y')`
2636. "Just now" → `t('just_now')`
2637. "KYC Dashboard" → `t('kyc_dashboard')`
2638. "Kal Catrao" → `t('kal_catrao')`
2639. "Kanban Board" → `t('kanban_board')`
2640. "Keep Earning" → `t('keep_earning')`
2641. "Key Features" → `t('key_features')`
2642. "Key Name" → `t('key_name')`
2643. "Key Responsibilities" → `t('key_responsibilities')`
2644. "Key dates and milestones" → `t('key_dates_and_milestones')`
2645. "Key governance votes" → `t('key_governance_votes')`
2646. "Keyboard Navigation" → `t('keyboard_navigation')`
2647. "Keyboard navigation follows accessibility standards" → `t('keyboard_navigation_follows_ac')`
2648. "Keyboard navigation works correctly" → `t('keyboard_navigation_works_corr')`
2649. "Keynotes" → `t('keynotes')`
2650. "Keywords" → `t('keywords')`
2651. "Label has no accessibility violations" → `t('label_has_no_accessibility_vio')`
2652. "Landing Page Copy" → `t('landing_page_copy')`
2653. "Language switcher works on mobile" → `t('language_switcher_works_on_mob')`
2654. "LanguageContext: Error changing language:" → `t('languagecontext_error_changing')`
2655. "LanguageContext: Error setting initial language in i18n" → `t('languagecontext_error_setting_')`
2656. "LanguageSelector: Error changing language:" → `t('languageselector_error_changin')`
2657. "Languages" → `t('languages')`
2658. "Large Dependencies Detected" → `t('large_dependencies_detected')`
2659. "Large resource detected" → `t('large_resource_detected')`
2660. "Largest Contentful Paint" → `t('largest_contentful_paint')`
2661. "Last 24h" → `t('last_24h')`
2662. "Last 3 months" → `t('last_3_months')`
2663. "Last 30 days" → `t('last_30_days')`
2664. "Last 7 days" → `t('last_7_days')`
2665. "Last Active" → `t('last_active')`
2666. "Last Sign In:" → `t('last_sign_in')`
2667. "Last Sync" → `t('last_sync')`
2668. "Last Updated" → `t('last_updated')`
2669. "Last Used" → `t('last_used')`
2670. "Last year" → `t('last_year')`
2671. "Latest Articles" → `t('latest_articles')`
2672. "Latin America" → `t('latin_america')`
2673. "Launch New Vertical" → `t('launch_new_vertical')`
2674. "Launch Operations Toolkit" → `t('launch_operations_toolkit')`
2675. "LayerZero Cross-Chain Bridge" → `t('layerzero_crosschain_bridge')`
2676. "Leaderboard" → `t('leaderboard')`
2677. "Leaderboard will appear here" → `t('leaderboard_will_appear_here')`
2678. "Leading DAOs" → `t('leading_daos')`
2679. "Learn More" → `t('learn_more')`
2680. "Learn how organizations use Zion to achieve their goals" → `t('learn_how_organizations_use_zi')`
2681. "Learn how to use Zion with these in-depth tutorials" → `t('learn_how_to_use_zion_with_the')`
2682. "Learn more" → `t('learn_more')`
2683. "Learn the basics of using Zion's platform and services." → `t('learn_the_basics_of_using_zion')`
2684. "Learn the basics of using the Zion AI Marketplace" → `t('learn_the_basics_of_using_the_')`
2685. "Learning Hub" → `t('learning_hub')`
2686. "Leave Review" → `t('leave_review')`
2687. "Leave call" → `t('leave_call')`
2688. "Legal + Manifestos" → `t('legal_manifestos')`
2689. "Legal Bundle" → `t('legal_bundle')`
2690. "Lenovo" → `t('lenovo')`
2691. "Lenovo logo" → `t('lenovo_logo')`
2692. "Less than 1 week" → `t('less_than_1_week')`
2693. "Less than a month" → `t('less_than_a_month')`
2694. "Less than a week" → `t('less_than_a_week')`
2695. "Let" → `t('let')`
2696. "Let our AI find the perfect opportunities for you" → `t('let_our_ai_find_the_perfect_op')`
2697. "Let's find talent for your job" → `t('lets_find_talent_for_your_job')`
2698. "Let's set up your experience" → `t('lets_set_up_your_experience')`
2699. "Level" → `t('level')`
2700. "Liam Turner" → `t('liam_turner')`
2701. "Light" → `t('light')`
2702. "Lightbulb" → `t('lightbulb')`
2703. "Limit" → `t('limit')`
2704. "Limit: 500 characters" → `t('limit_500_characters')`
2705. "Limited Availability" → `t('limited_availability')`
2706. "Limited Stock" → `t('limited_stock')`
2707. "Line" → `t('line')`
2708. "Link copied to clipboard" → `t('link_copied_to_clipboard')`
2709. "Link your decentralized identity to display on your profile" → `t('link_your_decentralized_identi')`
2710. "LinkedIn" → `t('linkedin')`
2711. "LinkedIn Banner" → `t('linkedin_banner')`
2712. "LinkedIn Banner Placeholder" → `t('linkedin_banner_placeholder')`
2713. "Liquid Cooling" → `t('liquid_cooling')`
2714. "List Your Services" → `t('list_your_services')`
2715. "List the key responsibilities for this role" → `t('list_the_key_responsibilities_')`
2716. "List the main responsibilities of this job" → `t('list_the_main_responsibilities')`
2717. "List the required qualifications for this job" → `t('list_the_required_qualificatio')`
2718. "List view" → `t('list_view')`
2719. "Listed on" → `t('listed_on')`
2720. "Listing Moderation" → `t('listing_moderation')`
2721. "Listing Not Found" → `t('listing_not_found')`
2722. "Listing filter error:" → `t('listing_filter_error')`
2723. "Listing flagged for review" → `t('listing_flagged_for_review')`
2724. "Live AI Support" → `t('live_ai_support')`
2725. "Live Coordination" → `t('live_coordination')`
2726. "Live Feed" → `t('live_feed')`
2727. "Live Now" → `t('live_now')`
2728. "Live Status Dashboard" → `t('live_status_dashboard')`
2729. "Livestream" → `t('livestream')`
2730. "Load More" → `t('load_more')`
2731. "Load More Equipment" → `t('load_more_equipment')`
2732. "Load Time" → `t('load_time')`
2733. "Load Version" → `t('load_version')`
2734. "Load more" → `t('load_more')`
2735. "Loading 3D renderer..." → `t('loading_3d_renderer')`
2736. "Loading Equipment..." → `t('loading_equipment')`
2737. "Loading Failed" → `t('loading_failed')`
2738. "Loading analytics data..." → `t('loading_analytics_data')`
2739. "Loading article..." → `t('loading_article')`
2740. "Loading articles..." → `t('loading_articles')`
2741. "Loading chart..." → `t('loading_chart')`
2742. "Loading checkout..." → `t('loading_checkout')`
2743. "Loading chunk" → `t('loading_chunk')`
2744. "Loading component..." → `t('loading_component')`
2745. "Loading copy..." → `t('loading_copy')`
2746. "Loading dashboard..." → `t('loading_dashboard')`
2747. "Loading detailed status information..." → `t('loading_detailed_status_inform')`
2748. "Loading dispute details..." → `t('loading_dispute_details')`
2749. "Loading equipment details..." → `t('loading_equipment_details')`
2750. "Loading logs..." → `t('loading_logs')`
2751. "Loading metrics..." → `t('loading_metrics')`
2752. "Loading order..." → `t('loading_order')`
2753. "Loading partner data..." → `t('loading_partner_data')`
2754. "Loading product details..." → `t('loading_product_details')`
2755. "Loading profile..." → `t('loading_profile')`
2756. "Loading project details..." → `t('loading_project_details')`
2757. "Loading proposal details..." → `t('loading_proposal_details')`
2758. "Loading proposals..." → `t('loading_proposals')`
2759. "Loading quiz..." → `t('loading_quiz')`
2760. "Loading quote wizard..." → `t('loading_quote_wizard')`
2761. "Loading reviews..." → `t('loading_reviews')`
2762. "Loading states are accessible" → `t('loading_states_are_accessible')`
2763. "Loading storybook..." → `t('loading_storybook')`
2764. "Loading synced data..." → `t('loading_synced_data')`
2765. "Loading transactions..." → `t('loading_transactions')`
2766. "Loading user information..." → `t('loading_user_information')`
2767. "Loading webhooks..." → `t('loading_webhooks')`
2768. "Loading whitepaper..." → `t('loading_whitepaper')`
2769. "Loading your resumes..." → `t('loading_your_resumes')`
2770. "Loading your votes..." → `t('loading_your_votes')`
2771. "Loading..." → `t('loading')`
2772. "Loads equipment detail page" → `t('loads_equipment_detail_page')`
2773. "Local timezone" → `t('local_timezone')`
2774. "Lock" → `t('lock')`
2775. "Locked" → `t('locked')`
2776. "Locking Side Panels" → `t('locking_side_panels')`
2777. "Log In" → `t('log_in')`
2778. "Log In Now" → `t('log_in_now')`
2779. "LogRocket is not configured" → `t('logrocket_is_not_configured')`
2780. "Logan Taylor" → `t('logan_taylor')`
2781. "Login" → `t('login')`
2782. "Login Error" → `t('login_error')`
2783. "Login Failed" → `t('login_failed')`
2784. "Login Page" → `t('login_page')`
2785. "Login Page Rendering with Unavailable Wallet" → `t('login_page_rendering_with_unav')`
2786. "Login Required" → `t('login_required')`
2787. "Login error:" → `t('login_error')`
2788. "Login failed" → `t('login_failed')`
2789. "Login failed due to an unknown error. Please try again." → `t('login_failed_due_to_an_unknown')`
2790. "Login failed with status:" → `t('login_failed_with_status')`
2791. "Login failed. Please check your credentials and try again." → `t('login_failed_please_check_your')`
2792. "Login failed. Please try again." → `t('login_failed_please_try_again')`
2793. "Login page has no accessibility violations" → `t('login_page_has_no_accessibilit')`
2794. "Login quickly and securely with Face ID or Touch ID on supported devices." → `t('login_quickly_and_securely_wit')`
2795. "Login required" → `t('login_required')`
2796. "Login required to save favorites" → `t('login_required_to_save_favorit')`
2797. "Login succeeded but session data could not be retrieved." → `t('login_succeeded_but_session_da')`
2798. "Login successful!" → `t('login_successful')`
2799. "Login to Add Product" → `t('login_to_add_product')`
2800. "LoginForm" → `t('loginform')`
2801. "LoginForm fetch" → `t('loginform_fetch')`
2802. "LoginPage: Conditions met for redirect. Current path: ${router.pathname}, Target: ${returnTo}" → `t('loginpage_conditions_met_for_r')`
2803. "LoginPage: Error getting session:" → `t('loginpage_error_getting_sessio')`
2804. "LoginPage: Executing delayed redirect to ${returnTo}" → `t('loginpage_executing_delayed_re')`
2805. "LoginPage: Initial session check effect runs." → `t('loginpage_initial_session_chec')`
2806. "LoginPage: Redirection effect runs. sessionChecked: ${sessionChecked}, isLoading: ${isLoading}, user: ${user?.id}, pathname: ${router.pathname}" → `t('loginpage_redirection_effect_r')`
2807. "LoginPage: Rendering" → `t('loginpage_rendering')`
2808. "LoginPage: Rendering login form. sessionChecked: ${sessionChecked}, user: ${user?.id}, isLoading: ${isLoading}" → `t('loginpage_rendering_login_form')`
2809. "LoginPage: Session check timeout after 5 seconds" → `t('loginpage_session_check_timeou')`
2810. "LoginPage: Unmounting, cleaning up auth listener." → `t('loginpage_unmounting_cleaning_')`
2811. "LoginPage: onAuthStateChange event:" → `t('loginpage_onauthstatechange_ev')`
2812. "LoginRedirect Component" → `t('loginredirect_component')`
2813. "Logo Upload" → `t('logo_upload')`
2814. "Logo has no accessibility violations" → `t('logo_has_no_accessibility_viol')`
2815. "Logo preview" → `t('logo_preview')`
2816. "Logos" → `t('logos')`
2817. "Logout" → `t('logout')`
2818. "Logout failed" → `t('logout_failed')`
2819. "Logout failed:" → `t('logout_failed')`
2820. "Logout successful!" → `t('logout_successful')`
2821. "Logs" → `t('logs')`
2822. "Logs in and completes Stripe test checkout" → `t('logs_in_and_completes_stripe_t')`
2823. "Logs per Day" → `t('logs_per_day')`
2824. "Long Description" → `t('long_description')`
2825. "Long task detected: ${entry.duration}ms" → `t('long_task_detected_entrydurati')`
2826. "Long text content wraps properly" → `t('long_text_content_wraps_proper')`
2827. "Looking for feedback on my automated testing approach" → `t('looking_for_feedback_on_my_aut')`
2828. "Los Angeles" → `t('los_angeles')`
2829. "Louis Vuitton" → `t('louis_vuitton')`
2830. "Louis Vuitton logo" → `t('louis_vuitton_logo')`
2831. "Low" → `t('low')`
2832. "Low Match" → `t('low_match')`
2833. "Low stock" → `t('low_stock')`
2834. "Machine Learning" → `t('machine_learning')`
2835. "Machine Learning Model Optimization" → `t('machine_learning_model_optimiz')`
2836. "Mailchimp error: ${res.status} ${text}" → `t('mailchimp_error_resstatus_text')`
2837. "Mailchimp list ID missing" → `t('mailchimp_list_id_missing')`
2838. "Main" → `t('main')`
2839. "Main Topic / User Prompt" → `t('main_topic_user_prompt')`
2840. "Main content" → `t('main_content')`
2841. "Main navigation" → `t('main_navigation')`
2842. "Main navigation links" → `t('main_navigation_links')`
2843. "MainNavigation Services link navigates to /services" → `t('mainnavigation_services_link_n')`
2844. "MainNavigation has no accessibility violations" → `t('mainnavigation_has_no_accessib')`
2845. "Major Banks" → `t('major_banks')`
2846. "Major metropolitan areas" → `t('major_metropolitan_areas')`
2847. "Make Private" → `t('make_private')`
2848. "Make Public" → `t('make_public')`
2849. "Make sure your availability is up to date" → `t('make_sure_your_availability_is')`
2850. "Make your first purchase on the marketplace" → `t('make_your_first_purchase_on_th')`
2851. "Making an offer" → `t('making_an_offer')`
2852. "Mali" → `t('mali')`
2853. "Malta" → `t('malta')`
2854. "Manage" → `t('manage')`
2855. "Manage Admins" → `t('manage_admins')`
2856. "Manage Payment Methods" → `t('manage_payment_methods')`
2857. "Manage Team" → `t('manage_team')`
2858. "Manage app store metadata for the Zion mobile application" → `t('manage_app_store_metadata_for_')`
2859. "Manage fine-tuned AI models for different platform features" → `t('manage_finetuned_ai_models_for')`
2860. "Manage partnership applications and settings" → `t('manage_partnership_application')`
2861. "Manage project payment milestones and deliverables" → `t('manage_project_payment_milesto')`
2862. "Manage prompt routing and reflex rules" → `t('manage_prompt_routing_and_refl')`
2863. "Manage team" → `t('manage_team')`
2864. "Manage your Web3 connections and features" → `t('manage_your_web3_connections_a')`
2865. "Manage your account" → `t('manage_your_account')`
2866. "Manage your job postings and talent applications" → `t('manage_your_job_postings_and_t')`
2867. "Manage your payment methods for automatic billing" → `t('manage_your_payment_methods_fo')`
2868. "Manage your personal information and privacy" → `t('manage_your_personal_informati')`
2869. "Manage your profile and settings" → `t('manage_your_profile_and_settin')`
2870. "Manage your subscription, view invoice history, and update payment methods." → `t('manage_your_subscription_view_')`
2871. "Manage, approve, or reject reviews" → `t('manage_approve_or_reject_revie')`
2872. "Managed Data Labeling Service" → `t('managed_data_labeling_service')`
2873. "Manager" → `t('manager')`
2874. "Manifesto Days" → `t('manifesto_days')`
2875. "Manual Creation" → `t('manual_creation')`
2876. "Manufacturing" → `t('manufacturing')`
2877. "Manufacturing Defect Detection" → `t('manufacturing_defect_detection')`
2878. "Marcus Johnson" → `t('marcus_johnson')`
2879. "Maria Garcia" → `t('maria_garcia')`
2880. "Mark Responded" → `t('mark_responded')`
2881. "Mark all as read" → `t('mark_all_as_read')`
2882. "Mark as Accepted" → `t('mark_as_accepted')`
2883. "Mark as Answer" → `t('mark_as_answer')`
2884. "Mark as Approved" → `t('mark_as_approved')`
2885. "Mark as Closed" → `t('mark_as_closed')`
2886. "Mark as Completed" → `t('mark_as_completed')`
2887. "Mark as In Review" → `t('mark_as_in_review')`
2888. "Mark as New" → `t('mark_as_new')`
2889. "Mark as Open" → `t('mark_as_open')`
2890. "Mark as Rejected" → `t('mark_as_rejected')`
2891. "Mark as Responded" → `t('mark_as_responded')`
2892. "Mark as Under Review" → `t('mark_as_under_review')`
2893. "Mark as approved" → `t('mark_as_approved')`
2894. "Mark as read" → `t('mark_as_read')`
2895. "Mark as rejected" → `t('mark_as_rejected')`
2896. "Market Opportunity" → `t('market_opportunity')`
2897. "Marketing" → `t('marketing')`
2898. "Marketing Resources" → `t('marketing_resources')`
2899. "Marketplace" → `t('marketplace')`
2900. "Marketplace - Zion" → `t('marketplace_zion')`
2901. "Marketplace - Zion Tech Marketplace Solutions & Services" → `t('marketplace_zion_tech_marketpl')`
2902. "Marketplace Analytics" → `t('marketplace_analytics')`
2903. "Marketplace Conversion Funnel" → `t('marketplace_conversion_funnel')`
2904. "Marketplace Error:" → `t('marketplace_error')`
2905. "Marketplace Overview" → `t('marketplace_overview')`
2906. "Marketplace Page" → `t('marketplace_page')`
2907. "Marketplace dropdown navigation" → `t('marketplace_dropdown_navigatio')`
2908. "Marketplace request interceptor error:" → `t('marketplace_request_intercepto')`
2909. "Marketplace search" → `t('marketplace_search')`
2910. "MarketplaceCard Buy Now" → `t('marketplacecard_buy_now')`
2911. "MarketplaceErrorBoundary caught an error:" → `t('marketplaceerrorboundary_caugh')`
2912. "Marshall Islands" → `t('marshall_islands')`
2913. "Master's Degree" → `t('masters_degree')`
2914. "Match Score" → `t('match_score')`
2915. "Match Selected" → `t('match_selected')`
2916. "Matches Found" → `t('matches_found')`
2917. "Matches Made" → `t('matches_made')`
2918. "Matching Error" → `t('matching_error')`
2919. "Matching Failed" → `t('matching_failed')`
2920. "Max" → `t('max')`
2921. "Max retries exceeded for error: ${errorMessage}" → `t('max_retries_exceeded_for_error')`
2922. "Maximum budget" → `t('maximum_budget')`
2923. "Maximum budget must be greater than or equal to minimum budget" → `t('maximum_budget_must_be_greater')`
2924. "Media Kit" → `t('media_kit')`
2925. "Medical Imaging" → `t('medical_imaging')`
2926. "Medical imaging specialist with expertise in applying AI to healthcare challenges. I develop deep learning solutions for medical image analysis, diagnostics, and personalized treatment planning in clinical settings." → `t('medical_imaging_specialist_wit')`
2927. "Medium" → `t('medium')`
2928. "Meet the Team" → `t('meet_the_team')`
2929. "Meet the Zion team and DAO delegates" → `t('meet_the_zion_team_and_dao_del')`
2930. "Menu" → `t('menu')`
2931. "MenubarShortcut" → `t('menubarshortcut')`
2932. "Merchandise" → `t('merchandise')`
2933. "Message" → `t('message')`
2934. "Message Blocked" → `t('message_blocked')`
2935. "Message Client" → `t('message_client')`
2936. "Message Content Scanning" → `t('message_content_scanning')`
2937. "Message Flagged" → `t('message_flagged')`
2938. "Message Received" → `t('message_received')`
2939. "Message Sent" → `t('message_sent')`
2940. "Message must be at least 10 characters" → `t('message_must_be_at_least_10_ch')`
2941. "Message not sent" → `t('message_not_sent')`
2942. "Message required" → `t('message_required')`
2943. "Message scanning" → `t('message_scanning')`
2944. "Message sent" → `t('message_sent')`
2945. "Message sent successfully" → `t('message_sent_successfully')`
2946. "Message to ${profileName}..." → `t('message_to_profilename')`
2947. "Messages" → `t('messages')`
2948. "Messages Sent" → `t('messages_sent')`
2949. "Messages array is required" → `t('messages_array_is_required')`
2950. "Messaging context not available" → `t('messaging_context_not_availabl')`
2951. "Messaging screen" → `t('messaging_screen')`
2952. "Method" → `t('method')`
2953. "Method ${req.method} Not Allowed" → `t('method_reqmethod_not_allowed')`
2954. "Method ${req.method} not allowed" → `t('method_reqmethod_not_allowed')`
2955. "Method Not Allowed" → `t('method_not_allowed')`
2956. "Method not allowed" → `t('method_not_allowed')`
2957. "Michael Chen" → `t('michael_chen')`
2958. "Michael Reynolds" → `t('michael_reynolds')`
2959. "Microsoft Teams" → `t('microsoft_teams')`
2960. "Mid Level" → `t('mid_level')`
2961. "Middleware: Error during authentication check:" → `t('middleware_error_during_authen')`
2962. "Milestone" → `t('milestone')`
2963. "Milestone Approved" → `t('milestone_approved')`
2964. "Milestone Completed" → `t('milestone_completed')`
2965. "Milestone Due Soon" → `t('milestone_due_soon')`
2966. "Milestone created successfully" → `t('milestone_created_successfully')`
2967. "Milestone deleted successfully" → `t('milestone_deleted_successfully')`
2968. "Milestone not found" → `t('milestone_not_found')`
2969. "Milestone title" → `t('milestone_title')`
2970. "Milestone updated successfully" → `t('milestone_updated_successfully')`
2971. "Milestones" → `t('milestones')`
2972. "Milestones Generated" → `t('milestones_generated')`
2973. "Min" → `t('min')`
2974. "Minimum Rating" → `t('minimum_rating')`
2975. "Minimum budget" → `t('minimum_budget')`
2976. "Missing GITHUB_TOKEN environment variable" → `t('missing_githubtoken_environmen')`
2977. "Missing ISSUE_NUMBER environment variable" → `t('missing_issuenumber_environmen')`
2978. "Missing ISSUE_TITLE environment variable" → `t('missing_issuetitle_environment')`
2979. "Missing Information" → `t('missing_information')`
2980. "Missing Netlify environment variables" → `t('missing_netlify_environment_va')`
2981. "Missing authorization header" → `t('missing_authorization_header')`
2982. "Missing cart" → `t('missing_cart')`
2983. "Missing contentType or userPrompt" → `t('missing_contenttype_or_userpro')`
2984. "Missing contentType or userPrompt in request body" → `t('missing_contenttype_or_userpro')`
2985. "Missing distribution information" → `t('missing_distribution_informati')`
2986. "Missing distribution information: provide either distributionData or distributionBreakdown text." → `t('missing_distribution_informati')`
2987. "Missing fields" → `t('missing_fields')`
2988. "Missing information" → `t('missing_information')`
2989. "Missing parameters" → `t('missing_parameters')`
2990. "Missing required core parameters" → `t('missing_required_core_paramete')`
2991. "Missing required environment variables" → `t('missing_required_environment_v')`
2992. "Missing required field: title" → `t('missing_required_field_title')`
2993. "Missing required fields" → `t('missing_required_fields')`
2994. "Missing required fields: ip_address, route, reason" → `t('missing_required_fields_ipaddr')`
2995. "Missing required fields: title and category are required" → `t('missing_required_fields_title_')`
2996. "Missing required parameters" → `t('missing_required_parameters')`
2997. "Missing required service provider data" → `t('missing_required_service_provi')`
2998. "Missing signature or timestamp" → `t('missing_signature_or_timestamp')`
2999. "Missing talent data" → `t('missing_talent_data')`
3000. "Missing userId" → `t('missing_userid')`
3001. "Mobile App" → `t('mobile_app')`
3002. "Mobile App Developer" → `t('mobile_app_developer')`
3003. "Mobile App Development" → `t('mobile_app_development')`
3004. "Mobile Banking App" → `t('mobile_banking_app')`
3005. "Mobile Development" → `t('mobile_development')`
3006. "Mobile Support" → `t('mobile_support')`
3007. "Mobile navigation icons are properly marked as decorative" → `t('mobile_navigation_icons_are_pr')`
3008. "Mobile navigation maintains accessibility" → `t('mobile_navigation_maintains_ac')`
3009. "Mock Checkout Complete!" → `t('mock_checkout_complete')`
3010. "Mock User" → `t('mock_user')`
3011. "Mock checkout session created for development" → `t('mock_checkout_session_created_')`
3012. "Mod" → `t('mod')`
3013. "ModeToggle has no accessibility violations" → `t('modetoggle_has_no_accessibilit')`
3014. "Model key missing" → `t('model_key_missing')`
3015. "Moderate and manage reviews in the Zion AI Marketplace" → `t('moderate_and_manage_reviews_in')`
3016. "Moderate product and service listings" → `t('moderate_product_and_service_l')`
3017. "Moderation" → `t('moderation')`
3018. "Moderator" → `t('moderator')`
3019. "Module 1 — \uD83C\uDF0D Introduction to Zion" → `t('module_1_ud83cudf0d_introducti')`
3020. "Module 3 — \uD83D\uDEE0 Deployment & Setup" → `t('module_3_ud83dudee0_deployment')`
3021. "Module 4 — \uD83D\uDCAC Community, Support, Scaling" → `t('module_4_ud83dudcac_community_')`
3022. "Module 5 — \uD83D\uDDFC Legal & Launch" → `t('module_5_ud83duddfc_legal_laun')`
3023. "Module Summary" → `t('module_summary')`
3024. "Monitor account activity for suspicious patterns" → `t('monitor_account_activity_for_s')`
3025. "Monitor bundle size and chunks" → `t('monitor_bundle_size_and_chunks')`
3026. "Monitor bundle size, performance metrics, and optimization opportunities" → `t('monitor_bundle_size_performanc')`
3027. "Monitor error:" → `t('monitor_error')`
3028. "Monitor webhook activity" → `t('monitor_webhook_activity')`
3029. "Monitoring for suspicious account activities" → `t('monitoring_for_suspicious_acco')`
3030. "Month" → `t('month')`
3031. "Monthly Leaderboard" → `t('monthly_leaderboard')`
3032. "Monthly budget" → `t('monthly_budget')`
3033. "Monthly job posting limit" → `t('monthly_job_posting_limit')`
3034. "Monthly strategy call with Zion AI team" → `t('monthly_strategy_call_with_zio')`
3035. "More actions" → `t('more_actions')`
3036. "More information needed" → `t('more_information_needed')`
3037. "More options" → `t('more_options')`
3038. "More pages" → `t('more_pages')`
3039. "More ways to boost your point balance" → `t('more_ways_to_boost_your_point_')`
3040. "Most Experienced" → `t('most_experienced')`
3041. "Most Funded" → `t('most_funded')`
3042. "Most Popular" → `t('most_popular')`
3043. "Most errors include:" → `t('most_errors_include')`
3044. "Most viewed pages on your platform" → `t('most_viewed_pages_on_your_plat')`
3045. "Multi Word Title" → `t('multi_word_title')`
3046. "Multi-Channel Support" → `t('multichannel_support')`
3047. "Multi-Cloud Compliance Automation" → `t('multicloud_compliance_automati')`
3048. "Multi-language Support" → `t('multilanguage_support')`
3049. "Multimodal Representation Learning" → `t('multimodal_representation_lear')`
3050. "Multiple   Words" → `t('multiple_words')`
3051. "Multiple ways to accumulate rewards" → `t('multiple_ways_to_accumulate_re')`
3052. "Multiverse config" → `t('multiverse_config')`
3053. "Multiverse map" → `t('multiverse_map')`
3054. "Mute microphone" → `t('mute_microphone')`
3055. "My Account" → `t('my_account')`
3056. "My Applications" → `t('my_applications')`
3057. "My Awesome Token" → `t('my_awesome_token')`
3058. "My Badges" → `t('my_badges')`
3059. "My Content" → `t('my_content')`
3060. "My Jobs" → `t('my_jobs')`
3061. "My Profile" → `t('my_profile')`
3062. "My Votes" → `t('my_votes')`
3063. "My Voting History" → `t('my_voting_history')`
3064. "NETWORK_ERROR" → `t('networkerror')`
3065. "NEXT_PUBLIC_" → `t('nextpublic')`
3066. "NEXT_PUBLIC_REOWN_PROJECT_ID" → `t('nextpublicreownprojectid')`
3067. "NEXT_PUBLIC_REOWN_PROJECT_ID appears to be a placeholder value" → `t('nextpublicreownprojectid_appea')`
3068. "NEXT_PUBLIC_SENTRY_DSN appears to be a placeholder value" → `t('nextpublicsentrydsn_appears_to')`
3069. "NEXT_PUBLIC_SUPABASE_ANON_KEY" → `t('nextpublicsupabaseanonkey')`
3070. "Name" → `t('name')`
3071. "Name / Brand" → `t('name_brand')`
3072. "Name,Link" → `t('namelink')`
3073. "Nation Detail Page" → `t('nation_detail_page')`
3074. "Nation Name" → `t('nation_name')`
3075. "Nation assistant" → `t('nation_assistant')`
3076. "Nation currency details" → `t('nation_currency_details')`
3077. "Nation-builder" → `t('nationbuilder')`
3078. "Nations Panel" → `t('nations_panel')`
3079. "Natural Language Processing Researcher" → `t('natural_language_processing_re')`
3080. "NavLink" → `t('navlink')`
3081. "Navigating the platform" → `t('navigating_the_platform')`
3082. "Navigating to talent profile: ${talentId}" → `t('navigating_to_talent_profile_t')`
3083. "Navigation Dropdown Accessibility" → `t('navigation_dropdown_accessibil')`
3084. "Navigation Error" → `t('navigation_error')`
3085. "Navigation Link Updates" → `t('navigation_link_updates')`
3086. "Navigation failed" → `t('navigation_failed')`
3087. "Need Response" → `t('need_response')`
3088. "Need help with your affiliate marketing? Contact our partner support team." → `t('need_help_with_your_affiliate_')`
3089. "Need help? Contact our support team" → `t('need_help_contact_our_support_')`
3090. "Need volume pricing or custom SLAs? Contact our enterprise sales team." → `t('need_volume_pricing_or_custom_')`
3091. "Neon" → `t('neon')`
3092. "NetApp AFF A250 All-Flash Array" → `t('netapp_aff_a250_allflash_array')`
3093. "Network Connectivity" → `t('network_connectivity')`
3094. "Network Engineer" → `t('network_engineer')`
3095. "Network Error" → `t('network_error')`
3096. "Network Visualizer" → `t('network_visualizer')`
3097. "Network connection issues detected" → `t('network_connection_issues_dete')`
3098. "Network connectivity troubleshooting" → `t('network_connectivity_troublesh')`
3099. "Network error" → `t('network_error')`
3100. "Network error – please retry" → `t('network_error_please_retry')`
3101. "Network error – please retry." → `t('network_error_please_retry')`
3102. "Network error. Please check your internet connection and try again." → `t('network_error_please_check_you')`
3103. "Network error. Please try again." → `t('network_error_please_try_again')`
3104. "Network request failed" → `t('network_request_failed')`
3105. "Networking" → `t('networking')`
3106. "Never" → `t('never')`
3107. "Never triggered" → `t('never_triggered')`
3108. "New" → `t('new')`
3109. "New Application" → `t('new_application')`
3110. "New Application Received" → `t('new_application_received')`
3111. "New Blog Post Generated" → `t('new_blog_post_generated')`
3112. "New Hire Request for Talent" → `t('new_hire_request_for_talent')`
3113. "New Job Match" → `t('new_job_match')`
3114. "New Job Matches" → `t('new_job_matches')`
3115. "New Job Posted" → `t('new_job_posted')`
3116. "New Message Received" → `t('new_message_received')`
3117. "New Multiverse Launches" → `t('new_multiverse_launches')`
3118. "New Onsite Service Request" → `t('new_onsite_service_request')`
3119. "New Partner" → `t('new_partner')`
3120. "New Password" → `t('new_password')`
3121. "New Post" → `t('new_post')`
3122. "New Services" → `t('new_services')`
3123. "New Support Case" → `t('new_support_case')`
3124. "New Tenant Setup" → `t('new_tenant_setup')`
3125. "New User" → `t('new_user')`
3126. "New York" → `t('new_york')`
3127. "New applications" → `t('new_applications')`
3128. "New contact message:" → `t('new_contact_message')`
3129. "New job application received" → `t('new_job_application_received')`
3130. "New message" → `t('new_message')`
3131. "New password" → `t('new_password')`
3132. "Newcomer" → `t('newcomer')`
3133. "Newest" → `t('newest')`
3134. "Newest First" → `t('newest_first')`
3135. "Newsletter" → `t('newsletter')`
3136. "Newsletter Draft Ready" → `t('newsletter_draft_ready')`
3137. "Newsletter integration error:" → `t('newsletter_integration_error')`
3138. "Newsletter subscription error:" → `t('newsletter_subscription_error')`
3139. "Next" → `t('next')`
3140. "Next Billing Date" → `t('next_billing_date')`
3141. "Next slide" → `t('next_slide')`
3142. "Next: Data Sync" → `t('next_data_sync')`
3143. "Next: Generate Pitch Deck" → `t('next_generate_pitch_deck')`
3144. "NextAuth Configuration Fix" → `t('nextauth_configuration_fix')`
3145. "Niche" → `t('niche')`
3146. "Nike" → `t('nike')`
3147. "Nike logo" → `t('nike_logo')`
3148. "No .env.local file found" → `t('no_envlocal_file_found')`
3149. "No Applications Yet" → `t('no_applications_yet')`
3150. "No Categories Found" → `t('no_categories_found')`
3151. "No Content Generated Yet" → `t('no_content_generated_yet')`
3152. "No Conversation Selected" → `t('no_conversation_selected')`
3153. "No Equipment Available" → `t('no_equipment_available')`
3154. "No Image" → `t('no_image')`
3155. "No Internet Connection" → `t('no_internet_connection')`
3156. "No Milestones Yet" → `t('no_milestones_yet')`
3157. "No Notifications" → `t('no_notifications')`
3158. "No Orders" → `t('no_orders')`
3159. "No Partners Found" → `t('no_partners_found')`
3160. "No Resume" → `t('no_resume')`
3161. "No Reviews Yet" → `t('no_reviews_yet')`
3162. "No STRIPE_TEST_SECRET_KEY configured, using dummy key for development" → `t('no_stripetestsecretkey_configu')`
3163. "No Talent Profiles" → `t('no_talent_profiles')`
3164. "No access token found. Please request a new password reset link." → `t('no_access_token_found_please_r')`
3165. "No active disputes match the selected filter" → `t('no_active_disputes_match_the_s')`
3166. "No activity found for this project" → `t('no_activity_found_for_this_pro')`
3167. "No admin notes yet" → `t('no_admin_notes_yet')`
3168. "No applications yet" → `t('no_applications_yet')`
3169. "No articles found" → `t('no_articles_found')`
3170. "No bio provided" → `t('no_bio_provided')`
3171. "No categories data available" → `t('no_categories_data_available')`
3172. "No categories yet" → `t('no_categories_yet')`
3173. "No changelog entries yet" → `t('no_changelog_entries_yet')`
3174. "No content provided for analysis" → `t('no_content_provided_for_analys')`
3175. "No content type provided" → `t('no_content_type_provided')`
3176. "No conversations yet" → `t('no_conversations_yet')`
3177. "No countries match your search" → `t('no_countries_match_your_search')`
3178. "No data available" → `t('no_data_available')`
3179. "No deck to save!" → `t('no_deck_to_save')`
3180. "No disputes found" → `t('no_disputes_found')`
3181. "No enhanced profile data received" → `t('no_enhanced_profile_data_recei')`
3182. "No equipment ID provided" → `t('no_equipment_id_provided')`
3183. "No error details available" → `t('no_error_details_available')`
3184. "No error found in ESLint report." → `t('no_error_found_in_eslint_repor')`
3185. "No explainer copy loaded." → `t('no_explainer_copy_loaded')`
3186. "No favorites added." → `t('no_favorites_added')`
3187. "No feedback submitted yet." → `t('no_feedback_submitted_yet')`
3188. "No flagged listings" → `t('no_flagged_listings')`
3189. "No hostname" → `t('no_hostname')`
3190. "No hostname or subdomain provided" → `t('no_hostname_or_subdomain_provi')`
3191. "No image available" → `t('no_image_available')`
3192. "No internet connection - please check your network" → `t('no_internet_connection_please_')`
3193. "No internet connection. Please check your network." → `t('no_internet_connection_please_')`
3194. "No job suggestions available yet. Complete your profile to get AI-matched jobs." → `t('no_job_suggestions_available_y')`
3195. "No jobs with status" → `t('no_jobs_with_status')`
3196. "No listings found" → `t('no_listings_found')`
3197. "No log entries found" → `t('no_log_entries_found')`
3198. "No matches found" → `t('no_matches_found')`
3199. "No messages yet" → `t('no_messages_yet')`
3200. "No model data returned" → `t('no_model_data_returned')`
3201. "No new messages" → `t('no_new_messages')`
3202. "No notes yet. Add the first note to this project." → `t('no_notes_yet_add_the_first_not')`
3203. "No notifications found" → `t('no_notifications_found')`
3204. "No page view data available for this time period" → `t('no_page_view_data_available_fo')`
3205. "No past interviews" → `t('no_past_interviews')`
3206. "No pending interviews" → `t('no_pending_interviews')`
3207. "No profile ID provided" → `t('no_profile_id_provided')`
3208. "No recent calls for this project" → `t('no_recent_calls_for_this_proje')`
3209. "No referrals yet" → `t('no_referrals_yet')`
3210. "No response body" → `t('no_response_body')`
3211. "No responses measured or all responses were errors before latency could be determined." → `t('no_responses_measured_or_all_r')`
3212. "No resume" → `t('no_resume')`
3213. "No resumes found" → `t('no_resumes_found')`
3214. "No reviews to moderate" → `t('no_reviews_to_moderate')`
3215. "No rewards yet" → `t('no_rewards_yet')`
3216. "No saved resumes found." → `t('no_saved_resumes_found')`
3217. "No services added yet" → `t('no_services_added_yet')`
3218. "No shareable whitepaper selected or status is unknown." → `t('no_shareable_whitepaper_select')`
3219. "No skills added yet" → `t('no_skills_added_yet')`
3220. "No talent" → `t('no_talent')`
3221. "No talent matches yet" → `t('no_talent_matches_yet')`
3222. "No talent profiles are currently available." → `t('no_talent_profiles_are_current')`
3223. "No talent profiles found" → `t('no_talent_profiles_found')`
3224. "No talent profiles match your criteria. Try adjusting your filters or search terms." → `t('no_talent_profiles_match_your_')`
3225. "No title" → `t('no_title')`
3226. "No tokens earned yet" → `t('no_tokens_earned_yet')`
3227. "No tokens spent yet" → `t('no_tokens_spent_yet')`
3228. "No tracking info yet." → `t('no_tracking_info_yet')`
3229. "No transactions found" → `t('no_transactions_found')`
3230. "No upcoming interviews" → `t('no_upcoming_interviews')`
3231. "No upcoming interviews scheduled" → `t('no_upcoming_interviews_schedul')`
3232. "No user message found" → `t('no_user_message_found')`
3233. "No wallet connected" → `t('no_wallet_connected')`
3234. "No wallet detected. Please install MetaMask or another compatible wallet." → `t('no_wallet_detected_please_inst')`
3235. "No webhooks configured yet. Create your first webhook above." → `t('no_webhooks_configured_yet_cre')`
3236. "NoDataToken" → `t('nodatatoken')`
3237. "Noah Smith" → `t('noah_smith')`
3238. "Node Version" → `t('node_version')`
3239. "Non-Error promise rejection" → `t('nonerror_promise_rejection')`
3240. "Non-Error promise rejection captured" → `t('nonerror_promise_rejection_cap')`
3241. "NonExistent" → `t('nonexistent')`
3242. "NonExistent Service" → `t('nonexistent_service')`
3243. "None" → `t('none')`
3244. "North America" → `t('north_america')`
3245. "Not Connected" → `t('not_connected')`
3246. "Not Found" → `t('not_found')`
3247. "Not Found - Zion" → `t('not_found_zion')`
3248. "Not Selected" → `t('not_selected')`
3249. "Not Signed In" → `t('not_signed_in')`
3250. "Not a file" → `t('not_a_file')`
3251. "Not analyzed" → `t('not_analyzed')`
3252. "Not authenticated" → `t('not_authenticated')`
3253. "Not available" → `t('not_available')`
3254. "Not backed up" → `t('not_backed_up')`
3255. "Not enough content" → `t('not_enough_content')`
3256. "Not found" → `t('not_found')`
3257. "Not logged in" → `t('not_logged_in')`
3258. "Not moving forward" → `t('not_moving_forward')`
3259. "Not scored" → `t('not_scored')`
3260. "Not set" → `t('not_set')`
3261. "Not specified" → `t('not_specified')`
3262. "Not yet completed onboarding" → `t('not_yet_completed_onboarding')`
3263. "Note added" → `t('note_added')`
3264. "Notes" → `t('notes')`
3265. "Notes saved" → `t('notes_saved')`
3266. "Notification" → `t('notification')`
3267. "Notifications" → `t('notifications')`
3268. "Notifications | Zion AI Marketplace" → `t('notifications_zion_ai_marketpl')`
3269. "Now" → `t('now')`
3270. "OAuth Error:" → `t('oauth_error')`
3271. "Of clicks that convert to sign-ups" → `t('of_clicks_that_convert_to_sign')`
3272. "Offer Accepted" → `t('offer_accepted')`
3273. "Offer Sent" → `t('offer_sent')`
3274. "Offline" → `t('offline')`
3275. "Offline Mode" → `t('offline_mode')`
3276. "Offworld Lab" → `t('offworld_lab')`
3277. "Olivia Rodriguez" → `t('olivia_rodriguez')`
3278. "On-chain credentials" → `t('onchain_credentials')`
3279. "On-chain credentials\nWork marketplace incentives" → `t('onchain_credentialsnwork_marke')`
3280. "On-chain proposals" → `t('onchain_proposals')`
3281. "On-site" → `t('onsite')`
3282. "Onboarding" → `t('onboarding')`
3283. "Onboarding notification sent" → `t('onboarding_notification_sent')`
3284. "Once reviews are submitted and approved, they will appear here." → `t('once_reviews_are_submitted_and')`
3285. "Once they complete their profile setup, your referral is confirmed" → `t('once_they_complete_their_profi')`
3286. "Once you" → `t('once_you')`
3287. "Ongoing" → `t('ongoing')`
3288. "Online" → `t('online')`
3289. "Only job seekers can apply for jobs" → `t('only_job_seekers_can_apply_for')`
3290. "Only pending transactions can be cancelled" → `t('only_pending_transactions_can_')`
3291. "Only show verified profiles" → `t('only_show_verified_profiles')`
3292. "Only the original poster or moderators can mark answers" → `t('only_the_original_poster_or_mo')`
3293. "Oops! Page not found" → `t('oops_page_not_found')`
3294. "Oops! Something went wrong" → `t('oops_something_went_wrong')`
3295. "Open" → `t('open')`
3296. "Open Alert Dialog" → `t('open_alert_dialog')`
3297. "Open App" → `t('open_app')`
3298. "Open Dialog" → `t('open_dialog')`
3299. "Open Disputes" → `t('open_disputes')`
3300. "Open Founder Chat" → `t('open_founder_chat')`
3301. "Open Live Chat" → `t('open_live_chat')`
3302. "Open Positions" → `t('open_positions')`
3303. "Open Source Library Docs" → `t('open_source_library_docs')`
3304. "Open Source Protocol Update" → `t('open_source_protocol_update')`
3305. "Open chat assistant" → `t('open_chat_assistant')`
3306. "Open help chat" → `t('open_help_chat')`
3307. "Open knowledge &gt; closed platforms" → `t('open_knowledge_gt_closed_platf')`
3308. "Open notifications" → `t('open_notifications')`
3309. "Open support" → `t('open_support')`
3310. "OpenAI error:" → `t('openai_error')`
3311. "OpenAI request error" → `t('openai_request_error')`
3312. "OpenAI request failed" → `t('openai_request_failed')`
3313. "Opening App Failed" → `t('opening_app_failed')`
3314. "Opening Zion App" → `t('opening_zion_app')`
3315. "Opening message thread with client" → `t('opening_message_thread_with_cl')`
3316. "Operational" → `t('operational')`
3317. "Operations" → `t('operations')`
3318. "Optimization Recommendations" → `t('optimization_recommendations')`
3319. "Optimize your profile for better visibility" → `t('optimize_your_profile_for_bett')`
3320. "Optimized for inclusivity" → `t('optimized_for_inclusivity')`
3321. "Option 1 Visual" → `t('option_1_visual')`
3322. "Option 2 Visual" → `t('option_2_visual')`
3323. "Optional Activations" → `t('optional_activations')`
3324. "Or Upload CV (PDF)" → `t('or_upload_cv_pdf')`
3325. "Or continue with" → `t('or_continue_with')`
3326. "Order" → `t('order')`
3327. "Order Confirmation Page" → `t('order_confirmation_page')`
3328. "Order History" → `t('order_history')`
3329. "Order Paid" → `t('order_paid')`
3330. "Order Summary" → `t('order_summary')`
3331. "Order summary copied to clipboard" → `t('order_summary_copied_to_clipbo')`
3332. "Orders" → `t('orders')`
3333. "Org Chart - Zion" → `t('org_chart_zion')`
3334. "Organization Chart" → `t('organization_chart')`
3335. "Origin instance" → `t('origin_instance')`
3336. "Origin story" → `t('origin_story')`
3337. "Other" → `t('other')`
3338. "Our 24x7x365 global IT service offering provides enterprise-grade solutions for businesses of all sizes" → `t('our_24x7x365_global_it_service')`
3339. "Our Green IT Solutions" → `t('our_green_it_solutions')`
3340. "Our Mission" → `t('our_mission')`
3341. "Our Offices" → `t('our_offices')`
3342. "Our Values" → `t('our_values')`
3343. "Our Vision" → `t('our_vision')`
3344. "Our enterprise solutions offer powerful tools designed for large teams and complex hiring needs" → `t('our_enterprise_solutions_offer')`
3345. "Our interface and search support multiple languages so you can collaborate without barriers." → `t('our_interface_and_search_suppo')`
3346. "Our pricing varies by service. You can view detailed pricing on our marketplace or contact sales@ziontechgroup.com for custom quotes." → `t('our_pricing_varies_by_service_')`
3347. "Our servers are experiencing issues. Please try again in a moment." → `t('our_servers_are_experiencing_i')`
3348. "Our servers are experiencing issues. Please try again later." → `t('our_servers_are_experiencing_i')`
3349. "Out of stock" → `t('out_of_stock')`
3350. "Over" → `t('over')`
3351. "Overdue" → `t('overdue')`
3352. "Overview" → `t('overview')`
3353. "PWA install error:" → `t('pwa_install_error')`
3354. "Page Count" → `t('page_count')`
3355. "Page Error Boundary" → `t('page_error_boundary')`
3356. "Page Loading Validation" → `t('page_loading_validation')`
3357. "Page Unavailable" → `t('page_unavailable')`
3358. "Page Views Trend" → `t('page_views_trend')`
3359. "Page not found" → `t('page_not_found')`
3360. "PageErrorBoundary" → `t('pageerrorboundary')`
3361. "PageErrorBoundary caught error on ${pageName ||" → `t('pageerrorboundary_caught_error')`
3362. "Pages with dynamic parameters" → `t('pages_with_dynamic_parameters')`
3363. "Pages/TalentProfilePage" → `t('pagestalentprofilepage')`
3364. "Pagination" → `t('pagination')`
3365. "Pagination five page view" → `t('pagination_five_page_view')`
3366. "PaginationButton" → `t('paginationbutton')`
3367. "PaginationContent" → `t('paginationcontent')`
3368. "PaginationEllipsis" → `t('paginationellipsis')`
3369. "PaginationLink" → `t('paginationlink')`
3370. "PaginationNext" → `t('paginationnext')`
3371. "PaginationPrevious" → `t('paginationprevious')`
3372. "Paid" → `t('paid')`
3373. "Paid Amount" → `t('paid_amount')`
3374. "Pandora" → `t('pandora')`
3375. "Pandora logo" → `t('pandora_logo')`
3376. "Parameters" → `t('parameters')`
3377. "Part Time" → `t('part_time')`
3378. "Part-time" → `t('parttime')`
3379. "Part-time DevOps Engineer" → `t('parttime_devops_engineer')`
3380. "Parties" → `t('parties')`
3381. "Parties Involved" → `t('parties_involved')`
3382. "Partner Application" → `t('partner_application')`
3383. "Partner Approved" → `t('partner_approved')`
3384. "Partner Booths" → `t('partner_booths')`
3385. "Partner Details" → `t('partner_details')`
3386. "Partner Name" → `t('partner_name')`
3387. "Partner Program" → `t('partner_program')`
3388. "Partner Registration" → `t('partner_registration')`
3389. "Partner Settings" → `t('partner_settings')`
3390. "Partner Support" → `t('partner_support')`
3391. "Partner application submitted!" → `t('partner_application_submitted')`
3392. "Partner login auth health check failed" → `t('partner_login_auth_health_chec')`
3393. "Partner settings have been updated successfully." → `t('partner_settings_have_been_upd')`
3394. "Partner subsidies" → `t('partner_subsidies')`
3395. "Partners" → `t('partners')`
3396. "Partners waiting for review and approval" → `t('partners_waiting_for_review_an')`
3397. "PartnersPage rendering Unauthenticated View" → `t('partnerspage_rendering_unauthe')`
3398. "Partnership Request" → `t('partnership_request')`
3399. "Password" → `t('password')`
3400. "Password Recovery" → `t('password_recovery')`
3401. "Password Reset" → `t('password_reset')`
3402. "Password Reset Failed" → `t('password_reset_failed')`
3403. "Password Strength" → `t('password_strength')`
3404. "Password is required" → `t('password_is_required')`
3405. "Password is too weak" → `t('password_is_too_weak')`
3406. "Password is too weak. Please choose a stronger password." → `t('password_is_too_weak_please_ch')`
3407. "Password must be at least 8 characters long" → `t('password_must_be_at_least_8_ch')`
3408. "Password must contain at least 8 characters with uppercase, lowercase, number, and special character" → `t('password_must_contain_at_least')`
3409. "Password reset error:" → `t('password_reset_error')`
3410. "Password reset failed" → `t('password_reset_failed')`
3411. "Password reset ticket created successfully for:" → `t('password_reset_ticket_created_')`
3412. "Password should be" → `t('password_should_be')`
3413. "Password update error" → `t('password_update_error')`
3414. "Password update failed" → `t('password_update_failed')`
3415. "Password updated" → `t('password_updated')`
3416. "Password updated successfully" → `t('password_updated_successfully')`
3417. "Passwords do not match" → `t('passwords_do_not_match')`
3418. "Past" → `t('past')`
3419. "Pattern detection in messages and job postings" → `t('pattern_detection_in_messages_')`
3420. "Pay" → `t('pay')`
3421. "Pay per hour of work" → `t('pay_per_hour_of_work')`
3422. "Pay with Stripe" → `t('pay_with_stripe')`
3423. "PayPal" → `t('paypal')`
3424. "Payment Amount" → `t('payment_amount')`
3425. "Payment Canceled" → `t('payment_canceled')`
3426. "Payment Flow Smoke Test" → `t('payment_flow_smoke_test')`
3427. "Payment Methods" → `t('payment_methods')`
3428. "Payment Milestones" → `t('payment_milestones')`
3429. "Payment Milestones | Zion AI Marketplace" → `t('payment_milestones_zion_ai_mar')`
3430. "Payment Notifications" → `t('payment_notifications')`
3431. "Payment Processing" → `t('payment_processing')`
3432. "Payment Settings" → `t('payment_settings')`
3433. "Payment Successful" → `t('payment_successful')`
3434. "Payment Successful!" → `t('payment_successful')`
3435. "Payment Summary" → `t('payment_summary')`
3436. "Payment Terms" → `t('payment_terms')`
3437. "Payment Type" → `t('payment_type')`
3438. "Payment error" → `t('payment_error')`
3439. "Payment error:" → `t('payment_error')`
3440. "Payment intent error" → `t('payment_intent_error')`
3441. "Payment intent error:" → `t('payment_intent_error')`
3442. "Payment processing error" → `t('payment_processing_error')`
3443. "Payment to" → `t('payment_to')`
3444. "Payout Method" → `t('payout_method')`
3445. "Pending" → `t('pending')`
3446. "Pending Applications" → `t('pending_applications')`
3447. "Pending Review" → `t('pending_review')`
3448. "Pending Review Flags" → `t('pending_review_flags')`
3449. "Pending Reviews" → `t('pending_reviews')`
3450. "Pending Webhooks" → `t('pending_webhooks')`
3451. "People you" → `t('people_you')`
3452. "Percentage of reward granted to this partner for successful referrals" → `t('percentage_of_reward_granted_t')`
3453. "Performance" → `t('performance')`
3454. "Performance Analytics" → `t('performance_analytics')`
3455. "Performance Dashboard" → `t('performance_dashboard')`
3456. "Performance Metrics Summary" → `t('performance_metrics_summary')`
3457. "Performance Monitor" → `t('performance_monitor')`
3458. "Performance Overview" → `t('performance_overview')`
3459. "Performance Score" → `t('performance_score')`
3460. "Performance error detected. Streak: ${perfErrorStreak}" → `t('performance_error_detected_str')`
3461. "Performance metrics for your team" → `t('performance_metrics_for_your_t')`
3462. "Performance monitoring active" → `t('performance_monitoring_active')`
3463. "Performance tracking" → `t('performance_tracking')`
3464. "PerformanceObserver" → `t('performanceobserver')`
3465. "Performing search for:" → `t('performing_search_for')`
3466. "Permission Denied" → `t('permission_denied')`
3467. "Permission denied" → `t('permission_denied')`
3468. "Permission updated" → `t('permission_updated')`
3469. "Personalized walkthrough of the platform" → `t('personalized_walkthrough_of_th')`
3470. "Philosophy" → `t('philosophy')`
3471. "Phone" → `t('phone')`
3472. "Phone Number" → `t('phone_number')`
3473. "Photo" → `t('photo')`
3474. "Photo preview" → `t('photo_preview')`
3475. "Pick a date" → `t('pick_a_date')`
3476. "Pin" → `t('pin')`
3477. "Pitch Deck Generator" → `t('pitch_deck_generator')`
3478. "Pitch Summary" → `t('pitch_summary')`
3479. "Plan" → `t('plan')`
3480. "Plan Features" → `t('plan_features')`
3481. "Planetary Congress" → `t('planetary_congress')`
3482. "Planetary Congress - Zion" → `t('planetary_congress_zion')`
3483. "Platform" → `t('platform')`
3484. "Platform Credit" → `t('platform_credit')`
3485. "Playbooks" → `t('playbooks')`
3486. "Please" → `t('please')`
3487. "Please add at least one service to your profile." → `t('please_add_at_least_one_servic')`
3488. "Please add at least one skill to your profile." → `t('please_add_at_least_one_skill_')`
3489. "Please be ready on time!" → `t('please_be_ready_on_time')`
3490. "Please check your form and try again" → `t('please_check_your_form_and_try')`
3491. "Please check your input and try again." → `t('please_check_your_input_and_tr')`
3492. "Please check your internet connection" → `t('please_check_your_internet_con')`
3493. "Please check your internet connection and try again." → `t('please_check_your_internet_con')`
3494. "Please check your request data and try again" → `t('please_check_your_request_data')`
3495. "Please connect your wallet to see your voting history." → `t('please_connect_your_wallet_to_')`
3496. "Please connect your wallet to vote." → `t('please_connect_your_wallet_to_')`
3497. "Please connect your wallet." → `t('please_connect_your_wallet')`
3498. "Please enter a date." → `t('please_enter_a_date')`
3499. "Please enter a description" → `t('please_enter_a_description')`
3500. "Please enter a message before applying." → `t('please_enter_a_message_before_')`
3501. "Please enter a message before sending." → `t('please_enter_a_message_before_')`
3502. "Please enter a prompt." → `t('please_enter_a_prompt')`
3503. "Please enter a valid Auth0 Client ID (32+ characters)" → `t('please_enter_a_valid_auth0_cli')`
3504. "Please enter a valid Auth0 Client Secret (64+ characters)" → `t('please_enter_a_valid_auth0_cli')`
3505. "Please enter a valid phone number" → `t('please_enter_a_valid_phone_num')`
3506. "Please enter a valid voting power greater than 0." → `t('please_enter_a_valid_voting_po')`
3507. "Please enter a wallet address for blockchain deployment" → `t('please_enter_a_wallet_address_')`
3508. "Please enter at least ${contentLength} characters before enhancing." → `t('please_enter_at_least_contentl')`
3509. "Please fill all fields and agree to the terms." → `t('please_fill_all_fields_and_agr')`
3510. "Please fill in all required fields" → `t('please_fill_in_all_required_fi')`
3511. "Please fill in all required fields." → `t('please_fill_in_all_required_fi')`
3512. "Please generate a referral code first" → `t('please_generate_a_referral_cod')`
3513. "Please generate and finalize the whitepaper before submitting." → `t('please_generate_and_finalize_t')`
3514. "Please generate the whitepaper content first before creating a shareable link." → `t('please_generate_the_whitepaper')`
3515. "Please install MetaMask or another compatible wallet." → `t('please_install_metamask_or_ano')`
3516. "Please log in or sign up to continue with your purchase." → `t('please_log_in_or_sign_up_to_co')`
3517. "Please log in to access marketplace data." → `t('please_log_in_to_access_market')`
3518. "Please log in to access this feature." → `t('please_log_in_to_access_this_f')`
3519. "Please log in to apply for this job" → `t('please_log_in_to_apply_for_thi')`
3520. "Please log in to continue" → `t('please_log_in_to_continue')`
3521. "Please log in to use this feature" → `t('please_log_in_to_use_this_feat')`
3522. "Please log in to your Zion AI Marketplace account to respond to this request." → `t('please_log_in_to_your_zion_ai_')`
3523. "Please login to continue" → `t('please_login_to_continue')`
3524. "Please provide a brief title for the interview." → `t('please_provide_a_brief_title_f')`
3525. "Please provide a cover letter" → `t('please_provide_a_cover_letter')`
3526. "Please provide a resolution summary" → `t('please_provide_a_resolution_su')`
3527. "Please provide at least a detailed bio before generating enhanced content." → `t('please_provide_at_least_a_deta')`
3528. "Please provide at least a title and category." → `t('please_provide_at_least_a_titl')`
3529. "Please provide details about the issue you're experiencing with this project." → `t('please_provide_details_about_t')`
3530. "Please provide specific details about the issue..." → `t('please_provide_specific_detail')`
3531. "Please select a conversation first" → `t('please_select_a_conversation_f')`
3532. "Please select a date for the interview." → `t('please_select_a_date_for_the_i')`
3533. "Please select a meeting platform." → `t('please_select_a_meeting_platfo')`
3534. "Please select a payout method." → `t('please_select_a_payout_method')`
3535. "Please select a rating." → `t('please_select_a_rating')`
3536. "Please select a reason for the dispute" → `t('please_select_a_reason_for_the')`
3537. "Please select a resume to continue" → `t('please_select_a_resume_to_cont')`
3538. "Please select chains and enter a valid amount to bridge." → `t('please_select_chains_and_enter')`
3539. "Please select chains and enter a valid amount." → `t('please_select_chains_and_enter')`
3540. "Please select valid image files" → `t('please_select_valid_image_file')`
3541. "Please select your audience size." → `t('please_select_your_audience_si')`
3542. "Please sign in to follow" → `t('please_sign_in_to_follow')`
3543. "Please sign in to get personalized AI picks." → `t('please_sign_in_to_get_personal')`
3544. "Please sign in to make a purchase." → `t('please_sign_in_to_make_a_purch')`
3545. "Please sign in to reply" → `t('please_sign_in_to_reply')`
3546. "Please sign in to report content" → `t('please_sign_in_to_report_conte')`
3547. "Please sign in to suggest" → `t('please_sign_in_to_suggest')`
3548. "Please sign in to vote" → `t('please_sign_in_to_vote')`
3549. "Please specify your niche." → `t('please_specify_your_niche')`
3550. "Please try again later" → `t('please_try_again_later')`
3551. "Please try again later." → `t('please_try_again_later')`
3552. "Please wait..." → `t('please_wait')`
3553. "Podcast" → `t('podcast')`
3554. "Podcast Host" → `t('podcast_host')`
3555. "Point Breakdown" → `t('point_breakdown')`
3556. "Policy" → `t('policy')`
3557. "Poor LCP detected: ${entry.startTime}ms" → `t('poor_lcp_detected_entrystartti')`
3558. "Poppins Fallback" → `t('poppins_fallback')`
3559. "Popular" → `t('popular')`
3560. "Popular Countries" → `t('popular_countries')`
3561. "Popular Zaps" → `t('popular_zaps')`
3562. "Population metrics" → `t('population_metrics')`
3563. "Portfolio" → `t('portfolio')`
3564. "Portfolio Builder | Zion AI Marketplace" → `t('portfolio_builder_zion_ai_mark')`
3565. "Positive" → `t('positive')`
3566. "Post" → `t('post')`
3567. "Post Comment" → `t('post_comment')`
3568. "Post Job" → `t('post_job')`
3569. "Post New Job" → `t('post_new_job')`
3570. "Post Note" → `t('post_note')`
3571. "Post Proposal" → `t('post_proposal')`
3572. "Post Reply" → `t('post_reply')`
3573. "Post Your First Job" → `t('post_your_first_job')`
3574. "Post a Job" → `t('post_a_job')`
3575. "Post a Job | Zion AI Marketplace" → `t('post_a_job_zion_ai_marketplace')`
3576. "Post a New Job" → `t('post_a_new_job')`
3577. "Post created" → `t('post_created')`
3578. "Post creation error:" → `t('post_creation_error')`
3579. "Post in the community or comment on discussions" → `t('post_in_the_community_or_comme')`
3580. "Post job" → `t('post_job')`
3581. "Post job error:" → `t('post_job_error')`
3582. "Post jobs and find talented professionals" → `t('post_jobs_and_find_talented_pr')`
3583. "Post locked" → `t('post_locked')`
3584. "Post not found" → `t('post_not_found')`
3585. "Post pinned" → `t('post_pinned')`
3586. "Post unlocked" → `t('post_unlocked')`
3587. "Post unpinned" → `t('post_unpinned')`
3588. "Post updated" → `t('post_updated')`
3589. "Post your first job" → `t('post_your_first_job')`
3590. "Post your first job or project" → `t('post_your_first_job_or_project')`
3591. "Post your first job to start finding talent" → `t('post_your_first_job_to_start_f')`
3592. "Posting a job" → `t('posting_a_job')`
3593. "Posting a job on Zion AI Marketplace is quick and straightforward. Follow these steps to create an effective job posting:\n\n1. Click on the" → `t('posting_a_job_on_zion_ai_marke')`
3594. "Postman Collection" → `t('postman_collection')`
3595. "Power & Cooling" → `t('power_cooling')`
3596. "Powerful AI Hiring Tools" → `t('powerful_ai_hiring_tools')`
3597. "Powerful Features" → `t('powerful_features')`
3598. "Powerful GPUs, Anytime, Anywhere" → `t('powerful_gpus_anytime_anywhere')`
3599. "Pre-designed graphics for your social channels" → `t('predesigned_graphics_for_your_')`
3600. "Pre-order" → `t('preorder')`
3601. "Pre-seed, Seed, etc" → `t('preseed_seed_etc')`
3602. "Precise Candidate Matching" → `t('precise_candidate_matching')`
3603. "Predictive Analytics Platform" → `t('predictive_analytics_platform')`
3604. "Preferences" → `t('preferences')`
3605. "Preferred Categories" → `t('preferred_categories')`
3606. "Preferred Payout Method" → `t('preferred_payout_method')`
3607. "Preload Critical Resources" → `t('preload_critical_resources')`
3608. "Preorder" → `t('preorder')`
3609. "Prepare for Interview" → `t('prepare_for_interview')`
3610. "Present" → `t('present')`
3611. "Press Enter or click Add to include a service" → `t('press_enter_or_click_add_to_in')`
3612. "Press Enter or click Add to include a skill" → `t('press_enter_or_click_add_to_in')`
3613. "Preview" → `t('preview')`
3614. "Preview Profile" → `t('preview_profile')`
3615. "Preview your profile" → `t('preview_your_profile')`
3616. "Previous" → `t('previous')`
3617. "Previous slide" → `t('previous_slide')`
3618. "Previously Viewed" → `t('previously_viewed')`
3619. "Price" → `t('price')`
3620. "Price Per Incident" → `t('price_per_incident')`
3621. "Price Range" → `t('price_range')`
3622. "Price includes transportation and first hour onsite. Additional hours billed separately." → `t('price_includes_transportation_')`
3623. "Price must be a valid number" → `t('price_must_be_a_valid_number')`
3624. "Price range" → `t('price_range')`
3625. "Price: High to Low" → `t('price_high_to_low')`
3626. "Price: Low to High" → `t('price_low_to_high')`
3627. "Pricing" → `t('pricing')`
3628. "Pricing & Availability" → `t('pricing_availability')`
3629. "Primary" → `t('primary')`
3630. "Primary Brand Color" → `t('primary_brand_color')`
3631. "PrimaryNav renders without horizontal overflow" → `t('primarynav_renders_without_hor')`
3632. "PrimaryNav search suggestion selected:" → `t('primarynav_search_suggestion_s')`
3633. "Print" → `t('print')`
3634. "Priority" → `t('priority')`
3635. "Prisma disconnect error:" → `t('prisma_disconnect_error')`
3636. "Privacy Policy" → `t('privacy_policy')`
3637. "Private Hiring Portal" → `t('private_hiring_portal')`
3638. "Private Profile - Zion Tech Marketplace" → `t('private_profile_zion_tech_mark')`
3639. "Private User Profile" → `t('private_user_profile')`
3640. "Private user profile page" → `t('private_user_profile_page')`
3641. "Priya Sharma" → `t('priya_sharma')`
3642. "Proceed to Checkout" → `t('proceed_to_checkout')`
3643. "Proceed to Editor / Regenerate" → `t('proceed_to_editor_regenerate')`
3644. "Processing your request" → `t('processing_your_request')`
3645. "Product" → `t('product')`
3646. "Product 1 Valid Date" → `t('product_1_valid_date')`
3647. "Product 2 Invalid Date" → `t('product_2_invalid_date')`
3648. "Product 3 Missing Date" → `t('product_3_missing_date')`
3649. "Product Image" → `t('product_image')`
3650. "Product Manager" → `t('product_manager')`
3651. "Product Not Found" → `t('product_not_found')`
3652. "Product Pages" → `t('product_pages')`
3653. "Product Reviews" → `t('product_reviews')`
3654. "Product Roadmap" → `t('product_roadmap')`
3655. "Product Search" → `t('product_search')`
3656. "Product Title" → `t('product_title')`
3657. "Product description" → `t('product_description')`
3658. "Product image preview" → `t('product_image_preview')`
3659. "Product information is incomplete" → `t('product_information_is_incompl')`
3660. "Product information unavailable." → `t('product_information_unavailabl')`
3661. "Product not found" → `t('product_not_found')`
3662. "ProductActions" → `t('productactions')`
3663. "Production Configuration" → `t('production_configuration')`
3664. "Production Environment Configuration Errors:\n" → `t('production_environment_configu')`
3665. "Production Error:" → `t('production_error')`
3666. "ProductionErrorBoundary" → `t('productionerrorboundary')`
3667. "ProductionErrorBoundary caught an error:" → `t('productionerrorboundary_caught')`
3668. "ProductionErrorMonitor" → `t('productionerrormonitor')`
3669. "ProductionErrorMonitor captured error:" → `t('productionerrormonitor_capture')`
3670. "Professional" → `t('professional')`
3671. "Professional Bio" → `t('professional_bio')`
3672. "Professional Headline" → `t('professional_headline')`
3673. "Professional IT onsite support services with transparent pricing across 190+ countries worldwide" → `t('professional_it_onsite_support')`
3674. "Professional Services" → `t('professional_services')`
3675. "Professional Suite" → `t('professional_suite')`
3676. "Professional Summary" → `t('professional_summary')`
3677. "Professional Title" → `t('professional_title')`
3678. "Professional development resources and community support" → `t('professional_development_resou')`
3679. "Professional equipment" → `t('professional_equipment')`
3680. "Professional services for digital transformation and technology innovation" → `t('professional_services_for_digi')`
3681. "Professional services for modern businesses and enterprises" → `t('professional_services_for_mode')`
3682. "Professional title is required" → `t('professional_title_is_required')`
3683. "Profile" → `t('profile')`
3684. "Profile Complete" → `t('profile_complete')`
3685. "Profile Completeness" → `t('profile_completeness')`
3686. "Profile Completion" → `t('profile_completion')`
3687. "Profile Created Successfully" → `t('profile_created_successfully')`
3688. "Profile Data" → `t('profile_data')`
3689. "Profile ID is missing." → `t('profile_id_is_missing')`
3690. "Profile Load Error" → `t('profile_load_error')`
3691. "Profile Not Found" → `t('profile_not_found')`
3692. "Profile Picture" → `t('profile_picture')`
3693. "Profile Settings" → `t('profile_settings')`
3694. "Profile completed!" → `t('profile_completed')`
3695. "Profile completion" → `t('profile_completion')`
3696. "Profile data or user ID is missing." → `t('profile_data_or_user_id_is_mis')`
3697. "Profile not found" → `t('profile_not_found')`
3698. "Profile not found." → `t('profile_not_found')`
3699. "Profile screen" → `t('profile_screen')`
3700. "Profile update error:" → `t('profile_update_error')`
3701. "Profile update failed" → `t('profile_update_failed')`
3702. "Profile update failed:" → `t('profile_update_failed')`
3703. "Profile updated" → `t('profile_updated')`
3704. "Profile updated!" → `t('profile_updated')`
3705. "Profile views" → `t('profile_views')`
3706. "Progress" → `t('progress')`
3707. "Prohibited Activities" → `t('prohibited_activities')`
3708. "Project" → `t('project')`
3709. "Project Activity" → `t('project_activity')`
3710. "Project Based" → `t('project_based')`
3711. "Project Calendar" → `t('project_calendar')`
3712. "Project Chat" → `t('project_chat')`
3713. "Project Description" → `t('project_description')`
3714. "Project Details" → `t('project_details')`
3715. "Project Duration" → `t('project_duration')`
3716. "Project Files" → `t('project_files')`
3717. "Project Help" → `t('project_help')`
3718. "Project History" → `t('project_history')`
3719. "Project Manager • 10 years exp" → `t('project_manager_10_years_exp')`
3720. "Project Name" → `t('project_name')`
3721. "Project Not Found" → `t('project_not_found')`
3722. "Project Notes" → `t('project_notes')`
3723. "Project Overview" → `t('project_overview')`
3724. "Project Owner" → `t('project_owner')`
3725. "Project Room" → `t('project_room')`
3726. "Project Scope" → `t('project_scope')`
3727. "Project Settings" → `t('project_settings')`
3728. "Project Status" → `t('project_status')`
3729. "Project Timeline" → `t('project_timeline')`
3730. "Project added" → `t('project_added')`
3731. "Project deleted" → `t('project_deleted')`
3732. "Project details" → `t('project_details')`
3733. "Project details and expectations" → `t('project_details_and_expectatio')`
3734. "Project name is required" → `t('project_name_is_required')`
3735. "Project not found" → `t('project_not_found')`
3736. "Project status updated to ${status}" → `t('project_status_updated_to_stat')`
3737. "Project title is required" → `t('project_title_is_required')`
3738. "Project updated" → `t('project_updated')`
3739. "Project-based" → `t('projectbased')`
3740. "Promise" → `t('promise')`
3741. "Promo GIF Placeholder" → `t('promo_gif_placeholder')`
3742. "Promotion Guidelines" → `t('promotion_guidelines')`
3743. "Promotional Video" → `t('promotional_video')`
3744. "Prompt Optimizer" → `t('prompt_optimizer')`
3745. "Prompt Router" → `t('prompt_router')`
3746. "Prompt is required" → `t('prompt_is_required')`
3747. "Proposal Preview" → `t('proposal_preview')`
3748. "Proposal Sandbox" → `t('proposal_sandbox')`
3749. "Proposal Summary" → `t('proposal_summary')`
3750. "Proposal Title" → `t('proposal_title')`
3751. "Proposal Type" → `t('proposal_type')`
3752. "Proposal body" → `t('proposal_body')`
3753. "Proposal cooldowns" → `t('proposal_cooldowns')`
3754. "Proposal submitted (mock)" → `t('proposal_submitted_mock')`
3755. "Proposal type" → `t('proposal_type')`
3756. "Protect sensitive information" → `t('protect_sensitive_information')`
3757. "Protocol over platform philosophy" → `t('protocol_over_platform_philoso')`
3758. "Provide Details" → `t('provide_details')`
3759. "Provide a concise suggestion to resolve or work around this error: ${error.message}" → `t('provide_a_concise_suggestion_t')`
3760. "Provide a detailed description of what you're offering" → `t('provide_a_detailed_description')`
3761. "Provide basic details about your service and let AI create a professional description" → `t('provide_basic_details_about_yo')`
3762. "Provide instructions on how to apply for this job" → `t('provide_instructions_on_how_to')`
3763. "Public Pages" → `t('public_pages')`
3764. "Public Token Round" → `t('public_token_round')`
3765. "Public View" → `t('public_view')`
3766. "Public status updated successfully." → `t('public_status_updated_successf')`
3767. "Public status updated." → `t('public_status_updated')`
3768. "Public trust portal for the Zion protocol" → `t('public_trust_portal_for_the_zi')`
3769. "Publication Failed" → `t('publication_failed')`
3770. "Publish Job" → `t('publish_job')`
3771. "Publish Product" → `t('publish_product')`
3772. "Publish Your Product" → `t('publish_your_product')`
3773. "Publish on Zion" → `t('publish_on_zion')`
3774. "Published values" → `t('published_values')`
3775. "Publisher" → `t('publisher')`
3776. "Purchase" → `t('purchase')`
3777. "Purchase Service" → `t('purchase_service')`
3778. "Purpose" → `t('purpose')`
3779. "Push notifications" → `t('push_notifications')`
3780. "Push send failed" → `t('push_send_failed')`
3781. "Push subscription failed" → `t('push_subscription_failed')`
3782. "Push via webhooks to DAO chat or mobile app" → `t('push_via_webhooks_to_dao_chat_')`
3783. "PushManager" → `t('pushmanager')`
3784. "Pushes governance anniversaries into roadmap voting" → `t('pushes_governance_anniversarie')`
3785. "PyTorch" → `t('pytorch')`
3786. "Python" → `t('python')`
3787. "Quality" → `t('quality')`
3788. "Quality of Deliverable" → `t('quality_of_deliverable')`
3789. "Quality of Work" → `t('quality_of_work')`
3790. "Quantum Development Kit" → `t('quantum_development_kit')`
3791. "Quantum ML for Drug Discovery" → `t('quantum_ml_for_drug_discovery')`
3792. "Quantum Machine Learning Researcher" → `t('quantum_machine_learning_resea')`
3793. "Quantum Portfolio Optimization" → `t('quantum_portfolio_optimization')`
3794. "Query is required" → `t('query_is_required')`
3795. "Queued" → `t('queued')`
3796. "Quick Access" → `t('quick_access')`
3797. "Quick Actions" → `t('quick_actions')`
3798. "Quick Start" → `t('quick_start')`
3799. "Quick tip: How to rank your Zion listing higher" → `t('quick_tip_how_to_rank_your_zio')`
3800. "Quiz" → `t('quiz')`
3801. "Quote Received" → `t('quote_received')`
3802. "Quote Request" → `t('quote_request')`
3803. "Quote Request Manager" → `t('quote_request_manager')`
3804. "Quote Request Received" → `t('quote_request_received')`
3805. "Quote Request Submitted" → `t('quote_request_submitted')`
3806. "Quote Request Submitted!" → `t('quote_request_submitted')`
3807. "Quote Requested" → `t('quote_requested')`
3808. "Quote Submitted Successfully!" → `t('quote_submitted_successfully')`
3809. "Quote Summary" → `t('quote_summary')`
3810. "Quote archived" → `t('quote_archived')`
3811. "Quote deleted" → `t('quote_deleted')`
3812. "Quote marked as responded" → `t('quote_marked_as_responded')`
3813. "Quote marked as viewed" → `t('quote_marked_as_viewed')`
3814. "Quote submission failed" → `t('quote_submission_failed')`
3815. "Quote unarchived" → `t('quote_unarchived')`
3816. "Quotes" → `t('quotes')`
3817. "Quotes being evaluated" → `t('quotes_being_evaluated')`
3818. "Quotes with responses sent" → `t('quotes_with_responses_sent')`
3819. "Rack Mount" → `t('rack_mount')`
3820. "RadioGroup" → `t('radiogroup')`
3821. "RadioGroup has no accessibility violations" → `t('radiogroup_has_no_accessibilit')`
3822. "Raise Dispute" → `t('raise_dispute')`
3823. "Raise a Dispute" → `t('raise_a_dispute')`
3824. "Raj Patel" → `t('raj_patel')`
3825. "Rate Limit Headers" → `t('rate_limit_headers')`
3826. "Rate Limiting" → `t('rate_limiting')`
3827. "Rate limit exceeded. Please try again in 60 seconds" → `t('rate_limit_exceeded_please_try')`
3828. "Rate limit exceeded. Try again in 30 seconds" → `t('rate_limit_exceeded_try_again_')`
3829. "Rate limit information is included in the response headers:" → `t('rate_limit_information_is_incl')`
3830. "Rate must be a number" → `t('rate_must_be_a_number')`
3831. "Rate not specified" → `t('rate_not_specified')`
3832. "Rate: High to Low" → `t('rate_high_to_low')`
3833. "Rate: Low to High" → `t('rate_low_to_high')`
3834. "Rating" → `t('rating')`
3835. "Raw error object in fetchEquipment:" → `t('raw_error_object_in_fetchequip')`
3836. "React" → `t('react')`
3837. "React Developer Needed" → `t('react_developer_needed')`
3838. "Read Article" → `t('read_article')`
3839. "Read-only access to candidates" → `t('readonly_access_to_candidates')`
3840. "Ready" → `t('ready')`
3841. "Ready to Sign" → `t('ready_to_sign')`
3842. "Real-Time Analytics Dashboard" → `t('realtime_analytics_dashboard')`
3843. "Real-time Notifications" → `t('realtime_notifications')`
3844. "Real-time monitoring of Zion platform services" → `t('realtime_monitoring_of_zion_pl')`
3845. "Real-time notifications keep everyone updated." → `t('realtime_notifications_keep_ev')`
3846. "Real-time performance tracking is helping optimize your application" → `t('realtime_performance_tracking_')`
3847. "Real-time protocol KPIs" → `t('realtime_protocol_kpis')`
3848. "Reason" → `t('reason')`
3849. "Reason for dispute" → `t('reason_for_dispute')`
3850. "Receipt" → `t('receipt')`
3851. "Receive updates through Microsoft Teams." → `t('receive_updates_through_micros')`
3852. "Receive your first application" → `t('receive_your_first_application')`
3853. "Receive your first job match" → `t('receive_your_first_job_match')`
3854. "Received error report request" → `t('received_error_report_request')`
3855. "Recent" → `t('recent')`
3856. "Recent Activity" → `t('recent_activity')`
3857. "Recent Feedback" → `t('recent_feedback')`
3858. "Recent Notifications" → `t('recent_notifications')`
3859. "Recent Orders" → `t('recent_orders')`
3860. "Recent Referrals" → `t('recent_referrals')`
3861. "Recent Team Activity" → `t('recent_team_activity')`
3862. "Recent Updates" → `t('recent_updates')`
3863. "Recently viewed pages are cached and available offline" → `t('recently_viewed_pages_are_cach')`
3864. "RecommendationsPage renders header" → `t('recommendationspage_renders_he')`
3865. "Recommended" → `t('recommended')`
3866. "Recommended for Review" → `t('recommended_for_review')`
3867. "Record Type" → `t('record_type')`
3868. "Recovery Options" → `t('recovery_options')`
3869. "Recovery successful" → `t('recovery_successful')`
3870. "Recruiter" → `t('recruiter')`
3871. "Recycling Services" → `t('recycling_services')`
3872. "Redirecting to Login - Zion Tech Marketplace" → `t('redirecting_to_login_zion_tech')`
3873. "Redirecting to login page" → `t('redirecting_to_login_page')`
3874. "Redirecting to login page..." → `t('redirecting_to_login_page')`
3875. "Redirecting to login..." → `t('redirecting_to_login')`
3876. "Redirecting to the Zion AI Marketplace mobile app" → `t('redirecting_to_the_zion_ai_mar')`
3877. "Redirecting to your dashboard..." → `t('redirecting_to_your_dashboard')`
3878. "Redirecting you to login..." → `t('redirecting_you_to_login')`
3879. "Redo" → `t('redo')`
3880. "Refer a new user to Zion" → `t('refer_a_new_user_to_zion')`
3881. "Refer users to earn rewards once they complete onboarding" → `t('refer_users_to_earn_rewards_on')`
3882. "ReferenceError" → `t('referenceerror')`
3883. "Referral Program" → `t('referral_program')`
3884. "Referral link copied to clipboard" → `t('referral_link_copied_to_clipbo')`
3885. "Referrer" → `t('referrer')`
3886. "Reflex Engine" → `t('reflex_engine')`
3887. "Refund processed successfully" → `t('refund_processed_successfully')`
3888. "Refunded" → `t('refunded')`
3889. "Refusing to use live Stripe key on non-production domain" → `t('refusing_to_use_live_stripe_ke')`
3890. "Regenerate" → `t('regenerate')`
3891. "Regenerate AI Deck" → `t('regenerate_ai_deck')`
3892. "Region" → `t('region')`
3893. "Regional scope" → `t('regional_scope')`
3894. "Register" → `t('register')`
3895. "Register - Zion" → `t('register_zion')`
3896. "Register Now" → `t('register_now')`
3897. "Register error:" → `t('register_error')`
3898. "Register to become a Zion AI partner and start earning rewards" → `t('register_to_become_a_zion_ai_p')`
3899. "Register today to access all features!" → `t('register_today_to_access_all_f')`
3900. "Registered!" → `t('registered')`
3901. "Registers a new user successfully" → `t('registers_a_new_user_successfu')`
3902. "Registration error:" → `t('registration_error')`
3903. "Registration failed" → `t('registration_failed')`
3904. "Registration successful" → `t('registration_successful')`
3905. "RegistrationForm" → `t('registrationform')`
3906. "Registry & Legal Structure" → `t('registry_legal_structure')`
3907. "Regular Web Application" → `t('regular_web_application')`
3908. "Reject" → `t('reject')`
3909. "Rejected" → `t('rejected')`
3910. "Related Articles" → `t('related_articles')`
3911. "Related Milestone" → `t('related_milestone')`
3912. "Release Funds" → `t('release_funds')`
3913. "Released" → `t('released')`
3914. "Relevance" → `t('relevance')`
3915. "Relevancy scoring" → `t('relevancy_scoring')`
3916. "Reload" → `t('reload')`
3917. "Reload Page" → `t('reload_page')`
3918. "Renewable Energy Integration" → `t('renewable_energy_integration')`
3919. "Rent or buy specialized hardware and tech equipment for AI development and research." → `t('rent_or_buy_specialized_hardwa')`
3920. "Rent or buy specialized hardware, servers, and devices" → `t('rent_or_buy_specialized_hardwa')`
3921. "Reown" → `t('reown')`
3922. "Replace large dependencies with smaller alternatives" → `t('replace_large_dependencies_wit')`
3923. "Replied to" → `t('replied_to')`
3924. "Replies" → `t('replies')`
3925. "Reply posted" → `t('reply_posted')`
3926. "Report" → `t('report')`
3927. "Report Issue" → `t('report_issue')`
3928. "Report Review" → `t('report_review')`
3929. "Report Submitted" → `t('report_submitted')`
3930. "Report an Issue" → `t('report_an_issue')`
3931. "Report submitted" → `t('report_submitted')`
3932. "Reported Reviews" → `t('reported_reviews')`
3933. "Reputation" → `t('reputation')`
3934. "Request" → `t('request')`
3935. "Request Another Quote" → `t('request_another_quote')`
3936. "Request Changes" → `t('request_changes')`
3937. "Request Commercial Proposal" → `t('request_commercial_proposal')`
3938. "Request Example" → `t('request_example')`
3939. "Request Failed" → `t('request_failed')`
3940. "Request Quote" → `t('request_quote')`
3941. "Request Refund" → `t('request_refund')`
3942. "Request Service Quote" → `t('request_service_quote')`
3943. "Request Submitted" → `t('request_submitted')`
3944. "Request Timeout" → `t('request_timeout')`
3945. "Request a Quote" → `t('request_a_quote')`
3946. "Request failed" → `t('request_failed')`
3947. "Request failed - please try again" → `t('request_failed_please_try_agai')`
3948. "Request new reset link" → `t('request_new_reset_link')`
3949. "Request received" → `t('request_received')`
3950. "Request sent – we" → `t('request_sent_we')`
3951. "Request timed out - please try again" → `t('request_timed_out_please_try_a')`
3952. "Request timed out. Please try again." → `t('request_timed_out_please_try_a')`
3953. "Request timeout" → `t('request_timeout')`
3954. "Request timeout after 5 seconds" → `t('request_timeout_after_5_second')`
3955. "Request timeout. Please check your connection and try again." → `t('request_timeout_please_check_y')`
3956. "Request to Hire" → `t('request_to_hire')`
3957. "RequestQuote page renders header" → `t('requestquote_page_renders_head')`
3958. "Requested resource not found" → `t('requested_resource_not_found')`
3959. "Requester" → `t('requester')`
3960. "Requester Information" → `t('requester_information')`
3961. "Required" → `t('required')`
3962. "Required Skills" → `t('required_skills')`
3963. "Required environment variables are not set" → `t('required_environment_variables')`
3964. "Required fields missing" → `t('required_fields_missing')`
3965. "Requires Internet" → `t('requires_internet')`
3966. "Requires admin account" → `t('requires_admin_account')`
3967. "Requires any account type" → `t('requires_any_account_type')`
3968. "Requires talent or creator account" → `t('requires_talent_or_creator_acc')`
3969. "Rescheduled" → `t('rescheduled')`
3970. "Resend" → `t('resend')`
3971. "Resend / Verify e-mail" → `t('resend_verify_email')`
3972. "Resend Receipt" → `t('resend_receipt')`
3973. "Reset" → `t('reset')`
3974. "Reset Filters" → `t('reset_filters')`
3975. "Reset Form" → `t('reset_form')`
3976. "Reset Link Sent" → `t('reset_link_sent')`
3977. "Reset Password" → `t('reset_password')`
3978. "Reset Your Password" → `t('reset_your_password')`
3979. "Reset failed" → `t('reset_failed')`
3980. "Reset password error:" → `t('reset_password_error')`
3981. "Resetting error boundary for ${pageName ||" → `t('resetting_error_boundary_for_p')`
3982. "ResizeObserver" → `t('resizeobserver')`
3983. "Resolution" → `t('resolution')`
3984. "Resolution Type" → `t('resolution_type')`
3985. "Resolve Dispute" → `t('resolve_dispute')`
3986. "Resolved" → `t('resolved')`
3987. "Resources" → `t('resources')`
3988. "Respond" → `t('respond')`
3989. "Respond quickly" → `t('respond_quickly')`
3990. "Respond to Interview Request" → `t('respond_to_interview_request')`
3991. "Responded" → `t('responded')`
3992. "Response" → `t('response')`
3993. "Response Body" → `t('response_body')`
3994. "Response Status" → `t('response_status')`
3995. "Response Time" → `t('response_time')`
3996. "Responses" → `t('responses')`
3997. "Responsive Accessibility" → `t('responsive_accessibility')`
3998. "Responsive utility classes exist" → `t('responsive_utility_classes_exi')`
3999. "Resume" → `t('resume')`
4000. "Resume & Portfolio Builder" → `t('resume_portfolio_builder')`
4001. "Resume Builder" → `t('resume_builder')`
4002. "Resume Data" → `t('resume_data')`
4003. "Resume Match Score" → `t('resume_match_score')`
4004. "Resume Screener" → `t('resume_screener')`
4005. "Resume Title" → `t('resume_title')`
4006. "Resume builder" → `t('resume_builder')`
4007. "Resume builder screen" → `t('resume_builder_screen')`
4008. "Resume search" → `t('resume_search')`
4009. "Resume search error:" → `t('resume_search_error')`
4010. "Resume updated" → `t('resume_updated')`
4011. "Retail" → `t('retail')`
4012. "Retry" → `t('retry')`
4013. "Retry Failed" → `t('retry_failed')`
4014. "Return to Dashboard" → `t('return_to_dashboard')`
4015. "Return to Home" → `t('return_to_home')`
4016. "Return to the main page" → `t('return_to_the_main_page')`
4017. "Returning ${mappedProfiles.length} talent profiles (page ${page}, limit ${limit})" → `t('returning_mappedprofileslength')`
4018. "Returning fallback data due to database error" → `t('returning_fallback_data_due_to')`
4019. "Returns" → `t('returns')`
4020. "Review Details" → `t('review_details')`
4021. "Review Moderation" → `t('review_moderation')`
4022. "Review Moderation | Zion AI Marketplace" → `t('review_moderation_zion_ai_mark')`
4023. "Review Request" → `t('review_request')`
4024. "Review Your Request" → `t('review_your_request')`
4025. "Review and moderate user-submitted reviews before they go live" → `t('review_and_moderate_usersubmit')`
4026. "Review and update your job description with more details" → `t('review_and_update_your_job_des')`
4027. "Review if all features are needed" → `t('review_if_all_features_are_nee')`
4028. "Review must be at least 20 characters" → `t('review_must_be_at_least_20_cha')`
4029. "Review the details of the partner application" → `t('review_the_details_of_the_part')`
4030. "Review updated" → `t('review_updated')`
4031. "Reviewed" → `t('reviewed')`
4032. "Reviewer" → `t('reviewer')`
4033. "Reviews" → `t('reviews')`
4034. "Reviews & Ratings" → `t('reviews_ratings')`
4035. "Reviews Moderation" → `t('reviews_moderation')`
4036. "Reviews are visible once the project is completed and both parties submit feedback" → `t('reviews_are_visible_once_the_p')`
4037. "Reviews will be available once the project is completed" → `t('reviews_will_be_available_once')`
4038. "Revoke" → `t('revoke')`
4039. "Revoked" → `t('revoked')`
4040. "Reward" → `t('reward')`
4041. "Rewards" → `t('rewards')`
4042. "Rewards Program" → `t('rewards_program')`
4043. "Rewards are issued based on the type of user who completes onboarding" → `t('rewards_are_issued_based_on_th')`
4044. "Rewards issued/month" → `t('rewards_issuedmonth')`
4045. "RewardsWidget" → `t('rewardswidget')`
4046. "Right to self-train on your own interactions" → `t('right_to_selftrain_on_your_own')`
4047. "Risk Assessment" → `t('risk_assessment')`
4048. "Roadmap" → `t('roadmap')`
4049. "Roadmap - Zion" → `t('roadmap_zion')`
4050. "Robert Zhang" → `t('robert_zhang')`
4051. "Robotics Engineer" → `t('robotics_engineer')`
4052. "Role" → `t('role')`
4053. "Role Assignment" → `t('role_assignment')`
4054. "Role Permissions" → `t('role_permissions')`
4055. "Roleplay" → `t('roleplay')`
4056. "Rollout Timeline" → `t('rollout_timeline')`
4057. "Round Type" → `t('round_type')`
4058. "Route Resolution" → `t('route_resolution')`
4059. "Route change error occurred" → `t('route_change_error_occurred')`
4060. "Route change error:" → `t('route_change_error')`
4061. "Router error occurred:" → `t('router_error_occurred')`
4062. "Router push error:" → `t('router_push_error')`
4063. "Router replace error:" → `t('router_replace_error')`
4064. "Row not found" → `t('row_not_found')`
4065. "Run" → `t('run')`
4066. "Run Analysis" → `t('run_analysis')`
4067. "Run Optimization" → `t('run_optimization')`
4068. "Run Simulation" → `t('run_simulation')`
4069. "Runtime Metrics" → `t('runtime_metrics')`
4070. "SIGNUP_ERROR" → `t('signuperror')`
4071. "SSL Encrypted Checkout" → `t('ssl_encrypted_checkout')`
4072. "SUCCESSFUL" → `t('successful')`
4073. "SaaS Application" → `t('saas_application')`
4074. "Safe" → `t('safe')`
4075. "Salary" → `t('salary')`
4076. "Salary Range" → `t('salary_range')`
4077. "Salary packages that recognize your value, plus equity options to share in our success." → `t('salary_packages_that_recognize')`
4078. "Sales Forecasting Model" → `t('sales_forecasting_model')`
4079. "Sales KPI Dashboard" → `t('sales_kpi_dashboard')`
4080. "Salesforce" → `t('salesforce')`
4081. "Salesforce access token missing" → `t('salesforce_access_token_missin')`
4082. "Salesforce error: ${res.status} ${text}" → `t('salesforce_error_resstatus_tex')`
4083. "Sample Code" → `t('sample_code')`
4084. "Sample Payloads" → `t('sample_payloads')`
4085. "Sample Product" → `t('sample_product')`
4086. "Sample Talent" → `t('sample_talent')`
4087. "Sample listing description" → `t('sample_listing_description')`
4088. "Sample post" → `t('sample_post')`
4089. "Sarah Johnson" → `t('sarah_johnson')`
4090. "Sarah Rodriguez" → `t('sarah_rodriguez')`
4091. "Sarah Williams" → `t('sarah_williams')`
4092. "Sarah submitted Milestone 2 for review" → `t('sarah_submitted_milestone_2_fo')`
4093. "Save" → `t('save')`
4094. "Save & Preview" → `t('save_preview')`
4095. "Save Changes" → `t('save_changes')`
4096. "Save Draft" → `t('save_draft')`
4097. "Save Metadata" → `t('save_metadata')`
4098. "Save Notes" → `t('save_notes')`
4099. "Save Preferences" → `t('save_preferences')`
4100. "Save Settings" → `t('save_settings')`
4101. "Save as Draft" → `t('save_as_draft')`
4102. "Save favorite searches and get notified of new matches." → `t('save_favorite_searches_and_get')`
4103. "Save to favorites" → `t('save_to_favorites')`
4104. "Save v${deckVersion}" → `t('save_vdeckversion')`
4105. "Saved" → `t('saved')`
4106. "Saved Jobs" → `t('saved_jobs')`
4107. "Saving version, please wait..." → `t('saving_version_please_wait')`
4108. "Savings" → `t('savings')`
4109. "Scalable Talent Pools" → `t('scalable_talent_pools')`
4110. "Scan message content for potentially harmful or abusive material" → `t('scan_message_content_for_poten')`
4111. "Scan to download" → `t('scan_to_download')`
4112. "Scenario" → `t('scenario')`
4113. "Scenario Lens" → `t('scenario_lens')`
4114. "Schedule Interview" → `t('schedule_interview')`
4115. "Schedule and join video calls" → `t('schedule_and_join_video_calls')`
4116. "Schedule and manage your video interviews" → `t('schedule_and_manage_your_video')`
4117. "Scheduled Maintenance" → `t('scheduled_maintenance')`
4118. "Scheduled for interview" → `t('scheduled_for_interview')`
4119. "Scheduling interviews" → `t('scheduling_interviews')`
4120. "School or university name" → `t('school_or_university_name')`
4121. "Scope Summary" → `t('scope_summary')`
4122. "Scopes" → `t('scopes')`
4123. "Score Resume" → `t('score_resume')`
4124. "Screen Reader Support" → `t('screen_reader_support')`
4125. "Screenshot of ZionGPT content tool" → `t('screenshot_of_ziongpt_content_')`
4126. "Screenshot of admin dashboard" → `t('screenshot_of_admin_dashboard')`
4127. "Screenshot of chat interface" → `t('screenshot_of_chat_interface')`
4128. "Screenshot of language options" → `t('screenshot_of_language_options')`
4129. "Screenshot of marketplace interface" → `t('screenshot_of_marketplace_inte')`
4130. "Screenshot of talent directory" → `t('screenshot_of_talent_directory')`
4131. "Screenshot preview" → `t('screenshot_preview')`
4132. "Screenshot showing integrations" → `t('screenshot_showing_integration')`
4133. "Script" → `t('script')`
4134. "Scroll left" → `t('scroll_left')`
4135. "Scroll right" → `t('scroll_right')`
4136. "Scrum Master" → `t('scrum_master')`
4137. "Search" → `t('search')`
4138. "Search ${formData.serviceType}..." → `t('search_formdataservicetype')`
4139. "Search Bar Interaction" → `t('search_bar_interaction')`
4140. "Search Bar Mobile Responsiveness" → `t('search_bar_mobile_responsivene')`
4141. "Search Dropdown Responsiveness" → `t('search_dropdown_responsiveness')`
4142. "Search Filters" → `t('search_filters')`
4143. "Search Functionality" → `t('search_functionality')`
4144. "Search Suggestions Navigation" → `t('search_suggestions_navigation')`
4145. "Search Suggestions:" → `t('search_suggestions')`
4146. "Search activities..." → `t('search_activities')`
4147. "Search articles..." → `t('search_articles')`
4148. "Search autocomplete navigation" → `t('search_autocomplete_navigation')`
4149. "Search by ID, user or issue..." → `t('search_by_id_user_or_issue')`
4150. "Search by country..." → `t('search_by_country')`
4151. "Search by name or skill" → `t('search_by_name_or_skill')`
4152. "Search by title or summary..." → `t('search_by_title_or_summary')`
4153. "Search by user or content..." → `t('search_by_user_or_content')`
4154. "Search dropdown constrains to viewport width" → `t('search_dropdown_constrains_to_')`
4155. "Search failed" → `t('search_failed')`
4156. "Search failed:" → `t('search_failed')`
4157. "Search for help articles..." → `t('search_for_help_articles')`
4158. "Search form uses responsive width at small screens" → `t('search_form_uses_responsive_wi')`
4159. "Search invoices..." → `t('search_invoices')`
4160. "Search listings..." → `t('search_listings')`
4161. "Search marketplace..." → `t('search_marketplace')`
4162. "Search messages..." → `t('search_messages')`
4163. "Search navigation failed" → `t('search_navigation_failed')`
4164. "Search our knowledge base" → `t('search_our_knowledge_base')`
4165. "Search partners..." → `t('search_partners')`
4166. "Search query failed:" → `t('search_query_failed')`
4167. "Search query:" → `t('search_query')`
4168. "Search quotes..." → `t('search_quotes')`
4169. "Search specifications..." → `t('search_specifications')`
4170. "Search the equipment catalog by category or specifications" → `t('search_the_equipment_catalog_b')`
4171. "Search the talent pool" → `t('search_the_talent_pool')`
4172. "Search..." → `t('search')`
4173. "Searching..." → `t('searching')`
4174. "Secret key" → `t('secret_key')`
4175. "Sector" → `t('sector')`
4176. "Security" → `t('security')`
4177. "Security Operations Center Design" → `t('security_operations_center_des')`
4178. "Security Warning" → `t('security_warning')`
4179. "See Features" → `t('see_features')`
4180. "See how enterprise teams are transforming their hiring process" → `t('see_how_enterprise_teams_are_t')`
4181. "Seed" → `t('seed')`
4182. "Seed / Strategic Angels" → `t('seed_strategic_angels')`
4183. "Seeking a React developer for a 3 month contract building dashboards." → `t('seeking_a_react_developer_for_')`
4184. "Select Availability" → `t('select_availability')`
4185. "Select Brand" → `t('select_brand')`
4186. "Select Category" → `t('select_category')`
4187. "Select Country" → `t('select_country')`
4188. "Select Country for IT Onsite Service" → `t('select_country_for_it_onsite_s')`
4189. "Select Files" → `t('select_files')`
4190. "Select Service" → `t('select_service')`
4191. "Select a Country for Details" → `t('select_a_country_for_details')`
4192. "Select a category" → `t('select_a_category')`
4193. "Select a country" → `t('select_a_country')`
4194. "Select a job to see AI-matched talent suggestions" → `t('select_a_job_to_see_aimatched_')`
4195. "Select a proposal type" → `t('select_a_proposal_type')`
4196. "Select a reason" → `t('select_a_reason')`
4197. "Select a resume" → `t('select_a_resume')`
4198. "Select additional clauses to include in your contract" → `t('select_additional_clauses_to_i')`
4199. "Select an event type" → `t('select_an_event_type')`
4200. "Select an option" → `t('select_an_option')`
4201. "Select audience size" → `t('select_audience_size')`
4202. "Select blockchain network" → `t('select_blockchain_network')`
4203. "Select campaign type" → `t('select_campaign_type')`
4204. "Select categories you want to see more of" → `t('select_categories_you_want_to_')`
4205. "Select company size" → `t('select_company_size')`
4206. "Select content type" → `t('select_content_type')`
4207. "Select duration" → `t('select_duration')`
4208. "Select estimated timeline" → `t('select_estimated_timeline')`
4209. "Select event" → `t('select_event')`
4210. "Select experience level" → `t('select_experience_level')`
4211. "Select governance" → `t('select_governance')`
4212. "Select has no accessibility violations" → `t('select_has_no_accessibility_vi')`
4213. "Select industry" → `t('select_industry')`
4214. "Select job type" → `t('select_job_type')`
4215. "Select payment terms" → `t('select_payment_terms')`
4216. "Select payment type" → `t('select_payment_type')`
4217. "Select payout method" → `t('select_payout_method')`
4218. "Select platform" → `t('select_platform')`
4219. "Select project duration" → `t('select_project_duration')`
4220. "Select required education" → `t('select_required_education')`
4221. "Select time" → `t('select_time')`
4222. "Select type" → `t('select_type')`
4223. "Select use case" → `t('select_use_case')`
4224. "Select your budget range" → `t('select_your_budget_range')`
4225. "Select your language" → `t('select_your_language')`
4226. "Select your preferred appearance" → `t('select_your_preferred_appearan')`
4227. "Select your timeline" → `t('select_your_timeline')`
4228. "Selected Country" → `t('selected_country')`
4229. "Selected Service" → `t('selected_service')`
4230. "Self-heal action completed successfully. Resetting streaks." → `t('selfheal_action_completed_succ')`
4231. "Self-heal command timed out after 10 minutes" → `t('selfheal_command_timed_out_aft')`
4232. "Send" → `t('send')`
4233. "Send General Application" → `t('send_general_application')`
4234. "Send Invitation" → `t('send_invitation')`
4235. "Send Message" → `t('send_message')`
4236. "Send Onboarding Nudge" → `t('send_onboarding_nudge')`
4237. "Send Request" → `t('send_request')`
4238. "Send Reset Link" → `t('send_reset_link')`
4239. "Send Summary" → `t('send_summary')`
4240. "Send Test" → `t('send_test')`
4241. "Send Test Notification" → `t('send_test_notification')`
4242. "Send Us a Message" → `t('send_us_a_message')`
4243. "Send Warning" → `t('send_warning')`
4244. "Send invitation to talent" → `t('send_invitation_to_talent')`
4245. "Send message" → `t('send_message')`
4246. "Send warning" → `t('send_warning')`
4247. "SendGrid error response:" → `t('sendgrid_error_response')`
4248. "Senior" → `t('senior')`
4249. "Senior AI Engineer" → `t('senior_ai_engineer')`
4250. "Senior AI Engineer & Machine Learning Expert" → `t('senior_ai_engineer_machine_lea')`
4251. "Senior React Developer" → `t('senior_react_developer')`
4252. "Sentiment Analysis for Social Listening" → `t('sentiment_analysis_for_social_')`
4253. "Sentry" → `t('sentry')`
4254. "Sentry Client Test Error - Button Clicked!" → `t('sentry_client_test_error_butto')`
4255. "Sentry DSN appears to be a placeholder" → `t('sentry_dsn_appears_to_be_a_pla')`
4256. "Sentry DSN appears to be a placeholder value" → `t('sentry_dsn_appears_to_be_a_pla')`
4257. "Sentry DSN is configured" → `t('sentry_dsn_is_configured')`
4258. "Sentry DSN not configured" → `t('sentry_dsn_not_configured')`
4259. "Sentry DSN not configured for production - error monitoring disabled" → `t('sentry_dsn_not_configured_for_')`
4260. "Sentry Integration Test Page" → `t('sentry_integration_test_page')`
4261. "Sentry event not found within 30 seconds" → `t('sentry_event_not_found_within_')`
4262. "Sentry test error endpoint sends error to Sentry" → `t('sentry_test_error_endpoint_sen')`
4263. "Series A / Institutional" → `t('series_a_institutional')`
4264. "Server Error" → `t('server_error')`
4265. "Server Hosting" → `t('server_hosting')`
4266. "Server Rack" → `t('server_rack')`
4267. "Server configuration error. The development team has been notified." → `t('server_configuration_error_the')`
4268. "Server err" → `t('server_err')`
4269. "Server error" → `t('server_error')`
4270. "Server error - please try again later" → `t('server_error_please_try_again_')`
4271. "Server error during error processing." → `t('server_error_during_error_proc')`
4272. "Server error. Please try again in a moment." → `t('server_error_please_try_again_')`
4273. "Server error. Please try again later." → `t('server_error_please_try_again_')`
4274. "Server responded with ${error.response.status}" → `t('server_responded_with_errorres')`
4275. "Server returned an unexpected response format. Please try again or contact support." → `t('server_returned_an_unexpected_')`
4276. "Servers" → `t('servers')`
4277. "Servers & Compute" → `t('servers_compute')`
4278. "Servers, workstations, specialized hardware" → `t('servers_workstations_specializ')`
4279. "Service" → `t('service')`
4280. "Service Delivery" → `t('service_delivery')`
4281. "Service Description" → `t('service_description')`
4282. "Service Description Generator" → `t('service_description_generator')`
4283. "Service Information" → `t('service_information')`
4284. "Service Instructions" → `t('service_instructions')`
4285. "Service Outage" → `t('service_outage')`
4286. "Service Payment" → `t('service_payment')`
4287. "Service Profile Created!" → `t('service_profile_created')`
4288. "Service Provider" → `t('service_provider')`
4289. "Service Required" → `t('service_required')`
4290. "Service Status" → `t('service_status')`
4291. "Service Status Overview" → `t('service_status_overview')`
4292. "Service Title" → `t('service_title')`
4293. "Service Type" → `t('service_type')`
4294. "Service Worker registered" → `t('service_worker_registered')`
4295. "Service Worker registered:" → `t('service_worker_registered')`
4296. "Service Worker registration failed" → `t('service_worker_registration_fa')`
4297. "Service address or city" → `t('service_address_or_city')`
4298. "Service available in major cities" → `t('service_available_in_major_cit')`
4299. "Service initialization failed" → `t('service_initialization_failed')`
4300. "Services" → `t('services')`
4301. "Services - Zion" → `t('services_zion')`
4302. "Services Marketplace" → `t('services_marketplace')`
4303. "Services Offered" → `t('services_offered')`
4304. "Services navigation links" → `t('services_navigation_links')`
4305. "Services page" → `t('services_page')`
4306. "Services required" → `t('services_required')`
4307. "Session Check Timed Out" → `t('session_check_timed_out')`
4308. "Session ID missing in response" → `t('session_id_missing_in_response')`
4309. "Set Availability" → `t('set_availability')`
4310. "Set Up Trigger" → `t('set_up_trigger')`
4311. "Set a password" → `t('set_a_password')`
4312. "Set a strong password to secure your account and continue your journey in the Zion marketplace." → `t('set_a_strong_password_to_secur')`
4313. "Set up candidate interviews" → `t('set_up_candidate_interviews')`
4314. "Set your availability" → `t('set_your_availability')`
4315. "Set your availability preferences" → `t('set_your_availability_preferen')`
4316. "Set your preferences for escrow services. Escrow holds funds until both parties confirm the service has been completed satisfactorily." → `t('set_your_preferences_for_escro')`
4317. "Setting Up Webhooks" → `t('setting_up_webhooks')`
4318. "Setting Up a Private GPT Model" → `t('setting_up_a_private_gpt_model')`
4319. "Setting up a client profile" → `t('setting_up_a_client_profile')`
4320. "Setting up a talent profile" → `t('setting_up_a_talent_profile')`
4321. "Settings" → `t('settings')`
4322. "Settings Updated" → `t('settings_updated')`
4323. "Settings saved" → `t('settings_saved')`
4324. "Setup Guide" → `t('setup_guide')`
4325. "Setup cancelled by user" → `t('setup_cancelled_by_user')`
4326. "Setup production monitoring" → `t('setup_production_monitoring')`
4327. "Several warnings were detected during optimization." → `t('several_warnings_were_detected')`
4328. "Severity" → `t('severity')`
4329. "Share" → `t('share')`
4330. "Share Referral Link" → `t('share_referral_link')`
4331. "Share Zion with Your Network" → `t('share_zion_with_your_network')`
4332. "Share files and links directly within the conversation." → `t('share_files_and_links_directly')`
4333. "Share on Facebook" → `t('share_on_facebook')`
4334. "Share on LinkedIn" → `t('share_on_linkedin')`
4335. "Share on Twitter" → `t('share_on_twitter')`
4336. "Share on social media:" → `t('share_on_social_media')`
4337. "Share screen" → `t('share_screen')`
4338. "Share the meeting link to invite others" → `t('share_the_meeting_link_to_invi')`
4339. "Share this link with others to earn rewards when they join and complete onboarding" → `t('share_this_link_with_others_to')`
4340. "Share this link with your audience to earn rewards" → `t('share_this_link_with_your_audi')`
4341. "Share what you" → `t('share_what_you')`
4342. "Share your experience" → `t('share_your_experience')`
4343. "Share your experience and feedback..." → `t('share_your_experience_and_feed')`
4344. "Share your ideas" → `t('share_your_ideas')`
4345. "Share your referral link" → `t('share_your_referral_link')`
4346. "Share your unique referral link in your content" → `t('share_your_unique_referral_lin')`
4347. "Shareable Link:" → `t('shareable_link')`
4348. "Shared Inbox" → `t('shared_inbox')`
4349. "Shared Notes" → `t('shared_notes')`
4350. "Shared notes and updates" → `t('shared_notes_and_updates')`
4351. "Shared whitepaper not found or data is invalid." → `t('shared_whitepaper_not_found_or')`
4352. "Shared whitepaper not found." → `t('shared_whitepaper_not_found')`
4353. "SheetFooter" → `t('sheetfooter')`
4354. "SheetHeader" → `t('sheetheader')`
4355. "Shipping" → `t('shipping')`
4356. "Shipping Address" → `t('shipping_address')`
4357. "Shippo create shipment error:" → `t('shippo_create_shipment_error')`
4358. "Shippo create shipment failed: ${msg}" → `t('shippo_create_shipment_failed_')`
4359. "Short Description" → `t('short_description')`
4360. "Short explainer video about Zion AI Marketplace" → `t('short_explainer_video_about_zi')`
4361. "Shortlist" → `t('shortlist')`
4362. "Shortlisted" → `t('shortlisted')`
4363. "Should fail with missing credentials message" → `t('should_fail_with_missing_crede')`
4364. "Should load without black screen or major rendering failure" → `t('should_load_without_black_scre')`
4365. "Should render layout correctly" → `t('should_render_layout_correctly')`
4366. "Show" → `t('show')`
4367. "Show "Powered by Zion AI" in the footer and elsewhere" → `t('show_powered_by_zion_ai_in_the')`
4368. "Show Less" → `t('show_less')`
4369. "Show More" → `t('show_more')`
4370. "Show banner" → `t('show_banner')`
4371. "Show confirm password" → `t('show_confirm_password')`
4372. "Show password" → `t('show_password')`
4373. "Show real-time performance metrics" → `t('show_realtime_performance_metr')`
4374. "Showcasing Multiverse Innovation" → `t('showcasing_multiverse_innovati')`
4375. "Showing 1 - 6 of 12 invoices" → `t('showing_1_6_of_12_invoices')`
4376. "Sidebar" → `t('sidebar')`
4377. "SidebarBasicGroup" → `t('sidebarbasicgroup')`
4378. "SidebarContent" → `t('sidebarcontent')`
4379. "SidebarFooter" → `t('sidebarfooter')`
4380. "SidebarGroup" → `t('sidebargroup')`
4381. "SidebarHeader" → `t('sidebarheader')`
4382. "SidebarInput" → `t('sidebarinput')`
4383. "SidebarInset" → `t('sidebarinset')`
4384. "SidebarMenuButton" → `t('sidebarmenubutton')`
4385. "SidebarProvider" → `t('sidebarprovider')`
4386. "SidebarRail" → `t('sidebarrail')`
4387. "SidebarSeparator" → `t('sidebarseparator')`
4388. "SidebarTrigger" → `t('sidebartrigger')`
4389. "Sign Contract" → `t('sign_contract')`
4390. "Sign In" → `t('sign_in')`
4391. "Sign In - Zion Tech Marketplace" → `t('sign_in_zion_tech_marketplace')`
4392. "Sign Out" → `t('sign_out')`
4393. "Sign Up" → `t('sign_up')`
4394. "Sign Up & Profile Setup" → `t('sign_up_profile_setup')`
4395. "Sign Up - Zion" → `t('sign_up_zion')`
4396. "Sign in" → `t('sign_in')`
4397. "Sign in to your Zion Tech Marketplace account" → `t('sign_in_to_your_zion_tech_mark')`
4398. "Sign in to your account" → `t('sign_in_to_your_account')`
4399. "Sign in with Facebook" → `t('sign_in_with_facebook')`
4400. "Sign in with GitHub" → `t('sign_in_with_github')`
4401. "Sign in with Google" → `t('sign_in_with_google')`
4402. "Sign in with Twitter" → `t('sign_in_with_twitter')`
4403. "Sign in with Web3" → `t('sign_in_with_web3')`
4404. "Sign up" → `t('sign_up')`
4405. "Sign with Wallet" → `t('sign_with_wallet')`
4406. "Signed out" → `t('signed_out')`
4407. "Signed up & completed onboarding" → `t('signed_up_completed_onboarding')`
4408. "Signup Failed" → `t('signup_failed')`
4409. "Signup Flow Validation" → `t('signup_flow_validation')`
4410. "Signup Page" → `t('signup_page')`
4411. "Signup Successful" → `t('signup_successful')`
4412. "Signup and Auto-Login Flow" → `t('signup_and_autologin_flow')`
4413. "Signup blocked" → `t('signup_blocked')`
4414. "Signup error details:" → `t('signup_error_details')`
4415. "Signup error:" → `t('signup_error')`
4416. "Signup failed" → `t('signup_failed')`
4417. "Signup failed. Please try again." → `t('signup_failed_please_try_again')`
4418. "Signup form" → `t('signup_form')`
4419. "Signup form accessible" → `t('signup_form_accessible')`
4420. "Signup successful" → `t('signup_successful')`
4421. "Signup successful!" → `t('signup_successful')`
4422. "Signup/Login error:" → `t('signuplogin_error')`
4423. "Signups" → `t('signups')`
4424. "Silicon Valley Bank" → `t('silicon_valley_bank')`
4425. "Silicon Valley Bank logo" → `t('silicon_valley_bank_logo')`
4426. "Silver" → `t('silver')`
4427. "Simple JavaScript snippet" → `t('simple_javascript_snippet')`
4428. "Simulate Recovery" → `t('simulate_recovery')`
4429. "Simulation failed" → `t('simulation_failed')`
4430. "Skeleton" → `t('skeleton')`
4431. "Skill Categories" → `t('skill_categories')`
4432. "Skill added" → `t('skill_added')`
4433. "Skill deleted" → `t('skill_deleted')`
4434. "Skills" → `t('skills')`
4435. "Skills & Expertise" → `t('skills_expertise')`
4436. "Skills required" → `t('skills_required')`
4437. "Skip" → `t('skip')`
4438. "Skip for now" → `t('skip_for_now')`
4439. "Skip to content" → `t('skip_to_content')`
4440. "Skip to main content" → `t('skip_to_main_content')`
4441. "SkipLink accessibility" → `t('skiplink_accessibility')`
4442. "Slack" → `t('slack')`
4443. "Slack alert sent successfully" → `t('slack_alert_sent_successfully')`
4444. "Slack notification sent" → `t('slack_notification_sent')`
4445. "Slide Content" → `t('slide_content')`
4446. "Slide Title" → `t('slide_title')`
4447. "Slow bundle chunk loading:" → `t('slow_bundle_chunk_loading')`
4448. "Slow image loading:" → `t('slow_image_loading')`
4449. "Slow page load detected" → `t('slow_page_load_detected')`
4450. "Slow resource loading" → `t('slow_resource_loading')`
4451. "Slug is required" → `t('slug_is_required')`
4452. "Smart Contract" → `t('smart_contract')`
4453. "Smart Contract Builder" → `t('smart_contract_builder')`
4454. "Smart Contract Builder | Zion AI Marketplace" → `t('smart_contract_builder_zion_ai')`
4455. "Smart Contract Deployment" → `t('smart_contract_deployment')`
4456. "Smart Contract Preview" → `t('smart_contract_preview')`
4457. "Smart Home IoT Control Hub" → `t('smart_home_iot_control_hub')`
4458. "Smart contract deployed successfully!" → `t('smart_contract_deployed_succes')`
4459. "Social" → `t('social')`
4460. "Social Links" → `t('social_links')`
4461. "Social Media" → `t('social_media')`
4462. "Social Media Banners" → `t('social_media_banners')`
4463. "Social Media Kit" → `t('social_media_kit')`
4464. "Social Media Sentiment Monitor" → `t('social_media_sentiment_monitor')`
4465. "Software Engineer" → `t('software_engineer')`
4466. "SolarWinds NPM Monitoring Server" → `t('solarwinds_npm_monitoring_serv')`
4467. "Solidity contract downloaded" → `t('solidity_contract_downloaded')`
4468. "Solution" → `t('solution')`
4469. "Some other DB error" → `t('some_other_db_error')`
4470. "Someone" → `t('someone')`
4471. "Something Went Wrong" → `t('something_went_wrong')`
4472. "Something went wrong" → `t('something_went_wrong')`
4473. "Something went wrong in the marketplace" → `t('something_went_wrong_in_the_ma')`
4474. "Something went wrong on the server" → `t('something_went_wrong_on_the_se')`
4475. "Something went wrong while generating a fix suggestion. Please try again later." → `t('something_went_wrong_while_gen')`
4476. "Something went wrong. Please try again later" → `t('something_went_wrong_please_tr')`
4477. "Something went wrong. Please try again." → `t('something_went_wrong_please_tr')`
4478. "Soon" → `t('soon')`
4479. "Sophia Lee" → `t('sophia_lee')`
4480. "Sorry, the login form could not be displayed due to an error." → `t('sorry_the_login_form_could_not')`
4481. "Sort" → `t('sort')`
4482. "Sort By" → `t('sort_by')`
4483. "Sort by" → `t('sort_by')`
4484. "Sort by rating, price, or recency to surface the best options." → `t('sort_by_rating_price_or_recenc')`
4485. "South America" → `t('south_america')`
4486. "Spam your referral link across unrelated content" → `t('spam_your_referral_link_across')`
4487. "Spanish" → `t('spanish')`
4488. "Speakers" → `t('speakers')`
4489. "Specialization" → `t('specialization')`
4490. "Specialized in computer vision and deep learning with 8+ years experience" → `t('specialized_in_computer_vision')`
4491. "Specifications" → `t('specifications')`
4492. "Speech recognition and synthesis tools" → `t('speech_recognition_and_synthes')`
4493. "Spent" → `t('spent')`
4494. "Spike in dispute flags" → `t('spike_in_dispute_flags')`
4495. "Spinner" → `t('spinner')`
4496. "Stackable" → `t('stackable')`
4497. "Staff Writer" → `t('staff_writer')`
4498. "Stage" → `t('stage')`
4499. "Stake" → `t('stake')`
4500. "Stalled" → `t('stalled')`
4501. "Standard" → `t('standard')`
4502. "Star rating" → `t('star_rating')`
4503. "Start Call" → `t('start_call')`
4504. "Start Chatting" → `t('start_chatting')`
4505. "Start Date" → `t('start_date')`
4506. "Start Review" → `t('start_review')`
4507. "Start Shopping" → `t('start_shopping')`
4508. "Start Video Call" → `t('start_video_call')`
4509. "Start a video call with your team" → `t('start_a_video_call_with_your_t')`
4510. "Start audio call" → `t('start_audio_call')`
4511. "Start date is required" → `t('start_date_is_required')`
4512. "Start it locally with" → `t('start_it_locally_with')`
4513. "Start referring to appear on the leaderboard" → `t('start_referring_to_appear_on_t')`
4514. "Start referring to earn your spot on the leaderboard" → `t('start_referring_to_earn_your_s')`
4515. "Start sharing your referral links to earn rewards" → `t('start_sharing_your_referral_li')`
4516. "Start video call" → `t('start_video_call')`
4517. "Starting" → `t('starting')`
4518. "Startup" → `t('startup')`
4519. "Startup Name" → `t('startup_name')`
4520. "Startup OS - Zion" → `t('startup_os_zion')`
4521. "State-of-the-art machine learning techniques" → `t('stateoftheart_machine_learning')`
4522. "Static Props Example" → `t('static_props_example')`
4523. "Status" → `t('status')`
4524. "Status Code" → `t('status_code')`
4525. "Status Page" → `t('status_page')`
4526. "Status updated" → `t('status_updated')`
4527. "Stay Informed" → `t('stay_informed')`
4528. "Stay Updated" → `t('stay_updated')`
4529. "Stay updated with the latest news on tech, AI, and marketplace opportunities." → `t('stay_updated_with_the_latest_n')`
4530. "Stay updated with trends in AI technology, marketplace strategies, and IT services" → `t('stay_updated_with_trends_in_ai')`
4531. "Step 1: Provide Company Details" → `t('step_1_provide_company_details')`
4532. "Step 2: Confirm Marketplace Data" → `t('step_2_confirm_marketplace_dat')`
4533. "Step 3: Edit Your Pitch Deck" → `t('step_3_edit_your_pitch_deck')`
4534. "Step-by-step guides to help you build with Zion" → `t('stepbystep_guides_to_help_you_')`
4535. "Stop sharing screen" → `t('stop_sharing_screen')`
4536. "Storage" → `t('storage')`
4537. "Stores every proposal, milestone and manifesto" → `t('stores_every_proposal_mileston')`
4538. "Streaming Analytics Pipeline" → `t('streaming_analytics_pipeline')`
4539. "Streamlined Data Ingestion" → `t('streamlined_data_ingestion')`
4540. "Streamlined Hiring Workflow" → `t('streamlined_hiring_workflow')`
4541. "Stripe" → `t('stripe')`
4542. "Stripe not loaded" → `t('stripe_not_loaded')`
4543. "Stripe redirect error:" → `t('stripe_redirect_error')`
4544. "Stripe: Forced test mode is active, but no test publishable key (NEXT_PUBLIC_STRIPE_TEST_KEY or NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY) is set. Stripe will not load." → `t('stripe_forced_test_mode_is_act')`
4545. "Stripe: Production domain detected, but NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set. Stripe will not load." → `t('stripe_production_domain_detec')`
4546. "StripeCardError" → `t('stripecarderror')`
4547. "StripeInvalidRequestError" → `t('stripeinvalidrequesterror')`
4548. "Strong" → `t('strong')`
4549. "Strongly Recommended" → `t('strongly_recommended')`
4550. "Subdomain" → `t('subdomain')`
4551. "Subdomain can only contain lowercase letters, numbers, and hyphens" → `t('subdomain_can_only_contain_low')`
4552. "Subdomain must be at least 3 characters" → `t('subdomain_must_be_at_least_3_c')`
4553. "Subdomain must be at most 20 characters" → `t('subdomain_must_be_at_most_20_c')`
4554. "Subject" → `t('subject')`
4555. "Submission Error" → `t('submission_error')`
4556. "Submission Failed" → `t('submission_failed')`
4557. "Submission error:" → `t('submission_error')`
4558. "Submission failed" → `t('submission_failed')`
4559. "Submit" → `t('submit')`
4560. "Submit Application" → `t('submit_application')`
4561. "Submit Dispute" → `t('submit_dispute')`
4562. "Submit Feedback" → `t('submit_feedback')`
4563. "Submit Global Proposal" → `t('submit_global_proposal')`
4564. "Submit Proposal" → `t('submit_proposal')`
4565. "Submit Quote" → `t('submit_quote')`
4566. "Submit Report" → `t('submit_report')`
4567. "Submit Request" → `t('submit_request')`
4568. "Submit Review" → `t('submit_review')`
4569. "Submit anonymously" → `t('submit_anonymously')`
4570. "Submit for Review" → `t('submit_for_review')`
4571. "Submit to Counsel" → `t('submit_to_counsel')`
4572. "Submitted" → `t('submitted')`
4573. "Submitting to counsel..." → `t('submitting_to_counsel')`
4574. "Submitting..." → `t('submitting')`
4575. "Subscribe" → `t('subscribe')`
4576. "Subscribe to our mobile app updates and be the first to try new features before they're released to the public." → `t('subscribe_to_our_mobile_app_up')`
4577. "Subscribe to our newsletter for the latest updates on Zion's services, Google trending tech news, and marketplace opportunities." → `t('subscribe_to_our_newsletter_fo')`
4578. "Subscription" → `t('subscription')`
4579. "Subscription Plan" → `t('subscription_plan')`
4580. "Subscription failed" → `t('subscription_failed')`
4581. "Subscription failed. Please try again." → `t('subscription_failed_please_try')`
4582. "Subscription not found in Stripe" → `t('subscription_not_found_in_stri')`
4583. "Subtitle" → `t('subtitle')`
4584. "Subtitle must be at least 5 characters" → `t('subtitle_must_be_at_least_5_ch')`
4585. "Subtotal" → `t('subtotal')`
4586. "Success" → `t('success')`
4587. "Success!" → `t('success')`
4588. "Successful candidates" → `t('successful_candidates')`
4589. "Successfully concluded" → `t('successfully_concluded')`
4590. "Successfully converted quotes" → `t('successfully_converted_quotes')`
4591. "Successfully subscribed to newsletter!" → `t('successfully_subscribed_to_new')`
4592. "Suggest Chain" → `t('suggest_chain')`
4593. "Suggest Feature - Zion" → `t('suggest_feature_zion')`
4594. "Suggest a Feature" → `t('suggest_a_feature')`
4595. "Suggested Price Range" → `t('suggested_price_range')`
4596. "Suggested Schedule" → `t('suggested_schedule')`
4597. "Suggested Services" → `t('suggested_services')`
4598. "Suggested global action" → `t('suggested_global_action')`
4599. "Suggestion" → `t('suggestion')`
4600. "Suggestion added" → `t('suggestion_added')`
4601. "Summarize This Module" → `t('summarize_this_module')`
4602. "Summary" → `t('summary')`
4603. "Supabase" → `t('supabase')`
4604. "Supabase configuration missing" → `t('supabase_configuration_missing')`
4605. "Supabase credentials appear to be placeholders" → `t('supabase_credentials_appear_to')`
4606. "Supabase credentials are not set in environment variables" → `t('supabase_credentials_are_not_s')`
4607. "Supabase credentials are placeholder values" → `t('supabase_credentials_are_place')`
4608. "Supabase health check error:" → `t('supabase_health_check_error')`
4609. "Supabase health check failed with status" → `t('supabase_health_check_failed_w')`
4610. "Supabase is not configured - using placeholder values" → `t('supabase_is_not_configured_usi')`
4611. "Supabase not configured" → `t('supabase_not_configured')`
4612. "Supabase password reset error:" → `t('supabase_password_reset_error')`
4613. "Supabase sign-in error:" → `t('supabase_signin_error')`
4614. "Supabase sign-in returned no error but no user." → `t('supabase_signin_returned_no_er')`
4615. "Supabase signup error:" → `t('supabase_signup_error')`
4616. "Supermicro AI Workstation" → `t('supermicro_ai_workstation')`
4617. "Supply" → `t('supply')`
4618. "Supply Chain Optimization" → `t('supply_chain_optimization')`
4619. "Support escalation triggered" → `t('support_escalation_triggered')`
4620. "Support request submitted" → `t('support_request_submitted')`
4621. "Supporting Links / Pitch Deck" → `t('supporting_links_pitch_deck')`
4622. "Surge in signups" → `t('surge_in_signups')`
4623. "Suspend User" → `t('suspend_user')`
4624. "Suspend user" → `t('suspend_user')`
4625. "Suspicious" → `t('suspicious')`
4626. "Suspicious punctuation pattern" → `t('suspicious_punctuation_pattern')`
4627. "Sustainable IT for a Better Future" → `t('sustainable_it_for_a_better_fu')`
4628. "Sustainable technology solutions that reduce environmental impact without compromising performance" → `t('sustainable_technology_solutio')`
4629. "Swag Pack" → `t('swag_pack')`
4630. "Swiss Verein" → `t('swiss_verein')`
4631. "Sync Options" → `t('sync_options')`
4632. "Sync Settings" → `t('sync_settings')`
4633. "Sync applicant data" → `t('sync_applicant_data')`
4634. "Sync job details" → `t('sync_job_details')`
4635. "Sync to Satellite" → `t('sync_to_satellite')`
4636. "Synced proposals and votes over satellite link" → `t('synced_proposals_and_votes_ove')`
4637. "Synchronization Log" → `t('synchronization_log')`
4638. "Tab" → `t('tab')`
4639. "Tab navigation works properly" → `t('tab_navigation_works_properly')`
4640. "Table" → `t('table')`
4641. "Table has no accessibility violations" → `t('table_has_no_accessibility_vio')`
4642. "TableBody" → `t('tablebody')`
4643. "TableCaption" → `t('tablecaption')`
4644. "TableCell" → `t('tablecell')`
4645. "TableFooter" → `t('tablefooter')`
4646. "TableHead" → `t('tablehead')`
4647. "TableHeader" → `t('tableheader')`
4648. "TableRow" → `t('tablerow')`
4649. "Tables" → `t('tables')`
4650. "Tags" → `t('tags')`
4651. "Tailor your experience" → `t('tailor_your_experience')`
4652. "Tailored Solutions for Everyone" → `t('tailored_solutions_for_everyon')`
4653. "Take Quiz" → `t('take_quiz')`
4654. "Take Zion with you on the go with our mobile app for iOS and Android" → `t('take_zion_with_you_on_the_go_w')`
4655. "Talent" → `t('talent')`
4656. "Talent Acquisition Specialist" → `t('talent_acquisition_specialist')`
4657. "Talent Avatar" → `t('talent_avatar')`
4658. "Talent Dashboard" → `t('talent_dashboard')`
4659. "Talent Dashboard | Zion AI Marketplace" → `t('talent_dashboard_zion_ai_marke')`
4660. "Talent Directory" → `t('talent_directory')`
4661. "Talent Directory Coming Soon" → `t('talent_directory_coming_soon')`
4662. "Talent Festival launches" → `t('talent_festival_launches')`
4663. "Talent Hired" → `t('talent_hired')`
4664. "Talent Marketplace" → `t('talent_marketplace')`
4665. "Talent Onboarding" → `t('talent_onboarding')`
4666. "Talent Pages" → `t('talent_pages')`
4667. "Talent Profile Page" → `t('talent_profile_page')`
4668. "Talent Registration" → `t('talent_registration')`
4669. "Talent Saved" → `t('talent_saved')`
4670. "Talent Solutions" → `t('talent_solutions')`
4671. "Talent avatar" → `t('talent_avatar')`
4672. "Talent is sovereign" → `t('talent_is_sovereign')`
4673. "Talent matching screen" → `t('talent_matching_screen')`
4674. "Talent not found" → `t('talent_not_found')`
4675. "Talent saved to your list." → `t('talent_saved_to_your_list')`
4676. "Talent vs. Client ratio" → `t('talent_vs_client_ratio')`
4677. "TalentProfilePage" → `t('talentprofilepage')`
4678. "Tap a prompt to copy or send it directly to ZionGPT." → `t('tap_a_prompt_to_copy_or_send_i')`
4679. "Target" → `t('target')`
4680. "Target Audience" → `t('target_audience')`
4681. "Target institution" → `t('target_institution')`
4682. "Team" → `t('team')`
4683. "Team & Advisors" → `t('team_advisors')`
4684. "Team - Zion" → `t('team_zion')`
4685. "Team Activity" → `t('team_activity')`
4686. "Team Info" → `t('team_info')`
4687. "Team Size" → `t('team_size')`
4688. "Team capacity" → `t('team_capacity')`
4689. "Team collaboration" → `t('team_collaboration')`
4690. "Team messages and notifications" → `t('team_messages_and_notification')`
4691. "Team roles & permissions" → `t('team_roles_permissions')`
4692. "Teams error: ${res.status} ${message}" → `t('teams_error_resstatus_message')`
4693. "Tech" → `t('tech')`
4694. "Tech Community" → `t('tech_community')`
4695. "Tech innovation" → `t('tech_innovation')`
4696. "TechStart Inc" → `t('techstart_inc')`
4697. "Technical Assessment" → `t('technical_assessment')`
4698. "Technical Details" → `t('technical_details')`
4699. "Technical Writer" → `t('technical_writer')`
4700. "Technology" → `t('technology')`
4701. "Tell us a bit about yourself..." → `t('tell_us_a_bit_about_yourself')`
4702. "Tell us about you" → `t('tell_us_about_you')`
4703. "Tell us about your project" → `t('tell_us_about_your_project')`
4704. "Tell us about your project and we'll create a customized quote for you" → `t('tell_us_about_your_project_and')`
4705. "Tell us about yourself" → `t('tell_us_about_yourself')`
4706. "Tell us about yourself and how you plan to promote Zion AI" → `t('tell_us_about_yourself_and_how')`
4707. "Tell us what you" → `t('tell_us_what_you')`
4708. "Tenant Onboarding" → `t('tenant_onboarding')`
4709. "Tenant Onboarding - Zion AI Marketplace" → `t('tenant_onboarding_zion_ai_mark')`
4710. "Tenant detector error:" → `t('tenant_detector_error')`
4711. "TensorFlow" → `t('tensorflow')`
4712. "Termination" → `t('termination')`
4713. "Termination Clause" → `t('termination_clause')`
4714. "Terms of Service" → `t('terms_of_service')`
4715. "Tesla T4 GPU Server" → `t('tesla_t4_gpu_server')`
4716. "Test" → `t('test')`
4717. "Test Alert" → `t('test_alert')`
4718. "Test Another Event" → `t('test_another_event')`
4719. "Test Apple Case" → `t('test_apple_case')`
4720. "Test Card" → `t('test_card')`
4721. "Test Category" → `t('test_category')`
4722. "Test Checkbox Visual" → `t('test_checkbox_visual')`
4723. "Test Discord Alert" → `t('test_discord_alert')`
4724. "Test Error Boundary" → `t('test_error_boundary')`
4725. "Test Error Mount - Zion" → `t('test_error_mount_zion')`
4726. "Test Error Render - Zion" → `t('test_error_render_zion')`
4727. "Test Input" → `t('test_input')`
4728. "Test Label" → `t('test_label')`
4729. "Test Milestone" → `t('test_milestone')`
4730. "Test Page" → `t('test_page')`
4731. "Test Page Content" → `t('test_page_content')`
4732. "Test Product" → `t('test_product')`
4733. "Test Product Checkout" → `t('test_product_checkout')`
4734. "Test Radio Group" → `t('test_radio_group')`
4735. "Test Select Trigger" → `t('test_select_trigger')`
4736. "Test Service" → `t('test_service')`
4737. "Test Table Caption" → `t('test_table_caption')`
4738. "Test Textarea" → `t('test_textarea')`
4739. "Test Toast" → `t('test_toast')`
4740. "Test User" → `t('test_user')`
4741. "Test Webhook" → `t('test_webhook')`
4742. "Test content" → `t('test_content')`
4743. "Test error case" → `t('test_error_case')`
4744. "Test error for Sentry integration - this is intentional!" → `t('test_error_for_sentry_integrat')`
4745. "Test error for error boundary" → `t('test_error_for_error_boundary')`
4746. "Test error triggered on mount" → `t('test_error_triggered_on_mount')`
4747. "Test error triggered on render" → `t('test_error_triggered_on_render')`
4748. "Test input" → `t('test_input')`
4749. "Test notification created" → `t('test_notification_created')`
4750. "Test self-heal trigger" → `t('test_selfheal_trigger')`
4751. "Test textarea" → `t('test_textarea')`
4752. "Test toast message" → `t('test_toast_message')`
4753. "Test webhook" → `t('test_webhook')`
4754. "Test webhook sent" → `t('test_webhook_sent')`
4755. "TestValue" → `t('testvalue')`
4756. "Testimonials" → `t('testimonials')`
4757. "Testing Webhooks" → `t('testing_webhooks')`
4758. "Testland" → `t('testland')`
4759. "Testville" → `t('testville')`
4760. "Text Wrapping and Overflow" → `t('text_wrapping_and_overflow')`
4761. "Textarea" → `t('textarea')`
4762. "Textarea has no accessibility violations" → `t('textarea_has_no_accessibility_')`
4763. "Thank you for registering with Zion. We" → `t('thank_you_for_registering_with')`
4764. "Thank you for subscribing!" → `t('thank_you_for_subscribing')`
4765. "Thank you for your feedback" → `t('thank_you_for_your_feedback')`
4766. "Thank you for your feedback!" → `t('thank_you_for_your_feedback')`
4767. "Thank you for your order!" → `t('thank_you_for_your_order')`
4768. "Thank you for your order." → `t('thank_you_for_your_order')`
4769. "Thank you for your purchase!" → `t('thank_you_for_your_purchase')`
4770. "Thank you for your review!" → `t('thank_you_for_your_review')`
4771. "Thank you! We'll be in touch." → `t('thank_you_well_be_in_touch')`
4772. "Thank you. Our team will review your report" → `t('thank_you_our_team_will_review')`
4773. "The Day the Protocol Woke Up" → `t('the_day_the_protocol_woke_up')`
4774. "The Power of" → `t('the_power_of')`
4775. "The Zion AI Marketplace Team" → `t('the_zion_ai_marketplace_team')`
4776. "The Zion mobile app brings the power of our AI marketplace to your pocket with these key features" → `t('the_zion_mobile_app_brings_the')`
4777. "The equipment you" → `t('the_equipment_you')`
4778. "The event types you want to subscribe to" → `t('the_event_types_you_want_to_su')`
4779. "The link has been copied to your clipboard" → `t('the_link_has_been_copied_to_yo')`
4780. "The mediation process" → `t('the_mediation_process')`
4781. "The page you" → `t('the_page_you')`
4782. "The post has been pinned to the top" → `t('the_post_has_been_pinned_to_th')`
4783. "The quality of candidates has improved dramatically since using Zion" → `t('the_quality_of_candidates_has_')`
4784. "The quote request has been permanently deleted" → `t('the_quote_request_has_been_per')`
4785. "The quote request status has been updated" → `t('the_quote_request_status_has_b')`
4786. "The referral link has been copied to your clipboard" → `t('the_referral_link_has_been_cop')`
4787. "The reply has been marked as the accepted answer" → `t('the_reply_has_been_marked_as_t')`
4788. "The request was invalid" → `t('the_request_was_invalid')`
4789. "The request was successful." → `t('the_request_was_successful')`
4790. "The requested information could not be found." → `t('the_requested_information_coul')`
4791. "The requested resource was not found" → `t('the_requested_resource_was_not')`
4792. "The resource was successfully created." → `t('the_resource_was_successfully_')`
4793. "The webhook has been deleted successfully." → `t('the_webhook_has_been_deleted_s')`
4794. "There was an error creating your profile. Please try again." → `t('there_was_an_error_creating_yo')`
4795. "There was an error downloading your resume." → `t('there_was_an_error_downloading')`
4796. "There was an error generating your enhanced profile. Please try again." → `t('there_was_an_error_generating_')`
4797. "There was an error sending your application. Please try again." → `t('there_was_an_error_sending_you')`
4798. "There was an error sending your message. Please try again." → `t('there_was_an_error_sending_you')`
4799. "There was an error submitting your quote request. Please try again." → `t('there_was_an_error_submitting_')`
4800. "There was an error submitting your request." → `t('there_was_an_error_submitting_')`
4801. "There was an error submitting your request. Please try again." → `t('there_was_an_error_submitting_')`
4802. "There was an issue logging you out. Please try again." → `t('there_was_an_issue_logging_you')`
4803. "There was an issue updating your profile. Please try again." → `t('there_was_an_issue_updating_yo')`
4804. "There was an issue with your authentication request" → `t('there_was_an_issue_with_your_a')`
4805. "These milestones will be added to your contract" → `t('these_milestones_will_be_added')`
4806. "They complete onboarding" → `t('they_complete_onboarding')`
4807. "They sign up" → `t('they_sign_up')`
4808. "This Talent" → `t('this_talent')`
4809. "This dispute has been closed" → `t('this_dispute_has_been_closed')`
4810. "This dispute has been resolved" → `t('this_dispute_has_been_resolved')`
4811. "This dispute is under review by our team" → `t('this_dispute_is_under_review_b')`
4812. "This event is already added" → `t('this_event_is_already_added')`
4813. "This helps us personalize your experience" → `t('this_helps_us_personalize_your')`
4814. "This is a public profile for the nation." → `t('this_is_a_public_profile_for_t')`
4815. "This is a sample product for build time" → `t('this_is_a_sample_product_for_b')`
4816. "This is a test checkout flow using Stripe test mode. No real charges will be made." → `t('this_is_a_test_checkout_flow_u')`
4817. "This is a test webhook event" → `t('this_is_a_test_webhook_event')`
4818. "This is a very long text that should wrap properly on narrow screens without causing horizontal overflow issues" → `t('this_is_a_very_long_text_that_')`
4819. "This is your job posting" → `t('this_is_your_job_posting')`
4820. "This key will only be displayed once. Please save it securely." → `t('this_key_will_only_be_displaye')`
4821. "This month's top-performing partners" → `t('this_months_topperforming_part')`
4822. "This page is only accessible to authenticated users" → `t('this_page_is_only_accessible_t')`
4823. "This post was created by Cypress during an automated test." → `t('this_post_was_created_by_cypre')`
4824. "This project has been canceled." → `t('this_project_has_been_canceled')`
4825. "This should only take a moment" → `t('this_should_only_take_a_moment')`
4826. "This transaction cannot be refunded" → `t('this_transaction_cannot_be_ref')`
4827. "This week's top AI talent" → `t('this_weeks_top_ai_talent')`
4828. "Thomson Reuters" → `t('thomson_reuters')`
4829. "Thomson Reuters logo" → `t('thomson_reuters_logo')`
4830. "Throw Client-Side Error" → `t('throw_clientside_error')`
4831. "Throw Test Error" → `t('throw_test_error')`
4832. "Time" → `t('time')`
4833. "Time Range" → `t('time_range')`
4834. "Time to Hire" → `t('time_to_hire')`
4835. "Time to first paint" → `t('time_to_first_paint')`
4836. "Time to largest paint" → `t('time_to_largest_paint')`
4837. "Time-based quorum rules" → `t('timebased_quorum_rules')`
4838. "Time-to-hire tracking" → `t('timetohire_tracking')`
4839. "Timeline" → `t('timeline')`
4840. "Timeline Type" → `t('timeline_type')`
4841. "Timeliness" → `t('timeliness')`
4842. "Times" → `t('times')`
4843. "Timestamp" → `t('timestamp')`
4844. "Tips for preventing disputes" → `t('tips_for_preventing_disputes')`
4845. "Tips to find the perfect talent for" → `t('tips_to_find_the_perfect_talen')`
4846. "Title" → `t('title')`
4847. "Title (e.g., Share an AI tool, Ask for help...)" → `t('title_eg_share_an_ai_tool_ask_')`
4848. "Title is required" → `t('title_is_required')`
4849. "Title must be at least 3 characters" → `t('title_must_be_at_least_3_chara')`
4850. "To cast your vote or see your voting status, please connect your wallet." → `t('to_cast_your_vote_or_see_your_')`
4851. "To create an account, click" → `t('to_create_an_account_click')`
4852. "Toast Manager Debug" → `t('toast_manager_debug')`
4853. "Today" → `t('today')`
4854. "Toggle Sidebar" → `t('toggle_sidebar')`
4855. "Toggle favorite failed" → `t('toggle_favorite_failed')`
4856. "Toggle marketplace sidebar" → `t('toggle_marketplace_sidebar')`
4857. "Toggle navigation" → `t('toggle_navigation')`
4858. "Toggle webhook" → `t('toggle_webhook')`
4859. "Token" → `t('token')`
4860. "Token Activation" → `t('token_activation')`
4861. "Token Airdrop Snapshot" → `t('token_airdrop_snapshot')`
4862. "Token Distribution" → `t('token_distribution')`
4863. "Token Faucet" → `t('token_faucet')`
4864. "Token Integration" → `t('token_integration')`
4865. "Token Manager" → `t('token_manager')`
4866. "Token Sale" → `t('token_sale')`
4867. "Token Velocity" → `t('token_velocity')`
4868. "Token barter" → `t('token_barter')`
4869. "Token reward" → `t('token_reward')`
4870. "Token-weighted vote" → `t('tokenweighted_vote')`
4871. "Tokenomics simulator" → `t('tokenomics_simulator')`
4872. "Took place ${formatDistanceToNow(interviewDate)} ago" → `t('took_place_formatdistancetonow')`
4873. "Top Contributor" → `t('top_contributor')`
4874. "Top Pages" → `t('top_pages')`
4875. "Top Partners" → `t('top_partners')`
4876. "Top Regions by Talent" → `t('top_regions_by_talent')`
4877. "Top Universities" → `t('top_universities')`
4878. "Top referrers this month" → `t('top_referrers_this_month')`
4879. "Topic" → `t('topic')`
4880. "Total" → `t('total')`
4881. "Total Amount" → `t('total_amount')`
4882. "Total Earnings" → `t('total_earnings')`
4883. "Total Flags" → `t('total_flags')`
4884. "Total Page Views" → `t('total_page_views')`
4885. "Total Pages" → `t('total_pages')`
4886. "Total Payment" → `t('total_payment')`
4887. "Total Referrals" → `t('total_referrals')`
4888. "Total Rewards" → `t('total_rewards')`
4889. "Total Services" → `t('total_services')`
4890. "Total build output" → `t('total_build_output')`
4891. "Total escrow locked" → `t('total_escrow_locked')`
4892. "Totals" → `t('totals')`
4893. "Touch Target Accessibility" → `t('touch_target_accessibility')`
4894. "Toxic backlinks: ${toxic.length}" → `t('toxic_backlinks_toxiclength')`
4895. "Track Milestones" → `t('track_milestones')`
4896. "Track and manage your candidates through the hiring process" → `t('track_and_manage_your_candidat')`
4897. "Track different conversion types" → `t('track_different_conversion_typ')`
4898. "Track user behavior, page views, and conversion rates" → `t('track_user_behavior_page_views')`
4899. "Track user behavior, page views, and conversion rates to improve your platform performance" → `t('track_user_behavior_page_views')`
4900. "Track where you stand in the hiring process" → `t('track_where_you_stand_in_the_h')`
4901. "Track your referral performance over time" → `t('track_your_referral_performanc')`
4902. "Track your team's resource usage across the platform" → `t('track_your_teams_resource_usag')`
4903. "Tracking" → `t('tracking')`
4904. "Traction" → `t('traction')`
4905. "Traditional Providers" → `t('traditional_providers')`
4906. "Training" → `t('training')`
4907. "Training error" → `t('training_error')`
4908. "Training error:" → `t('training_error')`
4909. "Training failed" → `t('training_failed')`
4910. "Training job was cancelled" → `t('training_job_was_cancelled')`
4911. "Transaction History" → `t('transaction_history')`
4912. "Transaction ID is required" → `t('transaction_id_is_required')`
4913. "Transaction cancelled successfully" → `t('transaction_cancelled_successf')`
4914. "Transaction not found" → `t('transaction_not_found')`
4915. "Transaction processed" → `t('transaction_processed')`
4916. "Transaction updated successfully" → `t('transaction_updated_successful')`
4917. "Translation consistency - no hardcoded English text" → `t('translation_consistency_no_har')`
4918. "Translation error:" → `t('translation_error')`
4919. "Translation service error:" → `t('translation_service_error')`
4920. "Transparency for global outreach" → `t('transparency_for_global_outrea')`
4921. "Transparency of decision-making" → `t('transparency_of_decisionmaking')`
4922. "Transparent Pricing" → `t('transparent_pricing')`
4923. "Transportation to Site" → `t('transportation_to_site')`
4924. "Transportation to your site" → `t('transportation_to_your_site')`
4925. "Treasury balance" → `t('treasury_balance')`
4926. "Treasury recovery address" → `t('treasury_recovery_address')`
4927. "Treasury report cycles" → `t('treasury_report_cycles')`
4928. "Tree View" → `t('tree_view')`
4929. "Trending" → `t('trending')`
4930. "Trigger Training" → `t('trigger_training')`
4931. "Trigger an error to test Sentry integration" → `t('trigger_an_error_to_test_sentr')`
4932. "Triggered when a talent applies to one of your job postings" → `t('triggered_when_a_talent_applie')`
4933. "Triggered when a talent is hired for a project" → `t('triggered_when_a_talent_is_hir')`
4934. "Triggered when you receive a new message" → `t('triggered_when_you_receive_a_n')`
4935. "Triggered when you receive a quote request" → `t('triggered_when_you_receive_a_q')`
4936. "Trust" → `t('trust')`
4937. "Trusted By Industry Leaders" → `t('trusted_by_industry_leaders')`
4938. "Trusted by Leading Companies" → `t('trusted_by_leading_companies')`
4939. "Trusted by the" → `t('trusted_by_the')`
4940. "Trustless onboarding" → `t('trustless_onboarding')`
4941. "Try AI Matcher" → `t('try_ai_matcher')`
4942. "Try Again" → `t('try_again')`
4943. "Try Creating Account" → `t('try_creating_account')`
4944. "Try It" → `t('try_it')`
4945. "Try Login" → `t('try_login')`
4946. "Try Search" → `t('try_search')`
4947. "Try ZionGPT Now" → `t('try_ziongpt_now')`
4948. "Try adjusting your filters" → `t('try_adjusting_your_filters')`
4949. "Try adjusting your filters or search query" → `t('try_adjusting_your_filters_or_')`
4950. "Try adjusting your search or filter criteria" → `t('try_adjusting_your_search_or_f')`
4951. "Try adjusting your search query or browse all categories." → `t('try_adjusting_your_search_quer')`
4952. "Try adjusting your search query or browse another category." → `t('try_adjusting_your_search_quer')`
4953. "Try adjusting your search terms or browse our categories to discover what we have available." → `t('try_adjusting_your_search_term')`
4954. "Try searching for:" → `t('try_searching_for')`
4955. "Tu carrito está vacío" → `t('tu_carrito_est_vaco')`
4956. "Tutorials" → `t('tutorials')`
4957. "Twitter" → `t('twitter')`
4958. "Twitter Banner" → `t('twitter_banner')`
4959. "Twitter Banner Placeholder" → `t('twitter_banner_placeholder')`
4960. "Twitter login error:" → `t('twitter_login_error')`
4961. "Twitter login failed" → `t('twitter_login_failed')`
4962. "Type" → `t('type')`
4963. "TypeError" → `t('typeerror')`
4964. "TypeScript" → `t('typescript')`
4965. "Typography" → `t('typography')`
4966. "UI Error" → `t('ui_error')`
4967. "Ubisoft" → `t('ubisoft')`
4968. "Ubisoft logo" → `t('ubisoft_logo')`
4969. "Unable to Load Data" → `t('unable_to_load_data')`
4970. "Unable to connect to our servers. Please check your internet connection." → `t('unable_to_connect_to_our_serve')`
4971. "Unable to connect to the server. Please check your internet connection and try again." → `t('unable_to_connect_to_the_serve')`
4972. "Unable to connect wallet" → `t('unable_to_connect_wallet')`
4973. "Unable to load equipment" → `t('unable_to_load_equipment')`
4974. "Unable to load marketplace" → `t('unable_to_load_marketplace')`
4975. "Unable to load marketplace data. Please try again." → `t('unable_to_load_marketplace_dat')`
4976. "Unable to load services" → `t('unable_to_load_services')`
4977. "Unable to load talent profiles." → `t('unable_to_load_talent_profiles')`
4978. "Unable to subscribe right now. Please try again later." → `t('unable_to_subscribe_right_now_')`
4979. "Unable to verify authentication service status" → `t('unable_to_verify_authenticatio')`
4980. "Unarchive" → `t('unarchive')`
4981. "Unauthenticated Root Access" → `t('unauthenticated_root_access')`
4982. "Unauthorized" → `t('unauthorized')`
4983. "Unauthorized sender" → `t('unauthorized_sender')`
4984. "Unavailable" → `t('unavailable')`
4985. "Uncaught" → `t('uncaught')`
4986. "Under Dispute" → `t('under_dispute')`
4987. "Under Review" → `t('under_review')`
4988. "Under review" → `t('under_review')`
4989. "Undo" → `t('undo')`
4990. "Unexpected Error" → `t('unexpected_error')`
4991. "Unexpected error" → `t('unexpected_error')`
4992. "Unexpected error handling state" → `t('unexpected_error_handling_stat')`
4993. "Unexpected error processing referral:" → `t('unexpected_error_processing_re')`
4994. "Unexpected error – please try again later." → `t('unexpected_error_please_try_ag')`
4995. "Unexpected signup error:" → `t('unexpected_signup_error')`
4996. "Unexpected token" → `t('unexpected_token')`
4997. "Unhandled error in main execution" → `t('unhandled_error_in_main_execut')`
4998. "Unhandled error in main execution (and failed to comment on issue)" → `t('unhandled_error_in_main_execut')`
4999. "Unhandled mock scenario" → `t('unhandled_mock_scenario')`
5000. "Unique Visitors" → `t('unique_visitors')`
5001. "United Kingdom" → `t('united_kingdom')`
5002. "United States" → `t('united_states')`
5003. "Universal" → `t('universal')`
5004. "Universal Studios logo" → `t('universal_studios_logo')`
5005. "University" → `t('university')`
5006. "Unknown" → `t('unknown')`
5007. "Unknown Client" → `t('unknown_client')`
5008. "Unknown Country" → `t('unknown_country')`
5009. "Unknown Job" → `t('unknown_job')`
5010. "Unknown Project" → `t('unknown_project')`
5011. "Unknown Talent" → `t('unknown_talent')`
5012. "Unknown User" → `t('unknown_user')`
5013. "Unknown component" → `t('unknown_component')`
5014. "Unknown error" → `t('unknown_error')`
5015. "Unknown error occurred" → `t('unknown_error_occurred')`
5016. "Unknown error occurred during training" → `t('unknown_error_occurred_during_')`
5017. "Unknown error: non-Error object thrown" → `t('unknown_error_nonerror_object_')`
5018. "Unknown error: non-Error object thrown. Could not serialize error object." → `t('unknown_error_nonerror_object_')`
5019. "Unknown message type" → `t('unknown_message_type')`
5020. "Unknown translation error" → `t('unknown_translation_error')`
5021. "Unlock" → `t('unlock')`
5022. "Unmute microphone" → `t('unmute_microphone')`
5023. "Unnamed" → `t('unnamed')`
5024. "Unnamed Product" → `t('unnamed_product')`
5025. "Unpin" → `t('unpin')`
5026. "Unread" → `t('unread')`
5027. "Unsupported image format" → `t('unsupported_image_format')`
5028. "Untitled Project" → `t('untitled_project')`
5029. "Untitled Resume" → `t('untitled_resume')`
5030. "Unverified" → `t('unverified')`
5031. "Upcoming Interviews" → `t('upcoming_interviews')`
5032. "Upcoming Rewards" → `t('upcoming_rewards')`
5033. "Update DB error" → `t('update_db_error')`
5034. "Update Job" → `t('update_job')`
5035. "Update Job Post" → `t('update_job_post')`
5036. "Update Password" → `t('update_password')`
5037. "Update Post" → `t('update_post')`
5038. "Update Profile" → `t('update_profile')`
5039. "Update Resume" → `t('update_resume')`
5040. "Update Voting Rules" → `t('update_voting_rules')`
5041. "Update Your Profile" → `t('update_your_profile')`
5042. "Update did not return data." → `t('update_did_not_return_data')`
5043. "Update talent availability to "Unavailable"" → `t('update_talent_availability_to_')`
5044. "Update your password" → `t('update_your_password')`
5045. "Updated" → `t('updated')`
5046. "Upgrade Governance Engine" → `t('upgrade_governance_engine')`
5047. "Upload" → `t('upload')`
5048. "Upload Avatar" → `t('upload_avatar')`
5049. "Upload Photo" → `t('upload_photo')`
5050. "Upload a 3D model for interactive viewing" → `t('upload_a_3d_model_for_interact')`
5051. "Upload a custom resume (PDF)" → `t('upload_a_custom_resume_pdf')`
5052. "Upload samples of your work to your portfolio" → `t('upload_samples_of_your_work_to')`
5053. "Uploaded CV" → `t('uploaded_cv')`
5054. "Uploaded when project was created" → `t('uploaded_when_project_was_crea')`
5055. "Uploading a Product to the Marketplace" → `t('uploading_a_product_to_the_mar')`
5056. "Uptime" → `t('uptime')`
5057. "Usage Overview" → `t('usage_overview')`
5058. "Use <h1> for the title and <h2> for section headings. Include at least two internal links to relevant service pages such as /services or /it-onsite-services." → `t('use_h1_for_the_title_and_h2_fo')`
5059. "Use Case" → `t('use_case')`
5060. "Use Cases" → `t('use_cases')`
5061. "Use escrow" → `t('use_escrow')`
5062. "Use manipulative or misleading marketing tactics" → `t('use_manipulative_or_misleading')`
5063. "Use most recent AI Resume" → `t('use_most_recent_ai_resume')`
5064. "Use the settings panel to configure your content and click "Generate" to create AI-powered content." → `t('use_the_settings_panel_to_conf')`
5065. "User" → `t('user')`
5066. "User Activity Log" → `t('user_activity_log')`
5067. "User Behavior Over Time" → `t('user_behavior_over_time')`
5068. "User Data Error" → `t('user_data_error')`
5069. "User Experience" → `t('user_experience')`
5070. "User Experience Consulting" → `t('user_experience_consulting')`
5071. "User ID is required" → `t('user_id_is_required')`
5072. "User ID is required for recommendations" → `t('user_id_is_required_for_recomm')`
5073. "User Information" → `t('user_information')`
5074. "User Initialization Error" → `t('user_initialization_error')`
5075. "User Profile" → `t('user_profile')`
5076. "User Satisfaction" → `t('user_satisfaction')`
5077. "User Testing" → `t('user_testing')`
5078. "User Type" → `t('user_type')`
5079. "User already has a referral" → `t('user_already_has_a_referral')`
5080. "User already registered" → `t('user_already_registered')`
5081. "User avatar" → `t('user_avatar')`
5082. "User menu" → `t('user_menu')`
5083. "User not authenticated" → `t('user_not_authenticated')`
5084. "User not found" → `t('user_not_found')`
5085. "User profile" → `t('user_profile')`
5086. "User registered successfully" → `t('user_registered_successfully')`
5087. "UserProfileDropdown: Proper ARIA attributes" → `t('userprofiledropdown_proper_ari')`
5088. "Users" → `t('users')`
5089. "Using ${CATEGORIES.length} fallback categories" → `t('using_categorieslength_fallbac')`
5090. "Using AI matching" → `t('using_ai_matching')`
5091. "Using dummy Stripe key - returning mock checkout session" → `t('using_dummy_stripe_key_returni')`
5092. "Using the Examples" → `t('using_the_examples')`
5093. "VALIDATION_ERROR" → `t('validationerror')`
5094. "Validation Error" → `t('validation_error')`
5095. "Validation error" → `t('validation_error')`
5096. "Validation failed - please check your input" → `t('validation_failed_please_check')`
5097. "ValidationError" → `t('validationerror')`
5098. "Value" → `t('value')`
5099. "Vault password" → `t('vault_password')`
5100. "Veeam Backup & Replication Appliance" → `t('veeam_backup_replication_appli')`
5101. "Verification" → `t('verification')`
5102. "Verification Queue" → `t('verification_queue')`
5103. "Verification Status" → `t('verification_status')`
5104. "Verification failed: ${errorDescription}" → `t('verification_failed_errordescr')`
5105. "Verification page error" → `t('verification_page_error')`
5106. "Verified" → `t('verified')`
5107. "Verified Expert" → `t('verified_expert')`
5108. "Verified First" → `t('verified_first')`
5109. "Verified talent" → `t('verified_talent')`
5110. "Verify Health Check" → `t('verify_health_check')`
5111. "Verify Identity" → `t('verify_identity')`
5112. "Verify signatures" → `t('verify_signatures')`
5113. "Verifying Webhook Signatures" → `t('verifying_webhook_signatures')`
5114. "Version" → `t('version')`
5115. "Version ${newVersionNumber} saved successfully (mocked). Now working on v${newVersionNumber + 1}." → `t('version_newversionnumber_saved')`
5116. "Version Control" → `t('version_control')`
5117. "Version History" → `t('version_history')`
5118. "Vertiv Liebert Precision Cooling Unit" → `t('vertiv_liebert_precision_cooli')`
5119. "Very weak" → `t('very_weak')`
5120. "Video" → `t('video')`
5121. "Video Call" → `t('video_call')`
5122. "Video Meetings" → `t('video_meetings')`
5123. "Video call ended" → `t('video_call_ended')`
5124. "Video call started" → `t('video_call_started')`
5125. "Video preview" → `t('video_preview')`
5126. "View" → `t('view')`
5127. "View Active Dispute" → `t('view_active_dispute')`
5128. "View Agenda" → `t('view_agenda')`
5129. "View All" → `t('view_all')`
5130. "View All Activity" → `t('view_all_activity')`
5131. "View All Applications" → `t('view_all_applications')`
5132. "View All Articles" → `t('view_all_articles')`
5133. "View All Interviews" → `t('view_all_interviews')`
5134. "View All Jobs" → `t('view_all_jobs')`
5135. "View All Listings" → `t('view_all_listings')`
5136. "View All Messages" → `t('view_all_messages')`
5137. "View All Notifications" → `t('view_all_notifications')`
5138. "View Analytics" → `t('view_analytics')`
5139. "View Available Rewards" → `t('view_available_rewards')`
5140. "View Bookmarks" → `t('view_bookmarks')`
5141. "View Candidates" → `t('view_candidates')`
5142. "View Cart" → `t('view_cart')`
5143. "View Dashboard" → `t('view_dashboard')`
5144. "View Details" → `t('view_details')`
5145. "View Details & Vote" → `t('view_details_vote')`
5146. "View Feedback" → `t('view_feedback')`
5147. "View Full Analytics" → `t('view_full_analytics')`
5148. "View Full Application Tracker" → `t('view_full_application_tracker')`
5149. "View Interview Details" → `t('view_interview_details')`
5150. "View Job" → `t('view_job')`
5151. "View Matches" → `t('view_matches')`
5152. "View Messages" → `t('view_messages')`
5153. "View Offer" → `t('view_offer')`
5154. "View Order" → `t('view_order')`
5155. "View Orders" → `t('view_orders')`
5156. "View Portfolio" → `t('view_portfolio')`
5157. "View Post" → `t('view_post')`
5158. "View Profile" → `t('view_profile')`
5159. "View Project" → `t('view_project')`
5160. "View Resources" → `t('view_resources')`
5161. "View Resume" → `t('view_resume')`
5162. "View Services" → `t('view_services')`
5163. "View Simplified Status" → `t('view_simplified_status')`
5164. "View Talent Pool" → `t('view_talent_pool')`
5165. "View Wallet" → `t('view_wallet')`
5166. "View all" → `t('view_all')`
5167. "View all notifications" → `t('view_all_notifications')`
5168. "View and manage dispute details" → `t('view_and_manage_dispute_detail')`
5169. "View billing" → `t('view_billing')`
5170. "View candidates" → `t('view_candidates')`
5171. "View detailed breakdown" → `t('view_detailed_breakdown')`
5172. "View details" → `t('view_details')`
5173. "View notifications" → `t('view_notifications')`
5174. "View notifications error:" → `t('view_notifications_error')`
5175. "View suggested matches" → `t('view_suggested_matches')`
5176. "View talent profile:" → `t('view_talent_profile')`
5177. "View the profile of this talented individual." → `t('view_the_profile_of_this_talen')`
5178. "View your AI matches" → `t('view_your_ai_matches')`
5179. "Viewed" → `t('viewed')`
5180. "Viewer" → `t('viewer')`
5181. "Views" → `t('views')`
5182. "Virtual assistant" → `t('virtual_assistant')`
5183. "Virtual summit showcasing multiverse innovation" → `t('virtual_summit_showcasing_mult')`
5184. "Visibility Boost" → `t('visibility_boost')`
5185. "Vision/Goals" → `t('visiongoals')`
5186. "Vision: AI + Talent + Trust" → `t('vision_ai_talent_trust')`
5187. "Visit Auth0 Dashboard" → `t('visit_auth0_dashboard')`
5188. "Visit Full Status Page" → `t('visit_full_status_page')`
5189. "Visit Link" → `t('visit_link')`
5190. "Visit our comprehensive knowledge base" → `t('visit_our_comprehensive_knowle')`
5191. "Visualization" → `t('visualization')`
5192. "Visualization Dashboard" → `t('visualization_dashboard')`
5193. "Voice & Speech" → `t('voice_speech')`
5194. "Vote" → `t('vote')`
5195. "Vote on upcoming features" → `t('vote_on_upcoming_features')`
5196. "Vote recorded" → `t('vote_recorded')`
5197. "Voting Power Used" → `t('voting_power_used')`
5198. "Wallet" → `t('wallet')`
5199. "Wallet ${address.slice(0, 6)}...${address.slice(-4)} connected successfully" → `t('wallet_addressslice0_6addresss')`
5200. "Wallet address for transactions" → `t('wallet_address_for_transaction')`
5201. "Wallet connected" → `t('wallet_connected')`
5202. "Wallet login failed with status:" → `t('wallet_login_failed_with_statu')`
5203. "Wallet login succeeded but session data could not be retrieved." → `t('wallet_login_succeeded_but_ses')`
5204. "Wallet not detected" → `t('wallet_not_detected')`
5205. "WalletConnectProvider: Error creating user profile after signup:" → `t('walletconnectprovider_error_cr')`
5206. "WalletConnectProvider: Error during signature verification or DB operation:" → `t('walletconnectprovider_error_du')`
5207. "WalletConnectProvider: Error looking up user by wallet address:" → `t('walletconnectprovider_error_lo')`
5208. "WalletConnectProvider: Missing address, signature, or message." → `t('walletconnectprovider_missing_')`
5209. "WalletConnectProvider: Signature verification failed. Expected ${credentials.address}, got ${recoveredAddress}" → `t('walletconnectprovider_signatur')`
5210. "WalletConnectProvider: Supabase signUp error:" → `t('walletconnectprovider_supabase')`
5211. "WalletConnectProvider: User profile created and linked for ${authUserId}" → `t('walletconnectprovider_user_pro')`
5212. "WalletContext: CRITICAL error creating appKitInstance with valid Project ID:" → `t('walletcontext_critical_error_c')`
5213. "WalletContext: Critical Error - Reown AppKit Project ID is not set or is a placeholder. Please set NEXT_PUBLIC_REOWN_PROJECT_ID environment variable." → `t('walletcontext_critical_error_r')`
5214. "WalletContext: Error disconnecting wallet:" → `t('walletcontext_error_disconnect')`
5215. "WalletContext: Error during disconnect." → `t('walletcontext_error_during_dis')`
5216. "WalletContext: Error getting signer or updating wallet state:" → `t('walletcontext_error_getting_si')`
5217. "WalletContext: Error opening wallet modal:" → `t('walletcontext_error_opening_wa')`
5218. "WalletPage" → `t('walletpage')`
5219. "WalletProvider" → `t('walletprovider')`
5220. "Walt Disney" → `t('walt_disney')`
5221. "Walt Disney logo" → `t('walt_disney_logo')`
5222. "Warning" → `t('warning')`
5223. "Warning:" → `t('warning')`
5224. "Warning: NEXT_PUBLIC_REOWN_PROJECT_ID is not set or is a placeholder. Using fallback." → `t('warning_nextpublicreownproject')`
5225. "Warranty" → `t('warranty')`
5226. "Watch the Replay" → `t('watch_the_replay')`
5227. "We are looking for a skilled React developer to help us build out our new customer-facing application. You'll be working with a team of experienced developers to create a responsive and performant web app..." → `t('we_are_looking_for_a_skilled_r')`
5228. "We couldn" → `t('we_couldn')`
5229. "We maintain the highest standards of data protection and compliance" → `t('we_maintain_the_highest_standa')`
5230. "We miss you! Special offer inside" → `t('we_miss_you_special_offer_insi')`
5231. "We need a skilled backend developer..." → `t('we_need_a_skilled_backend_deve')`
5232. "We noticed you haven't received applications recently. Here are some tips to make your profile stand out:" → `t('we_noticed_you_havent_received')`
5233. "We respect your privacy and will never share your information." → `t('we_respect_your_privacy_and_wi')`
5234. "We're redirecting you to download the Zion app." → `t('were_redirecting_you_to_downlo')`
5235. "We're sorry this article wasn't helpful. Please contact our support team for further assistance." → `t('were_sorry_this_article_wasnt_')`
5236. "We're taking you to our mobile app page where you can download the app." → `t('were_taking_you_to_our_mobile_')`
5237. "We've added a professional summary and categorized your skills to help you stand out." → `t('weve_added_a_professional_summ')`
5238. "Weak" → `t('weak')`
5239. "Web App" → `t('web_app')`
5240. "Web3 Features" → `t('web3_features')`
5241. "Web3 Focused" → `t('web3_focused')`
5242. "Web3 Identity Handle" → `t('web3_identity_handle')`
5243. "Web3 Login Unavailable" → `t('web3_login_unavailable')`
5244. "Web3 login error:" → `t('web3_login_error')`
5245. "Web3 login failed" → `t('web3_login_failed')`
5246. "Web3 wallet not found" → `t('web3_wallet_not_found')`
5247. "WebSocket closed without opened" → `t('websocket_closed_without_opene')`
5248. "Webhook Activated" → `t('webhook_activated')`
5249. "Webhook Created" → `t('webhook_created')`
5250. "Webhook Deactivated" → `t('webhook_deactivated')`
5251. "Webhook Deleted" → `t('webhook_deleted')`
5252. "Webhook Error: ${err.message}" → `t('webhook_error_errmessage')`
5253. "Webhook Error: Subscription ${invoice.subscription} not found in Stripe for invoice ${invoice.id}" → `t('webhook_error_subscription_inv')`
5254. "Webhook Error: User not found for Stripe customer ID ${subscription.customer}" → `t('webhook_error_user_not_found_f')`
5255. "Webhook Name" → `t('webhook_name')`
5256. "Webhook Payload Format" → `t('webhook_payload_format')`
5257. "Webhook Test Result" → `t('webhook_test_result')`
5258. "Webhook Test Sent" → `t('webhook_test_sent')`
5259. "Webhook Warning: Subscription ${subscription.id} not found in DB for deletion." → `t('webhook_warning_subscription_s')`
5260. "Webhook created successfully" → `t('webhook_created_successfully')`
5261. "Webhook deleted successfully" → `t('webhook_deleted_successfully')`
5262. "Webhook not found" → `t('webhook_not_found')`
5263. "Webhook not found or access denied" → `t('webhook_not_found_or_access_de')`
5264. "Webhook received" → `t('webhook_received')`
5265. "Webhooks" → `t('webhooks')`
5266. "Website" → `t('website')`
5267. "Website Redesign" → `t('website_redesign')`
5268. "Weekly Availability" → `t('weekly_availability')`
5269. "Weighted voting" → `t('weighted_voting')`
5270. "Welcome back" → `t('welcome_back')`
5271. "Welcome back!" → `t('welcome_back')`
5272. "Welcome back, Creator!" → `t('welcome_back_creator')`
5273. "Welcome to Zion" → `t('welcome_to_zion')`
5274. "Welcome to Zion AI Marketplace!" → `t('welcome_to_zion_ai_marketplace')`
5275. "Welcome to Zion AI Marketplace! This guide will walk you through the process of creating and setting up your account.\n\nTo create a new account on Zion AI Marketplace:\n\n1. Click on the" → `t('welcome_to_zion_ai_marketplace')`
5276. "Welcome to Zion AI Marketplace, ${firstName}!" → `t('welcome_to_zion_ai_marketplace')`
5277. "Welcome to the platform. You can now log in." → `t('welcome_to_the_platform_you_ca')`
5278. "What" → `t('what')`
5279. "What Our Users Say" → `t('what_our_users_say')`
5280. "What's Included" → `t('whats_included')`
5281. "What's Included in Every Service" → `t('whats_included_in_every_servic')`
5282. "When a project milestone is approved" → `t('when_a_project_milestone_is_ap')`
5283. "When a talent applies to a job" → `t('when_a_talent_applies_to_a_job')`
5284. "When a talent applies to one of your jobs" → `t('when_a_talent_applies_to_one_o')`
5285. "When disputes can" → `t('when_disputes_can')`
5286. "When someone clicks your link and creates an account, they" → `t('when_someone_clicks_your_link_')`
5287. "When talent is hired for a project" → `t('when_talent_is_hired_for_a_pro')`
5288. "When you create an account you must provide accurate information and keep your login credentials confidential. You are responsible for all activity under your account." → `t('when_you_create_an_account_you')`
5289. "When you hire talent for a project" → `t('when_you_hire_talent_for_a_pro')`
5290. "White-Labeled Platform" → `t('whitelabeled_platform')`
5291. "White-label tenant created!" → `t('whitelabel_tenant_created')`
5292. "Whitepaper + roadmap history" → `t('whitepaper_roadmap_history')`
5293. "Whitepaper Configuration" → `t('whitepaper_configuration')`
5294. "Who can access the dashboard?" → `t('who_can_access_the_dashboard')`
5295. "William Chen" → `t('william_chen')`
5296. "Wishlist" → `t('wishlist')`
5297. "With Zion" → `t('with_zion')`
5298. "Within 1 Month" → `t('within_1_month')`
5299. "Within 1 Week" → `t('within_1_week')`
5300. "Work experience added" → `t('work_experience_added')`
5301. "Work experience deleted" → `t('work_experience_deleted')`
5302. "Work experience updated" → `t('work_experience_updated')`
5303. "Work marketplace incentives" → `t('work_marketplace_incentives')`
5304. "WorkFuturesSimulator.runSimulation" → `t('workfuturessimulatorrunsimulat')`
5305. "WorkFuturesSimulator.useEffect" → `t('workfuturessimulatoruseeffect')`
5306. "Workforce Dev" → `t('workforce_dev')`
5307. "Workforce Development" → `t('workforce_development')`
5308. "Workspace settings" → `t('workspace_settings')`
5309. "Workstation" → `t('workstation')`
5310. "World map" → `t('world_map')`
5311. "Would not work again" → `t('would_not_work_again')`
5312. "Would upload ${files.length} files for dispute ${dispute.id}" → `t('would_upload_fileslength_files')`
5313. "Would work again" → `t('would_work_again')`
5314. "Write a Review" → `t('write_a_review')`
5315. "Write a brief summary about yourself" → `t('write_a_brief_summary_about_yo')`
5316. "Write your post in markdown" → `t('write_your_post_in_markdown')`
5317. "X-Client-Info" → `t('xclientinfo')`
5318. "X-Dashboard-Status" → `t('xdashboardstatus')`
5319. "Year-over-Year Growth" → `t('yearoveryear_growth')`
5320. "Years of Experience" → `t('years_of_experience')`
5321. "Years of experience" → `t('years_of_experience')`
5322. "Yes" → `t('yes')`
5323. "Yes, community contributions help us continually add new languages." → `t('yes_community_contributions_he')`
5324. "Yesterday" → `t('yesterday')`
5325. "You" → `t('you')`
5326. "You are an expert SEO content writer and copywriter." → `t('you_are_an_expert_seo_content_')`
5327. "You are not authorized to manage this transaction" → `t('you_are_not_authorized_to_mana')`
5328. "You are offline. Changes will sync when you are back online." → `t('you_are_offline_changes_will_s')`
5329. "You can configure webhooks in the" → `t('you_can_configure_webhooks_in_')`
5330. "You can mute rooms or disable notifications in your account settings." → `t('you_can_mute_rooms_or_disable_')`
5331. "You do not have permission to access this resource" → `t('you_do_not_have_permission_to_')`
5332. "You don" → `t('you_don')`
5333. "You don't have permission to edit this post." → `t('you_dont_have_permission_to_ed')`
5334. "You downvoted this post" → `t('you_downvoted_this_post')`
5335. "You earn rewards" → `t('you_earn_rewards')`
5336. "You have a new notification" → `t('you_have_a_new_notification')`
5337. "You have already applied to this job" → `t('you_have_already_applied_to_th')`
5338. "You have already registered as a partner." → `t('you_have_already_registered_as')`
5339. "You have already reported this review" → `t('you_have_already_reported_this')`
5340. "You have already submitted a review for this project" → `t('you_have_already_submitted_a_r')`
5341. "You have been successfully logged out" → `t('you_have_been_successfully_log')`
5342. "You haven" → `t('you_haven')`
5343. "You haven't saved any jobs yet." → `t('you_havent_saved_any_jobs_yet')`
5344. "You haven't submitted any applications yet." → `t('you_havent_submitted_any_appli')`
5345. "You haven't submitted any applications yet. Browse available jobs to get started!" → `t('you_havent_submitted_any_appli')`
5346. "You haven't voted on any proposals yet with the connected wallet, or your votes are associated with a platform login that isn't linked to this wallet address on the backend." → `t('you_havent_voted_on_any_propos')`
5347. "You must be logged in to access resumes" → `t('you_must_be_logged_in_to_acces')`
5348. "You must be logged in to access this resource" → `t('you_must_be_logged_in_to_acces')`
5349. "You must be logged in to add a portfolio project" → `t('you_must_be_logged_in_to_add_a')`
5350. "You must be logged in to add certifications" → `t('you_must_be_logged_in_to_add_c')`
5351. "You must be logged in to add education" → `t('you_must_be_logged_in_to_add_e')`
5352. "You must be logged in to add skills" → `t('you_must_be_logged_in_to_add_s')`
5353. "You must be logged in to apply" → `t('you_must_be_logged_in_to_apply')`
5354. "You must be logged in to apply for jobs" → `t('you_must_be_logged_in_to_apply')`
5355. "You must be logged in to create a dispute" → `t('you_must_be_logged_in_to_creat')`
5356. "You must be logged in to create a resume" → `t('you_must_be_logged_in_to_creat')`
5357. "You must be logged in to delete a portfolio project" → `t('you_must_be_logged_in_to_delet')`
5358. "You must be logged in to delete certifications" → `t('you_must_be_logged_in_to_delet')`
5359. "You must be logged in to delete education" → `t('you_must_be_logged_in_to_delet')`
5360. "You must be logged in to delete skills" → `t('you_must_be_logged_in_to_delet')`
5361. "You must be logged in to delete work experience" → `t('you_must_be_logged_in_to_delet')`
5362. "You must be logged in to deploy a contract" → `t('you_must_be_logged_in_to_deplo')`
5363. "You must be logged in to post a job" → `t('you_must_be_logged_in_to_post_')`
5364. "You must be logged in to send a message" → `t('you_must_be_logged_in_to_send_')`
5365. "You must be logged in to set active resume" → `t('you_must_be_logged_in_to_set_a')`
5366. "You must be logged in to submit a review" → `t('you_must_be_logged_in_to_submi')`
5367. "You must be logged in to update a portfolio project" → `t('you_must_be_logged_in_to_updat')`
5368. "You must be logged in to update a resume" → `t('you_must_be_logged_in_to_updat')`
5369. "You must be logged in to update certifications" → `t('you_must_be_logged_in_to_updat')`
5370. "You must be logged in to update education" → `t('you_must_be_logged_in_to_updat')`
5371. "You must be logged in to update work experience" → `t('you_must_be_logged_in_to_updat')`
5372. "You need applications to generate analytics" → `t('you_need_applications_to_gener')`
5373. "You upvoted this post" → `t('you_upvoted_this_post')`
5374. "You're Offline - Zion Tech Marketplace" → `t('youre_offline_zion_tech_market')`
5375. "You've Received a New Project Request" → `t('youve_received_a_new_project_r')`
5376. "YouTube" → `t('youtube')`
5377. "Your Activity" → `t('your_activity')`
5378. "Your Applications" → `t('your_applications')`
5379. "Your Badges" → `t('your_badges')`
5380. "Your Cart" → `t('your_cart')`
5381. "Your Complete Guide to Zion" → `t('your_complete_guide_to_zion')`
5382. "Your Cover Letter" → `t('your_cover_letter')`
5383. "Your Feedback" → `t('your_feedback')`
5384. "Your IT onsite service request has been received. Our team will contact you shortly." → `t('your_it_onsite_service_request')`
5385. "Your Name" → `t('your_name')`
5386. "Your Niche" → `t('your_niche')`
5387. "Your Ranking" → `t('your_ranking')`
5388. "Your Referral Link" → `t('your_referral_link')`
5389. "Your Referrals" → `t('your_referrals')`
5390. "Your Response" → `t('your_response')`
5391. "Your Review" → `t('your_review')`
5392. "Your Rewards" → `t('your_rewards')`
5393. "Your Role" → `t('your_role')`
5394. "Your Vote" → `t('your_vote')`
5395. "Your Webhooks" → `t('your_webhooks')`
5396. "Your Zion Service Profile Is Ready" → `t('your_zion_service_profile_is_r')`
5397. "Your Zion Talent Profile Has Been Enhanced" → `t('your_zion_talent_profile_has_b')`
5398. "Your account has been disabled. Please contact support." → `t('your_account_has_been_disabled')`
5399. "Your application for" → `t('your_application_for')`
5400. "Your certification has been added to your resume" → `t('your_certification_has_been_ad')`
5401. "Your certification has been updated" → `t('your_certification_has_been_up')`
5402. "Your company name" → `t('your_company_name')`
5403. "Your current token balance" → `t('your_current_token_balance')`
5404. "Your edited description has been saved." → `t('your_edited_description_has_be')`
5405. "Your education has been added to your resume" → `t('your_education_has_been_added_')`
5406. "Your education has been updated" → `t('your_education_has_been_update')`
5407. "Your feedback helps build a trustworthy community. It will be visible after moderation." → `t('your_feedback_helps_build_a_tr')`
5408. "Your feedback or suggestion" → `t('your_feedback_or_suggestion')`
5409. "Your full name" → `t('your_full_name')`
5410. "Your interview request has been declined" → `t('your_interview_request_has_bee')`
5411. "Your latest partner referrals" → `t('your_latest_partner_referrals')`
5412. "Your message has been sent to ${profileName}." → `t('your_message_has_been_sent_to_')`
5413. "Your name" → `t('your_name')`
5414. "Your name or brand name" → `t('your_name_or_brand_name')`
5415. "Your next step is to" → `t('your_next_step_is_to')`
5416. "Your note has been added to the project." → `t('your_note_has_been_added_to_th')`
5417. "Your notes have been saved" → `t('your_notes_have_been_saved')`
5418. "Your ongoing work" → `t('your_ongoing_work')`
5419. "Your password has been successfully updated." → `t('your_password_has_been_success')`
5420. "Your payment process was canceled. No charges have been made to your account." → `t('your_payment_process_was_cance')`
5421. "Your personalized talent dashboard with job matches and professional opportunities." → `t('your_personalized_talent_dashb')`
5422. "Your phone number" → `t('your_phone_number')`
5423. "Your portfolio project has been deleted" → `t('your_portfolio_project_has_bee')`
5424. "Your portfolio project has been updated" → `t('your_portfolio_project_has_bee')`
5425. "Your post has been published successfully" → `t('your_post_has_been_published_s')`
5426. "Your post has been updated successfully" → `t('your_post_has_been_updated_suc')`
5427. "Your product has been successfully published on Zion." → `t('your_product_has_been_successf')`
5428. "Your profile has been enhanced with AI. You're now more discoverable to recruiters and companies!" → `t('your_profile_has_been_enhanced')`
5429. "Your profile has been set up successfully." → `t('your_profile_has_been_set_up_s')`
5430. "Your profile has been successfully updated." → `t('your_profile_has_been_successf')`
5431. "Your profile has been updated successfully." → `t('your_profile_has_been_updated_')`
5432. "Your project has been added to your portfolio" → `t('your_project_has_been_added_to')`
5433. "Your recent ZION$ activity" → `t('your_recent_zion_activity')`
5434. "Your referral code has been generated" → `t('your_referral_code_has_been_ge')`
5435. "Your reply has been added to the discussion" → `t('your_reply_has_been_added_to_t')`
5436. "Your request to hire ${requestData.talent.full_name} has been sent successfully." → `t('your_request_to_hire_requestda')`
5437. "Your resume has been created successfully" → `t('your_resume_has_been_created_s')`
5438. "Your resume has been downloaded." → `t('your_resume_has_been_downloade')`
5439. "Your resume information has been updated" → `t('your_resume_information_has_be')`
5440. "Your review has been submitted and is pending approval" → `t('your_review_has_been_submitted')`
5441. "Your review has been updated" → `t('your_review_has_been_updated')`
5442. "Your review will help build a trustworthy community" → `t('your_review_will_help_build_a_')`
5443. "Your search:" → `t('your_search')`
5444. "Your selected resume is now marked as active" → `t('your_selected_resume_is_now_ma')`
5445. "Your service provider profile has been successfully created and published." → `t('your_service_provider_profile_')`
5446. "Your session has expired. Please log in again." → `t('your_session_has_expired_pleas')`
5447. "Your skill has been added to your resume" → `t('your_skill_has_been_added_to_y')`
5448. "Your subscription details and plan information" → `t('your_subscription_details_and_')`
5449. "Your webhook has been created successfully." → `t('your_webhook_has_been_created_')`
5450. "Your work experience has been added to your resume" → `t('your_work_experience_has_been_')`
5451. "Your work experience has been updated" → `t('your_work_experience_has_been_')`
5452. "Zero height – may be broken" → `t('zero_height_may_be_broken')`
5453. "Zero lock-in" → `t('zero_lockin')`
5454. "Zion" → `t('zion')`
5455. "Zion - The Future of Tech & AI Marketplace" → `t('zion_the_future_of_tech_ai_mar')`
5456. "Zion AI Assistant" → `t('zion_ai_assistant')`
5457. "Zion AI Logo Pack" → `t('zion_ai_logo_pack')`
5458. "Zion AI Marketplace" → `t('zion_ai_marketplace')`
5459. "Zion AI Marketplace App" → `t('zion_ai_marketplace_app')`
5460. "Zion AI Team" → `t('zion_ai_team')`
5461. "Zion App Load Test" → `t('zion_app_load_test')`
5462. "Zion Brain" → `t('zion_brain')`
5463. "Zion Brain - Admin" → `t('zion_brain_admin')`
5464. "Zion Expo Livestream" → `t('zion_expo_livestream')`
5465. "Zion Expo Welcome" → `t('zion_expo_welcome')`
5466. "Zion Foundation" → `t('zion_foundation')`
5467. "Zion Founder Course" → `t('zion_founder_course')`
5468. "Zion Global Expo" → `t('zion_global_expo')`
5469. "Zion Global Summit" → `t('zion_global_summit')`
5470. "Zion Governance" → `t('zion_governance')`
5471. "Zion Governance Proposal Library" → `t('zion_governance_proposal_libra')`
5472. "Zion Health" → `t('zion_health')`
5473. "Zion Hire AI - White-labeled AI Recruiting Assistant" → `t('zion_hire_ai_whitelabeled_ai_r')`
5474. "Zion Hire AI Dashboard" → `t('zion_hire_ai_dashboard')`
5475. "Zion Law" → `t('zion_law')`
5476. "Zion Logo" → `t('zion_logo')`
5477. "Zion Logo - Color" → `t('zion_logo_color')`
5478. "Zion Logo - White" → `t('zion_logo_white')`
5479. "Zion Logo Color" → `t('zion_logo_color')`
5480. "Zion Marketplace" → `t('zion_marketplace')`
5481. "Zion Metrics" → `t('zion_metrics')`
5482. "Zion Multiverse Map" → `t('zion_multiverse_map')`
5483. "Zion Notification" → `t('zion_notification')`
5484. "Zion OS Book" → `t('zion_os_book')`
5485. "Zion OS Book Builder" → `t('zion_os_book_builder')`
5486. "Zion OS Instance Deployment" → `t('zion_os_instance_deployment')`
5487. "Zion OS architecture" → `t('zion_os_architecture')`
5488. "Zion OS: Building the Civilization Protocol" → `t('zion_os_building_the_civilizat')`
5489. "Zion Org Chart" → `t('zion_org_chart')`
5490. "Zion Philosophy" → `t('zion_philosophy')`
5491. "Zion Planetary Congress" → `t('zion_planetary_congress')`
5492. "Zion Rewards Program" → `t('zion_rewards_program')`
5493. "Zion Roadmap" → `t('zion_roadmap')`
5494. "Zion Status Page" → `t('zion_status_page')`
5495. "Zion Summit Livestream" → `t('zion_summit_livestream')`
5496. "Zion Support" → `t('zion_support')`
5497. "Zion Swag Pack" → `t('zion_swag_pack')`
5498. "Zion Team" → `t('zion_team')`
5499. "Zion Tech" → `t('zion_tech')`
5500. "Zion Tech Marketplace" → `t('zion_tech_marketplace')`
5501. "Zion Tech Marketplace - Discover Innovative Tech Solutions" → `t('zion_tech_marketplace_discover')`
5502. "Zion Tech Marketplace Quick Start" → `t('zion_tech_marketplace_quick_st')`
5503. "Zion blog" → `t('zion_blog')`
5504. "Zion logo" → `t('zion_logo')`
5505. "Zion on the go" → `t('zion_on_the_go')`
5506. "Zion video call" → `t('zion_video_call')`
5507. "Zion.app provides a unified AI services marketplace connecting businesses with verified AI professionals." → `t('zionapp_provides_a_unified_ai_')`
5508. "ZionGPT Core" → `t('ziongpt_core')`
5509. "ZionGPT Core Reveal" → `t('ziongpt_core_reveal')`
5510. "ZionGPT Model Fork" → `t('ziongpt_model_fork')`
5511. "ZionGPT Models" → `t('ziongpt_models')`
5512. "ZionGPT Prompt Library" → `t('ziongpt_prompt_library')`
5513. "ZionGPT Work Futures Simulator" → `t('ziongpt_work_futures_simulator')`
5514. "ZionGPT upgraded to v1.7 in Egypt" → `t('ziongpt_upgraded_to_v17_in_egy')`
5515. "Zion_Sample_Kit.pdf" → `t('zionsamplekitpdf')`
5516. "Zion’s future as protocol, not platform" → `t('zions_future_as_protocol_not_p')`
5517. "Zone" → `t('zone')`
5518. "Zoom" → `t('zoom')`
5519. "Zoomed view" → `t('zoomed_view')`
5520. "[ContactForm] Message submission successful." → `t('contactform_message_submission')`
5521. "[ContactForm] handleSubmit triggered." → `t('contactform_handlesubmit_trigg')`
5522. "[HydrationErrorBoundary] Hydration mismatch detected, forcing client-side render" → `t('hydrationerrorboundary_hydrati')`
5523. "[INFO] ${message}" → `t('info_message')`
5524. "\nErrors:" → `t('nerrors')`
5525. "\n⚠️  WARNINGS:" → `t('n_warnings')`
5526. "\n✅ Debug test completed successfully!" → `t('n_debug_test_completed_success')`
5527. "a request for hello message" → `t('a_request_for_hello_message')`
5528. "absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl" → `t('absolute_top8_left8_w72_h72_bg')`
5529. "absolute inset-0 bg-black/50 backdrop-blur-sm" → `t('absolute_inset0_bgblack50_back')`
5530. "absolute top-10 left-2 p-1 rounded-full bg-background/70" → `t('absolute_top10_left2_p1_rounde')`
5531. "absolute top-2 left-2 p-1 rounded-full bg-background/70" → `t('absolute_top2_left2_p1_rounded')`
5532. "absolute top-2 right-2 p-1 rounded-full bg-background/70" → `t('absolute_top2_right2_p1_rounde')`
5533. "absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" → `t('absolute_topfull_left0_mt2_w48')`
5534. "absolute z-50 top-full left-0 right-0 w-full mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg max-h-64 overflow-y-auto search-dropdown" → `t('absolute_z50_topfull_left0_rig')`
5535. "add to cart" → `t('add_to_cart')`
5536. "add-to-cart-button" → `t('addtocartbutton')`
5537. "add-to-cart-listing-button" → `t('addtocartlistingbutton')`
5538. "added a deliverable" → `t('added_a_deliverable')`
5539. "address-level2" → `t('addresslevel2')`
5540. "adds active classes when pathname matches" → `t('adds_active_classes_when_pathn')`
5541. "adds outlines in development" → `t('adds_outlines_in_development')`
5542. "ai-research-engineer" → `t('airesearchengineer')`
5543. "ai-search" → `t('aisearch')`
5544. "ai-search error" → `t('aisearch_error')`
5545. "allows user to login and redirect to marketplace" → `t('allows_user_to_login_and_redir')`
5546. "already registered" → `t('already_registered')`
5547. "applies minimum rating filter" → `t('applies_minimum_rating_filter')`
5548. "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" → `t('aspectsquare_h4_w4_roundedfull')`
5549. "auth.login" → `t('authlogin')`
5550. "auto fill error" → `t('auto_fill_error')`
5551. "back online" → `t('back_online')`
5552. "backdrop-blur-sm bg-gray-200/50" → `t('backdropblursm_bggray20050')`
5553. "backup-appliance-1" → `t('backupappliance1')`
5554. "bg-background" → `t('bgbackground')`
5555. "bg-background text-foreground/80 border-primary/10" → `t('bgbackground_textforeground80_')`
5556. "bg-background text-white" → `t('bgbackground_textwhite')`
5557. "bg-background text-white py-12" → `t('bgbackground_textwhite_py12')`
5558. "bg-background/80 backdrop-blur-sm" → `t('bgbackground80_backdropblursm')`
5559. "bg-background/95 backdrop-blur-sm border shadow-lg" → `t('bgbackground95_backdropblursm_')`
5560. "bg-background/95 backdrop-blur-sm border shadow-lg max-h-96 overflow-y-auto" → `t('bgbackground95_backdropblursm_')`
5561. "bg-card/70 backdrop-blur-md border border-primary/10 sm:border-primary/20 rounded-lg overflow-hidden flex ${isGrid ?" → `t('bgcard70_backdropblurmd_border')`
5562. "bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ?" → `t('bgzionbluedark_borderzionbluel')`
5563. "bg-zion-blue-dark/50 backdrop-blur-sm rounded-2xl border border-zion-blue-light p-6 mb-8" → `t('bgzionbluedark50_backdropblurs')`
5564. "bg-zion-blue-light/80 backdrop-blur-md rounded-lg border border-zion-cyan/20 p-8 text-center" → `t('bgzionbluelight80_backdropblur')`
5565. "border border-zion-blue-light bg-zion-blue-dark/80 backdrop-blur-sm w-full max-w-md" → `t('border_borderzionbluelight_bgz')`
5566. "buy now full checkout" → `t('buy_now_full_checkout')`
5567. "calls next with 401 on bad credentials" → `t('calls_next_with_401_on_bad_cre')`
5568. "calls next with 403 on inactive account" → `t('calls_next_with_403_on_inactiv')`
5569. "can register a new user" → `t('can_register_a_new_user')`
5570. "cancels debounce on unmount" → `t('cancels_debounce_on_unmount')`
5571. "cannot continue without selecting a service" → `t('cannot_continue_without_select')`
5572. "cart badge" → `t('cart_badge')`
5573. "cart page loads" → `t('cart_page_loads')`
5574. "cart persistence" → `t('cart_persistence')`
5575. "cart.subtotal" → `t('cartsubtotal')`
5576. "cat-${filter.value}" → `t('catfiltervalue')`
5577. "categories.it_onsite_services" → `t('categoriesitonsiteservices')`
5578. "categories.services" → `t('categoriesservices')`
5579. "checkout.session.completed" → `t('checkoutsessioncompleted')`
5580. "clears cart" → `t('clears_cart')`
5581. "clears error message when form is resubmitted" → `t('clears_error_message_when_form')`
5582. "clicking Sign Up navigates to /signup" → `t('clicking_sign_up_navigates_to_')`
5583. "client-profile" → `t('clientprofile')`
5584. "community create post auth redirect" → `t('community_create_post_auth_red')`
5585. "community, forum, discussion, create post, new thread" → `t('community_forum_discussion_cre')`
5586. "community, forum, discussion, edit post" → `t('community_forum_discussion_edi')`
5587. "community, forum, profile, user profile, ${user.name}" → `t('community_forum_profile_user_p')`
5588. "complete-profile" → `t('completeprofile')`
5589. "contact-publisher-title" → `t('contactpublishertitle')`
5590. "create-account" → `t('createaccount')`
5591. "create-account-button" → `t('createaccountbutton')`
5592. "create-checkout" → `t('createcheckout')`
5593. "create-new-post-button" → `t('createnewpostbutton')`
5594. "create-shared-whitepaper" → `t('createsharedwhitepaper')`
5595. "create-shared-whitepaper: handles Supabase insert error" → `t('createsharedwhitepaper_handles')`
5596. "create-shared-whitepaper: handles missing required data" → `t('createsharedwhitepaper_handles')`
5597. "create-shared-whitepaper: successful creation" → `t('createsharedwhitepaper_success')`
5598. "created a new milestone" → `t('created_a_new_milestone')`
5599. "creates account and goes to dashboard" → `t('creates_account_and_goes_to_da')`
5600. "custom-upload" → `t('customupload')`
5601. "dashboard-header" → `t('dashboardheader')`
5602. "dbRecordId is not defined in exec callback" → `t('dbrecordid_is_not_defined_in_e')`
5603. "directly navigates to a talent profile page and checks the heading" → `t('directly_navigates_to_a_talent')`
5604. "displays equipment info" → `t('displays_equipment_info')`
5605. "does not add active classes when pathname differs" → `t('does_not_add_active_classes_wh')`
5606. "e.g. Professional Web Design Services" → `t('eg_professional_web_design_ser')`
5607. "equipment recommendation error" → `t('equipment_recommendation_error')`
5608. "equipment-${filterCategory}-${showRecommended}" → `t('equipmentfiltercategoryshowrec')`
5609. "error messages guide user to correct configuration" → `t('error_messages_guide_user_to_c')`
5610. "error-alert" → `t('erroralert')`
5611. "error-message" → `t('errormessage')`
5612. "errors.access_denied" → `t('errorsaccessdenied')`
5613. "errors.failed_to_copy" → `t('errorsfailedtocopy')`
5614. "errors.forgot_password_prompt" → `t('errorsforgotpasswordprompt')`
5615. "errors.go_to_dashboard" → `t('errorsgotodashboard')`
5616. "errors.go_to_marketplace" → `t('errorsgotomarketplace')`
5617. "errors.login_different_account" → `t('errorslogindifferentaccount')`
5618. "errors.no_permission" → `t('errorsnopermission')`
5619. "errors.or_return_home" → `t('errorsorreturnhome')`
5620. "errors.page_not_found" → `t('errorspagenotfound')`
5621. "errors.payment_success_message" → `t('errorspaymentsuccessmessage')`
5622. "errors.payment_success_title" → `t('errorspaymentsuccesstitle')`
5623. "errors.reset_password" → `t('errorsresetpassword')`
5624. "errors.return_home" → `t('errorsreturnhome')`
5625. "escrow-service error" → `t('escrowservice_error')`
5626. "explainer_copy_1.txt" → `t('explainercopy1txt')`
5627. "facebook button triggers NextAuth sign-in" → `t('facebook_button_triggers_nexta')`
5628. "fallback-${timestamp}" → `t('fallbacktimestamp')`
5629. "feature recommendation error" → `t('feature_recommendation_error')`
5630. "fetch profile error:" → `t('fetch_profile_error')`
5631. "fetch-error-alert" → `t('fetcherroralert')`
5632. "fetches and displays profile name" → `t('fetches_and_displays_profile_n')`
5633. "filter-button" → `t('filterbutton')`
5634. "filters suggestions only after debounce timeout" → `t('filters_suggestions_only_after')`
5635. "fixed top-4 left-4 z-[102] p-3 bg-background border border-border rounded-lg shadow-lg text-xs space-y-2 max-w-sm" → `t('fixed_top4_left4_z102_p3_bgbac')`
5636. "flex flex-col h-screen bg-background border-r border-border shrink-0 w-64 overflow-y-auto transition-all duration-200" → `t('flex_flexcol_hscreen_bgbackgro')`
5637. "flex flex-col min-h-screen bg-background" → `t('flex_flexcol_minhscreen_bgback')`
5638. "flex min-h-screen bg-background" → `t('flex_minhscreen_bgbackground')`
5639. "form.setError(" → `t('formseterror')`
5640. "function balanceOf(address owner) view returns (uint256)" → `t('function_balanceofaddress_owne')`
5641. "general.cancel" → `t('generalcancel')`
5642. "general.save" → `t('generalsave')`
5643. "general.search" → `t('generalsearch')`
5644. "generate-whitepaper: handles missing distribution information" → `t('generatewhitepaper_handles_mis')`
5645. "generate-whitepaper: successful generation with basic data" → `t('generatewhitepaper_successful_')`
5646. "generate-whitepaper: successful generation with distributionData" → `t('generatewhitepaper_successful_')`
5647. "generateAuth0Secret creates valid secret" → `t('generateauth0secret_creates_va')`
5648. "get-section-suggestions: successful suggestion generation" → `t('getsectionsuggestions_successf')`
5649. "get-shared-whitepaper" → `t('getsharedwhitepaper')`
5650. "get-shared-whitepaper: handles missing ID" → `t('getsharedwhitepaper_handles_mi')`
5651. "get-shared-whitepaper: handles other Supabase errors" → `t('getsharedwhitepaper_handles_ot')`
5652. "get-shared-whitepaper: successful fetch" → `t('getsharedwhitepaper_successful')`
5653. "gh issue create --title" → `t('gh_issue_create_title')`
5654. "gh pr create --title" → `t('gh_pr_create_title')`
5655. "global-services" → `t('globalservices')`
5656. "go-back-btn" → `t('gobackbtn')`
5657. "google button triggers NextAuth sign-in" → `t('google_button_triggers_nextaut')`
5658. "google oauth callback" → `t('google_oauth_callback')`
5659. "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg" → `t('group_toast_grouptoasterbgback')`
5660. "guest-address" → `t('guestaddress')`
5661. "h-4 w-4 ${isSaved ?" → `t('h4_w4_issaved_')`
5662. "h-5 w-5 ${isSaved ?" → `t('h5_w5_issaved_')`
5663. "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring" → `t('h8_wfull_bgbackground_shadowno')`
5664. "handles other errors" → `t('handles_other_errors')`
5665. "handles server errors without uncaught exceptions" → `t('handles_server_errors_without_')`
5666. "handles validation error" → `t('handles_validation_error')`
5667. "has been submitted for legal review. You can view it here: ${sharableLink}. Submitted by: ${submittedBy ||" → `t('has_been_submitted_for_legal_r')`
5668. "hides skeleton once services load" → `t('hides_skeleton_once_services_l')`
5669. "home page error handling" → `t('home_page_error_handling')`
5670. "home-greeting" → `t('homegreeting')`
5671. "home-link" → `t('homelink')`
5672. "home.all_features_title" → `t('homeallfeaturestitle')`
5673. "home.browse_marketplace" → `t('homebrowsemarketplace')`
5674. "home.categories_subtitle" → `t('homecategoriessubtitle')`
5675. "home.categories_title" → `t('homecategoriestitle')`
5676. "home.explore_tools" → `t('homeexploretools')`
5677. "home.featured_services" → `t('homefeaturedservices')`
5678. "home.features_heading" → `t('homefeaturesheading')`
5679. "home.features_subheading" → `t('homefeaturessubheading')`
5680. "home.header_tagline" → `t('homeheadertagline')`
5681. "home.hero_subtitle" → `t('homeherosubtitle')`
5682. "home.hero_title" → `t('homeherotitle')`
5683. "home.how_it_works_subtitle" → `t('homehowitworkssubtitle')`
5684. "home.how_it_works_title" → `t('homehowitworkstitle')`
5685. "home.no_categories_desc" → `t('homenocategoriesdesc')`
5686. "home.no_categories_support" → `t('homenocategoriessupport')`
5687. "home.no_categories_title" → `t('homenocategoriestitle')`
5688. "home.quick_access_subtitle" → `t('homequickaccesssubtitle')`
5689. "home.quick_access_title" → `t('homequickaccesstitle')`
5690. "home.seo_description" → `t('homeseodescription')`
5691. "home.seo_title" → `t('homeseotitle')`
5692. "home.tool_ai_matcher" → `t('hometoolaimatcher')`
5693. "home.tool_ai_matcher_desc" → `t('hometoolaimatcherdesc')`
5694. "home.tool_analytics" → `t('hometoolanalytics')`
5695. "home.tool_analytics_desc" → `t('hometoolanalyticsdesc')`
5696. "home.tool_chat_desc" → `t('hometoolchatdesc')`
5697. "home.tool_equipment" → `t('hometoolequipment')`
5698. "home.tool_equipment_desc" → `t('hometoolequipmentdesc')`
5699. "home.tool_mobile_app" → `t('hometoolmobileapp')`
5700. "home.tool_mobile_app_desc" → `t('hometoolmobileappdesc')`
5701. "home.tool_services" → `t('hometoolservices')`
5702. "home.tool_services_desc" → `t('hometoolservicesdesc')`
5703. "home.tool_talent" → `t('hometooltalent')`
5704. "home.tool_talent_desc" → `t('hometooltalentdesc')`
5705. "home.tools_description" → `t('hometoolsdescription')`
5706. "home.view_all_categories" → `t('homeviewallcategories')`
5707. "includes home navigation link" → `t('includes_home_navigation_link')`
5708. "invalid credentials show error" → `t('invalid_credentials_show_error')`
5709. "invalid login credentials" → `t('invalid_login_credentials')`
5710. "jobs.submitting" → `t('jobssubmitting')`
5711. "ll have access to the marketplace and can start browsing or listing services based on your account type." → `t('ll_have_access_to_the_marketpl')`
5712. "loading loading-ring loading-lg" → `t('loading_loadingring_loadinglg')`
5713. "loading-${i}" → `t('loadingi')`
5714. "loading-indicator" → `t('loadingindicator')`
5715. "loading..." → `t('loading')`
5716. "loads orders and shows download link" → `t('loads_orders_and_shows_downloa')`
5717. "loads services and advances to step 2" → `t('loads_services_and_advances_to')`
5718. "login flow" → `t('login_flow')`
5719. "login link navigation" → `t('login_link_navigation')`
5720. "login page contains Sign In" → `t('login_page_contains_sign_in')`
5721. "login to reach marketplace" → `t('login_to_reach_marketplace')`
5722. "login-link" → `t('loginlink')`
5723. "loginUser controller" → `t('loginuser_controller')`
5724. "loginUser service" → `t('loginuser_service')`
5725. "loginWithWallet error:" → `t('loginwithwallet_error')`
5726. "logout flow" → `t('logout_flow')`
5727. "logs out and shows login link" → `t('logs_out_and_shows_login_link')`
5728. "m experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance." → `t('m_experiencing_technical_diffi')`
5729. "m experiencing technical difficulties. Please try again later." → `t('m_experiencing_technical_diffi')`
5730. "m here to help with questions about Zion" → `t('m_here_to_help_with_questions_')`
5731. "m here to help you with questions about Zion. What can I assist you with today?" → `t('m_here_to_help_you_with_questi')`
5732. "mailchimp-sync-new-users error" → `t('mailchimpsyncnewusers_error')`
5733. "marketplace-loading" → `t('marketplaceloading')`
5734. "marketplace-next-app" → `t('marketplacenextapp')`
5735. "marketplace-search-input" → `t('marketplacesearchinput')`
5736. "max-h-10 max-w-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter invert" → `t('maxh10_maxwfull_opacity70_grou')`
5737. "max-h-52 overflow-y-auto bg-background p-3 rounded text-xs font-mono" → `t('maxh52_overflowyauto_bgbackgro')`
5738. "mb-4 p-3 bg-background rounded-full" → `t('mb4_p3_bgbackground_roundedful')`
5739. "md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-t border-primary/20" → `t('mdhidden_fixed_bottom0_left0_r')`
5740. "min-h-screen bg-background" → `t('minhscreen_bgbackground')`
5741. "min-h-screen bg-background p-6" → `t('minhscreen_bgbackground_p6')`
5742. "min-h-screen bg-background prose lg:prose-xl font-serif mx-auto p-8" → `t('minhscreen_bgbackground_prose_')`
5743. "min-h-screen bg-background py-24" → `t('minhscreen_bgbackground_py24')`
5744. "ml-1 rounded-full hover:bg-background/20 p-1" → `t('ml1_roundedfull_hoverbgbackgro')`
5745. "ml-1 rounded-full p-0.5 hover:bg-background/20" → `t('ml1_roundedfull_p05_hoverbgbac')`
5746. "mobile-${contact.id}" → `t('mobilecontactid')`
5747. "mobile-audio-${contact.id}" → `t('mobileaudiocontactid')`
5748. "mobile-talent-search" → `t('mobiletalentsearch')`
5749. "mobile-talent-search-help" → `t('mobiletalentsearchhelp')`
5750. "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" → `t('mt2_ringoffsetbackground_focus')`
5751. "nav.cart" → `t('navcart')`
5752. "navigates to login when unauthenticated" → `t('navigates_to_login_when_unauth')`
5753. "next-cloudinary" → `t('nextcloudinary')`
5754. "next/*" → `t('next')`
5755. "next/dynamic" → `t('nextdynamic')`
5756. "next/head" → `t('nexthead')`
5757. "next/image" → `t('nextimage')`
5758. "next/image-types/global" → `t('nextimagetypesglobal')`
5759. "next/link" → `t('nextlink')`
5760. "next/navigation" → `t('nextnavigation')`
5761. "next/navigation-types/compat/navigation" → `t('nextnavigationtypescompatnavig')`
5762. "next/router" → `t('nextrouter')`
5763. "notify-legal-team: successful logging with optional params missing" → `t('notifylegalteam_successful_log')`
5764. "notify-legal-team: successful notification logging with all params" → `t('notifylegalteam_successful_not')`
5765. "np-video-edit-suite" → `t('npvideoeditsuite')`
5766. "opening dropdown does not show error toast" → `t('opening_dropdown_does_not_show')`
5767. "p-4 border rounded-md bg-background flex flex-col justify-between" → `t('p4_border_roundedmd_bgbackgrou')`
5768. "page-error-boundary" → `t('pageerrorboundary')`
5769. "partner.dashboard_desc" → `t('partnerdashboarddesc')`
5770. "partner.dashboard_title" → `t('partnerdashboardtitle')`
5771. "partner.login" → `t('partnerlogin')`
5772. "partner.login_unavailable" → `t('partnerloginunavailable')`
5773. "partner.steps.share_desc" → `t('partnerstepssharedesc')`
5774. "partner.steps.share_title" → `t('partnerstepssharetitle')`
5775. "path on successful registration if provided" → `t('path_on_successful_registratio')`
5776. "payment-success-message" → `t('paymentsuccessmessage')`
5777. "platform-credit" → `t('platformcredit')`
5778. "product-card-error" → `t('productcarderror')`
5779. "profile-link" → `t('profilelink')`
5780. "profile-name" → `t('profilename')`
5781. "provides comprehensive error recovery options" → `t('provides_comprehensive_error_r')`
5782. "provides go back functionality" → `t('provides_go_back_functionality')`
5783. "publish product, sell online, digital marketplace, AI tools, tech services" → `t('publish_product_sell_online_di')`
5784. "py-12 bg-background" → `t('py12_bgbackground')`
5785. "py-12 bg-background text-center" → `t('py12_bgbackground_textcenter')`
5786. "py-12 bg-background text-foreground" → `t('py12_bgbackground_textforegrou')`
5787. "py-16 bg-background" → `t('py16_bgbackground')`
5788. "quote_form.labels.additional_details" → `t('quoteformlabelsadditionaldetai')`
5789. "quote_form.submit" → `t('quoteformsubmit')`
5790. "quote_form.submit_another" → `t('quoteformsubmitanother')`
5791. "re sorry this article wasn" → `t('re_sorry_this_article_wasn')`
5792. "react-error-boundary" → `t('reacterrorboundary')`
5793. "react-i18next" → `t('reacti18next')`
5794. "recent-${search}" → `t('recentsearch')`
5795. "recovers after a transient error" → `t('recovers_after_a_transient_err')`
5796. "register and login flow" → `t('register_and_login_flow')`
5797. "register auto login redirect" → `t('register_auto_login_redirect')`
5798. "register flow" → `t('register_flow')`
5799. "register route shows signup form" → `t('register_route_shows_signup_fo')`
5800. "registers new user" → `t('registers_new_user')`
5801. "registers, logs in, adds to cart and completes checkout" → `t('registers_logs_in_adds_to_cart')`
5802. "renders quote wizard without runtime errors" → `t('renders_quote_wizard_without_r')`
5803. "renders single navbar on SearchPage" → `t('renders_single_navbar_on_searc')`
5804. "renders single navbar on ServicesPage" → `t('renders_single_navbar_on_servi')`
5805. "resume-search" → `t('resumesearch')`
5806. "returns 201 on success" → `t('returns_201_on_success')`
5807. "returns a list of services" → `t('returns_a_list_of_services')`
5808. "returns data on success" → `t('returns_data_on_success')`
5809. "returns error on 401" → `t('returns_error_on_401')`
5810. "returns hello message" → `t('returns_hello_message')`
5811. "returns token and user on success" → `t('returns_token_and_user_on_succ')`
5812. "s a background issue
        autoHideDuration: 5000,
      });
    } catch (e) {
      logError(e, { context:" → `t('s_a_background_issue_autohided')`
5813. "s a link to my proposal: ${proposalLink}`;
      }
      
      // Add info about attached resume if available
      if (selectedResume) {
        fullMessage += `\n\nI" → `t('s_a_link_to_my_proposal_propos')`
5814. "s an auth error (401/403) and the user is on a public page, don" → `t('s_an_auth_error_401403_and_the')`
5815. "s check for the data.error message if provided.
    cy.contains(" → `t('s_check_for_the_dataerror_mess')`
5816. "s main authentication, or this feature might require wallet-based vote fetching in the future if platform login is separate." → `t('s_main_authentication_or_this_')`
5817. "s not submitting yet
            style={{
              padding:" → `t('s_not_submitting_yet_style_pad')`
5818. "s password-related
          if (errorMsg.toLowerCase().includes(" → `t('s_passwordrelated_if_errormsgt')`
5819. "s root error area
    expect(screen.getByText(" → `t('s_root_error_area_expectscreen')`
5820. "s stack or name if they exist (though less likely for non-Errors)
      errorToSend.stack = (error as any)?.stack || errorToSend.stack;
      errorToSend.name = (error as any)?.name || errorToSend.name;
    } catch {
      // ignore if properties can" → `t('s_stack_or_name_if_they_exist_')`
5821. "search suggestions appear below the nav" → `t('search_suggestions_appear_belo')`
5822. "search-${routeKey}-${router.asPath}" → `t('searchroutekeyrouteraspath')`
5823. "search-bar" → `t('searchbar')`
5824. "search-dropdown" → `t('searchdropdown')`
5825. "search-suggestions" → `t('searchsuggestions')`
5826. "selection-error" → `t('selectionerror')`
5827. "server error" → `t('server_error')`
5828. "servererror@example.com" → `t('servererrorexamplecom')`
5829. "service-profile-enhancer" → `t('serviceprofileenhancer')`
5830. "services exist" → `t('services_exist')`
5831. "services-error" → `t('serviceserror')`
5832. "services-list" → `t('serviceslist')`
5833. "services-loading" → `t('servicesloading')`
5834. "set-public-status: handles other Supabase errors" → `t('setpublicstatus_handles_other_')`
5835. "set-public-status: successfully updates to private" → `t('setpublicstatus_successfully_u')`
5836. "set-public-status: successfully updates to public" → `t('setpublicstatus_successfully_u')`
5837. "set-shared-whitepaper-public-status" → `t('setsharedwhitepaperpublicstatu')`
5838. "should allow a user to request a password reset and see a success message" → `t('should_allow_a_user_to_request')`
5839. "should allow unauthenticated users to view the home page" → `t('should_allow_unauthenticated_u')`
5840. "should call logError if axios returns an error" → `t('should_call_logerror_if_axios_')`
5841. "should detect different types of configuration errors" → `t('should_detect_different_types_')`
5842. "should display global error fallback for a render error and allow retry" → `t('should_display_global_error_fa')`
5843. "should display global error fallback for an error thrown on mount and allow retry" → `t('should_display_global_error_fa')`
5844. "should display loading state while redirecting" → `t('should_display_loading_state_w')`
5845. "should handle Auth0 configuration errors specifically" → `t('should_handle_auth0_configurat')`
5846. "should handle login flow end-to-end" → `t('should_handle_login_flow_endto')`
5847. "should have proper loading spinner" → `t('should_have_proper_loading_spi')`
5848. "should load the home page without runtime errors and display content" → `t('should_load_the_home_page_with')`
5849. "should load the main page (e.g., Home) without the global error boundary being visible" → `t('should_load_the_main_page_eg_h')`
5850. "should maintain search state when navigating back" → `t('should_maintain_search_state_w')`
5851. "should not expose sensitive information in redirect" → `t('should_not_expose_sensitive_in')`
5852. "should not have horizontal scroll on mobile and search input should be visible" → `t('should_not_have_horizontal_scr')`
5853. "should provide clear fallback instructions" → `t('should_provide_clear_fallback_')`
5854. "should provide fallback link if redirect fails" → `t('should_provide_fallback_link_i')`
5855. "should provide manual fallback if JavaScript is disabled" → `t('should_provide_manual_fallback')`
5856. "should provide support contact information" → `t('should_provide_support_contact')`
5857. "should redirect to /auth/login without query parameters" → `t('should_redirect_to_authlogin_w')`
5858. "should redirect to order confirmation page on successful payment" → `t('should_redirect_to_order_confi')`
5859. "should register a new user, auto-login, and redirect to marketplace" → `t('should_register_a_new_user_aut')`
5860. "should render children when no error occurs" → `t('should_render_children_when_no')`
5861. "should show appropriate loading message" → `t('should_show_appropriate_loadin')`
5862. "should show generic error toast for 500 server error" → `t('should_show_generic_error_toas')`
5863. "should show password mismatch error if passwords do not match" → `t('should_show_password_mismatch_')`
5864. "should show search suggestions when typing on home page" → `t('should_show_search_suggestions')`
5865. "should successfully register, store token, update context, and redirect to home" → `t('should_successfully_register_s')`
5866. "should support Spanish login button" → `t('should_support_spanish_login_b')`
5867. "should use replace() instead of push() to prevent back button issues" → `t('should_use_replace_instead_of_')`
5868. "should verify all login routes point to Auth0" → `t('should_verify_all_login_routes')`
5869. "should verify login links use Auth0 route" → `t('should_verify_login_links_use_')`
5870. "shows Sign In text" → `t('shows_sign_in_text')`
5871. "shows alert and logs error on 500" → `t('shows_alert_and_logs_error_on_')`
5872. "shows cart heading" → `t('shows_cart_heading')`
5873. "shows error and allows retry" → `t('shows_error_and_allows_retry')`
5874. "shows error banner on failed login" → `t('shows_error_banner_on_failed_l')`
5875. "shows error on invalid password" → `t('shows_error_on_invalid_passwor')`
5876. "shows error toast and alert on general failure" → `t('shows_error_toast_and_alert_on')`
5877. "shows error toast on server 400" → `t('shows_error_toast_on_server_40')`
5878. "shows fallback and logs error" → `t('shows_fallback_and_logs_error')`
5879. "shows fallback banner when server-side props fail" → `t('shows_fallback_banner_when_ser')`
5880. "shows localized error message" → `t('shows_localized_error_message')`
5881. "shows login modal when not authenticated" → `t('shows_login_modal_when_not_aut')`
5882. "shows server error on 401 response" → `t('shows_server_error_on_401_resp')`
5883. "shows toast on failed login" → `t('shows_toast_on_failed_login')`
5884. "shows validation errors" → `t('shows_validation_errors')`
5885. "sign up flow" → `t('sign_up_flow')`
5886. "signup error response structure" → `t('signup_error_response_structur')`
5887. "signup success response structure" → `t('signup_success_response_struct')`
5888. "signup to checkout flow" → `t('signup_to_checkout_flow')`
5889. "signup-submit" → `t('signupsubmit')`
5890. "slide-editor" → `t('slideeditor')`
5891. "slide-editor p-4 bg-gray-100 rounded-lg" → `t('slideeditor_p4_bggray100_round')`
5892. "social login buttons redirect through NextAuth" → `t('social_login_buttons_redirect_')`
5893. "some error" → `t('some_error')`
5894. "sort-select" → `t('sortselect')`
5895. "spinner disappears after loading" → `t('spinner_disappears_after_loadi')`
5896. "sticky bottom-0 bg-background border-t border-border p-2" → `t('sticky_bottom0_bgbackground_bo')`
5897. "sticky top-0 z-10 bg-background border-b border-border" → `t('sticky_top0_z10_bgbackground_b')`
5898. "sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border" → `t('sticky_top0_z40_bgbackground80')`
5899. "sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" → `t('sticky_top0_z50_wfull_borderb_')`
5900. "sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md" → `t('sticky_top0_z50_wfull_borderb_')`
5901. "sticky top-0 z-70 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md" → `t('sticky_top0_z70_wfull_borderb_')`
5902. "street-address" → `t('streetaddress')`
5903. "success-alert" → `t('successalert')`
5904. "success-step" → `t('successstep')`
5905. "successful registration returns 201 with token and user" → `t('successful_registration_return')`
5906. "successful send closes modal and shows toast" → `t('successful_send_closes_modal_a')`
5907. "t had a chance to ${nextAction ||" → `t('t_had_a_chance_to_nextaction_')`
5908. "t have permission to cancel this interview" → `t('t_have_permission_to_cancel_th')`
5909. "t let it stop the script.
    // The main error (e.g., patch apply failure) is more critical.
  }
}

function extractFilePaths(text) {
  if (!text) return [];
  const stricterRegex = /([\w.-]+\/)*[\w.-]+\.\w+/g;
  const paths = text.match(stricterRegex);
  return paths ? [...new Set(paths)] : [];
}

async function fetchFileContent(octokitInstance, owner, repo, filePath) {
  try {
    const response = await octokitInstance.rest.repos.getContent({
      owner,
      repo,
      path: filePath,
    });
    if (response.data.type ===" → `t('t_let_it_stop_the_script_the_m')`
5910. "t load the equipment details. Please try again." → `t('t_load_the_equipment_details_p')`
5911. "t process your request. Please try again." → `t('t_process_your_request_please_')`
5912. "t toast.
    // For example, you might want to ensure the error object has a specific structure
    // if it doesn" → `t('t_toast_for_example_you_might_')`
5913. "t voted on any proposals yet with the connected wallet, or your votes are associated with a platform login that isn" → `t('t_voted_on_any_proposals_yet_w')`
5914. "talent-loading" → `t('talentloading')`
5915. "talent-profile" → `t('talentprofile')`
5916. "talent-profile-enhancer" → `t('talentprofileenhancer')`
5917. "talent-profile-skeleton" → `t('talentprofileskeleton')`
5918. "talent-profiles" → `t('talentprofiles')`
5919. "talent-search" → `t('talentsearch')`
5920. "talent-search-help" → `t('talentsearchhelp')`
5921. "test checkout purchase" → `t('test_checkout_purchase')`
5922. "test-auth-token-next" → `t('testauthtokennext')`
5923. "test-error-id" → `t('testerrorid')`
5924. "toggle state updates and class applied" → `t('toggle_state_updates_and_class')`
5925. "toggling view updates container class" → `t('toggling_view_updates_containe')`
5926. "translation.edit" → `t('translationedit')`
5927. "translation.saved" → `t('translationsaved')`
5928. "translation.search_placeholder" → `t('translationsearchplaceholder')`
5929. "translation.translation_success" → `t('translationtranslationsuccess')`
5930. "translation.unknown_error" → `t('translationunknownerror')`
5931. "updated milestone details" → `t('updated_milestone_details')`
5932. "useCart must be used within a CartProvider" → `t('usecart_must_be_used_within_a_')`
5933. "useError must be used within ErrorProvider" → `t('useerror_must_be_used_within_e')`
5934. "useFeedback must be used within FeedbackProvider" → `t('usefeedback_must_be_used_withi')`
5935. "useGlobalErrorHandler must be used within a GlobalErrorHandler" → `t('useglobalerrorhandler_must_be_')`
5936. "user can logout via avatar menu" → `t('user_can_logout_via_avatar_men')`
5937. "user can signup, login, checkout and read blog" → `t('user_can_signup_login_checkout')`
5938. "valid credentials navigates to dashboard" → `t('valid_credentials_navigates_to')`
5939. "ve received your message and will get back to you soon." → `t('ve_received_your_message_and_w')`
5940. "visiting /register shows register form and sign-in link works" → `t('visiting_register_shows_regist')`
5941. "w-4 h-4 mr-2 ${isLoading ?" → `t('w4_h4_mr2_isloading_')`
5942. "w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.message ?" → `t('wfull_roundedmd_bgzionbluedark')`
5943. "w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ?" → `t('wfull_roundedmd_bgzionbluedark')`
5944. "w-full rounded-md bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ?" → `t('wfull_roundedmd_bgzionbluedark')`
5945. "wallet dashboard" → `t('wallet_dashboard')`
5946. "wallet-address" → `t('walletaddress')`
5947. "webhook-warning-shown" → `t('webhookwarningshown')`
5948. "withErrorBoundary(${Component.displayName || Component.name})" → `t('witherrorboundarycomponentdisp')`
5949. "z-10 ring-2 ring-ring ring-offset-background" → `t('z10_ring2_ringring_ringoffsetb')`
5950. "zion-gpt error: ${gptError.message}" → `t('ziongpt_error_gpterrormessage')`
5951. "zion-gpt error: GPT failed" → `t('ziongpt_error_gpt_failed')`
5952. "zion-gpt error: GPT suggestions failed" → `t('ziongpt_error_gpt_suggestions_')`
5953. "zion_backup.pdf" → `t('zionbackuppdf')`
5954. "zion_backup.zip" → `t('zionbackupzip')`
5955. "{ profile: TalentProfile }" → `t('_profile_talentprofile_')`
5956. "{searchQuery}" → `t('searchquery')`
5957. "{searchTerm}" → `t('searchterm')`
5958. "} added" → `t('_added')`
5959. "} alt={activity.created_by_profile?.display_name ||" → `t('_altactivitycreatedbyprofiledi')`
5960. "} successfully." → `t('_successfully')`
5961. "}. The tone should be informative and engaging." → `t('_the_tone_should_be_informativ')`
5962. "}: ${error.message}" → `t('_errormessage')`
5963. "• ${error.route}: ${error.error}" → `t('_errorroute_errorerror')`
5964. "• ${error}" → `t('_error')`
5965. "• ${result.route}: ${result.error} (${result.type})" → `t('_resultroute_resulterror_resul')`
5966. "• ${warning}" → `t('_warning')`
5967. "⚠️  WARNINGS:" → `t('_warnings')`
5968. "⚠️ Development Environment Warnings:\n" → `t('_development_environment_warni')`
5969. "⚠️ Production Environment Warnings:\n" → `t('_production_environment_warnin')`
5970. "✅ Checkout session created successfully! In production, you would be redirected to Stripe." → `t('_checkout_session_created_succ')`
5971. "✅ Payment intent created successfully!" → `t('_payment_intent_created_succes')`
5972. "❌ Checkout test failed. Check console for details." → `t('_checkout_test_failed_check_co')`
5973. "❌ ERRORS (must be fixed):" → `t('_errors_must_be_fixed')`
5974. "❌ Error processing ${filePath}:" → `t('_error_processing_filepath')`
5975. "❌ Execution error: ${error.message}" → `t('_execution_error_errormessage')`
5976. "❌ Failed to delete: ${errorCount} files" → `t('_failed_to_delete_errorcount_f')`
5977. "❌ Font loading error: ${(event as any).fontface.family}" → `t('_font_loading_error_event_as_a')`
5978. "❌ No test cases configured. Please check your environment variables." → `t('_no_test_cases_configured_plea')`
5979. "📋 Found ${toDelete.length} files to delete:\n" → `t('_found_todeletelength_files_to')`
5980. "📡 Background fetch failed for:" → `t('_background_fetch_failed_for')`
5981. "🔄 Background sync triggered:" → `t('_background_sync_triggered')`
5982. "🔍 SearchPage component rendered with:" → `t('_searchpage_component_rendered')`
5983. "🔤 Font loading started: ${(event as any).fontface.family}" → `t('_font_loading_started_event_as')`
5984. "🔧 LOGIN TRACE: Available dev users:" → `t('_login_trace_available_dev_use')`
5985. "🔧 LOGIN TRACE: Development user authenticated successfully" → `t('_login_trace_development_user_')`
5986. "🔧 LOGIN TRACE: Supabase authentication successful" → `t('_login_trace_supabase_authenti')`

## Next Steps

1. **Add translation keys** for the strings listed above to your translation files
2. **Update components** to use the translation system
3. **Test** all languages to ensure proper display
4. **Review** with native speakers for quality


// sdk/js/auth/index.js

/**
 * @file Auth module for Zion.js
 * @description Handles authentication functions like login, logout, signup, and user session management.
 */

// Helper to get CSRF token - simplistic version for now
// In a real app, next-auth/react's getCsrfToken() is preferred.
async function getCsrfToken() {
  try {
    const response = await fetch('/api/auth/csrf');
    if (!response.ok) return null;
    const data = await response.json();
    return data.csrfToken;
  } catch (error) {
    console.error('Error fetching CSRF token:', error);
    return null;
  }
}

/**
 * Logs in a user with email and password.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<object|null>} A promise that resolves with the user object upon successful login, or null otherwise.
 * @throws {Error} If login fails due to network issues or invalid credentials.
 */
async function loginWithEmail(email, password) {
  console.log('loginWithEmail called with:', email);
  // Note: For direct API calls to NextAuth.js POST endpoints,
  // CSRF token handling is crucial. This function fetches and includes it.
  // Using next-auth/react client's signIn() is generally preferred as it handles this automatically.

  // The body for credentials provider should be x-www-form-urlencoded
  const csrfToken = await getCsrfToken(); // Simplistic CSRF fetch
  if (!csrfToken) {
    // In a real scenario, might not proceed or use a previously stored token
    console.warn('CSRF token not found, proceeding without it for demo purposes.');
  }

  const body = new URLSearchParams();
  body.append('csrfToken', csrfToken || ''); // Ensure csrfToken is not undefined
  body.append('email', email);
  body.append('password', password);
  body.append('callbackUrl', window.location.href);
  body.append('redirect', 'false');
  body.append('json', 'true');

  const response = await fetch('/api/auth/signin/credentials', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Login failed with status: ' + response.status }));
    // if (response.url.includes('error=CredentialsSignin')) {
    //   throw new Error('Invalid credentials.');
    // }
    throw new Error(errorData.message || `Login failed. Status: ${response.status}`);
  }

  // Successful login via next-auth's credentials provider usually results in a redirect
  // or, if { redirect: false, json: true } is used, specific JSON response.
  // The actual user session is then available via /api/auth/session.
  // We fetch the session to get user data.
  const session = await getUser();
  if (session && session.user) {
    return session.user;
  } else {
    // This path might be taken if the response.ok but session is not yet established
    // or if the login response doesn't directly contain the user.
    // Depending on NextAuth config, a successful response to signin/credentials
    // might be a redirect or a simple { url: "redirect_url" }.
    // If redirect:false, it should return { ok: true, url: "..."}
    const loginResponseData = await response.json().catch(() => null);
    if (loginResponseData && loginResponseData.ok && loginResponseData.url) {
        // Login was accepted by NextAuth, session should be available
        const updatedSession = await getUser();
        if (updatedSession && updatedSession.user) return updatedSession.user;
    }
    throw new Error('Login succeeded but session data could not be retrieved.');
  }
}

/**
 * Signs up a new user with email and password.
 * @param {string} email - The new user's email.
 * @param {string} password - The new user's password.
 * @param {object} [otherDetails] - Additional details for signup, e.g., { name: 'Test User' }.
 * @returns {Promise<object>} A promise that resolves with the new user object (or a success message).
 * @throws {Error} If signup fails.
 */
async function signupWithEmail(email, password, otherDetails = {}) {
  console.log('signupWithEmail called with:', email, otherDetails);
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name: otherDetails.name }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || data.message || `Signup failed. Status: ${response.status}`
    );
  }
  // data typically contains { message, emailVerificationRequired, user } or { user, session }
  return data;
}

/**
 * Logs in a user using a web3 wallet.
 * This function outlines the process. Actual wallet interactions (MetaMask prompts)
 * would happen in the client-side environment where this SDK is used.
 * @param {object} walletProvider - The EIP-1193 provider (e.g., window.ethereum).
 * @returns {Promise<object|null>} A promise that resolves with the user object upon successful login, or null otherwise.
 * @throws {Error} If wallet connection, signing, or authentication fails.
 */
async function loginWithWallet(walletProvider) {
  console.log('loginWithWallet called');

  if (!walletProvider || typeof walletProvider.request !== 'function') {
    throw new Error('Invalid wallet provider provided.');
  }

  try {
    // 1. Request accounts
    const accounts = await walletProvider.request({ method: 'eth_requestAccounts' });
    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found. Please connect your wallet.');
    }
    const address = accounts[0];

    // 2. Define a message to sign
    // IMPORTANT: In a real application, this message should ideally be:
    //    a) Fetched from the server to include a nonce (to prevent replay attacks).
    //    b) A structured message (EIP-712) for better user experience and security.
    const message = `Welcome to Zion OS!\n\nPlease sign this message to authenticate your address: ${address}\n\nTimestamp: ${Date.now()}`;

    // 3. Request signature
    const signature = await walletProvider.request({
      method: 'personal_sign',
      params: [message, address], // Metamask expects (message, address) for personal_sign
    });

    console.log(`Attempting NextAuth sign-in for address: ${address}`);
    // 4. Authenticate with the backend via NextAuth
    const csrfToken = await getCsrfToken();
    if (!csrfToken) {
      // This is a simplified CSRF handling for demo.
      console.warn('CSRF token not found for wallet login, proceeding without it. This is NOT secure for production.');
    }

    // NextAuth Credentials provider expects form data or specific JSON structure.
    const bodyParams = new URLSearchParams();
    bodyParams.append('csrfToken', csrfToken || '');
    bodyParams.append('address', address);
    bodyParams.append('signature', signature);
    bodyParams.append('message', message);
    bodyParams.append('callbackUrl', window.location.href);
    bodyParams.append('redirect', 'false');
    bodyParams.append('json', 'true');

    const response = await fetch('/api/auth/signin/walletconnect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: bodyParams,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Wallet login failed with status: ' + response.status }));
      throw new Error(errorData.message || `Wallet login failed. Status: ${response.status}`);
    }

    // Similar to email login, successful NextAuth sign-in should update the session.
    // Fetch the session to get user data.
    const session = await getUser();
    if (session && session.user) {
      // Notify listeners about auth state change
      if (authListeners.length > 0) {
        currentUserState = session.user;
        authListeners.forEach(listener => listener(currentUserState));
      }
      return session.user;
    } else {
      const loginResponseData = await response.json().catch(() => null);
      if (loginResponseData && loginResponseData.ok && loginResponseData.url) {
          const updatedSession = await getUser();
          if (updatedSession && updatedSession.user) {
            if (authListeners.length > 0) {
                currentUserState = updatedSession.user;
                authListeners.forEach(listener => listener(currentUserState));
            }
            return updatedSession.user;
          }
      }
      throw new Error('Wallet login succeeded but session data could not be retrieved.');
    }

  } catch (error) {
    console.error('loginWithWallet error:', error);
    // More specific error handling can be added here
    if (error.code === 4001) { // Standard EIP-1193 user rejected request error
      throw new Error('Wallet connection or signature request rejected by user.');
    }
    throw error; // Re-throw other errors
  }
}

/**
 * Logs out the current user.
 * @returns {Promise<void>} A promise that resolves when logout is complete.
 * @throws {Error} If logout fails.
 */
async function logout() {
  console.log('logout called');
  // Note: For direct API calls to NextAuth.js POST endpoints (like signout),
  // CSRF token handling is crucial. This function fetches and includes it.
  // Using next-auth/react client's signOut() is generally preferred as it handles this automatically.
  const csrfToken = await getCsrfToken();
  if (!csrfToken) {
    // This might occur if /api/auth/csrf fails or returns no token.
    // Depending on server config, proceeding might fail.
    console.warn('CSRF token not found for logout. Proceeding, but this may fail if CSRF is strictly enforced.');
  }

  const body = new URLSearchParams();
  body.append('csrfToken', csrfToken || '');
  body.append('json', 'true'); // Ask for JSON response to know outcome

  const response = await fetch('/api/auth/signout', {
    method: 'POST', // Needs to be POST
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || `Logout failed. Status: ${response.status}`);
  }
  // Logout successful, session should be cleared by NextAuth
  // Call a local state update if onAuthStateChanged is not based on polling getUser
  if (authListeners.length > 0) {
    currentUserState = null;
    authListeners.forEach(listener => listener(null));
  }
  return response.json(); // Contains info about where to redirect, etc.
}

/**
 * Retrieves the current authenticated user's details from the session.
 * @returns {Promise<object|null>} A promise that resolves with the session object (which contains user) or null.
 */
async function getUser() {
  console.log('getUser called');
  try {
    const response = await fetch('/api/auth/session');
    if (!response.ok) {
      // Not an error if no session, just means user is not logged in
      if (response.status === 401) return null;
      throw new Error(`Failed to fetch session. Status: ${response.status}`);
    }
    const session = await response.json();
    // An empty object {} means no session
    if (Object.keys(session).length === 0) {
        return null;
    }
    return session; // session object contains { user: { name, email, image }, expires: "..." }
  } catch (error) {
    console.error('Error fetching user session:', error);
    throw error; // Re-throw for consumer to handle
  }
}

let currentUserState = null;
let authListeners = [];
let pollingInterval = null;

/**
 * Registers a callback to listen for authentication state changes.
 * @param {function(object|null):void} callback - Function to call when auth state changes. It receives the user object from the session or null.
 * @returns {function():void} An unsubscribe function to remove the listener.
 */
function onAuthStateChanged(callback) {
  console.log('onAuthStateChanged registered');
  authListeners.push(callback);

  // Immediately call with current (potentially null) state
  // Fetch initial state if not already fetched or if polling isn't active
  if (!pollingInterval && authListeners.length === 1) {
    getUser().then(session => {
      currentUserState = session ? session.user : null;
      callback(currentUserState);
    }).catch(() => callback(null)); // Call with null on error
  } else {
      callback(currentUserState);
  }


  // Start polling if this is the first listener
  if (!pollingInterval && authListeners.length > 0) {
    pollingInterval = setInterval(async () => {
      try {
        const session = await getUser();
        const newUserState = session ? session.user : null;
        if (JSON.stringify(currentUserState) !== JSON.stringify(newUserState)) {
          currentUserState = newUserState;
          authListeners.forEach(listener => listener(currentUserState));
        }
      } catch (error) {
        // If fetching session fails (e.g. network error), notify listeners with null
        // or maintain last known state, depending on desired behavior.
        // For now, assume error means user is logged out or session is inaccessible.
        if (currentUserState !== null) {
            currentUserState = null;
            authListeners.forEach(listener => listener(null));
        }
        console.error("Error polling auth state:", error);
      }
    }, 5000); // Poll every 5 seconds
    console.log('Auth polling started.');
  }

  return () => {
    authListeners = authListeners.filter(listener => listener !== callback);
    if (authListeners.length === 0 && pollingInterval) {
      clearInterval(pollingInterval);
      pollingInterval = null;
      console.log('Auth polling stopped.');
    }
  };
}

export {
  loginWithEmail,
  loginWithWallet,
  signupWithEmail,
  logout,
  getUser,
  onAuthStateChanged
};

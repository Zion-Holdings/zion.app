import * as admin from 'firebase-admin';

const projectId = process.env.FIREBASE_PROJECT_ID;

if (!admin.apps.length) {
  try {
    const credentialJson = process.env.FIREBASE_SERVICE_ACCOUNT
      ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
      : undefined;

    admin.initializeApp({
      credential: credentialJson ? admin.credential.cert(credentialJson) : admin.credential.applicationDefault(),
      projectId,
    });
  } catch (e) {
    // Ignore init errors for environments without credentials
  }
}

export const adminDb = (() => {
  try {
    return admin.firestore();
  } catch {
    return null as any;
  }
})();
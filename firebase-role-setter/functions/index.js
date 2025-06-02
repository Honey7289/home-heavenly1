// 1. Import Firebase Admin SDK and Functions SDK
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// 2. Initialize Firebase Admin (only once)
admin.initializeApp();

// 3. Define Cloud Function: setCustomUserClaims
exports.setCustomUserClaims = functions.https.onCall(async (data, context) => {
  const { uid, role } = data;  // Extract data sent from frontend

  // 4. Security: Ensure caller is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'You must be logged in to set custom claims.'
    );
  }

  // 5. Security: Allow only admin users to call this function
  const callerClaims = context.auth.token;
  if (!callerClaims.admin) {
    throw new functions.https.HttpsError(
      'permission-denied',
      'Only admin users can assign roles.'
    );
  }

  // 6. Validate input
  if (!uid || !role) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'You must provide both uid and role.'
    );
  }

  // 7. Set custom claim
  try {
    await admin.auth().setCustomUserClaims(uid, { role });
    return { message: `Role '${role}' assigned to user ${uid}.` };
  } catch (error) {
    console.error("Error setting custom claim:", error);
    throw new functions.https.HttpsError(
      'internal',
      'Something went wrong while setting custom claim.'
    );
  }
});

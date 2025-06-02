// setRole.js
const admin = require('firebase-admin');

// Initialize Firebase Admin with service account
const serviceAccount = require('./serviceAccountKey.json'); // 👈 download this from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Set custom claim
const uid = 'PUT_USER_UID_HERE'; // 👈 Replace with real Firebase UID

admin.auth().setCustomUserClaims(uid, { role: 'agent' }) // 🔄 Replace 'agent' with any role
  .then(() => {
    console.log(`✅ Role set for user: ${uid}`);
  })
  .catch((error) => {
    console.error('❌ Error setting role:', error);
  });

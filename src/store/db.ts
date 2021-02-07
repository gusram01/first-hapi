import admin from 'firebase-admin';

const serviceAccount = require('../../config/connection.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DB_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  databaseAuthVariableOverride: {
    uid: process.env.DB_UID,
  },
});

export default admin.database();
export const storage = admin.storage();

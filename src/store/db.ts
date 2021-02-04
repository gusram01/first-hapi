import admin from 'firebase-admin';

const serviceAccount = require('../../config/connection.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DB_URL,
  databaseAuthVariableOverride: {
    uid: process.env.DB_UID,
  },
});

export default admin.database();

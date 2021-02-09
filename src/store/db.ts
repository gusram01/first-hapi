import admin from 'firebase-admin';
import { config } from './config';

admin.initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: process.env.DB_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  databaseAuthVariableOverride: {
    uid: process.env.DB_UID,
  },
});

export default admin.database();
export const storage = admin.storage();

import admin from 'firebase-admin';
import serviceAccount from '../etc/ServiceKey.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firestore;

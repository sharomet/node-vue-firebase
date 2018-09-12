import admin from 'firebase-admin';
import serviceAccount from '../etc/ServiceKey.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firestore;


// module.exports = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://vuejs-e8277.firebaseio.com/'
// }).database();

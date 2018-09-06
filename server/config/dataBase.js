import admin from 'firebase-admin';
import serviceAccount from '../etc/ServiceKey.json';

module.exports = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://vuejs-e8277.firebaseio.com/'
}).database();

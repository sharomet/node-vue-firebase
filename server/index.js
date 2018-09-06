import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import routing from './routes/routing';
import { serverPort } from './etc/config.json';

/*import db from './config/dataBase';

let ref = db.ref('users/005d945d-320e-4c96-9d42-efe8bca95a9e');
ref.once('value', function(snapshot) {
  console.log(snapshot.val());
});*/

/**
 * Express Init
 */
const app = express();

/**
 * Set static folder
 */
app.use(express.static(path.join(__dirname, '../client/')));

/**
 * Body Parsing
 */
app.use(bodyParser.json());

/**
 * Routing
 */
app.use('/api', routing);

/**
 * View Engine
 */
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

/**
 * Start Server
 */
const server = app.listen(serverPort, () => {
    console.log(`Server is starting on port ${serverPort}`);
});

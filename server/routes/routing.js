import express from 'express';

import UsersController from '../controllers/Users.controller';

const router = express.Router();

// Users routings
router.get('/users', UsersController.getAllUsers);
/*router.post('/users', UsersController.createUser);*/
router.get('/user/:id', UsersController.getUserById);
//router.delete('/users/:id', UsersController.deleteUser);

module.exports = router;

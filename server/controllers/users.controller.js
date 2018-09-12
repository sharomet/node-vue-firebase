import * as db from '../models/users.model';

/**
* Return user array
*/
const getUser = (dat) => {
        let user = dat.data();
        return {
            id: dat.id,
            first_name: user.first_name,
            last_name: user.last_name,
            age: user.age
        }
};

/**
* get all users
*/
exports.getAllUsers = (req, res) => {
    db.getAllUsers()
      .then(snapshot => {
        res.send(snapshot.docs.map(doc => {
            let data = doc.data();
            return {
                id: doc.id,
                first_name: data.first_name,
                last_name: data.last_name,
                age: data.age
            }
        }));
      })
};

/**
* Get user by id
*/
exports.getUserById = (req, res) => {
    db.getUserById(req.params.id)
      .then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            res.send(getUser(doc));
        }
      })
      .catch(err => console.log('Error'));
};

/**
* Create new user
*/
exports.createUser = (req, res) => {
    db.createUser(req.body)
      .then(doc => res.send(getUser(doc)))
      .catch(err => console.log('Error'));
};

/*
exports.createUser = (req, res) => {

    req.checkBody('first_name', 'First Name is required field!').notEmpty();
    req.checkBody('last_name', 'Last Name is required field!').notEmpty();
    req.checkBody('email', 'Invalid email address!').isEmail();

    req.getValidationResult().then(result => {
        if(!result.isEmpty()) {
            result.array().forEach((error) => {
                res.json({success:false, message: error.msg});
            });
        } else {
            db.createUser(req.body).then(data => res.send(data));
            return res.json({success: true, message: 'User successfully added'});
        }
    });
};*/

/*
exports.deleteUser = (req, res) => {
    db.deleteUser(req.params.id).then(data => res.send(data));
};*/

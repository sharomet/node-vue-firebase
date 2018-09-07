import * as db from '../models/users.model';

exports.getAllUsers = (req, res) => {
    db.getAllUsers().then(data => res.send(data));
};

exports.getUserById = (req, res) => {
    db.getUserById(req.params.id).then(data => res.send(data));
};

exports.createUser = (req, res) => {
    let data = db.createUser(req.body);
    data.transaction((current_value) => {
        res.send(current_value);
    });
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

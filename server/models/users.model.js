import db from '../config/dataBase';
import guid from 'guid';

/**
* Get all Users
*/
export function getAllUsers() {
    return db.collection('users').get();
}

/**
* Get user by id
*/
export function getUserById(id) {
    return db.collection('users').doc(id).get();
}

/**
* Create new user
*/
export function createUser(data) {
    let id = guid.create().value;
    let user = db.collection('users').doc(id);
    user.set(data);
    return user.get();
};

/**
* Delete user
*/
export function deleteUser(id) {
    return db.collection('users').doc(id).delete();
}

/*export function createUser(data) {
    const user = new Users ({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        updated_at: new Date(),
        created_at: new Date()
    });
    return user.save();
}*/

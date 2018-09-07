import db from '../config/dataBase';

export function getAllUsers() {
    return db.ref('users').once('value');
}

export function getUserById(id) {
    return db.ref('users/' + id).once('value');
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

/*
export function deleteUser(id) {
    return Users.findById(id).remove();
}*/

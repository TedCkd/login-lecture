"use strict"

class UserStorage {
    static #users = {
        id : ["tedckd", "테드창"],
        psword : ["1234","1234"],
        name : ["창식", "치킨"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
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
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKey = Object.keys(users);
        const userInfo = usersKey.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;
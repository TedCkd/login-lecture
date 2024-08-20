"use strict";

const hello = ((req, res) =>{
    res.send(res.render("home/index"))
});

const login = ((req, res) =>{
    res.send(res.render("home/login"))
});

module.exports ={
    hello,
    login
};
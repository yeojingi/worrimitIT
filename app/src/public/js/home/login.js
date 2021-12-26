"use strict";

const id        = document.querySelector('#id'),
    password    = document.querySelector('#password'),
    loginBtn    = document.querySelector('button');

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };

    fetch('/login', {
        method: "POST",
        header: {
            "Content-type": "application/json", //our data is in form of json
        },
        body: JSON.stringify(req),
    });
}
"use strict";

const users = {
    id: ['FIRST', 'SECOND', 'THRID'],
    password: ['1234', '2345', '3456'], 
};

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            password = req.body.password;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] == password) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "Failed to login",
        }); 
    },
};

module.exports = {
    output,
    process,
};
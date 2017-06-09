/**
 * Created by David Cruz on 07/06/2017.
 */
'use strict';

let express = require('express');
let router = express.Router();
let randomString = require('randomstring');
let userUtil = require('../util/user-util');

let userModel = require('../models/user-model');

/* CREATE user. */
router.post('/', (req, res, next) => {

    // Acá se encripta la contraseña antes de guardar
    req.body.salt = randomString.generate(17);
    req.body.password = userUtil.encryptUserPassword(req.body.salt, req.body.password);

    userModel.create(req.body, (err, userCreated) => {
        if (err) {
            return next(err);
        }
        res.json(userCreated);
    });
});

/* GET user by email. */
router.get('/:email', (req, res, next) => {
    userModel.findOne({email: req.params.email}, (err, user) => {
        if (err) {
            return next(err);
        }
        res.json(user);
    });
});

module.exports = router;

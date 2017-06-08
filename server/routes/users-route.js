/**
 * Created by David Cruz on 07/06/2017.
 */
'use strict';

let express = require('express');
let router = express.Router();

let userModel = require('../models/user-model');

/* CREATE user. */
router.post('/', (req, res, next) => {
    userModel.create(req.body, (err, userCreated) => {
        if(err){
            return next(err);
        }
        res.json(userCreated);
    });
});

/* GET user by email. */
router.get('/:email', (req, res, next) => {
    userModel.findOne({email: req.params.email}, (err, user) => {
        if(err){
            return next(err);
        }
        res.json(user);
    });
});

module.exports = router;

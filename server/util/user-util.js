/**
 * Created by David Cruz on 08/06/2017.
 */
'use strict';

let crypto = require('crypto');

module.exports = {
    encryptUserPassword: (salt, passwordToEncrypt) => {
        let cipher = crypto.createCipher('aes-256-cbc', salt);
        cipher.update(passwordToEncrypt, 'utf8', 'base64');
        return cipher.final('base64');
    }
};


const bcrypt = require('bcrypt');
const salt = 5; // Quanto maior, mais lento pra criar o hash

module.exports = {
    createHash(text) {
        return new Promise((resolve, reject) => {

            bcrypt.genSalt(salt, (err, resultSalt) => {

                bcrypt.hash(text, resultSalt, (err, hash) => {
                    if (err) reject(err);
                    resolve(hash);
                });

            });

        });
    },
    verifyHash(pureText, hash) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(pureText, hash, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        });
    }
}
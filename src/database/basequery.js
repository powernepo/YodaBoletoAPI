const con = require('./connection');

module.exports = (query, args = []) => {
    return new Promise((resolve, reject) => {
        con.query(query, args, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}
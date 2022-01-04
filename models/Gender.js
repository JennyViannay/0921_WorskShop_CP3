const dbConnect = require('../config/db-config.js');

const findAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query('SELECT * FROM gender', (err, results) => {
            if (err) reject(err);
            else resolve(results);
        })
    })
};

const findById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('SELECT * FROM gender WHERE id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result[0]);
        })
    })
};

const createNew = (gender) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO gender (name) VALUES (?)', gender, (err, result) => {
            if (err) reject(err);
            else resolve(result.insertId);
        })
    })
};

module.exports = { findAll, findById, createNew };
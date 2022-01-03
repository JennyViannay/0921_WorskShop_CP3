const dbConnect = require('../config/db-config.js');

const findAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query('SELECT * FROM album', (err, results) => {
            if (err) reject(err);
            else resolve(results);
        })
    })
}

// const getOneById = (id) => {
//     return new Promise((resolve, reject) => {
//         dbConnect.query('SELECT * FROM movie WHERE id = ?', id, (err, result) => {
//             if (err) reject(err);
//             else resolve(result[0]);
//         })
//     })
// }

// const deleteById = (id) => {
//     return new Promise((resolve, reject) => {
//         dbConnect.query('DELETE FROM movie WHERE id = ?', id, (err, result) => {
//             if (err) reject(err);
//             else resolve(result.affectedRows);
//         })
//     })
// }

// const createNew = (movie) => {
//     const { title } = movie;
//     return new Promise((resolve, reject) => {
//         dbConnect.query('INSERT INTO movie (title) VALUES (?)', title, (err, result) => {
//             if (err) reject(err);
//             else resolve(result.insertId);
//         })
//     })
// }

// const updateMovie = (movie) => {
//     const { title, id } = movie;
//     return new Promise((resolve, reject) => {
//         dbConnect.query('UPDATE movie SET title = ? WHERE id = ?', [title, id], (err, result) => {
//             if (err) reject(err);
//             else resolve(result);
//         })
//     })
// }

// exporter toutes les fonctions du model
module.exports = { findAll };
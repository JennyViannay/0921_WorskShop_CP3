const dbConnect = require('../config/db-config.js');

const findAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query('SELECT * FROM album', (err, results) => {
            if (err) reject(err);
            else resolve(results);
        })
    })
};

const findAlbumTracks = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('SELECT * FROM track WHERE album_id = ?', id, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        })
    })
};

const findById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('SELECT * FROM album WHERE id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result[0]);
        })
    })
};

const createNew = (album) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('INSERT INTO album (author_id, gender_id, title, created_at) VALUES (?, ?, ?, ?)', album, (err, result) => {
            if (err) reject(err);
            else resolve(result.insertId);
        })
    })
};

const updateTitle = (title, id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('UPDATE album SET title = ? WHERE id = ?', [title, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        dbConnect.query('DELETE FROM album WHERE id = ?', id, (err, result) => {
            if (err) reject(err);
            else resolve(result.affectedRows);
        })
    })
}

module.exports = { findAll, findAlbumTracks, findById, createNew, updateTitle, deleteById };
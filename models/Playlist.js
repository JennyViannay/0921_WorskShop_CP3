const dbConnect = require("../config/db-config.js");

// get Playlists by User
const playlistsByUser = (idUser) => {
  return new Promise((resolve, reject) => {
    dbConnect.query(
      "SELECT * FROM playlist WHERE user_id = ?",
      idUser,
      (err, results) => {
        if (err) reject(err);
        else resolve(results);
      }
    );
  });
};

// get Playlists by User
const playlistsByUser = (idUser) => {
  return new Promise((resolve, reject) => {
    //code here
  });
};

// create Playlist
const createNew = (playlist) => {
  return new Promise((resolve, reject) => {
    dbConnect.query(
      "INSERT INTO playlist (user_id, title) VALUES (?,?)",
      playlist,
      (err, result) => {
        if (err) reject(err);
        else resolve(result.insertId);
      }
    );
  });
};

// get playlist tracks
const playlistTracks = (idPlaylist) => {
  return new Promise((resolve, reject) => {
    dbConnect.query(
      "SELECT playlist_track.playlist_id, playlist.title as playlist_title, playlist_track.track_id, track.title as track_title FROM playlist_track JOIN playlist ON playlist_track.playlist_id=playlist.id JOIN track ON playlist_track.track_id=track.id WHERE playlist_track.playlist_id = ?",
      idPlaylist,
      (err, results) => {
        if (err) reject(err);
        else resolve(results);
      }
    );
  });
};

// add track to Playlist
const addTrackToPlaylist = (data) => {
  return new Promise((resolve, reject) => {
    dbConnect.query(
      "INSERT INTO playlist_track (playlist_id, track_id) VALUES (?,?)",
      data,
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

// delete tracks from Playlist
const deleteTrackFromPlaylist = (data) => {
  return new Promise((resolve, reject) => {
    dbConnect.query(
      "DELETE FROM playlist_track WHERE playlist_id = ? AND track_id = ?",
      data,
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

const findById = (id) => {
  return new Promise((resolve, reject) => {
    dbConnect.query(
      "SELECT * FROM playlist WHERE id = ?",
      id,
      (err, result) => {
        if (err) reject(err);
        else resolve(result[0]);
      }
    );
  });
};

module.exports = {
  playlistsByUser,
  createNew,
  playlistTracks,
  addTrackToPlaylist,
  deleteTrackFromPlaylist,
  findById,
};

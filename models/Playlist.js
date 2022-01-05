const dbConnect = require('../config/db-config.js');

// get Playlists by User
const playlistsByUser = (idUser) => {
  return new Promise((resolve, reject) => {
    //code here
  });
};

// create Playlist
const createNew = (playlist) => {
  return new Promise((resolve, reject) => {
    //code here
  });
};

// get playlist tracks
const playlistTracks = (idPlaylist) => {
  return new Promise((resolve, reject) => {
    //code here
  });
};

// add track to Playlist
const addTrackToPlaylist = (data) => {
  return new Promise((resolve, reject) => {
    //code here
  });
};

// delete tracks from Playlist
const deleteTrackFromPlaylist = (data) => {
  return new Promise((resolve, reject) => {
    //code here
  });
};

const findById = (id) => {
  return new Promise((resolve, reject) => {
    //code here
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

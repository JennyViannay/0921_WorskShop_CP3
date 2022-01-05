const express = require("express");
const Playlist = require("../models/Playlist");

const router = express.Router();

// get Playlists by User /user/:user_id
router.get("/user/:user_id", async (req, res) => {
  try {
    const playlists = await Playlist.playlistsByUser(req.params.user_id);
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create Playlist
router.post("/", async (req, res) => {
  const playlist = [req.body.user_id, req.body.title];
  try {
    const lastInsertId = await Playlist.createNew(playlist);
    const newPlaylist = await Playlist.findById(lastInsertId);
    res.status(201).json(newPlaylist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get Tracks from Playlist
router.get("/:id/tracks", async (req, res) => {
  try {
    const tracks = await Playlist.playlistTracks(req.params.id);
    res.json(tracks).status(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// add tracks to Playlist
router.post("/:id/track", async (req, res) => {
  try {
    await Playlist.addTrackToPlaylist([req.params.id, req.body.track_id]);
    res
      .json({ message: `Track Id ${req.body.track_id} added to playlist` })
      .status(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete tracks from Playlist
router.delete("/:id/track", async (req, res) => {
  try {
    await Playlist.deleteTrackFromPlaylist([req.params.id, req.body.track_id]);
    res
      .json({ message: `Track Id ${req.body.track_id} deleted from playlist` })
      .status(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

const express = require("express");
const Playlist = require("../models/Playlist");

const router = express.Router();

// get Playlists by User /user/:user_id
router.get("/user/:user_id", async (req, res) => {
  try {
    // code here
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create Playlist
router.post("/", async (req, res) => {
  try {
    // code here
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get Tracks from Playlist
router.get("/:id/tracks", async (req, res) => {
  try {
    // code here
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// add tracks to Playlist
router.post("/:id/track", async (req, res) => {
  try {
    // code here
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete tracks from Playlist
router.delete("/:id/track", async (req, res) => {
  try {
    // code here
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

const express = require("express");
const Album = require("../models/Album");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const albums = await Album.findAll();
    res.json(albums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id/tracks", async (req, res) => {
  try {
    const tracks = await Album.findAlbumTracks(req.params.id);
    res.json(tracks).status(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const album = await Album.findById(id);
    album
      ? res.json(album)
      : res.status(404).json({ message: "Album not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const album = [
    req.body.author_id,
    req.body.gender_id,
    req.body.title,
    req.body.created_at,
  ];
  try {
    const lastInsertId = await Album.createNew(album);
    const newAlbum = await Album.findById(lastInsertId);
    res.status(201).json(newAlbum);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
    try {
        const albumUpdate = await Album.updateTitle(req.body.title, req.params.id);
        if (albumUpdate) res.status(204);
        else res.status(422).json({ message: error.message });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Album.deleteById(id);
        result ? res.json({message : `AlbumId ${id} has been deleted !`}).status(204) : res.status(404).json({ message: 'Album not found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
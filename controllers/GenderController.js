const express = require("express");
const Gender = require("../models/Gender");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const genders = await Gender.findAll();
    res.json(genders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const gender = await Gender.findById(id);
    gender
      ? res.json(gender).status(200)
      : res.status(404).json({ message: "Gender not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const lastInsertId = await Gender.createNew(req.body.name);
    const newAlbum = await Gender.findById(lastInsertId);
    res.status(201).json(newAlbum);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
const express = require('express');
const Album = require('../models/Album');

const router = express.Router(); 

router.get('/', async (req, res) => {
    try {
        const albums = await Album.findAll();
        res.json(albums);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// router.get('/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const movie = await Movie.getOneById(id);
//         movie ? res.json(movie) : res.status(404).json({ message: 'Movie not found' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })

// router.delete('/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const result = await Movie.deleteById(id);
//         result ? res.json({message : `MovieId ${id} has been deleted !`}).status(204) : res.status(404).json({ message: 'Movie not found' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })

// router.post('/', async (req, res) => {
//     const movie = { title : req.body.title };
//     try {
//         const {error, value} = await schemaMovie.validate(movie)
//         const lastInsertId = await Movie.createNew(value);
//         if (lastInsertId) {
//             const newMovie = await Movie.getOneById(lastInsertId) 
//             res.json(newMovie);
//         } else res.status(422).json({ message: error.message });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// })

// router.put('/:id', async (req, res) => {
//     const movie = { title : req.body.title };
//     try {
//         const {error, value} = await schemaMovie.validate(movie)
//         const movieUpdate = await Movie.updateMovie(value);
//         if (movieUpdate) res.status(204);
//         else res.status(422).json({ message: error.message });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// })

// ne pas oublier l'export router
module.exports = router;
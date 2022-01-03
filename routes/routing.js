const AlbumController = require('../controllers/AlbumController.js');

module.exports = (app) => {
    app.use('/albums', AlbumController);
}
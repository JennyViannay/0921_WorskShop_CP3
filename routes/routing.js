const AlbumController = require('../controllers/AlbumController.js');
const GenderController = require('../controllers/GenderController.js');
const PlaylistController = require('../controllers/PlaylistController.js');

module.exports = (app) => {
    app.use('/albums', AlbumController);
    app.use('/genders', GenderController);
    app.use('/playlists', PlaylistController);
}
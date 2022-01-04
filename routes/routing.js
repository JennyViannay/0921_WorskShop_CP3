const AlbumController = require('../controllers/AlbumController.js');
const GenderController = require('../controllers/GenderController.js');

module.exports = (app) => {
    app.use('/albums', AlbumController);
    app.use('/genders', GenderController);
}
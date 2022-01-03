const supertest = require('supertest');
const app = require('../index');
const { albumToCreate, albumKeys } = require('./test.data.album');

describe('TESTS FOR ALBUMS ROUTES', () => {
    const persistentDatas = {};
  
    it('should get the albums list /', async () => {
      const res = await supertest(app)
        .get('/albums')
        .expect(200)
        .expect('Content-Type', /json/);
  
      expect(Array.isArray(res.body)).toBe(true);
  
      res.body.forEach((album) => {
        albumKeys.map((prop) => {
          expect(album).toHaveProperty(prop);
        });
      });
    });

});
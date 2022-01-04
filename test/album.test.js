const supertest = require("supertest");
const app = require("../index");
const { albumToCreate, albumKeys, trackKeys } = require("./test.data.album");

describe("TESTS POUR LES ROUTES /albums", () => {
  const persistentDatas = {};

  it('devrait récupérer la liste des albums depuis "/albums" ', async () => {
    const res = await supertest(app)
      .get("/albums")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((album) => {
      albumKeys.map((prop) => {
        expect(album).toHaveProperty(prop);
      });
    });
  });

  it('devrait récupérer la liste des tracks de l\'album id:1 depuis "albums/1/tracks"', async () => {
    const res = await supertest(app)
      .get("/albums/1/tracks")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((track) => {
      expect(track).toHaveProperty("album_id", 1);
      trackKeys.map((prop) => {
        expect(track).toHaveProperty(prop);
      });
    });
  });

  it('devrait récupérer l\'album id 1 depuis "/albums/1"', async () => {
    const res = await supertest(app)
      .get('/albums/1')
      .expect(200)
      .expect('Content-Type', /json/);

    albumKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
  });

  it('devrait lever une erreur 404 depuis "/albums/666666"', async () => {
    const res = await supertest(app)
      .get('/albums/666666')
      .expect(404)
  });

  it('devrait créer un nouvel album depuis "/albums"', async () => {
    const res = await supertest(app)
      .post('/albums')
      .send(albumToCreate)
      .expect(201)
      .expect('Content-Type', /json/);

    albumKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
    persistentDatas.createdAlbum = res.body;
  });

  // TODO:: test update title

  it('devrait supprimer le dernier album crée depuis "/albums/:id"', async () => {
    const res = await supertest(app)
      .delete('/albums/' + persistentDatas.createdAlbum.id)
      .expect('Content-Type', /json/)
      .expect(200)
  });

  it('devrait lever une erreur 404 depuis "/albums/666666"', async () => {
    const res = await supertest(app)
      .delete('/albums/666666')
      .expect(404)
  });
});

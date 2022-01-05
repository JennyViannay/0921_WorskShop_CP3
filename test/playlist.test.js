const supertest = require("supertest");
const app = require("../index");

const {
  playlistKeys,
  playlistTracksKey,
  playlistToCreate,
} = require("./test.data.playlist");

describe("TESTS POUR LES ROUTES /playlists", () => {
  const persistentDatas = {};

  // get Playlists by User
  it('devrait récupérer la liste des playlists par user "/playlists/user/:user_id" ', async () => {
    const res = await supertest(app)
      .get("/playlists/user/:user_id")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((playlist) => {
      playlistKeys.map((prop) => {
        expect(playlist).toHaveProperty(prop);
      });
    });
  });

  // create Playlist
  it('devrait créer une nouvelle playlist depuis "/playlists"', async () => {
    const res = await supertest(app)
      .post("/playlists")
      .send(playlistToCreate)
      .expect(201)
      .expect("Content-Type", /json/);

    playlistKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
    persistentDatas.createdPlaylist = res.body;
  });

  // get Tracks Playlist
  it('devrait récupérer les tracks d\'une playlist depuis "/playlists/:id/tracks"', async () => {
    const res = await supertest(app)
      .get("/playlists/1/tracks")
      .expect(200)
      .expect("Content-Type", /json/);

    res.body.forEach((playlist) => {
      playlistTracksKey.map((prop) => {
        expect(playlist).toHaveProperty(prop);
      });
    });
  });

  // add tracks to Playlist
  it('devrait ajouter une track à la playlist 1 depuis "/playlists/:id/track"', async () => {
    const res = await supertest(app)
      .post("/playlists/1/track")
      .send({track_id : 1})
      .expect(200);
  });

  // delete tracks from Playlist
  it('devrait supprimer une track à la playlist 1 depuis "/playlists/:id/track"', async () => {
    const res = await supertest(app)
      .delete("/playlists/1/track")
      .send({track_id : 1})
      .expect(200);
  });
});

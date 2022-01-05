const supertest = require("supertest");
const app = require("../index");
const {
  playlistKeys,
  playlistTracksKey,
  playlistToCreate,
  trackToAddOnPlaylist,
} = require("./test.data.playlist");

describe("TESTS POUR LES ROUTES /playlists", () => {
  const persistentDatas = {};

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
});

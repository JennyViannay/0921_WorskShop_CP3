const supertest = require("supertest");
const app = require("../index");
const { genderKey } = require("./test.data.gender");

describe("TESTS POUR LES ROUTES /gender", () => {
  it('devrait récupérer la liste des genre depuis "/genders" ', async () => {
    const res = await supertest(app)
      .get("/genders")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((gender) => {
      genderKey.map((prop) => {
        expect(gender).toHaveProperty(prop);
      });
    });
  });

  // TODO::get one gender
});

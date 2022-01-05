const supertest = require("supertest");
const app = require("../index");
const { genderKeys, genderToCreate } = require("./test.data.gender");

describe("TESTS POUR LES ROUTES /gender", () => {
  const persistentDatas = {};
  
  it('devrait récupérer la liste des genre depuis "/genders" ', async () => {
    const res = await supertest(app)
      .get("/genders")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((gender) => {
      genderKeys.map((prop) => {
        expect(gender).toHaveProperty(prop);
      });
    });
  });

  it('devrait récupérer le genre id 1 depuis "/gender/1"', async () => {
    const res = await supertest(app)
      .get('/genders/1')
      .expect(200)
      .expect('Content-Type', /json/);

    genderKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
  });

  it('devrait lever une erreur 404 depuis "/gender/666666"', async () => {
    const res = await supertest(app)
      .get('/gender/666666')
      .expect(404)
  });

  it('devrait créer un nouveau genre depuis "/genders"', async () => {
    const res = await supertest(app)
      .post('/genders')
      .send(genderToCreate)
      .expect(201)
      .expect('Content-Type', /json/);

    genderKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
    persistentDatas.createdGender = res.body;
  });
});

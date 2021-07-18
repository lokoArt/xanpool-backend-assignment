import { app } from '../app';
import supertest from 'supertest';

const request = supertest(app);

afterEach(done => done());

test("get currency rate with GraphQL", async () => {

  await request.post("/graphql")
    .send({
      "query": "{ getCurrencyRate(base: \"EUR\", intent: \"USD\") { base intent rate } }"
    })
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.data.getCurrencyRate.base).toEqual("EUR");
      expect(res.body.data.getCurrencyRate.intent).toEqual("USD");
      expect(res.body.data.getCurrencyRate.rate).toBeGreaterThan(0);
    });
});

test("get currency rate with REST", async () => {

  await request.get("/rest/EUR/USD")
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body.base).toEqual("EUR");
      expect(res.body.intent).toEqual("USD");
      expect(res.body.rate).toBeGreaterThan(0);
    });
});

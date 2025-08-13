const request = require('supertest');
const app = require('../server');
const mongodb = require('../database/connect');

beforeAll((done) => {
  mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    }
    done();
  });
});

describe('GET /customers', () => {
  it('should respond with status 200', async () => {
    const res = await request(app).get('/customers');
    expect(res.statusCode).toBe(200);
  });

  it('should return at least one customer object with expected properties', async () => {
    const res = await request(app).get('/customers');
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('firstName');
  });

  it('should not return an error', async () => {
    const res = await request(app).get('/customers');
    expect(res.error).toBeFalsy();
  });
});

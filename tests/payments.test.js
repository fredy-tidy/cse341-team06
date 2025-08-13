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

describe('GET /payments', () => {
  it('should respond with status 200', async () => {
    const res = await request(app).get('/payments');
    expect(res.statusCode).toBe(200);
  });

  it('should return an array', async () => {
    const res = await request(app).get('/payments');
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return at least one payment object with expected properties', async () => {
    const res = await request(app).get('/payments');
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('payment_amount');
  });

  it('should not return an error', async () => {
    const res = await request(app).get('/payments');
    expect(res.error).toBeFalsy();
  });
});

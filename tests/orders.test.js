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

describe('GET orders/customer/:customerId', () => {
  it('should respond with status 200', async () => {
    const res = await request(app).get(
      '/orders/customer/688cf39c411d81560d15fe33'
    );
    expect(res.statusCode).toBe(200);
  });

  it('should not return an error', async () => {
    const res = await request(app).get(
      '/orders/customer/688cf39c411d81560d15fe33'
    );
    expect(res.error).toBeFalsy();
  });
});

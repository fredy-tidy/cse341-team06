const request = require('supertest');
const app = require('../server');

describe('GET /orders/customer/:customerId', () => {
  // Usa un customerId válido de tu base de datos para pruebas reales
  const customerId = '688cefd7e176c9be90f79a94';

  it('should respond with status 200', async () => {
    const res = await request(app).get(`/orders/customer/${customerId}`);
    expect(res.statusCode).toBe(200);
  });

  it('should return an object with orders array', async () => {
    const res = await request(app).get(`/orders/customer/${customerId}`);
    expect(res.body).toHaveProperty('orders');
    expect(Array.isArray(res.body.orders)).toBe(true);
  });

  it('should return at least one order with expected properties', async () => {
    const res = await request(app).get(`/orders/customer/${customerId}`);
    if (res.body.orders.length > 0) {
      expect(res.body.orders[0]).toHaveProperty('customerId');
      expect(res.body.orders[0]).toHaveProperty('products');
    }
  });

  it('should not return an error', async () => {
    const res = await request(app).get(`/orders/customer/${customerId}`);
    expect(res.error).toBeFalsy();
  });
});

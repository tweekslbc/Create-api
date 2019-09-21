const app = require('supertest')(require('../app'));
const { expect } = require('chai');

describe('Routes', ()=> {
  describe('GET /api/user', ()=> {
    it('return users', ()=> {
      return app.get('/api/users')
        .expect(200)
        .then( response => {
          expect(response.body.length).to.equal(4);
        });
    });
  });
  describe('GET /api/users/:id', ()=> {
    it('returns a user', ()=> {

    });
  });
  describe('DELETE /api/users/:id', ()=> {
    it('deletes a user', ()=> {

    });
  });
});

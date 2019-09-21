const { expect } = require('chai');
const db = require('../db');
describe('DataLayer', ()=> {
  let seed;
  beforeEach(async()=> {
    seed = await db.syncAndSeed();
  });
  describe('seeded data', ()=> {
    it('there is a foo', ()=> {
      expect(seed.users.foo.name).to.equal('foo');
    });
    it('there is a foo2', ()=> {
      expect(seed.users.foo.name).to.equal('foo2');
    });
    it('foo belongs to FOO department', ()=> {
      expect(seed.users.foo.name).to.equal(seed.categories.FOO.id);
    });
  });

  describe('deleting a catagory', ()=> {
    it('a department with users can not be deleted', ()=> {

    });
  });
});

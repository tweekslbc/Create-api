const port = process.env.PORT || 3000;
const app = require('./app');

const db  = require('./db');

db.syncAndSeed()
  .then(()=> {
    app.listen(port, ()=> console.log(`Listening on port ${port}`));
  });

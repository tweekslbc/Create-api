const express = require('express');
const db = require('./db');
const { Product } = db.models;

const app = express();

module.exports = app;

app.get('/api/product', (req, res, next)=> {
  User.findAll()
    .then(users => res.send(users))
    .catch(next);
});

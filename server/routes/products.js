/* eslint-disable */

const express = require('express');
const router = express.Router();

const db = require('../db');

// create table Products:
GET('/create', () => db.products.create());

// drop the table:
GET('/drop', () => db.products.drop());

// remove all products:
GET('/empty', () => db.products.empty());

// add a new user product, if it doesn't exist yet, and return the object:
POST('/add/:userId/:name', req => {
  return db.task('add-product', t => {
    return t.products.find(req.params)
      .then(product => {
        return product || t.products.add(req.params);
      });
  });
});

// find a product by user id + product name id:
GET('/find/:userId/:name', req => db.products.find(req.params));

// remove a product by id:
GET('/remove/:id', req => db.products.remove(req.params.id));

// get all products:
GET('/all', () => db.products.all());

// count all products:
GET('/total', () => db.products.total());


function GET(url, handler) {
  router.get(url, async (req, res) => {
    try {
      let data = await handler(req);
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(400).json({ err: err.message || err });
    }
  });
};

function POST(url, handler) {
  router.post(url, async (req, res) => {
    console.log('Request body: ', req.body);
    try {
      let data = await handler(req);
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(422).json({ err: err.message || err });
    }
  });
};

module.exports = router;

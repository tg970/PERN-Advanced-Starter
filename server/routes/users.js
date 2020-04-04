/* eslint-disable */

const express = require('express');
const router = express.Router();

const db = require('../db');

// create table Users:
GET('/create', () => db.users.create());

// add some initial records:
GET('/init', () => db.users.init());

// // remove all records from the table:
// GET('/empty', () => db.users.empty());
//
// // drop the table:
// GET('/drop', () => db.users.drop());

// add a new user, if it doesn't exist yet, and return the object:
POST('/add', req => {
  return db.task('add-user', t => {
    return t.users.findByName(req.body.name)
      .then(user => {
        return user || t.users.add(req.body);
      });
  });
});

// find a user by id:
GET('/find/:id', req => db.users.findById(req.params.id));

// remove a user by id:
GET('/remove/:id', req => db.users.remove(req.params.id));

// get all users:
GET('/all', () => db.users.all());

// count all users:
GET('/total', () => db.users.total());


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
    // console.log('Request body: ', req.body);
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

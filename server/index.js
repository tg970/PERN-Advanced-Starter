/* eslint-disable */

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db');
const app = express();

// config
const PORT = process.env.PORT || 3000;

// middleware
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serve static/build files
app.use(express.static('dist'));

// api controllers/routers
const users = require('./routes/users');
const products = require('./routes/products');

app.use('/api/users', users);
app.use('/api/products', products);

// test for client comm to server
app.get('/api/hello', (req, res) => {
  res.send({ message: "Hello there!" });
});

// port listener and happy-happy report
app.listen(PORT, () => console.log('Server OK'));

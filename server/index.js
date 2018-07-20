const express = require('express');


const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const db = require('../db');

const app = express();

const PORT = process.env.PORT || 1122;

app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('dist'));

// const users = require('./routers/users');

// app.use('/users', users);

app.get('/api/hello', (req, res) => {
  res.send({ message: "Hello World!!" });
});

app.listen(PORT, () => console.log('Server OK'));

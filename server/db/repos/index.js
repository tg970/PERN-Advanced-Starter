/* eslint object-shorthand: "off" */

// Renaming and exporting all repository classes:

const Users = require('./users');
const Products = require('./products');

module.exports = {
  Users: Users,
  Products: Products
};

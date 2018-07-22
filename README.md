
# PERN-Advanced-Starter
Advanced PERN stack (PostgresSQL, Express, React, &amp; Node) app complete with ESLint, Webpack 4, Redux, React-Router, and Material-UI kit.

First, make sure you have have PostgreSQL installed and running. Visit [the PostgreSQL home page](https://www.postgresql.org/) for more info and to download the install file.

Open a terminal window and create a new PG database:

	$ createdb PERN-Starter

Then to get going using this starter app, first clone the repo:

    $ git clone https://github.com/tg970/PERN-Advanced-Starter.git

Hop into the project directory and install the dependencies:

	$ cd PERN-Advanced-Starter
	$ npm i

To start the Webpack dev server run:

	$ npm run dev

And to build for deployment/production run:

	$ npm run build
	$ npm start

Also don't forget that your API won't work unless you create a users table. To do this hit the following routes, either in your browser or with [Postman](https://www.getpostman.com/).

This starter app was inspired by the following resources:

- [Simple React Full Stack](https://github.com/crsandeep/simple-react-full-stack)
- [Webpack 4 Quickstart](https://github.com/valentinogagliardi/webpack-4-quickstart)
- [Postgres Advanced Demo](https://github.com/vitaly-t/pg-promise-demo)
- [React & Redux Tutorial](https://www.valentinog.com/blog/react-redux-tutorial-beginners/)
- [React - Material UI Kit](https://www.creative-tim.com/product/material-kit-react)

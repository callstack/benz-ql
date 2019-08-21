/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const beznQL = require('../src/index');

const app = express();
const PORT = 3000;
const server = new ApolloServer(beznQL);

server.applyMiddleware({ app, path: '/benz-ql' });

app.use(express.static('static'));

app.listen(PORT, () => {
  console.log(`App listen on ${PORT}`);
  console.log(`Benz-ql avaliable on ${server.graphqlPath}`);
});

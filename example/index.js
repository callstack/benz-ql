/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import fs from 'fs';
import path from 'path';

import beznQL from '../src/index.js';

const app = express();
const PORT = 3000;
const server = new ApolloServer(beznQL('sandbox'));

server.applyMiddleware({ app, path: '/benz-ql' });

app.use('*', (req, res) => {
  const stream = fs.createReadStream(path.join(__dirname, 'static/index.html'));
  stream.pipe(res);
});

app.listen(PORT, () => {
  console.log(`App listen on ${PORT}`);
  console.log(`Benz-ql avaliable on ${server.graphqlPath}`);
});

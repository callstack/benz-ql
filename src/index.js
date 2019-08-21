const exampleTypeDef = require('./typeDefs/example');
const exampleResolver = require('./resolvers/example');

module.exports = {
  typeDefs: [exampleTypeDef],
  resolvers: [exampleResolver],
};

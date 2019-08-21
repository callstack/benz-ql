const exampleTypeDef = require('./typeDefs/example');
const exampleResolver = require('./resolvers/example');
const authContext = require('./authContext');

module.exports = {
  typeDefs: [exampleTypeDef],
  resolvers: [exampleResolver],
  context: authContext,
};

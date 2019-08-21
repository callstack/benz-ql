const typeDefs = require('./typeDefs/index');
const exampleResolver = require('./resolvers/vehicle');
const authContext = require('./authContext');
const scopes = require('./scopes');

module.exports = (scope = scopes.PROD) => ({
  typeDefs: typeDefs,
  resolvers: [exampleResolver(scope)],
  context: authContext,
});

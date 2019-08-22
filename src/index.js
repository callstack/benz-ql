import typeDefs from './typeDefs';
import resolvers from './resolvers';
import authContext from './authContext';
import scopes from './scopes';

export default (scope = scopes.PROD) => ({
  typeDefs: typeDefs,
  resolvers: resolvers(scope),
  context: authContext,
});

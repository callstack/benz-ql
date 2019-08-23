import typeDefs from './typeDefs';
import resolvers from './resolvers';
import authContext from './authContext';
import _scopes from './scopes';

export const scopes = _scopes;

export default (scope = _scopes.PROD) => ({
  typeDefs: typeDefs,
  resolvers: resolvers(scope),
  context: authContext,
});

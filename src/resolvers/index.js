import vehicleResolver from './vehicle';
import scopes from '../scopes';

export default (scope = scopes.PROD) => [vehicleResolver(scope)];

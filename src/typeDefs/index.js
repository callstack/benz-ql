import vehicleSchema from './vehicle.js';

const linkSchema = `
  type Query {
    _: Boolean
  }
`;

export default [linkSchema, vehicleSchema];

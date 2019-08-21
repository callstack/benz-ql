const vehicleSchema = require('./vehicle.js');

const linkSchema = `
  type Query {
    _: Boolean
  }
`;

module.exports = [linkSchema, vehicleSchema];

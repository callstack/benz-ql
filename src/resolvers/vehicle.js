const ConnectedVehicleStatus = require('../adapters/connectedVehicleStatus');

module.exports = scope => ({
  Query: {
    getVehicle: (parent, { id }) => ({
      id,
    }),
  },
  Vehicle: {
    stateofcharge: async ({ id: vehicleID }, _, { authToken }) => {
      const { stateofcharge } = await ConnectedVehicleStatus.withScope(scope)
        .withToken(authToken)
        .get_stateofcharge(vehicleID);
      return stateofcharge;
    },
    location: async ({ id: vehicleID }, _, { authToken }) => {
      console.log('authToken', authToken);
      const location = await ConnectedVehicleStatus.withScope(scope)
        .withToken(authToken)
        .get_location(vehicleID);
      console.log('res', location);
      return location;
    },
  },
});

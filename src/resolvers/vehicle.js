const ConnectedVehicleStatus = require('../adapters/connectedVehicleStatus');

module.exports = scope => ({
  Query: {
    getVehicle: async (parent, { id: vehicleID }, { authToken }) => {
      const data = await ConnectedVehicleStatus.withScope(scope)
        .withToken(authToken)
        .get_vehicleinfo(vehicleID);
      return data;
    },
  },
  Vehicle: {
    stateofcharge: async ({ id: vehicleID }, _, { authToken }) => {
      const { stateofcharge } = await ConnectedVehicleStatus.withScope(scope)
        .withToken(authToken)
        .get_stateofcharge(vehicleID);
      return stateofcharge;
    },
    location: async ({ id: vehicleID }, _, { authToken }) => {
      const location = await ConnectedVehicleStatus.withScope(scope)
        .withToken(authToken)
        .get_location(vehicleID);
      return location;
    },
  },
});

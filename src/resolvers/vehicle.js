import ConnectedVehicleStatus from '../adapters/connectedVehicleStatus';

export default scope => {
  const ConnectedVehicleStatusAdapter = ConnectedVehicleStatus.withScope(scope);
  return {
    Query: {
      getVehicle: async (parent, { id: vehicleID }, { authToken }) => {
        const data = await ConnectedVehicleStatusAdapter.withToken(
          authToken
        ).get_vehicleinfo(vehicleID);
        return data;
      },
      vehicles: async (_, __, { authToken }) => {
        const data = await ConnectedVehicleStatusAdapter.withToken(
          authToken
        ).get_allvehicles();
        return data;
      },
    },
    Vehicle: {
      stateofcharge: async ({ id: vehicleID }, _, { authToken }) => {
        const { stateofcharge } = await ConnectedVehicleStatusAdapter.withToken(
          authToken
        ).get_stateofcharge(vehicleID);
        return stateofcharge;
      },
      location: async ({ id: vehicleID }, _, { authToken }) => {
        const location = await ConnectedVehicleStatusAdapter.withToken(
          authToken
        ).get_location(vehicleID);
        return location;
      },
      tires: async ({ id: vehicleID }, _, { authToken }) => {
        const tires = await ConnectedVehicleStatusAdapter.withToken(
          authToken
        ).get_tires(vehicleID);
        return tires;
      },
      doors: async ({ id: vehicleID }, _, { authToken }) => {
        const doors = await ConnectedVehicleStatusAdapter.withToken(
          authToken
        ).get_doors(vehicleID);
        return doors;
      },
      odometer: async ({ id: vehicleID }, _, { authToken }) => {
        const odometer = await ConnectedVehicleStatusAdapter.withToken(
          authToken
        ).get_odometer(vehicleID);
        return odometer;
      },
      fuel: async ({ id: vehicleID }, _, { authToken }) => {
        const fuel = await ConnectedVehicleStatusAdapter.withToken(
          authToken
        ).get_fuel(vehicleID);
        return fuel;
      },
    },
  };
};

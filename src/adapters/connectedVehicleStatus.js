const Adapter = require('./Adapter');

const SANDBOX_URL =
  'https://api.mercedes-benz.com/experimental/connectedvehicle_tryout/v1';
const PROD_URL =
  'https://api.mercedes-benz.com/experimental/connectedvehicle/v1';

class ElectricVehicleStatus extends Adapter {
  constructor(sandboxUrl, prodUrl) {
    super(sandboxUrl, prodUrl);
  }

  async get_stateofcharge(vehicleID) {
    return this.performRequest(`/vehicles/${vehicleID}/stateofcharge`);
  }

  async get_location(vehicleID) {
    return this.performRequest(`/vehicles/${vehicleID}/location`);
  }
}

module.exports = new ElectricVehicleStatus(SANDBOX_URL, PROD_URL);

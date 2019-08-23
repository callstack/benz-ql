import Adapter from './Adapter';

const SANDBOX_URL =
  'https://api.mercedes-benz.com/experimental/connectedvehicle_tryout/v1';
const PROD_URL =
  'https://api.mercedes-benz.com/experimental/connectedvehicle/v1';

class ElectricVehicleStatus extends Adapter {
  constructor(sandboxUrl, prodUrl) {
    super(sandboxUrl, prodUrl);
  }

  async get_allvehicles() {
    return this.performRequest(`/vehicles`);
  }

  async get_vehicleinfo(vehicleID) {
    return this.performRequest(`/vehicles/${vehicleID}`);
  }

  async get_stateofcharge(vehicleID) {
    return this.performRequest(`/vehicles/${vehicleID}/stateofcharge`);
  }

  async get_location(vehicleID) {
    return this.performRequest(`/vehicles/${vehicleID}/location`);
  }

  async get_tires(vehicleID) {
    return this.performRequest(`/vehicles/${vehicleID}/tires`);
  }

  async get_doors(vehicleID) {
    return this.performRequest(`/vehicles/${vehicleID}/doors`);
  }

  async get_odometer(vehicleID) {
    return this.performRequest(`/vehicles/${vehicleID}/odometer`);
  }

  async get_fuel(vehicleID) {
    return this.performRequest(`/vehicles/${vehicleID}/fuel`);
  }
}

export default new ElectricVehicleStatus(SANDBOX_URL, PROD_URL);

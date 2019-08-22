import Adapter from './Adapter';

const SANDBOX_URL = 'https://api.mercedes-benz.com/vehicledata_tryout/v1';
const PROD_URL = 'https://api.mercedes-benz.com/vehicledata/v1';

class ElectricVehicleStatus extends Adapter {
  constructor(sandboxUrl, prodUrl) {
    super(sandboxUrl, prodUrl);
  }

  async get_soc(vehicleID) {
    return this.performRequest(`/vehicles/${vehicleID}/resources/soc`);
  }

  async get_rangeelectric(vehicleID) {
    return this.performRequest(
      `/vehicles/${vehicleID}/resources/rangeelectric`
    );
  }
}

export default new ElectricVehicleStatus(SANDBOX_URL, PROD_URL);

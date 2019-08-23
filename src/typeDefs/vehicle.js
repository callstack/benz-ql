import gql from 'graphql-tag';

export default gql`
  type Vehicle {
    id: String!
    stateofcharge: StateOfCharge!
    location: Location!
    licenseplate: String
    salesdesignation: String
    finorvin: String
    nickname: String
    modelyear: Int
    colorname: String
    fueltype: Int
    powerhp: Int
    powerkw: Int
    numberofdoors: Int
    numberofseats: Int
    tires: Tires
    doors: Doors
    odometer: Odometer
    fuel: Fuel
  }

  type StateOfCharge {
    value: Int!
    retrievalstatus: String!
    timestamp: Int!
    unit: String!
  }

  type Location {
    latitude: CoordInfo!
    longitude: CoordInfo!
    heading: CoordInfo!
  }

  type CoordInfo {
    value: Float!
    retrievalstatus: String!
    timestamp: Int!
  }

  type Tires {
    tirepressurefrontleft: Tire!
    tirepressurefrontright: Tire!
    tirepressurerearleft: Tire!
    tirepressurerearright: Tire!
  }

  type Tire {
    value: Int!
    retrievalstatus: String!
    timestamp: Int!
    unit: String!
  }

  type VehicleListItem {
    id: String
    licenseplate: String
    finorvin: String
  }

  type Doors {
    doorstatusfrontleft: DoorStatus
    doorstatusfrontright: DoorStatus
    doorstatusrearleft: DoorStatus
    doorstatusrearright: DoorStatus
    doorlockstatusfrontleft: DoorStatus
    doorlockstatusfrontright: DoorStatus
    doorlockstatusrearleft: DoorStatus
    doorlockstatusrearright: DoorStatus
    doorlockstatusdecklid: DoorStatus
    doorlockstatusgas: DoorStatus
    doorlockstatusvehicle: DoorStatus
  }

  type DoorStatus {
    value: String!
    retrievalstatus: String!
    timestamp: Int!
  }

  type Odometer {
    odometer: DistanceData!
    distancesincereset: DistanceData!
    distancesincestart: DistanceData!
  }

  type DistanceData {
    value: Int!
    retrievalstatus: String!
    timestamp: Int!
    unit: String!
  }
  type Fuel {
    fuellevelpercent: FuelLevelPercent!
  }

  type FuelLevelPercent {
    value: Int!
    retrievalstatus: String!
    timestamp: Int!
    unit: String!
  }

  extend type Query {
    getVehicle(id: String!): Vehicle
    vehicles: [VehicleListItem!]!
  }
`;

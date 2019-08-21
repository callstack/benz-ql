const gql = require('graphql-tag');

module.exports = gql`
  type Vehicle {
    id: String!
    stateofcharge: StateOfCharge!
    location: Location!
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

  extend type Query {
    getVehicle(id: String!): Vehicle
  }
`;

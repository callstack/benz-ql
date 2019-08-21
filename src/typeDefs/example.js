const gql = require('graphql-tag');

module.exports = gql`
  type Query {
    hello: String!
  }
`;

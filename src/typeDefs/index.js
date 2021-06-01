const gql = require("graphql-tag");

const query = require("./query");

const { types } = require("./types");

const genericTypeDefs = gql`
  scalar Date

  scalar DateTime

  interface Node {
    id: ID!
  }

  enum SortEnum {
    asc
    desc
  }

  input StringComparisonExpType {
    _in: [String]
    _nin: [String]
    _eq: String
    _neq: String
    _gt: String
    _lt: String
    _is_null: Boolean
    _like: String
    _nlike: String
  }
`;

const typeDefs = [query, genericTypeDefs, ...types];

module.exports = {
  typeDefs,
};

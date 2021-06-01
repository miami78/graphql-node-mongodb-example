const gql = require("graphql-tag");

module.exports = gql`
  type UsersConnection {
    nodes: [User]!
    count: Int
  }

  type User {
    _id: ID! @deprecated(reason: "Use id")
    id: ID!
    email: String
    firstName: String
    lastName: String
    dateOfBirth: String
    gender: String
    createdAt: String
    updatedAt: String
  }

  input UserFilterInput {
    firstName: String
  }
`;

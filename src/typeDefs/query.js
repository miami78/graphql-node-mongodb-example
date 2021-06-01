const gql = require("graphql-tag");

module.exports = gql`
    type Query {
        getUsers(limit: Int skip: Int):UsersConnection!
    }
`;
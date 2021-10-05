// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]  
}
type Book {
  _id: ID
  authors: [String]
  description: String
  title: String
  image: String 
  link: String 
}
  type Query {
    helloWorld: String
  }
`;

// export the typeDefs
module.exports = typeDefs;
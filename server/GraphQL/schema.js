import { buildSchema } from 'graphql';  


var schema = buildSchema(` 
  type Contact {
    fname: String
    lname: String
  }

  input ContactInput { 
    fname: String!
    lname: String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type Friend {
    id: ID
    fname: String
    gender: Gender
    age: Int
    contacts: [Contact]
  }

  input FriendInput {
    id: ID
    fname: String
    gender: Gender
    age: Int
    contacts: [ContactInput]
  }
 

  type Query {
    getOneFriend(id: ID!): Friend
    getAliens: [Friend]
  }
  
  type Mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
    deleteFriend(id: ID!): String
  }
`);
 

//
export default schema;
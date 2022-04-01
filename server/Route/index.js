import express from 'express';
import { graphqlHTTP } from 'express-graphql'

import schema from '../GraphQL/schema'
import resolvers from '../Controller';


const rootValue = resolvers 
var router = express.Router()



// 1st route
router.get('/', graphqlHTTP({schema, rootValue, graphiql: true}));
router.post('/', graphqlHTTP({schema, rootValue, graphiql: false}));


export default router
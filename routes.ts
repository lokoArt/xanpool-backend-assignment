import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import { rateController } from './rest/controllers/rate-controller';

export const router = express.Router();

router.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

router.get('/rest/:base/:intent', rateController.getCurrencyRate);

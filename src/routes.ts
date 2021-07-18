import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import { rateController } from './rest/controllers/rate-controller';
import apicache from 'apicache';

export const router = express.Router();

let cache = apicache.middleware;
router.use(cache('1 hour', (_: any, res: any) => res.statusCode === 200));

router.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

router.get('/rest/:base/:intent', rateController.getCurrencyRate);

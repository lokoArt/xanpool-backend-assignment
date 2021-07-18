import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type CurrencyRate {
    base: String!
    intent: String!
    rate: Float
  }

  type Query {
    getCurrencyRate(base: String!, intent: String!): CurrencyRate
  }
`);

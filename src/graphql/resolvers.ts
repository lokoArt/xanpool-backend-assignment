import CurrencyRate from "../CurrencyRate";

export const resolvers = {
  getCurrencyRate: ({base, intent}: {base: string; intent: string}) => {
    return new CurrencyRate(base, intent);
  },
};

import CurrencyRate from '../../CurrencyRate';

export const rateController = {
  getCurrencyRate: async (req: any, res: any) => {
    const currencyRate = new CurrencyRate(req.params.base, req.params.intent);
    try {
      const rate = await currencyRate.rate();
      res.json({
        base: currencyRate.base,
        intent: currencyRate.intent,
        rate
      });
    } catch (error) {
      res.status(400).send({ message: 'Confirm your subscription supports all base currencies' });
    }
  },
}

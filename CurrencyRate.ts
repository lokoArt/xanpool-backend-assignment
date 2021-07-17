import axios from 'axios';

export default class CurrencyRate {
  base: string;
  intent: string;

  constructor(base: string, intent: string) {
    this.base = base;
    this.intent = intent;
  }

  async rate() {
    try {
      const resp = await axios.get(
        `http://data.fixer.io/api/latest?access_key=${process.env.FIXER_KEY}&base=${this.base}&symbols=${this.intent}`
      );
      return +resp.data.rates[this.intent];
    } catch (error) {
      throw new Error('Confirm your subscription supports all base currencies');
    }
  }
}

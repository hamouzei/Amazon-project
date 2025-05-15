import { formatCurrency } from "../utils/money.js";

describe('test suit: formatCurrency', () => {
  it('convet cents to dollar', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });
});
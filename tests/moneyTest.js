import { formatCurrency } from "../utils/money.js";

if (formatCurrency(2095) === '20.95'){
  console.log('passed');
} else {
  console.log('failed');
}
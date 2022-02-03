import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

const testCasesFromPLNToUSD = [
  { amount: 20, from: 'PLN', to: 'USD', output: 'PLN 20.00 = $5.71' },
  { amount: 200, from: 'PLN', to: 'USD', output: 'PLN 200.00 = $57.14' },
  { amount: 345, from: 'PLN', to: 'USD', output: 'PLN 345.00 = $98.57' },
];
const testCasesFromUSDToPLN = [
  { amount: '100', from: 'USD', to: 'PLN', output: '$100.00 = PLN 350.00' },
  { amount: '20', from: 'USD', to: 'PLN', output: '$20.00 = PLN 70.00' },
  { amount: '200', from: 'USD', to: 'PLN', output: '$200.00 = PLN 700.00' },
  { amount: '300', from: 'USD', to: 'PLN', output: '$300.00 = PLN 1,050.00' },
];
const testCasesEqualInput = [
  { amount: '100', from: 'USD', to: 'USD', output: '$100.00 = $100.00' },
  { amount: '20', from: 'PLN', to: 'PLN', output: 'PLN 20.00 = PLN 20.00' },
  { amount: '0', from: 'USD', to: 'USD', output: '$0.00 = $0.00' },
];
const testCasesNegativeInput = [
  { amount: '-10', from: 'USD', to: 'USD', output: 'Wrong value...' },
  { amount: '-20', from: 'PLN', to: 'PLN', output: 'Wrong value...' },
  { amount: '-130', from: 'USD', to: 'USD', output: 'Wrong value...' },
];

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox amount={4} from="PLN" to="USD" />);
  });
  it('should render proper info about conversion when PLN -> USD', () => {
    for (let testObj of testCasesFromPLNToUSD) {
      const { amount, from, to } = testObj;
      //render component
      render(<ResultBox amount={amount} from={from} to={to} />);

      //find the main output div
      const output = screen.getByTestId('output');

      //check whether the actual content is the same as the expected content

      expect(output).toHaveTextContent(testObj.output);
      cleanup();
    }
  });
  it('should render proper info about conversion when USD -> PLN', () => {
    for (let testObj of testCasesFromUSDToPLN) {
      const { amount, from, to } = testObj;
      //render component
      render(<ResultBox amount={parseInt(amount)} from={from} to={to} />);

      //find the main output div
      const output = screen.getByTestId('output');

      //check whether the actual content is the same as the expected content
      expect(output).toHaveTextContent(testObj.output);
      cleanup();
    }
  });
  it('should render proper info if from and to inputs are equal (conversion to the same currency)', () => {
    for (let testObj of testCasesEqualInput) {
      const { amount, from, to } = testObj;
      //render component
      render(<ResultBox amount={parseInt(amount)} from={from} to={to} />);

      //find the main output div
      const output = screen.getByTestId('output');

      //check whether the actual content is the same as the expected content
      expect(output).toHaveTextContent(testObj.output);
      cleanup();
    }
  });
  it('should render proper info if input amount is negative', () => {
    for (let testObj of testCasesNegativeInput) {
      const { amount, from, to } = testObj;
      //render component
      render(<ResultBox amount={parseInt(amount)} from={from} to={to} />);

      //find the main output div
      const output = screen.getByTestId('output');

      //check whether the actual content is the same as the expected content
      expect(output).toHaveTextContent(testObj.output);
      cleanup();
    }
  });
});

import { CalculatorService, Frequency } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    service = new CalculatorService();
  });

  it('should calculate final balance correctly when interest is paid at maturity (simple interest', () => {
    // Arrange
    const principal = 10000;
    const annualRate = 1.1; 
    const years = 3;
    const frequency: Frequency = 'maturity';

    // Formula: A = P * (1 + r * t)
    const expected = principal * (1 + (annualRate / 100) * years);

    // Action
    const result = service.calculate(principal, annualRate, years, frequency);

    // Assert
    expect(result).toBeCloseTo(expected, 2); // 2 as in decimal places
  })
})
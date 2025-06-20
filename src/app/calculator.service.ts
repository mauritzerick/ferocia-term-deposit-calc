import { Injectable } from '@angular/core';

export type Frequency = 'monthly' | 'quarterly' | 'annually' | 'maturity';

@Injectable({ providedIn: 'root' })
export class CalculatorService {
  calculate(amount: number, rate: number, years: number, freq: Frequency): number | null {

    if (amount <= 0 || rate < 0 || years <= 0) {
      console.warn('Invalid input for calculation');
      return null;
    }

    const r = rate / 100;
    const n = this.getCompoundsPerYear(freq);

    try {
      if (n === 0) {
        return amount * (1 + r * years);
      }

      const finalAmount = amount * Math.pow(1 + r / n, n * years);

      if (isNaN(finalAmount) || !isFinite(finalAmount)) {
        throw new Error('Invalid result: check input values');
      }

      return finalAmount;
    } catch (error) {
      console.error('Calculation failed:', error);
      return null;
    }
  }

  private getCompoundsPerYear(freq: Frequency): number {
    const map: Record<Frequency, number> = {
      monthly: 12,
      quarterly: 4,
      annually: 1,
      maturity: 0
    };

    return map[freq] ?? 0;
  }
}

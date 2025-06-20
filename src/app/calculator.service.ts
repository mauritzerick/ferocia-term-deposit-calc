import { Injectable } from '@angular/core';

export type Frequency = 'monthly' | 'quarterly' | 'annually' | 'maturity';

@Injectable({ providedIn: 'root' })
export class CalculatorService {
    calculate(amount: number, rate: number, years: number, frequency: Frequency): number {
        let n = this.getCompoundsPerYear(frequency);
        if (n === 0 ) return amount * (1 + (rate / 100) * years);

        const r = rate / 100;
        return amount * Math.pow(1 + r / n, n * years);
    }

    private getCompoundsPerYear(frequency: Frequency): number {
        return {
            monthly: 12,
            quarterly: 4,
            annually: 1,
            maturity: 0
        } [frequency];
    }
}
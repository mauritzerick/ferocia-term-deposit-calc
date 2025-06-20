import { Component } from '@angular/core';
import { CalculatorService, Frequency } from './calculator.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  form = {
    amount: 10000,
    rate: 1.1,
    term: 3,
    frequency: 'maturity' as Frequency
  };
  result: number | null = null;

  constructor(private calcService: CalculatorService) {}

  calculate() {
    const { amount, rate, term, frequency } = this.form;
    this.result = this.calcService.calculate(amount, rate, term, frequency);
  }
}

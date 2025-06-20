# FerociaTermDepositCalc

This Angular app calculates the final balance of term deposit based on user input.
This is built for the Ferocia's take home coding challenge and demonstrates simple clean code structures and UI implementation of the calculator

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Features

- Accepts:
  - Initial deposit amount
  - Annual interest rate (%)
  - Term (in years)
  - Interest payout frequency (monthly, quarterly, annually, or at maturity)
- Calculates final balance using compound or simple interest logic
- Outputs final result in AUD currency
- Unit tested with Karma

---


## Calculation Logic

### Compound Interest

Used for monthly, quarterly, or annual frequencies:

A = P × (1 + r/n)<sup>nt</sup>

Where:
- `A`= final amount
- `P` = principal
- `r` = annual interest rate
- `n` = number of compounding periods per year
- `t` = term in years

### Simple Interest

Used when interest is paid at maturity:

\[
A = P \times (1 + rt)
\]

---

## Sample

**Input:**
- Amount: $10,000  
- Interest: 1%  
- Term: 3 years  
- Frequency: Monthly

**Output:**
- Sample Final Balance: **$10,304.54**

---


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running unit tests without browser (CLI  mode)

To execute unit tests without browser, use the following command:

```bash
ng test --watch=false --browsers=ChromeHeadless
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

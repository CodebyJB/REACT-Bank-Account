````markdown
# Bank Account Management with useReducer and React

This project is a simple bank account management application built using React and the `useReducer` hook. It allows users to open an account, deposit, withdraw, request loans, pay loans, and close accounts.

## Features

- Open an account with an initial bonus balance.
- Deposit funds into the account.
- Withdraw funds from the account.
- Request loans, adding the loan amount to the account balance.
- Pay back loans, subtracting the loan amount from the account balance.
- Close the account if the balance is zero and there are no outstanding loans.

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies using the following command:

```sh
npm install
```
````

3. Start the development server:

```sh
npm start
```

The application will be accessible at `http://localhost:3000`.

## Usage

1. Click the "Open Account" button to start.
2. Use the input fields to provide necessary information for each action:
   - Deposit: Enter the amount you want to deposit and click the "Deposit" button.
   - Withdraw: Enter the amount you want to withdraw and click the "Withdraw" button.
   - Request a Loan: Enter the amount you want to request as a loan and click the "Request a loan" button.
   - Pay Loan: Enter the amount you want to pay back and click the "Pay loan" button.
3. The account's balance and loan information will be displayed on the page.
4. You can perform multiple actions in succession.
5. Click the "Close Account" button to close the account if the balance is zero and there are no outstanding loans.

## Technologies Used

- React
- `useReducer` Hook
- HTML
- CSS

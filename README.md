# Personal Finance Dashboard 

## Overview

The Personal Finance Dashboard is a React application designed to help users
view and organize their financial transactions. It displays income, expenses,
remaining balance, transaction details, and category summaries.

The project was built to practice React fundamentals, JavaScript array methods,
reusable components,props and Bootstrap styling.

## Features

- **Financial Summary:** Displays total income, total expenses, and remaining balance.
- **Transaction List:** Displays transaction details, including title, amount, type, category, and date.
- **Financial Insights:** Presents key transaction statistics.
- **Category Summary:** Displays financial information grouped by category.
- **Conditional Styling:** Uses different colors to distinguish income from expenses.
- **Responsive Layout:** Uses Bootstrap's grid system to display cards across different screen sizes.

## Technologies Used

- React
- JavaScript
- HTML
- Bootstrap CSS

## Project Structure

The project is organized as follows:

```text
finance-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── SummaryCard.jsx
│   │   ├── Transaction.jsx
│   │   ├── TransactionList.jsx
│   │   ├── FinancialInsights.jsx
│   │   └── CategorySummary.jsx
│   ├── data/
│   │   └── transactions.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## Installation

1. Clone the repo: 
git clone <git@github.com:newmorin2/FInance-Dashboard--App.git>

2. Navigate to the directory:
cd finance-dashboard

3. Install the dependencies:
npm install

4. Run the server:
npm run dev

## Future Improvements
- Filtering transactions by category or date.
- Searching for specific transactions.
- Storing transactions in local storage or a database.
- Implementing transaction editing and deletion.
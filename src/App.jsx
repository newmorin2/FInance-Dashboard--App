import transactions from './data/transactions'
import './App.css'
import SummaryCard from './components/SummaryCard'
import TransactionList from './components/TransactionList'
import CategorySummary from './components/CategorySummary'
import FinancialInsights from './components/FinancialInsights'

function App() {

  const totalIncomeFilter = transactions.filter((inc) => inc.type == 'Income')
  const totalIncome = totalIncomeFilter.reduce((acc,tot) => acc + tot.amount,0)

  const totalExpenseFilter = transactions.filter((exp) => exp.type == 'Expense')
  const totalExpense = totalExpenseFilter.reduce((acc,exp) => acc + exp.amount,0)

  const balance = totalIncome - totalExpense

  //Displaying Category Earning Section
  const freelanceEarning = transactions.filter((free) => free.type === 'Income' && free.category === 'Freelance')
  const freelanceTotal = freelanceEarning.reduce((acc,free) => acc + free.amount,0)

  const salaryEarning = transactions.filter((sal) => sal.type === "Income" && sal.category === "Salary")
  const salaryTotal = salaryEarning.reduce((acc,sal) => acc + sal.amount,0 )


  //Displaying Category Spending Section
  const housingSpending = transactions.filter((hou) => hou.type === 'Expense' && hou.category === 'Housing')
  const housingTotal = housingSpending.reduce((acc,hous) => acc + hous.amount,0)

  const foodSpending = transactions.filter((foo) => foo.type === "Expense" && foo.category === "Food")
  const foodTotal = foodSpending.reduce((acc,food) => acc + food.amount,0 )

  const transportSpending = transactions.filter((tran) => tran.type === "Expense" && tran.category === "Transport")
  const transportTotal = transportSpending.reduce((acc,tran) => acc + tran.amount,0)

  const utilitiesSpending = transactions.filter((util) => util.type === "Expense" && util.category === "Utilities")
  const utilTotal = utilitiesSpending.reduce((acc,util) => acc + util.amount,0)

  const shoppingSpending = transactions.filter((shop) => shop.type === "Expense" && shop.category === "Shopping")
  const shoppingTotal = shoppingSpending.reduce((acc,shop) => acc + shop.amount,0)

  //Display Financial Insights Section
  const typeIncome = transactions.filter((inc) => inc.type === 'Income')
  const displayIncomeType = typeIncome.length

  const typeExpense = transactions.filter((exp) => exp.type === 'Expense')
  const displayExpenseType = typeExpense.length

  const averageSpending = (totalExpense / displayExpenseType).toFixed(2)

  return(
    <div className='bg-dark text-white'>
    <div className=' container py-3'>

      <h3 className='text-center mb-4'>Personal Finance Dashboard</h3>

      <div className='row g-3 mt-4 mb-4'>
        <h3>Summary</h3>
        <SummaryCard title = "Total Income" calculatedAmount = {totalIncome} description = "Total money received"/>
        <SummaryCard title = "Total Expenses" calculatedAmount = {totalExpense} description = "Total money spent"/>
        <SummaryCard title = "Balance" calculatedAmount = {balance} description = 'Remaining Balance'/>
      </div>
      
      <div>
        <TransactionList />
      </div>
      
      <div className='row g-3 mt-4'>
        <h3>Category Earnings</h3>
        <CategorySummary title = "Salary" amount = {salaryTotal} category = "Salary" date = {transactions.date} />
        <CategorySummary title = "Freelance" amount = {freelanceTotal} category = "Freelance" />
      </div>

      <div className='row g-3 mt-4'>
        <h3>Category Spending</h3>
        <CategorySummary title = "Housing" amount = {housingTotal} category = 'Housing' />
        <CategorySummary title = "Food" amount = {foodTotal} category = "Food" />
        <CategorySummary title = "Transport" amount = {transportTotal} category = "Transport" />
        <CategorySummary title = "Utilities" amount = {utilTotal} category = "Utilities"/>
        <CategorySummary title = "Shopping" amount = {shoppingTotal} category = "Shopping" />
      </div>

      <div className='row g-3 mt-4'>
        <h3 >Financial Insights</h3>
        <FinancialInsights title = "Income Transactions" noOf = {displayIncomeType} />
        <FinancialInsights title = "Expense Transactions" noOf = {displayExpenseType} />
        <FinancialInsights title = "Average Spending" noOf = {averageSpending} />
      </div>
    </div>
    </div>
  )
}

export default App

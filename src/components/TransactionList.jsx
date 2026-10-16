import transactions from "../data/transactions"
import Transaction from "./Transaction"

function TransactionList(){
   
    const display = transactions.map((dis) => (
        <Transaction
            key={dis.id}
            title={dis.title}
            amount={dis.amount}
            type={dis.type}
            category={dis.category}
            date={dis.date}
        />
    ));

    return(
        <div >
            <h3>Recent Transactions</h3>

            <div className="row g-4">
                {display}
            </div>
        </div>
    )
}
export default TransactionList
function Transaction(props) {
    return(
         <div className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5>{props.title}</h5>

                    <h6>
                        Amount: KSh {props.amount.toLocaleString()}
                    </h6>
                    <h6>
                        Type:{" "}
                        <span className={`badge ${props.type === "income" ? "bg-success  " : "bg-danger  "}`}>
                            {props.type}
                        </span>
                    </h6>
                    <h6>Category: {props.category}</h6>
                    <h6>Date: {props.date}</h6>
                </div>
            </div>
        </div>
    )
}
export default Transaction
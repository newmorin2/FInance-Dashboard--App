
function CategorySummary(props){

    return(
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5>{props.title}</h5>
                    <h6>
                        <span className={`badge ${props.category === 'Salary' || props.category === "Freelance" ? 'bg-success':'bg-danger'}`}>
                            Ksh {props.amount.toLocaleString()}
                        </span>
                    </h6>
                </div>
            </div>
        </div>
    )
}
export default CategorySummary
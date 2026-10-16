
function FinancialInsights(props){
    return(
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5 className="mt-4 mb-4">{props.title} : <span style={{fontSize:'20px'}}>{props.noOf}</span></h5>
                </div>
            </div>
        </div>
    )
}
export default FinancialInsights
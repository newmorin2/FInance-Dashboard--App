
function SummaryCard(props){
    return(
        <div className='col-12 col-sm-6 col-lg-4' key={props.id}>
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5 className='card-title'>
                        {props.title}
                    </h5>
                     <h5>
                        Ksh{props.calculatedAmount.toLocaleString()}
                    </h5> 
                    <h6 className='card-title text-muted'>
                        {props.description}
                    </h6>
                </div>
            </div>
        </div>
    )
}
export default SummaryCard
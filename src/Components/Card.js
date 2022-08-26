
const Card = ({ date, time, message, email }) => {
    return (
        <div className="card mb-4 border-0">
            <div className="card-body p-4">
                <p className="card-text">{message}</p>
            </div>
            <div className="card-footer bg-dark text-warning fw-bold">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        {email}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6  text-end">
                        {date} / {time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
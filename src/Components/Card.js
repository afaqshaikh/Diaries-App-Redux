
const Card = ({date,time,message}) => {
    return (
        <div className="card mb-4 border-0 shadow-sm">
            <div className="card-body p-4">
                <p className="card-text">{message}</p>
            </div>
            <div className="card-footer bg-dark text-end text-warning fw-bold">
              {date} / {time}
            </div>
        </div>
    )
}

export default Card

function BusinessCard(props) {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.logoUrl} className="card-img-top" alt={`${name} logo`} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="icon me-3">
                            <i className="bi bi-building-fill"></i>
                        </span>
                        <span >{props.address}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="icon me-3">
                            <i className="bi bi-telephone-fill"></i>
                        </span>
                        <span>{props.phone}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="icon me-3">
                            <i className="bi bi-globe"></i>
                        </span>
                        <span>{props.website}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="icon me-3">
                            <i className="bi bi-envelope-fill"></i>
                        </span>
                        <span>{props.email}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BusinessCard;
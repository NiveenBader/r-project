function BusinessCard({
  logoUrl,
  name,
  description,
  address,
  phone,
  website,
  email,
}) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={logoUrl} className="card-img-top" alt={`${name} logo`} />
        <div className="card-body">
          <h5 className="card-title">
            {name[0].toUpperCase() + name.slice(1)}
          </h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="icon me-3">
              <i className="bi bi-building-fill"></i>
            </span>
            <span>{address}</span>
          </li>
          {phone ? (
            <li className="list-group-item">
              <span className="icon me-3">
                <i className="bi bi-telephone-fill"></i>
              </span>
              <span>{phone}</span>
            </li>
          ) : null}

          <li className="list-group-item">
            <span className="icon me-3">
              <i className="bi bi-globe"></i>
            </span>
            <span>{website}</span>
          </li>
          <li className="list-group-item">
            <span className="icon me-3">
              <i className="bi bi-envelope-fill"></i>
            </span>
            <span>{email}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BusinessCard;

import Counter from "./Counter";

function Product({
  product: {
    id,
    title,
    category,
    description,
    image: { url, alt },
    price,
    discount,
    instock,
    quantitiy,
  },
}) {
  const discountedPrice = price * (1 - discount);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={url} alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
          <p className="card-text">{description}</p>
        </div>

        <div className="card-body">
          <span className="fs-3 text-danger text-decoration-line-through">
            {price}$
          </span>
          <span className="ms-4 fs-1">{discountedPrice}$</span>

          <Counter />
        </div>
      </div>
    </div>
  );
}

export default Product;

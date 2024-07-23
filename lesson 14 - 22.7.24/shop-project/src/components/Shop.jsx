import { useState } from "react";
import Product from "./Product";
import initialProducts from "../data/products";

function Shop() {
  const [products, setProducts] = useState(initialProducts);

  if (!products.length) {
    return <div> No Products Yet!</div>;
  }
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 ">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;

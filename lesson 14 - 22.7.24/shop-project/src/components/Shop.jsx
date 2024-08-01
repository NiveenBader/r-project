import { useState } from "react";
import Product from "./Product";
import initialProducts from "../data/products";

function Shop() {
  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id, quantitiy) =>
    setProducts((products) =>
      products.map((product) => {
        if (product.id !== id) {
          return product;
        }

        return { ...product, quantitiy };
      })
    );
  if (!products.length) {
    return <div> No Products Yet!</div>;
  }
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4 ">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onChange={(quantity) => updateQuantity(product.id, quantity)}
        />
      ))}
    </div>
  );
}

export default Shop;

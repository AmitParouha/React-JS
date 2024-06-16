import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product-1" },
  { id: "p2", title: "Product-2" },
  { id: "p3", title: "Product-3" },
];

function ProductPage() {
  return (
    <>
      <div>This is a ProductPage</div>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={"/product/" + product.id} style={{color: "white"}}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductPage;

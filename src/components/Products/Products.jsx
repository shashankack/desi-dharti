import React from "react";
import "./Products.css";
import ghee from "../../assets/ghee.png";
import milk from "../../assets/milk.png";
import butterMilk from "../../assets/butter-milk.png";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Milk",
      image: milk,
      buyNow: "Buy Now",
    },
    {
      id: 2,
      name: "Ghee",
      image: ghee,
      buyNow: "Buy Now",
    },
    {
      id: 3,
      name: "Butter Milk",
      image: butterMilk,
      buyNow: "Buy Now",
    },
  ];

  return (
    <section className="product-section" id="products">
      <div className="product-container">
        <h1>What we Offer</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img className="product-image" src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <button className="product-button" >{product.buyNow}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

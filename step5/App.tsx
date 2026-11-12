import "./App.css";
import ProductCard from "./components/ProductCard";
import Header from "./Header";
import { products, type Product } from "./products";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const visibleProducts = products.filter(
    (product) =>
      product.title.includes(searchTerm)
  );  
  return (
    <>
      <Header onSearch={setSearchTerm} />    
      <main className="card">
        <h1>오늘의 추천 상품</h1>
        <div className="product-grid">
          {visibleProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              imageurl={product.imageurl}
              inStock={product.inStock}
            />
          ))}
        </div>
      </main>
    </>
  );
}
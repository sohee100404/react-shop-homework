import "./App.css";
import ProductCard from "./components/ProductCard";
import Header from "./Header";
import { products, type Product } from "./products";
import { useState } from "react";
import type { CartItem } from "./types/cart";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  function handleAddToCart(product: Product) {
  if (!product.inStock) return;

  setCart((prev) => {
    const existingItem = prev.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      return prev.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { product, quantity: 1 }];
  });
}
  const visibleProducts = products.filter(
    (product) =>
      product.title.includes(searchTerm)
  );  
  const cartCount = cart.reduce(
  (sum, item) => sum + item.quantity,
  0
);

const cartTotal = cart.reduce(
  (sum, item) =>
    sum + item.product.price * item.quantity,
  0
);
  return (
    <>
      <Header
      onSearch={setSearchTerm}
      cart={cart}
      cartCount={cartCount}
      cartTotal={cartTotal}
      />    
      <main className="card">
        <h1>오늘의 추천 상품</h1>
        {visibleProducts.length === 0 ? (
  <p className="empty-message">검색 결과가 없습니다.</p>
) : (
  <section className="product-grid">
    {visibleProducts.map((product: Product) => (
      <ProductCard
  key={product.id}
  product={product}
  onAddToCart={handleAddToCart}
/>
    ))}
  </section>
)}
      </main>
    </>
  );
}
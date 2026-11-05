import "./App.css";
import ProductCard from "./components/ProductCard";
import Header from "./Header";

export default function App() {
  return (
    <>
    <Header />
    <main className="card">
      <h1>오늘의 추천 상품</h1>
<div className = "product-grid">

      <ProductCard title="무선 헤드폰" price={59000} image="./public/headphone.jpg" />
      <ProductCard title="스마트 워치" price={39000} image="./public/watch.jpg" />
      
</div> 
    </main>
  </>
);
}
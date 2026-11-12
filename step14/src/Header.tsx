import { useState } from "react";
import type { CartItem } from "./types/cart";
import CartPanel from "./components/CartPanel";

type HeaderProps = {
  onSearch: (keyword: string) => void;
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
};

export default function Header({
  onSearch,
  cart,
  cartCount,
  cartTotal,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <header className="site-header">
      <span className="logo">나의 쇼핑몰</span>

      <form className="search" onSubmit={(event) => {
        event.preventDefault();
        onSearch(searchQuery.trim());
      }}>
        <input
        type="search"
        aria-label="상품 검색"
        placeholder="상품 검색"
        value={searchQuery}
        onChange={(event) =>
          setSearchQuery(event.target.value)
        }
        />
        <button type="submit">검색</button>
      </form>
      <div className="cart-area">
  <button
    type="button"
    className="cart-toggle"
    aria-expanded={isCartOpen}
    aria-controls="cart-panel"
    onClick={() => setIsCartOpen((prev) => !prev)}
  >
    장바구니 <span>{cartCount}</span>
  </button>
  {isCartOpen && <CartPanel items={cart} 
  total={cartTotal} />}
</div>
    </header>
  );
}
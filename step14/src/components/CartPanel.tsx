import type { CartItem } from "../types/cart";

type CartPanelProps = {
  items: CartItem[];
  total: number;
};

export default function CartPanel({ items, total }: CartPanelProps) {
  return (
    <aside id="cart-panel" className="cart-panel">
      <h2>장바구니</h2>
      {items.length === 0 ? (
  <p>장바구니가 비어 있습니다.</p>
) : (
  <>
    <ul className="cart-items">
      {items.map((item) => (
        <li key={item.product.id}>
  <img src={item.product.imageurl} alt="" />
  <div>
    <h3>{item.product.title}</h3>
    <p>수량 {item.quantity}개</p>
    <strong>
      {(item.product.price * item.quantity).toLocaleString("ko-KR")}원
    </strong>
  </div>
</li>
      ))}
    </ul>
    <p>상품 합계 {total.toLocaleString()}원</p>
  </>
)}
    </aside>
  );
}
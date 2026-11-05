type ProductCardProps = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <article className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p className="price">{price}원</p>
      <button type="button">장바구니 담기</button>
    </article>
 );
}

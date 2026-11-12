import type { Product } from "../products";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const { title, price, imageurl, inStock 
  } = product;

  return (
        <article className="product-card">
            <img src={imageurl} alt={title} />
            <div className="product-info">
                <h2>{title}</h2>
                <p className="price">{price.toLocaleString('ko-KR')}원</p>
                <p>{inStock ? '구매 가능' : '품절'}</p>
                <button className="add-button" 
                disabled={!inStock} 
                type="button" 
                onClick={() => onAddToCart(product)}>
                    {inStock ? '장바구니 담기' : '품절'}
                    </button>
            </div>
        </article>
    );
}

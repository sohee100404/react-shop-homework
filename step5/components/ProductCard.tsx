import type { Product } from '../products';

type ProductCardProps = {
  title: string;
  price: number;
  imageurl: string;
  inStock: boolean;
};

export default function ProductCard({ 
    title, price, imageurl, inStock 
}: ProductCardProps) {
  return (
        <article className="product-card">
            <img src={imageurl} alt={title} />
            <div className="product-info">
                <h2>{title}</h2>
                <p className="price">{price.toLocaleString('ko-KR')}원</p>
                <p>{inStock ? '구매 가능' : '품절'}</p>
                <button className="add-button" disabled={!inStock}>
                    {inStock ? '담기' : '품절'}
                </button>
            </div>
        </article>
    );
}

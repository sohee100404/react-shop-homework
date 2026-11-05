export default function Header() {
  return (
    <header className="site-header">
      <span className="logo">나의 쇼핑몰</span>

      <div className="search">
        <input
          type="search"
          aria-label="상품 검색"
          placeholder="상품을 검색해 보세요"
        />
        <button type="button">검색</button>
      </div>
    </header>
  );
}

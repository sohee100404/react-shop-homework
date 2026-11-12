import { useState } from "react";

type HeaderProps = {
  onSearch: (keyword: string) => void;
};

export default function Header({ onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

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
    </header>
  );
}
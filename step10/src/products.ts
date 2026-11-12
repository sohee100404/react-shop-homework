export type Product = {
    id: number;
    title: string;
    price: number;
    imageurl: string;
    inStock: boolean;
};
export const products: Product[] = [
  { 
    id: 1, 
    title: '무선 헤드폰',
    price: 59000,
    imageurl: '/headphone.jpg',
    inStock: true,
  },
  {
    id: 2, 
    title: '스마트워치',
    price: 39000,
    imageurl: '/watch.jpg',
    inStock: true,
  },
  { id: 3, 
    title: '기계식 키보드',
    price: 100000,
    imageurl: '/keyboard.jpg',
    inStock: false,
  }
];
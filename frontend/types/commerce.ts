export type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  collection: string;
  price: number;
  color: string;
  colors: string[];
  sizes: string[];
  material: string;
  images: string[];
  description: string;
  rating: number;
  stock: number;
};

export type CartLine = {
  product: Product;
  size: string;
  color: string;
  quantity: number;
};

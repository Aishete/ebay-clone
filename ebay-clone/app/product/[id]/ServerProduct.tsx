import ClientProduct from './ClientProduct'

export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  seller: {
    name: string;
    rating: number;
    sales: number;
  };
  stock: number;
  specs: Record<string, string>;
  freeShipping: boolean;
}

export default function ServerProduct({ product }: { product: Product }) {
  return <ClientProduct product={product} />
}

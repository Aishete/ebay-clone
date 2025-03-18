'use client';
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

interface Product {
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

export default function ClientProduct({ product }: { product: Product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="md:w-1/2">
          <div className="relative aspect-square mb-4">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.slice(1).map((image: string, index: number) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image}
                  alt={`${product.title} - ${index + 2}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center gap-4 mb-4">
            <p className="text-2xl text-blue-600 font-bold">${product.price.toFixed(2)}</p>
            {product.freeShipping && (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm">
                Free Shipping
              </span>
            )}
          </div>

          {/* Seller Info */}
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="font-semibold">Sold by: {product.seller.name}</p>
            <div className="flex items-center gap-2">
              <span>Rating: {product.seller.rating}/5</span>
              <span>•</span>
              <span>{product.seller.sales.toLocaleString()} sales</span>
            </div>
          </div>

          {/* Stock Info */}
          <p className="mb-4">
            Stock: <span className="font-semibold">{product.stock} available</span>
          </p>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="whitespace-pre-line text-gray-600">{product.description}</p>
          </div>

          {/* Specifications */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Specifications</h2>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-sm text-gray-600">{key}</span>
                  <span className="font-medium">{String(value)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className="w-full h-12 text-lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

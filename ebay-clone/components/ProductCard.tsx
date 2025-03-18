'use client';

import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/button';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  condition: string;
  freeShipping: boolean;
}

export default function ProductCard(props: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if card is wrapped in Link
    addToCart({
      id: props.id,
      title: props.title,
      price: props.price,
      image: props.image,
      quantity: 1
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="relative aspect-square mb-3">
          <Image
            src={props.image}
            alt={props.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="font-semibold text-sm mb-2 line-clamp-2">{props.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${props.price.toFixed(2)}</span>
          <Button
            size="icon"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2 mt-2">
          {props.condition && (
            <Badge variant="secondary">{props.condition}</Badge>
          )}
          {props.freeShipping && (
            <Badge variant="secondary">Free Shipping</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

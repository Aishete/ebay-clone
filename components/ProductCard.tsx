import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  condition: string;
  freeShipping?: boolean;
}

export default function ProductCard({ id, title, price, image, condition, freeShipping }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden">
      <CardContent className="p-0">
        <Link href={`/product/${id}`}>
          <div className="relative aspect-square">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </Link>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 p-4">
        <div className="flex items-start justify-between w-full">
          <Link href={`/product/${id}`}>
            <h3 className="font-medium line-clamp-2 hover:underline">{title}</h3>
          </Link>
          <Button variant="ghost" size="icon" className="ml-2 flex-shrink-0">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{condition}</Badge>
          {freeShipping && (
            <Badge variant="outline" className="text-green-600">
              Free Shipping
            </Badge>
          )}
        </div>
        <p className="text-lg font-semibold">${price.toFixed(2)}</p>
      </CardFooter>
    </Card>
  );
}
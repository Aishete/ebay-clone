import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { Card, CardContent } from '@/components/ui/card';

const featuredProducts = [
  {
    id: '1',
    title: 'Apple iPhone 13 Pro - 128GB - Graphite (Unlocked)',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=500',
    condition: 'New',
    freeShipping: true,
  },
  {
    id: '2',
    title: 'Sony PlayStation 5 Console - Digital Edition',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=500',
    condition: 'New',
    freeShipping: true,
  },
  {
    id: '3',
    title: 'Nike Air Jordan 1 Retro High OG',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&q=80&w=500',
    condition: 'New',
    freeShipping: true,
  },
  {
    id: '4',
    title: 'Samsung 65" Class OLED 4K Smart TV',
    price: 1799.99,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=500',
    condition: 'New',
    freeShipping: true,
  },
];

const categories = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=500',
  },
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=500',
  },
  {
    name: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=500',
  },
  {
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=500',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <Image
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2000"
          alt="Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-start p-12">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold mb-4">Spring Sale</h1>
            <p className="text-xl mb-8">
              Get up to 70% off on selected items. Limited time offer!
            </p>
            <Button size="lg" className="text-lg">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="group cursor-pointer overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard {...product} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

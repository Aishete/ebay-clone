
import Image from 'next/image'
import { getProductById, getAllProducts } from '../../utils/getdata'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-2xl text-blue-600 font-bold mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

import { getProductById, getAllProducts } from '../../utils/getdata'
import { notFound } from 'next/navigation'
import ServerProduct, { Product } from './ServerProduct'


export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id) as unknown as Product

  if (!product) {
    notFound()
  }

  return <ServerProduct product={product} />
}

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
      <p className="mb-4">The product you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  )
}

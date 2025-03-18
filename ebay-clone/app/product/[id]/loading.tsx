export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
        </div>
        <div className="md:w-1/2">
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="h-24 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="h-40 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}

'use client'
import { createClient } from '../src/utils/supabase/client'
import { useEffect, useState } from 'react'
import { Database } from '../src/types/database.types'
import ProductCard from '../src/components/ProductCard'

// Usamos el tipo real de la base de datos
type Product = Database['public']['Tables']['products']['Row']

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const getProducts = async () => {
      const { data, error } = await supabase.from('products').select('*')
      if (data) setProducts(data)
      setLoading(false)
    }
    getProducts()
  }, [])

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Nuevas Colecciones
        </h1>
        <p className="mt-2 text-gray-500">Diseños exclusivos para el día más importante.</p>
      </div>

      {/* Estado de Carga (Skeleton simple) */}
      {loading ? (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square w-full animate-pulse rounded-xl bg-gray-200" />
          ))}
        </div>
      ) : (
        /* Grilla de Productos Real */
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  )
}
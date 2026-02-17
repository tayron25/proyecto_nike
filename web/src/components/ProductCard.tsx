import { Database } from '../types/database.types'
import Image from 'next/image'
import Link from 'next/link'

// Definimos que este componente recibe "un producto" que cumple con la forma de nuestra base de datos
type Product = Database['public']['Tables']['products']['Row']

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link href={`/product/${product.slug}`} className="group block">
            {/* Contenedor de la Imagen con Aspect Ratio cuadrado */}
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
                {/* Placeholder mientras no tengamos imágenes reales */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-sm">Sin imagen</span>
                </div>

                {/* Aquí iría la imagen real cuando subamos fotos. Por ahora dejamos la estructura lista */}
                {/* <Image 
            src={bucket_url} 
            alt={product.name}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        /> */}
            </div>

            {/* Información del Producto */}
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm font-medium text-gray-900">
                        {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{/* Categoría aquí luego */}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(product.base_price)}
                </p>
            </div>
        </Link>
    )
}
'use client'
import { createClient } from '../src/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mensaje, setMensaje] = useState('Conectando...')
  const supabase = createClient()

  useEffect(() => {
    const probarConexion = async () => {
      // Intentamos pedir los productos
      const { data, error } = await supabase.from('products').select('*')

      if (error) {
        console.error(error)
        setMensaje('Error: ' + error.message)
      } else {
        setMensaje('¡Éxito! Conexión establecida. Productos encontrados: ' + data.length)
      }
    }
    probarConexion()
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold">{mensaje}</h1>
    </div>
  )
}
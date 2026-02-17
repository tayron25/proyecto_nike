export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            categories: {
                Row: {
                    id: string
                    name: string
                    slug: string
                    description: string | null
                    parent_id: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    slug: string
                    description?: string | null
                    parent_id?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    slug?: string
                    description?: string | null
                    parent_id?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            products: {
                Row: {
                    id: string
                    category_id: string | null
                    name: string
                    slug: string
                    description: string | null
                    base_price: number
                    is_active: boolean
                    metadata: Json
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    category_id?: string | null
                    name: string
                    slug: string
                    description?: string | null
                    base_price: number
                    is_active?: boolean
                    metadata?: Json
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    category_id?: string | null
                    name?: string
                    slug?: string
                    description?: string | null
                    base_price?: number
                    is_active?: boolean
                    metadata?: Json
                    created_at?: string
                    updated_at?: string
                }
            }
            product_variants: {
                Row: {
                    id: string
                    product_id: string
                    sku: string
                    price: number
                    compare_at_price: number | null
                    attributes: Json
                    is_active: boolean
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    product_id: string
                    sku: string
                    price: number
                    compare_at_price?: number | null
                    attributes?: Json
                    is_active?: boolean
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    product_id?: string
                    sku?: string
                    price?: number
                    compare_at_price?: number | null
                    attributes?: Json
                    is_active?: boolean
                    created_at?: string
                    updated_at?: string
                }
            }
            inventory_items: {
                Row: {
                    id: string
                    variant_id: string
                    quantity: number
                    reserved_quantity: number
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    variant_id: string
                    quantity?: number
                    reserved_quantity?: number
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    variant_id?: string
                    quantity?: number
                    reserved_quantity?: number
                    created_at?: string
                    updated_at?: string
                }
            }
            product_images: {
                Row: {
                    id: string
                    product_id: string
                    variant_id: string | null
                    storage_path: string
                    alt_text: string | null
                    width: number | null
                    height: number | null
                    blurhash: string | null
                    display_order: number
                    created_at: string
                }
                Insert: {
                    id?: string
                    product_id: string
                    variant_id?: string | null
                    storage_path: string
                    alt_text?: string | null
                    width?: number | null
                    height?: number | null
                    blurhash?: string | null
                    display_order?: number
                    created_at?: string
                }
                Update: {
                    id?: string
                    product_id?: string
                    variant_id?: string | null
                    storage_path?: string
                    alt_text?: string | null
                    width?: number | null
                    height?: number | null
                    blurhash?: string | null
                    display_order?: number
                    created_at?: string
                }
            }
        }
    }
}
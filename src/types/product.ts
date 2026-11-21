export type ProductCategory = 'optical' | 'sunglasses'
export type ProductFilter = 'all' | ProductCategory

export interface Product {
  id: string
  name: string
  category: ProductCategory
  frameMaterial?: string
  frameShape?: string
  color?: string
  price?: number
  image: string
  available: boolean
  description?: string
  demo?: boolean
}

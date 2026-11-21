import type { Product } from '../types/product'

// DEMO DATA. Replace these examples with confirmed store inventory.
export const products: readonly Product[] = [
  { id: 'OF-001', name: 'Classic Rectangle', category: 'optical', frameShape: 'Rectangle', color: 'Black', price: 1190, image: '/images/products/of-001.webp', available: true, demo: true },
  { id: 'OF-002', name: 'Soft Round', category: 'optical', frameShape: 'Round', color: 'Amber', price: 1390, image: '/images/products/of-002.webp', available: true, demo: true },
  { id: 'OF-003', name: 'Everyday Square', category: 'optical', frameShape: 'Square', color: 'Slate', price: 1290, image: '/images/products/of-003.webp', available: true, demo: true },
  { id: 'OF-004', name: 'Fine Oval', category: 'optical', frameShape: 'Oval', color: 'Gold', price: 1590, image: '/images/products/of-004.webp', available: true, demo: true },
  { id: 'OF-005', name: 'Lifted Cat Eye', category: 'optical', frameShape: 'Cat eye', color: 'Plum', price: 1490, image: '/images/products/of-005.webp', available: true, demo: true },
  { id: 'OF-006', name: 'Clear Square', category: 'optical', frameShape: 'Square', color: 'Crystal', image: '/images/products/of-006.webp', available: false, demo: true },
  { id: 'OF-007', name: 'Warm Tortoise', category: 'optical', frameShape: 'Rectangle', color: 'Tortoise', price: 1490, image: '/images/products/of-007.webp', available: true, demo: true },
  { id: 'OF-008', name: 'Slim Round', category: 'optical', frameShape: 'Round', color: 'Silver', price: 1690, image: '/images/products/of-008.webp', available: true, demo: true },
  { id: 'OF-009', name: 'Soft Cat Eye', category: 'optical', frameShape: 'Cat eye', color: 'Rose', price: 1290, image: '/images/products/of-009.webp', available: true, demo: true },
  { id: 'OF-010', name: 'Navy Rectangle', category: 'optical', frameShape: 'Rectangle', color: 'Navy', price: 1190, image: '/images/products/of-010.webp', available: true, demo: true },
  { id: 'OF-011', name: 'Light Oval', category: 'optical', frameShape: 'Oval', color: 'Olive', price: 1390, image: '/images/products/of-011.webp', available: false, demo: true },
  { id: 'OF-012', name: 'Bold Square', category: 'optical', frameShape: 'Square', color: 'Black', price: 1590, image: '/images/products/of-012.webp', available: true, demo: true },
  { id: 'SG-001', name: 'Coastal Aviator', category: 'sunglasses', frameShape: 'Aviator', color: 'Gold', price: 1590, image: '/images/products/sg-001.webp', available: true, demo: true },
  { id: 'SG-002', name: 'City Square', category: 'sunglasses', frameShape: 'Square', color: 'Black', price: 1490, image: '/images/products/sg-002.webp', available: true, demo: true },
  { id: 'SG-003', name: 'Sunset Cat Eye', category: 'sunglasses', frameShape: 'Cat eye', color: 'Tortoise', price: 1690, image: '/images/products/sg-003.webp', available: true, demo: true },
  { id: 'SG-004', name: 'Weekend Round', category: 'sunglasses', frameShape: 'Round', color: 'Amber', price: 1390, image: '/images/products/sg-004.webp', available: true, demo: true },
  { id: 'SG-005', name: 'Shoreline Oval', category: 'sunglasses', frameShape: 'Oval', color: 'Olive', image: '/images/products/sg-005.webp', available: true, demo: true },
  { id: 'SG-006', name: 'Dusk Aviator', category: 'sunglasses', frameShape: 'Aviator', color: 'Slate', price: 1890, image: '/images/products/sg-006.webp', available: false, demo: true },
  { id: 'SG-007', name: 'Daylight Rectangle', category: 'sunglasses', frameShape: 'Rectangle', color: 'Navy', price: 1490, image: '/images/products/sg-007.webp', available: true, demo: true },
  { id: 'SG-008', name: 'Amber Square', category: 'sunglasses', frameShape: 'Square', color: 'Amber', price: 1590, image: '/images/products/sg-008.webp', available: true, demo: true },
]

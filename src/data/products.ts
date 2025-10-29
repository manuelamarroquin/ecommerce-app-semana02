// src/data/products.ts
import type { Product } from '../types'

/**
 * Mock data de productos
 *
 * ¿Para qué?
 * Simular productos de diferentes categorías para el E-Commerce
 */

export const PRODUCTS: Product[] = [
  // Electronics
  {
    id: 1,
    name: 'iPhone 15 Pro',
    description:
      'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system',
    price: 999,
    image: 'https://picsum.photos/seed/iphone15/400/400',
    category: 'Electronics',
    rating: 4.8,
    reviews: 1234,
    inStock: true,
    discount: 10,
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    description:
      'Powerful laptop with M3 Max chip, 32GB RAM, perfect for professionals',
    price: 2499,
    image: 'https://picsum.photos/seed/macbook/400/400',
    category: 'Electronics',
    rating: 4.9,
    reviews: 856,
    inStock: true,
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    description:
      'Active noise cancellation, adaptive transparency, personalized spatial audio',
    price: 249,
    image: 'https://picsum.photos/seed/airpods/400/400',
    category: 'Electronics',
    rating: 4.7,
    reviews: 2341,
    inStock: true,
    discount: 15,
  },
  {
    id: 4,
    name: 'iPad Air M2',
    description:
      'Thin, light, and powerful tablet with M2 chip and Apple Pencil support',
    price: 599,
    image: 'https://picsum.photos/seed/ipad/400/400',
    category: 'Electronics',
    rating: 4.6,
    reviews: 678,
    inStock: true,
  },
  {
    id: 5,
    name: 'Sony WH-1000XM5',
    description:
      'Industry-leading noise canceling headphones with exceptional sound quality',
    price: 399,
    image: 'https://picsum.photos/seed/sony-headphones/400/400',
    category: 'Electronics',
    rating: 4.8,
    reviews: 1567,
    inStock: true,
    discount: 20,
  },

  // Clothing
  {
    id: 6,
    name: 'Nike Air Max 270',
    description:
      'Comfortable running shoes with Max Air unit and breathable mesh upper',
    price: 150,
    image: 'https://picsum.photos/seed/nike-shoes/400/400',
    category: 'Clothing',
    rating: 4.5,
    reviews: 892,
    inStock: true,
  },
  {
    id: 7,
    name: "Levi's 501 Jeans",
    description:
      'Classic straight fit jeans with button fly, timeless American style',
    price: 89,
    image: 'https://picsum.photos/seed/levis-jeans/400/400',
    category: 'Clothing',
    rating: 4.4,
    reviews: 1423,
    inStock: true,
    discount: 25,
  },
  {
    id: 8,
    name: 'North Face Jacket',
    description:
      'Waterproof and breathable outdoor jacket, perfect for any weather',
    price: 199,
    image: 'https://picsum.photos/seed/northface/400/400',
    category: 'Clothing',
    rating: 4.7,
    reviews: 634,
    inStock: true,
  },
  {
    id: 9,
    name: 'Adidas Ultraboost',
    description:
      'Energy-returning running shoes with Boost cushioning technology',
    price: 180,
    image: 'https://picsum.photos/seed/adidas/400/400',
    category: 'Clothing',
    rating: 4.6,
    reviews: 1789,
    inStock: false,
  },

  // Books
  {
    id: 10,
    name: 'Clean Code',
    description:
      'A Handbook of Agile Software Craftsmanship by Robert C. Martin',
    price: 42,
    image: 'https://picsum.photos/seed/clean-code/400/400',
    category: 'Books',
    rating: 4.9,
    reviews: 3456,
    inStock: true,
  },
  {
    id: 11,
    name: 'The Pragmatic Programmer',
    description: 'Your Journey to Mastery, 20th Anniversary Edition',
    price: 45,
    image: 'https://picsum.photos/seed/pragmatic/400/400',
    category: 'Books',
    rating: 4.8,
    reviews: 2134,
    inStock: true,
    discount: 10,
  },
  {
    id: 12,
    name: 'Design Patterns',
    description: 'Elements of Reusable Object-Oriented Software',
    price: 54,
    image: 'https://picsum.photos/seed/patterns/400/400',
    category: 'Books',
    rating: 4.7,
    reviews: 1876,
    inStock: true,
  },
  {
    id: 13,
    name: "You Don't Know JS",
    description: 'Complete 6-book series on JavaScript fundamentals',
    price: 120,
    image: 'https://picsum.photos/seed/ydkjs/400/400',
    category: 'Books',
    rating: 4.9,
    reviews: 2987,
    inStock: true,
  },

  // Sports
  {
    id: 14,
    name: 'Yoga Mat Pro',
    description: 'Extra thick non-slip exercise mat with carrying strap',
    price: 35,
    image: 'https://picsum.photos/seed/yoga-mat/400/400',
    category: 'Sports',
    rating: 4.5,
    reviews: 1234,
    inStock: true,
    discount: 15,
  },
  {
    id: 15,
    name: 'Dumbbells Set 20kg',
    description: 'Adjustable weight dumbbells for home gym, includes stand',
    price: 129,
    image: 'https://picsum.photos/seed/dumbbells/400/400',
    category: 'Sports',
    rating: 4.6,
    reviews: 567,
    inStock: true,
  },
  {
    id: 16,
    name: 'Resistance Bands',
    description: 'Set of 5 exercise bands with different resistance levels',
    price: 29,
    image: 'https://picsum.photos/seed/bands/400/400',
    category: 'Sports',
    rating: 4.4,
    reviews: 892,
    inStock: true,
  },
  {
    id: 17,
    name: 'Football Soccer Ball',
    description: 'Professional match ball, FIFA approved, size 5',
    price: 45,
    image: 'https://picsum.photos/seed/football/400/400',
    category: 'Sports',
    rating: 4.7,
    reviews: 1456,
    inStock: true,
    discount: 10,
  },

  // Home & Garden
  {
    id: 18,
    name: 'Smart LED Bulbs',
    description: 'WiFi enabled color changing bulbs, compatible with Alexa',
    price: 49,
    image: 'https://picsum.photos/seed/led-bulbs/400/400',
    category: 'Home & Garden',
    rating: 4.5,
    reviews: 2345,
    inStock: true,
  },
  {
    id: 19,
    name: 'Robot Vacuum',
    description: 'Smart automatic vacuum cleaner with app control and mapping',
    price: 299,
    image: 'https://picsum.photos/seed/robot-vacuum/400/400',
    category: 'Home & Garden',
    rating: 4.6,
    reviews: 1789,
    inStock: true,
    discount: 30,
  },
  {
    id: 20,
    name: 'Air Purifier',
    description:
      'HEPA filter air purifier for large rooms, removes 99.97% particles',
    price: 199,
    image: 'https://picsum.photos/seed/air-purifier/400/400',
    category: 'Home & Garden',
    rating: 4.7,
    reviews: 1234,
    inStock: true,
  },
  {
    id: 21,
    name: 'Coffee Maker',
    description: 'Programmable drip coffee maker with thermal carafe, 12 cups',
    price: 89,
    image: 'https://picsum.photos/seed/coffee-maker/400/400',
    category: 'Home & Garden',
    rating: 4.4,
    reviews: 987,
    inStock: true,
    discount: 20,
  },
]

// ============================================
// Helper Functions
// ============================================

export const getProductById = (id: number): Product | undefined => {
  return PRODUCTS.find((product) => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return PRODUCTS.filter((product) => product.category === category)
}

export const getFeaturedProducts = (limit: number = 6): Product[] => {
  return PRODUCTS.filter((product) => product.inStock)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit)
}

export const getDiscountedProducts = (): Product[] => {
  return PRODUCTS.filter((product) => product.discount && product.discount > 0)
}

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase()
  return PRODUCTS.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
  )
}
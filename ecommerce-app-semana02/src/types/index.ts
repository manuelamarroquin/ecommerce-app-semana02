// src/types/index.ts

/**
 * Tipos globales de la aplicación E-Commerce
 */

// ============================================
// Product Types
// ============================================

export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
  discount?: number
}

// ============================================
// Category Types
// ============================================

export interface Category {
  id: number
  name: string
  icon: string
  description: string
  productCount: number
}

// ============================================
// Cart Types
// ============================================

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

// ============================================
// Review Types
// ============================================

export interface Review {
  id: number
  productId: number
  userName: string
  userAvatar: string
  rating: number
  comment: string
  date: string
  helpful: number
}

// ============================================
// User Types
// ============================================

export interface User {
  id: number
  name: string
  email: string
  avatar: string
  phone: string
  address: Address
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

// ============================================
// Order Types
// ============================================

export interface Order {
  id: number
  date: string
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  items: CartItem[]
}

// ============================================
// Shipping & Payment Types
// ============================================

export interface ShippingInfo {
  fullName: string
  phone: string
  address: Address
}

export interface PaymentMethod {
  id: number
  type: 'credit_card' | 'debit_card' | 'paypal' | 'cash'
  name: string
  icon: string
  lastFourDigits?: string
}
import type { User, PaymentMethod } from '../types'

export const CURRENT_USER: User = {
  id: 1,
  name: 'Carlos Rodríguez',
  email: 'carlos.rodriguez@example.com',
  avatar: 'https://i.pravatar.cc/150?img=12',
  phone: '+1 234 567 8900',
  address: {
    street: '123 Main Street, Apt 4B',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA',
  },
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 1,
    type: 'credit_card',
    name: 'Visa',
    icon: 'card',
    lastFourDigits: '4242',
  },
  {
    id: 2,
    type: 'debit_card',
    name: 'Mastercard',
    icon: 'card',
    lastFourDigits: '8888',
  },
  {
    id: 3,
    type: 'paypal',
    name: 'PayPal',
    icon: 'logo-paypal',
  },
  {
    id: 4,
    type: 'cash',
    name: 'Cash on Delivery',
    icon: 'cash',
  },
]


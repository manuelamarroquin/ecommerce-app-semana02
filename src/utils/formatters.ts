// src/utils/formatters.ts

/**
 * Utilidades para formateo de datos
 */

/**
 * Formatear precio a moneda
 *
 * @param price - Precio numérico
 * @returns String formateado como moneda (ej: "$99.99")
 */
export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}

/**
 * Calcular precio con descuento
 *
 * @param price - Precio original
 * @param discount - Porcentaje de descuento
 * @returns Precio final con descuento aplicado
 */
export function calculateDiscountedPrice(
  price: number,
  discount?: number
): number {
  if (!discount) return price
  return price * (1 - discount / 100)
}

/**
 * Formatear fecha
 *
 * @param dateString - String de fecha ISO
 * @returns Fecha formateada (ej: "15 Jan 2025")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }
  return date.toLocaleDateString('en-US', options)
}

/**
 * Calcular ahorro por descuento
 *
 * @param price - Precio original
 * @param discount - Porcentaje de descuento
 * @returns Cantidad ahorrada
 */
export function calculateSavings(price: number, discount?: number): number {
  if (!discount) return 0
  return price * (discount / 100)
}

/**
 * Obtener badge de estado del pedido
 *
 * @param status - Estado del pedido
 * @returns Objeto con color y texto para UI
 */
export function getOrderStatusBadge(
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
): { color: string; text: string; bgColor: string } {
  const badges = {
    pending: {
      color: '#f59e0b',
      text: 'Pendiente',
      bgColor: '#fef3c7',
    },
    processing: {
      color: '#3b82f6',
      text: 'Procesando',
      bgColor: '#dbeafe',
    },
    shipped: {
      color: '#8b5cf6',
      text: 'Enviado',
      bgColor: '#ede9fe',
    },
    delivered: {
      color: '#10b981',
      text: 'Entregado',
      bgColor: '#d1fae5',
    },
    cancelled: {
      color: '#ef4444',
      text: 'Cancelado',
      bgColor: '#fee2e2',
    },
  }

  return badges[status]
}
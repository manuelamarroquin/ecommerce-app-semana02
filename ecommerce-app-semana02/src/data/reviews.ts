// src/data/reviews.ts
import type { Review } from '../types'

export const REVIEWS: Review[] = [
  {
    id: 1,
    productId: 1,
    userName: 'John Doe',
    userAvatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    comment:
      'Amazing phone! The camera quality is outstanding and the battery life is excellent.',
    date: '2025-01-15',
    helpful: 45,
  },
  {
    id: 2,
    productId: 1,
    userName: 'Sarah Smith',
    userAvatar: 'https://i.pravatar.cc/150?img=2',
    rating: 4,
    comment: 'Great phone but a bit pricey. The titanium design looks premium.',
    date: '2025-01-10',
    helpful: 23,
  },
  {
    id: 3,
    productId: 2,
    userName: 'Mike Johnson',
    userAvatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    comment: 'Best laptop for developers. M3 Max is incredibly fast!',
    date: '2025-01-08',
    helpful: 67,
  },
{
    id: 4,
    productId: 2,
    userName: 'Emily Carter',
    userAvatar: 'https://i.pravatar.cc/150?img=4',
    rating: 4,
    comment:
      'Excelente rendimiento pero se calienta un poco cuando trabajo con apps pesadas.',
    date: '2025-01-05',
    helpful: 31,
  },

  // AirPods Pro 2
  {
    id: 5,
    productId: 3,
    userName: 'David Wilson',
    userAvatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    comment:
      'Estos audífonos tienen la mejor cancelación de ruido que he probado.',
    date: '2025-01-12',
    helpful: 56,
  },
  {
    id: 6,
    productId: 3,
    userName: 'Ana Rodriguez',
    userAvatar: 'https://i.pravatar.cc/150?img=6',
    rating: 3,
    comment: 'Buena calidad de sonido, pero esperaba que fueran más cómodos.',
    date: '2025-01-14',
    helpful: 19,
  },

  // iPad Air M2
  {
    id: 7,
    productId: 4,
    userName: 'Carlos Martínez',
    userAvatar: 'https://i.pravatar.cc/150?img=7',
    rating: 4,
    comment: 'El diseño está genial y la pantalla se ve increíble.',
    date: '2025-01-02',
    helpful: 12,
  },

  // Sony WH-1000XM5
  {
    id: 8,
    productId: 5,
    userName: 'Laura Gómez',
    userAvatar: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
    comment: 'Me encanta para ver series y jugar. Súper recomendado.',
    date: '2025-01-09',
    helpful: 44,
  },

  // Productos de ropa (Nike, Levi’s, etc.)
  {
    id: 9,
    productId: 6,
    userName: 'Pedro Sánchez',
    userAvatar: 'https://i.pravatar.cc/150?img=9',
    rating: 4,
    comment: 'Muy cómodas y el diseño está genial.',
    date: '2025-02-01',
    helpful: 15,
  },
  {
    id: 10,
    productId: 7,
    userName: 'Marta Ruiz',
    userAvatar: 'https://i.pravatar.cc/150?img=10',
    rating: 5,
    comment: 'Los clásicos de Levi’s nunca fallan.',
    date: '2025-01-20',
    helpful: 37,
  },
  {
    id: 11,
    productId: 8,
    userName: 'Daniel Torres',
    userAvatar: 'https://i.pravatar.cc/150?img=11',
    rating: 5,
    comment: 'Perfecta para salir a la montaña, abriga mucho.',
    date: '2025-01-18',
    helpful: 21,
  },
  {
    id: 12,
    productId: 9,
    userName: 'Kevin Lopez',
    userAvatar: 'https://i.pravatar.cc/150?img=12',
    rating: 4,
    comment: 'Excelente para correr, aunque se agotaron rápido.',
    date: '2025-02-03',
    helpful: 18,
  },

  // Libros 📚
  {
    id: 13,
    productId: 10,
    userName: 'Software Dev',
    userAvatar: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    comment: 'Una Biblia para cualquier programador.',
    date: '2025-01-11',
    helpful: 52,
  },
  {
    id: 14,
    productId: 11,
    userName: 'Tech Reader',
    userAvatar: 'https://i.pravatar.cc/150?img=14',
    rating: 5,
    comment: 'Lo recomiendo para subir tu nivel como desarrollador.',
    date: '2025-01-13',
    helpful: 33,
  },
  {
    id: 15,
    productId: 12,
    userName: 'David Kim',
    userAvatar: 'https://i.pravatar.cc/150?img=15',
    rating: 4,
    comment:
      'Gran libro, aunque algo complejo si no tienes bases sólidas en diseño.',
    date: '2025-01-09',
    helpful: 20,
  },
  {
    id: 16,
    productId: 13,
    userName: 'Nina Code',
    userAvatar: 'https://i.pravatar.cc/150?img=16',
    rating: 5,
    comment: 'Explica JavaScript como ningún otro.',
    date: '2025-01-07',
    helpful: 40,
  },

  // Sports ⚽🏋️
  {
    id: 17,
    productId: 14,
    userName: 'Yoga Lover',
    userAvatar: 'https://i.pravatar.cc/150?img=17',
    rating: 4,
    comment: 'Muy cómodo y antideslizante.',
    date: '2025-01-28',
    helpful: 17,
  },
  {
    id: 18,
    productId: 15,
    userName: 'StrongFit',
    userAvatar: 'https://i.pravatar.cc/150?img=18',
    rating: 5,
    comment: 'Perfecto para entrenar en casa.',
    date: '2025-01-26',
    helpful: 29,
  },
  {
    id: 19,
    productId: 16,
    userName: 'Ana López',
    userAvatar: 'https://i.pravatar.cc/150?img=19',
    rating: 4,
    comment: 'Buen set, las bandas tienen buena resistencia.',
    date: '2025-01-30',
    helpful: 11,
  },
  {
    id: 20,
    productId: 17,
    userName: 'Football Pro',
    userAvatar: 'https://i.pravatar.cc/150?img=20',
    rating: 5,
    comment: 'Excelente control y durabilidad.',
    date: '2025-02-02',
    helpful: 25,
  },
]

export const getReviewsByProductId = (productId: number): Review[] => {
  return REVIEWS.filter((review) => review.productId === productId)
}

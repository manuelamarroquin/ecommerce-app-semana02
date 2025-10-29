export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export type Order = {
  id: string;
  date: string;
  total: number;
  status: OrderStatus;
};

export const orders: Order[] = [
  {
    id: '1',
    date: '2024-10-01',
    total: 120.5,
    status: 'pending',
  },
  {
    id: '2',
    date: '2024-10-12',
    total: 80.75,
    status: 'shipped',
  },
  {
    id: '3',
    date: '2024-10-18',
    total: 42.9,
    status: 'delivered',
  },
];

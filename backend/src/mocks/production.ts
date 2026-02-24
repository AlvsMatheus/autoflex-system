
export type Production = {
  id: number;
  productId: number;
  quantity: number;
  createdAt: Date;
}

export const production: Production[] = [
  {
    id: 1,
    productId: 2,
    quantity: 4,
    createdAt: new Date("2024-01-10T10:00:00"),
  },
  {
    id: 2,
    productId: 1,
    quantity: 3,
    createdAt: new Date("2024-01-12T14:30:00"),
  },
];

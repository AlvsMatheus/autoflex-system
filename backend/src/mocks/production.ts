export type ProductionStatus = "finished" | "progress" | "pending";

export type Production = {
  id: number;
  productId: number;
  quantity: number;
  status: ProductionStatus;
};

export const production: Production[] = [
  {
    id: 1,
    productId: 1,
    quantity: 3,
    status: "progress",
  },
  {
    id: 2,
    productId: 2,
    quantity: 2,
    status: "pending",
  },
];

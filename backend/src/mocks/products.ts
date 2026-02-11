export type Product = {
  id: number;
  name: string;
  rawMaterialId: number;
  requiredQuantity: number; // quanto consome por unidade
};

export const products: Product[] = [
  {
    id: 1,
    name: "Product A",
    rawMaterialId: 1,
    requiredQuantity: 2,
  },
  {
    id: 2,
    name: "Product B",
    rawMaterialId: 2,
    requiredQuantity: 3,
  },
];

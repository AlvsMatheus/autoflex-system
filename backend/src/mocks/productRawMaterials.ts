export type ProductRawMaterial = {
  id: number;
  productId: number;
  rawMaterialId: number;
  requiredQuantity: number;
};

export const productRawMaterials: ProductRawMaterial[] = [
  {
    id: 1,
    productId: 1,
    rawMaterialId: 1,
    requiredQuantity: 2,
  },
  {
    id: 2,
    productId: 1,
    rawMaterialId: 2,
    requiredQuantity: 1,
  },
];
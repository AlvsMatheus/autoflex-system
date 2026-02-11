import { production, Production } from "../mocks/production";
import { products } from "../mocks/products";
import { rawMaterials } from "../mocks/rawMaterials";

type CreateProductionDTO = {
  productId: number;
  quantity: number;
};

export function getAllProductions() {
  return production;
}

export function createProduction(data: CreateProductionDTO) {
  const product = products.find((p) => p.id === data.productId);
  if (!product) {
    throw new Error("Product not found");
  }

  const material = rawMaterials.find((r) => r.id === product.rawMaterialId);
  if (!material) {
    throw new Error("Raw material not found");
  }

  const totalConsumption = product.requiredQuantity * data.quantity;

  if (material.quantity < totalConsumption) {
    throw new Error("Insufficient stock");
  }

  material.quantity -= totalConsumption;

  const newProduction: Production = {
    id: production.length + 1,
    productId: data.productId,
    quantity: data.quantity,
    status: "pending",
  };

  production.push(newProduction);

  return newProduction;
}

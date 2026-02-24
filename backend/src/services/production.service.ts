import { production, Production } from "../mocks/production";
import { products } from "../mocks/products";
import { rawMaterials } from "../mocks/rawMaterials";
import { productRawMaterials } from "../mocks/productRawMaterials";

type CreateProductionDTO = {
  productId: number;
  quantity: number;
};

export function getAllProductions() {
  return production;
}

export function getProductionSuggestions() {
  return products
    .map((product) => {
      const requiredMaterials = productRawMaterials.filter(
        (prm) => prm.productId === product.id
      );

      if (requiredMaterials.length === 0) {
        return null;
      }

      // Calcula o máximo possível baseado em cada matéria-prima
      const possibleQuantities = requiredMaterials.map((rm) => {
        const material = rawMaterials.find(
          (r) => r.id === rm.rawMaterialId
        );

        if (!material) return 0;

        return Math.floor(material.quantity / rm.requiredQuantity);
      });

      const possibleQuantity = Math.min(...possibleQuantities);

      const totalValue = possibleQuantity * product.value;

      return {
        productId: product.id,
        name: product.name,
        unitValue: product.value,
        possibleQuantity,
        totalValue,
      };
    })
    .filter((item) => item !== null && item.possibleQuantity > 0)
    .sort((a, b) => b!.totalValue - a!.totalValue);
}

export function createProduction(data: CreateProductionDTO) {
  const product = products.find((p) => p.id === data.productId);
  if (!product) {
    throw new Error("Product not found");
  }

  const requiredMaterials = productRawMaterials.filter(
    (prm) => prm.productId === data.productId
  );

  if (requiredMaterials.length === 0) {
    throw new Error("No raw materials associated with this product");
  }

  // Verifica se todas as matérias-primas têm estoque suficiente
  for (const rm of requiredMaterials) {
    const material = rawMaterials.find((r) => r.id === rm.rawMaterialId);

    if (!material) {
      throw new Error("Raw material not found");
    }

    const totalConsumption = rm.requiredQuantity * data.quantity;

    if (material.quantity < totalConsumption) {
      throw new Error("Insufficient stock");
    }
  }

  // Se passou na validação, desconta estoque
  for (const rm of requiredMaterials) {
    const material = rawMaterials.find((r) => r.id === rm.rawMaterialId)!;
    material.quantity -= rm.requiredQuantity * data.quantity;
  }

  const newProduction: Production = {
    id: production.length + 1,
    productId: data.productId,
    quantity: data.quantity,
    createdAt: new Date(),
  };

  production.push(newProduction);

  return newProduction;

  
}
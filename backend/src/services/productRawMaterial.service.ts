import { productRawMaterials, ProductRawMaterial } from "../mocks/productRawMaterials";
import { products } from "../mocks/products";
import { rawMaterials } from "../mocks/rawMaterials";

export function getAllProductRawMaterials() {
  return productRawMaterials;
}

export function createProductRawMaterial(
  data: Omit<ProductRawMaterial, "id">
) {
  // Validate if product exists
  const productExists = products.find(
    (product) => product.id === data.productId
  );

  if (!productExists) {
    return { error: "Product not found" };
  }

  // Validate if raw material exists
  const rawMaterialExists = rawMaterials.find(
    (rawMaterial) => rawMaterial.id === data.rawMaterialId
  );

  if (!rawMaterialExists) {
    return { error: "Raw material not found" };
  }

  const newRelation: ProductRawMaterial = {
    id: productRawMaterials.length + 1,
    ...data,
  };

  productRawMaterials.push(newRelation);

  return newRelation;
}

export function deleteProductRawMaterial(id: number) {
  const index = productRawMaterials.findIndex(
    (relation) => relation.id === id
  );

  if (index === -1) {
    return null;
  }

  const deleted = productRawMaterials.splice(index, 1);

  return deleted[0];
}

export function updateProductRawMaterial(
  id: number,
  data: Omit<ProductRawMaterial, "id">
) {
  const index = productRawMaterials.findIndex(
    (relation) => relation.id === id
  );

  if (index === -1) {
    return null;
  }

  const updated: ProductRawMaterial = {
    id,
    ...data,
  };

  productRawMaterials[index] = updated;

  return updated;
}

export function getProductRawMaterialById(id: number) {
  return productRawMaterials.find((relation) => relation.id === id) || null;
}
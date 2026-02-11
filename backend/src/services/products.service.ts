import { products, Product } from "../mocks/products";

export function getAllProducts() {
  return products;
}

export function createProduct(data: Omit<Product, "id">) {
  const newProduct: Product = {
    id: products.length + 1,
    ...data,
  };

  products.push(newProduct);
  return newProduct;
}

export function deleteProduct(id: number) {
  const index = products.findIndex(product => product.id === id);

  if (index === -1) {
    return null;
  }

  const deletedProduct = products.splice(index, 1);
  return deletedProduct[0];
}

export function updateProduct(
  id: number,
  data: Omit<Product, "id">
) {
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return null;
  }

  const updatedProduct: Product = {
    id,
    ...data,
  };

  products[productIndex] = updatedProduct;

  return updatedProduct;
}



import { Request, Response } from "express";
import {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct
} from "../services/products.service";

export async function listProducts(req: Request, res: Response) {
  const products = await getAllProducts();
  return res.json(products);
}

export async function storeProduct(req: Request, res: Response) {
  const { name, value } = req.body;

  if (!name || value === undefined) {
    return res.status(400).json({
      error: "name and value are required",
    });
  }

  const product = await createProduct({ name, value });

  return res.status(201).json(product);
}

export async function removeProduct(req: Request, res: Response) {
  const { id } = req.params;

  const product = await deleteProduct(Number(id));

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  return res.status(200).json(product);
}

export async function editProduct(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { name, value } = req.body;

  if (!name || value === undefined) {
    return res.status(400).json({
      error: "name and value are required",
    });
  }

  const updatedProduct = await updateProduct(id, { name, value });

  if (!updatedProduct) {
    return res.status(404).json({
      error: "Product not found",
    });
  }

  return res.status(200).json(updatedProduct);
}
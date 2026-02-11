import { Request, Response } from "express";
import { getAllProducts, createProduct } from "../services/products.service";
import { deleteProduct } from "../services/products.service";
import { updateProduct } from "../services/products.service";

export function listProducts(req: Request, res: Response) {
  return res.json(getAllProducts());
}

export function storeProduct(req: Request, res: Response) {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "name and price are required" });
  }

  const product = createProduct({ name, price });
  return res.status(201).json(product);
}

{/*Delete */}

export function removeProduct(req: Request, res: Response) {
  const { id } = req.params;

  const product = deleteProduct(Number(id));

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  return res.status(200).json(product);
}

{/*Edit */}

export function editProduct(req: Request, res: Response) {
  const id = Number(req.params.id);
  const data = req.body;

  const updated = updateProduct(id, data);

  if (!updated) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.json(updated);
}


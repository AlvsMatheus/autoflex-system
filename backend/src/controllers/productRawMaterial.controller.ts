import { Request, Response } from "express";
import {
  getAllProductRawMaterials,
  createProductRawMaterial,
  deleteProductRawMaterial,
  updateProductRawMaterial,
  getProductRawMaterialById,
} from "../services/productRawMaterial.service";

export function listProductRawMaterials(req: Request, res: Response) {
  return res.json(getAllProductRawMaterials());
}

export function storeProductRawMaterial(req: Request, res: Response) {
  const { productId, rawMaterialId, requiredQuantity } = req.body;

  if (
    !productId ||
    !rawMaterialId ||
    requiredQuantity === undefined
  ) {
    return res.status(400).json({
      error: "productId, rawMaterialId and requiredQuantity are required",
    });
  }

  const relation = createProductRawMaterial({
    productId,
    rawMaterialId,
    requiredQuantity,
  });

  // Se o service retornar erro
  if ("error" in relation) {
    return res.status(404).json({ error: relation.error });
  }

  return res.status(201).json(relation);
}

export function getProductRawMaterial(req: Request, res: Response) {
  const { id } = req.params;

  const relation = getProductRawMaterialById(Number(id));

  if (!relation) {
    return res.status(404).json({ error: "Relation not found" });
  }

  return res.json(relation);
}

export function removeProductRawMaterial(req: Request, res: Response) {
  const { id } = req.params;

  const relation = deleteProductRawMaterial(Number(id));

  if (!relation) {
    return res.status(404).json({ error: "Relation not found" });
  }

  return res.status(200).json(relation);
}

export function editProductRawMaterial(req: Request, res: Response) {
  const id = Number(req.params.id);
  const data = req.body;

  const updated = updateProductRawMaterial(id, data);

  if (!updated) {
    return res.status(404).json({ error: "Relation not found" });
  }

  return res.json(updated);
}
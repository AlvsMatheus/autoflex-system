import { Request, Response } from "express";
import {
  getAllProductRawMaterials,
  createProductRawMaterial,
  deleteProductRawMaterial,
} from "../services/productRawMaterial.service";

export async function listProductRawMaterials(
  req: Request,
  res: Response
) {
  const data = await getAllProductRawMaterials();
  return res.json(data);
}

export async function storeProductRawMaterial(
  req: Request,
  res: Response
) {
  const { product_id, raw_material_id, required_quantity } = req.body;

  if (
    !product_id ||
    !raw_material_id ||
    required_quantity === undefined
  ) {
    return res.status(400).json({
      error: "product_id, raw_material_id and quantity are required",
    });
  }

  const newRelation = await createProductRawMaterial({
    product_id,
    raw_material_id,
    required_quantity,
  });

  return res.status(201).json(newRelation);
}

export async function removeProductRawMaterial(
  req: Request,
  res: Response
) {
  const id = Number(req.params.id);

  const deleted = await deleteProductRawMaterial(id);

  if (!deleted) {
    return res.status(404).json({
      error: "Relation not found",
    });
  }

  return res.json(deleted);
}
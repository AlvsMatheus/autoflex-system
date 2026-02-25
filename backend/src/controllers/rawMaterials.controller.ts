import { Request, Response } from "express";
import {
  getAllRawMaterials,
  createRawMaterial,
  deleteMaterial,
  updateMaterial,
} from "../services/rawMaterials.service";

export async function listRawMaterials(req: Request, res: Response) {
  const materials = await getAllRawMaterials();
  return res.json(materials);
}

export async function storeRawMaterial(req: Request, res: Response) {
  const { name, quantity } = req.body;

  if (!name || quantity === undefined) {
    return res
      .status(400)
      .json({ error: "name and quantity are required" });
  }

  const material = await createRawMaterial({ name, quantity });

  return res.status(201).json(material);
}

export async function removeMaterial(req: Request, res: Response) {
  const id = Number(req.params.id);

  const material = await deleteMaterial(id);

  if (!material) {
    return res.status(404).json({ error: "Material not found" });
  }

  return res.status(200).json(material);
}

export async function editMaterial(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { name, quantity } = req.body;

  if (!name || quantity === undefined) {
    return res
      .status(400)
      .json({ error: "name and quantity are required" });
  }

  const updated = await updateMaterial(id, { name, quantity });

  if (!updated) {
    return res.status(404).json({ message: "Material not found" });
  }

  return res.json(updated);
}
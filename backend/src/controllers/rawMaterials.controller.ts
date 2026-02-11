import { Request, Response } from "express";
import { getAllRawMaterials, createRawMaterial } from "../services/rawMaterials.service";
import { deleteMaterial } from "../services/rawMaterials.service";
import { updateMaterial } from "../services/rawMaterials.service";

export function listRawMaterials(req: Request, res: Response) {
  return res.json(getAllRawMaterials());
}

export function storeRawMaterial(req: Request, res: Response) {
  const { name, quantity } = req.body;

  if (!name || !quantity) {
    return res
      .status(400)
      .json({ error: "name and quantity are required" });
  }

  const material = createRawMaterial({ name, quantity });

  return res.status(201).json(material);
}

export function removeMaterial(req: Request, res: Response) {
  const { id } = req.params;

  const material = deleteMaterial(Number(id));

  if (!material) {
    return res.status(404).json({ error: "Material not found" });
  }

  return res.status(200).json(material);
}

{/*Edit */}

export function editMaterial(req: Request, res: Response) {
  const id = Number(req.params.id);
  const data = req.body;

  const updated = updateMaterial(id, data);

  if (!updated) {
    return res.status(404).json({ message: "Material not found" });
  }

  return res.json(updated);
}

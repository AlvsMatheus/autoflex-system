import { Request, Response } from "express";
import {
  getAllProductions,
  createProduction,
} from "../services/production.service";

export function listProductions(req: Request, res: Response) {
  try {
    const productions = getAllProductions();
    return res.status(200).json(productions);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching productions",
    });
  }
}

export function storeProduction(req: Request, res: Response) {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({
        message: "productId and quantity are required",
      });
    }

    const newProduction = createProduction({ productId, quantity });

    return res.status(201).json(newProduction);
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

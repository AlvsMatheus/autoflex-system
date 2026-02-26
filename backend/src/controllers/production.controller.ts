import { Request, Response } from "express";
import { getProductionSuggestions } from "../services/production.service";

export const productionSuggestions = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getProductionSuggestions();
    return res.json(result);
  } catch (error: any) {
    console.error("PRODUCTION ERROR:", error);
    return res.status(500).json({ error: error.message });
  }
};
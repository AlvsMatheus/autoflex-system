import { Router } from "express";
import { productionSuggestions } from "../controllers/production.controller";

const router = Router();

router.get("/suggestions", productionSuggestions);

export default router;
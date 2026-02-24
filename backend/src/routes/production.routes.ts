import { Router } from "express";
import { getSuggestions } from "../controllers/production.controller";
import {
  listProductions,
  storeProduction,
} from "../controllers/production.controller";

const router = Router();

router.get("/", listProductions);
router.get("/suggestions", getSuggestions);
router.post("/", storeProduction);

export default router;

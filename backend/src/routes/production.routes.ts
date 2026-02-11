import { Router } from "express";
import {
  listProductions,
  storeProduction,
} from "../controllers/production.controller";

const router = Router();

router.get("/", listProductions);
router.post("/", storeProduction);

export default router;

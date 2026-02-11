import { Router } from "express";
import { listRawMaterials, storeRawMaterial } from "../controllers/rawMaterials.controller";
import { removeMaterial } from "../controllers/rawMaterials.controller";
import { editMaterial } from "../controllers/rawMaterials.controller";

const router = Router();

router.get("/", listRawMaterials);
router.post("/", storeRawMaterial);
router.delete("/:id", removeMaterial)
router.put("/:id", editMaterial)

export default router;

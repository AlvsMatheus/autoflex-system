import { Router } from "express";
import {
  listProductRawMaterials,
  storeProductRawMaterial,
  removeProductRawMaterial,
} from "../controllers/productRawMaterial.controller";

const router = Router();

router.get("/", listProductRawMaterials);
router.post("/", storeProductRawMaterial);
router.delete("/:id", removeProductRawMaterial);

export default router;
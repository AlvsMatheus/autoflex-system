import { Router } from "express";
import {
  listProductRawMaterials,
  storeProductRawMaterial,
  getProductRawMaterial,
  removeProductRawMaterial,
  editProductRawMaterial,
} from "../controllers/productRawMaterial.controller";

const router = Router();

router.get("/", listProductRawMaterials);
router.get("/:id", getProductRawMaterial);
router.post("/", storeProductRawMaterial);
router.delete("/:id", removeProductRawMaterial);
router.put("/:id", editProductRawMaterial);

export default router;
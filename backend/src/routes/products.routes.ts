import { Router } from "express";
import { listProducts, storeProduct } from "../controllers/products.controller";
import { removeProduct } from "../controllers/products.controller";
import { editProduct } from "../controllers/products.controller";

const router = Router();

router.get("/", listProducts);
router.post("/", storeProduct);
router.delete("/:id", removeProduct);
router.put("/:id", editProduct);

export default router;

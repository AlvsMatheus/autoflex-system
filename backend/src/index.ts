import express from "express";
import cors from "cors";
import productsRoutes from "../src/routes/products.routes";
import rawMaterialsRoutes from "./routes/rawMaterials.routes";
import productionRoutes from "../src/routes/production.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsRoutes);
app.use("/raw-materials", rawMaterialsRoutes);
app.use("/productions", productionRoutes);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

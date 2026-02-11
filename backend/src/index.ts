import express from "express";
import cors from "cors";
import productsRoutes from "../src/routes/products.routes";
import rawMaterialsRoutes from "./routes/rawMaterials.routes"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsRoutes);
app.use("/raw-materials", rawMaterialsRoutes)

app.listen(3333, () => {
  console.log("🚀 Backend running on http://localhost:3333");
});

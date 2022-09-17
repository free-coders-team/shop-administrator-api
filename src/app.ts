import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.routes";

import "./config/firebase";

import { NODE_PORT } from "./config/enviroment";

const app: Application = express();

// Settings
app.set("port", NODE_PORT);

// Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/auth", authRoutes);
app.use("/product", productRoutes);

export default app;

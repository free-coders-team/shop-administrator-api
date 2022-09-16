import { Router } from "express";
import validateTokenMiddleware from "../middlewares/validate-token";
import getProduct from "../controllers/product/get-product";

const router = Router()

router.get('/', validateTokenMiddleware, getProduct)

export default router
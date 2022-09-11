import { Router } from "express";
import validateTokenMiddleware from "../middlewares/validate-token"
import login from "../controllers/auth/login.controller";

const router = Router()

router.post('/', validateTokenMiddleware, login)

export default router
import { Router } from "express";
import validateTokenMiddleware from "../middlewares/validate-token";
import login from "../controllers/auth/login.controller";
import getSessionData from "../controllers/auth/get-session-data.controller";

const router = Router();

// router.post("/", validateTokenMiddleware, login);
router.post("/", login);
router.post("/get-session-data", getSessionData);

export default router;

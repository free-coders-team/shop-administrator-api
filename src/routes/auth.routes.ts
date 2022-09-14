import { Router } from "express";
import validateTokenMiddleware from "../middlewares/validate-token";
import signin from "../controllers/auth/signin.controller";
import getSessionData from "../controllers/auth/get-session-data.controller";

const router = Router();

// router.post("/", validateTokenMiddleware, signin);
router.post("/", signin);
router.post("/get-session-data", getSessionData);

export default router;

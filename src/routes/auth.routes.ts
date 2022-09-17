import { Router } from "express";

import validateTokenMiddleware from "../middlewares/validate-token";
import validateCredentials from "../controllers/auth/validate-credentials.controller";
import getSessionData from "../controllers/auth/get-session-data.controller";

const router = Router();

router.post("/", validateCredentials);
router.post("/get-session-data", validateTokenMiddleware, getSessionData);

export default router;

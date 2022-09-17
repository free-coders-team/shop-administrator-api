import { Router } from "express";

import getSessionData from "../controllers/auth/get-session-data";

import credentialsValidation from "../controllers/auth/credentials-validation";
import validateTokenMiddleware from "../middlewares/validate-token";

const router = Router();

router.post("/", credentialsValidation);
router.post("/get-session-data", validateTokenMiddleware, getSessionData);

export default router;

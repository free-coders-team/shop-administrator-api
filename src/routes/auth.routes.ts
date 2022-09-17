import { Router } from "express";

import getSessionData from "../controllers/auth/get-session-data";
import credentialsValidation from "../controllers/auth/credentials-validation";

const router = Router();

router.post("/", credentialsValidation);
router.post("/get-session-data", getSessionData);

export default router;

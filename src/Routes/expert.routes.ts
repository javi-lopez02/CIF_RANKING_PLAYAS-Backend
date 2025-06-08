import { Router } from "express";
import { getExperts, getExpertsId } from "../Controllers/expert.controller";

const router = Router();

router.get("/experts", getExperts);
router.get("/expert/:id", getExpertsId);

export default router;
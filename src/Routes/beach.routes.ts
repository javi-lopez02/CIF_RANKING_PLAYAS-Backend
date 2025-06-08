import { Router } from "express";
import { getBeaches, getBeachId } from "../Controllers/beach.controller";

const router = Router();

router.get("/beaches", getBeaches);
router.get("/beach", getBeachId);

export default router;
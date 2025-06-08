import { Router } from "express";
import { getScientific } from "../Controllers/scientific.controller";

const router = Router();

router.get("/scientific", getScientific);

export default router;
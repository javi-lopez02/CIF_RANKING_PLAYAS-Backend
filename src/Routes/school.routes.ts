import { Router } from "express";
import { getSchool } from "../Controllers/school.controller";

const router = Router();

router.get("/school", getSchool);

export default router;
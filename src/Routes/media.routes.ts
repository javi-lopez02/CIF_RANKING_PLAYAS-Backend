import { Router } from "express";
import { getMedia } from "../Controllers/media.controller";

const router = Router();

router.get("/media", getMedia);

export default router;
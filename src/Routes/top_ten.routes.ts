import { Router } from "express";
import {
  getRegionBeaches,
  getBeachTypeBeaches,
} from "../Controllers/top_ten.controller";

const router = Router();
router.get("/region", getRegionBeaches);
router.get("/beach-type", getBeachTypeBeaches);

export default router;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const top_ten_controller_1 = require("../Controllers/top_ten.controller");
const router = (0, express_1.Router)();
router.get("/region", top_ten_controller_1.getRegionBeaches);
router.get("/beach-type", top_ten_controller_1.getBeachTypeBeaches);
exports.default = router;

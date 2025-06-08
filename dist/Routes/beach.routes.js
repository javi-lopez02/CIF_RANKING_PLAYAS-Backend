"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const beach_controller_1 = require("../Controllers/beach.controller");
const router = (0, express_1.Router)();
router.get("/beaches", beach_controller_1.getBeaches);
router.get("/beach", beach_controller_1.getBeachId);
exports.default = router;

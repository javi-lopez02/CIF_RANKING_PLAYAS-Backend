"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const scientific_controller_1 = require("../Controllers/scientific.controller");
const router = (0, express_1.Router)();
router.get("/scientific", scientific_controller_1.getScientific);
exports.default = router;

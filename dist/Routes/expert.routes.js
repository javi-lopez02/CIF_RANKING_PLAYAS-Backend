"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expert_controller_1 = require("../Controllers/expert.controller");
const router = (0, express_1.Router)();
router.get("/experts", expert_controller_1.getExperts);
router.get("/expert/:id", expert_controller_1.getExpertsId);
exports.default = router;

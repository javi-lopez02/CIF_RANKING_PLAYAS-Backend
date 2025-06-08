"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const school_controller_1 = require("../Controllers/school.controller");
const router = (0, express_1.Router)();
router.get("/school", school_controller_1.getSchool);
exports.default = router;

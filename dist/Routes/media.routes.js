"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const media_controller_1 = require("../Controllers/media.controller");
const router = (0, express_1.Router)();
router.get("/media", media_controller_1.getMedia);
exports.default = router;

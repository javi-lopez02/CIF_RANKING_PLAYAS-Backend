"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv = __importStar(require("dotenv"));
const path_1 = __importDefault(require("path"));
// import auth from "./Routes/auth.routes";
const media_routes_1 = __importDefault(require("./Routes/media.routes"));
const beach_routes_1 = __importDefault(require("./Routes/beach.routes"));
const expert_routes_1 = __importDefault(require("./Routes/expert.routes"));
const top_ten_routes_1 = __importDefault(require("./Routes/top_ten.routes"));
const scientific_routes_1 = __importDefault(require("./Routes/scientific.routes"));
const school_routes_1 = __importDefault(require("./Routes/school.routes"));
dotenv.config();
const port = 4000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:4173",
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:8000",
    ],
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)());
// app.use("/api/auth", auth);
app.use("/api", media_routes_1.default, beach_routes_1.default, expert_routes_1.default, top_ten_routes_1.default, scientific_routes_1.default, school_routes_1.default);
app.use("/public", express_1.default.static(path_1.default.join(__dirname, "/Upload")));
app.listen(port, () => {
    console.log(`Server on port ${port}`);
});

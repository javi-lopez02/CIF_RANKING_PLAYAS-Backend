"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMedia = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getMedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const media = yield prisma.mediaCoverage.findMany({
            select: {
                id: true,
                name: true,
                url: true,
                image: true,
                year: true,
            },
        });
        if (!media) {
            res.status(401).json({ message: "No se encuentran medios registrados" });
        }
        else {
            res.status(200).json({ data: media, message: "Lista de Medios" });
        }
    }
    catch (error) {
        console.log("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.getMedia = getMedia;

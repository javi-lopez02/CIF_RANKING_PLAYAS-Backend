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
exports.getBeachTypeBeaches = exports.getRegionBeaches = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getRegionBeaches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const region = req.query.p;
    try {
        const beaches = yield prisma.beach.findMany({
            where: { region },
            select: {
                name: true,
                municipality: true,
                province: true,
                country: true,
                length: true,
                latitude: true,
                additionalImages: true,
                imageBeach: true,
                bqvImage: true,
                bqvScore: true,
                beachType: true,
                region: true,
                id: true,
            },
            orderBy: {
                bqvScore: "desc", // Order by BQV in descending order
            },
            take: 10, // Limit to the top 10 beaches
        });
        if (!beaches || beaches.length === 0) {
            res.status(404).json({ message: "No beaches found in this region" });
        }
        else {
            res.status(200).json({ data: beaches, message: "Beaches in Region" });
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.getRegionBeaches = getRegionBeaches;
const getBeachTypeBeaches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const beachType = req.query.p;
    try {
        const beaches = yield prisma.beach.findMany({
            where: { beachType },
            select: {
                name: true,
                municipality: true,
                province: true,
                country: true,
                length: true,
                latitude: true,
                additionalImages: true,
                imageBeach: true,
                bqvImage: true,
                bqvScore: true,
                beachType: true,
                region: true,
                id: true,
            },
            orderBy: {
                bqvScore: "desc", // Order by BQV in descending order
            },
            take: 10, // Limit to the top 10 beaches
        });
        if (!beaches || beaches.length === 0) {
            res.status(404).json({ message: "No beaches found of this type" });
        }
        else {
            res.status(200).json({ data: beaches, message: "Beaches by Type" });
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.getBeachTypeBeaches = getBeachTypeBeaches;

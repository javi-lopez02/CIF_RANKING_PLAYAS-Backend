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
exports.updateExpert = exports.getExpertsId = exports.getExperts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getExperts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const experts = yield prisma.expert.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                institution: true,
                country: true,
                experienceYears: true,
                graduatedDate: true,
                studyLevel: true,
                codeNode: true,
                image: true,
                evaluations: {
                    select: { creditibilyIndex: true, beach: true },
                },
                // specializationAreas: true,
            },
            orderBy: {
                name: "asc",
            }
        });
        if (!experts) {
            res.status(401).json({ message: "Error al obtener los expertos" });
        }
        res.status(200).json({ data: experts, message: "Expertos encontrados" });
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});
exports.getExperts = getExperts;
const getExpertsId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { expertId } = req.body;
    try {
        const experts = yield prisma.expert.findUnique({
            where: { id: expertId },
            select: {
                id: true,
                name: true,
                email: true,
                institution: true,
                experienceYears: true,
                graduatedDate: true,
                studyLevel: true,
                codeNode: true,
                image: true,
                evaluations: true,
                // specializationAreas: true,
            },
        });
        if (!experts) {
            res.status(401).json({ message: "Error al obtener el experto" });
        }
        res.status(200).json({ data: experts, message: "Experto encontrado" });
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});
exports.getExpertsId = getExpertsId;
const updateExpert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, institution, codeNode, studyLevel, experienceYears, graduatedDate, specializationAreas, } = req.body;
    const { expertId } = req.params;
    try {
        const expert = yield prisma.expert.update({
            where: { id: expertId },
            data: {
                name,
                institution,
                codeNode,
                studyLevel,
                experienceYears,
                graduatedDate,
                // specializationAreas,
            },
        });
        if (!expert) {
            res.status(401).json({ message: "Error al editar el experto" });
        }
        res.status(200).json({ data: expert, message: "Experto editado" });
    }
    catch (error) {
        console.log("Error", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});
exports.updateExpert = updateExpert;

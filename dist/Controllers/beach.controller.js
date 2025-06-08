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
exports.getBeachId = exports.getBeaches = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getBeaches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beaches = yield prisma.beach.findMany({
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
                evaluations: {
                    select: {
                        creditibilyIndex: true,
                        beachDescription: true,
                        expert: true,
                    },
                },
            },
        });
        if (!beaches) {
            res.status(401).json({ message: "No se encuentran playas registradas" });
        }
        else {
            res.status(200).json({ data: beaches, message: "Lista de Playas" });
        }
    }
    catch (error) {
        console.log("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.getBeaches = getBeaches;
const getBeachId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const beachID = (req.query.p || "");
    try {
        const beach = yield prisma.beach.findUnique({
            where: { id: beachID },
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
                evaluations: {
                    select: {
                        creditibilyIndex: true,
                        beachDescription: true,
                        expert: true,
                    },
                },
            },
        });
        if (!beach) {
            res.status(401).json({ message: "No se encuentra la playa que busca" });
        }
        else {
            res.status(200).json({ data: beach, message: "Playa encontrada" });
        }
    }
    catch (error) {
        console.log("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.getBeachId = getBeachId;
// export const createBeach = async (req: Request, res: Response) => {
//   const {
//     name,
//     city,
//     state,
//     country,
//     coordinates,
//     residentialOccupation,
//     stiffening,
//     mainUse,
//     environmentalUse,
//     legalProtection,
//     services,
//     landscape,
//     vehicularAccess,
//   } = req.body;
//   try {
//     const beachType = "DE_POBLADO";
//     const beach = await prisma.beach.create({
//       data: {
//         name,
//         city,
//         state,
//         country,
//         coordinates,
//         residentialOccupation,
//         stiffening,
//         mainUse,
//         environmentalUse,
//         legalProtection,
//         services,
//         landscape,
//         vehicularAccess,
//         beachType,
//         region: "DE_POBLADO",
//         BQV: 24,
//       },
//     });
//     if (!beach) {
//       res.status(401).json({ message: "No se encuentra la playa que busca" });
//     }
//     res
//       .status(200)
//       .json({
//         data: beach,
//         message: "Datos de la playa guardados correctamente",
//       });
//   } catch (error) {
//     console.log("Error:", error);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// };

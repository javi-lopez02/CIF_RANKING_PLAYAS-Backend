"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/processExcel.ts
const xlsx_1 = __importDefault(require("xlsx"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.resolve(__dirname, './Data/Ranking 2025-V1-final.xlsx');
// Cargar el archivo Excel
const workbook = xlsx_1.default.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
// Convertir a JSON
const rawData = xlsx_1.default.utils.sheet_to_json(worksheet);
function parseEvaluators(evaluatorString) {
    if (!evaluatorString || typeof evaluatorString !== 'string')
        return [];
    const evaluatorsArray = evaluatorString.split(';').map((e) => e.trim());
    return evaluatorsArray.map((evaluator) => {
        const match = evaluator.match(/(.+?)\s*$(.+?)$/);
        if (match) {
            return {
                name: match[1].trim(),
                score: parseFloat(match[2]),
            };
        }
        return {
            name: evaluator,
            score: null,
        };
    });
}
function getAdditionalImages(row) {
    const images = [];
    for (let i = 1; i <= 6; i++) {
        const key = `URL Playa fotos adicionales ${i}`;
        if (row[key]) {
            images.push(row[key]);
        }
    }
    return images;
}
const formattedData = rawData.map((row) => ({
    name: row['Nombre de la playa '] || '',
    municipality: row['Municipio'] || '',
    province: row['Provincia'] || '',
    country: row['País'] || '',
    region: row['Región'] || '',
    type: row['Tipo de playa'] || '',
    length: row['Longitud'] ? Number(row['Longitud']) : null,
    latitude: row['Latitud'] ? Number(row['Latitud']) : null,
    bqvImage: row['Foto BQV'] || null,
    urlPlaya: row['URL Playa'] || null,
    additionalImages: getAdditionalImages(row),
    evaluators: parseEvaluators(row['Nombre (IC)']),
    bqvScore: row['BQV'] ? parseInt(row['BQV'], 10) : null,
}));
const outputFilePath = path_1.default.resolve(__dirname, '../beachesData.json');
fs_1.default.writeFileSync(outputFilePath, JSON.stringify(formattedData, null, 2), 'utf-8');
console.log(`Archivo JSON generado correctamente: ${outputFilePath}`);

"use strict";
// src/processEvaluators.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xlsx_1 = __importDefault(require("xlsx"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.resolve(__dirname, "./Data/Listado_EIEP.xlsx");
// Cargar el archivo Excel
const workbook = xlsx_1.default.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
// Convertir a JSON
const rawData = xlsx_1.default.utils.sheet_to_json(worksheet);
const formattedData = rawData.map((row) => ({
    name: row["NOMBRE"] || "",
    country: row["PAIS"] || "",
}));
const outputFilePath = path_1.default.resolve(__dirname, '../escuelaData.json');
fs_1.default.writeFileSync(outputFilePath, JSON.stringify(formattedData, null, 2), 'utf-8');

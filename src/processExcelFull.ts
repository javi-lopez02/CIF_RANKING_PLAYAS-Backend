// src/processEvaluators.ts

import XLSX from "xlsx";
import fs from "fs";
import path from "path";

import { EvaluatorType } from "./types";

const filePath = path.resolve(
  __dirname,
  "./Data/Listado evaluadores 2025-Que SI evaluaron-V1.xlsx"
);

// Cargar el archivo Excel
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convertir a JSON
const rawData = XLSX.utils.sheet_to_json(worksheet);

const formattedData: EvaluatorType[] = rawData.map((row: any) => ({
  name: row["Nombre y Apellido"] || "",
  institution: row["Institución de afiliación"] || "",
  country: row["País"] || "",
  photoUrl: row["URL FOTO"] || "",
}));

const outputFilePath = path.resolve(__dirname, '../evaluatorsData.json');
fs.writeFileSync(outputFilePath, JSON.stringify(formattedData, null, 2), 'utf-8');

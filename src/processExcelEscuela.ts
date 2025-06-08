// src/processEvaluators.ts

import XLSX from "xlsx";
import fs from "fs";
import path from "path";

interface EvaluatorType {
    name: string
    country: string
}

const filePath = path.resolve(
  __dirname,
  "./Data/Listado_EIEP.xlsx"
);

// Cargar el archivo Excel
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convertir a JSON
const rawData = XLSX.utils.sheet_to_json(worksheet);

const formattedData: EvaluatorType[] = rawData.map((row: any) => ({
  name: row["NOMBRE"] || "",
  country: row["PAIS"] || "",
}));

const outputFilePath = path.resolve(__dirname, '../escuelaData.json');
fs.writeFileSync(outputFilePath, JSON.stringify(formattedData, null, 2), 'utf-8');

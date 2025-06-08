// src/processExcel.ts
import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

import { BeachEntry, Evaluator } from './types';

const filePath = path.resolve(__dirname, './Data/Ranking 2025-V1-final.xlsx');

// Cargar el archivo Excel
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convertir a JSON
const rawData = XLSX.utils.sheet_to_json(worksheet);

function parseEvaluators(evaluatorString: string): Evaluator[] {
  if (!evaluatorString || typeof evaluatorString !== 'string') return [];

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

function getAdditionalImages(row: any): string[] {
  const images: string[] = [];
  for (let i = 1; i <= 6; i++) {
    const key = `URL Playa fotos adicionales ${i}`;
    if (row[key]) {
      images.push(row[key]);
    }
  }
  return images;
}

const formattedData: BeachEntry[] = rawData.map((row: any) => ({
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

const outputFilePath = path.resolve(__dirname, '../beachesData.json');
fs.writeFileSync(outputFilePath, JSON.stringify(formattedData, null, 2), 'utf-8');

console.log(`Archivo JSON generado correctamente: ${outputFilePath}`);
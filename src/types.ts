export interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export interface File {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  destination: string
  filename: string
  path: string
  size: number
}

declare global {
  namespace Express {
    interface Request {
      userId: string
      userName: string
    }
  }
}

export interface SortItem {
  field: "createdAt" | "price" | "ratingAverage"; // Los campos permitidos
  order: "asc" | "desc"; // Los valores permitidos
}

export interface Evaluator {
  name: string;
  score: number | null;
}

export interface BeachEntry {
  name: string;
  municipality: string;
  province: string;
  country: string;
  region: string;
  type: string;
  length: number | null;
  latitude: number | null;
  bqvImage: string | null;
  urlPlaya: string | null;
  additionalImages: string[];
  evaluators: Evaluator[];
  bqvScore: number | null;
}

export interface EvaluatorType {
  name: string;
  institution: string | null;
  country: string | null;
  photoUrl: string | null;
}
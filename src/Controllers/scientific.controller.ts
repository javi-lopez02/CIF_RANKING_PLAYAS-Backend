import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getScientific = async (req: Request, res: Response) => {
  try {
    const media = await prisma.scientific.findMany();

    if (!media) {
      res.status(401).json({ message: "No se encuentran medios registrados" });
    } else {
      res.status(200).json({ data: media, message: "Lista de Cientificos" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSchool = async (req: Request, res: Response) => {
  try {
    const school = await prisma.school.findMany();

    if (!school) {
      res.status(401).json({ message: "No se encuentran medios registrados" });
    } else {
      res.status(200).json({ data: school, message: "Lista de Cientificos" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

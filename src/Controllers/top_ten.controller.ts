import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getRegionBeaches = async (req: Request, res: Response) => {
  const region = req.query.p as
    | "ATLANTICO_SUR"
    | "PACIFICO_SUR"
    | "CARIBE"
    | "ATLANTICO_NORTE"
    | "PACIFICO_NORTE"
    | "MEDITERRANEO";

  try {
    const beaches = await prisma.beach.findMany({
      where: { region },
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
      },
      orderBy: {
        bqvScore: "desc", // Order by BQV in descending order
      },
      take: 10, // Limit to the top 10 beaches
    });

    if (!beaches || beaches.length === 0) {
      res.status(404).json({ message: "No beaches found in this region" });
    } else {
      res.status(200).json({ data: beaches, message: "Beaches in Region" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getBeachTypeBeaches = async (req: Request, res: Response) => {
  const beachType = req.query.p as
    | "POBLADO"
    | "NATURAL"
    | "URBANA"
    | "RURAL"
    | "ENCLAVE";

  try {
    const beaches = await prisma.beach.findMany({
      where: { beachType },
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
      },
      orderBy: {
        bqvScore: "desc", // Order by BQV in descending order
      },
      take: 10, // Limit to the top 10 beaches
    });

    if (!beaches || beaches.length === 0) {
      res.status(404).json({ message: "No beaches found of this type" });
    } else {
      res.status(200).json({ data: beaches, message: "Beaches by Type" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

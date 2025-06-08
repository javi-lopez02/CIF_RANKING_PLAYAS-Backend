import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExperts = async (req: Request, res: Response) => {
  try {
    const experts = await prisma.expert.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        institution: true,
        country: true,
        experienceYears: true,
        graduatedDate: true,
        studyLevel: true,
        codeNode: true,
        image: true,
        evaluations: {
          select: { creditibilyIndex: true, beach: true },
        },
        // specializationAreas: true,
      },
      orderBy:{
        name: "asc",
      }
    });

    if (!experts) {
      res.status(401).json({ message: "Error al obtener los expertos" });
    }

    res.status(200).json({ data: experts, message: "Expertos encontrados" });
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getExpertsId = async (req: Request, res: Response) => {
  const { expertId } = req.body;

  try {
    const experts = await prisma.expert.findUnique({
      where: { id: expertId },
      select: {
        id: true,
        name: true,
        email: true,
        institution: true,
        experienceYears: true,
        graduatedDate: true,
        studyLevel: true,
        codeNode: true,
        image: true,
        evaluations: true,
        // specializationAreas: true,
      },
    });

    if (!experts) {
      res.status(401).json({ message: "Error al obtener el experto" });
    }

    res.status(200).json({ data: experts, message: "Experto encontrado" });
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const updateExpert = async (req: Request, res: Response) => {
  const {
    name,
    institution,
    codeNode,
    studyLevel,
    experienceYears,
    graduatedDate,
    specializationAreas,
  } = req.body;
  const { expertId } = req.params;

  try {
    const expert = await prisma.expert.update({
      where: { id: expertId },
      data: {
        name,
        institution,
        codeNode,
        studyLevel,
        experienceYears,
        graduatedDate,
        // specializationAreas,
      },
    });

    if (!expert) {
      res.status(401).json({ message: "Error al editar el experto" });
    }

    res.status(200).json({ data: expert, message: "Experto editado" });
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

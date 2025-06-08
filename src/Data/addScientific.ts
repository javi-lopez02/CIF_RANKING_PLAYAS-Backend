import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface ScientificData {
  name: string;
  country: string;
  schoolLevel: string;
  image: string;
  areaExperiencia: string;
}

async function main() {
  const scientific: ScientificData[] = [
    {
      name: "Ana Maria Faggi",
      country: "Argentina",
      schoolLevel: "Doctorado",
      image:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Ana-Maria-Faggi-1.jpg",
      areaExperiencia: "Ecología marina",
    },
    {
      name: "Camilo M. Botero",
      country: "Canadá / Colombia",
      schoolLevel: "Doctorado",
      image:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Camilo-Botero-1.jpg",
      areaExperiencia: "Geografía costera",
    },
    {
      name: "Flavia Moraes Lins de Barros ",
      country: "Brasil",
      schoolLevel: "Doctorado",
      image:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Flavia-Moraes-2.jpg",
      areaExperiencia: "Geografía costera",
    },
    {
      name: "Gerson Fernandino de Andrade Neto ",
      country: "Brasil",
      schoolLevel: "Doctorado",
      image:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Gerson-Fernandino-de-Andrade-1.jpg",
      areaExperiencia: "Gestión Ambiental",
    },
    {
      name: "Gleini Gallardo ",
      country: "Colombia",
      schoolLevel: "Doctorado",
      image:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Geini-Gallardo.jpg",
      areaExperiencia: "Turismo",
    },
    {
      name: "Gustavo Eugenio Echeverri Jaramillo ",
      country: "Colombia",
      schoolLevel: "Doctorado",
      image:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Gustavo-Echeverri-1.jpg",
      areaExperiencia: "Microbiología marina",
    },
    {
      name: "José Rodrigues Souza Filho ",
      country: "Brasil",
      schoolLevel: "Doctorado",
      image:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Jose-Rodrigues-1.jpg",
      areaExperiencia: "Geografía costera",
    },
    {
      name: "Juan Alfredo Cabrera Hernández",
      country: "Cuba",
      schoolLevel: "Doctorado",
      image:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Juan-Alfredo-Cabrera-1.jpg",
      areaExperiencia: "Geografía costera",
    },
    {
      name: "Junia Kacenelenbogen Guimaraes",
      country: "Brasil",
      schoolLevel: "Doctorado",
      image:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Junia-Kacenelenbogen-.jpg",
      areaExperiencia: "Geografía costera",
    },
    {
      name: "María Patricia Guadarrama",
      country: "Mexico",
      schoolLevel: "Doctorado",
      image: "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Patricia-Guadarrama-2.jpg",
      areaExperiencia: "Ecología marina",
    },
    {
      name: "Yunior Ramón Velázquez Labrada ",
      country: "Cuba",
      schoolLevel: "Doctorado",
      image:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Yunior-Ramon-Velazquez-Labrada.jpg",
      areaExperiencia: "Ecología marina",
    },
  ];

  for (const mediaData of scientific) {
    await prisma.scientific.create({
      data: mediaData,
    });
  }
  console.log("Cientificos guardados exitosamente.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

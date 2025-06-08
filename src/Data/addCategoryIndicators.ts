//script para agregar categorias e indicadores

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface CategoryData {
  name: string;
}

async function main() {
  // Crear categorías
  const categoriesData: CategoryData[] = [
    { name: "Acceso y Aparcamiento" }, // cat-1
    { name: "Capacidad de Carga" }, // cat-2
    { name: "Servicios e Infraestructura" }, // cat-3
    { name: "Valor Escénico" }, // cat-4
    { name: "Seguridad" }, // cat-5
    { name: "Protección de Tormentas" }, // cat-6
    { name: "Estabilidad de la Linea de la Costa" }, // cat-7
    { name: "Cambios Inducidos" }, // cat-8
    { name: "Disipación de Energía de Olas" }, // cat-9
    { name: "Vulnerabilidad" }, // cat-10
    { name: "Calidad Ambiental" }, // cat-11
    { name: "Acciones Gubernamentales" }, // cat-12
    { name: "Hábitat" }, // cat-13
    { name: "Especies" }, // cat-14
    { name: "Patrimonio" }, // cat-15
    { name: "Calidad del Agua" }, // cat-16
    { name: "Calidad de la Arena" }, // cat-17
    { name: "Contaminación Episódica" }, // cat-18
    { name: "Servicios Sanitarios" }, //cat-19
    { name: "Basura y Residuos" }, //cat-20
  ];

  // Insertar categorías y mapear nombres a IDs
  const categoriesMap: Record<string, string> = {};

  for (const categoryData of categoriesData) {
    const category = await prisma.category.create({
      data: categoryData,
    });
    categoriesMap[category.name] = category.id;
  }

  //Datos de indicadores con sus categorias actualizadas

  const indicators = [
    {
      name: "Camino para la Playa",
      categoryId: categoriesMap["Acceso y Aparcamiento"],
    },
    {
      name: "Transporte Público",
      categoryId: categoriesMap["Acceso y Aparcamiento"],
    },
    { name: "Carreteras", categoryId: categoriesMap["Acceso y Aparcamiento"] },
    {
      name: "Aparcamiento",
      categoryId: categoriesMap["Acceso y Aparcamiento"],
    },
    { name: "Bici", categoryId: categoriesMap["Acceso y Aparcamiento"] },
    {
      name: "Densidad de Usuarios",
      categoryId: categoriesMap["Capacidad de Carga"],
    },
    {
      name: "Adaptaciones para Discapacitados",
      categoryId: categoriesMap["Servicios e Infraestructura"],
    },
    {
      name: "Sombrillas y Sillas",
      categoryId: categoriesMap["Servicios e Infraestructura"],
    },
    {
      name: "Instalaciones para niños",
      categoryId: categoriesMap["Servicios e Infraestructura"],
    },
    {
      name: "Restaurantes",
      categoryId: categoriesMap["Servicios e Infraestructura"],
    },
    {
      name: "Duchas",
      categoryId: categoriesMap["Servicios e Infraestructura"],
    },
    {
      name: "Instalaciones Deportivas",
      categoryId: categoriesMap["Servicios e Infraestructura"],
    },
    { name: "Color de la Arena", categoryId: categoriesMap["Valor Escénico"] },
    { name: "Color del Agua", categoryId: categoriesMap["Valor Escénico"] },
    {
      name: "Transparencia del Agua",
      categoryId: categoriesMap["Valor Escénico"],
    },
    { name: "Elementos Costeros", categoryId: categoriesMap["Valor Escénico"] },
    { name: "Vista", categoryId: categoriesMap["Valor Escénico"] },
    {
      name: "Linea del Horizonte",
      categoryId: categoriesMap["Valor Escénico"],
    },
    { name: "Cobertura Vegetal", categoryId: categoriesMap["Valor Escénico"] },
    {
      name: "Salvavidas y Equipos de Rescate",
      categoryId: categoriesMap["Seguridad"],
    },
    { name: "Tableros", categoryId: categoriesMap["Seguridad"] },
    { name: "Animales Peligrosos", categoryId: categoriesMap["Seguridad"] },
    { name: "Acantilados Peligrosos", categoryId: categoriesMap["Seguridad"] },
    { name: "Crimen y Vigilancia", categoryId: categoriesMap["Seguridad"] },
    { name: "Régimen de Olas", categoryId: categoriesMap["Seguridad"] },
    { name: "RIP", categoryId: categoriesMap["Seguridad"] },
    {
      name: "Zonificación de Actividades",
      categoryId: categoriesMap["Seguridad"],
    },
    { name: "Anchura", categoryId: categoriesMap["Protección de Tormentas"] },
    { name: "Pendiente", categoryId: categoriesMap["Protección de Tormentas"] },
    {
      name: "Estadio Morfodinámico",
      categoryId: categoriesMap["Protección de Tormentas"],
    },
    {
      name: "Tipo de Dunas",
      categoryId: categoriesMap["Protección de Tormentas"],
    },
    {
      name: "Exposición a las Olas",
      categoryId: categoriesMap["Protección de Tormentas"],
    },
    {
      name: "Balance de Sedimentos",
      categoryId: categoriesMap["Estabilidad de la Linea de la Costa"],
    },
    {
      name: "Linea de Costa",
      categoryId: categoriesMap["Estabilidad de la Linea de la Costa"],
    },
    {
      name: "Obras de Ingeniería de Defensa Dura",
      categoryId: categoriesMap["Estabilidad de la Linea de la Costa"],
    },
    {
      name: "Superficie Impermeable",
      categoryId: categoriesMap["Cambios Inducidos"],
    },
    {
      name: "Cambios en los Granos",
      categoryId: categoriesMap["Cambios Inducidos"],
    },
    { name: "Construcciones", categoryId: categoriesMap["Cambios Inducidos"] },
    {
      name: "Protección de la Zona de Baño",
      categoryId: categoriesMap["Disipación de Energía de Olas"],
    },
    {
      name: "Matrial de la Zona de Baño",
      categoryId: categoriesMap["Disipación de Energía de Olas"],
    },
    {
      name: "Dunas",
      categoryId: categoriesMap["Disipación de Energía de Olas"],
    },
    {
      name: "Tormentas y Catástrofes",
      categoryId: categoriesMap["Vulnerabilidad"],
    },
    {
      name: "Aumento del Nivel del Mar",
      categoryId: categoriesMap["Vulnerabilidad"],
    },
    {
      name: "Vulnerabilidad a la Erosión",
      categoryId: categoriesMap["Vulnerabilidad"],
    },
    { name: "Degradación", categoryId: categoriesMap["Calidad Ambiental"] },
    { name: "Sonido", categoryId: categoriesMap["Calidad Ambiental"] },
    {
      name: "Calidad del Aire/Agua/Arena",
      categoryId: categoriesMap["Calidad Ambiental"],
    },
    {
      name: "Restricciones y Normativas",
      categoryId: categoriesMap["Acciones Gubernamentales"],
    },
    {
      name: "Educación Ambiental",
      categoryId: categoriesMap["Acciones Gubernamentales"],
    },
    {
      name: "Hábitat: Estado del Ecosistema",
      categoryId: categoriesMap["Hábitat"],
    },
    {
      name: "Abundancia y Modificación",
      categoryId: categoriesMap["Especies"],
    },
    { name: "Especies Autóctonas", categoryId: categoriesMap["Especies"] },
    { name: "Especies Invasoras", categoryId: categoriesMap["Especies"] },
    {
      name: "Patrimonio: Diversidad y Conservación",
      categoryId: categoriesMap["Patrimonio"],
    },
    {
      name: "Calidad del Agua: Evidencias e Histórico de Calidad",
      categoryId: categoriesMap["Calidad del Agua"],
    },
    {
      name: "Acumulaciones Vegetales",
      categoryId: categoriesMap["Calidad de la Arena"],
    },
    {
      name: "Heces y Vectores",
      categoryId: categoriesMap["Calidad de la Arena"],
    },
    { name: "Olores", categoryId: categoriesMap["Calidad de la Arena"] },
    {
      name: "Floraciones",
      categoryId: categoriesMap["Contaminación Episódica"],
    },
    {
      name: "Vertidos de Petróleo",
      categoryId: categoriesMap["Contaminación Episódica"],
    },
    { name: "Limpieza", categoryId: categoriesMap["Servicios Sanitarios"] },
    { name: "Papeleras", categoryId: categoriesMap["Servicios Sanitarios"] },
    {
      name: "Unidades Sanitarias",
      categoryId: categoriesMap["Servicios Sanitarios"],
    },
    { name: "Basura Flotante", categoryId: categoriesMap["Basura y Residuos"] },
    {
      name: "Residuos Sólidos",
      categoryId: categoriesMap["Basura y Residuos"],
    },
    {
      name: "Manchas de Petróleo",
      categoryId: categoriesMap["Basura y Residuos"],
    },
    {
      name: "Gestión de Residuos",
      categoryId: categoriesMap["Basura y Residuos"],
    },
  ];

  // Insertar productos en la base de datos
  for (const indicatorsData of indicators) {
    await prisma.indicator.create({
      data: indicatorsData,
    });
  }

  console.log("Categorías e indicadores guardados exitosamente.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

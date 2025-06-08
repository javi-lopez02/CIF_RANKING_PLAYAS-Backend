"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const schoolData = [
            {
                name: "Angel L. Javier Hernandez",
                country: "República Dominicana",
            },
            {
                name: "Elizabeth Violeta Iris Maldonado",
                country: "México",
            },
            {
                name: "Francisco Detrell",
                country: "México",
            },
            {
                name: "Gianfranco Policastro",
                country: "Argentina",
            },
            {
                name: "Gladys A. Rosado Jimenez",
                country: "Republica Dominicana",
            },
            {
                name: "Gonzalo Méndez Martínez",
                country: "España",
            },
            {
                name: "Jael Javier Olivares",
                country: "República Dominicana",
            },
            {
                name: "Jone Molina",
                country: "España",
            },
            {
                name: "Jose Luis Vasque Almanzar",
                country: "Republica Dominicana",
            },
            {
                name: "Magdalena Sanchez",
                country: "Argentina",
            },
            {
                name: "María José Martín Velasco",
                country: "argentina",
            },
            {
                name: "María Victoria Laitano",
                country: "Argentina",
            },
            {
                name: "Mariana Addino",
                country: "Argentina ",
            },
            {
                name: "Mariana Rosalyth Rondón Ramos",
                country: "Colombia",
            },
            {
                name: "Marie Touchon",
                country: "Colombia/Reino Unido/Francia",
            },
            {
                name: "Ricardo Andrés Arce Torres",
                country: "Chile",
            },
            {
                name: "Sarina Suero Suero",
                country: "República Dominicana",
            },
            {
                name: "Verónica Mariela Blanco",
                country: "Argentina",
            },
            {
                name: "Yadid Adriana Jimenez Zarate",
                country: "colombia",
            },
            {
                name: "Yamila Eliana Rodriguez",
                country: "Argentina",
            },
            {
                name: "Yanel Leonor Martin Varisto",
                country: "Argentina",
            },
            {
                name: "Alessandra Pfuetzenreuter",
                country: "Brasil",
            },
            {
                name: "Bruna Leticia Andrade",
                country: "Brasil",
            },
            {
                name: "Daniel Hauer Queiroz Telles",
                country: "Brasil",
            },
            {
                name: "Fabricio Martinez",
                country: "Brasil",
            },
            {
                name: "Gabriel Moreira Reges",
                country: "Brasil",
            },
            {
                name: "Lucas Silva Leite",
                country: "Brasil",
            },
            {
                name: "Marcus Polette",
                country: "Brasil",
            },
            {
                name: "Neise Mare de Souza Alves",
                country: "Brasil",
            },
            {
                name: "Raija Cisneiros de Jesus Raija",
                country: "Brasil",
            },
        ];
        for (const school of schoolData) {
            yield prisma.school.create({
                data: school,
            });
        }
        console.log("Escuela guardada exitosamente.");
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));

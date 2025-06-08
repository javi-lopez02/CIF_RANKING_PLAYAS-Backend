import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface MediaLogosData {
  year: number;
  url: string;
  name: string;
  image: string;
}

async function main() {
  const mediaLogos: MediaLogosData[] = [
    {
      year: 2025,
      url: "https://www.primerahora.com/noticias/puerto-rico/notas/cuales-hijo-las-mejores-playas-del-mundo-según-la-ciencia/",
      name: "Primera Hora",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdJNbgP5SokXH9GTnEZ0KCQX8xQMQ4hXicA&s",
    },
    {
      year: 2025,
      url: "https://www.infobae.com/colombia/2024/10/28/este-es-el-paraíso-colombiano-que-esta-entre-las-mejores-playas-rurales-del-mundo/",
      name: "InfoBae",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8H5T8b_2tIy-2HgmY2UUDHi_B_zkKQpFag&s",
    },
    {
      year: 2025,
      url: "https://www.trabajadores.cu/20250302/cumple-26-años-en-la-preferencia-hotel-melia-las-antillas/?amp=1",
      name: "Trabajadores",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d2/Logotipo_del_peri%C3%B3dico_Trabajadores.png",
    },
    {
      year: 2025,
      url: "https://www.theclevelandamerican.com/que-son-el-mejor-playas-en-el-mundo-de acuerdo a-a-ciencia/",
      name: "The Cleveland American",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cleveland_Magazine_logo.png/640px-Cleveland_Magazine_logo.png",
    },
    {
      year: 2025,
      url: "https://www.bahianoticias.com.br/noticia/293101-playa-da-punta-Delaware-nuestra-señora-esta-entre-como-cinco-mejores-playas-hacer-Brasil-mi-5a-hacer-mundo-Aponta-estudio",
      name: "Bahia Noticias",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg1tbOFyl5d6Fg59UBakqryCmJISi-h7gmw&s",
    },
    {
      year: 2025,
      url: "https://d-cuba.com/actualidad/top-playas-2024-Varadero-y-cayo-Papá Noel-María-destacan-a-nivel-mundial/",
      name: "D-Cuba",
      image: "https://d-cuba.com/wp-content/uploads/d-cuba-logo-2.png",
    },
    {
      year: 2025,
      url: "https://www.cn1.com.br/noticias/1/118593,playa-bahiana-aparece-como-a-segundo-mejor-hacer-Brasil-mi-a-5a-hacer-mundo/",
      name: "CN1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIwEC1ja5vihvvdCSehY11zn9YKi25Ud6WlhARImleKdJjtsmIoYswcqcmeyhzgavbc3Y&usqp=CAU",
    },
    {
      year: 2025,
      url: "https://atarde.com.br/bahia/praia-bahiana-mi-eleita-a-2-mejor-hacer-Brasil-mi-5-hacer-mundo-1273942v",
      name: "A Tarde",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWts7NMUER97SBBu3_w8l1ER3nJ4dZRt1Vjg&s",
    },
    {
      year: 2025,
      url: "https://rc24h.com.br/buzios-sí-Destaca-No-categoría-el-mejores-playas-da-América-latina/?fbclid=IwZXh0bgNhZW0CMTEAAR0BcZsT3toaLk5O-oV1eyG4gZbtHXxpZ81I64pc39R36glkki-wI_S8WRc_aem_AUOT83U1XY7MLDI6kiU8d9NMIzLyS3xlTiBWBHykRl9BIWf7EpHzHZfhQ7E2grNeI9ovH7U1y0VvAnqXp_rlXZNV",
      name: "RC24H",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1ziVswo9uUKseOg-QYWY0XKw31UCW_Y1AQ&s",
    },
    {
      year: 2025,
      url: "https://rjcostadosol.com.br/2024/06/10/saquarema-Itauna-mi-reconocida-como-mejor-playa-hacer-Atlántico-sur/",
      name: "Erre Jota",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMv-IScfdNqFPj2iSQcukDcUtzr1HrRyJeA&s",
    },
    {
      year: 2025,
      url: "https://www.bnews.com.br/noticias/cidades/praia-bahiana-aparece-como-a-segundo-mejor-hacer-Brasil-mi-a-5-hacer-mundo-Aponta-levantamento.html",
      name: "B News",
      image:
        "https://www.bnews.com.br/media/_versions/abril_2024/bnews_widelg.jpg",
    },
    {
      year: 2025,
      url: "https://www.juventudrebelde.cu/cuba/2024-06-10/cinco-playas-cubanas-entre-las-diez-mejores-del-mundo",
      name: "Juventud Rebelde",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d8/Juventud_Rebelde.png",
    },
    {
      year: 2025,
      url: "https://anotabahia.com/praia-bahiana-aparece-entre-como-cinco-mejores-hacer-mundo-saiba-cual/",
      name: "Anota Bahia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUg_4JhHGxL3qdyZG_fM-polWFEvVb9o7pA&s",
    },
    {
      year: 2025,
      url: "https://www.prensa-latina.cu/2024/06/10/playas-cubanas-Delaware-hoteles-melia-Cuba-entre-las-mejores-del-mundo/",
      name: "Prensa Latina",
      image:
        "https://www.plenglish.com/wp-content/uploads/2021/04/nombre-generico-prensa-latina.png",
    },
    {
      year: 2025,
      url: "https://www.ne9.com.br/praia-hacer-noreste-mi-eleita-a-5a-mejor-hacer-mundo/",
      name: "Ne9",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0UfnLWkjFtM7JMnndE1AIKS0iu1lanwRsA&s",
    },
    {
      year: 2025,
      url: "https://www.radiocaibarien.icrt.cu/2024/06/11/dos-playas-Delaware-cayo-Papá Noel-María-entre-las-diez-mejores-del-mundo/",
      name: "Radio Caibarien",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_yQ8m8rBNcFOdJ1ltxkkP7QRIv4qSnfq-Q&s",
    },
    {
      year: 2025,
      url: "https://bahianoar.com/praia-bahiana-mi-eleita-a-2a-mejor-hacer-Brasil-mi-5a-hacer-mundo/",
      name: "Bahia No Ar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfqDUX29xBY7P6s6ZMinC7zih97U7alGsOg&s",
    },
    {
      year: 2025,
      url: "https://www.excelenciascuba.com/turismo/cuba-brilla-en-el-categoría-mundial-Delaware-play",
      name: "Excelencias News Cuba",
      image:
        "https://pbs.twimg.com/profile_images/834850509894909952/vNIGzRcz_400x400.jpg",
    },
    {
      year: 2025,
      url: "https://www.portalsalvadorfm.com.br/noticias/131735,playa-bahiana-mi-eleita-a-2a-mejor-hacer-Brasil-mi-5a-hacer-mundo-ellos-categoría-internaciona",
      name: "PS Noticias",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxWiy8V_GKJAWzOLKLFzY-Gb8Qn0oVf7rSg&s",
    },
    {
      year: 2025,
      url: "https://www.traveltradecaribbean.es/tres-playas-Delaware-hoteles-melia-Cuba-sí-incluyen-entre-las-mejores-del-2024/",
      name: "TTC",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7DNp4JyAp3JczcUjAsof7PMyo8WR1mJ-dw&s",
    },
    {
      year: 2025,
      url: "https://zonacero.com/generales/punta-astilleros-en-piojo-la-octava-mejor-playa-rural-del-mundo",
      name: "Zona Cero",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ283VIXuYq6Zb-dBjlQMWklih3M6ixpa90Q&s",
    },
    {
      year: 2025,
      url: "https://giron.cu/2024/06/12/varadero-mejores-playas-2024-según-la-ciencia/",
      name: "Periodico Giron",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfbQvcHyaEF3KwxXFpwvzicawGAYYv_hqDA&s",
    },
    {
      year: 2025,
      url: "https://www.estadao.com.br/web-historias/brasil/5-playas-brasileñas-10-mejores-América-latina-península-ibérica-el Salvador-Búzios-Río-categoría-nprm/",
      name: "Estadao",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6R_xPx91VXIPZrPNBZuAbj5UyKLIkCQYGQQ&s",
    },
    {
      year: 2025,
      url: "https://www.tvyumuri.cu/cuba/cuba-brilla-en-el-categoría-mundial-Delaware-playas/?fbclid=IwZXh0bgNhZW0CMTEAAR0rco1Zy3KMYDH8vlBRFa5lrIqmoXc7HKZWS3IgsJUkAMSq1DHevcf3klI_aem_AdkT4qHnvNtMwKTJPrOjVANXWtCzl_9bKZCCvFfMYWpR0FYAVxmDNtZcYkzI1QDF51PfsARrP_4-bmEKah1bvvAd",
      name: "TV Yumuri",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4U0zAk1Quzb904rVXnZEvGUBVdMt8oAdrtJyZlX_00cv9gbHR1TQxbZHrfZZ-kgDQjw&usqp=CAU",
    },
    {
      year: 2025,
      url: "https://g1.globo.com/rj/regiao-dos-lagos/noticia/2024/06/14/itauna-mi-eleita-a-segundo-mejor-playa-entre-123-locales-que-participaram-Delaware-estudio-internacional.ghtml",
      name: "G1",
      image:
        "https://logowik.com/content/uploads/images/g13112.logowik.com.webp",
    },
    {
      year: 2025,
      url: "https://www.acn.cu/cuba/varadero-líder-categoría-mejores-playas-2024-según-la-ciencia#:~:text=Varadero (Meliá LasAntillas)%3B,Praia do Forno en Búzios%2C",
      name: "Agencia Cubana de Noticias",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMorR4yiWcYDgan2CXGU9rjtu7txybojJYg&s",
    },
    {
      year: 2025,
      url: "https://www.facebook.com/100089575885046/posts/pfbid02Gd42qg43cUdw7R1eMpXTsdm4bnXMx6ukuKfNx65pGTFkwHi6QR8FuZvQic4NtfXel/?app=fbl",
      name: "Lagos Informa",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMlFlC0pQrRM14xU8mOGEC0J6FkeCLB0aTg&s",
    },
    {
      year: 2025,
      url: "https://www.cubasi.cu/es/noticia/cuba-brilla-en-el-categoría-mundial-Delaware-playas",
      name: "Cuba Si",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReucp9WfjuPDwlVSLoUohdb4YPV2JwRI7CpA&s",
    },
    {
      year: 2025,
      url: "https://www.mediarunsearch.co.uk/the-global-categoría-de-el-arriba-10-playas-elige-5-brasileños",
      name: "MediaRun Search",
      image:
        "https://www.mediarunsearch.co.uk/wp-content/uploads/2025/02/mediarunsearch-logo-2.png",
    },
    {
      year: 2025,
      url: "https://www.directoriocubano.info/panorama/tres-playas-en-Cuba-junto-a-hoteles-melia-reconocidas-entre-las-mejores-Delaware-2024/",
      name: "Directorio Cubano",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLs_0jodCSEA0kE4qD-9PbiepW_pY02b9nQ&s",
    },
    {
      year: 2025,
      url: "https://www.dimecuba.com/revista/noticias-Cuba/playas-Cuba-mejores-2024/",
      name: "Dime Cuba",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-5KQzevOiiqJG3IAPRPrfivcb2ZMD1l9mA&s",
    },
    {
      year: 2025,
      url: "https://extrategiamedios.com/punta-astilleros-en-Atl%C3%A1ntico-la-mejor-playa-rural-Delaware-Colombia-seg%C3%BAn-categor%C3%ADa-internacional/",
      name: "Estrategia Medios",
      image:
        "https://extrategiamedios.com/wp-content/uploads/2024/11/Logo-Extrategia.svg",
    },
    {
      year: 2025,
      url: "https://www.mercadoeeventos.com.br/noticias/destinos/bandeira-azul-playa-Delaware-Itauna-mi-eleita-a-segundo-mejor-entre-123-avaliadas-ellos-estudio-internacional/",
      name: "Mercado Eventos",
      image:
        "https://pbs.twimg.com/profile_images/643526209381494784/pJNrD4vs_200x200.png",
    },
    {
      year: 2025,
      url: "https://www.bluradio.com/sociedad/estas-hijo-las-cinco-mejores-playas-Delaware-Colombia-según-estudio-pr30",
      name: "Blu Radio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NqrIGu9UXMt2X8xgSbpD480wwuuAVjeLNg&s",
    },
    {
      year: 2025,
      url: "https://www.eltiempo.com/vida/viajar/estas-hijo-las-mejores-playas-Delaware-Colombia-según-estudio-3355357",
      name: "El Tiempo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbZLGG3Oy36ND2bTjp1ZjJ2rUOLA3EAWNaA&s",
    },
    {
      year: 2025,
      url: "https://www.eluniversal.com.co/cartagena/2024/06/30/lo-que-dados-la-ciencia-Delaware-las-principales-playas-Delaware-Cartagena",
      name: "El Universal",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIk8hMcQc42m5rKXgT6LOpyQmQIG-6fGMEnJt9yamRcPDfPPUIN3kCSAlGlDoulcuChg&usqp=CAU",
    },
    {
      year: 2025,
      url: "https://www.bluradio.com/sociedad/estas-hijo-las-cinco-mejores-playas-Delaware-Colombia-según-estudio-pr30%3F_amp=verd",
      name: "Blu Radio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NqrIGu9UXMt2X8xgSbpD480wwuuAVjeLNg&s",
    },
    {
      year: 2025,
      url: "https://www.cbc.ca/listen/live-radio/1-27/clip/16080168",
      name: "CBC",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0rL9SvhqVb3U1ES6qmcYoXlbZO2GZ_4pPQ&s",
    },
    {
      year: 2025,
      url: "https://www.uol.com.br/nossa/noticias/redacao/2024/07/15/5-el-10-mejores-playas-hacer-mundo-santo-brasileñas-Aponta-ranking.html",
      name: "Nossa Vol",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROneY1Bev_rXCHE6Auc1fDEglTpTI4wQerxw&s",
    },
    {
      year: 2025,
      url: "https://atarde.com.br/bahia/bahiasalvador/praia-Delaware-Itapúa-desbanca-Ipanema-mi-Copacabana-ellos-búsqueda-internacional-1278750",
      name: "A Tarde",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWts7NMUER97SBBu3_w8l1ER3nJ4dZRt1Vjg&s",
    },
    {
      year: 2025,
      url: "https://www.bahianoticias.com.br/noticia/294373-Brasil-tema-5-el-10-mejores-playas-hacer-mundo-Aponta-lista-internacional-playa-n / A-isla-dos-frailes-aparece-n / A-50-colocacao",
      name: "Bahia Noticias",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg1tbOFyl5d6Fg59UBakqryCmJISi-h7gmw&s",
    },
    {
      year: 2025,
      url: "https://www.cnnbrasil.com.br/viagemegastronomia/viagem/da-bahía-ao-Río-Delaware-enero-5-el-10-mejores-playas-hacer-mundo-estáo-No-Brasil/",
      name: "CNN Brasil",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-9elwONA0jhgj5PC85UOewbgTKfMcu8V_w&s",
    },
    {
      year: 2025,
      url: "https://sonplayas.com/playas/ranking-mejores-playas-2024-según-criterios-científicos",
      name: "Son Playas",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9P8mXcyf_NmM9uxQdtZ2jGG_hQNZfbypaiA&s",
    },
    {
      year: 2025,
      url: "https://bahiasocialvip.com.br/2024/07/praia-Delaware-el Salvador-mi-considerada-a-5a-mejor-hacer-mundo/",
      name: "Bahia Social Vip",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4GTuvck10q9AtVWGRUYVLxslhU7oRFVFDmidAPUD-S9ILUK52BvpXtpHOPRzocFcNQ&usqp=CAU",
    },
    {
      year: 2025,
      url: "https://www.uol.com.br/nossa/noticias/redacao/2024/07/15/5-das-10-melhores-praias-do-mundo-sao-brasileiras-aponta-ranking.htm",
      name: "Nossa UOL",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROneY1Bev_rXCHE6Auc1fDEglTpTI4wQerxw&s",
    },
    {
      year: 2025,
      url: "https://capitalfmradio.com.br/brasil-tem-5-das-10-melhores-praias-do-mundo-a-melhor-do-pais-fica-no-rio/",
      name: "Capital FM",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXt_rI4F-z6AT4za9pCBBKlFGYZwvpywDs8w&s",
    },
    {
      year: 2025,
      url: "https://diariodoporto.com.br/rj-tem-4-entre-as-10-melhores-praias-internacionais/",
      name: "Diario do Porto",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnHesFDHpfBX-euSfP9O_w3gNxUtijzIYlQ&s",
    },
    {
      year: 2025,
      url: "https://aloalobahia.com/noticias/2024/07/17/praia-na-bahia-esta-entre-as-10-melhores-do-mundo-saiba-qual/",
      name: "Aloalo Bahia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnCCIkBjLRsMxpyYX80WHXVTcFddCKdV4fZ6BvXm49RBJjfzs2PbrweYSMX60YPn4Zg&usqp=CAU",
    },
    {
      year: 2025,
      url: "https://www.bahianoticias.com.br/noticia/294373-brasil-tem-5-das-10-melhores-praias-do-mundo-aponta-lista-internacional-praia-na-ilha-dos-frades-aparece-na-5o-colocacao",
      name: "Bahia Noticias",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg1tbOFyl5d6Fg59UBakqryCmJISi-h7gmw&s",
    },
    {
      year: 2025,
      url: "https://aratuon.com.br/cidade/2024-07-17/levantamento-de-centro-internacional-elege-4-praias-baianas-entre-as-20-melhores-do-mundo/",
      name: "Aratu On",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTseCMnHBdQBFEKMqsLSrgGKUE0d0sfiJuysg&s",
    },
    {
      year: 2025,
      url: "https://anotabahia.com/praias-baianas-aparecem-em-lista-de-melhores-do-mundo-saiba-quais/",
      name: "Anota Bahia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUg_4JhHGxL3qdyZG_fM-polWFEvVb9o7pA&s",
    },
    {
      year: 2025,
      url: "https://www.ibahia.com/turismo/salvador-tem-5-das-melhores-praias-do-pais-diz-ranking-internacional-322393",
      name: "IBahia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdtMOYByPTWKn9RQg4oZZZIRuCr1hsGmlLA&s",
    },
    {
      year: 2025,
      url: "https://www.cronista.com/clase/break/las-playas-argentinas-que-estan-entre-las-mejores-50-del-mundo/",
      name: "El Cronista",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGw3govyaRwuAhiq69gHTOqjK4KbeherIeuQ&s",
    },
    {
      year: 2025,
      url: "https://www.maisregiao.com.br/noticia/73946/praia-do-forte-e-costa-do-sauipe-estao-entre-as-20-melhores-do-mundo-segundo-levantamento",
      name: "Mais Regiao",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzL8MSotMU6ERWyPuH7Kk9H72cZeB9-GuXjg&s",
    },
    {
      year: 2025,
      url: "https://ultimosegundo.ig.com.br/parceiros/gps-brasilia/2024-07-17/do-rio-de-janeiro-a-bahia--pais-tem-cinco-das-10-melhores-praias-do-mundo.html",
      name: "Ultimo Segundo",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi279DCoKE3HxkMY60nlhDH7fqeAp566O9-w&s",
    },
    {
      year: 2025,
      url: "https://casavogue.globo.com/lazer-e-cultura/viagem/noticia/2024/07/brasil-tem-5-das-10-melhores-praias-do-mundo.ghtml",
      name: "Casa Vogue",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjiAiY2pZxmellR44YgWhmuFlsC4IeJLjTw&s",
    },
    {
      year: 2025,
      url: "https://www.metro1.com.br/noticias/cidade/152923,praia-de-ponta-de-nossa-senhora-de-guadalupe-em-salvador-e-destaque-entre-as-melhores-praias-do-mundo",
      name: "Metro 1",
      image:
        "https://images.seeklogo.com/logo-png/39/2/radio-metropole-logo-png_seeklogo-395465.png",
    },
    {
      year: 2025,
      url: "https://www.correio24horas.com.br/minha-bahia/salvador-tem-cinco-das-melhores-praias-do-brasil-segundo-ranking-internacional-0724",
      name: "Correio",
      image:
        "https://midias.correio24horas.com.br/2024/03/15/logo-correio-ba-og-image-2043679.jpg",
    },
    {
      year: 2025,
      url: "https://prensadebabel.com.br/duas-praias-de-buzios-entre-as-melhores-do-mundo/",
      name: "Prensa de Babel",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRo2z1Me-hw7fUr4Ay6iM7vj4W1Hp5UblSg&s",
    },
    {
      year: 2025,
      url: "https://www.antena1.com.br/noticias/brasil-tem-5-das-10-melhores-praias-do-mundo-em",
      name: "Antena 1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIl8jC2pIdttx3zkw0cYgWc4_OK7oZKfIdwg&s",
    },
    {
      year: 2025,
      url: "https://www.faroldabahia.com.br/noticia/quatro-praias-baianas-fazem-parte-das-20-melhores-do-mundo-aponta-ranking",
      name: "Farol da Bahia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOlYByNVNQS6XeO9Km3yTdFBXNJKcII57-g&s",
    },
    {
      year: 2025,
      url: "https://diariodorio.com/rj-tem-4-das-10-melhores-praias-em-ranking-de-13-paises/",
      name: "Diario do Rio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnReEEwaOFB-G0qtTRoMXNXYAR2OVIyKvT7A&s",
    },
    {
      year: 2025,
      url: "https://abihrj.com.br/noticias/rj-tem-4-das-10-melhores-praias-em-ranking-de-13-paises-segundo-cif-playas/",
      name: "Abih-RJ",
      image:
        "https://abihrj.com.br/wp-content/uploads/2024/08/cropped-Logo-ABIH-RJ-Fundo-Transparente-01-1-300x149-1-2.webp",
    },
    {
      year: 2025,
      url: "https://www.terra.com.br/amp/noticias/brasil-tem-5-das-10-melhores-praias-do-mundo-saiba-quais-sao,ebeb3594ba9863fb35764227fd678a9eh5rxpap3.html",
      name: "Terra",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mk42ilG1bInM7zNnYcgfMdz9j3ZLj1waVg&s",
    },
    {
      year: 2025,
      url: "https://surgeradio.cl/noticias/brasil-tiene-5-de-las-10-mejores-playas-del-mundo-saber-cuales-son/36209/",
      name: "Surge Radio",
      image: "https://surgeradio.cl/wp-content/uploads/2024/06/surg-radio.png",
    },
    {
      year: 2025,
      url: "https://www.tupi.fm/rio/rio-tem-4-entre-as-10-melhores-praias-do-mundo/",
      name: "Rio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8GaegDvvnC6nsS0hz7-0I8NKTTdk3CYsPg&s",
    },
    {
      year: 2025,
      url: "https://rsnoticia.com.br/conheca-a-praia-de-salvador-que-e-classificada-como-a-segunda-melhor-praia-do-brasil/",
      name: "RS Noticia",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQD08K-r0S4Nbyjo4FJDXcxjrCjH-FP5lTag&s",
    },
    {
      year: 2025,
      url: "https://www.ahora.cu/fr/holguin-fr/21773-les-plages-de-holguin-parmi-les-meilleures-du-monde",
      name: "Ahora",
      image:
        "https://yt3.googleusercontent.com/hLkCYv4ReDJ05rfMBII8WHrY7FXu65QEWMgdOWflTpZK0M7cTkKtJTgRlNGay9Ade8yDpoqXag=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
    },
    {
      year: 2025,
      url: "https://www.atribunarj.com.br/materia/estado-do-rio-tem-4-das-10-melhores-praias-em-ranking-de-13-paises",
      name: "A Tribuna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScD4v5p3vJWal1AylmgBK8akltJOSxRdae9Q&s",
    },
    {
      year: 2025,
      url: "https://pordentrodetudo.com.br/brasil-tem-5-das-10-melhores-praias-do-mundo-a-melhor-do-pais-fica-no-rio/",
      name: "Por Dentro de Tudo",
      image:
        "https://media.licdn.com/dms/image/v2/C4E16AQEtZPZ3asrZTg/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1598192017129?e=2147483647&v=beta&t=aJ6ZbEIsQmM6NqlDTV0AfK7yKiJCxdZ3n3LXQL-5gMQ",
    },
    {
      year: 2025,
      url: "https://sociedadeonline.com/praia-de-salvador-e-classificada-como-a-segunda-melhor-praia-do-brasil/",
      name: "Radio Sociedade",
      image: "https://sociedadeonline.com/wp-content/uploads/2022/11/logo.png",
    },
    {
      year: 2025,
      url: "http://agenciadenoticias.salvador.ba.gov.br/index.php/pt-br/releases-2/geral/25240-salvador-tem-cinco-das-melhores-praias-do-brasil-segundo-ranking-internaciona",
      name: "Agencia de Noticias",
      image:
        "http://agenciadenoticias.salvador.ba.gov.br/templates/bancodeimagens/images/agencia_noticias_logo.png",
    },
    {
      year: 2025,
      url: "https://www.bahiajornal.com.br/noticia/116886/salvador-tem-cinco-das-melhores-praias-do-brasil-segundo-ranking-internacional",
      name: "Bahia Jornal",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDi-PnqtqKC9TQp4_U7Sr6AcDTaeKVS6tRA&s",
    },
    {
      year: 2025,
      url: "https://www.blognossavoz.com.br/brasil-tem-5-das-10-melhores-praias-do-mundo-aponta-lista-internacional/",
      name: "Nossa Voz",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJYXdJLmuPmQaAdFqBbAZAupjEBtW19dyykQ&s",
    },
    {
      year: 2025,
      url: "https://www.metroworldnews.com.br/estilo-vida/2024/07/16/brasil-no-ranking-mundial-5-das-melhores-praias-estao-aqui/",
      name: "Metro World News",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLSTZmw7kLYdYkKHBTVxz4p6WWyIXOTZAIg&s",
    },
    {
      year: 2025,
      url: "https://www.terra.com.br/amp/vida-e-estilo/cinco-das-dez-melhores-praias-do-mundo-estao-no-brasil-veja-quais-sao,9cb9873ffd80380ca36cd1dd84e07f62w1ztdw09.html",
      name: "Terra",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1mk42ilG1bInM7zNnYcgfMdz9j3ZLj1waVg&s",
    },
    {
      year: 2025,
      url: "https://www.infobae.com/colombia/2024/10/28/este-es-el-paraiso-colombiano-que-esta-entre-las-mejores-playas-rurales-del-mundo/",
      name: "InfoBae",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8H5T8b_2tIy-2HgmY2UUDHi_B_zkKQpFag&s",
    },
    {
      year: 2025,
      url: "https://www.semana.com/turismo/articulo/el-paraiso-colombiano-que-se-encuentra-en-el-top-10-de-las-mejores-playas-rurales-del-mundo/202403/",
      name: "Semana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2sezQlZcqGCGhYc9clgYCRs12DHCisVz_Q&s",
    },
    {
      year: 2025,
      url: "https://caracol.com.co/2025/02/28/este-es-el-departamento-con-mas-municipios-sobre-la-costa-caribe-son-5-en-total-pero-solo-74-km/",
      name: "Caracol Radio",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/Caracol_Radio_logo.svg",
    },
    {
      year: 2025,
      url: "https://newsrondonia.com.br/noticias/2024/07/16/brasil-tem-5-das-10-melhores-praias-do-mundo-a-melhor-do-pais-fica-no-rio/",
      name: "News Rondonia",
      image:
        "https://newsrondonia.com.br/wp-content/uploads/2023/02/logo-newsrondonia-natal.webp",
    },
    {
      year: 2025,
      url: "https://www.sonoticiaboa.com.br/2024/07/16/brasil-5-das-10-melhores-praias-mundo-melhor-pais-fica-rio",
      name: "Sono Noticia Boa",
      image:
        "https://d281e75zdqqlon.cloudfront.net/wp-content/uploads/2020/04/logo-sonoticiaboa.png",
    },
    {
      year: 2025,
      url: "https://www.osul.com.br/o-brasil-tem-5-das-10-melhores-praias-do-mundo-saiba-quais-sao/",
      name: "O Sul",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUmfj1q126L0ACz3vJ3YM3uQFcaJZRqDvKQ&s",
    },
  ];

  for (const mediaData of mediaLogos) {
    await prisma.mediaCoverage.create({
      data: mediaData,
    });
  }
  console.log("Media Coverage guardada exitosamente.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

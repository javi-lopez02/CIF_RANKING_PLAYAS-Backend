import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface DescriptionData {
  name: string;
  description: string;
}

async function main() {
  const description: DescriptionData[] = [
    {
      name: "Ponta de Nossa Senhora de Guadalupe",
      description:
        "A praia de Nossa Senhora de Guadalupe é uma bela praia de areia, com cerca de 500 metros de comprimento e uma faixa de areia relativamente larga (cerca de 50 metros). Banhada pelas águas mornas da Baía de Todos os Santos (cerca de 28 graus Celsius na maior parte do ano), ela é delimitada por dois belos promontórios rochosos e cercada por remanescentes da Mata Atlântica.",
    },
    {
      name: "Ensenachos",
      description:
        "La playa Ensenachos, ubicada en el sector del Hotel Iberostar Selection Ensenachos, es una playa natural dentro del destino turístico Cayo Santa María, en Cuba.",
    },
    {
      name: "Piedra Movida",
      description:
        "La playa Piedra Movida, ubicada en el sector del Hotel Gran Muthu Cayo Santa María, es una playa natural del destino turístico Cayo Santa María, en Cuba. Tiene una extensión de 800 metros y un ancho de playa seca de 40 metros, limitada por dos farallones.",
    },
    {
      name: "Varadero (Meliá Antillas)",
      description:
        "Playa con arenas blancas y aguas transparente de color turquesa. A unos 140 metros existe una barrera coralina que propicia la contemplacion de corales por medio del buceo contemplativo. Playa apartada del poblado de Carbonera y rodeada de otros sitios de Buceo, donde la conservación natural predomina, lindando con el área protegida Laguna de Maya, refugio de fauna.",
    },
    {
      name: "Caracol",
      description:
        "La playa Caracol, ubicada en el sector del Hotel Dhawa Cayo Santa María, es una playa natural dentro del destino turístico Cayo Santa María, en Cuba.",
    },
    {
      name: "La Estrella (Hotel Playa)",
      description:
        "Playa natural de tipo lineal, ubicada en la zona central de Cayo Santa María. Tiene una extensión de 200 metros y un ancho promedio de 30 metros en la playa seca. Su arena es de origen biogénico, con un grano que varía entre medio y fino. Los parámetros físico-químicos y bacteriológicos del agua de mar cumplen con los estándares establecidos por las Normas Cubanas, clasificándola como adecuada para el baño.",
    },
    {
      name: "La Salina",
      description:
        "La playa La Salina, ubicada en el sector del Hotel The One Gallery Resort, es una playa natural dentro del destino turístico Cayo Santa María, en Cuba.",
    },
    {
      name: "Praia do Forte",
      description:
        "A praia do forte é uma praia familiar, que fica nas proximidades do museu Forte Marechal Luz, que recebe centenas de turistas. É uma praia que não possui vida noturna e que possui estruturas com acessibilidade e projeto de recuperação da vegetação nativa.",
    },
    {
      name: "La Estrella (Meliá Las Dunas)",
      description:
        "Tiene una extensión de 500 metros y un ancho de playa seca de 40 metros. De tipo lineal, se caracteriza por sus aguas cristalinas y su perfil suave, gracias a un disipador natural del oleaje situado al norte.",
    },
    {
      name: "Perla Blanca",
      description:
        "Playa natural de tipo encajada, ubicada al este de Cayo Santa María y delimitada en sus extremos este y oeste por farallones rocosos. Al norte, colinda con el Parque Nacional Los Caimanes, un área protegida marina.",
    },
    {
      name: "Varadero (Hotel Internacional)",
      description:
        "Playa espectacular en el frente del Hotel Melia Varadero que sobresale por sus arenas blancas, aguas azules y nivel de mantenimiento ambiental, con una alta demanda y aceptación turística ",
    },
    {
      name: "Los Frailes",
      description:
        "Tiene una extensión de 400 metros y un ancho medio de playa seca de 25 metros. Su arena es de origen biogénico, con un grano que varía entre medio y fino. Los parámetros físico-químicos y bacteriológicos del agua de mar cumplen con las Normas Cubanas, clasificándola como adecuada para el baño.",
    },
    {
      name: "Bahía de las  Aguilas",
      description:
        "Bahía de las Águilas, es una playa hermosa, prístina con un alto valor escénico paisajístico de alta riqueza natural. Tiene aguas cristalinas, azul turquesa. Con buena calidad de agua. Sus arenas son blancas de origen biogénico. Se encuentra ubicada en la provincia Pedernales, municipio Cabo Rojo en la región suroeste de República Dominicana. Actualmente es parte del polo turístico de Pedernales, cuenta con la ventaja de estar en el único polo turístico del país que ha sido planificado antes de su ejecución. Está ubicada en la zona de amortiguamiento de un área protegida, dispone de seguridad. Tiene un perímetro de 9 Kms y un ancho promedio de 40 metros. Además tiene un área de conservación para especies amenazadas como la tortuga marina. Es una playa disipativa. No tiene edificaciones o infraestructuras fuertes en su entorno, está dotada de zafacones y no está contaminada por residuos sólidos. Se encuentra alejada de los grandes centros urbanos. Sus vías de acceso son por tierra desde la entrada del parque aproximadamente un km en vehículo 4x4 y por mar en bote previa autorización del Ministerio de Medio Ambiente y Recursos Naturales durante 40 minutos, es una playa rural. Es una playa para relajarse y descansar. Presenta desafíos para el desarrollo de bienes, servicios.",
    },
    {
      name: "Praia do Estaleiro",
      description:
        "En su fondo geológico destacan dunas fósiles que superan los 8 metros de altura. El complejo de vegetación de costa arenosa se encuentra bien conservado.",
    },
    {
      name: "Prainha",
      description:
        "Praia de enseada com visual lindo entre as montanhas com florestas tropicais e águas azuis do mar com ondas perfeitas para o surfe, sem urbanização, dentro de unidade de conservação. Um paraíso em pela cidade do Rio de Janeiro.",
    },
    {
      name: "Praia de A Lanzada",
      description:
        'Cuenta con una zonificación de uso adecuada y ofrece servicios básicos como alimentación, accesos, actividades náuticas y seguridad. Además, posee la certificación "Playa Ambiental", que garantiza su calidad y conservación ecológica.',
    },
    {
      name: "Punta Perdices",
      description:
        "Clima cálido con temperatura agradable del agua. Color del agua transparente y turquesa. Presencia de ecosistema nativo como banco de conchillas, especies vegetales y animales que pueden observarse a simple vista. Forma parte de la Bahía de San Antonio, siendo área protegida. El paisaje es dinámico, con marea alta el agua está cerca sin oleaje y tranquilo. Con marea baja se observan las marismas y canales de marea. Sin servicios básicos, hay un solo parador de gestión local y sus construcciones acordes al ambiente. Se puede pasar el día solamente. Hay un estacionamiento para ordenar el acceso donde existen sanitarios.",
    },
    {
      name: "Fazenda Roberto Marinho",
      description:
        "A Praia da Fazenda Roberto Marinho está localizada em São Pedro da Aldeia, no estado do Rio de Janeiro, Brasil. Esta praia é conhecida por suas águas cristalinas de tons esverdeados e ambiente tranquilo, tornando-se um destino popular para os amantes da natureza e do ecoturismo. Para chegar à praia, é necessário acessar a Praia do Sudoeste, situada a aproximadamente 5 km do centro da cidade, no endereço: Estrada do Boqueirão, nº 4.748, bairro Baleia, São Pedro da Aldeia – RJ. A partir daí, os visitantes seguem por uma trilha costeira bem sinalizada, conhecida como Trilha dos Cardeiros, que passa pela lateral do muro da propriedade da fazenda. É importante notar que o acesso é permitido apenas para pedestres; veículos motorizados não são autorizados. Durante o percurso, os visitantes podem apreciar belas paisagens, mirantes naturais e áreas ideais para descanso. ",
    },
    {
      name: "Ponta da Farinha",
      description:
        "As praias da Ponta da Farinha são um refúgio tranquilo e encantador, perfeito para quem deseja fugir do agito das praias oceânicas e desfrutar de um ambiente natural e relaxante.A Ponta da Farinha é um local pitoresco localizado em Iguaba Grande, no estado do Rio de Janeiro, próximo à Lagoa de Araruama. Conhecida por sua beleza natural e tranquilidade, a Ponta da Farinha oferece uma vista deslumbrante da lagoa e é um ponto popular para pescadores e moradores locais. A região é cercada por manguezais e vegetação típica da restinga, proporcionando um ambiente sereno e ideal para quem busca contato com a natureza. Além disso, é um ótimo local para observar o pôr do sol e apreciar a paisagem característica da Região dos Lagos.",
    },
    {
      name: "Jurerê Internacional",
      description:
        "Jurerê Internacional é um bairro localizado na região norte da Ilha da Ilha de Santa Catarina. Destaca-se pela urbanização consolidada e excelente infraestrutura planejada, destacando-se pela praia, a qual recentemente foi engordada, mas conservando parte da vegetação de restinga ao longo de toda a praia. Rica em belezas naturais, vida cultural, diversas opções de lazer, sendo um dos destinos turísticos mais conhecidos e desejados do Brasil. A região conta com águas calmas, mornas e muito limpas, sendo vizinha dos bairros da praia do Forte e Jurerê Tradicional.",
    },
    {
      name: "Los Angeles",
      description:
        "Playa Los Ángeles se localiza en el departamento del Magdalena, en la zona rural de la ciudad de Santa Marta, específicamente en el kilómetro 33.2 de la vía Santa Marta - Riohacha. En esta área de 200 metros de playa, se encuentran alojamientos tipo cabañas y glamping. Mayor información en https://www.playalosangeles.com ",
    },
    {
      name: "Macao",
      description:
        "Ubicada en Verón-Punta Cana, Playa Macao se extiende por 2.7 km de costa, con arenas blancas y aguas dinámicas que forman un perfil cambiante según el oleaje. Sus olas, de entre 1 y 2 metros, la convierten en un destino ideal para el surf y la contemplación del paisaje. La playa está rodeada de manglares y palmeras, mientras que su arena, compuesta en un 98 % por sedimentos calcáreos, refleja la riqueza geológica de la región. Su equilibrio natural, influenciado por el río Anamuya y el clima tropical, la convierte en un refugio de biodiversidad costera.",
    },
    {
      name: "Playa Blanca",
      description:
        'Ubicada en el corazón del Parque Nacional Natural Utría, Playa Blanca es un santuario de biodiversidad donde la selva tropical se encuentra con el océano Pacífico. Sus arenas blancas contrastan con el verde intenso de la vegetación y las aguas cristalinas, creando un paisaje de ensueño. Este destino es ideal para quienes buscan una experiencia auténtica en contacto con la naturaleza, con oportunidades para el avistamiento de ballenas, snorkeling y senderismo ecológico. Su acceso restringido garantiza su conservación, convirtiéndola en un refugio de tranquilidad y belleza inigualable. ¡Un verdadero tesoro escondido del Pacífico colombiano!"',
    },
    {
      name: "El Cristo",
      description:
        "Playa El Cristo es una playa en guirnaldas, tiene una longitud de 220 metros y unos 15 metros de ancho constituida por tres caletas, dos de ellas separadas por un promontorio rocoso en dirección Sur. La primera caleta (Norte) tiene una extensión de 50 metros y entre ellos hay rocas de gran tamaño que alternan con las zonas de arena. Está constituida por arenas organógenas de granulometría fina y media y color amarillo. El agua de baño es de color azul y cristalina. Naturalmente tiene un alto grado de conservación, con diferentes visuales del paisaje que le confieren un gran atractivo.",
    },
    {
      name: "Domínicus",
      description:
        "Playa Dominicus, situada a unos 6 kilómetros al sur de Bayahíbe, es un paraíso caribeño reconocido por sus arenas blancas ligeramente más gruesas y aguas cálidas y transparentes. Rodeada de exuberante vegetación, esta playa alberga la mayoría de los complejos hoteleros todo incluido de la zona, ofreciendo una experiencia de relajación y confort en un entorno natural impresionante. Su proximidad al Parque Nacional del Este y a la Isla Saona la convierte en un punto de partida ideal para explorar la riqueza natural y cultural de la República Dominicana.",
    },
    {
      name: "El Doradillo",
      description:
        "Esta playa de arena fina se encuentra en el Área Natural Protegida El Doradillo, a unos 13 Km de Puerto Madryn, en las costas del golfo Nuevo. Es ideal para la contemplación de la naturaleza, entre aguas cristalinas de color azul intenso y el paisaje estepario. Entre junio y noviembre es posible avistar ballenas desde la costa, cuando llegan para reproducirse y amamantar a sus crías. En verano, se puede disfrutar de un entorno natural con mínimos servicios, por lo cual es importante respetar las recomendaciones que los guardaparques sugiere a quienes visitan esta playa. ",
    },
    {
      name: "Las Canteras",
      description:
        "Situada en el Área Natural Protegida El Doradillo, se trata de una playa de grava de donde, en el pasado, se extraían áridos. Presenta cordones litorales elevados, propicios para el avistaje de ballenas desde la costa, de mayo a noviembre. Particularmente, suelen concentrarse hembras con cría. Se recomienda visitar esta playa cuando la marea está alta. En un entorno costero agreste, con mínimos servicios, podrá vivir un encuentro íntimo con la majestuosa ballena Franca Austral. La playa cuenta con miradores, rampas y pasarelas accesibles. Hay presencia de guardaparques que brindan información y recomendaciones a los visitantes.",
    },
    {
      name: "Mar Chiquita",
      description:
        "Esta playa está ubicada en la desembocadura al mar de la Laguna costera Mar Chiquita, la única albufera de Argentina y una de las cinco en todo el mundo en su tipo. Es un sitio con una belleza paisajística muy particular y muy valorada por la tranquilidad del lugar. Es muy elegida por los bañistas por la particularidad de ser agua salobre, predominantemente marina, pero sin olas. Es un sitio ideal para las familias. Se encuentra en el poblado homónimo a la laguna, que a la vez se ubica a 36 km de una de las ciudades costeras más grandes de la provincia de Buenos Aires, Mar del Plata, lo que hace que la afluencia de turistas también desde esta ciudad, que recibe cientos de miles de turistas en la temporada estival, sea bastante alta.",
    },
    {
      name: "Praia de Nerga",
      description:
        "Extenso arenal que ocupa la parte occidental y de mar abierto del tómbolo que une la península de O Grove al continente. Se encuentra en un espacio natural protegido integrado en la Red Natura 2000. El buen estado de conservación del entorno, las vistas hacia el archipiélago de Ons y el mar abierto y su amplitud, junto a un entorno con importantes valores arqueológicos e histórico artísticos constituyen su principal atractivo. Las sendas peatonales junto a la playa y sus áreas próximas facilitan el disfrute en cualquier época del año.",
    },
    {
      name: "Carhuaz",
      description:
        '"La Playa Carhuaz se ubica al interior de la Reserva Nacional de Paracas, en la provincia de Pisco (Ica-Perú), a 57 kilómetros al Oeste de la cuidad de Ica.\r\nPlaya amplia de arena, aguas frías de color azul con ligero oleaje, donde además podrás apreciar la isla Independencia (Isla La Vieja), la diversidad de fauna (aves, delfines, lobo marino y otros).\r\nPara acceder a la playa, previamente en el Km. 38 se realiza un pago por derecho de ingreso al ANP, donde además te comprometes a cumplir con las normas de conducta que ayudarán a minimizar el impacto al medio ambiente, entre ellos, no ingresar bebidas alcohólicas, prohibido el ingreso con mascotas, con plásticos de un solo uso, retirar los residuos que generes en tu visita."',
    },
    {
      name: "Itauna",
      description:
        "Além de ser conhecida por suas belezas naturais, suas águas claras e areia fina, a Praia de Itaúna é palco de importantes competições esportivas, principalmente por ser a Capital Nacional do Surfe, pelas ondas perfeitas e por ser a Casa do Voleibol no Brasil, por receber importantes competições em suas areias tão receptivas. A cerca de 2,5 km do centro de Saquarema/RJ, seu acesso pode ser de carro, bicicleta ou ônibus. A praia oferece banho assistido para pessoas com deficiência, a depender das condições do mar, assim como, possui estruturas de quiosques, com banheiros com acessibilidade, duchas, estacionamento e bicicletários. No entorno, há restaurantes, bares, lojas de souvenirs, sorveterias, padarias, mercadinhos e pousadas. Próximo ao bairro de Itaúna é possível ter acesso ao posto policial, postos de saúde e hospital, a menos de 10 minutos do local.",
    },
    {
      name: "Praia da Lagoinha do Leste",
      description:
        'A Praia da Lagoinha do Leste, no extremo sudeste da Ilha de Santa Catarina, é uma das mais preservadas e selvagens de Florianópolis. Seu limite norte é marcado por um costão rochoso que a separa da Praia do Matadeiro, enquanto ao sul, outro costão imponente, próximo ao Morro da Coroa, define seu fim. A praia possui areia grossa, águas cristalinas e agitadas, sendo um destino desafiador para surfistas e aventureiros. O acesso é feito por trilhas de dificuldade variável ou por barco. Inserida em uma área de preservação, abriga a Lagoinha de água doce, um ecossistema frágil e protegido.\r\n\r\nSegundo a classificação antropogênica, Lagoinha do Leste é considerada uma praia remota, caracterizada por uma baixa interferência humana na ocupação fixa. No entanto, durante o verão, há flutuação sazonal na infraestrutura, com a presença de bares temporários e serviços de navegação, facilitando o acesso e oferecendo suporte básico aos visitantes. Seu entorno é coberto por uma exuberante Mata Atlântica, proporcionando um cenário natural impressionante e reforçando seu caráter de isolamento e preservação."',
    },
    {
      name: "Arena Gorda",
      description:
        "Playa Arena Gorda es una extensa y paradisíaca franja de arena blanca y suave, bañada por las cristalinas aguas turquesas del mar Caribe. Ubicada en la zona turística de Bávaro, en la provincia La Altagracia, es conocida por su oleaje moderado y su ambiente relajante, ideal para el descanso y actividades acuáticas. Rodeada de hoteles y resorts de lujo, es un destino popular tanto para turistas como para locales que buscan disfrutar de un entorno natural espectacular. Su belleza escénica y su fácil acceso la convierten en una de las playas más atractivas de la región.",
    },
    {
      name: "Balneario San Cayetano",
      description:
        "Segundo a classificação antropogênica, Lagoinha do Leste é considerada uma praia remota, caracterizada por uma baixa interferência humana na ocupação fixa. No entanto, durante o verão, há flutuação sazonal na infraestrutura, com a presença de bares temporários e serviços de navegação, facilitando o acesso e oferecendo suporte básico aos visitantes. Seu entorno é coberto por uma exuberante Mata Atlântica, proporcionando um cenário natural impressionante e reforçando seu caráter de isolamento e preservação.",
    },
    {
      name: "Cariló",
      description:
        "Es una playa de mar abierto, arenosa, amplia con médanos vegetados. Tiene muy buena infraestructura y servicios. Es tranquila ideal para vacacionar en familia.",
    },
    {
      name: "Centinela del Mar",
      description:
        "Es una playa natural arenosa solitaria en un paisaje agreste muy poco alterado por el hombre. Es una zona protegida de interés biologico.",
    },
    {
      name: "Pontal do Peró",
      description:
        "A Praia do Pontal do Peró fica no extremo esquerdo da Praia do Peró, próxima a um costão rochoso.\r\nÉ um local com grande beleza natural, ideal para ecoturismo, com trilhas que permitem observar a fauna e a flora local.\r\nÉ possível praticar cicloturismo, mergulho e kitesurfe na região.\r\nA praia é conhecida por suas águas limpas e ondas constantes, atraindo também pescadores.",
    },
    {
      name: "Praia Azedinha",
      description:
        "A praia Azedinha é uma praia de pequena faixa de areia localizada em uma área de proteção ambiental municipal criada com o fim de proteger a própria praia (e a vizinha praia Azeda), portanto é uma praia de natureza muito bem preservada e presente. Por isso também tem um acesso somente a pé, mas é um caminho curto. A praia possui infraestrutura de barracas e do órgão fiscalizador. Possui águas cristalinas de cor verde esmeralda a azul turquesa e praticamente não possui ondas.",
    },
    {
      name: "El Descanso",
      description:
        "Playa paradisíaca, rodeada de naturaleza en un alto porciento, con aguas cristalinas, arenas color crema. Ubicada en la porción nororiental de la bahía de Cochino y enclavada en el área protegida Refugio de Fauna de la Ciénaga de Zapata.",
    },
    {
      name: "Varadero (Calle 52)",
      description:
        "Playa emblemática de alto uso turístico y recreativo enclavada en el poblado y destino Varadero, en su parte más urbanizada, con acciones de restauración que le mantienen su aspecto natural.",
    },
    {
      name: "Valeria del Mar",
      description:
        "Es una playa muy ancha de arena fina dorada, de mar abierto. Hay dunas altas muy vegetadas que no dejan ver la linea edificada urbana. Es ideal para el descanso y actividades recreativas. Predominan los sectores publicos y hay unos pocos balnearios de gestion privada muy bien provistos.",
    },
    {
      name: "Turipana",
      description:
        "La playa Turipana se encuentra en la zona costera del municipio de Tubará, en cuya área de se encuentra el centro recreacional Turipana dotado de zonas de restaurantes, alojamiento y recreación, cuyo administrador es Comfamiliar - Atlántico. Mayor información en https://www.comfamiliar.com.co/",
    },
    {
      name: "Guardalavaca (Gran Muthu Almirante)",
      description:
        "Guardalavaca es una playa situada en la costa atlántica de la provincia de Holguín, en el oriente de Cuba. Existen versiones del origen de su nombre, la más acertada es el grito de los habitantes como aviso con la llegada de barcos piratas.Su principal atractivo son sus grandes playas de arena blanca y fina, bañadas por aguas tranquilas, cálidas y llenas de vida.",
    },
    {
      name: "Punta Astillero",
      description:
        "La playa de Punta Astillero es el área de playa del municipio de Piojó (Atlántico) con limites con el municipio de Santa Catalina (Bolívar) en Colombia. Es una playa para la práctica de deportes náuticos y dependiendo del oleaje, se puede bañar en el mar. Para llegar a esta playa preferiblemente en carro propio, pues el transporte urbano es escaso y es distante la playa de la vía departamental donde deja el bus municipal o departamental. ",
    },
    {
      name: "Esmeralda  (Complejo Lunas)",
      description:
        "La playa con excelentes condiciones en su área de sol y baño, tiene una longitud de 560m y un ancho promedio de 85m, sus arenas son de color amarrillo crema y el grano de diámetro medio, la pendiente hacia el mar es moderada. El oleaje que baña la cara de playa es suave de manera habitual. El agua de la zona de baño es cristalina de color azul turquesa. Existen diferentes visuales del paisaje con la presencia de una costa acantilada en su parte posterior y extremo Oeste, así como la presencia de un Estero semicerrado en la zona oriental.",
    },
    {
      name: "Faro Maya",
      description:
        "Playa con arenas blancas y aguas transparente de color turquesa. A unos 140 metros existe una barrera coralina que propicia la contemplacion de corales por medio del buceo contemplativo. Playa apartada del poblado de Carbonera y rodeada de otros sitios de Buceo, donde la conservación natural predomina, lindando con el área protegida Laguna de Maya, refugio de fauna.",
    },
    {
      name: "Guardalava (Complejo hotelero Brisas)",
      description:
        "Playa creada artificialmente en el año 1994, presenta una longitud de 430m y un ancho promedio de su área emergida de 35m, apoyada en dos espigones, sus arenas son de color amarillo crema y granulometría media, las aguas en su zona de baño son de color azul turquesa que varía por la diversidad de fondos, arenosos, rocosos y pastos marinos. Posee un paseo marítimo que se vincula con las diferentes visuales del paisaje. La zona de baño tiene una pendiente suave <3° y el oleaje habitual es de baja energía por la presencia de un arrecife costero en la parte frontal de la playa.",
    },
    {
      name: "Puerto Pirámides",
      description:
        "Esta playa se encuentra en Puerto Pirámides, donde residen unos 600.000 habitantes aproximadamente. Es el único poblado en el Área Protegida Península Valdés, sitio Patrimonio de la Humanidad. La playa está enmarcada por médanos y tamariscos, bordeada de acantilados, lo que ofrece variedad de miradores naturales y puntos panorámicos. Sus aguas, transparentes y cristalinas son ideales para el baño, paseos náuticos y avistajes de fauna marina en embarcaciones: ballenas, de junio a diciembre; y lobos marinos, durante el verano. Cuenta con servicios de alojamiento y gastronomía que completan la oportunidad de vivir una experiencia en contacto con la naturaleza.",
    },
    {
      name: "Praia da Guarita",
      description:
        "A Praia da Guarita, localizada no município de Torres, litoral norte do Rio Grande do Sul e inserida no Parque Estadual José Lutzenberger, é bastante procurada por turistas que apreciam a natureza. Localizada há cerca de 2km do centro da cidade, a Praia da Guarita é cercada por rochas basálticas e areníticas que datam de milhões de anos, quando da separação da Pangea. Esse contexto geológico a conferiu o status de geossítio do Geoparque Caminhos dos Cânions do Sul, reconhecido pela UNESCO, atraindo visitantes e pesquisadores que se interessam pela história do nosso planeta. Para aqueles mais aventureiros, existe uma série de trilhas e uma escadaria que os usuários podem utilizar e que os levam para o alto das formações rochosas, oferecendo vistas de tirar o fôlego! Suas águas mais claras e a presença de costões rochosos e sua forma em bolso torna essa praia única em todo o litoral gaúcho. Durante alguns meses do ano, é possível avistar baleias-francas nas proximidades da praia e a presença de praticantes de balonismo, asa-delta e parapente é bastante comum nos céus dessa praia e dos seus arredores. Vale a pena conhecer!",
    },
    {
      name: "Praia das Conchas",
      description:
        "A Praia das Conchas é uma praia de enseada localizada no bairro do Peró em Cabo Frio. É uma praia com 4 quiosques, um pouco distante da área urbana da cidade, então é uma praia envolta pela natureza, com dunas em volta e bastante vegetação natural e de restinga. A praia possui duas pontas com costões rochosos que formam piscinas naturais. A praia é de ondas fracas e a água é cristalina de cor verde esmeralda a azul turquesa. É ótima para crianças. Possui areia repleta de conchas nas duas pontas da praia. ",
    },
    {
      name: "Praia do Vao",
      description:
        "Playa situada en la parte media de la ría de Vigo, la más meridional de las Rías Baixas. Es un arenal situado frente al Atlántico. La playa se orienta hacia el NW, pero con buenas vistas hacia las islas Cíes y la pequeña isla de Toralla y hacia el sector más occidental de la península de O Morrazo. Tras múltiples intervenciones urbanísticas, se ha desarrollado una importante recuperación del área. En sus proximidades se han encontrado y musealizado restos de una una villa romana. Una senda litoral incorpora la playa.",
    },
    {
      name: "Playa Raspon",
      description:
        "La Playa Raspón se encuentra dentro de la Reserva Nacional de Paracas, en la provincia de Pisco (Ica-Perú). El nombre Raspón se debe a su acceso, ya que hasta hace un tiempo llegar a la playa era una aventura algo riesgosa; pues los visitantes debían descender por una cuesta rocosa empinada, de ahí su nombre, puesto que quienes caían en el intento terminaban con algunos raspones, en la actualidad cuenta con un acceso a base de escaleras (100 peldaños aproximadamente).",
    },
    {
      name: "Costa Esmeralda",
      description:
        "Playa de arena, con ligeros o nulo oleaje, aguas frías de color azul; donde además de apreciar la belleza paisajística podrás apreciar la diversidad de fauna (aves) a sus alrededores.",
    },
    {
      name: "Hijos del Mar",
      description:
        "Es una playa arenosa en una bahía rodeada de acantilados y restinga ubicada en un paisaje agreste. Hay oferta gastronómica y recreativa. Es ideal para rencontrarse con la Naturaleza.",
    },
    {
      name: "Mendoza",
      description:
        "Playa Mendoza esta ubicada en el municipio de Tubara en la urbanización que lleva este mismo nombre. Para ingresar se paga una cuota de $20.000 mil pesos colombianos que es administrada por la Corporación Cívica de Playa Mendoza. En esta área de playa hay restaurante, carpas y cabañas.",
    },
    {
      name: "Varadero (calle 55)",
      description:
        "Calle 55, situada en el Sector Varadero Histórico, es un verdadero tesoro caribeño que invita a perderse entre su belleza natural. Las aguas transparentes y cristalinas de azul turquesa abrazan suavemente las arenas finas de color crema, creando un paraíso para quienes buscan relax. Este enclave está rodeado de pura naturaleza, con vegetación de un verde intenso que complementa el paisaje, ofreciendo un respiro fresco y vibrante. Además, cuenta con servicios turísticos que proporcionan áreas de sombra ideales para disfrutar de un momento de tranquilidad. Calle 55 es un refugio perfecto donde el mar y la naturaleza se encuentran en perfecta armonía",
    },
    {
      name: "Praia de Ladeira",
      description:
        "Playa situada en la ría de Baiona, que constituye, a su vez, un sector externo de la ría de Vigo, la más meridional de las Rías Baixas. Conforma una barrera arenosa que separa del mar a una extensa marisma que se desarrolla en la desembocadura del río Miñor. Sobre la barra arenosa se ha construido un camping, cuyos muros defensivos modifican la dinámica litoral. La playa se orienta hacia el NW, con buenas vistas hacia la cercana península de Monte Real, islas Estelas y península de Monteferro. En el sector más occidental de la playa se ha desarrollado un sector urbanizado donde se han establecido algunos servicios y preparado un paseo que permite su disfrute en cualquier época del año.",
    },
    {
      name: "Praia dos Naufragados",
      description:
        "No extremo sul da ilha, Naufragados é uma praia isolada acessível apenas por trilha ou barco. Rodeada por Mata Atlântica, possui areia mesclada entre tons claros e escuros, criando um efeito visual único. O mar agitado atrai surfistas, enquanto as ruínas históricas, incluindo antigos canhões e estruturas defensivas, contam a história da proteção da ilha. Naufragados também abriga uma das comunidades de pescadores mais antigas da região, além de um farol e pequenas cachoeiras, tornando-se um destino perfeito para aventureiros e amantes da natureza.",
    },
    {
      name: "Segunda Ensenada",
      description:
        'Las playas Blue Flag de la Segunda Ensenada en Coveñas, Sucre, se extienden por 500 metros de fina y hermosa arena. Algunas uvitas de playa han sido objeto de conservación por propios y visitantes, destacándose por su gran valor ecológico en la protección del ecosistema costero. Sus calmas aguas y ambiente sereno la convierten en un destino ideal para el descanso.  Esta espectacular playa ostenta el reconocimiento Bandera Azul, garantizando calidad del agua, seguridad con guardavidas, una zona segura con presencia eventual de policía y cámaras de vigilancia, además de servicios e instalaciones óptimos. También se distingue por su compromiso con la educación y gestión ambiental.\r\n\r\nUn verdadero paraíso costero que invita a desconectarse y disfrutar de la naturaleza en su máxima expresión."',
    },
    {
      name: "El Peñón",
      description:
        "Playa El Peñón debe su nombre la existencia de un gran peñón hacia el extremo Sur de la playa, presenta una longitud de 120 metros y unos 15m de ancho, constituida por arenas organógenas de granulometría fina y media y color amarillo conformada de los restos de moluscos y corales que aparecen en la pared acantilada. Naturalmente tiene un muy alto grado de conservación, el acantilado que la precede >15m de altura le confiere un hermoso atractivo visual al paisaje, en la cima del mismo hay vegetación muy variada del bosque siempreverde micrófilo y palmeras autóctonas (Coccothrinax litoralis, Thrinax radiata y Copernicia yarey.",
    },
    {
      name: "Praia América",
      description:
        "Playa situada en la ría de Baiona, que constituye, a su vez, un sector externo de la ría de Vigo, la más meridional de las Rías Baixas. Es un extenso arenal situado frente al Atlántico. En su extremo norte desemboca el río Muíños que la separa de la playa de Panxón. La playa se orienta hacia el W, con buenas vistas hacia la cercana península de Monte Real, islas Estelas y península de Monteferro. En las proximidades de la playa se ha desarrollado un área urbanizada mayormente con viviendas unifamiliares y algunos bloques de viviendas, donde se han establecido algunos servicios. Diversas intervenciones han recuperado parte de la configuración original de la playa y configurado un paseo que permite su disfrute en cualquier época del año.",
    },
    {
      name: "Garza Blanca",
      description:
        "La playa Garza Blanca, ubicada en la costa del Pacífico en Puerto Vallarta, México, es un verdadero paraíso tropical. Su arena suave y blanca se extiende a lo largo de aguas cristalinas y turquesas, ideales para nadar y practicar deportes acuáticos. Rodeada de exuberante vegetación y montañas, la playa ofrece un ambiente tranquilo y pintoresco, perfecto para relajarse y disfrutar de la naturaleza. La zona es popular entre los turistas y locales, que pueden degustar delicias gastronómicas en los restaurantes cercanos. Garza Blanca es un destino ideal para quienes buscan escapar del bullicio y sumergirse en un paisaje idílico.",
    },
    {
      name: "Praia do Moçambique",
      description:
        "Sendo a maior praia de Florianópolis, com cerca de 8,5 km de extensão, a Praia do Moçambique está situada dentro do Parque Estadual do Rio Vermelho. Seu mar aberto e de ondas fortes a torna um local ideal para surfistas e pescadores. A ausência de infraestrutura turística preserva sua beleza natural, oferecendo um refúgio para aqueles que buscam contato direto com a natureza. Sua areia dourada e a vegetação de restinga criam um cenário selvagem e paradisíaco.",
    },
    {
      name: "Playa Blanca",
      description:
        "Uno de los principales balnearios urbanos de Santa Marta, reconocido por su fácil acceso y constante afluencia de turistas. Su arena compactada y aguas tranquilas favorecen el disfrute familiar, mientras que su conexión con Playa Blanca a través de lanchas lo convierte en un punto de partida frecuente para recorridos costeros. Frente a la playa, un islote agrega valor escénico al paisaje. La zona está delimitada por un extenso malecón turístico, que facilita la integración con hoteles, restaurantes y comercios, consolidando a El Rodadero como un espacio clave dentro de la oferta turística de la ciudad.",
    },
    {
      name: "Puerto Mocho",
      description:
        "Puerto Mocho está ubicado en zona urbana de Barranquilla, en la localidad Riomar, en el barrio Las Flores. Con acceso por la calle 106, entrada del barrio, en dirección al tajamar occidental del río Magdalena.\r\nCon 16 cocinas, puntos de venta, comercios menores, casetas, baños, comedores, y toda la infraestructura adecuada para la atención y servicios, Puerto Mocho ofrecerá una amplia oferta gastronómica local expuesta al público en una carta única.",
    },
    {
      name: "Playa Larga",
      description:
        "Playa con aguas cristalinas, arenas finas y pendientes suaves. Ubicada en la bahía de Cochino en su porción noroeste, dónde predominan las bajas profundidades para desarrollar actividades recreativas. Está playa se encuentra dentro del área protegida de connotacion nacional Recursos Manejados. En su extremo noreste se encuentra ubicada la villa Playa Larga, brindando todos los servicios que ofrece una instalación turística.",
    },
    {
      name: "Praia de Cabo",
      description:
        "Se trata de una playa situada en la ensenada de San Simón en el interior de la ría de Vigo, la más meridional de las Rías Baixas. Junto con la contigua playa de Cesantes conforman un arenal en forma de punta de lanza. Compuesta por arenas y algunas gravas, la playa se orienta hacia el NNW, con vistas hacia el municipio de Vilaboa y el sector más septentrional de la ensenada, caracterizada por sus marismas y extensos arenales en marea baja. Junto a la playa se han establecido algunos servicios y preparado un paseo que permite su disfrute en cualquier época del año.",
    },
    {
      name: "Ostende",
      description:
        "Es una playa arenosa amplia de mar abierto, ideal para actividades recreativas y deportivas. La arena es fina, dorada, hay algunos balnearios que ofrecen sombra y gastronomía. ",
    },
    {
      name: "Praia da Reserva",
      description:
        "A Praia da Reserva está localizada na cidade do Rio de Janeiro - RJ, próximo a região da Barra da Tijuca. É uma área de proteção ambiental com vegetação de restinga, sendo uma boa opção para quem gosta de pescar. É uma praia linear com areia branca e fofa, por isso, é frequentemente usada para atividades de lazer como banho de mar, passeios e pratica de esportes. Entretanto, não há salva vidas e, portanto, deve-se tomar cuidado para o banho de mar, uma vez que as ondas são violentas.",
    },
    {
      name: "Praia de A Punta",
      description:
        "Se trata de una playa acogedora de arena fina, aguas tranquilas y encajada entre rocas. Aunque en marea alta disminuye su tamaño, en marea baja se puede disfutar de un arenal desde el cual contemplar la parte interna de la ría de Vigo. El acceso es peatonal desde el paseo marítimo que bordea el litoral,  a través de rampas de acceso con barandillas. \r\nA nivel de servicios, dispone de duchas, fuentes, servicio de salvamento y socorrismo, plazas de aparcamiento y un quiosco en temporada alta (de julio a septiembre).",
    },
    {
      name: "Praia de Cesantes",
      description:
        "Se trata de una playa situada en la ensenada de San Simón en el interior de la ría de Vigo, la más meridional de las Rías Baixas. Junto con la contigua playa de Cabo conforman un arenal en forma de punta de lanza. Compuesta por arenas y algunas gravas, la playa se orienta hacia el SW, con vistas hacia las cercanas islas de San Simón, donde está emplazado el antiguo lazareto, y hacia el estrecho y puente de Rande. Junto a la playa se han establecido algunos servicios y preparado un paseo que permite su disfrute en cualquier época del año.",
    },
    {
      name: "Anclote",
      description:
        "Playa El Anclote, ubicada en Punta de Mita, Nayarit, es un paraíso costero ideal para quienes buscan tranquilidad y belleza natural. Su suave oleaje y aguas cristalinas la convierten en un destino perfecto para nadar, practicar paddleboard o simplemente relajarse frente al mar. Rodeada de palmeras y con una vista espectacular a las Islas Marietas, esta playa ofrece atardeceres inolvidables y una atmósfera acogedora. Además, cuenta con una encantadora franja de restaurantes frente al mar que permiten disfrutar de la gastronomía local con los pies en la arena. Playa El Anclote es el rincón ideal para escapar y reconectar.",
    },
    {
      name: "Costa del Este",
      description:
        "Es una playa arenosa amplia en una pequeña villa forestada con pinos ideal para caminatas y paseo en bicicletas.",
    },
    {
      name: "El Edén",
      description:
        "Ubicada en el Caribe colombiano, Playa El Edén (9°24’17.89”N, 75°40’6.85”O) es un referente de gestión costera sostenible, certificada con el galardón Blue Flag. Su sistema de boyado garantiza la seguridad de los bañistas al delimitar áreas de recreación y restringir el acceso de motonaves. Con aguas poco profundas y una planificación orientada a la conservación, es ideal para familias que buscan un entorno ordenado y seguro. Su compromiso con la educación ambiental y la calidad del agua refuerza su valor como destino turístico responsable, donde la armonía entre naturaleza y recreación es prioridad.",
    },
    {
      name: "Praia do Fortiñón",
      description:
        "Se trata de una playa situada en la ensenada de San Simón en el interior de la ría de Vigo, la más meridional de las Rías Baixas. Junto con la contigua playa de Cabo conforman un arenal en forma de punta de lanza. Compuesta por arenas y algunas gravas, la playa se orienta hacia el SW, con vistas hacia las cercanas islas de San Simón, donde está emplazado el antiguo lazareto, y hacia el estrecho y puente de Rande. Junto a la playa se han establecido algunos servicios y preparado un paseo que permite su disfrute en cualquier época del año.",
    },
    {
      name: "Amapas-Conchas Chinas",
      description:
        "La Playa Amapas-Conchas Chinas se caracteriza por sus aguas color verde esmeralda y la presencia de rocas entre la arena y sumergidas. La playa posee un color de arena ámbar.\r\nLa Playa Amapas-Conchas Chinas se caracteriza por ser una serie de pequeñas playas a través de las cuales puedes disfrutar de una caminata.\r\nEs una excelente playa para disfrutar de un atardecer, relajarte o decidir hacer una sesión de fotografías.",
    },
    {
      name: "Frontón",
      description: "Descripción No Disponible",
    },
    {
      name: "Aguas Verdes",
      description:
        "Playa ancha de arena fina dorada en pequeña villa turística y balnearia, espacio agreste que invita a caminatas y al goce de la Naturaleza.",
    },
    {
      name: "Pinamar",
      description:
        "Es una playa urbana de mar abierto, amplia con arena fina dorada y dunas bajas con escasa vegetación. A lo largo de esta playa se encuentran balnearios públicos de acceso libre y otros de gestión privada con muy buen infraestructura. Ubicada en Pinamar, ciudad jardín edificada sobre dunas fijadas hoy cubiertas de pinares, es un destino recreativo y turístico favorito.",
    },
    {
      name: "Puerto Madryn",
      description:
        "La ciudad de Puerto Madryn se ubica en las costas del golfo Nuevo, en la Patagonia argentina, donde es posible combinar descanso y aventura. En un área de 3 kilómetros de playas de arena con gran amplitud de marea y aguas calmas que se extiende desde el centro y hacia el sur, cuenta con balnearios que ofrecen servicios de playa durante el verano y variada oferta gastronómica todo el año. Las playas de Puerto Madryn invitan a disfrutar de caminatas, deportes náuticos, deportes de playa, actividades subacuáticas y observación de fauna marina. Está rodeada de Áreas Protegidas destacadas por su biodiversidad.",
    },
    {
      name: "Hotel Pradomar",
      description:
        "El Hotel Pradomar, una playa urbana con vocación turística que hace parte de la identidad y  \r\n cultura costeña, tenemos el privilegio de estar ubicados en la primera linea de la playa en \r\nPuerto Colombia, Atlántico en la vía al mar a solo 20 minutos de Barranquilla en un ambiente de brisa, arena, mar y tranquilidad.",
    },
    {
      name: "Sabanilla",
      description:
        "La playa de Sabanilla se localiza en el municipio de Puerto Colombia entre el espolón 1 y 2. Tiene un frente lineal de playa de 300 metros, la cual fue seleccionada por la Gobernación del Atlántico para implementar un plan de ordenamiento de playas. Cuenta con modernas instalaciones para la prestación del servicio gastronómico, zona de recreación con canchas de voleibol playa, fútbol playa, baños, zona de parqueaderos, zona peatonal y de atención de primeros auxilios. La gastronomía que ofrece este destino es costeña tradicional elaborada por personas del lugar.",
    },
    {
      name: "Praia de Patos",
      description:
        "La playa de Patos, de 1km de longitud y arena fina, es uno de los puntos más destacados de la provincia de Pontevedra para la práctica de deportes náuticos relacionados con viento y oleaje. Esto hace que se puedan encontrar empresas de alquiler de equipos y contratación de clases en los alrededores del arenal. La playa dispone de un paseo marítimo y gran variedad de servicios, entre ellos, cafeterías, restaurantes, duchas y aseos públcos. Además, hay una amplia zona de aparcamiento junto a la carretera, favoreciendo que la principal vía de acceso sea con vehículo propio. Si se reside en el núcleo del municipio de Nigrán, se puede acceder peatonalmente.",
    },
    {
      name: "Las Lajas",
      description:
        "Ocupando el extremo más occidental de la Isla de Margarita, Playa Las Lajas atesora, para sus venturosos visitantes, 1.000 metros de fina arena, acariciadas por el viento, bañadas por aguas turquesas y arropadas bajo el manto de los más prístinos atardeceres. Su acceso dificultoso es recompensando con el disfrute de un paisaje poco intervenido, el cual brinda una inigualable paz, aderezada con el rumor de las olas y el murmullo de las aves. Este entorno agreste y natural, apenas cuenta con dos establecimientos comerciales, cuyos propietarios ofrecen amablemente los servicios de sombrillas, toldos, baños, gastronomía local y bebidas.",
    },
    {
      name: "El Morrillo",
      description:
        "Playa en el borde de la Ciudad de Matanzas, que conserva valores naturales aunque con modificaciones humanas. Tiene valor patrimonial por la presencia de una fortaleza colonial ",
    },
    {
      name: "Máquina",
      description:
        "Playa con aguas cristalinas de color turquesa y arenas muy finas de color crema, con pendientes muy suave y rodeada de áreas naturales donde predomina la vegetación Costera. La misma se encuentra dentro el área protegida de carácter nacional Reserva de Fauna.",
    },
    {
      name: "Pesquero Nuevo (Iberoestar Selection Holguín)",
      description:
        "La playa el Faro con una longitud de 200m fue creada artificialmente en diciembre del 2020 con un vertimiento de 16 000m3 de arena, dragados de su zona de baño, conformando una playa de arenas blancas y finas, pendiente suave >2°. Se caracteriza por la presencia de un solárium en la parte alta de la costa acantilada, una playa seca y humedad con fondos arenosos y varios atractivos en las diferentes visuales del paisaje y hermosos contrastes en los colores del agua de baño, resultado de la presencia de un Estero en su extremo Sur.",
    },
    {
      name: "Pesquero Nuevo (Pesquero III )",
      description:
        "La playa con excelentes condiciones en su área de sol y baño, tiene una longitud de 580m y un ancho promedio de 35m, sus arenas son de color blanco crema y el grano de diámetro fino y medio, la pendiente hacia el mar es muy suave <2°. El oleaje que baña la cara de playa es suave de manera habitual por la protección que brinda punta Linguete en su extremo Nordeste. El agua de la zona de baño es cristalina de color azul turquesa, varía por la diversidad de fondos, arenosos, rocosos y pastos marinos.",
    },
    {
      name: "Malecón de Playas",
      description:
        "Malecón de Playas, en General Villamil, es una de las playas urbanas más extensas y visitadas de Ecuador. Su clima cálido y soleado durante casi todo el año la convierte en un destino perfecto para el turismo. Su arena fina y su oleaje moderado la hacen ideal tanto para caminatas familiares como para deportes acuáticos. La zona cuenta con una variada oferta gastronómica, destacando los ceviches y mariscos frescos, mientras que su infraestructura turística ofrece comodidad con hoteles, restaurantes y zonas de recreación. Es considerada una de las mejores playas para disfrutar del atardecer, con vistas panorámicas que combinan el mar y la ciudad.",
    },
    {
      name: "Playa de Oro",
      description:
        "Playa de Oro es una excelente opción para nadar y tomar el sol. Está playa ha recibido el distintivo internacional Blue Flag.\r\nPlaya de Oro tiene una extensión superior a 1 kilómetro, suave arena color ambar y oleaje moderado. Es de fácil acceso y su ubicación cercana a la terminal marítima es una excelente opción para quienes deciden hacer turismo de cabotaje.",
    },
    {
      name: "Palenque",
      description:
        "Playa Palenque: Belleza Natural y Aventura en San Cristóbal\r\n\r\nUbicada en Sabana Grande de Palenque, esta playa de arena oscura y aguas turquesas es ideal para nadar, gracias a su poca profundidad y oleaje moderado. Rodeada de palmeras y restaurantes locales, atrae a turistas de Santo Domingo y San Cristóbal. Ofrece actividades como pesca, paseos en bote y deportes acuáticos. Además, cuenta con ríos de agua dulce que desembocan en el mar. Sin embargo, la falta de salvavidas es un desafíos a considerar. Sus paisajes cambian por la erosión costera, por lo que se recomienda respetar su entorno natural. Coordenadas: 18°13'60\"N 70°10'60\"W.",
    },
    {
      name: "Playa Dorada",
      description:
        "Playa Dorada, ubicada en la provincia de Puerto Plata, en la costa norte de la República Dominicana, es una de las playas más equilibradas de la región. Protegida por una extensa barrera coralina, el 62 % de su superficie presenta acreción. Su arena es blanco-crema, con aguas cristalinas y oleaje moderado. Es una playa pública con ecosistemas de dunas, un ancho de 48-51 metros y fácil acceso urbano. Cuenta con un 80 % de infraestructura turística, incluyendo hoteles, restaurantes y comercios. Ofrece sombrillas, sillas y zafacones, y posee certificación Bandera Azul. Se encuentra en una ciudad de gran relevancia histórica.",
    },
    {
      name: "Salinas de Bani",
      description:
        "Playa Salinas de Bani\r\n\r\nLa Playa Salinas está ubicada en la parte sur del país, en la Provincia Peravia de la Republica Dominicana. Entre las principales atracciones se pueden destacar: las dunas, el Club Náutico de Las Calderas, La Bahía de Las Calderas, el Sendero de los 4 Mangles, hoteles y restaurantes. Está a 86 kilómetros de Santo Domingo el principal centro urbano del país y del Aeropuerto Internacional de las Américas. Cuenta con una destacada biodiversidad que incluye: flamencos y Erizos de Mar. Además de actividades como el surf, kitesurf y el buceo.\r\n",
    },
    {
      name: "Miramar",
      description:
        "Miramar es una playa urbana del municipio de Puerto Colombia, Atlántico que está en proceso de ordenamiento, próxima a inaugurar en el mes de abril para el deleite de nacionales y extranjeros, dotada de zonas de parqueos, restaurantes, canchas deportivas y carpas  para el disfrutar un día de playa.",
    },
    {
      name: "Parquemar",
      description:
        "Es una playa de arena a la que se accede bajando desde el acantilado donde se encuentra construido el balneario que brinda la infraestructura necesaria para el turismo de sol y playa.  Se encuentra algo alejada del área céntrica, en un sector forestado.  Hay abundante oferta gastronómica y recreativa. ",
    },
    {
      name: "Balneário Camboriú (Praia Central)",
      description:
        "Com uma orla moderna e repleta de infraestrutura, a Praia Central de Balneário Camboriú é um dos destinos mais icônicos do Brasil. Recentemente ampliada, sua faixa de areia agora proporciona mais espaço para os visitantes desfrutarem do mar e do sol. O calçadão, ciclovia e quiosques garantem conforto e lazer, enquanto os arranha-céus à beira-mar conferem um visual cosmopolita. À noite, a iluminação cênica e a vibrante vida noturna transformam a praia em um cenário dinâmico. Apesar da movimentação intensa, a qualidade das águas varia ao longo do ano, exigindo atenção ambiental contínua.",
    },
    {
      name: "Bello Horizonte (Sector Zuana)",
      description:
        "Esta playa se ubica en el sector Bello Horizonte de la ciudad de Santa Marta, específicamente en el sector del Hotel Zuana Beach Resort, el cual cuenta con la respectiva concesión de la playa que es bandera azul. Mayor información en https://www.zuana.com",
    },
    {
      name: "Palo Blanco",
      description:
        "Playa Palo Blanco, en Santiago de Tolú, Sucre, es una playa certificada con Bandera Azul por su gestión ambiental y seguridad. Con 140 metros lineales, cuenta con delimitación para bañistas, restringiendo la entrada de motos acuáticas. Su paisaje es rural, con edificaciones poco invasivas y acceso desde la vía principal. La playa ofrece monitoreo constante de la calidad del agua, un área de guardavidas y un panel informativo con datos sobre fauna, flora y educación ambiental. Su enfoque en conservación y ordenamiento la hace ideal para quienes buscan un destino bien gestionado y en armonía con su entorno.",
    },
    {
      name: "Playa Dulce",
      description:
        "Playa Dulce, ubicada en Turbo, Antioquia, es un rincón singular donde el mar se torna dulce gracias a la influencia del río Atrato. Esta playa urbana se extiende casi un kilómetro, ofreciendo arenas doradas y aguas tranquilas que invitan al descanso. Su entorno refleja la riqueza cultural del Caribe antioqueño, con una gastronomía que deleita con sabores marinos frescos y auténticos. Playa Dulce se ha consolidado como el principal atractivo turístico de Turbo, brindando a los visitantes una experiencia única que combina naturaleza, cultura y tradición en un solo lugar.",
    },
    {
      name: "Playa Tranquila",
      description:
        "Isla Barú, Playa Tranquila: Un Paraíso de Arena Blanca y Aguas Turquesa\r\n\r\nUbicada en la costa caribeña de Colombia, Playa Tranquila es un destino idílico donde la arena blanca y el mar cristalino se combinan para crear un paisaje de ensueño. Sus cálidas aguas turquesa invitan al descanso y la aventura, con opciones para nadar, bucear o practicar deportes acuáticos. Rodeada de naturaleza exuberante y vibrante vida marina, esta playa es perfecta tanto para quienes buscan tranquilidad como para los amantes de la exploración. Con una variada oferta gastronómica y turística, Playa Barú es el lugar ideal para disfrutar de la belleza y el encanto del Caribe colombiano.",
    },
    {
      name: "Praia de Panxón",
      description:
        "Playa situada en la ría de Baiona, que constituye, a su vez, un sector externo de la ría de Vigo, la más meridional de las Rías Baixas. Es un arenal situado frente al Atlántico. En su extremo sur desemboca el río Muíños que la separa de Praia América. La playa se orienta hacia el W, con buenas vistas hacia la cercana península de Monte Real, islas Estelas y península de Monteferro. Tras un sector importante de la playa se ha desarrollado un área urbanizada compacta con bloques de viviendas, ocupando espacio de las antiguas dunas y donde se han establecido algunos servicios. En su sector meridional, un paseo permite su disfrute en cualquier época del año.",
    },
    {
      name: "Farol de Itapuã",
      description:
        "A praia do Farol de Itapuã, apesar de estar em uma área urbana, preserva muitos atributos naturais, como piscinas naturais entre afloramentos rochosos na maré baixa. Um coqueiral está presente na faixa de restinga e ao longe avista-se grande parte da orla da cidade de Salvador. Além disso, conta com a presença do belo Farol de Itapuã. Junto à praia há um espaço para caminhadas e ciclovia. O bairro de Itapuã conta ainda com diversos atrativos culturais. ",
    },
    {
      name: "Praia de Camboinhas",
      description:
        "A praia de Camboinhas possui águas cristalinas e um ambiente tranquilo, com faixa de areia branca extensa e água azul-esverdeada. Localizada na cidade de Niterói - RJ, é destino para quem procura por relaxamento e lazer devido ao seu ambiente mais reservado, frequentada por moradores e turistas. Possui quiosques e restaurantes a beira-mar e também é ideal para esportes e caminhadas ao longo da orla. Seu acesso é feito por via exclusivas, mantendo o ambiente mais seguro e familiar.",
    },
    {
      name: "Salinas Del Rey",
      description:
        "Es una playa poblada donde nativos y visitantes pueden disfrutar del único centro de deportes náuticos del caribe Colombiano y la gastronomía de la zona. Una obra icónica para la práctica de los deportes náuticos y el turismo sostenible en Juan de Acosta, Atlántico.",
    },
    {
      name: "Ancón",
      description:
        "Playa Ancón presenta aguas cálidas y transparentes, aptas para buceo, con Hoteles boutique y centros de buceo, cuenta con arrecifes coralinos y peces tropicales cerca de la costa. Puedes encontrar proyectos locales con el objetivo de proteger corales y manglares, en cuanto a la limpieza presenta arenas blancas y un mantenimiento regular, su accesibilidad es a 12 km de Trinidad, conectada por carretera, dentro de sus serviyse encuentran excursiones a la Bahía de Casilda y buceo, es una zona tranquila con socorristas en temporada alta. ",
    },
    {
      name: "Cazonal",
      description:
        "Playa Cazonal, está ubicada en el municipio de Santiago de Cuba. Se puede acceder a través de la carretera a Baconao. A pesar de su lejanía de la ciudad es de amplia concurrencia de personas teniendo en cuenta su cercanía al Acuario provincial. Tiene una longitud aproximada de 400m, 10m de faja máxima de sol y una pendiente  submarina suave, que la hace una de las playas favoritas para el uso recreativo por los niños. Posee forma de concha, caracterizada por arena blanca y fina de origen calcáreo-coralino y aguas cálidas. La vegetación incluye Thalassia sp en el agua, uvas caletas y cocoteros en las dunas. Cerca se encuentra El Complejo Hotelero Club Amigo Carisol-Los Corales que hace uso de un sector popularmente conocido como Cazonalito. ",
    },
    {
      name: "Punta Banda",
      description:
        "La Playa de Punta Banda, ubicada en la Bahía de Todos Santos, es un hermoso y tranquilo destino de 7 km de extensión. Sus aguas cristalinas y arenosas son perfectas para quienes buscan relajarse. Destacan sus aguas termales, conocidas por sus propiedades curativas, que forman pozas cuando la marea baja, permitiendo a los visitantes disfrutar de sus efectos terapéuticos. Además, es un excelente lugar para observar fauna marina, como delfines y aves migratorias y actividades recreativas terrestres y acuáticas.  Punta Banda es, sin duda, un rincón mágico que invita a disfrutar de la naturaleza y la tranquilidad.",
    },
    {
      name: "La Reserva Natural del Puerto",
      description:
        "La Playa de la Reserva Natural del Puerto en Mar del Plata es un espacio agreste y tranquilo, ideal para el contacto con la naturaleza. Ubicada dentro de una reserva protegida, alberga una rica biodiversidad y es perfecta para caminatas, avistaje de aves y fotografía. Sin infraestructura turística, su atractivo radica en su belleza natural y su ambiente sereno, alejado del bullicio urbano.",
    },
    {
      name: "Arembepe Velha",
      description:
        "A praia Arembepe Velha, localizada em Arembepe, Brasil, é bastante frequentada por surfistas e famílias que estão querendo fugir das praias cheias e movimentadas da orla de Camaçari. Esta apresenta um trecho ótimo para a prática do surf, sendo palco de importantes campeonatos, como o Camaçari Open de Surf. Além disso, conta com um trecho entre dois corpos areníticos, de ondas suaves e águas transparentes que proporcionam um maravilhoso local para banho e mergulho. A faixa de areia é bastante extensa e larga, o que permite ao visitante realizar diversas atividades de lazer, bem como para aqueles que optarem por algum serviço, o trecho dispõe de duas barracas de praias simples.",
    },
    {
      name: "Peró",
      description:
        "Praia muito bonita, com areia branca, mar azul e formação de dunas. Mar com águas calmas e rasas, clima ameno com ventos frequentes. ",
    },
    {
      name: "El Murciélago",
      description:
        "Playa El Murciélago se ubica en el área urbana, junto al terminal portuario de la ciudad. Es de fácil acceso tanto por vía terrestre como marítima. Su arena dorada se extiende por 1,7 km de extensión, bordeado por su dinámico malecón con restaurantes, bares y tiendas. Es un entorno ideal para la práctica de deportes acuáticos o para el descanso, con servicios que incluyen hospedaje frente al mar, estacionamiento y alquiler de carpas y sillas para turistas.",
    },
    {
      name: "San Pablo",
      description:
        "San Pablo es una playa de gran extensión, ideal para largas caminatas junto al mar. Su arena fina y su oleaje moderado la convierten en una de las mejores opciones para la recreación familiar. Es una de las playas más tradicionales de la provincia de Santa Elena, con una oferta gastronómica basada en mariscos frescos y especialidades locales. Su infraestructura turística incluye duchas, kioscos y alquiler de sillas, asegurando una experiencia cómoda para los visitantes. Su combinación de belleza natural y comodidades la posiciona como un destino perfecto para un fin de semana de relajación y disfrute del mar.",
    },
    {
      name: "Varadero",
      description:
        "Ubicada en Data de Posorja, Varadero es una de las playas más accesibles desde Guayaquil, con una infraestructura creciente que la convierte en un destino cada vez más popular. Su arena gris fina contrasta con el intenso azul del océano Pacífico, creando un paisaje relajante ideal para el descanso. A pesar de su cercanía a la ciudad, mantiene un ambiente natural, con brisas constantes y ocasionales eventos de oleaje que la hacen atractiva para surfistas. Su conexión con la Reserva Recreacional Playas Villamil añade valor ecológico y recreativo al área, ofreciendo a los visitantes un contacto directo con la biodiversidad costera.",
    },
    {
      name: "Bávaro",
      description:
        " Bávaro es una hermosa playa de arena blanca y agua turquesa cristalina, ubicada en el municipio Verón, La Altagracia, República Dominicana. Protegida por una barrera de arrecife, tiene una longitud de 5,040 metros y un ancho variable de 10 a 101 metros. Su oleaje es suave a moderado, con pendiente poco profunda. Es una playa urbana con un 68.4 % de su perímetro ocupado por infraestructuras, incluyendo hoteles, restaurantes y marinas. Cuenta con seguridad, estacionamiento y áreas de acceso definidas. Además, se encuentra en el entorno de un área protegida, garantizando su valor paisajístico y ecológico.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
    },
    {
      name: "Caribe",
      description:
        "Playa Caribe: Un Refugio Cercano a Santo Domingo\r\n\r\nUbicada en Juan Dolio, San Pedro de Macorís, Playa Caribe es una joya natural a pocos minutos de Santo Domingo. Con un oleaje moderado pero cambiante a fuerte y rodeada de palmeras y vegetación tropical, ofrece un paisaje encantador para quienes buscan relajación. Aunque no cuenta con servicios turísticos desarrollados, su fácil acceso y ambiente tranquilo la hacen ideal para una escapada rápida. Frecuentada por locales y turistas, esta playa combina belleza y serenidad en un entorno natural impresionante. Coordenadas: 18°24'30.1\"N 69°30'09.7\"W.",
    },
    {
      name: "Juan Dolio",
      description:
        "Playa Juan Dolio: Un Paraíso Costero en República Dominicana.\r\nUbicada a solo 50 km de Santo Domingo, Playa Juan Dolio es un destino paradisíaco de arena crema-blanca y aguas turquesas. Protegida por arrecifes de coral, ofrece un ambiente tranquilo ideal para nadar, bucear y relajarse bajo las palmeras. Con acceso público, estacionamientos, restaurantes y bares, es perfecta para escapadas de fin de semana. Su historia precolombina la vincula al asentamiento indígena El Corral. Aunque puede estar concurrida, su encanto natural y oferta de hospedaje, que incluye hoteles y villas, la convierten en una de las playas más atractivas del este dominicano.\r\n",
    },
    {
      name: "Piatã",
      description:
        "Praia de Piatã, uma das praias com maior atratividades de turistas de dentro e inclusive do interior do estado da Bahia. Muita apreciada pela sua larga faixa de areia em relação as demais praias urbanas da costa atlântica da cidade do Salvador. Sua localização é privilegiada, devido à praça de Piatã, muito utilizada para eventos culturais e próximos aos demais pontos comerciais de serviços essências, como farmácias e grandes mercados, incluindo pontos de ônibus e estacionamento em abundância. Por fim, a praia de Piatã tem grande potencial de exploração do ramo turístico, entretanto é ofuscada pelas famosas praias vizinhas do bairro boêmio de Itapuã. ",
    },
    {
      name: "Porto da Barra",
      description:
        '" A praia do Porto da Barra é uma pequena joia à beira-mar, com cerca de 300 metros de\r\n comprimento e uma estreita faixa de areia. Banhada pelas águas calmas e mornas da Baía\r\n de Todos os Santos, é abraçada por dois imponentes promontórios rochosos, que abrigam\r\n monumentos históricos como os Fortes de Santa Maria e São Diogo, além do Marco de\r\n Fundação da Primeira Capital do Brasil. Esse refúgio costeiro não só oferece abrigo para\r\n pequenas embarcações, mas também oferece uma vista deslumbrante da Ilha de Itaparica.\r\n Popular durante todo o ano, a praia do Porto da Barra é um lugar de beleza e tranquilidade,\r\n enriquecido pela rica história de Salvador."',
    },
    {
      name: "Praia da Paciência",
      description:
        "A Praia da Paciência é um ponto especial de Salvador, caracterizada por estar em Bairro turístico e boêmio, o Rio Vermelho, apesar de possuir pequena extensão e de frente ao imenso Oceano Atlântico, está protegida por belos afloramentos rochosos e recifes de corais, oferecendo um banho de sol e mar excepcional para turistas e baianos.",
    },
    {
      name: "Praia do Flamengo",
      description:
        "A praia do Flamengo é ótima para surf e caminhadas. Na maré baixa formam-se pequenas piscinas entre afloramentos rochosos. A praia apresenta coqueiral na sua retaguarda parcialmente preservado, o que dá certo aspecto natural à praia, que também é marcada pela tranquilidade. Além disso, está em uma região com belas dunas, que podem ser visitadas no Parque das Dunas. ",
    },
    {
      name: "Praia do Santinho",
      description:
        "Conhecida por suas inscrições rupestres pré-históricas, a Praia do Santinho é um dos locais mais preservados do norte da ilha. Com mar aberto e ondas potentes, atrai surfistas e turistas que buscam tranquilidade e contato com a natureza. O local abriga um dos maiores resorts da ilha, mas mantém extensas áreas de vegetação nativa, dunas e trilhas ecológicas. O contraste entre os costões rochosos, as areias claras e o mar azul faz do Santinho uma das praias mais impressionantes da ilha.",
    },
    {
      name: "Sapzurro",
      description:
        "Sapzurro, un pintoresco corregimiento de pescadores, se encuentra en la frontera entre Colombia y Panamá. Este destino turístico ofrece playas tranquilas y una belleza paisajística impresionante. Rodeado por la frondosa selva, Sapzurro es un refugio sereno para quienes buscan escapar del bullicio. Sus playas de arena blanca y aguas cristalinas son ideales para nadar, tomar el sol o simplemente relajarse. Además, la presencia de arrecifes de coral y una rica vida marina hacen de Sapzurro un lugar perfecto para practicar snorkel y buceo, permitiendo a los visitantes explorar las maravillas submarinas que este rincón del Caribe colombiano tiene para ofrecer.",
    },
    {
      name: "Buey Vaca",
      description:
        "Playa pequeña en una caleta rocosa, con restos de vegetación autóctona, pero con notables modificaciones humanas ",
    },
    {
      name: "Camarones",
      description:
        "Playa Camarones pose arena de tonos dorados que te invita a relajarte con el vaivén de las olas, además tiene una amplia disponibilidad de servicios turísticos; puedes rentar una sombrilla para protegerte del sol o disfrutar el día en uno de los clubes de playa.\r\nPlaya Camarones es una de las playas más accesibles en Puerto Vallarta, puedes llegar en auto, en bici por la ciclovía de la avenida principal o en transporte público.\r\nPlaya Camarones ha contado con el distintivo internacional Blue Flag. Este importante distintivo garantiza a los visitantes la excelencia en servicios, seguridad, manejo ambiental y calidad. \r\n",
    },
    {
      name: "Guayacanes",
      description:
        " Playa con Arena blanca, Aguas turquesas, Olas tranquilas, Rocas en algunas zonas, Vista panorámica. ",
    },
    {
      name: "Pontal do Sul",
      description:
        "O arco praial Matinhos-Pontal do Paraná se estende por aproximadamente 35km lineares. Possui um perfil de formação paleodunar, e vem sofrendo pressões imobiliárias gradativas ao longo das últimas décadas, intensificados nos últimos anos. São duas municipalidades que administram a área urbana adjacente a esse grande arco praial, enquanto a gestão das praias passa de processo de descentralização do poder Federal (SPU) para os municípios. No entanto, essa transferência se dá de maneira problemática, uma vez que aspectos políticos e econômicos comprometem os critérios técnicos. Obras de engorda foram realizadas, de maneira tempestiva e altamente onerosa, gerando grandes incongruências sobre a gestão de praias no sul do Brasil. ",
    },
    {
      name: "Praia do Flamengo",
      description:
        "A Praia do Flamengo está localizada na Zona Sul da cidade do Rio de Janeiro, com vista para o Pão de Açúcar e a Baía de Guanabara, sendo parte de um dos maiores parques urbanos do país, o Aterro do Flamengo. O local é frequentemente visitado para lazer, pratica de esportes e eventos culturais, contando com áreas verdes, ciclovias e quadras esportivas. Embora atualmente sua água seja considerada para banho, seu nível de poluição é alarmante e até o ano passado (2024) era considerada imprópria. ",
    },
    {
      name: "Matanzas",
      description:
        "Es una playa de mucha belleza escénica, se encuentra junto a la desembocadura del Río Rapel, con arenas finas y avifauna nativa un excelente lugar para la protección  de hábitat. Por otra parte, es lugar propicio para emprendimientos turísticos sustentables    ",
    },
    {
      name: "Alcatraz",
      description:
        "La playa de Alcatraz en Puerto Colombia es un paraíso costero de ensueño. Con su suave arena dorada y aguas cristalinas, invita al descanso y la relajación. Ubicada en un entorno tranquilo y pintoresco, esta playa ofrece un escape perfecto de la rutina diaria. Sus amplias extensiones de arena son ideales para tomar el sol, mientras que las suaves olas brindan oportunidades para nadar y practicar deportes acuáticos. Con palmeras meciéndose suavemente en la brisa marina y una vista impresionante del horizonte, la playa de Alcatraz es un destino verdaderamente encantador para disfrutar de momentos inolvidables junto al mar.",
    },
    {
      name: "El Mamey",
      description:
        "Pequeña playa en la periferia de la Ciudad de Matanzas, localizada en una caleta rocosa, con modificaciones humanas ",
    },
    {
      name: "Los Cocos",
      description:
        "Playa Los Cocos se encuentra en el sector de La Fortuna, en el kilómetro 12.5 de la vía que conecta Playas con Posorja, Provincia del Guayas. Esta playa se destaca por su ambiente tranquilo y natural, ofreciendo a los visitantes la oportunidad de disfrutar de mariscos frescos, alquiler de parasoles y hamacas para un descanso placentero",
    },
    {
      name: "Najayo",
      description:
        "Playa de aguas  cristalinas,de arena dorada,ambiente muy  relajado ,rodeada de palmeras y vegetación tropical ",
    },
    {
      name: "Praia Brava",
      description:
        "Situada no extremo norte da ilha, a Praia Brava é conhecida por suas águas cristalinas e ondas intensas, sendo um ponto de encontro para surfistas e praticantes de esportes aquáticos. Com aproximadamente 1,5 km de extensão, possui areia fina e branca, cercada por morros cobertos de Mata Atlântica. Durante a alta temporada, torna-se um dos destinos mais movimentados da ilha, com bares, restaurantes e infraestrutura turística. No entanto, devido às fortes correntes, recomenda-se cautela aos banhistas menos experientes.",
    },
    {
      name: "Ribeira (Penha)",
      description:
        " O trecho da praia da Ribeira entre a barraca do Bogary e a igreja de Nossa Senhora da Penha é uma praia arenosa com extensão de aproximadamente 500 metros e uma faixa de  areia relativamente larga (>50 m). Banhada pelas águas calmas e mornas da Baía de Todos  os Santos, está localizada em uma região de importância histórica e cultural da Cidade de  Salvador. A praia tem estrutura para atividades físicas, inclusive esportes de areia, e possui\r\n um pequeno mercado de peixes e frutos do mar. Está localizada em um bairro bucólico, a\r\n uma curta caminhada da enseada de Tainheiros, que possui cais e a famosa sorveteria da\r\n Ribeira, além da bela casa do Solar Amado Bahia, que abriga o museu do sorvete.",
    },
    {
      name: "Siboney",
      description:
        "Playa Siboney está ubicada en una zona urbana de igual nombre, en el municipio y provincia de Santiago de Cuba, a unos 15km de la ciudad cabecera, lo cual hace que sea una de las más concurridas durante casi todo el año para usos recreativos, gastronómicos y de investigación, entre otros. El acceso principal es por carretera, en transporte privado o público desde distintos sitios como Ferreiro. Ofrece un hermoso paisaje con diferentes niveles de terrazas marinas, cocoteros y uvas caletas. En la desembocadura del río Carpintero, que fluye generalmente en época de lluvias intensas, se encuentra un ecosistema de manglar. ",
    },
    {
      name: "Ayangue",
      description:
        'Conocida como la "Piscina del Pacífico" debido a sus aguas tranquilas y protegidas, Ayangue es una playa ideal para nadadores y familias con niños. Su bahía de aguas turquesas y arenas doradas ofrece un escenario idílico para el descanso y las actividades recreativas. La pesca artesanal es una parte esencial de la comunidad local, por lo que los restaurantes ofrecen mariscos frescos de la región. Además, es un punto de partida para excursiones de buceo y snorkel, especialmente hacia la Isla El Pelado, un santuario marino con una impresionante biodiversidad. Su combinación de belleza, seguridad y oferta turística la convierten en uno de los destinos más completos de la costa ecuatoriana.',
    },
    {
      name: "Los Muertos",
      description:
        "Esta playa es muy popular, se encuentra en el centro histórico de la ciudad, hay mucho tránsito de turistas y de vendedores ambulantes, hay muchos restaurantes que se extendieron como si tuvieran terrazas en la zona de la playa. Casi siempre está muy saturada y rodeada de mala planeación de edificios.",
    },
    {
      name: "Alfar",
      description:
        "La playa Alfar de uso público, situada en la zona sur de Mar del Plata, es una playa de dimensiones moderadas, con arena tostada y oleaje variable. Se encuentra a 1 km de la Rotonda del Faro de Punta Mogotes, entre los balnearios privados La Reserva y Mirador 9. Su acceso es libre y cuenta con baños públicos y rampa. Detrás de la playa, un pequeño bosque actúa como barrera natural contra el viento. La zona presenta una alta concurrencia tanto diurna como nocturna, con una oferta de paradores y actividades recreativas en sus alrededores.",
    },
    {
      name: "San Sebastián",
      description:
        'En el corazón de Mar del Plata, la playa San Sebastián destaca por su ambiente relajado y sus servicios de calidad. Con un sector privado para el alquiler de unidades de sombra, cuenta con una única garita de guardavidas, baños públicos, accesos para discapacitados y un sistema de gestión de residuos con separación orgánica y no orgánica. Su distintivo "Bandera Azul" la reconoce como una playa de excelencia en sostenibilidad. Accesible y frecuentada tanto por turistas como por locales, es el destino perfecto para disfrutar del mar y la ciudad.',
    },
    {
      name: "Piruí",
      description:
        "A praia do Piruí, localizada em Arembepe, Brasil, é conhecida por suas piscinas naturais e beleza singular. Os corpos areníticos proporcionam à praia um ambiente de águas cristalinas e calmas, sobretudo na maré baixa. Os coqueirais conferem ao lugar áreas de sombras ao longo do dia, o que permite que os visitantes possam relaxar na areia, sem se preocupar em ocupar mesas nas barracas. É uma praia ainda não tão frequentada quanto a principal de Arembepe, o que proporciona um lugar mais tranquilo para ir com amigos e família. Quem gosta de pescar também pode aproveitar os arrecifes para jogar suas redes. Quantos aos serviços, encontram-se disponíveis duas barracas de praia que dividem parte da faixa de areia, sendo possível desfrutar de uma culinária de qualidade. É comum encontramos alguns vendedores ambulantes, vendendo queijo e picolé, uma opção para quem tem crianças. ",
    },
    {
      name: "Praia da Joaquina",
      description:
        "A Praia da Joaquina, no leste da Ilha de Santa Catarina, é um dos destinos mais icônicos do surfe brasileiro. Com aproximadamente 3 km de extensão, vai do Costão da Joaquina até o Pontal da Joaquina, onde se conecta à Praia do Campeche. Segundo a classificação antropogênica, Joaquina é dividida em duas zonas: urbana ao norte, com infraestrutura turística, estacionamentos e comércios; e rural ao sul, preservando características naturais. Suas ondas poderosas e consistentes atraem surfistas do mundo todo, sendo palco de competições internacionais. Além do surfe, suas dunas e mirantes fazem dela um ponto turístico imperdível.",
    },
    {
      name: "Santamar",
      description:
        "Frente al histórico Hotel ESTELAR Santamar en el sector de Pozos Colorados, Playa Santamar se destaca por su amplia franja de arena, resultado de obras costeras en su extremo sur. El hotel, con edificaciones de poca altura, permite vistas despejadas hacia las estribaciones de la Sierra Nevada de Santa Marta. Los huéspedes disfrutan de mobiliario e instalaciones deportivas exclusivas en la playa, complementadas con servicios de seguridad privada y guardavidas presentes la mayor parte del año. ​",
    },
    {
      name: "El Salado",
      description:
        'El Salado es una playa poblada, que tradicionalmente ha sido el sitio recreativo por excelencia cada temporada veraniega en Caimito, y por su geografía y cualidades ha devenido lugar de ocio, de "Sol y playa", con variadas ofertas para todos los gustos: playa, río, naturaleza, piscina, canchas de tenis, pesca, pista de karting, entre otros servicios complementarios.',
    },
    {
      name: "Las Terrenas",
      description:
        "Playa Las Terrenas\r\n\r\nLa Playa Las Terrenas está ubicada en la costa atlántica en la provincia de Samaná de Republica Dominicana, la playa incluye arrecife de coral, praderas de hierbas marinas (Geraldes et al, 2015), manglares, manatí antillano, tortuga carey, tiburón ballena (Dide et al, 2024). La playa cuenta con varias atracciones arrecifales entre ellas: Los Cayos Las Ballenas, Bajo Bravo, Veril, Plaza Ramón, Plaza Mónica, Plaza Los Corales y Plaza Helena (Ramírez et al, 1996). Además esta playa tiene disponible diversos restaurantes y alojamientos. Esta playa está a una distancia aproximada de 158 kilómetros del Aeropuerto Internacional de las Américas y del principal centro urbano del país. \r\n",
    },
    {
      name: "La Caleta",
      description:
        "Esta playa es de tipo rural, es elegida por visitantes que conocen el lugar desde hace muchos años. Se encuentra cerca de un poblado llamado Camet Norte, pero el acceso a la misma es solo a pie, ya que no está directamente vinculada a la zona habitada. Presenta acantilados y algunas formaciones rocosas (plataformas de abrasión). El paisje es muy bonito y se caracteriza por la tranquilidad.",
    },
    {
      name: "Playa Grande",
      description:
        "Aguas claras, sus playas de suene declive, la arena color ocre y su vista panorámica hacía la urbe y al puerto, Playa Grande es ideal para disfrutar. Ubicada cerca del casco urbano de la ciudad de Mar del Plata, se puede acceder caminando, en distintos medios de transporte o en vehículo propio dado que a escasos metros cuenta con estacionamiento.\r\nPresenta jardines y una infraestructura adecuada para el ingreso a la playa de personas con capacidades diferentes. Esta provista de guardavidas brindando seguridad a los bañistas.\r\nOfrece una diversidad de servicios, cómo alquiler de carpas y sombrillas, piscina, sanitarios, duchas, vestuarios, lockers y actividades deportivas, como la Escuela de Surf\r\n",
    },
    {
      name: "Varese",
      description:
        "La Playa Varese es una de las más emblemáticas de Mar del Plata, conocida por su bahía protegida, aguas calmas y un entorno pintoresco. Su amplio paseo costero, ideal para caminatas y deportes al aire libre, la convierte en un punto de encuentro tanto para locales como para turistas. Ofrece servicios completos, incluyendo alquiler de sombrillas, gastronomía y estacionamiento, manteniendo un equilibrio entre comodidad y belleza natural.",
    },
    {
      name: "Baracoa",
      description:
        "\r\nEn la Playa Baracoa es una playa poblada donde destacan la naturaleza rocosa y las aguas cristalinas. Tiene una fauna muy rica y diversa; allí podrás encontrar peces como el caballerote y el pargo e incluso los pobladores comentan el avistamiento de algún que otro manatí, además de especiales aves como el tierrero y el azulejo, fundamentalmente en los meses más fríos. Se encuentra ubicada en el poblado de igual nombre, con acceso directo al mismo vía automotor y aérea. ",
    },
    {
      name: "Puerto Cardiel",
      description:
        "Ubicada a pocos kilómetros del centro de Mar del Plata, Puerto Cardiel es una playa tranquila que combina comodidad y encanto paisajístico. Con un sector privado que ofrece alquiler de unidades de sombra, la playa cuenta con todos los servicios esenciales: garitas de guardavidas, baños públicos, cestos de residuos y opciones gastronómicas. Sus espigones delimitan el paisaje, perfecto para la pesca deportiva. Además, dispone de estacionamiento y acceso para personas con discapacidad, lo que la convierte en un destino ideal tanto para turistas como para los residentes locales.",
    },
    {
      name: "Sun Rider",
      description:
        "Playa Sun Rider es un amplio y tranquilo balneario, ideal para el descanso y el disfrute en familia. Cuenta con excelentes guardavidas calificados, garantizando una experiencia segura para el baño. Sus olas la vuelven ideal para el surf. Alejada del bullicio urbano, ofrece un entorno sereno sin perder accesibilidad, ya que se puede llegar fácilmente en bicicleta, a pie, en colectivo o en auto. Cuenta con servicios básicos y mínima privatización, permitiendo un contacto más genuino con la naturaleza.",
    },
    {
      name: "Copacabana",
      description:
        "Praia famosa no mundo inteiro onde ocorre o maior reveillon do mundo. Conhecida por sua beleza natural, pelo calçadão cheio de pessoas e comércios e pelo melhores hotéis para quem visita a cidade. A qualquer hora do dia esta praia tem movimento. É uma praia extensa, com faixa de areia larga e águas geralmente calmas.",
    },
    {
      name: "Placaford",
      description:
        "A Praia de Placaford é uma das exuberantes praias localizadas no bairro de Itapuã, o segundo mais boêmio da capital baiana. Essa praia é também a segunda preferida dos\r\nmoradores e visitantes dessa parte da Cidade de Salvador. Conhecida por estar localizada entre as famosas praias do Itapuã (Sereia), ou também, farol de Itapuã e a praia de Piatã, sua localização é privilegiada, pois é abrigada por uma pequena baía, o que lhe confere águas mais calmas em relação à praias vizinhas. Sua proximidade com a colônia de pescadores lhe confere uma paisagem bucólica e paradisíaca, juntamente com os barcos que ali se encontram.",
    },
    {
      name: "Puertecillo",
      description:
        "Es una playa arenosa, estaría dentro de la clasificación de playa rural, en ella conviven varios usos, caletas de pescadores, buenas condiciones para la práctica de surf. Desde el punto de vista del acceso es complejo por las condiciones del camino. ",
    },
    {
      name: "Manzanillo  del Mar",
      description:
        "Sector de playa contiguo a playas tradicionales de Manzanillo del Mar, donde empiezan a construir condominios y Hotel Estelar.",
    },
    {
      name: "Miramar",
      description:
        "Miramar es una playa urbana del municipio de Puerto Colombia, Atlántico que está en proceso de ordenamiento, próxima a inaugurar en el mes de abril para el deleite de nacionales y extranjeros, dotada de zonas de parqueos, restaurantes, canchas deportivas y carpas para el disfrutar un día de playa.",
    },
    {
      name: "Playa del Ritmo",
      description:
        "Ubicada en el sector suburbano de Pozos Colorados en Santa Marta, Playa del Ritmo es un refugio costero que combina tranquilidad y autenticidad. Frecuentada principalmente por locales, ofrece una amplia franja de arena y un oleaje sereno, ideal para el descanso. Los visitantes pueden alquilar carpas y sillas plásticas, aunque la playa carece de guardavidas y señalización de áreas de baño. Al sur, limita con un canal que permite el acceso de embarcaciones a un conjunto residencial. La baja densidad urbanística en sus alrededores resalta su ambiente relajado, brindando una experiencia genuina lejos del bullicio turístico.",
    },
    {
      name: "Sierra Laguna",
      description:
        "En el extremo del sector de Pozos Colorados en Santa Marta, Playa Sierra Laguna se caracteriza por imponentes edificios de residencias turísticas que dominan el horizonte. El acceso a esta playa es limitado, siendo posible principalmente a pie por la orilla, lo que le otorga una atmósfera de exclusividad. La franja de arena es estrecha, reflejo de la transformación del entorno donde anteriormente existía una laguna. La ocupación de la playa se intensifica durante temporadas turísticas y fines de semana, cuando los residentes disfrutan del mobiliario de playa dispuesto frente a sus propiedades. Este rincón costero ofrece una experiencia tranquila y reservada en la vibrante ciudad de Santa Marta. ",
    },
    {
      name: "Guacuco",
      description:
        "Destino de playa en el frente este de la isla de Margarita, con un paisaje de palmeras, oleaje apacible, arena dorada, ofrece gastronomía de primera, distinguida como playa de disfrute en tranquilidad",
    },
    {
      name: "Balneario Monte Hermoso",
      description:
        "Clima cálido con temperatura agradable del agua. El color del agua si bien no es transparente es limpia y con espuma blanca, que hace un paisaje singular. En algunos sectores, hay presencia de médanos. Gran amplitud de playa que permite largas caminatas. Presencia de aves marinas que se observan a simple vista. El sol sale y se pone en el mar, lo que hace un paisaje de atardecer para la contemplación y capturas fotográficas. En algunos sectores, hay presencia de pescadores artesanales locales que permite la compra de pescado fresco y además constituye un elemento singular que hace a la cultura local. Posee servicios turísticos en sus alrededores y de fácil acceso ya que no hay pendientes.\r\nSe preserva la tranquilidad en la localidad y en su mayoría los negocios son de gestión local/regional. Existe un área protegida de huellas paleontológicas. Posee servicios turísticos como gastronomía, alojamiento, parque acuático, transporte, entre otros.",
    },
    {
      name: "Piangüita",
      description:
        "Piangüita, el paraíso escondido del Pacífico colombiano\r\n\r\nUbicada en Buenaventura, Piangüita es una joya del litoral pacífico, perfecta para los amantes de la naturaleza y la tranquilidad. Sus aguas cálidas y su arena oscura volcánica crean un contraste impresionante con la exuberante selva tropical que la rodea. Este destino es ideal para relajarse, disfrutar de la gastronomía local basada en mariscos frescos y explorar la biodiversidad marina en actividades como el avistamiento de ballenas (en temporada). Su acceso en lancha desde Buenaventura la convierte en un escape perfecto para quienes buscan una experiencia auténtica y alejada del bullicio. ¡Un rincón imperdible del Pacífico colombiano!",
    },
    {
      name: "Chabelita",
      description:
        "Chabelita es una playa más tranquila y menos concurrida en la zona de Playas Villamil, ideal para quienes buscan un entorno relajado y natural. Se distingue por su arena gris suave y un oleaje que varía según la época del año, lo que la hace un lugar perfecto para surfistas principiantes. Un espigón enrocado la separa de la playa principal (Malecón de Playas), brindándole un aire de exclusividad. La playa cuenta con restaurantes y espacios de descanso, pero sin la sobrecarga turística de otros sectores, lo que permite disfrutar de un ambiente más apacible y cercano a la naturaleza.",
    },
    {
      name: "Acevedo",
      description:
        "La Playa Acevedo, ubicada en la zona norte de Mar del Plata, ofrece un entorno natural con acantilados de altura media. A pesar de estar a 5 km del centro, su accesibilidad es buena. Es un lugar que proporciona un paisaje más alejado del bullicio urbano. Las condiciones de oleaje la hacen adecuada para la práctica de surf.",
    },
    {
      name: "Praia Brava",
      description:
        "Situada no extremo norte da ilha, a Praia Brava é conhecida por suas águas cristalinas e ondas intensas, sendo um ponto de encontro para surfistas e praticantes de esportes aquáticos. Com aproximadamente 1,5 km de extensão, possui areia fina e branca, cercada por morros cobertos de Mata Atlântica. Durante a alta temporada, torna-se um dos destinos mais movimentados da ilha, com bares, restaurantes e infraestrutura turística. No entanto, devido às fortes correntes, recomenda-se cautela aos banhistas menos experientes.",
    },
    {
      name: "Praia do Canal",
      description:
        "A praia do Canal está localizada no centro de Arembepe, na conhecida Vila de pescadores de Arembepe, Brasil, e é uma das praias mais frequentadas da Costa de Camaçari. Próxima a mercados, padarias, bancos, igreja e restaurantes, disponibiliza, portanto, diversos serviços e opções de lazer ao turista e demais visitantes. Além de disponibilizar banheiros públicos, encontramos facilmente chuveiros nas barracas e o aluguel de boias para a criançada. O canal, formado a partir do extenso corpo arenítico presente na antepraia, atribui um ambiente ótimo para banho, devido a formação de uma piscina natural. Nessa praia, encontramos um trecho bordejado por arenitos de praia, aos quais visualizamos diversos barcos ancorados e as principais peixarias, bem como o trecho do canal em si, as pessoas gostam mais de tomar banho. ",
    },
    {
      name: "Praia Mole",
      description:
        "Famosa entre surfistas e jovens, a Praia Mole tem um mar agitado com ondas perfeitas para o surf. A faixa de areia fofa e inclinada, cercada por morros cobertos de vegetação, compõe um cenário espetacular. Além das práticas esportivas, o local também oferece trilhas para mirantes e acesso à Praia da Galheta. Com bares e quiosques ao longo da orla, a Praia Mole tem uma atmosfera vibrante e descontraída, sendo um dos pontos turísticos mais badalados da ilha.",
    },
    {
      name: "La Boca",
      description:
        "Es una playa de mucha belleza escénica, se encuentra junto a la desembocadura del Río Rapel, con arenas finas y avifauna nativa un excelente lugar para la protección  de hábitat. Por otra parte, es lugar propicio para emprendimientos turísticos sustentables    ",
    },
    {
      name: "Pozos Colorados",
      description:
        "La playa Pozos Colorados se caracteriza por sus aguas cristalinas y su arena fina. Tranquila y menos concurrida que otras playas de Santa Marta, es un excelente lugar para relajarse. Cuenta con una buena oferta de restaurantes y está ubicada cerca del aeropuerto Simón Bolívar. Se puede acceder por carretera o en transporte público, aunque es necesario caminar un poco.",
    },
    {
      name: "San Luis",
      description:
        "San Luis está a orillas del mar Caribe, en la ciudad de Cumaná Primogénita del Continente Americano, es la playa urbana más extensa del estado Sucre, de fácil acceso tanta terrestre como marítimo, de agua azul y tranquilas que permiten el desarrollo de actividades acuáticas, presenta una amplia zona de exposición solar para ubicar tumbonas y sombrillas y desarrollar actividades deportivas propias del turismo de Sol y Playa, su arena es de color beig y está rodeada de palmeras, cocoteros y uveros, que le dan un ambiente natural y tropical. Además, cuenta con numerosos kioscos de prestadores de servicios turísticos de alimentación y bebidas.",
    },
    {
      name: "Santa Teresita",
      description:
        "Es una playa arenosa urbana llana bastante impactada por el turismo.",
    },
    {
      name: "Imbé (Barra)",
      description:
        "A praia da Barra, em Imbé, litoral norte do Rio Grande do Sul, é o trecho mais procurado por turistas e veranistas das praias do setor central do município. Essa praia é ideal para banho de sol e de mar, caminhada ao nascer do sol ou no final do dia, para a prática de esportes na areia (ex., vôlei) ou no mar (ex., surfe e kitesurfe). Sua proximidade com a desembocadura (ou barra) do complexo estuarino da Laguna Tramandaí-Armazém traz um toque especial para essa praia. É ali que ocorre a pesca cooperativa, onde pescadores artesanais, auxiliados por golfinhos, capturam tainhas utilizando tarrafas. Um fenômeno raríssimo no mundo! Outro fenômeno digno de nota é o ‘mar chocolatão’. Devido a presença de microalgas, que podem se multiplicar intensamente, a coloração da água muda, se tornando marrom como chocolate. Esse é um fenômeno natural e que não traz risco para os banhistas que podem aproveitar o mar normalmente. No calçadão existem quiosques que servem comidas e bebidas, banheiros e, na praia, existe uma guarita de guarda-vidas que traz ainda mais segurança para você e sua família.",
    },
    {
      name: "Praia de Cabeçudas",
      description:
        "A praia de Cabeçudas é uma das primeiras praias do turismo de veraneio no Brasil. Desde a década de 1920 é referência pelo seu ar bucólico, pelas residências de arquitetura refinada e por uma das mais belas paisagens praianas de Santa Catarina. Atualmente, passa por um intenso processo de urbanização, mas ainda permanece como lugar preferido de passeio da população de Itajaí. ",
    },
    {
      name: "Plenomar",
      description:
        "Situada en el sector turístico de Pozos Colorados en Santa Marta, Playa Plenomar ofrece a los visitantes una experiencia tranquila y auténtica. El desarrollo inmobiliario es disperso, permitiendo la conservación de áreas con vegetación arbórea que brindan sombra natural. Desde la playa, es común observar barcos cargueros de carbón en el horizonte, así como las majestuosas estribaciones de la Sierra Nevada de Santa Marta. La playa cuenta con una amplia franja de arena, ideal para relajarse, y se ofrecen servicios de alquiler de carpas y sillas plásticas. La presencia de vendedores ambulantes es mínima, lo que contribuye a un ambiente más relajado y menos concurrido.",
    },
    {
      name: "Las Toninas",
      description:
        "Playa angosta de aguas poco profundas con muy pocos médanos frontales en una localidad de casas bajas. ",
    },
    {
      name: "Mar del Tuyu",
      description:
        "Playa arenosa plana en ciudad balnearia del Partido de la Costa.",
    },
    {
      name: "Playa Serena",
      description:
        "La playa Serena, ubicada en el periurbano sur de Mar del Plata, se encuentra a 3 km de la Rotonda del Faro de Punta Mogotes. De acceso público, se puede llegar en auto o transporte público y se desciende a pie por una escalera de madera. Rodeada de acantilados que le otorgan un paisaje atractivo, es una playa tranquila y de ambiente familiar. Su franja de arena, de tamaño moderado, se reduce considerablemente en pleamar. Presenta un perfil homogéneo con una suave berma de marea. Además, es un punto de interés para la práctica de surf y parapente.",
    },
    {
      name: "Playita Mía",
      description:
        "Playita Mia, una playa ubicada en la zona costera de la ciudad de Manta, donde es considerada una playa popular, por ser una playa comercial pesquera y en venta de pescados. Es altamente conocida, por su zona de deporte y recreación, y a su vez cuenta con varios restaurantes con buena referencia en la calidad de sus productos, debido a la pesca fresca del día.",
    },
    {
      name: "La Boca",
      description:
        "Esta playa está ubicada en la desembocadura al mar de la Laguna costera Mar Chiquita, la única albufera de Argentina y una de las cinco en todo el mundo en su tipo. Es un sitio con una belleza paisajística muy particular y muy valorada por la tranquilidad del lugar. Es muy elegida por los bañistas por la particularidad de ser agua salobre, predominantemente marina, pero sin olas. Es un sitio ideal para las familias. Se encuentra en el poblado homónimo a la laguna, que a la vez se ubica a 36 km de una de las ciudades costeras más grandes de la provincia de Buenos Aires, Mar del Plata, lo que hace que la afluencia de turistas también desde esta ciudad, que recibe cientos de miles de turistas en la temporada estival, sea bastante alta.",
    },
    {
      name: "Praia dos Açores",
      description:
        "Localizada no sul da ilha, a Praia dos Açores é um refúgio para quem busca sossego e contato com a natureza. Com mar cristalino e ondas moderadas, é frequentada por surfistas e famílias. Sua infraestrutura é discreta, mantendo a paisagem natural preservada. Os costões e a vegetação nativa ao redor garantem um ambiente tranquilo e de beleza singular.",
    },
    {
      name: "Tramandaí",
      description:
        "A praia do centro do município de Tramandaí, litoral norte do Rio Grande do Sul, é muito procurada por turistas e veranistas de todo o estado. Sua faixa de areia é muito utilizada para curtir um banho de sol, tomar um delicioso chimarrão ou para aproveitar as bebidas e comidas servidas por quiosques. O mar é muito procurado por banhistas e a presença de guarda-vidas no verão deixam o banho de mar ainda mais seguro. Sua porção mais interna é delimitada por um calçadão largo, que traz uma série de atratividades para os usuários como rinque de patinação, pista de skate, quadra de basquete, academia ao ar livre, playground e muito mais. Venha conhecer!",
    },
    {
      name: "Bahía de Santa Marta",
      description:
        "Principal playa del centro histórico de Santa Marta, donde convergen pasado y presente. Al sur se ubica el puerto deportivo y al norte uno de los terminales comerciales más importantes del país. La acumulación de arena en el costado sur genera una playa más amplia, con espacio para sillas, carpas y comercio informal. Su malecón fue renovado recientemente, mejorando la conexión con la ciudad. Aún conserva el recuerdo de su apogeo turístico del siglo XX, cuando el tren la unía con Bogotá. Hoy, ofrece una vista contrastante de islotes, buques de carga y lanchas de transporte de pasajeros.",
    },
    {
      name: "El Rodadero",
      description:
        "Uno de los principales balnearios urbanos de Santa Marta, reconocido por su fácil acceso y constante afluencia de turistas. Su arena compactada y aguas tranquilas favorecen el disfrute familiar, mientras que su conexión con Playa Blanca a través de lanchas lo convierte en un punto de partida frecuente para recorridos costeros. Frente a la playa, un islote agrega valor escénico al paisaje. La zona está delimitada por un extenso malecón turístico, que facilita la integración con hoteles, restaurantes y comercios, consolidando a El Rodadero como un espacio clave dentro de la oferta turística de la ciudad.",
    },
    {
      name: "Constitución",
      description:
        "La Playa Constitución, a 4 km del centro de Mar del Plata, se distingue por su amplitud y mejor conservación ambiental comparada con otras playas urbanas. Su cercanía a la Avenida Constitución facilita el acceso a comercios y alojamientos. Aunque alejada del centro, es accesible en transporte. El oleaje la hace ideal para surf y actividades recreativas. Ofrece un espacio más natural, con servicios comerciales cercanos.",
    },
    {
      name: "Playa Popular",
      description:
        "La Playa Popular de Mar del Plata, ubicada en el centro de la ciudad, es una de las más visitadas. Su accesibilidad es destacable, facilitando la llegada tanto a pie como en transporte público. Ofrece una variedad de servicios, incluyendo alquiler de sombrillas y opciones gastronómicas. Al ser una playa céntrica y popular, suele ser concurrida, especialmente en temporada alta. Es una opción conveniente para quienes buscan una playa con servicios básicos y fácil acceso.",
    },
    {
      name: "Los Cocos",
      description:
        "Ubicada en el costado occidental de la Bahía de Santa Marta, esta playa urbana combina edificios residenciales modernos con antiguas construcciones junto a la arena. Al norte limita con un puerto deportivo, mientras que al sur desemboca el río Manzanares, lo que influye en su dinámica costera. Frecuentada mayoritariamente por residentes locales, ofrece servicios básicos como alquiler de carpas y sillas, pero carece de oferta gastronómica formal. Su ambiente tranquilo y el contraste entre lo nuevo y lo tradicional le otorgan un carácter particular dentro del frente costero de la ciudad.",
    },
    {
      name: "Paseo de Roberto",
      description:
        "Bahía de Caráquez, ubicada en la provincia de Manabí, Ecuador, es un destino turístico costero ideal para quienes buscan naturaleza, historia y tranquilidad. Sus playas de arena clara y aguas tranquilas ofrecen escenarios perfectos para el descanso y la práctica de deportes acuáticos, como kayak, vela y pesca deportiva. La ciudad cuenta con un malecón con vistas panorámicas cercanos al Estuario del Río Chone, hogar de manglares y aves marinas. Con su combinación de cultura, ecoturismo y belleza escénica, Bahía de Caráquez es un destino atractivo para turistas nacionales e internacionales.",
    },
    {
      name: "Península (barra del estero)",
      description:
        "La Playa Península es una playa de arena blanca muy fina, se encuentra a las afueras de la ciudad, para llegar aquí, es necesario hacer un viaje de 40 a 50 minutos desde el centro de la ciudad, a lo largo de la playa podrás ver algunas de las casas que son utilizadas por gente de la tercera edad en la época de calor. En esta playa solo encontraras tranquilidad, la gente que viene aquí es poca y si corres con suerte te encontraras completamente solo disfrutando de esta playa.  En algunas partes de la playa, encontraras aguas termales subterráneas que con tan solo rascar un poquito en la arena podrás tocarla. ",
    },
    {
      name: "Playa Pacífica",
      description:
        "La playa Pacifica es una sección de lo que se considera la Playa Municipal en Ensenada, Baja California, es una franja arenosa de aprox.   es una extensión de playa de 1,5 Km., se caracteriza por su amplitud, la presencia de dunas y una pequeña laguna costera denominada “El Ciprés”, y es una zona de descanso y la anidación de aves residentes y migratorias (Escofet y Espejel , 1992) ubicada con dirección noreste de la Bahía de Todos Santos (BTS). Las actividades recreativas y deportivas que se pueden realizar son la práctica de futbol, voleibol, surf, la caminata, paseo en caballo, en bicicleta, natación. ahi se encuentras distintos uso; desarrollo turístico inmobiliario (condominio), junto se ubica a la zona y base militar, posee accesibilidad a través de una calle principal. pertenece a la zona urbana del centro del Población. Jueves 6 de febrero de 2025 se anuncia los resultados del muestreo de la Comisión Estatal para la Protección Contra Riesgos Sanitarios (Coepris), el Gobierno de Ensenada informa que se reaperturan las playas para actividades recreativas en el mar.La notificación de Cofepris, indica que los resultados de monitoreo de calidad de agua de mar se encuentran dentro de la norma en la materia, al tener menos de 10 enterococos por cada 100 mililitros en ambas playas.",
    },
    {
      name: "Boca Chica",
      description:
        "Playa de Boca Chica \r\n\r\n\r\nLa playa de Boca Chica está ubicada en la Republica Dominicana en la provincia de Santo Domingo a unos 30 kilómetros de distancia en dirección este y a 3 kilómetros del Aeropuerto Internacional de las Américas, en la costa sur del país. La playa incluye arrecifes coralinos, manglares, dos islotes rodeados de vegetación acuática, club náutico y un parque submarino (Álvarez Noboa & Sociedad P. D. A., 2016). El parque submarino tiene 10 km2 de océano, alcanzando  profundidades de 10 m a 50 m encontrándose comunidades de arrecies de coral y diferentes peces. Este parque es un popular sitio de buceo (Fernández-España Barral, 2017) y la playa es una de las más visitadas debido a su cercanía con el principal centro urbano. \r\n",
    },
    {
      name: "Morro das pedras",
      description:
        "A Praia do Morro das Pedras, no sul da Ilha de Santa Catarina, se estende do Pontal da Joaquina, de frente para a Ilha do Campeche, até a Curva da Armação, onde um costão rochoso com matacões e seixos marca seu limite sul. Com areia grossa e irregular, sua paisagem é marcada por características naturais rústicas e um mar de ondas fortes e intensas, muito procurado por surfistas experientes. Embora possua trechos ainda preservados, a praia sofre pressão urbana ao longo de toda sua extensão, com a expansão de residências e infraestrutura turística. O Mirante do Morro das Pedras oferece uma vista privilegiada da costa.",
    },
    {
      name: "Balneario Las Grutas",
      description:
        'Balneario "Las Grutas" se destaca por su clima cálido con temperatura agradable del agua. Color del agua transparente y arena clara. Presencia de ecosistema nativo como acantilados, especies vegetales y animales que pueden observarse a simple vista. Forma\r\nparte de la Bahía de San Antonio, siendo área protegida. El paisaje es dinámico, con marea alta el agua está cerca. Con marea baja se forman piletones naturales. Posee servicios básicos. No hay grandes construcciones inmobiliarias, ni cadenas hoteleras, ni edificios en altura. Se preserva la tranquilidad en la localidad y en su mayoría los negocios son de gestión local.\r\n',
    },
    {
      name: "Laguna Verde",
      description:
        "Es una playa que cuenta con una caleta de pescadores localizada en un pequeño pueblo, no obstante en época estival sufre de aglomeraciones su acceso es un tanto difícil, sin embargo, llega al lugar locomoción colectiva. Respecto a su equipamiento es básico y tiene pequeños emprendimientos locales como venta de artesanías y vendedores ambulantes. ",
    },
    {
      name: "Playa Hermosa",
      description:
        "Playa Hermosa en Ensenada, Baja California, es conocida por su impresionante belleza natural, siendo un destino turístico importante. La playa, destaca por sus extensos arenales y aguas azules. Flanqueada por vegetación nativa, proporciona un entorno pintoresco y relajante. Sus atardeceres son espectaculares, ideales para quienes buscan un momento de paz frente al mar. Se pueden disfrutar varias actividades recreativas y deportes acuáticos como el surf y el paddleboard. Las caminatas por la orilla y los picnics en la playa son opciones populares para familias y grupos de amigos. También, se realizan eventos deportivos y culturales como torneos de surf y festivales de música, que atraen visitantes al lugar. ",
    },
    {
      name: "Pântano do sul",
      description:
        "O Pântano do Sul é um dos últimos refúgios da cultura pesqueira da ilha. Suas águas calmas e sua ampla faixa de areia fazem dela um local perfeito para famílias e para quem busca tranquilidade. Os restaurantes à beira-mar servem frutos do mar frescos, mantendo viva a tradição da pesca artesanal. Além disso, a praia é ponto de partida para trilhas que levam a outras praias isoladas, como a Lagoinha do Leste, Solidão e Saquinho.",
    },
    {
      name: "Praia da Armação",
      description:
        "A Praia da Armação tem uma forte ligação com a pesca artesanal, refletida nos barcos coloridos e nos trapiches que compõem sua paisagem. Suas águas variam entre calmas e agitadas, sendo frequentadas por surfistas e famílias. Além disso, a praia é um ponto de embarque para a Ilha do Campeche e abriga a Igreja de Sant’Ana, um patrimônio histórico da ilha. A atmosfera rústica e acolhedora faz da Armação um dos destinos mais tradicionais de Florianópolis.",
    },
    {
      name: "Canoa",
      description:
        "Canoa es mucho más que una playa; es una experiencia. Conocida por su ambiente relajado y bohemio, este destino ofrece una amplia variedad de actividades para todos los gustos. Desde surfear las olas perfectas hasta disfrutar de un delicioso ceviche frente al mar, Canoa tiene algo para cada viajero.",
    },
    {
      name: "El Faro Beach",
      description:
        "Es una playa, con su arena fina,  clara, aguas cristalinas, dentro de la Bahía de Todos Santos, colinda con la boca del estero de Punta Banda,  por lo tanto el movimiento de sedimentaria es constante, por lo que el ancho de la playa varía, en invierno se erosiona, lo que ya sido intervenido con acciones de protección con enrocamientos, esta conformado por la Playa el Faro en el lado sur se ubica un complejo hotelero Estero Beach, que ofrece hospedaje, restaurante, actividades acuáticas (motos), sin embargo, el acceso al espacio de playa por el estacionamiento tiene costo. El Faro en el lado norte, es una  playa de libre acceso, de manera peatonal que es visitada por residentes locales y principalmente . Se ubica al sur de la Ciudad de Ensenada, el acceso es por automóvil a través de la Carretera, en la zona conocido como el ExEjido Chapultepec, actualmente es un sitio urbanizado, donde residen estadounidenses y población local. Los caminos están  pavimentados. Los visitantes pueden practicar deportes sobre la playa y el mar. No existe ofertan de servicios alimenticios, cercanos.",
    },
    {
      name: "Bella Vista",
      description:
        "Playa urbana, ubicada al Sureste de la Isla de Margarita (Mar Caribe), en la ciudad de Porlamar, formando parte de la Bahía de Guaraguao. Su extensión, de 1.300 metros, brinda un contraste entre la Porlamar de cemento y acero, con sus edificios residenciales y hoteleros; y la Porlamar marinera, con sus botes y rancherías de pescadores. En su orilla, a la sombra de múltiples cocoteros, los visitantes, tras disfrutar sus aguas tranquilas, pueden practicar deportes de playa, degustar la gastronomía local, adquirir artesanías y descansar en alguna sombrilla, arrullados por el canto de las guacamayas. Cuenta con vigilancia policial y la presencia ocasional de guardavidas.",
    },
    {
      name: "Salguero",
      description:
        "La playa del Salguero, al lado del río Gaira, es una bonita playa de arena blanca con vistas a montañas a un lado y al Rodadero al otro. Menos concurrida que otras playas del Rodadero, es un oasis tranquilo que atrae a los residentes locales. Es accesible por carretera y transporte público, y se puede alquilar carpas.",
    },
    {
      name: "California Beach",
      description:
        "La playa se encuentra en un localidad pequeña, Santa Clara del Mar, pero que en los últimos años ha crecido de manera que hoy en día es una ciudad; es decir, dejó de ser un poblado en las últimas décadas. La plata presenta las características de una playa urbana, con una infraestructura notable para su tamaño, presentando incluso una piscina en el sector privado del balneario. La paya recibe gran número de visitantes durante la temporada estival y también se suman turistas que provienen de una ciudad más grande, Mar del Plata, que se encuentra a 15 km al sur; dado que la movilidad entre ambas ciudades es muy accesible.",
    },
    {
      name: "Playa 3Ms",
      description:
        "\r\nDescubre 3Ms, una encantadora playa en Ensenada, México, ideal para los amantes del surf. Con olas que se mantienen durante todo el año, siendo una excelente opción incluso en días de poco mar. Sus largas y perfectas olas son excelentes para practicar la tabla larga, ofreciendo diversas secciones para maniobrar. Aunque los fines de semana pueden atraer multitudes, los días laborables te brindan la oportunidad de disfrutar de un ambiente más tranquilo. Recuerda llevar tus botas de neopreno para protegerte de las rocas y erizos. ¡Ven y vive la experiencia única que 3Ms tiene para ofrecer.\r\n",
    },
  ];

  const findbeaches = await prisma.beach.findMany({});

  for (const beaches of description) {
    for (const oldbeaches of findbeaches) {
      if (beaches.name === oldbeaches.name) {
        await prisma.evaluation.updateMany({
          where: { beachId: oldbeaches.id },
          data: {
            beachDescription: beaches.description,
          },
        });
      }
    }
  }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

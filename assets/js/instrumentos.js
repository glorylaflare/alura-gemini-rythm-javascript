const instrumentos = [
  {
    id: 1,
    nome: "Violão",
    tipo: "cordas",
    historia: {
      descricao:
        "O violão, com suas raízes na antiga vihuela espanhola, evoluiu ao longo dos séculos e se tornou um dos instrumentos musicais mais populares do mundo. Sua versatilidade permite que seja utilizado em uma ampla variedade de estilos musicais, desde o clássico até o pop e o rock.",
      link: "https://pt.wikipedia.org/wiki/Guitarra_cl%C3%A1ssica",
    },
    vantagens: [
      "Versátil para diversos estilos musicais",
      "Relativamente fácil de aprender as primeiras notas",
    ],
    desvantagens: [
      "Requer prática regular para desenvolver a coordenação entre as mãos",
    ],
    musicasExemplos: [
      {
        nome: "Caetano Veloso - Sozinho",
        link: "https://www.youtube.com/embed/lnjZ2pqI6Z8",
      },
      {
        nome: "Ed Sheeran - Perfect",
        link: "https://www.youtube.com/embed/cNGjD0VG4R8",
      },
    ],
    imagemIcon: "./assets/images/icons/violao.png",
    imagemBackground: "./assets/images/detalhes/violao.png",
    videoAula: "https://www.youtube.com/embed/2Rsz3JEbw0Y",
    instrumentosSimilares: ["Ukulele", "Guitarra"],
  },
  {
    id: 2,
    nome: "Guitarra",
    tipo: "cordas",
    historia: {
      descricao:
        "A guitarra, instrumento de cordas percutidas, possui uma rica história que se entrelaça com diversas culturas e estilos musicais. Desde seus primórdios, a guitarra evoluiu e se adaptou, dando origem a diversos modelos e sonoridades.",
      link: "https://pt.wikipedia.org/wiki/Guitarra",
    },
    vantagens: [
      "Versatilidade em diversos gêneros musicais",
      "Possibilidade de tocar solos melódicos",
    ],
    desvantagens: [
      "Requer prática para desenvolver a coordenação entre as mãos e os dedos",
    ],
    musicasExemplos: [
      {
        nome: "Jimi Hendrix - Purple Haze",
        link: "https://www.youtube.com/embed/g7NuVwfz17Q",
      },
      {
        nome: "Metalica - Nothing ELse Matters",
        link: "https://www.youtube.com/embed/ozXZnwYTMbs",
      },
    ],
    imagemIcon: "./assets/images/icons/guitarra.png",
    imagemBackground: "./assets/images/detalhes/guitarra.jpg",
    videoAula: "https://www.youtube.com/embed/lphZkJhauD0",
    instrumentosSimilares: ["Violão", "Baixo"],
  },
  {
    id: 3,
    nome: "Ukulele",
    tipo: "cordas",
    historia: {
      descricao:
        "Originário do Havaí, o ukulele é um instrumento de cordas pequenas e com um som característico, alegre e relaxante. Sua popularidade se espalhou pelo mundo, tornando-se um instrumento ideal para iniciantes e para aqueles que buscam um som mais suave e melódico.",
      link: "https://pt.wikipedia.org/wiki/Ukulele",
    },
    vantagens: ["Fácil de aprender", "Portátil", "Som alegre e relaxante"],
    desvantagens: [
      "Menor gama de sons em comparação com outros instrumentos de corda",
    ],
    musicasExemplos: [
      {
        nome: "Israel Kamakawiwoʻole - Over the Rainbow",
        link: "https://www.youtube.com/embed/QJAL6VpX4dY",
      },
      {
        nome: "Vance Joy - Riptide",
        link: "https://www.youtube.com/embed/lYoWuaw5nSk",
      },
    ],
    imagemIcon: "./assets/images/icons/ukulele.png",
    imagemBackground: "./assets/images/detalhes/ukulele.jpeg",
    videoAula: "https://www.youtube.com/embed/D2ULaxhImRU",
    instrumentosSimilares: ["Violão", "Charango"],
  },
  {
    id: 4,
    nome: "Baixo",
    tipo: "cordas",
    historia: {
      descricao:
        "O baixo elétrico, peça fundamental na base harmônica de muitas bandas, possui uma história relativamente recente. Sua criação está ligada ao desenvolvimento da música amplificada e do rock and roll, onde o baixo se tornou um instrumento indispensável para sustentar o ritmo e a melodia.",
      link: "https://pt.wikipedia.org/wiki/Baixo_el%C3%A9trico",
    },
    vantagens: [
      "Essencial para a formação de bandas",
      "Fácil de aprender as notas básicas",
    ],
    desvantagens: ["Pode ser um instrumento grande e pesado"],
    musicasExemplos: [
      {
        nome: "Red Hot Chili Peppers - Californication",
        link: "https://www.youtube.com/embed/sqLWfFCbYBI",
      },
      {
        nome: "Queen - Another One Bites The Dust",
        link: "https://www.youtube.com/embed/OdurVND-DSs",
      },
    ],
    imagemIcon: "./assets/images/icons/baixo.png",
    imagemBackground: "./assets/images/detalhes/baixo.jpg",
    videoAula: "https://www.youtube.com/embed/KJhmNHcl7-8",
    instrumentosSimilares: ["Guitarra", "Contrabaixo"],
  },
  {
    id: 5,
    nome: "Bateria",
    tipo: "percussão",
    historia: {
      descricao:
        "A bateria, como a conhecemos hoje, é um instrumento relativamente moderno. Suas origens podem ser rastreadas até os tambores utilizados em diversas culturas ao redor do mundo. A bateria moderna, com sua variedade de tambores e pratos, é o coração rítmico de muitas bandas, proporcionando a pulsação e a energia para a música.",
      link: "https://pt.wikipedia.org/wiki/Bateria_(instrumento_musical)",
    },
    vantagens: ["Essencial para a formação de bandas", "Exercício físico"],
    desvantagens: ["Requer espaço para prática e pode ser barulhenta"],
    musicasExemplos: [
      { nome: "Slipknot - Before I Forget", link: "https://www.youtube.com/embed/d0iim1p6Jak" },
      {
        nome: "Nirvana - Smells Like Teen Spirit",
        link: "https://www.youtube.com/embed/hTWKbfoikeg",
      },
    ],
    imagemIcon: "./assets/images/icons/bateria.png",
    imagemBackground: "./assets/images/detalhes/bateria.jpg",
    videoAula: "https://www.youtube.com/embed/i7YoahsnjhI",
    instrumentosSimilares: ["Cajón", "Bongo"],
  },
  {
    id: 6,
    nome: "Teclado",
    tipo: "teclado",
    historia: {
      descricao:
        "O teclado, em sua forma moderna, é um instrumento eletrônico que surgiu no século XX. Ele é capaz de imitar uma grande variedade de outros instrumentos, desde pianos acústicos até sintetizadores e órgãos. A versatilidade do teclado o tornou um instrumento popular em diversos estilos musicais.",
      link: "https://pt.wikipedia.org/wiki/Teclado_(instrumento_musical)",
    },
    vantagens: [
      "Versátil para diversos estilos musicais",
      "Fácil de aprender as notas básicas",
    ],
    desvantagens: ["Pode ser um instrumento grande e pesado"],
    musicasExemplos: [
      {
        nome: "Elton John - Sacrifice",
        link: "https://www.youtube.com/embed/NJuKgt1EZNE",
      },
      {
        nome: "John Lennon - Imagine",
        link: "https://www.youtube.com/embed/EcPsB6PwaiE",
      },
    ],
    imagemIcon: "./assets/images/icons/teclado.png",
    imagemBackground: "./assets/images/detalhes/teclado.jpg",
    videoAula: "https://www.youtube.com/embed/SkloFAYY3Yo",
    instrumentosSimilares: ["Piano", "Órgão"],
  },
  {
    id: 7,
    nome: "Flauta",
    tipo: "sopro",
    historia: {
      descricao:
        "A flauta é um dos instrumentos de sopro mais antigos, com raízes que remontam à pré-história. Ao longo dos séculos, a flauta evoluiu em diversas formas e tamanhos, sendo utilizada em diferentes culturas e estilos musicais. Sua sonoridade doce e melodiosa a torna um instrumento popular tanto em música clássica quanto em música popular.",
      link: "https://pt.wikipedia.org/wiki/Flauta_doce",
    },
    vantagens: ["Fácil de transportar", "ideal para iniciantes"],
    desvantagens: "Requer boa respiração e postura",
    musicasExemplos: [
      {
        nome: "The Beatles - Yesterday",
        link: "https://www.youtube.com/embed/NrgmdOz227I",
      },
      {
        nome: "A$ap Rocky - Praise The Lord",
        link: "https://www.youtube.com/embed/_eDpH4hMW1o",
      },
    ],
    imagemIcon: "./assets/images/icons/flauta.png",
    imagemBackground: "./assets/images/detalhes/flauta.jpg",
    videoAula: "https://www.youtube.com/embed/0t1ScvhGXjk",
    instrumentosSimilares: ["Clarinete", "Saxofone"],
  },
];

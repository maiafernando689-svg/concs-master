import { ImageSourcePropType } from "react-native";

export interface HistoryBook {
  id: number;
  title: string;
  author: string;
  cover: ImageSourcePropType;
  description: string;
  topics: string[];
  pdf: any;
}

export const historyBooks: HistoryBook[] = [
  {
    id: 1,
    title: "História da Guerra do Peloponeso",
    author: "Tucídides",
    cover: require("../../assets/images/historia/peloponeso.png"),
    description: "Relato clássico e detalhado da guerra entre Atenas e Esparta.",
    topics: ["Grécia Antiga", "História Militar", "Clássico"],
    pdf: require("../../assets/images/pdfs/historia/peloponeso.pdf"),
  },

  {
    id: 2,
    title: "As Guerras Gálicas",
    author: "Júlio César",
    cover: require("../../assets/images/historia/guerras-galicas.png"),
    description: "O próprio César narra suas campanhas militares pela Gália.",
    topics: ["Roma Antiga", "Militar", "Clássico"],
    pdf: require("../../assets/images/pdfs/historia/guerras-galicas.pdf"),
  },

  {
    id: 3,
    title: "A História",
    author: "Heródoto",
    cover: require("../../assets/images/historia/herodoto.png"),
    description: "Considerado o pai da História, descreve o conflito greco-persa.",
    topics: ["Grécia Antiga", "História Geral", "Clássico"],
    pdf: require("../../assets/images/pdfs/historia/herodoto.pdf"),
  },

  {
    id: 4,
    title: "Declínio e Queda do Império Romano — Volume 1",
    author: "Edward Gibbon",
    cover: require("../../assets/images/historia/gibbon1.png"),
    description: "Uma das maiores obras já escritas sobre o Império Romano.",
    topics: ["Roma Antiga", "História Geral", "Império Romano"],
    pdf: require("../../assets/images/pdfs/historia/gibbon1.pdf"),
  },

  {
    id: 5,
    title: "Declínio e Queda do Império Romano — Volume 2",
    author: "Edward Gibbon",
    cover: require("../../assets/images/historia/gibbon2.png"),
    description: "Continuação do estudo monumental de Gibbon.",
    topics: ["Roma Antiga", "Império Romano", "Clássico"],
    pdf: require("../../assets/images/pdfs/historia/gibbon2.pdf"),
  },

  {
    id: 6,
    title: "A República de Platão (Livro Histórico)",
    author: "Platão",
    cover: require("../../assets/images/historia/republica.png"),
    description: "Obra política essencial para entender a civilização ocidental.",
    topics: ["Filosofia Antiga", "Política", "História"],
    pdf: require("../../assets/images/pdfs/historia/republica.pdf"),
  },

  {
    id: 7,
    title: "A Arte da Guerra",
    author: "Sun Tzu",
    cover: require("../../assets/images/historia/arte-da-guerra.png"),
    description: "Clássico milenar sobre estratégia, liderança e guerra.",
    topics: ["Estratégia", "China Antiga", "Militar"],
    pdf: require("../../assets/images/pdfs/historia/arte-da-guerra.pdf"),
  },

  {
    id: 8,
    title: "A Vida de Alexandre, o Grande",
    author: "Plutarco",
    cover: require("../../assets/images/historia/alexandre.png"),
    description: "Biografia clássica escrita por um dos maiores historiadores da Antiguidade.",
    topics: ["Biografia", "Grécia Antiga", "História Militar"],
    pdf: require("../../assets/images/pdfs/historia/alexandre.pdf"),
  },

  {
    id: 9,
    title: "História da Inglaterra",
    author: "David Hume",
    cover: require("../../assets/images/historia/hume.png"),
    description: "Um dos relatos históricos mais influentes sobre a formação britânica.",
    topics: ["Europa", "História Moderna", "Política"],
    pdf: require("../../assets/images/pdfs/historia/hume.pdf"),
  },

  {
    id: 10,
    title: "O Príncipe",
    author: "Maquiavel",
    cover: require("../../assets/images/historia/principe.png"),
    description: "Marco fundamental da história política e do pensamento moderno.",
    topics: ["Política", "Estado", "Renascimento"],
    pdf: require("../../assets/images/pdfs/historia/principe.pdf"),
  }
];

import { ImageSourcePropType } from "react-native";

export interface LogicBook {
  id: number;
  title: string;
  author: string;
  cover: ImageSourcePropType;
  description: string;
  topics: string[];
  pdf: any;
}

export const logicBooks: LogicBook[] = [
  {
    id: 1,
    title: "Organon — Volume 1",
    author: "Aristóteles",
    cover: require("../../assets/images/logica/organon1.png"),
    description: "Primeira parte da coleção fundamental sobre lógica aristotélica.",
    topics: ["Lógica Clássica", "Filosofia", "Aristóteles"],
    pdf: require("../../assets/images/pdfs/logica/organon1.pdf"),
  },

  {
    id: 2,
    title: "Organon — Volume 2",
    author: "Aristóteles",
    cover: require("../../assets/images/logica/organon2.png"),
    description: "Continuação dos tratados lógicos de Aristóteles.",
    topics: ["Silogística", "Filosofia Antiga", "Clássico"],
    pdf: require("../../assets/images/pdfs/logica/organon2.pdf"),
  },

  {
    id: 3,
    title: "Lógica",
    author: "Immanuel Kant",
    cover: require("../../assets/images/logica/kant-logica.png"),
    description: "Compilação clássica de seu curso de lógica aplicado à filosofia crítica.",
    topics: ["Filosofia Moderna", "Lógica", "Kant"],
    pdf: require("../../assets/images/pdfs/logica/kant-logica.pdf"),
  },

  {
    id: 4,
    title: "Novum Organum",
    author: "Francis Bacon",
    cover: require("../../assets/images/logica/novum-organum.png"),
    description: "Obra fundamental que estabelece o método científico moderno.",
    topics: ["Ciência", "Método", "Filosofia Moderna"],
    pdf: require("../../assets/images/pdfs/logica/novum-organum.pdf"),
  },

  {
    id: 5,
    title: "Lógica de Port-Royal",
    author: "Arnauld & Nicole",
    cover: require("../../assets/images/logica/port-royal.png"),
    description: "Um dos livros mais influentes de lógica na era moderna.",
    topics: ["Racionalismo", "Retórica", "Lógica Moderna"],
    pdf: require("../../assets/images/pdfs/logica/port-royal.pdf"),
  },

  {
    id: 6,
    title: "Tratado de Lógica",
    author: "John Stuart Mill",
    cover: require("../../assets/images/logica/mill.png"),
    description: "Base da lógica indutiva e do empirismo moderno.",
    topics: ["Indução", "Empirismo", "Filosofia Moderna"],
    pdf: require("../../assets/images/pdfs/logica/mill.pdf"),
  }
];

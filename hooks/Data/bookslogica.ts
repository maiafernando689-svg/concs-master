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
    title: "Organon",
    author: "Aristóteles",
    cover: require("../../assets/images/organon.jpeg"),
    description: "Primeira parte da coleção fundamental sobre lógica aristotélica.",
    topics: ["Lógica Clássica", "Filosofia", "Aristóteles"],
    pdf: require("../../assets/images/pdfs/organon.pdf"),
  },

 

  {
    id: 2,
    title: "Introdução a Lógica",
    author: "Immanuel Kant",
    cover: require("../../assets/images/introducaoalogica.jpg"),
    description: "Compilação clássica de seu curso de lógica aplicado à filosofia crítica.",
    topics: ["Filosofia Moderna", "Lógica", "Kant"],
    pdf: require("../../assets/images/pdfs/introducaoalogica.pdf"),
  },

  {
    id: 3,
    title: "Novum Organum",
    author: "Francis Bacon",
    cover: require("../../assets/images/novumorganum.jpeg"),
    description: "Obra fundamental que estabelece o método científico moderno.",
    topics: ["Ciência", "Método", "Filosofia Moderna"],
    pdf: require("../../assets/images/pdfs/novumorganum.pdf"),
  },

  {
    id: 4,
    title: "Lógica de Port-Royal",
    author: "Arnauld & Nicole",
    cover: require("../../assets/images/logicadeport.jpeg"),
    description: "Um dos livros mais influentes de lógica na era moderna.",
    topics: ["Racionalismo", "Retórica", "Lógica Moderna"],
    pdf: require("../../assets/images/pdfs/logicadeport.pdf"),
  },

  {
    id: 5,
    title: "Tratado de Filosofia",
    author: "John Stuart Mill",
    cover: require("../../assets/images/tratadodefilosofia.jpg"),
    description: "Base da lógica indutiva e do empirismo moderno.",
    topics: ["Indução", "Empirismo", "Filosofia Moderna"],
    pdf: require("../../assets/images/pdfs/tratadodefilosofia.pdf"),
  }
];

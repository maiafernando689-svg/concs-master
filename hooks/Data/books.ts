import { ImageSourcePropType } from "react-native";

export interface Book {
  id: number;
  title: string;
  author: string;
  cover: ImageSourcePropType;
  description: string;
  topics: string[];
  pdf: any;
}

export const books: Book[] = [
  {
    id: 1,
    title: "O Cortiço",
    author: "Aluísio Azevedo",
    cover: require("../../assets/images/cortico.jpg"),
    description: "Um dos maiores clássicos do naturalismo brasileiro.",
    topics: ["Naturalismo", "Literatura Brasileira", "Realismo Social"],
    pdf: require("../../assets/images/cortico.pdf"),
  },

  {
    id: 2,
    title: "Memórias Póstumas",
    author: "Machado de Assis",
    cover: require("../../assets/images/cortico.jpg"),
    description: "Um marco do realismo psicológico.",
    topics: ["Realismo", "Ironia", "Romance"],
    pdf: require("../../assets/images/cortico.pdf"),
  },
];
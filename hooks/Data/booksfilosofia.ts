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
    title: "A República",
    author: "Platão",
    cover: require("../../assets/images/republica.png"),
    description: "Um dos diálogos mais importantes de Platão sobre justiça e política.",
    topics: ["Filosofia", "Justiça", "Política"],
    pdf: require("../../assets/images/pdfs/republica.pdf"),
  },

  {
    id: 2,
    title: "Meditações",
    author: "Marco Aurélio",
    cover: require("../../assets/images/meditacoes.jpeg"),
    description: "Reflexões pessoais do imperador romano sobre o estoicismo.",
    topics: ["Estoicismo", "Filosofia Antiga", "Autodomínio"],
    pdf: require("../../assets/images/pdfs/meditacoes.pdf"),
  },

  {
    id: 3,
    title: "O Contrato Social",
    author: "Jean-Jacques Rousseau",
    cover: require("../../assets/images/ocontratosocial.png"),
    description: "Uma das obras fundamentais da filosofia política moderna.",
    topics: ["Filosofia Política", "Contrato Social", "Liberdade"],
    pdf: require("../../assets/images/pdfs/contratosocial.pdf"),
  },
  
  {
    id: 4,
    title: "historia da filosofia medieval",
    author: "Albert Camus",
    cover: require("../../assets/images/historiadafilosofiamedieval.jpg"),
    description: "Um ensaio filosófico essencial sobre o absurdo da existência.",
    topics: ["Existencialismo", "Absurdo", "Filosofia"],
    pdf: require("../../assets/images/pdfs/historiadafilosofiamedieval.pdf"),
  },

  {
    id: 5,
    title: "Poética",
    author: "Aristóteles",
    cover: require("../../assets/images/poetica.jpg"),
    description: "Estudo clássico sobre a arte dramática e literária.",
    topics: ["Filosofia", "Estética", "Artes"],
    pdf: require("../../assets/images/pdfs/poetica.pdf"),
  },

    {
  id: 6,
  title: "Leviatã",
  author: "Thomas Hobbes",
  cover: require("../../assets/images/leviata.png"),
  description: "A obra política fundamental que estabelece a teoria do Estado moderno.",
  topics: ["Filosofia Política", "Contratualismo", "Estado"],
  pdf: require("../../assets/images/pdfs/leviata.pdf"),
},

{
  id: 7,
  title: "Confissões",
  author: "Santo Agostinho",
  cover: require("../../assets/images/confissoes.png"),
  description: "A clássica autobiografia espiritual que marcou a filosofia cristã.",
  topics: ["Filosofia", "Cristianismo", "Autobiografia"],
  pdf: require("../../assets/images/pdfs/confissoes.pdf"),
},
];

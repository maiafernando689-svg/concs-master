import { ImageSourcePropType } from "react-native";

export interface LawBook {
  id: number;
  title: string;
  author: string;
  cover: ImageSourcePropType;
  description: string;
  topics: string[];
  pdf: any;
}

export const lawBooks: LawBook[] = [
  {
    id: 1,
    title: "As Leis",
    author: "Cícero",
    cover: require("../../assets/images/leis-cicero.png"),
    description: "Obra clássica sobre direito natural e moralidade na política.",
    topics: ["Direito Romano", "Filosofia do Direito", "Clássico"],
    pdf: require("../../assets/images/pdfs/leis-cicero.pdf"),
  },

  {
    id: 2,
    title: "Regras de Ulpiano",
    author: "Ulpiano",
    cover: require("../../assets/images/ulpiano.png"),
    description: "Um dos textos fundamentais do Direito Romano clássico.",
    topics: ["Direito Romano", "Jurisprudência", "História do Direito"],
    pdf: require("../../assets/images/pdfs/ulpiano.pdf"),
  },

  {
    id: 3,
    title: "Da República",
    author: "Cícero",
    cover: require("../../assets/images/republica-cicero.png"),
    description: "Discussão profunda sobre o Estado, a lei e a justiça.",
    topics: ["Política", "Direito", "República"],
    pdf: require("../../assets/images/pdfs/republica-cicero.pdf"),
  },

  {
    id: 4,
    title: "Leviatã",
    author: "Thomas Hobbes",
    cover: require("../../assets/images/leviata.png"),
    description: "Um dos pilares da teoria do Estado moderno.",
    topics: ["Contratualismo", "Estado", "Filosofia Política"],
    pdf: require("../../assets/images/pdfs/leviata.pdf"),
  },

  {
    id: 5,
    title: "Segundo Tratado sobre o Governo",
    author: "John Locke",
    cover: require("../../assets/images/locke.png"),
    description: "Fundamento do liberalismo e dos direitos individuais.",
    topics: ["Direito Natural", "Contratualismo", "Política"],
    pdf: require("../../assets/images/pdfs/locke.pdf"),
  },

  {
    id: 6,
    title: "O Espírito das Leis",
    author: "Montesquieu",
    cover: require("../../assets/images/espiritodasleis.png"),
    description: "Origem da separação dos poderes e base do constitucionalismo.",
    topics: ["Constitucionalismo", "Política", "Direito Comparado"],
    pdf: require("../../assets/images/pdfs/espiritodasleis.pdf"),
  },

  {
    id: 7,
    title: "O Homem Delinquente",
    author: "Cesare Lombroso",
    cover: require("../../assets/images/homem-delinquente.png"),
    description: "Obra marcante na criminologia e estudos sobre criminalidade.",
    topics: ["Criminologia", "Direito Penal", "Sociedade"],
    pdf: require("../../assets/images/pdfs/homem-delinquente.pdf"),
  },

  {
    id: 8,
    title: "Dos Delitos e das Penas",
    author: "Cesare Beccaria",
    cover: require("../../assets/images/delitos-e-penas.png"),
    description: "Marco histórico do direito penal moderno e abolicionista.",
    topics: ["Direito Penal", "Humanismo", "Garantismo"],
    pdf: require("../../assets/images/pdfs/delitos-e-penas.pdf"),
  },

  {
    id: 9,
    title: "O Capital",
    author: "Karl Marx",
    cover: require("../../assets/images/capital.png"),
    description: "Crítica da economia política e análise das bases do capitalismo.",
    topics: ["Economia", "Política", "Teoria Social"],
    pdf: require("../../assets/images/pdfs/capital.pdf"),
  },
];

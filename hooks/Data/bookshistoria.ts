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
    title: "História da Filosofia Medieval",
    author: "Tucídides",
    cover: require("../../assets/images/historiadafilosofiamedieval.jpg"),
    description: "Relato clássico e detalhado da guerra entre Atenas e Esparta.",
    topics: ["Grécia Antiga", "História Militar", "Clássico"],
    pdf: require("../../assets/images/pdfs/historiadafilosofiamedieval.pdf"),
  },

  {
    id: 2,
    title: "Historias Antigas",
    author: "Júlio César",
    cover: require("../../assets/images/historiasantigas.jpg"),
    description: "O próprio César narra suas campanhas militares pela Gália.",
    topics: ["Roma Antiga", "Militar", "Clássico"],
    pdf: require("../../assets/images/pdfs/historiasantigas.pdf"),
  },

  {
    id: 3,
    title: "A História da Arte",
    author: "Heródoto",
    cover: require("../../assets/images/historiadaarte.jpg"),
    description: "Considerado o pai da História, descreve o conflito greco-persa.",
    topics: ["Grécia Antiga", "História Geral", "Clássico"],
    pdf: require("../../assets/images/pdfs/historiadaarte.pdf"),
  },

  {
    id: 4,
    title: "Mulheres Intelectuais",
    author: "Edward Gibbon",
    cover: require("../../assets/images/mulheresintelectuais.jpg"),
    description: "Uma das maiores obras já escritas sobre o Império Romano.",
    topics: ["Roma Antiga", "História Geral", "Império Romano"],
    pdf: require("../../assets/images/pdfs/mulheresintelectuais.pdf"),
  },

  {
    id: 5,
    title: "Historia do Brasil",
    author: "Edward Gibbon",
    cover: require("../../assets/images/historiadobrasil.jpg"),
    description: "Continuação do estudo monumental de Gibbon.",
    topics: ["Roma Antiga", "Império Romano", "Clássico"],
    pdf: require("../../assets/images/pdfs/historiadobrasil.pdf"),
  },


  {
    id: 6,
    title: "A Arte da Guerra",
    author: "Sun Tzu",
    cover: require("../../assets/images/artedaguerra.jpg"),
    description: "Clássico milenar sobre estratégia, liderança e guerra.",
    topics: ["Estratégia", "China Antiga", "Militar"],
    pdf: require("../../assets/images/pdfs/aartedaguerra.pdf"),
  },

  {
    id: 7,
    title: "O rei creso",
    author: "Plutarco",
    cover: require("../../assets/images/oreicreso.jpg"),
    description: "Biografia clássica escrita por um dos maiores historiadores da Antiguidade.",
    topics: ["Biografia", "Grécia Antiga", "História Militar"],
    pdf: require("../../assets/images/pdfs/oreicreso.pdf"),
  },

  {
    id: 8,
    title: "O Príncipe",
    author: "Maquiavel",
    cover: require("../../assets/images/oprincipemaquiavel.webp"),
    description: "Marco fundamental da história política e do pensamento moderno.",
    topics: ["Política", "Estado", "Renascimento"],
    pdf: require("../../assets/images/pdfs/oprincipemaquiavel.pdf"),
  }
];

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
    cover: require("../../assets/images/cortiço.jpeg"),
    description: "Um dos maiores clássicos do naturalismo brasileiro.",
    topics: ["Naturalismo", "Literatura Brasileira", "Realismo Social"],
    pdf: require("../../assets/images/pdfs/cortico.pdf"),
  },

  {
    id: 2,
    title: "Memórias Póstumas",
    author: "Machado de Assis",
    cover: require("../../assets/images/bras-cubas.jpg"),
    description: "Um marco do realismo psicológico.",
    topics: ["Realismo", "Ironia", "Romance"],
    pdf: require("../../assets/images/pdfs/bras-cubas.pdf"),
  },

  {
    id: 3,
    title: "Moby Dick",
    author: "Herman Melville",
    cover: require("../../assets/images/moby.png"),
    description: "A épica caça à baleia branca.",
    topics: ["Aventura", "Marinheiros", "Obra Clássica"],
    pdf: require("../../assets/images/pdfs/moby.pdf"),
  },
  
  {
    id: 4,
    title: "viagens de Gulliver",
    author: "Jonathan Swift",
    cover: require("../../assets/images/gulliver2.png"),
    description: "As incríveis aventuras de Gulliver em terras fantásticas.",
    topics: ["Sátira", "Aventura", "Ficção"],
    pdf: require("../../assets/images/pdfs/gulliver2.pdf"),
  },
   {
    id: 5,
    title: "ilíada",
    author: "Homero",
    cover: require("../../assets/images/iliada.png"),
    description: "O épico poema grego sobre a Guerra de Troia.",
    topics: ["Épico", "Mitologia Grega", "Guerra"],
    pdf: require("../../assets/images/pdfs/iliadap.pdf"),
   },

   {
    id: 6,
    title: "Odisséia", 
    author: "Homero",
    cover: require("../../assets/images/odisseia.jpg"),
    description: "As aventuras de Odisseu em sua jornada de volta para casa.",
    topics: ["Épico", "Mitologia Grega", "Aventura"],
    pdf: require("../../assets/images/pdfs/odisseiap.pdf"),
   },
  
   {
    id: 7,
    title: "crime e castigo",
    author: "Fiódor Dostoiévski",
    cover: require("../../assets/images/crimeecastigo.png"),
    description: "Um mergulho profundo na mente de um assassino.", 
    topics: ["Psicologia", "Filosofia", "Romance"],
    pdf: require("../../assets/images/pdfs/crimeecastigo.pdf"),   

   },
  
 {
    id: 8,
    title: "ilha do tesouro",
    author: "Robert Louis Stevenson",
    cover: require("../../assets/images/ilhadotesouro.png"),
    description: "Uma emocionante aventura em busca de um tesouro escondido.",
    topics: ["Aventura", "Piratas", "Clássico"],
    pdf: require("../../assets/images/pdfs/ilhadotesouro.pdf"),
   },
 
   {
    id: 9,
    title: "Viagens de Gulliver 2", 
    author: "Jonathan Swift",
    cover: require("../../assets/images/gulliver2.png"),
    description: "As novas aventuras de Gulliver em terras fantásticas.",
    topics: ["Sátira", "Aventura", "Ficção"],
    pdf: require("../../assets/images/pdfs/gulliver2.pdf"),
   },
  
  {
    id: 10,
    title: "alice no país das maravilhas",  
    author: "Lewis Carroll",
    cover: require("../../assets/images/alice.png"),
    description: "As aventuras mágicas de Alice em um mundo encantado.",
    topics: ["Fantasia", "Aventura", "Clássico"],
    pdf: require("../../assets/images/pdfs/alice.pdf"),
  }
];
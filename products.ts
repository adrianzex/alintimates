import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";
import product10 from "@/assets/product-10.jpg";
import product11 from "@/assets/product-11.jpg";
import product12 from "@/assets/product-12.jpg";
import product13 from "@/assets/product-13.jpg";
import product14 from "@/assets/product-14.jpg";
import product15 from "@/assets/product-15.jpg";





export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[]; 
  category: string;
  sizes: string[];
  details: string[];
}


export const products: Product[] = [
  {
    id: "1",
    name: "Conjunto ravena de tule bordado preto",
    price: 69.90,
    description: "Sutiã em renda francesa com acabamento premium. Design delicado que valoriza a silhueta com conforto e elegância.",
    images: [product1],
    category: "Conjuntos",
    sizes: ["P", "M", "G", "GG"],
    details: [ "Bojo removível", "Alças ajustáveis", "Fecho traseiro duplo"],
  },
  {
    id: "2",
    name: "Conjunto elegance preto",
    price: 119.90,
    description: "Conjunto clássico em renda negra com detalhes sofisticados. Peça atemporal para mulheres que valorizam a elegância.",
    images: [product2],
    category: "Conjuntos",
    sizes: ["P", "M", "G", "GG"],
    details: ["Renda premium", "Tecido macio ao toque", "Elasticidade confortável", "Lavagem delicada"],
  },
  {
    id: "3",
    name: "Corset azul sereno",
    price: 119.90,
    description: "Conjunto clássico em renda negra com detalhes sofisticados. Peça atemporal para mulheres que valorizam a elegância.",
    images: [product3],
    category: "Corset",
    sizes: ["P", "M", "G", "GG"],
    details: ["Renda premium", "Tecido macio ao toque", "Elasticidade confortável", "Lavagem delicada"],
  },
  {
    id: "4",
    name: "Conjunto Bicolor Azul Marinho",
    price: 59.90,
    description: "Conjunto especial em renda branca com acabamento artesanal. Ideal para momentos inesquecíveis.",
    images: [product4],
    category: "Conjuntos",
    sizes: ["P", "M", "G", "GG"],
    details: ["Renda artesanal", "Detalhes florais", "Acabamento premium", "Embalagem especial"],
  },
  {
    id: "5",
    name: "Conjunto bicolor ceú azul",
    price: 59.90,
    description: "Espartilho em cetim com detalhes em renda. Peça statement que combina sensualidade e sofisticação.",
    images: [product5],
    category: "Conjuntos",
    sizes: ["P", "M", "G"],
    details: ["Cetim acetinado", "Barbatanas flexíveis", "Fechamento frontal", "Renda nas bordas"],
  },
  {
    id: "6",
    name: "Conjunto dama de vermelho",
    price: 59.90,
    description: "Camisola em seda sintética com caimento perfeito. Luxo e conforto para suas noites.",
    images: [product6],
    category: "Conjuntos",
    sizes: ["P", "M", "G", "GG"],
    details: ["Seda sintética premium", "Alças finas ajustáveis", "Caimento fluido", "Comprimento midi"],
  },
  {
    id: "7",
    name: "Conjunto ravena de tule bordado branco com sandia",
    price: 69.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product7],
    category: "Conjuntos",
    sizes: ["P", "M", "G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "8",
    name: "Corset de tule bordado jardim encantado",
    price: 99.90,
    description: "Conforto e Naturalidade: Modelo sem bojo, priorizando o caimento natural, com forro da calcinha em 100% algodãoo, garantindo conforto o dia todo, alças regulaveis e removíveis para versatilidade no uso.",
    images: [product8],
    category: "Corset",
    sizes: ["M"],
    details: ["Renda francesa", "Detalhes douradons", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "9",
    name: "Conjunto ravena de tule bordado verde",
    price: 69.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product9],
    category: "Conjuntos",
    sizes: [ "M" ],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "10",
    name: "Conjunto renda medusa",
    price: 59.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product10],
    category: "Conjuntos",
    sizes: ["P", "M", "G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "11",
    name: "Camisola flor de lavanda",
    price: 59.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product11],
    category: "Baby Doll",
    sizes: ["P", "M", "G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "12",
    name: "Conjunto black",
    price: 59.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product12],
    category: "Conjuntos",
    sizes: ["P", "M", "G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "13",
    name: "Conjunto c/cropped obssesed",
    price: 59.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product13],
    category: "Conjuntos",
    sizes: ["P", "M", "G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "14",
    name: "Sutiã reforçado renda, plus size ",
    price: 59.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product14],
    category: "Sutiãs",
    sizes: ["P", "M", "G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "15",
    name: "Corset angel branco",
    price: 119.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product15],
    category: "Corset",
    sizes: ["P", "M", "G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  }
];

export const categories = ["Todos", "Sutiãs", "Conjuntos", "Corset", "Baby Doll" ,"Pijamas" , "Linha Noite" , "Pantufas"];

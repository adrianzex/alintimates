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
import product16 from "@/assets/product-16;jpg";
import product17 from "@/assets/product-17.jpg";
import product18 from "@/assets/product-18.jpg";
import product19 from "@/assets/product-19.jpg";
import product20 from "@/assets/product-20.jpg";
import product21 from "@/assets/product-21.jpg";
import product22 from "@/assets/product-22.jpg";
import product23 from "@/assets/product-23.jpg";
import product24 from "@/assets/product-24.jpg";
import product25 from "@/assets/product-25.jpg";
import product26 from "@/assets/product-26.jpg";
import product27 from "@/assets/product-27.jpg";
import product28 from "@/assets/product-28.jpg";
import product29 from "@/assets/product-29.jpg";
import product30 from "@/assets/product-30.jpg";
import product31 from "@/assets/product-31.jpg";
import product32 from "@/assets/product-32.jpg";
import product33 from "@/assets/product-33.jpg";
import product34 from "@/assets/product-34.jpg";
import product35 from "@/assets/product-35.jpg";
import product36 from "@/assets/product-36.jpg";
import product37 from "@/assets/product-37.jpg";








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
    sizes: ["G"],
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
  },
  {
  id: "16",
    name: "Conjunto obsessão premium preto ",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product16],
    category: "Conjuntos",
    sizes: ["M"],
    details: ["Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "17",
    name: "Conjunto de tule bordado Isis ",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product17],
    category: "Conjuntos",
    sizes: ["M", "G"],
    details: [ "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "18",
    name: "Conjunto angel vermelho disponível ",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product18],
    category: "Conjuntos",
    sizes: ["M"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "19",
    name: "Sutiã reforçado vermelho disponível",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product19],
    category: "Sutiãs",
    sizes: ["GG"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "20",
    name: "Sutiã reforçado renda vinho ",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product20],
    category: "Sutiãs",
    sizes: ["G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "21",
    name: "Camisola de renda heloá ",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product21],
    category: "Camisolas",
    sizes: ["M"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "22",
    name: "Conjunto Laila vermelho",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product22],
    category: "Conjuntos",
    sizes: ["G", "GG"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "23",
    name: "Conjunto elegance P&B ",
    price: 119.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product23],
    category: "Conjuntos",
    sizes: ["G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "24",
    name: "Conjunto ravena de renda pink ",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product24],
    category: "Conjuntos",
    sizes: ["P"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "25",
    name: "Conjunto ravena de renda vermelho",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product25],
    category: "Conjuntos",
    sizes: ["M"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "26",
    name: "Camisola sensualité + calcinha",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product26],
    category: "Camisolas",
    sizes: ["G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "27",
    name: "Conjunto rosa romance",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product27],
    category: "Conjuntos",
    sizes: ["P" ],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "28",
    name: "Conjunto elegance pink",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product28],
    category: "Conjuntos",
    sizes: ["G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "29",
    name: "Sutiã reforçado azul marinho",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product29],
    category: "Sutiãs",
    sizes: ["GG"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "30",
    name: "Conjunto preto floral",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product30],
    category: "Conjuntos",
    sizes: ["G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "31",
    name: "Conjunto Lara ",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product31],
    category: "Conjuntos",
    sizes: ["M"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "32",
    name: "Conjunto seduza-me",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product32],
    category: "Conjuntos",
    sizes: ["G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "33",
    name: "Conjunto Laila branco ",
    price: 99.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product33],
    category: "Conjuntos",
    sizes: ["G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "34",
    name: "Sutiã reforçado azul frozen ",
    price: 59.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product34],
    category: "Sutiãs",
    sizes: ["G", "M"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "35",
    name: "Baby doll cherry ",
    price: 59.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product35],
    category: "Baby Doll" ,
    sizes: ["G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "36",
    name: "Conjunto sedução ",
    price: 59.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product36],
    category: "Conjuntos",
    sizes: ["G"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  },
  {
  id: "37",
    name: "Conjunto sedução",
    price: 59.90,
    description: "Variação do nosso best-seller com detalhes exclusivos em renda e acabamento dourado.",
    images: [product37],
    category: "Conjuntos",
    sizes: ["M"],
    details: ["Renda francesa", "Detalhes dourados", "Bojo estruturado", "Conforto o dia todo"],
  }
  


];

export const categories = ["Todos", "Sutiãs", "Conjuntos", "Corset", "Baby Doll" ,"Pijamas" , "Linha Noite" , "Pantufas"];

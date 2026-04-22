import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Heart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const isNew = product.id === "1" || product.id === "4";
  const isBestseller = product.id === "6";

  return (
    <Link
      to={`/produto/${product.id}`}
      className="group block animate-reveal"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden aspect-[3/4] mb-5 bg-muted">
        
         <img
          src={product.images[0]}
          loading="lazy"
          width={800}
          height={1024}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
        />

        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badges */}
        {isNew && (
          <span className="absolute top-3 left-3 bg-gold text-accent-foreground text-[9px] tracking-[0.2em] uppercase font-sans font-semibold px-3 py-1">
            Novo
          </span>
        )}
        {/* Badge de Esgotado */}
{(product.id === "1" || product.id === "4") && (
  <span className="absolute top-3 left-3 bg-[#8B0000] text-white text-[9px] tracking-[0.2em] uppercase font-sans font-semibold px-2 py-0.5 z-10">
    Esgotado
  </span>
)}
{/* Badge de Esgotado */}
{(product.id === "1" || product.id === "3") && (
  <span className="absolute top-3 left-3 bg-[#8B0000] text-white text-[9px] tracking-[0.2em] uppercase font-sans font-semibold px-2 py-0.5 z-10">
    Esgotado
  </span>
)}{/* Badge de Esgotado */}
{(product.id === "1" || product.id === "2") && (
  <span className="absolute top-3 left-3 bg-[#8B0000] text-white text-[9px] tracking-[0.2em] uppercase font-sans font-semibold px-2 py-0.5 z-10">
    Esgotado
  </span>
)}
{/* Badge de Esgotado */}
{(product.id === "1" || product.id === "5") && (
  <span className="absolute top-3 left-3 bg-[#8B0000] text-white text-[9px] tracking-[0.2em] uppercase font-sans font-semibold px-2 py-0.5 z-10">
    Esgotado
  </span>
)}
{/* Badge de Esgotado */}
{(product.id === "1" || product.id === "7") && (
  <span className="absolute top-3 left-3 bg-[#8B0000] text-white text-[9px] tracking-[0.2em] uppercase font-sans font-semibold px-2 py-0.5 z-10">
    Esgotado
  </span>
)}{/* Badge de Esgotado */}
{(product.id === "1" || product.id === "9") && (
  <span className="absolute top-3 left-3 bg-[#8B0000] text-white text-[9px] tracking-[0.2em] uppercase font-sans font-semibold px-2 py-0.5 z-10">
    Esgotado
  </span>
)}
{/* Badge de Esgotado */}
{(product.id === "1" || product.id === "10") && (
  <span className="absolute top-3 left-3 bg-[#8B0000] text-white text-[9px] tracking-[0.2em] uppercase font-sans font-semibold px-2 py-0.5 z-10">
    Esgotado
  </span>
)}{/* Badge de Esgotado */}
{(product.id === "1" || product.id === "11") && (
  <span className="absolute top-3 left-3 bg-[#8B0000] text-white text-[9px] tracking-[0.2em] uppercase font-sans font-semibold px-2 py-0.5 z-10">
    Esgotado
  </span>
)}
{/* Badge de Esgotado */}
{(product.id === "1" || product.id === "12") && (
  <span className="absolute top-3 left-3 bg-[#8B0000] text-white text-[9px] tracking-[0.2em] uppercase font-sans font-semibold px-2 py-0.5 z-10">
    Esgotado
  </span>
)}
{/* Badge de Esgotado */}
{(product.id === "1" || product.id === "15") && (
  <span className="absolute top-3 left-3 bg-[#8B0000] text-white text-[9px] tracking-[0.2em] uppercase font-sans font-semibold px-2 py-0.5 z-10">
    Esgotado
  </span>
)}
        {/* Quick actions on hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="bg-background/90 backdrop-blur-sm w-9 h-9 flex items-center justify-center hover:bg-gold hover:text-accent-foreground transition-colors">
            <Heart className="w-4 h-4" />
          </div>
        </div>

        {/* "Ver produto" label on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <span className="block text-center bg-background/90 backdrop-blur-sm text-foreground text-[10px] tracking-[0.3em] uppercase font-sans py-3">
            Ver Detalhes
          </span>
        </div>
      </div>

      <div className="font-sans text-center space-y-2 px-2">
        <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{product.category}</p>
        <h3 className="font-serif text-base md:text-lg tracking-wider font-normal">{product.name}</h3>
        <div className="flex items-center justify-center gap-2">
          <p className="text-primary font-variant-numeric text-sm">R$ {product.price.toFixed(2)}</p>
          <span className="text-[10px] text-muted-foreground">ou 2x de R$ {(product.price / 2).toFixed(2)} no cartão</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

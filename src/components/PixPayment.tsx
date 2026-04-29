import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface PixPaymentProps {
  price: number;
  title: string;
}

const PixPayment = ({ price, title }: PixPaymentProps) => {
  const [copied, setCopied] = useState(false);

  const pixKey = "5549991127702";
  const pixKeyType = "CPF";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="outline"
      onClick={handleCopy}
      className="gap-2 tracking-[0.15em] uppercase text-[10px] py-5 border-foreground/15 hover:border-gold hover:text-gold font-sans"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copiado!" : "Copiar Pix"}
    </Button>
  );
};

export default PixPayment;
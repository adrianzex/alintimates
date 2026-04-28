import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface PixPaymentProps {
  amount: number;
  productName: string;
}

const PixPayment = ({ amount, productName }: PixPaymentProps) => {
  const [copied, setCopied] = useState(false);
  const pixCode = `00020126580014br.gov.bcb.pix0136allintimatesshop@email.com5204000053039865404${amount.toFixed(2)}5802BR5913ALL INTIMATES6009SAO PAULO62140510${Date.now()}6304`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full tracking-wider uppercase text-xs font-sans border-foreground/20 hover:bg-foreground/5 py-5">
          Pagar com Pix
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl tracking-wider text-center">Pagamento Pix</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4 text-center font-sans">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{productName}</p>
            <p className="text-2xl font-semibold text-primary">R$ {amount.toFixed(2)}</p>
          </div>

          <div className="bg-muted p-8 rounded-sm flex items-center justify-center">
            <div className="w-40 h-40 bg-foreground/10 rounded-sm flex items-center justify-center">
              <div className="grid grid-cols-5 gap-1">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className={`w-5 h-5 ${Math.random() > 0.4 ? "bg-foreground" : "bg-transparent"}`} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-2">Ou copie o código Pix:</p>
            <div className="bg-muted p-3 rounded-sm text-xs break-all text-muted-foreground">
              {pixCode.substring(0, 60)}...
            </div>
          </div>

          <Button onClick={handleCopy} className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Código Copiado!" : "Copiar Código Pix"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PixPayment;

// @ts-nocheck
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const PixPayment = ({ price, title }: any) => {
  const [copied, setCopied] = useState(false);
  const [qrCode, setQrCode] = useState("");
  const [pixCode, setPixCode] = useState("");

  const gerarPix = async () => {
    try {
      const res = await fetch("/api/pix", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          valor: price,
          descricao: title
        })
      });

      const data = await res.json();

      setQrCode(data.img);
      setPixCode(data.qr);

    } catch (err) {
      console.error("Erro ao gerar Pix", err);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full border p-4 rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">
        Valor: <span className="font-bold text-black">R$ {price}</span>
      </p>

      <button 
        onClick={gerarPix}
        className="w-full bg-black text-white py-2 rounded mb-4"
      >
        PAGAR COM PIX
      </button>

      {qrCode && (
        <div className="text-center mb-4">
          <img 
            src={`data:image/png;base64,${qrCode}`} 
            className="mx-auto w-40 h-40"
          />
        </div>
      )}

      {pixCode && (
        <div className="bg-gray-100 p-3 rounded flex justify-between items-center border">
          <code className="text-sm break-all">{pixCode}</code>
          <button 
            onClick={handleCopy}
            className="ml-2 p-2 hover:bg-gray-200 rounded-full"
          >
            {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
          </button>
        </div>
      )}

      <p className="text-[10px] text-gray-400 mt-2 text-center uppercase">
        Escaneie o QR Code ou copie o código Pix
      </p>
    </div>
  );
};
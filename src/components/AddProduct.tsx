import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { PlusCircle } from 'lucide-react';

export default function AddProduct() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [qtd, setQtd] = useState('');

  const salvar = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase
      .from('Estoque')
      .insert([{ nome, preco: parseFloat(preco), qtd: parseInt(qtd) }]);

    if (error) alert("Erro: " + error.message);
    else {
      alert("Produto salvo!");
      setNome(''); setPreco(''); setQtd('');
    }
  };

  return (
    <form onSubmit={salvar} className="bg-white p-6 rounded-xl border shadow-sm space-y-4">
      <h3 className="text-lg font-bold flex items-center gap-2 text-slate-800">
        <PlusCircle className="text-pink-500" size={20}/> Novo Item
      </h3>
      <input type="text" placeholder="Nome do produto" value={nome} onChange={e => setNome(e.target.value)} className="w-full p-2 border rounded-md" required />
      <div className="flex gap-2">
        <input type="number" placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} className="w-1/2 p-2 border rounded-md" required />
        <input type="number" placeholder="Qtd" value={qtd} onChange={e => setQtd(e.target.value)} className="w-1/2 p-2 border rounded-md" required />
      </div>
      <button type="submit" className="w-full bg-slate-900 text-white py-2 rounded-md font-bold hover:bg-slate-800 transition-all">
        Adicionar ao Estoque
      </button>
    </form>
  );
}
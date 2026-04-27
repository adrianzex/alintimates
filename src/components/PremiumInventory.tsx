import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Package, Trash2 } from 'lucide-react';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  qtd: number;
}

export default function PremiumInventory() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    const { data, error } = await supabase
      .from('Estoque')
      .select('*')
      .order('id', { ascending: false });

    if (!error && data) {
      setProdutos(data);
    }
    setLoading(false);
  };

  const excluir = async (id: number) => {
    if (!confirm('Excluir produto?')) return;
    await supabase.from('Estoque').delete().eq('id', id);
    carregarProdutos();
  };

  if (loading) return <div className="text-center p-8">Carregando...</div>;

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="p-4 border-b bg-slate-50 flex items-center gap-2">
        <Package className="text-pink-500" size={20} />
        <h2 className="text-lg font-bold text-slate-800">Inventário Premium</h2>
      </div>
      
      {produtos.length === 0 ? (
        <div className="p-8 text-center text-slate-500">Nenhum produto cadastrado</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-100 text-slate-600 text-sm">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Nome</th>
                <th className="p-3 text-right">Preço</th>
                <th className="p-3 text-center">Qtd</th>
                <th className="p-3 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((p) => (
                <tr key={p.id} className="border-t hover:bg-slate-50">
                  <td className="p-3 text-slate-500">#{p.id}</td>
                  <td className="p-3 font-medium text-slate-800">{p.nome}</td>
                  <td className="p-3 text-right text-green-600 font-mono">R$ {p.preco.toFixed(2)}</td>
                  <td className="p-3 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs ${p.qtd > 10 ? 'bg-green-100 text-green-700' : p.qtd > 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                      {p.qtd}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button className="p-1 text-slate-400 hover:text-red-500" onClick={() => excluir(p.id)}>
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
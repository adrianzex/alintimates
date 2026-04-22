import { useEffect, useState } from 'react'
import { supabase } from './supabase'

export default function Estoque() {
  const [itens, setItens] = useState<any[]>([])

  useEffect(() => {
    const buscarDados = async () => {
      const { data } = await supabase.from('Estoque').select('*')
      if (data) setItens(data)
    }
    buscarDados()
  }, [])

  return (
    <div className="p-8 bg-white min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4 text-pink-600">Estoque Al Intimates</h1>
      <div className="grid gap-4">
        {itens.length === 0 && <p>Nenhum produto encontrado. Cadastre no Supabase!</p>}
        {itens.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-5 border rounded-xl shadow-sm bg-gray-50">
            <div>
              <p className="font-bold text-lg uppercase">{item.Nome}</p>
              <p className="text-gray-500">R$ {item.Preço}</p>
            </div>
            <div className="bg-white p-3 rounded-lg border text-center min-w-[80px]">
              <p className="text-[10px] uppercase text-gray-400 font-bold">Qtd</p>
              <p className="text-2xl font-black">{item.Quantidade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
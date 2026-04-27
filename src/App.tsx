import AddProduct from './components/AddProduct';
import PremiumInventory from './components/PremiumInventory';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter">
            ALLINTIMATES <span className="text-pink-500 font-light">ADMIN</span>
          </h1>
          <p className="text-slate-500 text-sm">Painel de Controle em Tempo Real</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <AddProduct />
          </div>
          <div className="lg:col-span-3">
            <PremiumInventory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
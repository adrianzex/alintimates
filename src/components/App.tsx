import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Index from "./Index";
import Catalog from "./Catalog";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";
import Estoque from "./Estoque";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <CartDrawer />
          <WhatsAppFloat />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/admin-estoque" element={<Estoque />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

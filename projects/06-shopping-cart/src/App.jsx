import { useProducts } from './Hooks/useProducts';
import { useFilters } from './Hooks/useFilters';
import { Products } from "./components/Products"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Cart } from './components/Cart';
import { CartProvider } from './context/cartProvider';

function App() {

  const { products, loading, error } = useProducts();
  const { filterProducts } = useFilters({ products });
 
  const FilterProducts = filterProducts(products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;
  
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={FilterProducts}/>
      <Footer />
    </CartProvider>
  )
}

export default App

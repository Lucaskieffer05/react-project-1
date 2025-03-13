import { useProducts } from './Hooks/useProducts';
import { useFilters } from './Hooks/useFilters';
import { Products } from "./components/Products"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {

  const { products, loading, error } = useProducts();
  const { filters, setFilters, filterProducts } = useFilters({ products });
 
  const FilterProducts = filterProducts(products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;
  
  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={FilterProducts}/>
      <Footer filters={filters}/>
    </>
  )
}

export default App

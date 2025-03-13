import { Products } from "./components/Products"
import { useProducts } from './Hooks/useProducts';
import { useFilters } from './Hooks/useFilters';
import { Header } from "./components/Header";

function App() {

  const { products, loading, error } = useProducts();
  const { setFilters, filterProducts } = useFilters({ products });
 
  const FilterProducts = filterProducts(products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;
  
  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={FilterProducts}/>
    </>
  )
}

export default App

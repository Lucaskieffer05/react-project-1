import "./Filters.css"
import { useFilters } from "../Hooks/useFilters";
import { useId } from "react";

export function Filters() {
    const {filters, setFilters} = useFilters();
    
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const cambioDePrecio = (event) => {
        setFilters(prevState => ({...prevState, minPrice: event.target.value}));
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({...prevState, category: event.target.value}));
    }

    return(
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio Minimo</label>
                <input
                    value={filters.minPrice} 
                    type="range" 
                    name="" 
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={cambioDePrecio}/>
                <output>${filters.minPrice}</output>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="beauty">Belleza</option>
                    <option value="fragrances">Fragancias</option>
                    <option value="furniture">Muebles</option>
                    <option value="groceries">Comestible</option>
                </select>
            </div>
        </section>

    )
}
import "./Filters.css"
import { useState, useId } from "react";

export function Filters({OnChange}) {
    const [minPrice, setMinPrice] = useState(0);

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const cambioDePrecio = (event) => {
        //algo raro
        setMinPrice(event.target.value); 
        OnChange(prevState => ({...prevState, minPrice: event.target.value}));
    }

    const handleChangeCategory = (event) => {
        OnChange(prevState => ({...prevState, category: event.target.value}));
    }

    return(
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio Minimo</label>
                <input 
                    type="range" 
                    name="" 
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={cambioDePrecio}/>
                <output>${minPrice}</output>
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
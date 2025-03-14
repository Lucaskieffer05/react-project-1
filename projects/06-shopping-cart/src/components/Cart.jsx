import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import { useId } from "react"; 
import "./Cart.css";
import { useCart } from "../Hooks/useCart";

function CartItem({thumbnail, price, title, quantity, description, addToCart}) {
    return (
        <li>
            <img src={thumbnail} alt={description} />
            
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>Cantidad: {quantity}</small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart(){
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return(
        <>
            <label htmlFor={cartCheckboxId} className="cart-button">
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem 
                            key={product.id}
                            {...product}
                            addToCart={() => addToCart(product)}
                        />
                    ))}
                </ul>

                <footer>
                    <button onClick={clearCart}>
                        <ClearCartIcon />
                        Clear Cart
                    </button>
                </footer>

            </aside>
        </>
    )
}
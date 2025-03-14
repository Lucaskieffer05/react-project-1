import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../Hooks/useCart';

export function Products({products}){
    const { addToCart, removeFromCart ,cart} = useCart();

    const checkProductInCart = (productId) => {
        return cart.some(item => item.id === productId);
    }

    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    const IsProductInCart = checkProductInCart(product.id);
                    return (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.description} />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}                            
                        </div>
                        <div>
                            <button 
                                className={`button-add-remove-card ${IsProductInCart ? 'remove' : 'add'}`}
                                onClick={() => {IsProductInCart ? removeFromCart(product) : addToCart(product)}}>
                                {IsProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon />}
                            </button>
                        </div>
                    </li>
                )})}
            </ul>
        </main>
    )
} 
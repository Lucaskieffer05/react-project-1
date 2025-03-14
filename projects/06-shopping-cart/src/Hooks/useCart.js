import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const useCart = () => {
    const content = useContext(CartContext);
    if (content === undefined) { // SI SALE UNDEFINED, ES PORQUE NO SE ENCUENTRA EL PROVIDER
        throw new Error("useCart must be used within a CartProvider");
    }
    return content;
}
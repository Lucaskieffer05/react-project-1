

export const cartInicialState = JSON.parse(localStorage.getItem('cart')) || [];

export const updateLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const cartReducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case 'ADD_TO_CART':{
            const { id } = payload;
            const productInCartIndex = state.findIndex(
                (item) => item.id === id
            );
            if(productInCartIndex >= 0){
                const newCart = structuredClone(state);
                newCart[productInCartIndex].quantity++;
                updateLocalStorage(newCart);
                return newCart;
            }
            
            const newState = [
                ...state, 
                {
                    ...payload, 
                    quantity: 1
                }
            ];
            updateLocalStorage(newState);
            return newState;
        }
        case 'CLEAR_CART':
            return cartInicialState;
            
        case 'REMOVE_FROM_CART':{
            const { id } = payload
            const newState = state.filter((item) => item.id !== id);
            updateLocalStorage(newState);
            return newState;
        }
        default:
            
    }
    return state;
}
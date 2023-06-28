import { createStore } from "solid-js/store";
import { createContext, useContext } from "solid-js";

export const CartContext = createContext();

export function CartContextProvider(props) {
    const [items, setItems] = createStore([
        { title: 'test product', quantity: 2, id: 10, price: 15 },
        { title: 'test product 2', quantity: 3, id: 1, price: 105 }
    ]);

    return (
        <CartContext.Provider value={{ items, setItems }}>
            {props.children}
        </CartContext.Provider>
    )
};

export function useCartContext() {
    return useContext(CartContext)
};

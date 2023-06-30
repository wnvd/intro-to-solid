import { createSignal } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";
import { useCartContext } from "./context/CartContext.jsx";
function App() {
    const [darkTheme, setDarkTheme] = createSignal(false);
    function toggleTheme() {
        setDarkTheme(!darkTheme());
    }

    const { items } = useCartContext();

    const quantity = () => {
        return items.reduce((acc, curr) => {
            return acc + curr.quantity;
        }, 0)
    }

    return (
        // single root template
        <div class="container m-auto">
            <header
                class="my-4 p-4 text-xl flex items-center gap-4"
                classList={{ "bg-blue-900": darkTheme(), "text-white": darkTheme() }}
            >
                <span
                    class="material-symbols-outlined cursor-pointer"
                    onClick={toggleTheme}
                >light_mode</span>
                <A href="/">Home</A>
                <A href="/cart">Cart ({quantity()})</A>
            </header>
            <div class="w-full h-24 bg-blue-800">
                <h1 class="text-white text-7xl"></h1>
            </div>
            <Routes>
                <Route path="/" component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/products/:id" component={Product} />
            </Routes>
        </div>
    );
}

export default App;

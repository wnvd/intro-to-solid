import { createSignal } from "solid-js";
import Card from "./components/Card.jsx";
function App() {
    const [darkTheme, setDarkTheme] = createSignal(false);
    function toggleTheme() {
        setDarkTheme(!darkTheme())
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
            </header>
            <div class="w-full h-24 bg-blue-800">
                <h1 class="text-white text-7xl">merch store</h1>
            </div>
            <div class="grid grid-cols-4 gap-10 my-4">
                <Card rounded={true} flat={false} >
                    <h1>Ninja Tee, Black</h1>
                    <button class="btn">View</button>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <p>399</p>
                </Card>
                <Card rounded={true} flat={false} >
                    <h1>Ninja Tee, Black</h1>
                    <button class="btn">View</button>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <p>399</p>
                </Card>
                <Card rounded={true} flat={false} >
                    <h1>Ninja Tee, White</h1>
                    <button class="btn">View</button>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <p>399</p>
                </Card>
            </div>
        </div>
    );
}

export default App;

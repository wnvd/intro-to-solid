import banner from "./assets/banner.png";
import Card from "./components/Card.jsx";
function App() {
    const width = window.innerWidth;
    return (
        // single root template
        <div class="container m-auto">
            <header>
                <h1 class="">Merch Store</h1>
            </header>
        <div class="w-full h-24 bg-blue-500">
        </div>
            <div class="grid grid-cols-4 gap-10 my-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default App;

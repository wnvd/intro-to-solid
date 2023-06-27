import banner from "./assets/banner.png";
import Card from "./components/Card.jsx";
function App() {
    const width = window.innerWidth;
    return (
        // single root template
        <div>
            <header>
                <h1>Merch Store</h1>
            </header>
            <img src={banner} alt="banner image" width={width} height="300" />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default App;

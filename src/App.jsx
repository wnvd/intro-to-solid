import Card from "./components/Card.jsx";
function App() {
    return (
        // single root template
        <div class="container m-auto">
            <header>
                <h1 class="">Merch Store</h1>
            </header>
            <div class="w-full h-24 bg-blue-800">
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

import Card from "../components/Card.jsx";

export default function Home() {
    return (
        <div class="grid grid-cols-4 gap-10 my-4">
            <Card rounded={true} flat={false} >
                <h1>Ninja Tee, Black</h1>
                <button class="btn">View</button>
                <p>It is a long established fact that a reader will be</p>
                <p>399</p>
            </Card>
            <Card rounded={true} flat={false} >
                <h1>Ninja Tee, Black</h1>
                <button class="btn">View</button>
                <p>It is a long established fact that a reader will</p>
                <p>399</p>
            </Card>
            <Card rounded={true} flat={false} >
                <h1>Ninja Tee, White</h1>
                <button class="btn">View</button>
                <p>It is a long established fact that a reader will be</p>
                <p>399</p>
            </Card>
        </div>

    )
}

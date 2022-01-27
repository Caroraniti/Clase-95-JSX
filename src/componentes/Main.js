import "../styles/Main.css";
import Card from "./Card";

const Main = () => {
    return (
        <main className="main">
            <h1>Bienvenidas a React</h1>
            <div className="tarjetas">
                <Card />
                <Card />
                <Card />
            </div>


        </main>
    )
}


export default Main;
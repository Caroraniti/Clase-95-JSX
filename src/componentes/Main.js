import "../styles/Main.css";
import Card from "./Card";

const Main = () => {
    return (
        <main className="main">
            <h1>Bienvenidas a React</h1>
            <div className="tarjetas">

                <Card
                    nombre="Rita"
                    imagen="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg"
                />

                <Card
                    nombre="Trufa"
                    imagen="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=_3VnSPSl"
                />


                <Card
                    nombre="Misha"
                    imagen="https://lokiero.gt/wp-content/uploads/2020/04/11.jpg"
                />

            </div>


        </main>
    )
}


export default Main;
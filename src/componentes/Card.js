import "../styles/Card.css"

const Card = (props) => {
    return ( <article className = "card">
            <h2>{props.nombre}</h2>
            <p>Tarjeta</p>
            <img src= {props.imagen} />
        </article>
    )
}


export default Card;



//Los parametros de un componente en react se llaman PROPS (propiedades)

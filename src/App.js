import "./App.css";
import Nav from "./componentes/Nav";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import Button from "./componentes/Button"

const App = () => {
  return (
    <div className = "contenedor">
      <Nav />
      <Main />
      <Button mensaje="Hola" color="rojo"/>
      <Button mensaje="Chau" color="azul"/>
      <Button mensaje="???" color="violeta" />
      <Footer />
    </div>
  )
}

export default App
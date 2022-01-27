import "./App.css";
import Nav from "./componentes/Nav";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";

const App = () => {
  return (
    <div className = "contenedor">
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App
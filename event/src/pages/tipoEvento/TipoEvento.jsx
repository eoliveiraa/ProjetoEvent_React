import "./TipoEvento.css"
import { Fragment } from "react";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro";


const TipoEvento = () => {
    return (
        <Fragment>
            <Header/>
            <main>
               <Cadastro titulo="Tipo De Evento" visivel="none"/> 
            </main>
            <Footer/>
        </Fragment>
    )
}

export default TipoEvento;
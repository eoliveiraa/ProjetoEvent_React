import "./TipoEvento.css"
import { Fragment } from "react";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro";
import Listagem from "../../components/lista/Lista";
import banner from "../../assets/img/tipoevento.svg"



const TipoEvento = () => {
    return (
        <Fragment>
            <Header/>
            <main>
               <Cadastro titulo="Tipo De Evento" visivel="none" 
                 imagem={banner} placeholder="Titulo"/> 
               <Listagem tituloLista= "Lista Tipo De Eventos" visivel="none"/>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default TipoEvento;
import "./CadastroEvento.css";
import { Fragment } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Listagem from "../../components/lista/Lista";
import banner from "../../assets/img/cadastroeventos.svg"


const Cadastrar = () => {
    return (
        <Fragment>
            <Header adm="Administrador"/>
            <main>
                <Cadastro titulo ="Cadastro de Evento" placeholder="Nome:" 
                imagem={banner}/>
                <Listagem tituloLista="Lista eventos"/>
            </main>

            <Footer/>
        </Fragment>
    )
}

export default Cadastrar;
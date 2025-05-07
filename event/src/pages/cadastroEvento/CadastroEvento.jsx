import "./CadastroEvento.css";
import { Fragment } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Listagem from "../../components/lista/Lista";

const Cadastrar = () => {
    return (
        <Fragment>
            <Header/>
            <main>
                <Cadastro titulo ="Cadastro de Evento" placeholder ="Nome:" />
                <Listagem/>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Cadastrar;
import "./CadastroEvento.css";
import { Fragment } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";

const Cadastrar = () => {
    return (
        <Fragment>
            <Header/>
            <main>
                <Cadastro/>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Cadastrar;
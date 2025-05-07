import ".TipoUsuario.css";
import { Fragment } from "react";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro";


const TipoUsuario = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Cadastro titulo="Tipo De Usuario"/>
            </main>
            <Footer />
        </Fragment>
    )
}

export default TipoUsuario;
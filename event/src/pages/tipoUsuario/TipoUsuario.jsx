import "./TipoUsuario.css";
import { Fragment } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Listagem from "../../components/lista/Lista";
import banner from "../../assets/img/tipousuario.svg";

const TipoUsuario = () => {
    return (
        <Fragment>
            <Header adm="Administrador"/>
            <main>
                <Cadastro titulo="Tipo De Usuario" imagem={banner} placeholder="Titulo"/>
                <Listagem tituloLista="Lista Tipos de Usuarios" visivel="none" tipo="Tipo Usuario"/>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default TipoUsuario;
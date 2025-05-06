import "./Header.css";
import Logo from "../../assets/img/logo1.svg";
import { Link } from "react-router-dom"
import Porta from "../../assets/img/icon.svg"

const Header = () => {
    return (
        <header>
            <div className="layout_grid cabecalho">
                <Link to="/">
                    <img src={Logo} alt="Logo do Event Plus" />
                </Link>
                <nav className="nav_header">
                    <Link className="link_header" to="/Home">Home</Link>
                    <Link className="link_header" to="/Eventos">Eventos</Link>
                    <Link className="link_header" to="/Usuarios">Usuarios</Link>
                    <Link className="link_header" to="/Contatos">Contatos</Link>
                    <Link className="link_header" to="/Administrador">Administrador</Link>
                    <img src={Porta} alt="Imagem de porta"/>
                </nav>


            </div>

        </header>
    )
}

export default Header;
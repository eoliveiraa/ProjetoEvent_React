import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroEvento from "../pages/cadastroEvento/CadastroEvento";
import TipoEvento from "../pages/tipoEvento/TipoEvento";
import TipoUsuario from "../pages/tipoEvento/TipoEvento";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} exact />
                <Route path="/Cadastro" element={<CadastroEvento />} exact />
                <Route path="/TipoUsuario" element={<TipoUsuario />} exact />
                <Route path="/TipoEvento" element={<TipoEvento />} exact />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
import "./ListagemEventos.css"
import { Fragment, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import comentario from "../../assets/img/comentario.svg";
import Toggle from "../../components/toggle/Toggle";
import descricao from "../../assets/img/descricao2.svg";

import api from "../../Services/services";
import Cadastrar from "../cadastroEvento/CadastroEvento";
import Cadastro from "../../components/cadastro/Cadastro";

const ListagemEventos = (props) => {

    const [listaEvento, setListaEvento] = useState([])
    const [verEvento, setVerEventos] = useState([])


    async function listaEventos() {

        try {
            const resposta = await api.get("eventos");
            setListaEvento(resposta.data)
        } catch (error) {
            console.error("Erro ao buscar eventos:", error);
        }
    }


    useEffect(() => {
        listaEventos();
    }, [])



    return (
        <>
            <Header adm="Alunos" />
            <section className="listagemEventos" id="">
                <h1>Eventos</h1>
                <hr />


                <div className="tabela_eventos">

                    <select className="select"
                        value={props.valorSelect}
                        onChange={(e) => props.setValorSelect(e.target.value)}
                    >
                        <option value="" disabled>Todos os Eventos</option>

                        {props.lista && props.lista.length > 0 && props.lista.map((itemEvento) => (
                            (
                                <option key={itemEvento.idEvento} value={itemEvento.idEvento}>
                                    {itemEvento.nomeEvento}
                                </option>

                            ))
                        )}
                    </select>

                    <table>
                        <thead>
                            <tr className="table_eventos">
                                <th>Titulo</th>
                                <th>Data do Evento</th>
                                <th>Tipo Eventos</th>
                                <th>Descriçao</th>
                                <th>Comentarios</th>
                                <th>Participar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {listaEvento.map((item) =>
                                <tr className="item_listaEventos">
                                    <td data-cell="Nome">{item.nomeEvento}</td>
                                    <td data-cell="Data">{item.dataEvento}</td>
                                    <td data-cell="Tipo Evento">{item.tiposEvento.tituloTipoEvento}</td>
                                    <td data-cell="descricao"><img src={descricao} alt="descricao" /></td>
                                    <td data-cell="comentario"><img src={comentario} alt="balao" /></td>
                                    <td data-cell="botao"><Toggle /></td>


                                </tr>
                            )}
                        </tbody>
                    
                    </table>
                </div>


            </section>




            <Footer />
        </>


    )

}
export default ListagemEventos;




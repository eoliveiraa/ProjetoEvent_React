import "./Lista.css";
import editar from "../../assets/img/editar.svg";
import excluir from "../../assets/img/excluir.svg";

const Listagem = (props) => {
    return (
        <section className="listagem">
            
            <h1>{props.tituloLista}</h1>
            <hr />
            

            <div className="tabela">
                <table>

                    <thead>
                        <tr className="table_cabecalho">
                            <th style={{ display: props.visivel }}>Nome</th>
                            <th>Titulo</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    <hr/>
                    </thead>

                    <tbody>
                        <tr className="item_lista">
                            <td data-cell="Nome" style={{ display: props.visivel }}>Nome do Evento</td>
                            <td data-cell="Tipo Evento" style={props.tipo}> Tipo Evento</td>
                            <td data-cell="Editar"><img src={editar} alt="Caneta" /></td>
                            <td data-cell="Excluir"><img src={excluir} alt="Lixeira" /></td>
                        </tr>
                    <hr/>
                    </tbody>

                </table>
            </div>
        </section>

    )
}

export default Listagem;
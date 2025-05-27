import "./Lista.css";
import editar from "../../assets/img/editar.svg";
import excluir from "../../assets/img/excluir.svg";

const Listagem = (props) => {
 return (
    <section className="listagem">
        <h1>{props.tituloLista}</h1>
        <hr className="hr_listagem" />

        <div className="layout_grid tabela">
            <table>
                <thead>
                    <tr className="table_cabecalho">
                        <th style={{ display: props.visivel }}>Nome</th>
                        <th>Titulo</th>
                        <th style={{ display: props.visivelD}}>Descriçao</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                  {props.lista && props.lista.length > 0 ? (
                    props.lista.map((item) => (
                        <tbody>
                            <tr className="item_lista" key={props.tipoLista == "tiposEventos" ? item.idTipoEvento : "tiposUsuarios" ? item.idTipoUsuario : item.idEvento}>
                                <td data-cell="Nome">
                                    {props.tipoLista == "tiposEventos" ? item.tituloTipoEvento: item.tituloTipoUsuario}
                                </td>
                                <td data-cell="Evento">{props.nomeEvento}</td>
                                <td data-cell="Editar" className="right"><img src={editar} alt="Imagem de uma caneta" onClick={() => {props.funcEditar(item)}} style={{ cursor: "pointer" }}/></td>
                               <td data-cell="Excluir">
                                            <img
                                                src={excluir}
                                                alt="lixeira"
                                                onClick={() => (props.funcExcluir(item))}
                                                style={{ cursor: "pointer" }}
                                            />
                                        </td>
                            </tr>
                        </tbody>
                    ))
                ) :
                    (
                        <p>Nenhum Tipo de Evento Encontrado.</p>
                    )
                }
            </table>
        </div>
    </section>

)

}


export default Listagem;
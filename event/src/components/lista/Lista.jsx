import "./Lista.css";
import editar from "../../assets/img/editar.svg";
import excluir from "../../assets/img/excluir.svg";

const Listagem = ()=>{
    return(
        <section className="layout_grid listagem">
            <h1>Lista</h1>
            <hr/>
            <div className="tabela">
            <table>
                  
                    <thead>
                        
                        <tr className="table_cabecalho">
                            <th>Titulo</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="item_lista">
                            <td data-cell="Nome">Tipo Evento</td>
                            <td data-cell="Editar"><img src={editar} alt="Caneta" /></td>
                            <td data-cell="Excluir"><img src={excluir} alt="Lixeira" /></td>
                        </tr>
                    </tbody>
                    </table>
            </div>
        </section>

    )
}

export default Listagem;
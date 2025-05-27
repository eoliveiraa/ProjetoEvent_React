import Botao from "../botao/Botao"
import "./Cadastro.css"

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            
            <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">
                <div className="div_titulo">
                    <h1>{props.titulo}</h1>
                    <hr />
                </div>

                <div className="imagem_form">
                    <div className="img">
                        <img src={props.imagem} alt="Imagem Cadastro"/>
                    </div>

                    <div className="campo_cadastro">
                        <div className="campo_cadNome">
                            <input type="text" name="nome" placeholder={props.placeholder}
                                value={props.valorIpunt} onChange={(e) => props.setValorInput(e.target.value)} />
                        </div>



                        <div className="campo_cadTipoEvento" style={{ display: props.visivel }}>
                        <select name="Tipo De Evento" id="" className="select_cad"
                            value={props.valorSelect}
                            onChange={(e) => props.setValorSelect(e.target.value)}
                        >

                            <option value="" disabled>Tipo de Evento</option>
                            {props.lista && props.lista.length > 0 && props.lista.map((itemTipoEvento) => (
                                (
                                    <option value={itemTipoEvento.IdTipoEvento}>{itemTipoEvento.tituloTipoEvento}</option>

                                ))
                            )}
                        </select>
                        </div>

                        <div className="campo_Instituiçao campo_cadNome" style={{ display: props.visibilidade }}>
                            <select name="Instituiaçao" id="" value={props.valorSelect1} onChange={(e) => props.setValorSelect1(e.target.value)}>
                                <option value="" disabled selected>Selecione</option>
                                <option value="">senai</option>

                            </select>
                        </div>

                        <div className="div_data campo_cadNome" style={{ display: props.visibilidade }}>
                            <label htmlFor="Data do Evento"></label>
                            <input type="date" name="data" value={props.valorDate}
                                onChange={(e) => props.setValorDate(e.target.value)} placeholder="data do evento" />
                        </div>

                        <div className="div_descriçao campo_cadNome" style={{ display: props.visibilidade }}>
                              <textarea name="" id="" placeholder="Descrição" className="descricao"
                                value={props.valorText}
                                onChange={(e) => props.setValorText(e.target.value)}
                            ></textarea>
                        </div>


                        <Botao nomeDoBotao="Cadastrar" />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;
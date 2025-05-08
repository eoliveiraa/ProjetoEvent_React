import Botao from "../botao/Botao"
import "./Cadastro.css"

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form action="" className="layout_grid form_cadastro">
                <div className="div_titulo">
                    <h1>{props.titulo}</h1>
                     <hr /> 
                </div>
                <div className="imagem_form">
                    <div className="img">
                        <img src={props.imagem} alt="Imagem Cadastro" />
                    </div>

                    <div className="campo_cadastro">
                        <div className="campo_cadNome">
                            <input type="text" name="nome" placeholder= {props.placeholder} />
                        </div>

                        <div className="campo_cadTipoEvento"  style={{display:props.visivel}}>
                            <select name="TipoEvento" id="">
                                <option value="" disabled selected>Selecione</option>
                                <option value="">op1</option>
                                <option value="">op2</option>
                                <option value="">op3</option>
                                <option value="">op4</option>
                            </select>
                        </div>
                        <Botao nomeDoBotao="Cadastrar"/>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;
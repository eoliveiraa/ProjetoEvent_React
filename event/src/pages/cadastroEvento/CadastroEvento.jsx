import "./CadastroEvento.css";
import { Fragment, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Listagem from "../../components/lista/Lista";
import banner from "../../assets/img/cadastroeventos.svg"


import Swal from 'sweetalert2'
import api from "../../Services/services";


const Cadastrar = () => {
    const [evento, setEvento] = useState("");
    const [dataEvento, setDataEvento] = useState("");
    const [descricao, setDescricao] = useState("");
    const [instituicao, setInstituicao] = useState("23E29B9F-96F8-45DD-9046-81561687FC08");
    const [tipoEvento, setTipoEvento] = useState("");
    const [listaTipoEvento, setListaTipoEvento] = useState([])
    const [listaEvento, setListaEvento] = useState([])
    const [excluirEvento, setExcluirEvento] = useState([])

    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

    async function listarTipoEvento() {
        try {
            const resposta = await api.get("tiposEventos");
            setListaTipoEvento(resposta.data);
        } catch (error) {
            console.log(error);

        }

    }

    async function deletarEvento(id) {
        try {
            const excluirEvento = await api.delete(`eventos/${id.idEvento}`)
            setExcluirEvento(excluirEvento.data)
        }
        catch (error) {
            console.log(error)
        }
    }


    async function listarEvento() {
        try {
            const resposta = await api.get("Eventos")
            setListaEvento(resposta.data)
        } catch (error) {
            console.log(error);

        }
    }

    async function cadastrarEvento(evt) {
        evt.preventDefault();
        if (evento.trim() !== "") {
            try {
                await api.post("eventos", { nomeEvento: evento, idTipoEvento: tipoEvento, dataEvento: dataEvento, descricao: descricao, idInstituicao: instituicao });
                alertar("success", "Cadastro realizado com sucesso!");
                setEvento("");
                setDataEvento();
                setDescricao("");
                setTipoEvento("");

            } catch (error) {
                alertar("error", "Entre em contato com o suporte")
            }
        } else {
            alertar("error", "Preencha o campo vazio")

        }
    }


    useEffect(() => {
        listarTipoEvento();
        listarEvento();
    }, [listaEvento]);



    return (
        <Fragment>
            <Header adm="Administrador"/>
            <main>
                <Cadastro titulo="Cadastro de Evento" placeholder="Nome:"
                    imagem={banner}
                    funcCadastro={cadastrarEvento}

                    valorInput={evento}
                    setValorInput={setEvento}

                    valorSelect={tipoEvento}
                    setValorSelect={setTipoEvento}



                    setValorText={setDescricao}
                    valorText={descricao}

                    setValorSelect1={setInstituicao}
                    valorSelect1={instituicao}

                    setValorDate={setDataEvento}
                    valorDate={dataEvento}

                    lista={listaTipoEvento}

                />

                <Listagem tituloLista="Lista eventos"
                    lista={listaEvento}
                    tipoLista="Eventos"
                    funcExcluir={deletarEvento}
                // funcEditar={editarEvento}/
                />
            </main>

            <Footer />
        </Fragment>
    )
}

export default Cadastrar;
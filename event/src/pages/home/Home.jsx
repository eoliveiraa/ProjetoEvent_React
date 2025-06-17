import "./Home.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"

import banner from "../../assets/img/banner.svg"
import mapa from "../../assets/img/mapa.svg"
import Visao from "../../assets/img/Visao.svg"


const Home = () => {
    return (
        <>
            <Header
                visibilidade="none" />
            <main>
                <section className="home_section">
                    <div className="pagina_home">
                        <img src={banner} alt="" />
                    </div>

                    <div className="proximos_eventos">
                        <div className="titulo">
                            <h1>Próximos Eventos</h1>
                            <hr />
                        </div>

                        <div className="lista_eventos layout_grid">
                            <article className="item">
                                <h1>Titulo do Evento</h1>

                                <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>

                                <button>Conectar</button>
                            </article>

                            <article className="item">
                                <h1>Titulo do Evento</h1>

                                <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>

                                <button>Conectar</button>
                            </article>

                            <article className="item">
                                <h1>Titulo do Evento</h1>

                                <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>

                                <button>Conectar</button>
                            </article>

                            <article className="item">
                                <h1>Titulo do Evento</h1>

                                <p>Breve descrição do evento, pode ser um paragrafo pequeno</p>

                                <button>Conectar</button>
                            </article>
                        </div>
                    </div>

                    <div className="visao">
                        <img src={Visao} alt="" />
                    </div>

                    <div className="contato">
                        <div className="titulo_2">
                            <h1>Contato</h1>
                            <hr />
                        </div>

                        <div className="mapa_informacoes layout_grid">
                            <div className="mapa">
                                <img src={mapa} alt="" />
                            </div>

                            <div className="informacoes_contato">
                                <p>Rua Niterói, 180 - Centro</p>
                                <p>São Caetano  do  Sul - SP</p>
                                <p>(11) 4225-2000</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;
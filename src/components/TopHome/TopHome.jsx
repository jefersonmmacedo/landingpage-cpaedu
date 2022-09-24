import "./topHome.css";
import Imagem from "../../assets/images/estudante (6).jpg"

export function TopHome() {
    return (
        <div className="TopHome">
            <div className="text">
                <h1>MATRÍCULAS ABERTAS</h1>
                <h3>Faça já a sua matricula. Garanta a vaga em seu futuro! <br /> Garanta os valores promocionais nos cursos de Graduação e Pós Graduação/2023</h3>

                <button>Entrar em contato</button>
                <button className="btn">Faça sua matricula</button>
            </div>
            <div className="image">
                    <img src={Imagem} alt="Imagem de estudantes na universidade" />
            </div>
        </div>
    )
}
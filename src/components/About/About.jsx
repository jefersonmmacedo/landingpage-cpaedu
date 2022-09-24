import "./about.css"
import LogoSimbol from '../../assets/images/Simbol.png'
import LogoSimbol2 from '../../assets/images/Simbol2.png'
import {IoArrowDownCircleOutline} from 'react-icons/io5'

export function About() {

    return (
        <div className="about">
            <div className="top">
                <div className="block">
                    <img src={LogoSimbol2} alt="" />
                    <h1>Desde 2012 promovendo a educação que transforma!</h1>
                    <IoArrowDownCircleOutline />
                </div>
            </div>
                <div className="text">
                    <div className="topText">
                        <div className="logo">
                        <img src={LogoSimbol} alt="" />
                        </div>
                        <div className="title">
                            <h1>SOMOS O CPA EDUCAÇÃO </h1>
                            <h3>Conheça nossa história</h3>
                        </div>
                        </div>
                        <div className="history">
                            <p>O CPA Educação (Centro de Educação Profissional Amaivos) é uma organização privada, que desde 2012 oferece na cidade de Saquarema - RJ, cursos de formação musical prática e teórica e cursos qualificação profissional em diversas áreas de atuação.</p>
                            <p>A partir de 2019 passamos também a oferecer ensino fundamental e médio – EJA através da modalidade EAD Profissionalizante, cursos técnicos e cursos de nível superior e pós-graduação na modalidade EAD em parceria com instituições renomadas neste seguimento, registradas e autorizadas pelo MEC, assim como em demais órgãos competentes.ão.</p>
                        </div>
                </div>

        </div>
    )
}

import "./infos.css";
import { IoClipboardOutline, IoDocumentAttachOutline, IoDesktopOutline } from 'react-icons/io5'

export function Infos() {
    return (
        <div className="Infos">
            <div className="text">
                    <h2>MATRICULE-SE JÁ</h2>
                    <h4>Siga o passo a passo para efetuar sua matricula</h4>
            </div>
            <div className="blocks">
                <div className="block">
                    <IoClipboardOutline />
                    <h3>Faça sua pré Matricula</h3>
                    <p>Matricule-se através de nosso site de forma simples e rápida. Ou pelo nosso whatsapp.</p>
                </div>
                <div className="block">
                    <IoDocumentAttachOutline />
                    <h3>Complete a documentação</h3>
                    <p>Vá até a unidade mais próxima, com os documentos solicitados em mãos e complete a matrícula</p>
                </div>
                <div className="block">
                    <IoDesktopOutline />
                    <h3>Começe a obter conhecimento</h3>
                    <p>Começe a estudar online a qualquer hora e em qualquer lugar ou presencialmente em nossa unidade</p>
                </div>
            </div>
        </div>
    )
}
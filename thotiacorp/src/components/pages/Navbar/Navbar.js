//Importando estilos do styled components
import {Ul, Pages, Li, A} from './NavbarStyled'

// Importando icones do React icons 
/*import {BsFillCartPlusFill} from 'react-icons/bs'*/
import {BsFillPeopleFill} from 'react-icons/bs'
import { GiHeartPlus} from "react-icons/gi";

function Navbar() {
    return (
        <nav>
            <Ul>
                {/* Logo Navbar */}
                <li><GiHeartPlus/> THOT I.A CORP</li>
                <Pages>
                    {/*Links paginas */}
                    <A href="/">Inicio</A>
                    <A href="/">Serviços</A>
                    <A href="/">Artigos</A>
                    <A href="/">Sobre</A>
                </Pages>
                <Li>
                    {/*Link Cadastro */}
                    {/* <A href="/"><BsFillCartPlusFill/> Carrinho</A> */}
                    <A href="/"><BsFillPeopleFill /> Entrar / Cadastrar</A>
                </Li>
            </Ul>
        </nav>
    )
}

export default Navbar
//Importando estilos do styled components
import {Ul, Pages, Li, A} from './NavbarStyled'

// Importando icones do React icons 
/*import {BsFillCartPlusFill} from 'react-icons/bs'*/
import {BsFillPeopleFill} from 'react-icons/bs'
import { GiHeartPlus} from "react-icons/gi";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Ul>
                {/* Logo Navbar */}
                <li><GiHeartPlus/> THOT I.A CORP</li>
                <Pages>
                    {/*Links paginas */}
                    <Link to="/"><A href="/">Inicio</A></Link>
                    <Link to="/"><A href="/">Produtos</A></Link>
                    <Link to="/"><A href="/">Serviços</A></Link>
                    <Link to="/"><A href="/">Artigos</A></Link>
                    <Link to="/"><A href="/">Sobre</A></Link>
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
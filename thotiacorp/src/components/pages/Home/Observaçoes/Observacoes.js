import { Link } from 'react-router-dom';

import {DivMain} from './ObservacoesStyled'

function Observacoes() {
    return (
        <DivMain>
            <h1>Observaçoes</h1>
            <p>Sistema universal unificado para saúde</p>
            <p>Maiores informações e detalhes destes serviços em:</p>
            <Link to="/servicos">Serviços</Link>
        </DivMain>
    )
}

export default Observacoes
import CardsHome from "./CardsHome/CardsHome";
import { H1, Section, Div } from "./HomeStyled";

import consultas from "../../../Assets/consultas.png";
import exames from "../../../Assets/exames.png";
import carteira from "../../../Assets/carteira.png";
import monitoramento from '../../../Assets/monitoramento.png';
import seguranca from '../../../Assets/seguranca.png';
import artificial from '../../../Assets/artificial.png';
import gratis from '../../../Assets/gratis.png'
import baixocusto from '../../../Assets/baixocusto.png';

function Home() {
  return (
    <Section className="container">
      <H1>Inicio</H1>
      <Div>
        <CardsHome
          src={consultas}
          alt="consultas"
          h1="Marcar Consultas"
          p="Acione este sistema antes das consultas, atende todos profissionais da saúde, aceita qualquer plano de saúde."
          h3="Filtro busca profissionais"
          li1="Mais perto"
          li2="Mais acessível"
          li3="Entre outros"
          pfooter="Gratis"
          imgfooter={gratis}
        />
        <CardsHome
          src={exames}
          alt="MARCAR EXAMES"
          h1="Marcar Exames"
          p="Acione este sistema antes dos exames, atende todos exames da saúde, aceita qualquer plano de saúde."
          h3="Filtro busca exames"
          li1="Mais perto"
          li2="Mais acessível"
          li3="Entre outros"
          pfooter="Gratis"
          imgfooter={gratis}
        />
        <CardsHome
          src={carteira}
          alt="cCARTEIRA DIGITALs"
          h1="Carteira Digital"
          p="Guarde todas informações de saúde, dados disponíveis a qualquer momento, praticidade, comodidade e segurança."
          h3="Benefícios"
          li1="Nota fiscal imediata"
          li2="Segurança juridica"
          li3="Entre outros"
          pfooter="Gratis"
          imgfooter={gratis}
        />
        <CardsHome
          src={monitoramento}
          alt="Monitoramento"
          h1="Monitoramento"
          p="Termografia médica acessível, identifica mais de 5 mil doenças, dirija-se à um ponto de coleta."
          h3="Notificação de imagem recolhida"
          li1="Adquira a imagem"
          li2="Veja todas inf."
          li3="Todos os laudos"
          pfooter="Baixo Custo"
          imgfooter={baixocusto}
        />
        <CardsHome
          src={artificial}
          alt="Inteligência Artificial"
          h1="Inteligência Artificial"
          p="Redução de custos, telemedicina, facilidade de vizualização de exames e laudos autômatos"
          h3="Precisão diagnóstico"
          li1="Analises complementares"
          li2="Analises automatizadas"
          li3="Entre outros benefícios"
          pfooter="Gratis"
          imgfooter={gratis}
        />
        <CardsHome
          src={seguranca}
          alt="Segurança"
          h1="Segurança"
          p="Informações criptografadas, uso de SSL / TLS, compartilhamento condicional com profissionais"
          h3="Autorize profissionais"
          li1="Analisar exames"
          li2="Analisar consultas"
          li3="Entre outras"
          pfooter="Gratis"
          imgfooter={gratis}
        />
      </Div>
    </Section>
  );
}

export default Home;

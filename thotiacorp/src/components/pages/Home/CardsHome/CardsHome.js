import {Section, Img, H1, P, H3, Ul, DivText, DivFooter, PfooterGratis, PfooterBaixo} from './CardsHomeStyled'


function CardsHome({src, alt, h1, p, h3, li1, li2, li3, pfooter, imgfooter}) {
    return (
        <Section>
            <Img src={src} alt={alt}/>
            <DivText>
            <H1>{h1}</H1>
            <P>{p}</P>
            <H3>{h3}</H3>
            <Ul>
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
            </Ul>
            </DivText>
            <DivFooter>
                <p>{pfooter==="Gratis" ? <PfooterGratis>{pfooter}</PfooterGratis> : <PfooterBaixo>{pfooter}</PfooterBaixo>}</p>
                <img src={imgfooter} alt={alt}/>
            </DivFooter>
        </Section>
    )
}

export default CardsHome
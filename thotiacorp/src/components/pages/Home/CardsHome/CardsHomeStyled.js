import styled from "styled-components";

export const Section = styled.section`
    color: white;
    width: 320px;
    background-color: var(--Primary-Color);
    border-radius: 5px;
`;

export const Img = styled.img`
    height: 320px;
    border-radius: 5px 5px 0 0;
    `;

export const H1 = styled.h1`
    font-size: 2rem;
    padding-bottom: 0.2rem;
`;

export const P = styled.p`
    padding-bottom: 0.2rem;
`;

export const H3 = styled.h3`
    font-size: 1.3rem;
    padding-bottom: 0.2rem;
`;

export const Ul = styled.ul`

`;

export const DivText = styled.div`
    height: 208px;
    padding: 10px;
`;

export const DivFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    
    img {
        height: 70px;
    }
`;

export const PfooterGratis = styled.p`
    font-size: 1.3rem;
    height: 24px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    color: black;
    background: yellow;
`;

export const PfooterBaixo = styled.p`
    font-size: 1.3rem;
    height: 24px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    color: black;
    background: #6e9cf0;
`
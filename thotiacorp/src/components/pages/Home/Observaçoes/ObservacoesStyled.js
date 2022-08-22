import styled from "styled-components";

export const DivMain = styled.div`
    border: solid 1px;
    margin: 10px;
    display: flex;
    flex-direction: column;

    h1 {
        padding-bottom: 0.1rem;
    }

    p {
        padding-bottom: 0.4rem;
    }

    a {
        width: 200px;
        padding: 10px;
        border-radius: 4px;
        text-align: center;
        color: white;
        text-decoration: none;
        background: var(--Primary-Color);
    }
`;
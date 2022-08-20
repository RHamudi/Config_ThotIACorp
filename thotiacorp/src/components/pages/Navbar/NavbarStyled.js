import styled from 'styled-components'

export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;
    background: var(--Primary-Color);
    color: white;
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

    li {
        font-size: 1.6rem;
    }
`;

export const Pages = styled.li`
    display: flex;
    column-gap: 1rem;
    
    a {
        color: white;
        transition: all 0.2s ease;
        position: relative;

        &::before {
            content: "";
            width: 0;
            background-color: #fff;
            height: 0.2rem;
            position: absolute;
            bottom: -3px;
            transition: all 0.2s ease;
            left: -2.5px;
        }
        &:hover::before {
            width: 110%;
        }
    }
`;

export const Li = styled.li`
    display: flex;
    align-items: center;
    column-gap: 2rem;
    text-align: center;


    a {
        color: white;
        color: white;
        transition: all 0.2s ease;
        position: relative;

        &::before {
            content: "";
            width: 0;
            background-color: #fff;
            height: 0.2rem;
            position: absolute;
            bottom: -3px;
            transition: all 0.2s ease;
            left: -2.5px;
        }
        &:hover::before {
            width: 110%;
        }
    }
`;

export const A = styled.a`
    color: white;
    font-size: 1.2rem;
`;
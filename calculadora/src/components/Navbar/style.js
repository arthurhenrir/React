import { styled } from "styled-components";

export const NavbarStyle = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 60px;
    background-color: grey;
    padding: 0 20px;

    p {
        color: ${( {theme} ) => theme.colors.primary}
    }
`
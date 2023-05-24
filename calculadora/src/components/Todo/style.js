import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${(prop) => prop.backgroundcolor ? prop.backgroundcolor : 'pink'};
    width: 100px;
    height: 30px;
    color: ${({theme}) => theme.colors.secundary};
    cursor: pointer;
    transition: 0.2s;
    font-size: ${({theme}) => theme.sizes.s};

    &:hover {
        background-color: blueviolet;
    }
`

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: grey;
    width: 500px;
    height: 500px;
    border-radius: 20px;
    padding: 20px;
`
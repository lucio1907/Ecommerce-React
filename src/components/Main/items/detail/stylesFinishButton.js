import styled from "styled-components";

export const ContainerButton = styled.div`
    position: relative;
    top: 1.68rem;
    padding: 20px;
    width: 100%;
    text-align: center;

    @media (min-width: 848px) {
        top: 2.81rem;
    }
`

export const Button = styled.button`
    background-color: #EEF7FF;
    margin-bottom: 10px;
    padding: 15px;
    width: 13.12rem;
    border-radius: 8px;
    font-family: 'Bebas Neue', cursive;
    font-size: 23px;
    letter-spacing: 1px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    transition: all 350ms ease;
    &:hover {
        background-color: #000;
        color: #fff;
    }

    @media (min-width: 768px) {
        width: 300px;
    }
`

export const ButtonBack = styled.button`
    background-color: rgb(249 115 22);
    margin-bottom: 10px;
    padding: 15px;
    width: 13.12rem;
    border-radius: 8px;
    font-family: 'Bebas Neue', cursive;
    font-size: 23px;
    letter-spacing: 1px;
    white-space: nowrap;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    transition: all 350ms ease;
    &:hover {
        background-color: #000;
        color: #fff;
    }

    @media (min-width: 768px) {
        width: 18.75rem;
    }
`
import styled from "styled-components";

export const ContainerDetail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    position: relative;

    animation: effect .3s alternate ease;

    @keyframes effect {
        from {
            left: -10000px;
        } 
        to {
            left: 0;
        }
    }

    @media (min-width: 848px) {
        flex-direction: row;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 2px;
    margin-bottom: 15px;
    &::before {
        content: "- ";
    }
    &::after {
        content: " -";
    }

    @media (min-width: 848px) {
        font-size: 35px;
        transform: rotate(270deg);
        white-space: nowrap;
        margin-left: 32px;
        margin-top: 20px;
        position: relative;
        left: 31px;
        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        left: 20px;
        margin-left: 0px;
    }
`

export const Img = styled.img`
    width: 500px;
    height: 550px;
    object-fit: contain;
    padding: 10px;
    border-top: 1px solid #000;

    @media (min-width: 848px) {
        width: 600px;
        height: 650px;
        border-top: 0px;
    }
`

export const DescriptionParagraph = styled.p`
    font-size: 15px;
    font-family: "Inter", sans-serif;
    font-weight: 700;

    @media (min-width: 848px) {
        font-size: 17px;
    }
`

export const StockAlert = styled.p `
    font-size: 20px;
    font-family: 'Bebas Neue', cursive;
    padding-top: 20px;
`
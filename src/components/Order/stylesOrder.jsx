import styled from "styled-components";

export const ContainerFather = styled.div`
    position: relative;
    top: 12em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
`

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 92%;
    margin: auto;
    margin-top: 20px;
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    @media (min-width: 768px) {
        padding-top: 20px;
        height: 100%;
    }
`

export const MyUser = styled.p`
    font-family: 'inter', sans-serif;
    font-weight: 600;
    margin-bottom: 20px;
    border-bottom: 1px solid #faf0f0;
    padding: 20px;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`

export const MyUser2 = styled.div`
    font-family: 'inter', sans-serif;
    font-weight: 600;
    margin-bottom: 20px;
    border-bottom: 1px solid #faf0f0;
    padding: 20px;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`
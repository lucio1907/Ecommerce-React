import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    position: fixed;

    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`
export const Logo = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
    display: flex;
    flex-direction: column;
    width: 9rem;
    padding: 20px;
    position: absolute;
    cursor: pointer;

    transition: all .8s ease;

    &:hover {
        transform: scale(1.10);
    }

    @media (min-width: 768px) {
        font-size: 25px;
        width: 10.5rem;
    }
`

export const Span = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    margin-top: 3px;
    
    @media (min-width: 768px) {
        font-size: 11.5px;
        margin-top: 8px;
        margin-right: 8px;
}
`

export const HamburgerMenu = styled.button `
    display: block;
    width: 30px;
    position: absolute;
    right: 1.06rem;
    top: 1.31rem;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`

export const ShowHamburgerMenu = styled.nav`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: ${({menuHide}) => menuHide ? '0' : '-100vw'};
    height: 92vh;
    top: 85px;
    width: 100%;
    
    transition: all .6s ease-in;

    @media (min-width: 768px) {
        position: initial;
        align-items: flex-end;
        padding: 10px 25px;   
    }
`
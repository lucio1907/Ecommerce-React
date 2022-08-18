import { Link } from "react-router-dom";
import hamburgerMenu from "./img/hamburger.png";
import CartWidget from "./CartWidget";
import {
  Header,
  Logo,
  Span,
  HamburgerMenu,
  ShowHamburgerMenu,
} from "./stylesNav";

const NavBar = ({ menuHide, setMenuHide }) => {
  const handleClick = () => {
    setMenuHide(!menuHide);
  };

  return (
    <Header>
      <Logo>
        <Link to="/">Co|Clothes</Link>
        <Span>E-commerce</Span>
      </Logo>

      <HamburgerMenu onClick={handleClick}>
        <img src={hamburgerMenu} />
      </HamburgerMenu>

      <ShowHamburgerMenu menuHide={menuHide}>
        <CartWidget />

        <ul className="flex justify-center items-center h-full md:h-16 md:w-100 bg-white">
          <li className="flex flex-col gap-10 text-center w-full uppercase font-semibold md:flex-row md:gap-3 md:relative md:right-14 md:font-light">
            <Link
              to="/remeras"
              className="hover:bg-slate-200 hover:shadow-md md:rounded md:px-3 md:py-1"
            >
              Remeras
            </Link>
            <Link
              to="/buzos"
              className="hover:bg-slate-200 hover:shadow-md md:rounded md:px-3 md:py-1"
            >
              Buzos
            </Link>
            <Link
              to="/zapatillas"
              className="hover:bg-slate-200 hover:shadow-md md:rounded md:px-3 md:py-1"
            >
              Zapatillas
            </Link>
            <Link
              to="/ultimasnovedades"
              className="hover:bg-slate-200 hover:shadow-md md:rounded md:px-3 md:py-1"
            >
              Últimas Novedades
            </Link>
          </li>
        </ul>
      </ShowHamburgerMenu>
    </Header>
  );
};

export default NavBar;

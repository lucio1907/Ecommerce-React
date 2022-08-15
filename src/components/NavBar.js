import { Link } from "react-router-dom";
import hamburgerMenu from "../img/hamburger.png";
import carrito from "../img/carrito.png";
import styles from "./styles/navbar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [menuHide, setMenuHide] = useState(false);

  return (
    <header className="w-full h-20 shadow-md">
      <div className={styles.logo}>
        <Link to="/">Co|Clothes</Link>
        <span className={styles["span-ecommerce"]}>E-commerce</span>
      </div>

      <div
        className={styles["hamburger-menu"]}
        onClick={() => {
          setMenuHide(!menuHide);
        }}
      >
        <img src={hamburgerMenu} />
      </div>

      <nav
        className={
          menuHide
            ? styles["show-hamburger-menu"]
            : styles["hide-hamburger-menu"]
        }
      >
        <div className="absolute top-2 w-20 md:top-0 cursor-pointer md:right-0 md:p-2 hover:rotate-6">
          <img src={carrito} />
        </div>

        <ul className="flex justify-center items-center h-full md:h-16 md:w-100">
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
      </nav>
    </header>
  );
};

export default NavBar;

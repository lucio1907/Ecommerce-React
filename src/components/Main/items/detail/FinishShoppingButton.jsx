import { faArrowCircleLeft, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button, ButtonBack, ContainerButton } from "./stylesFinishButton";

const FinishShoppingButton = () => {
  return (
    <>
      <ContainerButton>
        <Link to="/cart">
          <Button>
          <FontAwesomeIcon icon={faCartArrowDown} className="mt-1"/>
            {'  '}Ver Carrito
          </Button>
        </Link>
      </ContainerButton>
      <ContainerButton>
        <Link to="/category/remeras">
          <ButtonBack>
          <FontAwesomeIcon icon={faArrowCircleLeft} className="mt-1"/>
            {'  '}Seguir Comprando
          </ButtonBack>
        </Link>
      </ContainerButton>
    </>
  );
};

export default FinishShoppingButton;

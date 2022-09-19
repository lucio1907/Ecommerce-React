import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ButtonBack } from "../Main/items/detail/stylesFinishButton";
import { ContainerFather, MyUser, OrderContainer } from "./stylesOrder";

const Order = ({ userOrder, orderId }) => {
  return (
    <ContainerFather>
      <h1 className="text-sm md:text-3xl font-semibold uppercase p-4 text-orange-500 md:mt-12 text-center">
        ¡Gracias por confiar en nosotros!
      </h1>
      <p className="text-sm md:text-3xl font-semibold uppercase text-orange-500 mt-1 md:mt-2 text-center">
        ¡Esperamos por su siguiente compra!
      </p>
      <OrderContainer>
        <MyUser>
          <span className="md:text-2xl">Nombre:</span> {userOrder.buyer.name}
        </MyUser>
        <MyUser>
          <span className="md:text-2xl">Email:</span> {userOrder.buyer.email}
        </MyUser>
        <MyUser>
          <span className="md:text-2xl">Número:</span> {userOrder.buyer.number}
        </MyUser>
        <MyUser>
          <span className="md:text-2xl">Ciudad:</span> {userOrder.buyer.city}
        </MyUser>
        <MyUser>
          <span className="md:text-2xl">Domicilio:</span> {userOrder.buyer.home}
        </MyUser>
        <MyUser>
          <span className="md:text-2xl">Código de seguimiento:</span> {orderId}
        </MyUser>
        <MyUser>
          <span className="md:text-2xl">Productos:</span>{" "}
          <ul>
            {userOrder.items.map((item) => (
              <li key={item.id} className="whitespace-nowrap">
                -{`${item.title} X ${item.quantity} U. ($${item.price * item.quantity})`}
              </li>
            ))}
          </ul>
        </MyUser>
      </OrderContainer>
      <div className="w-full flex justify-center mt-5 py-3">
        <NavLink to="/">
          <ButtonBack>
            <FontAwesomeIcon icon={faHouseUser} className="relative right-2" />
            Volver al inicio
          </ButtonBack>
        </NavLink>
      </div>
    </ContainerFather>
  );
};

export default Order;

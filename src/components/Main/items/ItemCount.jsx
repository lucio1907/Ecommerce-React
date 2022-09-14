import { useState } from "react";
import { ContainerItemCount, ContainerInputs, ButtonAdd } from "../stylesMain";
import InputItemSum from "./inputs/InputItemSum";
import InputItemRemove from "./inputs/InputItemRemove";
import FinishShoppingButton from "./detail/FinishShoppingButton";
import useAppContext from "../../../hooks/useAppContext";

const ItemCount = ({ stock, uniqueProduct }) => {
  const { onAddCart, cartProducts } = useAppContext();
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(true);

  const totalStock = () => (stock > 0 ? stock - count : 0);

  const checkStock = () =>
    count === stock
      ? "Se agotó el stock"
      : `Stock Disponible: ${totalStock()} u.`;

  const hideCounter = (e) => {
    if (e.target.type === "submit") {
      // This hide the counter
      setIsClick(false);
      // This show the products in the cart
      onAddCart(uniqueProduct, count);
      return;
    }
  };

  return (
    <>
      {isClick ? (
        <ContainerItemCount className="shadow">
          <p className="text-sm text-center p-4">
            {stock > 0 ? `${checkStock()}` : "Sin Stock"}
          </p>
          <ContainerInputs>
            <InputItemRemove
              value={"-"}
              count={count}
              stock={stock}
              setCount={setCount}
            />
            <span type="text" className="text-3xl">
              {count}
            </span>
            <InputItemSum
              value={"+"}
              count={count}
              stock={stock}
              setCount={setCount}
            />
          </ContainerInputs>
          <ButtonAdd
            count={count}
            onClick={hideCounter}
            disabled={count <= 0 && true}
          >
            Agregar al Carrito
          </ButtonAdd>
        </ContainerItemCount>
      ) : (
        <FinishShoppingButton />
      )}
    </>
  );
};

export default ItemCount;

import { useState } from "react";
import { ContainerItemCount, ContainerInputs, ButtonAdd } from "../stylesMain";
import InputItemSum from "./inputs/InputItemSum";
import InputItemRemove from "./inputs/InputItemRemove";

const ItemCount = ({ stock, menuHide }) => {
  const [count, setCount] = useState(0);

  const totalStock = () => (stock > 0 ? stock - count : 0);

  const checkStock = () => count === stock ? "Se agotó el stock" : `Stock Disponible: ${totalStock()} u.`;

  const onAddCart = e => {
    if (e.target.type === 'submit') {
      alert(`Agregado al Carrito Correctamente (${count} elementos)`);
      setCount(0);
    }
  }

  return (
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
        <span type="text" className="text-3xl">{count}</span>
        <InputItemSum
          value={"+"}
          count={count}
          stock={stock}
          setCount={setCount}
        />
      </ContainerInputs>
      <ButtonAdd count={count} menuHide={menuHide} onClick={onAddCart} disabled={count <= 0 && true}>
        Agregar al Carrito
      </ButtonAdd>
    </ContainerItemCount>
  );
};

export default ItemCount;
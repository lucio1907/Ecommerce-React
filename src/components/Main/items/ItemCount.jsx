import { useState } from "react";
import { ContainerItemCount, ContainerInputs, ButtonAdd } from "../stylesMain";

const ItemCount = ({ stock, menuHide }) => {
  const [count, setCount] = useState(0);

  const totalStock = () => stock > 0 ? stock - count : 0;

  const checkStock = () => count === stock ? 'Se agotó el stock' : `Stock Disponible: ${totalStock()} u.`;

  const invalidStock = () => stock - count === 0 && true;

  const invalidValue = () => count <= 0 && true;

  const handleClickNegative = () => setCount(count - 1);

  const handleClickPositive = () => setCount(count + 1);

  return (
    <ContainerItemCount className="shadow">
      <p className="text-sm text-center p-4">
        {stock > 0 ? `${checkStock()}` : "Sin Stock"}
      </p>
      <ContainerInputs>
        <input
          type="button"
          value="-"
          className={`text-3xl cursor-pointer rounded h-10 w-10 ${
            count <= 0
              ? "text-gray-400"
              : "hover:bg-slate-200 text-blue-500 hover:shadow"
          } ${stock === 0 && "text-gray-400"}`}
          onClick={handleClickNegative}
          disabled={invalidValue()}
        />
        <span type="text" className="text-3xl">
          {count}
        </span>
        <input
          type="button"
          value="+"
          className={`text-3xl cursor-pointer rounded h-10 w-10 ${
            count >= stock
              ? "text-gray-400"
              : "hover:bg-slate-200 text-blue-500 hover:shadow"
          }`}
          onClick={handleClickPositive}
          disabled={invalidStock()}
        />
      </ContainerInputs>
      <ButtonAdd count={count} menuHide={menuHide}>
        Agregar al Carrito
      </ButtonAdd>
    </ContainerItemCount>
  );
};

export default ItemCount;

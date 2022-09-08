import React from "react";
import useAppContext from "../../hooks/useAppContext";

const EmptyCartButton = () => {
  const { emptyCart } = useAppContext();
  return (
    <div>
      <button
        className="border-y-2 border-x-2 border-solid border-black p-3 w-52 hover:bg-black hover:text-white transition-all duration-300"
        onClick={emptyCart}
      >
        Vaciar Carrito
      </button>
    </div>
  );
};

export default EmptyCartButton;

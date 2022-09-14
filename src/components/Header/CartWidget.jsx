import useAppContext from "../../hooks/useAppContext";
import { carrito } from "../../img";

const CartWidget = () => {
  const { cartProducts, inCartAlert } = useAppContext();
  return (
    <div className="absolute top-2 w-20 md:top-0 cursor-pointer md:right-0 md:p-2 hover:rotate-6">
      <img src={carrito} alt="carrito" />
      {cartProducts.length !== 0 && (
        <span className="absolute top-2 md:top-3 left-12 h-5 w-5 rounded-3xl bg-red-600 border-spacing-y-7 text-white text-center text-sm animate-bounce shadow-md">
          {inCartAlert}
        </span>
      )}
    </div>
  );
};

export default CartWidget;

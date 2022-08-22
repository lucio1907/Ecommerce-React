import { carrito } from "../../img";

const CartWidget = () => {
  return (
    <div className="absolute top-2 w-20 md:top-0 cursor-pointer md:right-0 md:p-2 hover:rotate-6">
      <img src={carrito} />
    </div>
  );
};

export default CartWidget;

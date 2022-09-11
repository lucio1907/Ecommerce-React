import CartProducts from "../components/Cart/CartProducts";
import useAppContext from "../hooks/useAppContext";

const Cart = () => {
  const { cartProducts } = useAppContext();

  return (
    <div className="absolute w-full h-full">
      <div className="mt-5 flex justify-center items-center">
        <h1 className="text-2xl md:text-3xl font-semibold uppercase text-orange-500 absolute top-28 mt-2">
          Tus Productos:{" "}
        </h1>
      </div>

      {cartProducts.length === 0 ? (
        <div className="text-sm text-center font-bold h-screen flex items-center justify-center p-7 md:text-2xl">
          Todavía no agregaste ningun producto, ¡Agrega uno!
        </div>
      ) : (
        <CartProducts cartProducts={cartProducts}/>
      )}
    </div>
  );
};

export default Cart;

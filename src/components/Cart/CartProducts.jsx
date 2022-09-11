import ButtonsCart from "./ButtonsCart";
import ConfirmPurchase from "./ConfirmPurchase";
import EmptyCartButton from "./EmptyCartButton";
import { P, Span } from "./stylesCart";

const CartProducts = ({ cartProducts }) => {
  return (
    <div className="h-full relative top-32">
      {cartProducts.map((info) => (
        <div
          key={info.id}
          className="w-full flex flex-col justify-around p-5 gap-5 md:flex-row md:items-center md:whitespace-nowrap md:gap-12 border-b-2"
        >
          <div className="flex justify-center">
            <img
              src={info.pictureUrl}
              alt={info.title}
              className="p-5 mt-5 w-72 object-contain h-96 md:w-96 md:h-72 border-l-2 border-r-2"
            />
          </div>
          <P className="text-2xl">{info.title}</P>
          <div className="text-center mt-3 font-bold">
            <P className="text-xl">Descripción: </P>
            <span className="text-gray-400 font-medium">{info.desc}</span>
          </div>
          <div className="text-center font-bold text-lg mt-3">
            <P className="text-xl">Precio Final: </P>
            <Span>
              ${info.quantity * info.price}{" "}
              {`(${info.quantity} X $${info.price})`}
            </Span>
          </div>
          <ButtonsCart info={info.id} />
        </div>
      ))}
      <div className="flex flex-col items-center gap-5">
        <ConfirmPurchase />
        {"- O -"}
        <EmptyCartButton />
      </div>
    </div>
  );
};

export default CartProducts;

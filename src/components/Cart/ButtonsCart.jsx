import useAppContext from "../../hooks/useAppContext";
import { LabelButtons } from "./stylesCart";
import { Link } from "react-router-dom";

const ButtonsCart = ({ id, quantity }) => {
  const { removeItem } = useAppContext();

  return (
    <div className="flex md:flex-col mt-4 md:gap-5 justify-around">
      <button
        className="p-3 md:h-14 md:w-44 bg-red-500 rounded-md text-white shadow hover:bg-red-600 transition-all duration-300"
        onClick={() => removeItem(id, quantity)}
      >
        <LabelButtons>Eliminar</LabelButtons>
      </button>

      <Link to={`/itemDetails/product/${id}`}>
        <button
          className="p-3 md:h-14 md:w-44 bg-blue-400 rounded-md text-white shadow hover:bg-blue-500 transition-all duration-300"
          onClick={() => removeItem(id, quantity)}
        >
          <LabelButtons>Editar</LabelButtons>
        </button>
      </Link>
    </div>
  );
};

export default ButtonsCart;

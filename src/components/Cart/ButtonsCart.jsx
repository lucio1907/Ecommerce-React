import useAppContext from "../../hooks/useAppContext";
import { LabelButtons } from "./stylesCart";

const ButtonsCart = ({ info }) => {
  const { removeItem } = useAppContext();

  return (
    <div className="flex md:flex-col mt-4 md:gap-5 justify-around">
      <button
        className="p-3 md:h-14 md:w-44 bg-slate-300 rounded-md shadow hover:bg-slate-400 transition-all duration-300"
        onClick={() => removeItem(info)}
      >
        <LabelButtons>Eliminar</LabelButtons>
      </button>
    </div>
  );
};

export default ButtonsCart;

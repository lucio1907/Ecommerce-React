import { NavLink } from "react-router-dom";

const ConfirmPurchase = () => {
  return (
    <div>
      <NavLink to="/form">
        <button className="border-y-2 border-x-2 border-solid border-black p-3 w-52 hover:bg-black hover:text-white transition-all duration-300 font-bold animate-pulse">
          Confirmar Compra
        </button>
      </NavLink>
    </div>
  );
};

export default ConfirmPurchase;

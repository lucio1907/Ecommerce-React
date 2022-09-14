import useAppContext from "../../hooks/useAppContext";

const TotalPrice = () => {
  const { totalPrice } = useAppContext();
  return (
    <div className="relative w-full p-2 top-36 right-0 mt-2 md:fixed md:z-10 md:top-28 md:w-auto md:p-0 md:px-8 md:py-2 md:rounded-l-md bg-orange-400 text-center shadow-2xl">
      <p className="md:text-2xl font-bold animate-pulse">
        Total a Pagar: ${totalPrice()}
      </p>
    </div>
  );
};

export default TotalPrice;

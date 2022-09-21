import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import FormInputs from "../components/FormInputs/FormInputs";
import Order from "../components/Order/Order";
import { DB } from "../firebase/firebaseconfig";
import useAppContext from "../hooks/useAppContext";

const Form = () => {
  const { cartProducts, emptyCart } = useAppContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [home, setHome] = useState("");
  const [userOrder, setUserOrder] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [buttonSubmitValue, setButtonSubmitValue] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();

    const order = {
      buyer: {
        name,
        email,
        number,
        city,
        home,
      },
      items: cartProducts,
      date: serverTimestamp(),
    };

    if (cartProducts.length !== 0) {
      const orderCollection = collection(DB, "orders");
      // Change the value of button submit if order is not ready
      setButtonSubmitValue(true);
      addDoc(orderCollection, order)
        .then((res) => {
          setOrderId(res.id);
          emptyCart();
          setUserOrder(order);
        })
        .catch((error) => console.error(error))
        .finally(() => setButtonSubmitValue(false));
    }
  };

  if (orderId) {
    return <Order userOrder={userOrder} orderId={orderId} />;
  }

  return (
    <div className="h-full relative top-32">
      <h2 className="text-xl md:text-3xl font-semibold uppercase p-4 text-orange-500 mt-1 md:mt-2 md:text-center">
        Rellená este formulario para completar la compra
      </h2>
      <form onSubmit={handleSumbit} className="md:mt-10">
        <FormInputs
          setName={setName}
          setEmail={setEmail}
          setNumber={setNumber}
          setCity={setCity}
          setHome={setHome}
          buttonSubmitValue={buttonSubmitValue}
        />
      </form>
    </div>
  );
};

export default Form;

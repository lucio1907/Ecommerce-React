import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { ButtonBack } from "../components/Main/items/detail/stylesFinishButton";
import Order from "../components/Order/Order";
import { DB } from "../firebase/firebaseconfig";
import useAppContext from "../hooks/useAppContext";

const Form = () => {
    const { cartProducts, emptyCart } = useAppContext();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [home, setHome] = useState('');
    const [userOrder, setUserOrder] = useState([]);
    const [orderId, setOrderId] = useState('');

    const handleSumbit = (e) => {
        e.preventDefault();

        const order = {
            buyer: {
                name,
                email,
                number,
                city,
                home
            },
            items: cartProducts,
            date: serverTimestamp(),
        }

        if (cartProducts.length !== 0) {
            const orderCollection = collection(DB, 'orders')
            addDoc(orderCollection, order).then(res => {
                setOrderId(res.id)
                emptyCart();
                setUserOrder(order)
            })
        }
        
    }

    if (orderId) {
        return <Order userOrder={userOrder} orderId={orderId}/>
    }
    
    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleNumber = (e) => {
        setNumber(e.target.value);
    }

    const handleCity = (e) => {
        setCity(e.target.value);
    }

    const handleHome = (e) => {
        setHome(e.target.value);
    }
  return (
    <div className="h-full relative top-32">
      <h2 className="text-xl md:text-3xl font-semibold uppercase p-4 text-orange-500 mt-1 md:mt-2 md:text-center">
        Rellená este formulario para completar la compra
      </h2>
      <form onSubmit={handleSumbit} className='md:mt-10'>
        <label htmlFor="nombre" className="relative left-5 font-semibold md:left-1/4">
          Nombre completo:
        </label>

        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Escribe tu nombre completo"
            className="border rounded-md w-72 placeholder:text-center h-10 shadow md:w-3/6 md:mt-1"
            onChange={handleName}
            required
          />
        </div>

        <label htmlFor="email" className="relative left-5 top-7 font-semibold md:left-1/4">
          Email:
        </label>
        <div className="flex flex-col items-center mt-7">
          <input
            type="text"
            placeholder="Escribe tu Email"
            className="border rounded-md w-72 placeholder:text-center h-10 shadow md:w-3/6 md:mt-1"
            onChange={handleEmail}
            required
          />
        </div>

        <label htmlFor="numero" className="relative left-5 top-7 font-semibold md:left-1/4">
          Número de celular:
        </label>
        <div className="flex flex-col items-center mt-7">
          <input
            type="number"
            placeholder="Escribe tu Número"
            className="border rounded-md w-72 placeholder:text-center h-10 shadow md:w-3/6 md:mt-1"
            onChange={handleNumber}
            required
          />
        </div>

        <label htmlFor="ciudad" className="relative left-5 top-7 font-semibold md:left-1/4">
          Ciudad:
        </label>
        <div className="flex flex-col items-center mt-7">
          <input
            type="text"
            placeholder="Escribe la ciudad donde resides"
            className="border rounded-md w-72 placeholder:text-center h-10 shadow md:w-3/6 md:mt-1"
            onChange={handleCity}
            required
          />
        </div>

        <label
          htmlFor="domicilio"
          className="relative left-5 top-7 font-semibold md:left-1/4"
        >
          Domicilio:
        </label>
        <div className="flex flex-col items-center mt-7">
          <input
            type="text"
            placeholder="Escribe tu domicilio actual"
            className="border rounded-md w-72 placeholder:text-center h-10 shadow md:w-3/6 md:mt-1"
            onChange={handleHome}
            required
          />
        </div>

        <div className="w-100 flex justify-center">
          <ButtonBack className="mt-16" >Confirmar Compra</ButtonBack>
        </div>
      </form>
    </div>
  );
};

export default Form;

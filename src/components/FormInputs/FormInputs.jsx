import { useState } from "react";
import { ButtonBack } from "../Main/items/detail/stylesFinishButton";

const FormInputs = ({ setName, setEmail, setNumber, setCity, setHome, buttonSubmitValue }) => {


  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleHome = (e) => {
    setHome(e.target.value);
  };

  
  return (
    <div>
      <label
        htmlFor="nombre"
        className="relative left-5 font-semibold md:left-1/4"
      >
        Nombre completo:
      </label>

      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Escribe tu nombre completo"
          className="border rounded-md w-72 placeholder:text-center h-10 shadow md:w-3/6 md:mt-1 px-3 focus-visible:outline-none focus-visible:bg-slate-200 focus-visible:placeholder:text-gray-600"
          onChange={handleName}
          minLength={4}
          required
        />
      </div>

      <label
        htmlFor="email"
        className="relative left-5 top-7 font-semibold md:left-1/4"
      >
        Email:
      </label>
      <div className="flex flex-col items-center mt-7">
        <input
          type="text"
          placeholder="Escribe tu Email"
          className="border rounded-md w-72 placeholder:text-center h-10 shadow md:w-3/6 md:mt-1 px-3 focus-visible:outline-none focus-visible:bg-slate-200 focus-visible:placeholder:text-gray-600"
          onChange={handleEmail}
          pattern='^[^@]+@[^@]+\.[a-zA-Z]{2,}$'
          required
        />
      </div>

      <label
        htmlFor="numero"
        className="relative left-5 top-7 font-semibold md:left-1/4"
      >
        Número de celular:
      </label>
      <div className="flex flex-col items-center mt-7">
        <input
          type="number"
          placeholder="Escribe tu Número"
          className="border rounded-md w-72 placeholder:text-center h-10 shadow md:w-3/6 md:mt-1 px-3 focus-visible:outline-none focus-visible:bg-slate-200 focus-visible:placeholder:text-gray-600"
          onChange={handleNumber}
          required
        />
      </div>

      <label
        htmlFor="ciudad"
        className="relative left-5 top-7 font-semibold md:left-1/4"
      >
        Ciudad:
      </label>
      <div className="flex flex-col items-center mt-7">
        <input
          type="text"
          placeholder="Escribe la ciudad donde resides"
          className="border rounded-md w-72 placeholder:text-center h-10 shadow md:w-3/6 md:mt-1 px-3 focus-visible:outline-none focus-visible:bg-slate-200 focus-visible:placeholder:text-gray-600"
          onChange={handleCity}
          minLength={4}
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
          className="border rounded-md w-72 placeholder:text-center h-10 shadow md:w-3/6 md:mt-1 px-3 focus-visible:outline-none focus-visible:bg-slate-200 focus-visible:placeholder:text-gray-600"
          onChange={handleHome}
          required
        />
      </div>

      <div className="w-100 flex justify-center">
        <ButtonBack className="mt-16" >{buttonSubmitValue ? 'Procesando compra...' : 'Confirmar Compra'}</ButtonBack>
      </div>
    </div>
  );
};

export default FormInputs;

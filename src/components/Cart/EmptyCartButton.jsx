import React from "react";
import useAppContext from "../../hooks/useAppContext";
import Swal from "sweetalert2";

const EmptyCartButton = () => {
  const { emptyCart } = useAppContext();

  const deleteAlert = () => {
    const swalButtons = Swal.mixin({
      customClass: {
        confirmButton: "p-2 bg-green-500 hover:bg-green-400 rounded font-bold text-white px-5",
        cancelButton: "p-2 bg-red-500 hover:bg-red-400 mr-5 rounded font-bold text-white px-5",
      },
      buttonsStyling: false,
    });

    swalButtons
      .fire({
        title: "¿Está seguro/a de vaciar el carrito?",
        text: "Se eliminarán todos los productos",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          emptyCart();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalButtons.fire(
            "Se canceló la operación",
            "Los productos seguirán en su carrito",
            "error"
          );
        }
      });
  };

  return (
    <div>
      <button
        className="border-y-2 border-x-2 border-solid border-black p-3 w-52 hover:bg-red-600 hover:text-white transition-all duration-300 font-bold"
        onClick={deleteAlert}
      >
        Vaciar Carrito
      </button>
    </div>
  );
};

export default EmptyCartButton;

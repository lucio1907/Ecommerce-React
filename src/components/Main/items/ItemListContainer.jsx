import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../../../mocks/products";
import ItemList from "./ItemList";
import Spinner from "../../services/Spinner";

const ItemListContainer = () => {
  let { id } = useParams();

  const [item, setItem] = useState();
  const [spinner, setSpinner] = useState(false);

  const getProducts = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        const productsFilter = products.filter(prod => prod.category === id)
        resolve(id ? productsFilter : products);
      }, 2000);
    });

  useEffect(() => {
    setSpinner(true);
    getProducts()
      .then((product) => {
        setSpinner(false);
        setItem(product);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-full p-6 mt-14 h-full">
        {spinner ? <Spinner /> : item && <ItemList item={item} />}
      </div>
    </div>
  );
};

export default ItemListContainer;

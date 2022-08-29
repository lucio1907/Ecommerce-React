import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { products } from "../../../mocks/products";
import ItemList from "./ItemList";
import Spinner from "../../services/Spinner";
import useAppContext from "../../../hooks/useAppContext";

const ItemListContainer = () => {
  let { id } = useParams();

  const { item, setItem, setSpinner, spinner, setIdRoute } = useAppContext();

  const getProducts = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
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
    setIdRoute(id);
  }, [id]);

  return (
    <div className="w-full">
      {spinner ? <Spinner /> : item && <ItemList id={id} />}
    </div>
  );
};

export default ItemListContainer;

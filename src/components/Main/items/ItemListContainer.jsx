import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../../../mocks/products";
import ItemList from "./ItemList";
import Spinner from "../../services/Spinner";
import useAppContext from "../../../hooks/useAppContext";
import Footer from "../../Footer/Footer";

const ItemListContainer = () => {
  let { id } = useParams();

  const { loading, isLoading } = useAppContext();

  const [item, setItem] = useState();

  const getProducts = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const productsFilter = products.filter((prod) => prod.category === id);
        resolve(id ? productsFilter : products);
      }, 2000);
    });

  useEffect(() => {
    isLoading(true);
    getProducts()
      .then((product) => {
        isLoading(false);
        setItem(product);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full p-6 mt-14 h-full">
          {loading ? <Spinner /> : item && <ItemList item={item} />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemListContainer;

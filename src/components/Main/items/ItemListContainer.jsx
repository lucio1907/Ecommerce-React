import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DB } from "../../../firebase/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Spinner from "../../services/Spinner";
import useAppContext from "../../../hooks/useAppContext";
import Footer from "../../Footer/Footer";

const ItemListContainer = () => {
  let { id } = useParams();
  
  const { loading, isLoading } = useAppContext();

  const [item, setItem] = useState();

  useEffect(() => {
    isLoading(true);
    const productsCollection = collection(DB, "products");
    const q = query(productsCollection, where('category', '==', id))
    getDocs(id ? q : productsCollection)
      .then((res) => {
        const products = res.docs.map((item) => {
          // Firestore method data()
          return {
            id: item.id,
            ...item.data(),
          };
        });
        setItem(products);
      })
      .catch((error) => console.error(error))
      .finally(() => isLoading(false));
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

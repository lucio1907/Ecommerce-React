import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/Main/items/detail/ItemDetail";
import { getDoc, doc, collection } from "firebase/firestore";
import { DB } from "../firebase/firebaseconfig";
import useAppContext from "../hooks/useAppContext";
import Spinner from "../components/services/Spinner";

const ItemDetailContainer = () => {
  let { itemId } = useParams();
  const { loading, isLoading } = useAppContext();

  const [item, setItem] = useState({});

  useEffect(() => {
    isLoading(true);
    const productCollection = collection(DB, "products");
    const ref = doc(productCollection, itemId);

    getDoc(ref)
      .then((res) => {
        setItem({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((error) => console.error(error))
      .finally(() => isLoading(false));
  }, []);

  return loading ? <Spinner /> : <ItemDetail item={item} /> ;
};

export default ItemDetailContainer;

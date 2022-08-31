import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/Main/items/detail/ItemDetail";
import { products } from "../mocks/products";

const ItemDetailContainer = () => {
  let { itemId } = useParams();

  const [item, setItem] = useState([...products]);

  useEffect(() => {
    const getProductDetails = () =>
      new Promise((resolve, reject) => {
        resolve(products);
      });
    getProductDetails().then((prod) => setItem(prod));
  }, []);

  const uniqueProduct = item.find(prod => prod.id === Number(itemId));

  return <ItemDetail uniqueProduct={uniqueProduct}/>;
};

export default ItemDetailContainer;

import { useEffect, useState } from "react";
import Spinner from "../../services/Spinner";
import Item from "./Item";

const ItemList = () => {
  const url = "info.json";

  const [item, setItem] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const fetchJson = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setItem(data);
    setSpinner(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchJson();
    }, 2000);
  }, []);
  return (
    <div className="w-full">
      {spinner && <Spinner />}
      <Item item={item} />
    </div>
  );
};

export default ItemList;

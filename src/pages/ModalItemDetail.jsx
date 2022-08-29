import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/Main/items/detail/ItemDetailContainer";

const ModalItemDetail = () => {
  let { itemId } = useParams();
  return <ItemDetailContainer itemId={itemId}/>
};

export default ModalItemDetail;

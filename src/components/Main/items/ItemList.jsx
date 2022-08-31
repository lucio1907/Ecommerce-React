import Item from "./Item";
import useAppContext from "../../../hooks/useAppContext"

const ItemList = ({item}) => {
  return (
    <div className="w-full">
      <Item item={item} />
    </div>
  );
};

export default ItemList;

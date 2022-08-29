import Item from "./Item";
import useAppContext from "../../../hooks/useAppContext"

const ItemList = ({id}) => {
  const { item } = useAppContext();
  return (
    <div className="w-full">
      <Item item={item} id={id} />
    </div>
  );
};

export default ItemList;

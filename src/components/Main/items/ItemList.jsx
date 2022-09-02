import Item from "./Item";

const ItemList = ({item}) => {
  return (
    <div className="w-full">
      <Item item={item} />
    </div>
  );
};

export default ItemList;

import ItemListContainer from "../components/Main/items/ItemListContainer";
import ItemCount from "../components/Main/items/ItemCount";
import ItemList from "../components/Main/items/ItemList";

const Inicio = ({menuHide}) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <section className="w-full p-6 mt-10 h-full">
        <ItemListContainer>

          <ItemList />
          {/* <ItemCount stock={5} menuHide={menuHide}/> */}
        </ItemListContainer>
      </section>
    </div>
  );
};

export default Inicio;

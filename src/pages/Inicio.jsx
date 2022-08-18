import ItemListContainer from "../components/Main/items/ItemListContainer";
import ItemCount from "../components/Main/items/ItemCount";

const Inicio = ({menuHide}) => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <section>
        <ItemListContainer>
          <ItemCount stock={5} menuHide={menuHide}/>
        </ItemListContainer>
      </section>
    </div>
  );
};

export default Inicio;

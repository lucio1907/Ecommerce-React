import useAppContext from "../../../../hooks/useAppContext";
import ItemCount from "../ItemCount";
import {
  ContainerDetail,
  Img,
  Title,
  DescriptionParagraph,
  StockAlert,
} from "./stylesDetailModal";

const ItemDetailContainer = ({ itemId }) => {
  const { item, index, idRoute } = useAppContext();
  let i = index - 1;

  // Substract 1 from index so that the value is correct
  itemId = itemId - 1;
  const product = item.filter((prod) => prod);

  let itemDetail;

  switch (idRoute) {
    case "remeras":
      itemDetail = product[i].remeras[itemId];
      break;
    case "buzos":
      itemDetail = product[i].buzos[itemId];
      break;

    case "zapatillas":
      itemDetail = product[i].zapatillas[itemId];
      break;

    case "outfits":
      itemDetail = product[i].outfits[itemId];
      break;
    default:
      break;
  }

  const { title, pictureUrl, desc, price, availableSize, stock } = itemDetail;
  return (
    <ContainerDetail>
      <Title>{title}</Title>
      <Img src={pictureUrl} alt={title} />
      <div className="flex flex-col w-full h-24 items-center justify-between lg:relative md:bottom-40 md:pr-28 md:pl-5">
        <span className="text-3xl font-thin mb-2 md:text-4xl">
          Descripción:
        </span>
        <DescriptionParagraph>{desc}</DescriptionParagraph>
        <span className="text-xs md:text-sm">
          {stock <= 0 ? (
            <StockAlert>No hay Stock Disponible</StockAlert>
          ) : (
            availableSize
          )}
        </span>
        <span className="text-3xl font-thin mt-5">
          {stock <= 0 ? "" : "Precio:"}
        </span>
        <span className="font-bold text-lg">
          {stock <= 0 ? "" : `$${price}`}
        </span>
        <ItemCount stock={stock} />
      </div>
    </ContainerDetail>
  );
};

export default ItemDetailContainer;

import {
  ContainerDetail,
  Img,
  Title,
  DescriptionParagraph,
  StockAlert,
} from "./stylesDetailModal";
import ItemCount from "../ItemCount";

const ItemDetail = ({ uniqueProduct }) => {
  const { title, pictureUrl, desc, price, availableSize, stock } = uniqueProduct;

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

export default ItemDetail;

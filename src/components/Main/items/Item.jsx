import {
  ContainerFatherItem,
  ContainerItem,
  ContainerDetails,
  InputDetail,
  PriceDetail,
  TextStock,
} from "../stylesMain";

const Item = ({ item }) => {
  return (
    <ContainerFatherItem item={item}>
      {item.map((info) => (
        <ContainerItem key={info.id}>
          <h2 className="text-2xl font-medium ">{info.title}</h2>
          <img src={info.pictureUrl} alt={info.title} />
          <span className="text-xs font-medium text-gray-400">{info.desc}</span>
          <ContainerDetails>
            <PriceDetail stock={info.stock}>${info.price}</PriceDetail>
            <InputDetail type="button" value="Ver Detalle" />
          </ContainerDetails>
          <TextStock stock={info.stock}>
            {!info.stock ? "No hay Stock Disponible" : "¡Stock Disponible!"}
          </TextStock>
        </ContainerItem>
      ))}
    </ContainerFatherItem>
  );
};

export default Item;

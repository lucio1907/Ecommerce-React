import {
  ContainerFatherItemsHome,
  ContainerItem,
  Img,
  ContainerDetails,
  PriceDetail,
  InputDetail,
  TextStock,
} from "../../components/Main/stylesMain";
import useAppContext from "../../hooks/useAppContext";
import { Link } from "react-router-dom";

const ProductsHome = () => {
  const { productsHomeFilter } = useAppContext();

  return (
    <ContainerFatherItemsHome>
      {productsHomeFilter.map((info) => (
        <ContainerItem key={info.id}>
          <h2 className="text-lg font-medium">{info.title}</h2>

          <Img src={info.pictureUrl} alt={info.title} />

          <span className="text-xs font-medium md:text-sm text-gray-400">
            {info.desc}
          </span>

          <ContainerDetails>
            <PriceDetail stock={info.stock}>${info.price}</PriceDetail>
            <Link to={`/itemDetails/product/${info.id}`}>
              <InputDetail type="button" value="Ver Detalle" />
            </Link>
          </ContainerDetails>
          <TextStock stock={info.stock}>
            {!info.stock ? "No hay Stock Disponible" : "¡Stock Disponible!"}
          </TextStock>
        </ContainerItem>
      ))}
    </ContainerFatherItemsHome>
  );
};

export default ProductsHome;

import { Fragment } from "react/jsx-runtime";
import { ProductDto } from "../../Models/ProductDto";

interface IProps {
  item: ProductDto;
}

const Product: React.FunctionComponent<IProps> = ({ item }) => {
  return (
    <Fragment>
      <p>This is a product: {item.summary}</p>
    </Fragment>
  );
};

export default Product;

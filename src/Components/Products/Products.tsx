import { Fragment } from "react/jsx-runtime";
import Product from "../Product/Product";
import { ProductDto } from "../../Models/ProductDto";

interface IProps {
    products: Array<ProductDto>
}

const Products: React.FunctionComponent<IProps> = ({products}) => {
  return (
    <Fragment>
        <h2>Products</h2>
      <div>
        {Array.from(products.values()).map((product: ProductDto) => (
          <Product
            key={product.date}
            item={product}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Products;
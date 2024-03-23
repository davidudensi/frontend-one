import { Fragment } from "react/jsx-runtime";
import Products from "../../Components/Products/Products";
import { useEffect, useState } from "react";
import ProductService from "../../Services/ProductService";
import { ProductDto } from "../../Models/ProductDto";

const Home: React.FunctionComponent = () => {
  const productService = new ProductService();
  const [products, setProducts] = useState<Array<ProductDto>>([]);

  useEffect(() => {
    const getProducts = async () => {
      const all_products = await productService.fetchProducts();
      setProducts(all_products);
    };
    getProducts();
  }, []);

  return (
    <Fragment>
      <div>
        <h1>Welcome to Home</h1>
        <Products products={products} />
      </div>
    </Fragment>
  );
};

export default Home;

import { ProductDto } from "../Models/ProductDto";

class ProductService {
  fetchProducts = async (): Promise<Array<ProductDto>> => {
    const endpoint: string =
      process.env.REACT_APP_BACKEND_ENDPOINT ||
      "http://localhost:5142/weatherforecast";
    console.log({ endpoint });

    const test: string = process.env.REACT_APP_TEST || "string is empty";
    console.log({ test });

    const response = await fetch(endpoint);
    const result = await response.json();

    return result;
  };
}

export default ProductService;

import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Product from "./Product";

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useTypedSelector(state => state.products);
  const productData = products.find(el => el.id === Number(id));

  return(
    <div>
      {productData ? (
        <Product item={productData} />
      ) : (
        <p>Product not found</p>
      )}
    </div>
  )
}

export default SingleProduct;
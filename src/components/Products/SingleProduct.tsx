import { useNavigate, useParams } from "react-router-dom";
import { productsApi } from "../../store/services/productsApi";

import Product from "./Product";
import { useEffect } from "react";
import { ROUTES } from "../../utils/routes";
import Products from "./Products";
import { relatedProducts } from "../../utils/functions";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {data: product, isLoading, isSuccess, isFetching } = productsApi.useGetProductByIdQuery(Number(id));
  const {data: products} = productsApi.useGetAllProductsQuery('');
  const related = relatedProducts(products || [], product?.category.id || -1);

  useEffect(() => {
    if(!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME)
    }
  }, [isLoading, isSuccess, isFetching, navigate])
  
  return !product ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product item={product} />
      {related && <Products products={related} amount={5} title='Related products' />}
    </>
  );

}

export default SingleProduct;
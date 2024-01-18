import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIDQuery } from "../../features/services/fakeApi";
import { useEffect } from "react";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";
import Products from "./Products";
import { useGetAllProductsQuery } from "../../features/services/fakeApi";
import { relatedProducts } from "../../utils/functions";

const SingleProduct = () => {
  const { id } = useParams();
  const productId = Number(id);
  const { data: product, isLoading, isFetching, isSuccess } = useGetProductByIDQuery(productId);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess ) {
      navigate(ROUTES.HOME);
    }
  },[isLoading, isFetching, isSuccess, navigate])

  const { data: products } = useGetAllProductsQuery(null)
  if (!product) return <section className="preloader">Loading...</section>;
  const related = relatedProducts(products, product.category?.id);
  
  return (
    <>
      <Product {...product} />
      <Products products={related} amount={5} title="Related products" />
    </>
  );
};

export default SingleProduct;

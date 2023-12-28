import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIDQuery } from "../../features/services/fakeApi";
import { useEffect } from "react";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";

const SingleProduct = () => {
  const { id } = useParams();
  const productId = Number(id);
  const { data, isLoading, isFetching, isSuccess } = useGetProductByIDQuery(productId);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess ) {
      navigate(ROUTES.HOME);
    }
  },[isLoading, isFetching, isSuccess, navigate])

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product {...data} />   
    </>
    //<Products products={related} amount={5} title="Related products" />
  );
};

export default SingleProduct;

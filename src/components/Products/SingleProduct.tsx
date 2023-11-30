import { useNavigate, useParams } from "react-router-dom";
import { productsApi } from "../../store/services/productsApi";

import Product from "./Product";
import { useEffect } from "react";
import { ROUTES } from "../../utils/routes";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, isFetching } = productsApi.useGetProductByIdQuery(Number(id));

  useEffect(() => {
    if(!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME)
    }
  }, [isLoading, isSuccess, isFetching, navigate])
  
  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product item={data} />
    </>
  );

}

export default SingleProduct;
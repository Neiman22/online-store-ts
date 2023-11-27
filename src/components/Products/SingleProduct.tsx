import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import Product from "./Product";

const SingleProduct = () => {
  const { id } = useParams();
  const { fetchSingleProduct } = useActions();
  const data = useTypedSelector(state => state.product.data);

  useEffect(() => {
    fetchSingleProduct(Number(id));
  }, [id])

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product item={data} />
    </>
  );
}

export default SingleProduct;
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";


import Banner from "../Baner/Baner";
import Categories from "../Categories/Categories";
import Poster from "../Poster/Poster"
import Products from "../Products/Products"
import { filterByPrice } from "../../features/action-creator/products";

const Home = () => {
  const dispatch = useDispatch();
  const {products: {products, filtered}, categories} = useTypedSelector(state => state);
  console.log(products);

  useEffect(() => {
    if(!products.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, products.length]);
  console.log(filtered);

  return (
    <>
      <Poster />
      <Products products={products} amount={5} title='Trending' />
      <Categories categories={categories.categories} amount={5} title='Worth seeing' />
      <Banner />
      <Products products={filtered} amount={5} title='Trending' />
    </>
  )
}

export default Home
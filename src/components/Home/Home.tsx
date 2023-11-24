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
  const { categories } = useTypedSelector(state => state.categories);
  const { products, filtered } = useTypedSelector(state => state.products);

  useEffect(() => {
    if(!products.length) return;
    dispatch(filterByPrice(100));
  }, [dispatch, products.length]);

  return (
    <>
      <Poster />
      <Products products={products} amount={5} title='Trending' />
      <Categories categories={categories} amount={5} title='Worth seeing' />
      <Banner />
      <Products products={filtered} amount={5} title='Less than 100$' />
    </>
  )
}

export default Home
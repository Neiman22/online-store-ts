import { useGetAllCategoriesQuery, useGetAllProductsQuery } from "../../store/services/productsApi";

import Banner from "../Baner/Baner";
import Categories from "../Categories/Categories";
import Poster from "../Poster/Poster"
import Products from "../Products/Products"

import { filterProductsByPrice } from "../../utils/functions";

const Home = () => {
  const {data: products} = useGetAllProductsQuery('');
  const {data: categories} = useGetAllCategoriesQuery('');
  const filteredProducts = filterProductsByPrice(products, 100);

  return (
    <>
      <Poster />
      <Products products={products ?? []} amount={5} title='Trending' />
      <Categories categories={categories ?? []} amount={5} title='Worth seeing' />
      <Banner />
      <Products products={filteredProducts ?? []} amount={5} title='Less than 100$' />
    </>
  )
}

export default Home
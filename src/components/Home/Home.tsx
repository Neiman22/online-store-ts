import { categoriesApi } from "../../store/services/categoriesApi";
import { productsApi } from "../../store/services/productsApi";

import Banner from "../Baner/Baner";
import Categories from "../Categories/Categories";
import Poster from "../Poster/Poster"
import Products from "../Products/Products"

import { filterProductsByPrice } from "../../utils/functions";

const Home = () => {
  const {data: products} = productsApi.useGetAllProductsQuery('');
  const {data: categories} = categoriesApi.useGetAllCategoriesQuery('');
  const filtered = filterProductsByPrice(products, 100);

  return (
    <>
      <Poster />
      <Products products={products ?? []} amount={5} title='Trending' />
      <Categories categories={categories ?? []} amount={5} title='Worth seeing' />
      <Banner />
      <Products products={filtered ?? []} amount={5} title='Less than 100$' />
    </>
  )
}

export default Home
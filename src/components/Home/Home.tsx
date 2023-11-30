import { categoriesApi } from "../../store/services/categoriesApi";
import { productsApi } from "../../store/services/productsApi";

import Banner from "../Baner/Baner";
import Categories from "../Categories/Categories";
import Poster from "../Poster/Poster"
import Products from "../Products/Products"

import { IProduct } from "../../store/types";

const Home = () => {
  const {data: products} = productsApi.useGetAllProductsQuery('');
  const {data: categories} = categoriesApi.useGetAllCategoriesQuery('');

  const filterProductsByPrice = (products: IProduct[], maxPrice: number) => {
    return products.filter((product) => product.price < maxPrice);
  };
  const filtered = products ? filterProductsByPrice(products, 100) : [];

  return (
    <>
      <Poster />
      {products && <Products products={products} amount={5} title='Trending' />}
      {categories && <Categories categories={categories} amount={5} title='Worth seeing' />}
      <Banner />
      <Products products={filtered} amount={5} title='Less than 100$' />
    </>
  )
}

export default Home
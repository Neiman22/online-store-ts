import { useGetAllCategoriesQuery, useGetAllProductsQuery } from "../../features/services/fakeApi";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { filterByPrice } from "../../utils/functions";

const Home = () => {
  const { data: products } = useGetAllProductsQuery(null);
  const { data: categories } = useGetAllCategoriesQuery(null);
  const filtered = filterByPrice(products, 100);

  return (
    <>
      <Poster />
      <Products products={products} amount={5} title='Trending' />
      <Categories categories={categories} amount={5} title="Worth seeing" />
      <Banner />
      <Products products={filtered} amount={5} title="Less than 100$" />
    </>
  );
};

export default Home;

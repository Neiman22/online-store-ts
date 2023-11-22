import { useTypedSelector } from "../../hooks/useTypedSelector";
import Categories from "../Categories/Categories";
import Poster from "../Poster/Poster"
import Products from "../Products/Products"

const Home = () => {
  const {products, categories} = useTypedSelector(state => state);

  return (
    <>
      <Poster />
      <Products products={products.products} amount={5} title='Trending' />
      <Categories categories={categories.categories} amount={5} title='Worth seeing' />
    </>
  )
}

export default Home
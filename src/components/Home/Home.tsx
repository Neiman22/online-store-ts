import { useActions } from "../../hooks/useActions"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Poster from "../Poster/Poster"
import Products from "../Products/Products"

const Home = () => {
  const { products } = useTypedSelector(({ products }) => products);
  return (
    <>
      <Poster />
      <Products products={products} amount={5} title='Trending'/>
    </>
  )
}

export default Home